'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import CardNav from '@/components/CardNav';
import Footer from '@/components/Footer';
import TargetCursor from '@/components/TargetCursor';
import CustomScrollbar from '@/components/CustomScrollbar';
import ParticleEffects from '@/components/ParticleEffects';

export default function ContributePage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    github: '',
    portfolio: '',
    message: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = useMemo(
    () => [
      {
        label: 'About',
        bgColor: '#F2FFEB',
        textColor: '#010710',
        links: [
          { label: 'Team', ariaLabel: 'About Team', href: '/team' },
          { label: 'Privacy Policy', ariaLabel: 'Privacy Policy', href: '/privacy' },
          { label: 'Documentation', ariaLabel: 'Documentation' },
          { label: 'GitHub', ariaLabel: 'GitHub', href: 'https://github.com/Prismaibrowser' }
        ]
      },
      {
        label: 'Useful Links',
        bgColor: '#88E755',
        textColor: '#F2FFEB',
        links: [
          { label: 'Changelog', ariaLabel: 'Changelog' },
          { label: 'Donate Us', ariaLabel: 'Donate Us' },
          { label: 'Discord', ariaLabel: 'Discord Community' },
          { label: 'Report Bugs', ariaLabel: 'GitHub Issues' }
        ]
      },
      {
        label: 'Contact',
        bgColor: '#010710',
        textColor: '#88E755',
        links: [
          { label: 'Email', ariaLabel: 'Email us', href: 'mailto:prismaibrowser@gmail.com' },
          { label: 'X', ariaLabel: 'X', href: 'https://x.com/prismaibrowser' },
          { label: 'Reddit', ariaLabel: 'Reddit', href: 'https://www.reddit.com/user/Prism-Browser/' },
          { label: 'LinkedIn', ariaLabel: 'LinkedIn', href: 'https://www.linkedin.com/in/prism-browser-702b08385/' }
        ]
      }
    ],
    []
  );

  const setField = (key) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.github.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/oss-contributors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          github: form.github.trim(),
          portfolio: form.portfolio.trim(),
          message: form.message.trim()
        })
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ type: 'error', message: data?.error || 'Submission failed. Please try again.' });
        return;
      }

      setStatus({ type: 'success', message: 'Submitted! We will reach out soon.' });
      setForm({ name: '', email: '', github: '', portfolio: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#030A15',
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Space Grotesk, sans-serif',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <ParticleEffects />
      <CustomScrollbar />
      <TargetCursor spinDuration={2} hideDefaultCursor={!isMobile} performanceMode={isMobile} />

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(3, 10, 21, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}
      >
        <CardNav
          logo="/nav-logo.png"
          logoAlt="Prism Web Logo"
          items={navItems}
          baseColor="rgba(255, 255, 255, 0.1)"
          menuColor="#88E755"
          buttonBgColor="#88E755"
          buttonTextColor="#000"
          ease="power3.out"
        />
      </header>

      <main
        style={{
          padding: '4rem 1rem',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          width: '100%',
          boxSizing: 'border-box',
          zIndex: 10
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#88E755', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '-4rem' : '-2.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10
            }}
          >
            <button
              onClick={() => router.push('/team')}
              className="cursor-target"
              style={{
                background: 'rgba(136, 231, 85, 0.1)',
                border: '1px solid rgba(136, 231, 85, 0.3)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#88E755',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(136, 231, 85, 0.2)';
                e.target.style.borderColor = 'rgba(136, 231, 85, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(136, 231, 85, 0.1)';
                e.target.style.borderColor = 'rgba(136, 231, 85, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.451.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z" />
              </svg>
              Back to Team
            </button>
          </div>

          <h1
            style={{
              fontSize: isMobile ? '2.6rem' : '3.2rem',
              fontWeight: '700',
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 30px rgba(136, 231, 85, 0.5)',
              marginBottom: '0.75rem',
              background: 'linear-gradient(145deg, #88E755, #66CC44)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Contribute to Prism
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Share your details and how you’d like to help. We’ll reach out with next steps.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(136, 231, 85, 0.18)',
            borderRadius: '16px',
            padding: isMobile ? '1.25rem' : '1.75rem',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
          }}
        >
          <form onSubmit={submit} style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ color: '#88E755', fontWeight: 600 }}>Full name *</label>
              <input
                value={form.name}
                onChange={setField('name')}
                className="cursor-target"
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(3, 10, 21, 0.7)',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ color: '#88E755', fontWeight: 600 }}>Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={setField('email')}
                className="cursor-target"
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(3, 10, 21, 0.7)',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ color: '#88E755', fontWeight: 600 }}>GitHub *</label>
              <input
                value={form.github}
                onChange={setField('github')}
                className="cursor-target"
                placeholder="https://github.com/username"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(3, 10, 21, 0.7)',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ color: '#88E755', fontWeight: 600 }}>Portfolio (optional)</label>
              <input
                value={form.portfolio}
                onChange={setField('portfolio')}
                className="cursor-target"
                placeholder="https://your-site.com / Behance / Dribbble / LinkedIn"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(3, 10, 21, 0.7)',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ color: '#88E755', fontWeight: 600 }}>How would you like to contribute? *</label>
              <textarea
                value={form.message}
                onChange={setField('message')}
                className="cursor-target"
                placeholder="Tell us what you want to work on (features, docs, design, QA, infra, etc.). Start a conversation with the team at Prism. Share something about you, what you're looking for, or why Prism interests you. Human-written messages are more likely to get a response."
                rows={5}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(3, 10, 21, 0.7)',
                  color: '#fff',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            {status?.message && (
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: `1px solid ${status.type === 'success' ? 'rgba(136, 231, 85, 0.45)' : 'rgba(239, 68, 68, 0.45)'}`,
                  background: status.type === 'success' ? 'rgba(136, 231, 85, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                  color: status.type === 'success' ? '#88E755' : '#EF4444'
                }}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="cursor-target"
              style={{
                marginTop: '0.5rem',
                background: submitting ? 'rgba(136, 231, 85, 0.35)' : '#88E755',
                border: '1px solid rgba(136, 231, 85, 0.35)',
                borderRadius: '12px',
                padding: '12px 14px',
                color: '#000',
                fontWeight: 700,
                cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {submitting ? 'Submitting…' : 'Submit'}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
