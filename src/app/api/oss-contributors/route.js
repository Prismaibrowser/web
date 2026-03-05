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

    const webhookUrl = process.env.OSS_CONTRIB_WEBHOOK_URL;
    const token = process.env.OSS_CONTRIB_WEBHOOK_TOKEN;

    if (!webhookUrl) {
      console.error('[oss-contributors] missing OSS_CONTRIB_WEBHOOK_URL');
      return Response.json(
        { error: 'Server is not configured to store submissions yet.' },
        { status: 500 }
      );
    }

    const payload = {
      name,
      email,
      github,
      portfolio,
      message,
      submittedAt: new Date().toISOString(),
      ...(token ? { token } : {})
    };

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('[oss-contributors] webhook error', res.status, text);
      return Response.json(
        { error: 'Could not store submission. Please try again later.' },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
