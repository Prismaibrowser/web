'use client';

import { useRef, useState, useEffect } from 'react';
import LaserFlow from "@/components/LaserFlow";
import CardNav from "@/components/CardNav";
import Shuffle from "@/components/Shuffle";

import TargetCursor from "@/components/TargetCursor";
import TextPressure from "@/components/TextPressure";
import MagicBento from "@/components/MagicBento";
import Footer from "@/components/Footer";
import PrismLoader from "@/components/PrismLoader";

function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
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
        return 'Linux'; // Default to Linux for Mac users
      } else {
        return 'Windows'; // Default fallback
      }
    };
    
    setSelectedPlatform(detectOS());
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = () => {
    console.log(`Downloading for ${selectedPlatform}`);
    // Add actual download logic here based on selectedPlatform
  };

  const navItems = [
    {
      label: "About",
      bgColor: "#010710",
      textColor: "#88E755",
      links: [
        { label: "Team", ariaLabel: "About Team", href: "/team" },
          { label: "Documentation", ariaLabel: "Documentation" },
          { label: "GitHub", ariaLabel: "GitHub" }
        ]
    },
    {
      label: "Useful Links", 
      bgColor: "#F2FFEB",
      textColor: "#88E755",
      links: [
        { label: "Changelog", ariaLabel: "Changelog" },
        { label: "Donate Us", ariaLabel: "Donate Us" },
        { label: "Discord", ariaLabel: "Discord Community"},
        { label: "Report Bugs", ariaLabel: "GitHub Issues"}
      ]
    },
    {
      label: "Contact",
      bgColor: "#88E755", 
      textColor: "#010710",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "X", ariaLabel: "X" },
        { label: "Reddit", ariaLabel: "Reddit" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <>
      <PrismLoader onLoadComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <div style={{ position: 'relative', backgroundColor: '#060010', minHeight: '200vh', width: '100%' }}>
          <TargetCursor 
            spinDuration={2}
            hideDefaultCursor={true}
            performanceMode={false} // Set to true for low-end devices
          />

          <div 
            style={{ 
              minHeight: '100vh',
              width: '100%',
              position: 'relative',
              backgroundColor: '#060010'
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const el = revealImgRef.current;
              if (el) {
                el.style.setProperty('--mx', `${x}px`);
                el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
              }
            }}
            onMouseLeave={() => {
              const el = revealImgRef.current;
              if (el) {
                el.style.setProperty('--mx', '-9999px');
                el.style.setProperty('--my', '-9999px');
              }
            }}
          >
            <header style={{ 
              position: 'sticky', 
              top: 0, 
              zIndex: 100,
              backgroundColor: 'rgba(6, 0, 16, 0.95)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}>
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
            
            <div style={{ position: 'relative', minHeight: '100vh', width: '100%', backgroundColor: '#060010', paddingBottom: '50vh' }}>
              <div style={{
                position: 'relative',
                top: isMobile ? '5vh' : '0',
                transform: isMobile ? 'scale(1.3)' : 'scale(1)',
                transformOrigin: 'center'
              }}>
                <LaserFlow
                  horizontalBeamOffset={0}
                  verticalBeamOffset={-0.13}
                  color="#88E755"
                />
              </div>

              <img 
                src="/prism-preview.png" 
                alt="Prism Preview"
                style={{ 
                  position: 'absolute',
                  top: isMobile ? '30%' : '35%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isMobile ? '90%' : '86%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: isMobile ? '12px' : '18px',
                  border: '2px solid #88E755',
                  zIndex: 6,
                  maxWidth: isMobile ? '500px' : '1200px'
                }}
              />

              <img
                src={isMobile ? "/PRISM3DMODEL(mobile).png" : "/prism-logo-3d.png"}
                alt="Prism 3D Logo"
                style={{
                  position: 'absolute',
                  top: isMobile ? '20%' : '25%',
                  left: isMobile ? '20%' : '22%',
                  transform: isMobile ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) rotate(-15deg)',
                  width: isMobile ? '200px' : '703.03px',
                  height: 'auto',
                  zIndex: 4,
                  filter: 'drop-shadow(0 12px 28px rgba(136, 231, 85, 0.45))',
                  pointerEvents: 'none'
                }}
              />

              {isMobile ? (
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  right: '5%',
                  transform: 'none',
                  color: '#88E755',
                  fontSize: '1.6rem',
                  fontFamily: 'Space Grotesk, sans-serif',
                  zIndex: 8,
                  textShadow: '0 0 20px rgba(136, 231, 85, 0.5)',
                  textAlign: 'right',
                  lineHeight: 1.2
                }}>
                  <div>Where AI</div>
                  <div>Meets Browser</div>
                </div>
              ) : (
                <Shuffle
                  text="Where AI Meets Browser"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  style={{
                    position: 'absolute',
                    top: '17%',
                    right: '5%',
                    color: '#88E755',
                    fontSize: '2.5rem',
                    fontFamily: 'Space Grotesk, sans-serif',
                    zIndex: 8,
                    textShadow: '0 0 20px rgba(136, 231, 85, 0.5)',
                    textAlign: 'left'
                  }}
                />
              )}

              <div style={{
                position: 'absolute',
                top: isMobile ? '95%' : '22%',
                right: isMobile ? 'auto' : '15%',
                left: isMobile ? '50%' : 'auto',
                transform: isMobile ? 'translateX(-50%)' : 'none',
                zIndex: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
              }}>
                <button
                  className="cursor-target"
                  onClick={handleDownload}
                  style={{
                    padding: isMobile ? '10px 20px' : '12px 24px',
                    backgroundColor: '#88E755',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    // Morph effect - change background and text color
                    e.target.style.backgroundColor = '#000';
                    e.target.style.color = '#88E755';
                    e.target.style.borderRadius = '20px';
                    e.target.style.transform = 'scale(1.05)';
                    
                    // Add morphing background effect
                    const morphBg = e.target.querySelector('.morph-bg');
                    if (morphBg) {
                      morphBg.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    // Revert morph effect
                    e.target.style.backgroundColor = '#88E755';
                    e.target.style.color = '#000';
                    e.target.style.borderRadius = '8px';
                    e.target.style.transform = 'scale(1)';
                    
                    // Hide morphing background
                    const morphBg = e.target.querySelector('.morph-bg');
                    if (morphBg) {
                      morphBg.style.opacity = '0';
                    }
                  }}
                >
                  {/* Morphing background effect */}
                  <div
                    className="morph-bg"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, rgba(136, 231, 85, 0.1) 100%)',
                      borderRadius: 'inherit',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0
                    }}
                  />
                  
                  <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '2px' }}>
                      <path d="M7.47 10.78a.749.749 0 0 0 1.06 0l3.75-3.75a.749.749 0 1 0-1.06-1.06L8.75 8.439V1.75a.75.75 0 0 0-1.5 0v6.689L4.78 5.97a.749.749 0 1 0-1.06 1.06l3.75 3.75Z" />
                      <path d="M3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                    Download
                  </span>
                </button>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <div style={{
                    color: '#88E755',
                    fontSize: '12px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '2px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    textAlign: 'center'
                  }}>
                    Download Preference
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: isMobile ? '12px' : '10px',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%'
                  }}>
                    <button
                      className="cursor-target"
                      onClick={() => setSelectedPlatform('Windows')}
                      style={{
                        padding: isMobile ? '8px 16px' : '8px 16px',
                        backgroundColor: selectedPlatform === 'Windows' ? '#88E755' : 'transparent',
                        color: selectedPlatform === 'Windows' ? '#000' : '#88E755',
                        border: '2px solid #88E755',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: isMobile ? '13px' : '14px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        minWidth: isMobile ? '110px' : 'auto',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedPlatform !== 'Windows') {
                          e.target.style.color = '#000';
                          e.target.style.backgroundColor = '#88E755';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedPlatform !== 'Windows') {
                          e.target.style.color = '#88E755';
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91v-6.84l10 .15z"/>
                      </svg>
                      Windows
                    </button>
                    <button
                      className="cursor-target"
                      onClick={() => setSelectedPlatform('Linux')}
                      style={{
                        padding: isMobile ? '8px 16px' : '8px 16px',
                        backgroundColor: selectedPlatform === 'Linux' ? '#88E755' : 'transparent',
                        color: selectedPlatform === 'Linux' ? '#000' : '#88E755',
                        border: '2px solid #88E755',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: isMobile ? '13px' : '14px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        minWidth: isMobile ? '110px' : 'auto',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedPlatform !== 'Linux') {
                          e.target.style.color = '#000';
                          e.target.style.backgroundColor = '#88E755';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedPlatform !== 'Linux') {
                          e.target.style.color = '#88E755';
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.5 2c-.8 0-1.5.3-2 .8-.6.5-.9 1.2-.9 2v.7c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2s.9 2 2 2c.2 0 .4 0 .6-.1v1.2c0 1.7 1.3 3 3 3s3-1.3 3-3V7.5c.2.1.4.1.6.1 1.1 0 2-.9 2-2s-.9-2-2-2c-.2 0-.4 0-.6.1V4.8c0-.8-.3-1.5-.9-2-.5-.5-1.2-.8-2-.8zM9 6.5c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm6 0c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm-3 9c-2.2 0-4 1.8-4 4v3h8v-3c0-2.2-1.8-4-4-4z"/>
                      </svg>
                      Linux
                    </button>
                  </div>
                </div>

                <img
                  ref={revealImgRef}
                  src="/prism-preview.png"
                  alt="Reveal effect"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    top: '-50%',
                    zIndex: 5,
                    mixBlendMode: 'lighten',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Scroll to top button */}
          {showScrollTop && (
            <button 
              className="cursor-target"
              onClick={scrollToTop}
              style={{
                position: 'fixed',
                bottom: isMobile ? '20px' : '30px',
                right: isMobile ? '20px' : '30px',
                width: isMobile ? '45px' : '50px',
                height: isMobile ? '45px' : '50px',
                borderRadius: '50%',
                backgroundColor: '#88E755',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(136, 231, 85, 0.3)',
                zIndex: 999,
                fontSize: isMobile ? '20px' : '24px',
                transition: 'all 0.3s ease'
              }}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          )}      
          
          {/* TextPressure Component */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '110%' : '88%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? '90%' : '80%',
            height: '200px',
            zIndex: 7
          }}>
            <TextPressure
              text="Prism Mode"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#88E755"
              strokeColor="#ff0000"
              minFontSize={isMobile ? 48 : 72}
            />
          </div>
          
          {/* TextPressure Component - Features */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '130%' : '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? '90%' : '80%',
            height: '200px',
            zIndex: 7
          }}>
            <TextPressure
              text="Features"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#88E755"
              strokeColor="#ff0000"
              minFontSize={isMobile ? 36 : 56}
            />
          </div>
          
          {/* MagicBento Component */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '200%' : '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1200px',
            zIndex: 6
          }}>
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="136, 231, 85"
            />
          </div>
          
          {/* TextPressure Component - Dev Space */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '280%' : '160%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? '90%' : '80%',
            height: '200px',
            zIndex: 7
          }}>
            <TextPressure
              text="Dev Space"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#88E755"
              strokeColor="#ff0000"
              minFontSize={isMobile ? 42 : 64}
            />
          </div>
          
          {/* Second MagicBento Component - Under Dev Space */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '300%' : '175%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1200px',
            zIndex: 6
          }}>
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="136, 231, 85"
            />
          </div>
          
          {/* Footer Component - Placed under Second MagicBento */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '380%' : '220%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            zIndex: 7
          }}>
            <Footer />
          </div>
          
          {/* Footer section to prevent white space */}
          <div style={{ 
            minHeight: '50vh',
            backgroundColor: '#060010',
            width: '100%',
            position: 'relative'
          }}>
            {/* This ensures no white space appears when scrolling on both mobile and desktop */}
          </div>
          
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <LaserFlowBoxExample />
  );
}