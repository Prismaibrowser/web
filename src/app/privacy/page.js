'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GradientButtonGroup } from "@/components/ui/gradient-button-group";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/TargetCursor";
import CustomScrollbar from "@/components/CustomScrollbar";

export default function PrivacyPolicy() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const scrollToTop = () => {
    try {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 10);
    } catch (error) {
      console.warn('Scroll error:', error);
      window.scrollTo(0, 0);
    }
  };

  const navItems = [
    {
      label: "About",
      bgColor: "#00df81",
      textColor: "#000000",
      links: [
        { label: "Privacy Policy", ariaLabel: "Privacy Policy", href: "/privacy" },
        { label: "Documentation", ariaLabel: "Documentation", href: "/docs" },
        { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/Prismaibrowser" }
      ]
    },
    {
      label: "Useful Links", 
      bgColor: "#090c12",
      textColor: "#00df81",
      links: [
        { label: "Changelog", ariaLabel: "Changelog" },
        { label: "Donate Us", ariaLabel: "Donate Us" },
        { label: "Discord", ariaLabel: "Discord Community"},
        { label: "Report Bugs", ariaLabel: "GitHub Issues"}
      ]
    },
    {
      label: "Contact",
      bgColor: "#000000", 
      textColor: "#00df81",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:prismaibrowser@gmail.com" },
        { label: "X", ariaLabel: "X", href: "https://x.com/prismaibrowser" },
        { label: "Reddit", ariaLabel: "Reddit", href: "https://www.reddit.com/user/Prism-Browser/" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/prism-browser-702b08385/" }
      ]
    }
  ];

  return (
    <div style={{
      backgroundColor: '#00df81',
      minHeight: '100vh',
      color: '#000000',
      fontFamily: 'Space Grotesk, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <CustomScrollbar />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={!isMobile}
        performanceMode={isMobile}
      />

      {/* Fixed Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'transparent',
        pointerEvents: 'auto'
      }}>
        <GradientButtonGroup />
      </header>

      {/* Main Content */}
      <main style={{
        padding: isMobile ? '120px 5% 60px' : '140px 10% 80px', 
        maxWidth: '900px', 
        margin: '0 auto',
        position: 'relative'
      }}>
        
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
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.451.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"/>
          </svg>
          BACK TO HOME
        </button>

        {/* Page Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="editorial-badge" style={{ marginBottom: '20px' }}>
            LEGAL
          </div>
          
          <h1 className="display-heading" style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            color: '#000000',
            marginBottom: '16px'
          }}>
            privacy policy.
          </h1>
          
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '13px',
            color: '#06190e',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}>
            Last Updated: 2025-02-05
          </p>
        </div>

        {/* Content in Obsidian Board */}
        <div className="architecture-board" style={{
          padding: isMobile ? '24px' : '40px',
          lineHeight: 1.8
        }}>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: 800,
              color: '#00df81',
              marginBottom: '16px',
              textTransform: 'lowercase'
            }}>
              introduction
            </h2>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              Welcome to PrismSpace! Your privacy is our priority. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to protect your data.
            </p>
            <div style={{
              padding: '16px 20px',
              background: 'rgba(0, 223, 129, 0.12)',
              border: '1px solid rgba(0, 223, 129, 0.3)',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <p className="live-metric" style={{ fontSize: '14px', margin: 0 }}>
                We don't sell data • We don't collect data • We don't track you
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: 800,
              color: '#00df81',
              marginBottom: '16px',
              textTransform: 'lowercase'
            }}>
              1. information we do not collect
            </h2>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              PrismSpace is designed with privacy in mind. We do not collect, store, or share any of your personal data.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="layer-row">
                <h3 className="tech-label" style={{ color: '#00df81', marginBottom: '8px' }}>
                  1.1 NO TELEMETRY
                </h3>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  We do not collect any telemetry data or crash reports. PrismSpace has stripped out all telemetry built into base browsers.
                </p>
              </div>

              <div className="layer-row">
                <h3 className="tech-label" style={{ color: '#00df81', marginBottom: '8px' }}>
                  1.2 NO PERSONAL DATA COLLECTION
                </h3>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  We do not collect IP addresses, browsing history, search queries, or form data.
                </p>
              </div>

              <div className="layer-row">
                <h3 className="tech-label" style={{ color: '#00df81', marginBottom: '8px' }}>
                  1.3 NO THIRD-PARTY TRACKING
                </h3>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  No third-party trackers or analytics tools operate within PrismSpace. Your browsing activity remains entirely private.
                </p>
              </div>

              <div className="layer-row">
                <h3 className="tech-label" style={{ color: '#00df81', marginBottom: '8px' }}>
                  1.4 EXTERNAL CONNECTIONS AT STARTUP
                </h3>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  PrismSpace may make external connections at startup to check for updates and ensure plugins are current. These connections can be disabled through browser flags (about:config).
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: 800,
              color: '#00df81',
              marginBottom: '16px',
              textTransform: 'lowercase'
            }}>
              2. information stored locally
            </h2>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '16px'
            }}>
              Certain data is stored locally on your device to enhance your browsing experience:
            </p>
            <ul style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              color: '#cbd5e1',
              lineHeight: 1.8,
              paddingLeft: '20px',
              listStyle: 'none'
            }}>
              <li style={{ marginBottom: '12px', position: 'relative', paddingLeft: '20px' }}>
                <span style={{ position: 'absolute', left: 0, color: '#00df81' }}>→</span>
                <strong style={{ color: '#ffffff' }}>Cookies:</strong> Stored locally, never shared with us or third parties. You control cookie management through settings.
              </li>
              <li style={{ marginBottom: '12px', position: 'relative', paddingLeft: '20px' }}>
                <span style={{ position: 'absolute', left: 0, color: '#00df81' }}>→</span>
                <strong style={{ color: '#ffffff' }}>Cache:</strong> Temporary files stored locally to improve performance. Clearable at any time.
              </li>
              <li style={{ marginBottom: '12px', position: 'relative', paddingLeft: '20px' }}>
                <span style={{ position: 'absolute', left: 0, color: '#00df81' }}>→</span>
                <strong style={{ color: '#ffffff' }}>Settings:</strong> All customizations stored locally on your device. We have no access to this data.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: 800,
              color: '#00df81',
              marginBottom: '16px',
              textTransform: 'lowercase'
            }}>
              3. sync feature
            </h2>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '16px'
            }}>
              The optional Sync feature uses Mozilla Firefox's Sync infrastructure. Your data is encrypted and stored on Mozilla's servers according to their Privacy Policy. We cannot view any of this data.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href="https://www.mozilla.org/en-US/privacy/mozilla-accounts/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cursor-target"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#00df81',
                  textDecoration: 'underline',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#00df81'}
              >
                Mozilla Firefox Sync →
              </a>
              <a 
                href="https://support.mozilla.org/en-US/kb/how-firefox-securely-saves-passwords" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cursor-target"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#00df81',
                  textDecoration: 'underline',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#00df81'}
              >
                How we store passwords →
              </a>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: 800,
              color: '#00df81',
              marginBottom: '16px',
              textTransform: 'lowercase'
            }}>
              4. data security
            </h2>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              margin: 0
            }}>
              Although PrismSpace does not collect your data, we recommend secure passwords, device encryption, and regular software updates to protect locally stored information.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: 800,
              color: '#00df81',
              marginBottom: '16px',
              textTransform: 'lowercase'
            }}>
              5. your control
            </h2>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              margin: 0
            }}>
              You have full control over all data stored locally. Clear browsing data, cookies, and cache at any time through browser settings.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: 800,
              color: '#00df81',
              marginBottom: '16px',
              textTransform: 'lowercase'
            }}>
              6. contact us
            </h2>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '16px'
            }}>
              Questions about this Privacy Policy? Contact us:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href="https://github.com/Prismaibrowser" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cursor-target"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#00df81',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#00df81'}
              >
                <span>GitHub Organization →</span>
              </a>
              <a 
                href="mailto:prismaibrowser@gmail.com" 
                className="cursor-target"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: '#00df81',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#00df81'}
              >
                <span>prismaibrowser@gmail.com →</span>
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          className="cursor-target prism-btn"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: isMobile ? '20px' : '30px',
            right: isMobile ? '20px' : '30px',
            width: isMobile ? '50px' : '55px',
            height: isMobile ? '50px' : '55px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 9998,
            fontSize: isMobile ? '22px' : '26px',
            fontWeight: 'bold'
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <Footer />
    </div>
  );
}
