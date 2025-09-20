'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CardNav from "@/components/CardNav";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/TargetCursor";
import CustomScrollbar from "@/components/CustomScrollbar";
import ParticleEffects from "@/components/ParticleEffects";

export default function PrivacyPolicy() {
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
    {
      label: "Contact",
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
      color: '#fff',
      fontFamily: 'Space Grotesk, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Particle Effects Background */}
      <ParticleEffects />
      <CustomScrollbar />
      {/* Custom Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={!isMobile}
        performanceMode={isMobile}
      />

      {/* Fixed Header */}
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

      {/* Main Content */}
      <main style={{
        padding: '4rem 1rem', 
        maxWidth: '800px', 
        margin: '0 auto',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        lineHeight: '1.6',
        zIndex: 10
      }}>
        {/* Privacy Policy Content */}
        <div style={{ 
          fontSize: isMobile ? '16px' : '18px',
          marginTop: '4rem',
          textAlign: 'left',
          lineHeight: '1.8',
          position: 'relative'
        }}>
          {/* Back Button - positioned close to the title */}
          <div style={{
            position: 'absolute',
            top: '-3rem',
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
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#88E755',
            textAlign: 'center'
          }}>
            Privacy Policy
          </h1>

          <p style={{ textAlign: 'center', marginBottom: '50px', color: '#ccc', fontSize: '16px' }}>
            Last updated: 2025-02-5
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            Introduction
          </h2>

          <p style={{ marginBottom: '20px' }}>
            Welcome to Prism AI Browser! Your privacy is our priority. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to protect your data when you use Prism AI Browser.
          </p>

          <p style={{
            marginBottom: '40px',
            fontWeight: '600',
            color: '#88E755',
            textAlign: 'center',
            fontSize: isMobile ? '1.1rem' : '1.2rem'
          }}>
            We don&apos;t sell data - We don&apos;t collect data - We don&apos;t track you
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            1. Information We Do Not Collect
          </h2>

          <p style={{ marginBottom: '30px' }}>
            Prism AI Browser is designed with privacy in mind. We do not collect, store, or share any of your personal data. Here&apos;s what that means:
          </p>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            1.1. No Telemetry
          </h3>

          <p style={{ marginBottom: '25px' }}>
            We do not collect any telemetry data or crash reports.
          </p>

          <p style={{ marginBottom: '30px' }}>
            Prism AI Browser has stripped out telemetry built into Mozilla Firefox. We have removed all telemetry data collection and crash reports.
          </p>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            1.2. No Personal Data Collection
          </h3>

          <p style={{ marginBottom: '30px' }}>
            Prism AI Browser does not collect any personal information such as your IP address, browsing history, search queries, or form data.
          </p>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            1.3. No Third-Party Tracking
          </h3>

          <p style={{ marginBottom: '30px' }}>
            We do not allow third-party trackers or analytics tools to operate within Prism AI Browser. Your browsing activity remains entirely private and is not shared with any third party. Mozilla is not considered a third party as it is the base of Prism AI Browser.
          </p>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            1.4. External connections made at startup
          </h3>

          <p style={{ marginBottom: '30px' }}>
            Prism AI Browser may make external connections at startup to check for updates and ensure the browser is up to date on plugins, addons, check for connectivity and Geolocation/push notifications services in order to comply with web standards. We, at Prism AI Browser, do not collect any data from these connections, but they may be logged by third-party services or websites you visit. These connections are necessary for the proper functioning of the browser and are not used for tracking or profiling purposes. They can be disabled through the browser flags (about:config).
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            2. Information Stored Locally on Your Device
          </h2>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            2.1. Browsing Data
          </h3>

          <p style={{ marginBottom: '25px' }}>
            Prism AI Browser stores certain data locally on your device to enhance your browsing experience. This includes:
          </p>

          <div style={{ marginBottom: '30px', paddingLeft: '20px' }}>
            <p style={{ marginBottom: '15px' }}>
              <strong>Cookies:</strong> Cookies are stored locally on your device and are not shared with Prism AI Browser or any third party. You have full control over the management of cookies through the browser&apos;s settings.
            </p>
            <p style={{ marginBottom: '15px' }}>
              <strong>Cache and Temporary Files:</strong> Prism AI Browser may store cache files and other temporary data locally to improve performance. These files can be cleared at any time through the browser&apos;s settings.
            </p>
          </div>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            2.2. Settings and Preferences
          </h3>

          <p style={{ marginBottom: '30px' }}>
            Any customizations, settings, and preferences you make within Prism AI Browser are stored locally on your device. We do not have access to or control over this data.
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            3. Sync Feature
          </h2>

          <p style={{ marginBottom: '15px' }}>
            Prism AI Browser offers a &quot;Sync&quot; feature, which is implemented using Mozilla Firefox&apos;s Sync feature. This feature allows you to synchronize your bookmarks, history, passwords, and other data across multiple devices. For this feature to work, your data is encrypted and stored on Mozilla&apos;s servers and is treated in accordance with their Privacy Policy. We, at Prism AI Browser, cannot view any of this data.
          </p>

          <div style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <p style={{ marginBottom: '10px' }}>
              <a href="https://www.mozilla.org/en-US/privacy/mozilla-accounts/" target="_blank" rel="noopener noreferrer" className="cursor-target" style={{ color: '#88E755', textDecoration: 'underline' }}>
                Mozilla Firefox Sync
              </a>
            </p>
            <p style={{ marginBottom: '10px' }}>
              <a href="https://support.mozilla.org/en-US/kb/how-firefox-securely-saves-passwords#:~:text=Firefox%20Desktop%20encrypts%20your%20passwords,cryptography%20to%20obscure%20your%20passwords." target="_blank" rel="noopener noreferrer" className="cursor-target" style={{ color: '#88E755', textDecoration: 'underline' }}>
                This is how we store your passwords
              </a>
            </p>
          </div>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            4. Add-ons and &quot;Mods&quot;
          </h2>

          <p style={{ marginBottom: '20px' }}>
            You can install Add-ons from addons.mozilla.org. Prism AI Browser periodically checks for updates to these Add-ons. You can also install &quot;Mods&quot; from prism-browser.app/mods. These Mods are hosted by our services and follow the same privacy policy our website. We do not collect any data from these Mods, they are purely static content that is downloaded to your device.
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            5. Data Security
          </h2>

          <p style={{ marginBottom: '15px' }}>
            Although Prism AI Browser does not collect your data, we are committed to protecting the information that is stored locally on your device and, if you use the Sync feature, the encrypted data stored on Mozilla&apos;s servers. We recommend that you use secure passwords, enable device encryption, and regularly update your software to ensure your data remains safe.
          </p>

          <p style={{ marginBottom: '20px', fontStyle: 'italic', color: '#ccc' }}>
            Note that most of the security measures are taken care by Mozilla Firefox.
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            6. Your Control
          </h2>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            6.1. Data Deletion
          </h3>

          <p style={{ marginBottom: '20px' }}>
            You have full control over all data stored locally on your device by Prism AI Browser. You can clear your browsing data, cookies, and cache at any time using the browser&apos;s settings.
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            7. Our Website and Services
          </h2>

          <p style={{ marginBottom: '20px' }}>
            Prism AI Browser&apos;s website and services do not use any third-party analytics, tracking, or CDN services. We do not collect any personal information from users visiting our website. The website is hosted on Cloudflare but with analytics and tracking disabled, Cloudflare may collect some analytics data from HTTP requests in order to provide security and performance improvements. However, this data is not linked to any personal information and is not used for tracking purposes.
          </p>

          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#88E755'
          }}>
            7.1. External links
          </h3>

          <p style={{ marginBottom: '20px' }}>
            Prism AI Browser may contain links to external websites or services that are not owned or operated by us. We are not responsible for the content or privacy practices of these sites. We recommend that you review the privacy policies of these sites before providing them with any personal information.
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            8. Changes to This Privacy Policy
          </h2>

          <p style={{ marginBottom: '20px' }}>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by updating the effective date at the top of this policy. Continued use of Prism AI Browser after such changes constitutes your acceptance of the new terms.
          </p>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            9. Other telemetry done by Mozilla Firefox
          </h2>

          <p style={{ marginBottom: '15px' }}>
            We try to disable all telemetry data collection in Prism AI Browser. But, we may have missed some. Check the below links for more information.
          </p>

          <div style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <p style={{ marginBottom: '10px' }}>
              Please check <a href="https://www.mozilla.org/en-US/privacy/firefox/" target="_blank" rel="noopener noreferrer" className="cursor-target" style={{ color: '#88E755', textDecoration: 'underline' }}>Firefox Privacy Notice</a> for more information.
            </p>
          </div>

          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '1.8rem',
            fontWeight: '600',
            marginTop: '40px',
            marginBottom: '20px',
            color: '#88E755'
          }}>
            10. Contact Us
          </h2>

          <p style={{ marginBottom: '15px' }}>
            If you have any questions or concerns about this Privacy Policy or Prism AI Browser, please contact us at:
          </p>

          <div style={{ marginBottom: '40px', paddingLeft: '20px' }}>
            <p style={{ marginBottom: '10px' }}>
              <strong>Discord:</strong> <a href="#" className="cursor-target" style={{ color: '#88E755', textDecoration: 'underline' }}>Prism AI Browser&apos;s Discord</a>
            </p>
            <p style={{ marginBottom: '10px' }}>
              <strong>GitHub:</strong> <a href="https://github.com/Prismaibrowser" target="_blank" rel="noopener noreferrer" className="cursor-target" style={{ color: '#88E755', textDecoration: 'underline' }}>Organization</a>
            </p>
          </div>
        </div>
      </main>

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

      {/* Footer */}
      <footer style={{
        position: 'relative',
        width: '100%',
        zIndex: 3
      }}>
        <Footer />
      </footer>
    </div>
  );
}