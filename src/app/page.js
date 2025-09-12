'use client';

import { useRef, useState, useEffect } from 'react';
import LaserFlow from "@/components/LaserFlow";
import CardNav from "@/components/CardNav";
import Shuffle from "@/components/Shuffle";
import CustomCursor from "@/components/CustomCursor";

function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
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
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <>
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
            top: '25%',
            right: '5%',
            color: '#88E755',
            fontSize: '2.5rem',
            fontFamily: 'Space Grotesk, sans-serif',
            zIndex: 8,
            textShadow: '0 0 20px rgba(136, 231, 85, 0.5)'
          }}
        />

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
    </>
    );
  }

export default function Home() {
  return (
    <LaserFlowBoxExample />
  );
}
