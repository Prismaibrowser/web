'use client';

import { useRef, useState, useEffect } from 'react';
import CardNav from "@/components/CardNav";
import Shuffle from "@/components/Shuffle";
import TargetCursor from "@/components/TargetCursor";
import TextPressure from "@/components/TextPressure";
import MagicBento from "@/components/MagicBento";
import Footer from "@/components/Footer";
import PrismLoader from "@/components/PrismLoader";
import CustomScrollbar from "@/components/CustomScrollbar";

function PrismWebApp() {
  const revealImgRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('Windows'); // Default to prevent hydration mismatch
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // Track client-side hydration
  
  useEffect(() => {
    // Mark that we're on the client side
    setIsClient(true);
    
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
    
    // Enhanced scroll behavior setup
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    
    // Prevent scroll lag and ensure smooth scrolling
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.overflowY = 'auto';
    
    // Initial check after hydration
    handleResize();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Only detect OS after client-side hydration to prevent mismatch
    if (isClient) {
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
    }
  }, [isClient]);
  
  const scrollToTop = () => {
    // Enhanced scroll to top with better performance
    try {
      // Method 1: Instant scroll first to prevent lag
      window.scrollTo(0, 0);
      
      // Method 2: Then apply smooth scroll for better UX
      setTimeout(() => {
        window.scrollTo({ 
          top: 0, 
          left: 0,
          behavior: 'smooth' 
        });
      }, 10);
      
      // Method 3: Ensure we're at the top
      setTimeout(() => {
        if (window.scrollY > 0) {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }, 100);
      
    } catch (error) {
      // Emergency fallback
      console.warn('Scroll to top error:', error);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  };

  const handleDownload = () => {
    console.log(`Downloading for ${selectedPlatform}`);
    // Add actual download logic here based on selectedPlatform
  };

  const navItems = [
    {
      label: "About",
      bgColor: "#010710",
      textColor: "#e4eae2ff",
      links: [
        { label: "Team", ariaLabel: "About Team", href: "/team" },
        { label: "Privacy Policy", ariaLabel: "Privacy Policy", href: "/privacy" },
        { label: "Documentation", ariaLabel: "Documentation" },
        { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/Prismaibrowser" }
      ]
    },
    {
      label: "Useful Links", 
      bgColor: "#F2FFEB",
      textColor: "#141514ff",
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
        { label: "Email", ariaLabel: "Email us", href: "mailto:prismaibrowser@gmail.com" },
        { label: "X", ariaLabel: "X" },
        { label: "Reddit", ariaLabel: "Reddit" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
//laserflow
  return (
    <>
      <PrismLoader onLoadComplete={() => setIsLoading(false)} />
      <CustomScrollbar />
      {!isLoading && (
        <div style={{ position: 'relative', backgroundColor: '#060010', width: '100%', overflow: 'hidden' }}>
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: '-1px',
              marginTop: '-1px',
              marginTrim: '50px',
              left: '245px',
              width: '70%',
              height: '9%',
              objectFit: 'cover',
              alignContent: 'center',
              zIndex: 1,
              filter: 'blur(8px)',
             
            }}
          >
            <source src="/laserflow.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Fixed Header - Rebuilt with fixed positioning */}
          <header style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: 'transparent',
            width: '100%',
            pointerEvents: 'none'
          }}>
            <div style={{ pointerEvents: 'auto' }}>
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
            </div>
          </header>
          <TargetCursor 
            spinDuration={2}
            hideDefaultCursor={!isMobile} // Disable custom cursor on mobile
            performanceMode={isMobile} // Enable performance mode on mobile devices
          />

          {/* Main Content Container - Using proper document flow */}
          <main style={{ 
            position: 'relative',
            width: '100%',
            backgroundColor: 'transparent',
            zIndex: 5,
            paddingTop: '80px'
          }}>
            
            {/* Hero Section */}
            <section 
              style={{ 
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                backgroundColor: 'transparent',
                zIndex: 10,
                paddingBottom: '10vh'
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
              <div style={{
                position: 'relative',
                top: isClient && isMobile ? '5vh' : '0',
                transform: isClient && isMobile ? 'scale(1.3)' : 'scale(1)',
                transformOrigin: 'center'
              }}>
              </div>

              {/* iframe positioned above the main image */}
              <iframe
                src="https://prasanthp.me/prism-homepage/" // Replace with your desired URL
                title="Embedded Content"
                className="cursor-target" // Enable custom cursor tracking
                style={{
                  position: 'absolute',
                  top: isClient && isMobile ? '25%' : '39%',
                  left: '56.6%',
                  transform: 'translateX(-50%)',
                  width: isClient && isMobile ? '300px' : '978px',
                  height: isClient && isMobile ? '200px' : '920px',
                  borderBlockColor: 'transparent',
                  border: '2px solid #88E755',
                  borderRadius: isClient && isMobile ? '8px' : '12px',
                  zIndex: 7, // Higher than the image below
                  //backgroundColor: 'rgba(6, 0, 16, 0.9)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  //boxShadow: '0 8px 32px rgba(136, 231, 85, 0.2)'
                  cursor: 'none', // Disable default system cursor
                  pointerEvents: 'auto' // Ensure pointer events work for custom cursor
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <img 
                src="/prism-preview.webp" 
                alt="Prism Preview"
                style={{ 
                  position: 'absolute',
                  top: isClient && isMobile ? '30%' : '42%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isClient && isMobile ? '90%' : '86%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: isClient && isMobile ? '12px' : '18px',
                  border: '2px solid #88E755',
                  zIndex: 6,
                  maxWidth: isClient && isMobile ? '500px' : '1200px',
                  marginTop: '-30px'
                }}
              />

              <img
                src={isClient && isMobile ? "/PRISM3DMODEL(mobile).png" : "/prism-logo-3d.png"}
                alt="Prism 3D Logo"
                className="logo-hover-rotate"
                style={{
                  position: 'absolute',
                  top: isClient && isMobile ? '20%' : '25%',
                  left: isClient && isMobile ? '20%' : '22%',
                  transform: isClient && isMobile ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) rotate(-15deg)',
                  width: isClient && isMobile ? '200px' : '703.03px',
                  height: 'auto',
                  zIndex: 4,
                  filter: 'drop-shadow(0 12px 28px rgba(136, 231, 85, 0.45))',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  transition: 'transform 0.5s ease-in-out'
                }}
              />

              {/* Mobile text version */}
              <div style={{
                display: isClient && isMobile ? 'block' : 'none',
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
              
              {/* Desktop text version */}
              <div style={{ display: isClient && isMobile ? 'none' : 'block' }}>
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
              </div>

              <div style={{
                position: 'absolute',
                top: isClient && isMobile ? '95%' : '25%',
                right: isClient && isMobile ? 'auto' : '15%',
                left: isClient && isMobile ? '50%' : 'auto',
                transform: isClient && isMobile ? 'translateX(-50%)' : 'none',
                zIndex: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
              }}>
                <button
                  className="cursor-target download-button"
                  onClick={handleDownload}
                  style={{
                    padding: isClient && isMobile ? '10px 20px' : '12px 24px',
                    backgroundColor: '#88E755',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: isClient && isMobile ? '14px' : '16px',
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
                    const button = e.currentTarget;
                    button.style.backgroundColor = '#000';
                    button.style.color = '#88E755';
                    button.style.borderRadius = '20px';
                    button.style.transform = 'scale(1.05)';
                    
                    // Add morphing background effect
                    const morphBg = button.querySelector('.morph-bg');
                    if (morphBg) {
                      morphBg.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    // Revert morph effect
                    const button = e.currentTarget;
                    button.style.backgroundColor = '#88E755';
                    button.style.color = '#000';
                    button.style.borderRadius = '8px';
                    button.style.transform = 'scale(1)';
                    
                    // Hide morphing background
                    const morphBg = button.querySelector('.morph-bg');
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
                    gap: isClient && isMobile ? '12px' : '10px',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%'
                  }}>
                    <button
                      className="cursor-target"
                      onClick={() => setSelectedPlatform('Windows')}
                      style={{
                        padding: isClient && isMobile ? '8px 16px' : '8px 16px',
                        backgroundColor: selectedPlatform === 'Windows' ? '#88E755' : 'transparent',
                        color: selectedPlatform === 'Windows' ? '#000' : '#88E755',
                        border: '2px solid #88E755',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: isClient && isMobile ? '13px' : '14px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        minWidth: isClient && isMobile ? '110px' : 'auto',
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
                        padding: isClient && isMobile ? '8px 16px' : '8px 16px',
                        backgroundColor: selectedPlatform === 'Linux' ? '#88E755' : 'transparent',
                        color: selectedPlatform === 'Linux' ? '#000' : '#88E755',
                        border: '2px solid #88E755',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: isClient && isMobile ? '13px' : '14px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        minWidth: isClient && isMobile ? '110px' : 'auto',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedPlatform !== 'Linux') {
                          e.target.style.color = '#000';
                          e.target.style.backgroundColor = '#88E755';
                          // Change Linux logo to black on hover
                          const img = e.target.querySelector('img');
                          if (img) {
                            img.style.filter = 'brightness(0) saturate(100%)';
                          }
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedPlatform !== 'Linux') {
                          e.target.style.color = '#88E755';
                          e.target.style.backgroundColor = 'transparent';
                          // Change Linux logo back to green when not hovering
                          const img = e.target.querySelector('img');
                          if (img) {
                            img.style.filter = 'brightness(0) saturate(100%) invert(57%) sepia(41%) saturate(2396%) hue-rotate(81deg) brightness(102%) contrast(93%)';
                          }
                        }
                      }}
                    >
                      <img src="/linux.png" alt="Linux" width="16" height="18" style={{ 
                        filter: selectedPlatform === 'Linux' ? 'brightness(0) saturate(100%)' : 'brightness(0) saturate(100%) invert(57%) sepia(41%) saturate(2396%) hue-rotate(81deg) brightness(102%) contrast(93%)', 
                        transition: 'filter 0.3s ease' 
                      }} />
                      Linux
                    </button>
                  </div>
                </div>

                <img
                  ref={revealImgRef}
                  src="/prism-preview.webp"
                  alt="Reveal effect"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    zIndex: 5,
                    filter: 'blur(20px) brightness(1.2) contrast(1.2)',
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
            </section>
          
          {/* Scroll to top button */}
          {showScrollTop && (
            <button 
              className="cursor-target"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Scroll to top button clicked'); // Debug log
                scrollToTop();
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#66CC44';
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 20px rgba(136, 231, 85, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#88E755';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 12px rgba(136, 231, 85, 0.3)';
              }}
              style={{
                position: 'fixed',
                bottom: isClient && isMobile ? '20px' : '30px',
                right: isClient && isMobile ? '20px' : '30px',
                width: isClient && isMobile ? '50px' : '55px',
                height: isClient && isMobile ? '50px' : '55px',
                borderRadius: '50%',
                backgroundColor: '#88E755',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(136, 231, 85, 0.3)',
                zIndex: 9998,
                fontSize: isClient && isMobile ? '22px' : '26px',
                fontWeight: 'bold',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                userSelect: 'none',
                outline: 'none',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
              aria-label="Scroll to top"
              title="Back to top"
            >
              ↑
            </button>
          )}      
          
            {/* Prism Mode Section */}
            <section style={{
              position: 'relative',
              width: '100%',
              padding: isClient && isMobile ? '15vh 5%' : '15vh 10%',
              zIndex: 2
            }}>
              <div style={{
                width: isClient && isMobile ? '90%' : '80%',
                height: '200px',
                margin: '0 auto'
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
                  minFontSize={isClient && isMobile ? 48 : 72}
                />
              </div>
            </section>
            
            {/* Features Section */}
            <section style={{
              position: 'relative',
              width: '100%',
              padding: isClient && isMobile ? '15vh 5%' : '15vh 10%',
              zIndex: 2
            }}>
              <div style={{
                width: isClient && isMobile ? '90%' : '80%',
                height: '200px',
                margin: '0 auto'
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
                  minFontSize={isClient && isMobile ? 36 : 56}
                />
              </div>
            </section>
            
            {/* Features Bento Section */}
            <section style={{
              position: 'relative',
              width: '100%',
              padding: isClient && isMobile ? '15vh 0' : '15vh 0',
              zIndex: 6
            }}>
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto'
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
            </section>
            
            {/* Dev Space Section */}
            <section style={{
              position: 'relative',
              width: '100%',
              padding: isClient && isMobile ? '15vh 5%' : '15vh 10%',
              zIndex: 2
            }}>
              <div style={{
                width: isClient && isMobile ? '90%' : '80%',
                height: '200px',
                margin: '0 auto'
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
                  minFontSize={isClient && isMobile ? 42 : 64}
                />
              </div>
            </section>
            
            {/* Dev Space Bento Section */}
            <section style={{
              position: 'relative',
              width: '100%',
              padding: isClient && isMobile ? '15vh 0' : '15vh 0',
              zIndex: 6
            }}>
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto'
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
            </section>
            
          </main>
          
          {/* Footer Section - At the utmost bottom using proper document flow */}
          <footer style={{
            position: 'relative',
            width: '100%',
            zIndex: 3,
            marginTop: isClient && isMobile ? '5vh' : '8vh',
            paddingTop: isClient && isMobile ? '8vh' : '10vh',
            paddingBottom: '0'
          }}>
            <Footer />
          </footer>
          
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <PrismWebApp />
  );
}