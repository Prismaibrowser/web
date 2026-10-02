'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { BiMailSend } from 'react-icons/bi';
import { FaInstagram, FaRegListAlt, FaYoutube, FaReddit, FaLinkedin, FaGithub, FaDiscord, FaBug, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiCubeFocusDuotone } from 'react-icons/pi';
import { TbCube3dSphere } from 'react-icons/tb';




const solutions = [
  {
    label: 'Report a Bug',
    description: 'Help us improve by reporting issues',
    icon: FaBug,
  },
  {
    label: 'Discord',
    description: 'Join our community discussions',
    icon: FaDiscord,
  },
];

const resources = [
  {
    label: 'Documentation',
    description: 'Comprehensive guides and API docs',
  },
  {
    label: 'Changelog',
    description: 'Latest updates and releases',
  },
  {
    label: 'GitHub README',
    description: 'Open source repository info',
  },
];

const aboutUs = [
  {
    label: 'Privacy Policy',
    description: 'Your data protection matters',
    icon: FaShieldAlt,
    href: '/privacy',
  },
  {
    label: 'GitHub',
    description: 'Open source repository',
    icon: FaGithub,
    href: 'https://github.com/Prismaibrowser',
  },
];

const Footer = ({ onDownloadClick }) => {
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
    if (onDownloadClick) {
      onDownloadClick();
    }
  };

  return (
    <footer style={{
      backgroundColor: '#090c12',
      color: '#ffffff',
      position: 'relative',
      width: '100%',
      padding: isMobile ? '60px 5%' : '80px 10%',
      borderTop: '2px solid rgba(0, 223, 129, 0.2)'
    }}>
      <div className="footer-container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Brand and Logo Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <Image
            src="/footer-logo.png"
            alt="PrismSpace Logo"
            width={isMobile ? 180 : 240}
            height={isMobile ? 40 : 50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(57%) sepia(41%) saturate(2396%) hue-rotate(81deg) brightness(102%) contrast(93%)'
            }}
          />
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: isMobile ? '1.1rem' : '1.4rem',
            fontWeight: 700,
            color: '#00df81',
            textAlign: 'center',
            textTransform: 'lowercase',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            ai dev environment with the ml to back it up.
          </p>
        </div>

        {/* Download Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          margin: '40px 0',
          padding: '40px 20px',
          background: 'rgba(0, 223, 129, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(0, 223, 129, 0.2)'
        }}>
          <button
            className="cursor-target prism-btn"
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

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}>
            <span className="tech-label" style={{ color: '#00df81' }}>
              Platform
            </span>
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button
                className="cursor-target"
                onClick={() => setSelectedPlatform('Windows')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedPlatform === 'Windows' ? '#00df81' : 'transparent',
                  color: selectedPlatform === 'Windows' ? '#000000' : '#00df81',
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
                  <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91v-6.84l10 .15z"/>
                </svg>
                WINDOWS
              </button>
              <button
                className="cursor-target"
                onClick={() => setSelectedPlatform('Linux')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedPlatform === 'Linux' ? '#00df81' : 'transparent',
                  color: selectedPlatform === 'Linux' ? '#000000' : '#00df81',
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
                    'brightness(0) saturate(100%)' : 
                    'brightness(0) saturate(100%) invert(57%) sepia(41%) saturate(2396%) hue-rotate(81deg) brightness(102%) contrast(93%)'
                }} />
                LINUX
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? '40px' : '60px',
          marginTop: '60px',
          paddingTop: '60px',
          borderTop: '1px solid rgba(0, 223, 129, 0.2)'
        }}>
          
          {/* Contact Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h3 className="tech-label" style={{ 
              color: '#00df81',
              marginBottom: '8px'
            }}>
              GET IN TOUCH
            </h3>
            <a 
              href="mailto:prismaibrowser@gmail.com" 
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '13px',
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00df81';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#cbd5e1';
              }}
            >
              <FaArrowRightLong style={{ fontSize: '12px' }} />
              prismaibrowser@gmail.com
            </a>
            
            <h3 className="tech-label" style={{ 
              color: '#00df81',
              marginTop: '16px',
              marginBottom: '8px'
            }}>
              FOLLOW US
            </h3>
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              {[
                { icon: FaXTwitter, label: "X (Twitter)", href: "https://x.com/prismaibrowser" },
                { icon: FaReddit, label: "Reddit", href: "https://www.reddit.com/user/Prism-Browser/" },
                { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prism-browser-702b08385/" },
                { icon: FaDiscord, label: "Discord", href: "#" },
                { icon: FaGithub, label: "GitHub", href: "https://github.com/Prismaibrowser" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '1px solid rgba(0, 223, 129, 0.3)',
                    background: 'rgba(0, 223, 129, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00df81',
                    fontSize: '18px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 223, 129, 0.15)';
                    e.target.style.borderColor = '#00df81';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 223, 129, 0.05)';
                    e.target.style.borderColor = 'rgba(0, 223, 129, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* About Us Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h3 className="tech-label" style={{ 
              color: '#00df81',
              marginBottom: '8px'
            }}>
              ABOUT US
            </h3>
            {aboutUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a 
                  key={index} 
                  href={item.href}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '13px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00df81';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#cbd5e1';
                  }}
                >
                  <IconComponent style={{ fontSize: '16px', color: '#00df81' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                      {item.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Solutions Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h3 className="tech-label" style={{ 
              color: '#00df81',
              marginBottom: '8px'
            }}>
              SOLUTIONS
            </h3>
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div 
                  key={index}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '13px',
                    color: '#cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00df81';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#cbd5e1';
                  }}
                >
                  <IconComponent style={{ fontSize: '16px', color: '#00df81' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{solution.label}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                      {solution.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resources Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h3 className="tech-label" style={{ 
              color: '#00df81',
              marginBottom: '8px'
            }}>
              RESOURCES
            </h3>
            {resources.map((resource, index) => (
              <div 
                key={index}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  color: '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00df81';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                }}
              >
                <div style={{ fontWeight: 600 }}>{resource.label}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                  {resource.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          marginTop: '60px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(0, 223, 129, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#94a3b8',
            margin: 0
          }}>
            © 2026 PrismSpace. Apache 2.0 License.
          </p>
        </div>
      {/* Close footer-container */}
      </div>
    </footer>
  );
};

export default Footer;