'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GradientButtonGroup } from '@/components/ui/gradient-button-group';
import Footer from '@/components/Footer';
import TargetCursor from '@/components/TargetCursor';
import CustomScrollbar from '@/components/CustomScrollbar';

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
        bgColor: '#00df81',
        textColor: '#000000',
        links: [
          { label: 'Privacy Policy', ariaLabel: 'Privacy Policy', href: '/privacy' },
          { label: 'Documentation', ariaLabel: 'Documentation', href: '/docs' },
          { label: 'GitHub', ariaLabel: 'GitHub', href: 'https://github.com/Prismaibrowser' }
        ]
      },
      {
        label: 'Useful Links',
        bgColor: '#090c12',
        textColor: '#00df81',
        links: [
          { label: 'Changelog', ariaLabel: 'Changelog' },
          { label: 'Donate Us', ariaLabel: 'Donate Us' },
          { label: 'Discord', ariaLabel: 'Discord Community' },
          { label: 'Report Bugs', ariaLabel: 'GitHub Issues' }
        ]
      },
      {
        label: 'Contact',
        bgColor: '#000000',
        textColor: '#00df81',
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
        backgroundColor: '#00df81',
        minHeight: '100vh',
        color: '#000000',
        fontFamily: 'Space Grotesk, sans-serif',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <CustomScrollbar />
      <TargetCursor spinDuration={2} hideDefaultCursor={!isMobile} performanceMode={isMobile} />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: 'transparent',
          pointerEvents: 'auto'
        }}
      >
        <GradientButtonGroup />
      </header>

      <main
        style={{
          padding: isMobile ? '120px 5% 60px' : '140px 10% 80px',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="cursor-target"
          style={{
            marginBottom: '40px',
            background: '#000000',
            border: '1px solid #00df81',
            borderRadius: '8px',
            padding: '10px 16px',
            color: '#00df81',
            cursor: 'pointer',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '13px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 223, 129, 0.1)';
            e.target.style.transform = 'translateX(-4px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#000000';
            e.target.style.transform = 'translateX(0)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.451.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z" />
          </svg>
          BACK TO HOME
        </button>

        {/* Page Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="editorial-badge" style={{ marginBottom: '20px' }}>
            OPEN SOURCE
          </div>
          
          <h1 className="display-heading" style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            color: '#000000',
            marginBottom: '16px'
          }}>
            contribute to prismspace.
          </h1>
          
          <p style={{
            fontSize: isMobile ? '1rem' : '1.15rem',
            lineHeight: 1.6,
            color: '#000000',
            fontWeight: 600,
            maxWidth: '700px'
          }}>
            Share your details and how you'd like to help. We'll reach out with next steps.
          </p>
        </div>

        {/* Form in Obsidian Board */}
        <div className="architecture-board" style={{
          padding: isMobile ? '24px' : '40px'
        }}>
          
          <h3 className="tech-label" style={{ 
            color: '#00df81', 
            marginBottom: '24px',
            fontSize: '13px'
          }}>
            CONTRIBUTION FORM
          </h3>

          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ 
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#00df81',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Full Name *
              </label>
              <input
                value={form.name}
                onChange={setField('name')}
                className="cursor-target"
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 223, 129, 0.3)',
                  background: 'rgba(0, 0, 0, 0.4)',
                  color: '#ffffff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00df81'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0, 223, 129, 0.3)'}
              />
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ 
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#00df81',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Email *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={setField('email')}
                className="cursor-target"
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 223, 129, 0.3)',
                  background: 'rgba(0, 0, 0, 0.4)',
                  color: '#ffffff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00df81'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0, 223, 129, 0.3)'}
              />
            </div>

            {/* GitHub */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ 
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#00df81',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                GitHub *
              </label>
              <input
                value={form.github}
                onChange={setField('github')}
                className="cursor-target"
                placeholder="https://github.com/username"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 223, 129, 0.3)',
                  background: 'rgba(0, 0, 0, 0.4)',
                  color: '#ffffff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00df81'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0, 223, 129, 0.3)'}
              />
            </div>

            {/* Portfolio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ 
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#00df81',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Portfolio <span style={{ color: '#94a3b8', textTransform: 'lowercase' }}>(optional)</span>
              </label>
              <input
                value={form.portfolio}
                onChange={setField('portfolio')}
                className="cursor-target"
                placeholder="https://your-site.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 223, 129, 0.3)',
                  background: 'rgba(0, 0, 0, 0.4)',
                  color: '#ffffff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00df81'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0, 223, 129, 0.3)'}
              />
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ 
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#00df81',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                How would you like to contribute? *
              </label>
              <textarea
                value={form.message}
                onChange={setField('message')}
                className="cursor-target"
                placeholder="Tell us what you want to work on (features, docs, design, QA, infra). Share about yourself, what you're looking for, or why PrismSpace interests you."
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 223, 129, 0.3)',
                  background: 'rgba(0, 0, 0, 0.4)',
                  color: '#ffffff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  outline: 'none',
                  resize: 'vertical',
                  lineHeight: 1.6,
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00df81'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0, 223, 129, 0.3)'}
              />
            </div>

            {/* Status Message */}
            {status?.message && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: `1px solid ${status.type === 'success' ? 'rgba(0, 223, 129, 0.5)' : 'rgba(239, 68, 68, 0.5)'}`,
                  background: status.type === 'success' ? 'rgba(0, 223, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: status.type === 'success' ? '#00df81' : '#EF4444'
                }}
              >
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="cursor-target prism-btn"
              style={{
                marginTop: '8px',
                padding: '14px 24px',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                opacity: submitting ? 0.6 : 1,
                cursor: submitting ? 'not-allowed' : 'pointer'
              }}
            >
              {submitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div style={{ 
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(0, 0, 0, 0.2)'
        }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            color: '#06190e',
            lineHeight: 1.6,
            margin: 0
          }}>
            <strong style={{ color: '#000000' }}>Note:</strong> We review all submissions carefully. Human-written messages that show genuine interest get priority. We typically respond within 1-2 weeks.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
