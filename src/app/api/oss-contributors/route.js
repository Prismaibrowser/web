export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const github = String(body?.github ?? '').trim();
    const portfolio = String(body?.portfolio ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !email) {
      return Response.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTRIBUTION_EMAIL_TO || 'nobinsijo360t@gmail.com';
    const sender = process.env.RESEND_FROM_EMAIL || 'PrismSpace Contributions <onboarding@resend.dev>';

    if (!resendApiKey) {
      console.error('[oss-contributors] missing RESEND_API_KEY');
      return Response.json(
        { error: 'Server is not configured to send submissions yet.' },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toISOString();
    const emailText = [
      'New PrismSpace contribution application',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `GitHub: ${github || 'Not provided'}`,
      `Portfolio: ${portfolio || 'Not provided'}`,
      '',
      'How they would like to contribute:',
      message || 'Not provided',
      '',
      `Submitted at: ${submittedAt}`
    ].join('\n');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `New contribution application from ${name}`,
        text: emailText
      })
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('[oss-contributors] Resend error', res.status, text);
      return Response.json(
        { error: 'Could not send your submission. Please try again later.' },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
