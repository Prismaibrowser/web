'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { GradientButtonGroup } from "@/components/ui/gradient-button-group";
import Footer from "@/components/Footer";
import CustomScrollbar from "@/components/CustomScrollbar";
import ComingSoonOverlay from "@/components/ComingSoonOverlay";
import HeroBackground from "@/components/HeroBackground";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { SiNvidia, SiAnthropic, SiOpenai, SiGooglegemini } from "react-icons/si";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function PrismHomepage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showComingSoonOverlay, setShowComingSoonOverlay] = useState(false);
  const [particles, setParticles] = useState([]);

  // Refs for GSAP scroll animations
  const contributionSectionRef = useRef(null);
  const contributionBadgeRef = useRef(null);
  const contributionHeadingRef = useRef(null);
  const contributionCutoutRef = useRef(null);
  const contributionDescRef = useRef(null);
  const terminalRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Regenerate particles when mobile breakpoint changes
      setParticles(
        Array.from({ length: mobile ? 3 : 6 }, () => ({
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: 5 + Math.random() * 10,
          delay: Math.random() * 5,
        }))
      );
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Detect OS and set default platform
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;
      const platform = window.navigator.platform;

      if (userAgent.includes('Windows') || platform.includes('Win')) {
        return 'Windows';
      } else if (userAgent.includes('Linux') || platform.includes('Linux')) {
        return 'Linux';
      } else if (userAgent.includes('Mac') || platform.includes('Mac')) {
        return 'Linux';
      } else {
        return 'Windows';
      }
    };

    setSelectedPlatform(detectOS());
  }, []);

  // GSAP Scroll Animations for Contribution Section
  useEffect(() => {
    if (typeof window === 'undefined' || !contributionSectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([
        contributionBadgeRef.current,
        contributionHeadingRef.current,
        contributionCutoutRef.current,
        contributionDescRef.current,
        terminalRef.current,
        ctaButtonRef.current
      ], {
        opacity: 0,
        y: 60
      });

      // Create smooth staggered animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contributionSectionRef.current,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
          // markers: true, // Uncomment for debugging
        }
      });

      tl.to(contributionBadgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
        .to(contributionHeadingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out'
        }, '-=0.6')
        .to(contributionCutoutRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out'
        }, '-=0.7')
        .to(contributionDescRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.7')
        .to(terminalRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out'
        }, '-=0.8')
        .to(ctaButtonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.4)'
        }, '-=0.6');

      // Parallax effect on terminal
      gsap.to(terminalRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: terminalRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

    }, contributionSectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 10);
      setTimeout(() => {
        if (window.scrollY > 0) {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }, 100);
    } catch (error) {
      console.warn('Scroll to top error:', error);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  };

  const handleDownload = () => {
    setShowComingSoonOverlay(true);
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
        { label: "Discord", ariaLabel: "Discord Community" },
        { label: "Report Bugs", ariaLabel: "GitHub Issues" }
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
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "PrismSpace",
            "applicationCategory": "WebBrowser",
            "operatingSystem": "Windows, Linux, macOS",
            "description": "AI-powered developer operating environment with multi-agent orchestration and ML routing subsystem.",
            "url": "https://prismbrowser.tech",
            "author": {
              "@type": "Organization",
              "name": "PrismSpace Team"
            }
          })
        }}
      />

      <CustomScrollbar />

      <div style={{
        position: 'relative',
        backgroundColor: '#000000',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden'
      }}>

        {/* Fixed Header */}
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: 'transparent',
          width: '100%',
          pointerEvents: 'auto'
        }}>
          <GradientButtonGroup />
        </header>

        {/* Main Content Container */}
        <main style={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'transparent',
          zIndex: 5,
          paddingTop: '80px'
        }}>

          {/* Hero Section - High Voltage UI Style */}
          <section className="hero-section" style={{
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            backgroundColor: '#000000',
            padding: isMobile ? '60px 5%' : '100px 10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            overflow: 'visible'
          }}>

            <HeroBackground />

            {/* Content Layer - positioned above background */}
            <div className="hero-content" style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px',
              width: '100%'
            }}>

              {/* Editorial Badge */}
              <div className="editorial-badge" style={{
                animation: 'fadeIn 0.6s ease-out'
              }}>
                <div className="status-dot-pulse"></div>
                DEVELOPER OS
              </div>

              {/* Main Headline with Cutout Box */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                textAlign: 'center'
              }}>
                <h1 className="display-heading" style={{
                  fontSize: isMobile ? '2.5rem' : '5rem',
                  color: '#00df81',
                  marginBottom: '10px',
                  fontWeight: 900,
                  animation: 'fadeIn 0.8s ease-out 0.2s both'
                }}>
                  you code it.
                </h1>

                <div className="cutout-box" style={{
                  animation: 'fadeIn 1s ease-out 0.4s both'
                }}>
                  <span className="cutout-text">
                    prismspace ships it.
                  </span>
                </div>
              </div>

              {/* Explanatory Paragraph with Highlight Spans */}
              <p style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                lineHeight: 1.6,
                  color: '#d8f5e6',
                fontWeight: 600,
                maxWidth: '800px',
                textAlign: 'center',
                animation: 'fadeIn 1.2s ease-out 0.6s both'
              }}>
                An <span className="prose-highlight">AI-powered developer browser dashboard</span> with{' '}
                <span className="prose-highlight">multi-agent swarm orchestration</span> and a{' '}
                <span className="prose-highlight">self-trained ML routing subsystem</span>{' '}
                that decides which AI does what — before a single request hits an LLM.
              </p>

              {/* Terminal Command Pill */}
              <div className="terminal-pill" style={{
                animation: 'fadeIn 1.4s ease-out 0.8s both'
              }}>
                <span className="terminal-prompt-char">$</span>
                <code>npm run dev</code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('npm run dev');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    color: '#00df81',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontFamily: 'JetBrains Mono, monospace',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  copy
                </button>
              </div>

              {/* Download CTA */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                animation: 'fadeIn 1.6s ease-out 1s both'
              }}>
                <button
                  className="prism-btn cursor-target"
                  onClick={handleDownload}
                  style={{
                    padding: isMobile ? '12px 24px' : '14px 32px',
                    fontSize: isMobile ? '14px' : '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M7.47 10.78a.749.749 0 0 0 1.06 0l3.75-3.75a.749.749 0 1 0-1.06-1.06L8.75 8.439V1.75a.75.75 0 0 0-1.5 0v6.689L4.78 5.97a.749.749 0 1 0-1.06 1.06l3.75 3.75Z" />
                    <path d="M3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                  Download PrismSpace
                </button>

                {/* Platform Selector */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  alignItems: 'center'
                }}>
                  <span className="tech-label" style={{ color: '#8affc5' }}>
                    Platform
                  </span>
                  <div style={{
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <button
                      className="cursor-target"
                      onClick={() => setSelectedPlatform('Windows')}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: selectedPlatform === 'Windows' ? '#00df81' : 'rgba(0, 223, 129, 0.08)',
                        color: selectedPlatform === 'Windows' ? '#06190e' : '#8affc5',
                        border: '2px solid #00df81',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '13px',
                        fontWeight: '600',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91v-6.84l10 .15z" />
                      </svg>
                      WINDOWS
                    </button>
                    <button
                      className="cursor-target"
                      onClick={() => setSelectedPlatform('Linux')}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: selectedPlatform === 'Linux' ? '#00df81' : 'rgba(0, 223, 129, 0.08)',
                        color: selectedPlatform === 'Linux' ? '#06190e' : '#8affc5',
                        border: '2px solid #00df81',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '13px',
                        fontWeight: '600',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Image src="/linux.png" alt="Linux" width={14} height={16} style={{
                        filter: selectedPlatform === 'Linux' ?
                          'brightness(0) saturate(100%) invert(57%) sepia(41%) saturate(2396%) hue-rotate(81deg) brightness(102%) contrast(93%)' :
                          'brightness(0) saturate(100%)'
                      }} />
                      LINUX
                    </button>
                  </div>
                </div>
              </div>

            </div> {/* Close content wrapper */}

          </section>

          {/* Architecture Telemetry Section */}
          <section style={{
            width: '100%',
            padding: isMobile ? '80px 5%' : '120px 10%',
            backgroundColor: '#00df81'
          }}>

            <div style={{
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
              gap: isMobile ? '40px' : '60px',
              alignItems: 'start'
            }}>

              {/* Left Editorial Column */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <div className="editorial-badge">
                  ML ROUTING
                </div>

                <h2 className="display-heading" style={{
                  fontSize: isMobile ? '2rem' : '3.5rem',
                  color: '#000000'
                }}>
                  raw prompt in.
                </h2>

                <div className="cutout-box">
                  <span className="cutout-text" style={{
                    fontSize: isMobile ? '1.5rem' : '2.5rem'
                  }}>
                    intelligent dispatch out.
                  </span>
                </div>

                <p style={{
                  fontSize: isMobile ? '0.95rem' : '1.1rem',
                  lineHeight: 1.6,
                  color: '#000000',
                  fontWeight: 600
                }}>
                  Seven specialized <span className="prose-highlight">ML models</span> analyze your prompt,{' '}
                  <span className="prose-highlight">classify intent</span>, route to the optimal agent,{' '}
                  select the <span className="prose-highlight">most cost-effective LLM</span>, and{' '}
                  predict execution risk — all before dispatch.
                </p>

                <div className="terminal-pill">
                  <span className="terminal-prompt-char">$</span>
                  <code>python -m model.train</code>
                </div>
              </div>

              {/* Right Telemetry Board */}
              <div className="architecture-board micro-grid" style={{
                position: 'relative',
                minHeight: isMobile ? '500px' : '600px'
              }}>

                {/* Board Header */}
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <h3 style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      color: '#00df81',
                      margin: 0
                    }}>
                      ROUTING PIPELINE
                    </h3>
                    <div className="live-status-badge">
                      <div className="status-dot-pulse"></div>
                      ACTIVE
                    </div>
                  </div>
                </div>

                {/* Flow Rail */}
                <div className="flow-rail">
                  <div className="flow-beam"></div>
                </div>

                {/* Pipeline Layers */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  paddingLeft: '20px'
                }}>

                  {/* Layer 1: Intent Classifier */}
                  <div className="layer-row">
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '16px',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div className="tech-label" style={{ marginBottom: '6px' }}>
                          01 • INTENT CLASSIFIER
                        </div>
                        <div style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#cbd5e1',
                          lineHeight: 1.35
                        }}>
                          TF-IDF + Calibrated Multi-Class
                        </div>
                      </div>
                      <div className="live-metric">
                        97%
                      </div>
                    </div>
                  </div>

                  {/* Layer 2: Agent Router */}
                  <div className="layer-row">
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '16px',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div className="tech-label" style={{ marginBottom: '6px' }}>
                          02 • AGENT ROUTER
                        </div>
                        <div style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#cbd5e1',
                          lineHeight: 1.35
                        }}>
                          Specialist: <span style={{ color: '#00df81', fontWeight: 700 }}>SQLAgent</span>
                        </div>
                      </div>
                      <div className="live-metric">
                        ROUTED
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Model Router */}
                  <div className="layer-row">
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '16px',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div className="tech-label" style={{ marginBottom: '6px' }}>
                          03 • MODEL ROUTER
                        </div>
                        <div style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#cbd5e1',
                          lineHeight: 1.35
                        }}>
                          Selected: <span style={{ color: '#00df81', fontWeight: 700 }}>Gemini 1.5 Pro</span>
                          <br />
                          Cost: $0.0014/req vs $0.005/req
                        </div>
                      </div>
                      <div className="live-metric">
                        72% ↓
                      </div>
                    </div>
                  </div>

                  {/* Layer 4: Approval Predictor */}
                  <div className="layer-row">
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '16px',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div className="tech-label" style={{ marginBottom: '6px' }}>
                          04 • APPROVAL PREDICTOR
                        </div>
                        <div style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#cbd5e1',
                          lineHeight: 1.35
                        }}>
                          Risk Score: 12/100 • Training: HH-RLHF
                        </div>
                      </div>
                      <div style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#00df81',
                        backgroundColor: 'rgba(0, 223, 129, 0.12)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(0, 223, 129, 0.3)'
                      }}>
                        ✓ LOW
                      </div>
                    </div>
                  </div>

                </div>

                {/* ORPO Section */}
                <div style={{
                  marginTop: '24px',
                  padding: '16px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 223, 129, 0.2)'
                }}>
                  <div className="tech-label" style={{ marginBottom: '10px', color: '#00df81' }}>
                    ORPO ALIGNMENT
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontWeight: 500
                  }}>
                    L<sub style={{ fontSize: '9px' }}>ORPO</sub> = L<sub style={{ fontSize: '9px' }}>SFT</sub> + λ · L<sub style={{ fontSize: '9px' }}>OR</sub>
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#cbd5e1',
                    lineHeight: 1.5
                  }}>
                    Preference optimization built into training.
                    <br />
                    No separate reward model needed.
                    <br />
                    <span style={{ color: '#00df81', fontWeight: 700 }}>Trained on 16 benchmark datasets.</span>
                  </div>
                </div>

              </div>

            </div>

          </section>

          {/* Features Overview Section */}
          <section style={{
            width: '100%',
            padding: isMobile ? '80px 5%' : '120px 10%',
            backgroundColor: '#00df81'
          }}>
            <div style={{
              maxWidth: '1400px',
              margin: '0 auto',
              textAlign: 'center'
            }}>

              <div className="editorial-badge" style={{ marginBottom: '24px' }}>
                DEVELOPER OS
              </div>

              <h2 className="display-heading" style={{
                fontSize: isMobile ? '2.5rem' : '4rem',
                color: '#000000',
                marginBottom: '20px'
              }}>
                four models.
              </h2>

              <div className="cutout-box" style={{ marginBottom: '40px' }}>
                <span className="cutout-text" style={{
                  fontSize: isMobile ? '1.8rem' : '3rem'
                }}>
                  one routing brain.
                </span>
              </div>

              <p style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                lineHeight: 1.6,
                color: '#000000',
                fontWeight: 600,
                maxWidth: '900px',
                margin: '0 auto 60px',
                textAlign: 'center'
              }}>
                Most AI dev tools <span className="prose-highlight">bolt LLMs on top</span>.
                PrismSpace trains <span className="prose-highlight">its own ML layer underneath</span> —
                a brain that decides <span className="prose-highlight">how to use AI</span> before any AI sees your prompt.
              </p>

              {/* Feature Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '24px',
                marginTop: '60px'
              }}>

                {[
                  {
                    title: '23+ Dev Tools',
                    desc: 'JSON toolkit, Regex workbench, SQL Playground with WASM SQLite, Markdown editor, Git reference'
                  },
                  {
                    title: 'Agent Swarm Visualizer',
                    desc: 'Real-time multi-agent state machines, MCP server tools, DAG execution pipelines'
                  },
                  {
                    title: 'Native Transfer Engine',
                    desc: 'Robocopy on Windows, rsync on Linux/macOS with streamed progress and cancellation'
                  },
                  {
                    title: 'ML Routing Subsystem',
                    desc: 'Intent classifier, agent router, model router, approval predictor, ORPO alignment'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="architecture-board"
                    style={{
                      textAlign: 'left',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 223, 129, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <h3 style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: isMobile ? '1.25rem' : '1.5rem',
                      fontWeight: 800,
                      color: '#00df81',
                      marginBottom: '12px'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '13px',
                      color: '#cbd5e1',
                      lineHeight: 1.5,
                      margin: 0
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* AI APIs Support Section */}
          <MaskContainer
            revealOnScroll
            scrollReveal
            className="h-auto w-full"
            style={{ backgroundColor: '#000000' }}
          >
            <section style={{
              width: '100%',
              padding: isMobile ? '80px 5%' : '120px 10%',
              backgroundColor: '#000000',
              position: 'relative',
              overflow: 'clip'
            }}>
              {/* Animated Background Grid */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                linear-gradient(rgba(0, 223, 129, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 223, 129, 0.03) 1px, transparent 1px)
              `,
                backgroundSize: '50px 50px',
                animation: 'grid-flow 20s linear infinite',
                opacity: 0.4
              }}></div>

              {/* Floating Particles */}
              <div style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none'
              }}>
                {particles.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: '2px',
                      height: '2px',
                      backgroundColor: '#00df81',
                      borderRadius: '50%',
                      boxShadow: '0 0 10px #00df81',
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      animation: `float-particle ${p.duration}s ease-in-out infinite`,
                      animationDelay: `${p.delay}s`,
                      opacity: 0.6
                    }}
                  />
                ))}
              </div>
              <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                textAlign: 'center'
              }}>

                <div className="editorial-badge" style={{
                  marginBottom: '24px',
                  backgroundColor: 'rgba(0, 223, 129, 0.1)',
                  border: '1px solid rgba(0, 223, 129, 0.3)'
                }}>
                  API INTEGRATION
                </div>

                <h2 className="display-heading" style={{
                  fontSize: isMobile ? '2.5rem' : '4rem',
                  color: '#00df81',
                  marginBottom: '20px'
                }}>
                  powered by leading AI.
                </h2>

                <div className="cutout-box" style={{
                  marginBottom: '40px',
                  backgroundColor: '#00df81',
                  border: '2px solid #000000'
                }}>
                  <span style={{
                    fontSize: isMobile ? '1.8rem' : '3rem',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 900,
                    color: '#000000',
                    textTransform: 'lowercase'
                  }}>
                    five enterprise APIs.
                  </span>
                </div>

                <p style={{
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  lineHeight: 1.6,
                  color: '#cbd5e1',
                  fontWeight: 600,
                  maxWidth: '900px',
                  margin: '0 auto 80px',
                  textAlign: 'center'
                }}>
                  Seamlessly integrated with <span style={{ color: '#00df81', fontWeight: 700 }}>industry-leading AI providers</span>.
                  Our ML routing layer automatically selects the{' '}
                  <span style={{ color: '#00df81', fontWeight: 700 }}>best model for each task</span>,
                  optimizing for both performance and cost.
                </p>

                {/* Circuit Board with API Cards */}
                <div style={{
                  maxWidth: '1100px',
                  margin: '0 auto'
                }}>
                  {/* Circuit Board SVG */}
                  <div className="circuit-board-container" style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '60px'
                  }}>

                    {/* Powered By Chip */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 10
                    }}>
                      <div style={{
                        background: 'linear-gradient(180deg, #444 0%, #333 100%)',
                        borderRadius: '8px',
                        padding: isMobile ? '12px 20px' : '16px 32px',
                        boxShadow: '0 4px 12px rgba(0, 223, 129, 0.3), inset 0 -3px 1px -1px rgba(0,0,0,0.25)',
                        border: '1px solid rgba(0, 223, 129, 0.2)'
                      }}>
                        <span style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isMobile ? '16px' : '20px',
                          fontWeight: 800,
                          color: '#ffffff',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          Powered By
                        </span>
                      </div>
                    </div>

                    {/* API Cards Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(6, 1fr)',
                      gap: isMobile ? '16px' : '20px',
                      marginTop: '40px',
                      padding: isMobile ? '20px' : '40px 20px'
                    }}>

                      {/* NVIDIA Build API */}
                      <div className="api-card architecture-board" style={{
                        textAlign: 'center',
                        padding: isMobile ? '28px 20px' : '36px 24px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(15, 20, 25, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <div style={{
                          width: isMobile ? '56px' : '64px',
                          height: isMobile ? '56px' : '64px',
                          margin: '0 auto 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(118, 185, 0, 0.1)',
                          borderRadius: '12px',
                          padding: '12px'
                        }}>
                          <SiNvidia size="100%" color="#76B900" aria-hidden="true" />
                        </div>
                        <h4 style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isMobile ? '15px' : '17px',
                          fontWeight: 800,
                          color: '#76B900',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}>
                          NVIDIA
                        </h4>
                        <p style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#64748b',
                          margin: 0,
                          fontWeight: 500
                        }}>
                          Build API
                        </p>
                      </div>

                      {/* Groq API */}
                      <div className="api-card architecture-board" style={{
                        textAlign: 'center',
                        padding: isMobile ? '28px 20px' : '36px 24px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(15, 20, 25, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <div style={{
                          width: isMobile ? '56px' : '64px',
                          height: isMobile ? '56px' : '64px',
                          margin: '0 auto 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderRadius: '12px',
                          padding: '12px'
                        }}>
                          <span style={{
                            color: '#F55036',
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontSize: isMobile ? '19px' : '22px',
                            fontWeight: 900,
                            letterSpacing: '-0.08em',
                            textTransform: 'lowercase'
                          }}>
                            groq
                          </span>
                        </div>
                        <h4 style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isMobile ? '15px' : '17px',
                          fontWeight: 800,
                          color: '#F55036',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}>
                          GROQ
                        </h4>
                        <p style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#64748b',
                          margin: 0,
                          fontWeight: 500
                        }}>
                          Inference API
                        </p>
                      </div>

                      {/* OpenRouter API */}
                      <div className="api-card architecture-board" style={{
                        textAlign: 'center',
                        padding: isMobile ? '28px 20px' : '36px 24px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(15, 20, 25, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <div style={{
                          width: isMobile ? '56px' : '64px',
                          height: isMobile ? '56px' : '64px',
                          margin: '0 auto 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(139, 92, 246, 0.12)',
                          borderRadius: '12px',
                          padding: '12px'
                        }}>
                          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" aria-hidden="true">
                            <path fill="#A78BFA" d="M16.778 1.844v1.919q-.569-.026-1.138-.032-.708-.008-1.415.037c-1.93.126-4.023.728-6.149 2.237-2.911 2.066-2.731 1.95-4.14 2.75-.396.223-1.342.574-2.185.798-.841.225-1.753.333-1.751.333v4.229s.768.108 1.61.333c.842.224 1.789.575 2.185.799 1.41.798 1.228.683 4.14 2.75 2.126 1.509 4.22 2.11 6.148 2.236.88.058 1.716.041 2.555.005v1.918L24 15.958l-7.222-4.17v2.176c-.86.038-1.611.065-2.278.021-1.364-.09-2.417-.357-3.979-1.465-2.244-1.593-2.866-2.027-3.68-2.508.889-.518 1.449-.906 3.822-2.59 1.56-1.109 2.614-1.377 3.978-1.466.667-.044 1.418-.017 2.278.02v2.176L24 6.014Z" />
                          </svg>
                        </div>
                        <h4 style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isMobile ? '15px' : '17px',
                          fontWeight: 800,
                          color: '#A78BFA',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}>
                          OPENROUTER
                        </h4>
                        <p style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#64748b',
                          margin: 0,
                          fontWeight: 500
                        }}>
                          Model Gateway
                        </p>
                      </div>

                      {/* Claude API */}
                      <div className="api-card architecture-board" style={{
                        textAlign: 'center',
                        padding: isMobile ? '28px 20px' : '36px 24px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(15, 20, 25, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <div style={{
                          width: isMobile ? '56px' : '64px',
                          height: isMobile ? '56px' : '64px',
                          margin: '0 auto 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(204, 155, 122, 0.1)',
                          borderRadius: '12px',
                          padding: '12px'
                        }}>
                          <SiAnthropic size="100%" color="#CC9B7A" aria-hidden="true" />
                          <svg style={{ display: 'none' }} viewBox="0 0 24 24" width="100%" height="100%" fill="none">
                            <rect width="24" height="24" rx="5.5" fill="#CC9B7A" />
                            <path d="M8 9L12 6L16 9V15L12 18L8 15V9Z" fill="#FFFFFF" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <h4 style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isMobile ? '15px' : '17px',
                          fontWeight: 800,
                          color: '#CC9B7A',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}>
                          CLAUDE
                        </h4>
                        <p style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#64748b',
                          margin: 0,
                          fontWeight: 500
                        }}>
                          Anthropic
                        </p>
                      </div>

                      {/* OpenAI API */}
                      <div className="api-card architecture-board" style={{
                        textAlign: 'center',
                        padding: isMobile ? '28px 20px' : '36px 24px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(15, 20, 25, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <div style={{
                          width: isMobile ? '56px' : '64px',
                          height: isMobile ? '56px' : '64px',
                          margin: '0 auto 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(16, 163, 127, 0.1)',
                          borderRadius: '12px',
                          padding: '12px'
                        }}>
                          <SiOpenai size="100%" color="#10A37F" aria-hidden="true" />
                          <svg style={{ display: 'none' }} viewBox="0 0 24 24" width="100%" height="100%">
                            <path fill="#10A37F" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                          </svg>
                        </div>
                        <h4 style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isMobile ? '15px' : '17px',
                          fontWeight: 800,
                          color: '#10A37F',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}>
                          OPENAI
                        </h4>
                        <p style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#64748b',
                          margin: 0,
                          fontWeight: 500
                        }}>
                          GPT-4 & o1
                        </p>
                      </div>

                      {/* Gemini API */}
                      <div className="api-card architecture-board" style={{
                        textAlign: 'center',
                        padding: isMobile ? '28px 20px' : '36px 24px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(15, 20, 25, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <div style={{
                          width: isMobile ? '56px' : '64px',
                          height: isMobile ? '56px' : '64px',
                          margin: '0 auto 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(66, 133, 244, 0.1)',
                          borderRadius: '12px',
                          padding: '12px'
                        }}>
                          <SiGooglegemini size="100%" color="#4285F4" aria-hidden="true" />
                          <svg style={{ display: 'none' }} viewBox="0 0 24 24" width="100%" height="100%">
                            <defs>
                              <linearGradient id="gemini-gradient-logo" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#4285F4" />
                                <stop offset="50%" stopColor="#9B72F2" />
                                <stop offset="100%" stopColor="#EA4335" />
                              </linearGradient>
                            </defs>
                            <path fill="url(#gemini-gradient-logo)" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z" />
                          </svg>
                        </div>
                        <h4 style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isMobile ? '15px' : '17px',
                          fontWeight: 800,
                          color: '#4285F4',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}>
                          GEMINI
                        </h4>
                        <p style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: '#64748b',
                          margin: 0,
                          fontWeight: 500
                        }}>
                          Google AI
                        </p>
                      </div>

                    </div>

                    {/* Connection Lines */}
                    <svg
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        opacity: 0.3,
                        zIndex: 0
                      }}
                      viewBox="0 0 1000 400"
                    >
                      <line x1="500" y1="100" x2="100" y2="250" stroke="#00df81" strokeWidth="1" opacity="0.3">
                        <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="500" y1="100" x2="300" y2="250" stroke="#00df81" strokeWidth="1" opacity="0.3">
                        <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="2.5s" repeatCount="indefinite" />
                      </line>
                      <line x1="500" y1="100" x2="500" y2="250" stroke="#00df81" strokeWidth="1.5" opacity="0.5">
                        <animate attributeName="stroke-opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" />
                      </line>
                      <line x1="500" y1="100" x2="700" y2="250" stroke="#00df81" strokeWidth="1" opacity="0.3">
                        <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="2.8s" repeatCount="indefinite" />
                      </line>
                      <line x1="500" y1="100" x2="900" y2="250" stroke="#00df81" strokeWidth="1" opacity="0.3">
                        <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
                      </line>
                    </svg>

                  </div>
                </div>

              </div>
            </section>
          </MaskContainer>

          {/* Easy Contribution Section */}
          <section
            ref={contributionSectionRef}
            style={{
              width: '100%',
              padding: isMobile ? '80px 5%' : '120px 10%',
              backgroundColor: '#00df81',
              position: 'relative'
            }}
          >
            <div style={{
              maxWidth: '1400px',
              margin: '0 auto',
              textAlign: 'center'
            }}>

              <div
                ref={contributionBadgeRef}
                className="editorial-badge"
                style={{ marginBottom: '24px' }}
              >
                OPEN SOURCE
              </div>

              <h2
                ref={contributionHeadingRef}
                className="display-heading"
                style={{
                  fontSize: isMobile ? '2.5rem' : '4rem',
                  color: '#000000',
                  marginBottom: '20px'
                }}
              >
                easy contribution.
              </h2>

              <div
                ref={contributionCutoutRef}
                className="cutout-box"
                style={{ marginBottom: '40px' }}
              >
                <span className="cutout-text" style={{
                  fontSize: isMobile ? '1.8rem' : '3rem'
                }}>
                  three commands away.
                </span>
              </div>

              <p
                ref={contributionDescRef}
                style={{
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  lineHeight: 1.6,
                  color: '#000000',
                  fontWeight: 600,
                  maxWidth: '900px',
                  margin: '0 auto 60px',
                  textAlign: 'center'
                }}
              >
                Fork the repo, clone it locally, and start building.{' '}
                <span className="prose-highlight">No complex setup</span>, no proprietary tooling.{' '}
                Just <span className="prose-highlight">standard dev workflow</span> with{' '}
                <span className="prose-highlight">modern stack</span>.
              </p>

              {/* Terminal Animation Display */}
              <div
                ref={terminalRef}
                style={{
                  maxWidth: '900px',
                  margin: '0 auto',
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  backgroundImage: 'url(/terminal-animation-bg-2.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Terminal Header */}
                <div style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
                  </div>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: '#cbd5e1',
                    marginLeft: '12px'
                  }}>
                    terminal — contributing to prismspace
                  </span>
                </div>

                {/* Terminal Content */}
                <div style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  padding: isMobile ? '24px' : '40px',
                  minHeight: isMobile ? '400px' : '500px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#00df81',
                  textAlign: 'left',
                  lineHeight: 1.8
                }}>
                  {/* Command 1: Fork */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#cbd5e1', marginBottom: '8px' }}>
                      <span style={{ color: '#94a3b8' }}># Step 1: Fork the repository on GitHub</span>
                    </div>
                    <div style={{ color: '#cbd5e1', marginBottom: '8px' }}>
                      <span style={{ color: '#00df81' }}>$</span> gh repo fork NobinSijo7T/prism-web --clone
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: isMobile ? '11px' : '12px', paddingLeft: '16px' }}>
                      <span style={{ color: '#22ff73' }}>✓</span> Created fork YOUR_USERNAME/prism-web
                      <br />
                      Cloning into &apos;prism-web&apos;...
                      <br />
                      remote: Enumerating objects: 1247, done.
                      <br />
                      Receiving objects: 100% (1247/1247), 4.82 MiB | 2.31 MiB/s, done.
                      <br />
                      Resolving deltas: 100% (623/623), done.
                    </div>
                  </div>

                  {/* Command 2: Install */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#cbd5e1', marginBottom: '8px' }}>
                      <span style={{ color: '#00df81' }}>$</span> cd prism-web && npm install
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: isMobile ? '11px' : '12px', paddingLeft: '16px' }}>
                      added 847 packages in 12s
                      <br />
                      <span style={{ color: '#22ff73' }}>✓</span> Dependencies installed successfully
                    </div>
                  </div>

                  {/* Command 3: Run Dev */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#cbd5e1', marginBottom: '8px' }}>
                      <span style={{ color: '#00df81' }}>$</span> npm run dev
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: isMobile ? '11px' : '12px', paddingLeft: '16px' }}>
                      <span style={{ color: '#b39aff' }}>▲</span> Next.js 16.1.6
                      <br />
                      - Local: <span style={{ color: '#32f3e9' }}>http://localhost:3000</span>
                      <br />
                      <span style={{ color: '#22ff73' }}>✓</span> Compiled successfully
                    </div>
                  </div>

                  {/* Command 4: Docker Build */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#cbd5e1', marginBottom: '8px' }}>
                      <span style={{ color: '#94a3b8' }}># Optional: Deploy with Docker</span>
                    </div>
                    <div style={{ color: '#cbd5e1', marginBottom: '8px' }}>
                      <span style={{ color: '#00df81' }}>$</span> docker build -t prism-web .
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: isMobile ? '11px' : '12px', paddingLeft: '16px' }}>
                      <span style={{ color: '#22ff73' }}>✓</span> Building image...
                      <br />
                      Successfully tagged prism-web:latest
                    </div>
                  </div>

                  {/* Command 5: Docker Run */}
                  <div>
                    <div style={{ color: '#cbd5e1', marginBottom: '8px' }}>
                      <span style={{ color: '#00df81' }}>$</span> docker run -p 3000:3000 prism-web
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: isMobile ? '11px' : '12px', paddingLeft: '16px' }}>
                      Container started at <span style={{ color: '#32f3e9' }}>http://localhost:3000</span>
                    </div>
                  </div>

                  {/* Command Buttons */}
                  <div style={{
                    marginTop: '32px',
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    {['install', 'build', 'deploy', 'test'].map((cmd) => (
                      <button
                        key={cmd}
                        className="cursor-target"
                        style={{
                          padding: '8px 16px',
                          backgroundColor: cmd === 'build' ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
                          color: cmd === 'build' ? '#000000' : '#cbd5e1',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (cmd !== 'build') {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (cmd !== 'build') {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }
                        }}
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* CTA to Contribute Page */}
              <div
                ref={ctaButtonRef}
                style={{
                  marginTop: '48px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <button
                  className="cursor-target prism-btn"
                  onClick={() => window.location.href = '/contribute'}
                  style={{
                    padding: isMobile ? '12px 24px' : '14px 32px',
                    fontSize: isMobile ? '14px' : '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Join as Contributor
                </button>
              </div>

            </div>
          </section>

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
                fontWeight: 'bold',
                userSelect: 'none',
                outline: 'none'
              }}
              aria-label="Scroll to top"
              title="Back to top"
            >
              ↑
            </button>
          )}

        </main>

        {/* Footer */}
        <Footer onDownloadClick={handleDownload} />

        {/* Coming Soon Overlay */}
        {showComingSoonOverlay && (
          <ComingSoonOverlay onClose={() => setShowComingSoonOverlay(false)} />
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default PrismHomepage;
