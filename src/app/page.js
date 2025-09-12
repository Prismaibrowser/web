'use client';

import { useRef, useState, useEffect } from 'react';
import LaserFlow from "@/components/LaserFlow";
import CardNav from "@/components/CardNav";
import Shuffle from "@/components/Shuffle";
import CustomCursor from "@/components/CustomCursor";
import StarBorder from "@/components/StarBorder";

function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <CustomCursor />
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
      
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
        <LaserFlow
          horizontalBeamOffset={0}
          verticalBeamOffset={-0.13}
          color="#88E755"
        />

        <img 
          src="/prism-preview.png" 
          alt="Prism Preview"
          style={{ 
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '86%',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '18px',
            border: '2px solid #88E755',
            zIndex: 6,
            maxWidth: '1200px'
          }}
        />

        <img
          src="/prism-logo-3d.png"
          alt="Prism 3D Logo"
          style={{
            position: 'absolute',
            top: '40%',
            left: '22%',
            transform: 'translate(-50%, -50%) rotate(-15deg)',
            width: '703.03px',
            height: 'auto',
            zIndex: 4,
            filter: 'drop-shadow(0 12px 28px rgba(136, 231, 85, 0.45))',
            pointerEvents: 'none'
          }}
        />

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
            top: '21.5%',
            right: '5%',
            color: '#88E755',
            fontSize: '2.5rem',
            fontFamily: 'Space Grotesk, sans-serif',
            zIndex: 8,
            textShadow: '0 0 20px rgba(136, 231, 85, 0.5)'
          }}
        />

        <div style={{
          position: 'absolute',
          top: '35%',
          right: '15%',
          zIndex: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}>
          <button
            onClick={handleDownload}
            style={{
              padding: '12px 24px',
              backgroundColor: '#88E755',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '16px',
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
              gap: '10px',
              alignItems: 'center'
            }}>
            <button
              onClick={() => setSelectedPlatform('Windows')}
              style={{
                padding: '8px 16px',
                backgroundColor: selectedPlatform === 'Windows' ? '#88E755' : 'transparent',
                color: selectedPlatform === 'Windows' ? '#000' : '#88E755',
                border: '2px solid #88E755',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
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
              onClick={() => setSelectedPlatform('Linux')}
              style={{
                padding: '8px 16px',
                backgroundColor: selectedPlatform === 'Linux' ? '#88E755' : 'transparent',
                color: selectedPlatform === 'Linux' ? '#000' : '#88E755',
                border: '2px solid #88E755',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
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
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.504 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm-3.133 12.652c-.78 0-1.413-.633-1.413-1.413 0-.78.633-1.413 1.413-1.413.78 0 1.413.633 1.413 1.413 0 .78-.633 1.413-1.413 1.413zm3.133-4.696c-1.005 0-1.82-.815-1.82-1.82 0-1.005.815-1.82 1.82-1.82 1.005 0 1.82.815 1.82 1.82 0 1.005-.815 1.82-1.82 1.82zm3.133 4.696c-.78 0-1.413-.633-1.413-1.413 0-.78.633-1.413 1.413-1.413.78 0 1.413.633 1.413 1.413 0 .78-.633 1.413-1.413 1.413z"/>
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
      
      {/* Additional content sections for scrolling */}
      <div style={{ 
        padding: '80px 20px',
        backgroundColor: '#0D0716',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: '#88E755'
        }}>
          Scroll With Ease
        </h2>
        <p style={{ 
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Explore the seamless vertical scrolling experience of Prism Web. Our interface is designed to provide 
          fluid navigation through content without any overflow issues.
        </p>
      </div>
      
       <div style={{ 
         padding: '80px 20px',
         backgroundColor: '#0D0716',
         color: '#fff',
         textAlign: 'center'
       }}>
        <h2 style={{ 
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: '#88E755'
        }}>
          Advanced Features
        </h2>
        <p style={{ 
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Discover the powerful capabilities of our platform, designed to enhance your browsing experience.
        </p>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
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
            fontSize: '24px',
            transition: 'all 0.3s ease'
          }}
          aria-label="Scroll to top"
        >
          ↑
          </button>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <LaserFlowBoxExample />
  );
}
