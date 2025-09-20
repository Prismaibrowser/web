'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChromaGrid from '../../components/ChromaGrid';
import CardNav from '../../components/CardNav';
import Footer from '../../components/Footer';
import TargetCursor from '../../components/TargetCursor';
import ParticleEffects from '../../components/ParticleEffects';
import CustomScrollbar from '../../components/CustomScrollbar';
import teamData from './team-data.json';

export default function TeamPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
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
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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
  
  const navItems = [
    {
      label: "About",
      bgColor: "#010710",
      textColor: "#88E755",
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
      textColor: "#88E755",
      links: [
        { label: "Changelog", ariaLabel: "Changelog" },
        { label: "Donate Us", ariaLabel: "Donate Us" },
        { label: "Discord", ariaLabel: "Discord Community"},
        { label: "Report Bugs", ariaLabel: "GitHub Issues"}
      ]
    },
    {label: "Contact",
      bgColor: "#88E755", 
      textColor: "#010710",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:prismaibrowser@gmail.com" },
        { label: "X", ariaLabel: "X" },
        { label: "Reddit", ariaLabel: "Reddit", href: "https://www.reddit.com/user/Prism-Browser/" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#030A15', 
      minHeight: '100vh', 
      width: '100%',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Custom Scrollbar */}
      <CustomScrollbar />
      {/* Particle Effects Background */}
      <ParticleEffects />
      {/* Custom Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={!isMobile} // Disable custom cursor on mobile
        performanceMode={isMobile} // Enable performance mode on mobile
      />
      {/* Navigation Header */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        backgroundColor: 'rgba(3, 10, 21, 0.95)',
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

      {/* Page Content */}
      <main style={{ 
        padding: '4rem 1rem', 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Page Title */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          color: '#88E755',
          position: 'relative'
        }}>
          {/* Back Button - positioned close to the title */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '-4rem' : '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10
          }}>
            <button
              onClick={() => {
                router.push('/');
              }}
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
                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.451.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"/>
              </svg>
              Back to Home
            </button>
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            fontFamily: 'Space Grotesk, sans-serif',
            textShadow: '0 0 30px rgba(136, 231, 85, 0.5)',
            marginBottom: '1rem',
            background: 'linear-gradient(145deg, #88E755, #66CC44)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Meet Our Team
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'Space Grotesk, sans-serif',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            The passionate minds behind Prism Browser, dedicated to revolutionizing your web experience with AI-powered innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{ 
          minHeight: '800px', 
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          overflow: 'visible',
          paddingBottom: '2rem'
        }}>
          <ChromaGrid 
            items={teamData}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            columns={3}
            rows={2}
          />
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button 
            className="cursor-target"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
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
              bottom: isMobile ? '20px' : '30px',
              right: isMobile ? '20px' : '30px',
              width: isMobile ? '50px' : '55px',
              height: isMobile ? '50px' : '55px',
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
              fontSize: isMobile ? '22px' : '26px',
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

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}