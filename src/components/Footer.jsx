'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { BiMailSend } from 'react-icons/bi';
import { FaInstagram, FaRegListAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiCubeFocusDuotone } from 'react-icons/pi';
import { TbCube3dSphere } from 'react-icons/tb';
import Shuffle from './Shuffle';
import './Footer.css';




const solutions = [
  {
    label: 'Life Cycle Analysis',
    description: 'Fusce sed orci sit amet nisi',
    icon: FaRegListAlt,
  },
  {
    label: 'Corporate Inventory',
    description: 'Fusce sed orci sit amet nisi',
    icon: PiCubeFocusDuotone,
  },
  {
    label: 'Scope 3 Decarbonaization',
    description: 'Fusce sed orci sit amet nisi',
    icon: TbCube3dSphere,
  },
];

const resources = [
  {
    label: 'Success Stories',
    description: 'Our Customers in action',
  },
  {
    label: 'Guides',
    description: 'Whitepapers and move',
  },
  {
    label: 'Webinars',
    description: 'Live and on-demand',
  },
];

const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className="social-button"
      aria-label={label}
    >
      {children}
    </a>
  );
};

const Footer = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Windows');
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    handleResize();
    
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
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownload = () => {
    console.log(`Downloading for ${selectedPlatform}`);
    // Add actual download logic here based on selectedPlatform
  };

  return (
    <footer className="footer-new">


      <div className="footer-container">
        {/* Brand and Logo Section */}
        <div className="brand-section">
          <div className="brand-content">
            <div className="brand-logo">
              <img
                src="/prism-logo-3d.png"
                alt="Prism AI Browser"
                className="logo-image logo-enlarged"
              />
              <span className="logo-text logo-text-enlarged">Prism AI Browser</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Experience AI Agentic browsing Text */}
        <div style={{
          margin: '1.5rem 0',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 20,
          minHeight: '60px',
          alignItems: 'center'
        }}>
          <h2 style={{
            color: '#88E755',
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            fontFamily: 'Space Grotesk, sans-serif',
            textShadow: '0 0 20px rgba(136, 231, 85, 0.8)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 21,
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: 0,
            padding: 0
          }}>
            Experience AI Agentic browsing
          </h2>
        </div>

        {/* Download Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          margin: '2rem 0'
        }}>
          <button
            onClick={handleDownload}
            style={{
              padding: isMobile ? '12px 24px' : '14px 28px',
              backgroundColor: '#88E755',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#000';
              e.target.style.color = '#88E755';
              e.target.style.borderRadius = '20px';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#88E755';
              e.target.style.color = '#000';
              e.target.style.borderRadius = '8px';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.47 10.78a.749.749 0 0 0 1.06 0l3.75-3.75a.749.749 0 1 0-1.06-1.06L8.75 8.439V1.75a.75.75 0 0 0-1.5 0v6.689L4.78 5.97a.749.749 0 1 0-1.06 1.06l3.75 3.75Z" />
              <path d="M3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
            Download Prism Browser
          </button>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}>
            <div style={{
              color: '#88E755',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'Space Grotesk, sans-serif',
              textAlign: 'center'
            }}>
              Choose Your Platform
            </div>
            <div style={{
              display: 'flex',
              gap: isMobile ? '15px' : '12px',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => setSelectedPlatform('Windows')}
                style={{
                  padding: isMobile ? '10px 18px' : '10px 20px',
                  backgroundColor: selectedPlatform === 'Windows' ? '#88E755' : 'transparent',
                  color: selectedPlatform === 'Windows' ? '#000' : '#88E755',
                  border: '2px solid #88E755',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: isMobile ? '120px' : '130px',
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91v-6.84l10 .15z"/>
                </svg>
                Windows
              </button>
              <button
                onClick={() => setSelectedPlatform('Linux')}
                style={{
                  padding: isMobile ? '10px 18px' : '10px 20px',
                  backgroundColor: selectedPlatform === 'Linux' ? '#88E755' : 'transparent',
                  color: selectedPlatform === 'Linux' ? '#000' : '#88E755',
                  border: '2px solid #88E755',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: isMobile ? '120px' : '130px',
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
                <img src="/linux.png" alt="Linux" width="18" height="20" style={{ 
                  filter: selectedPlatform === 'Linux' ? 'brightness(0) saturate(100%)' : 'brightness(0) saturate(100%) invert(59%) sepia(93%) saturate(318%) hue-rotate(81deg) brightness(119%) contrast(119%)', 
                  transition: 'filter 0.3s ease' 
                }} />
                Linux
              </button>
            </div>
          </div>
        </div>

        {/* Shuffle Text Component */}
        <div className="shuffle-section">
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
              color: '#88E755',
              fontSize: '2rem',
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 20px rgba(136, 231, 85, 0.5)',
              textAlign: 'center',
              position: 'relative',
              zIndex: 15
            }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="footer-grid">
          {/* Contact Section */}
          <div className="footer-column">
            <p className="column-title">GET IN TOUCH</p>
            <div className="contact-item">
              <FaArrowRightLong className="contact-icon" />
              <span>hey@prismai.browser</span>
            </div>
            <p className="column-title social-title">FOLLOW US</p>
            <div className="social-buttons">
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="footer-column">
            <p className="column-title">SOLUTIONS</p>
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="solution-item">
                  <IconComponent className="solution-icon" />
                  <div className="solution-content">
                    <p className="solution-label">{solution.label}</p>
                    <p className="solution-description">{solution.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resources Section */}
          <div className="footer-column">
            <p className="column-title">RESOURCES</p>
            {resources.map((resource, index) => (
              <div key={index} className="resource-item">
                <p className="resource-label">{resource.label}</p>
                <p className="resource-description">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      {/* Close footer-container */}
      </div>
    </footer>
  );
};

export default Footer;