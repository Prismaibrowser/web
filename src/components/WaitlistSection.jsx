'use client'

import React, { useState } from 'react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyxqaphCYAfrOkrJG0Y7KLcfXY9qwf3BNYjlULr7bmI6-lpT8XXET2bFwL5DXejTOSMjg/exec';

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);
  };

  const submitEmail = async () => {
    const trimmedEmail = email.trim();
    
    setMessage('');
    setMessageType('');
    
    if (!trimmedEmail) {
      showMessage('Please enter an email address', 'error');
      return;
    }
    
    if (!isValidEmail(trimmedEmail)) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }

    setIsLoading(true);

    try {
      console.log('Submitting email:', trimmedEmail);
      
      const url = `${WEBAPP_URL}?email=${encodeURIComponent(trimmedEmail)}`;
      
      const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow'
      });

      const result = await response.json();
      console.log('Response:', result);
      
      if (result.success) {
        showMessage(result.message || 'Successfully joined the waitlist! 🎉', 'success');
        setEmail('');
      } else {
        showMessage(result.message || 'Something went wrong. Please try again.', 'error');
      }

    } catch (error) {
      console.error('Submission error:', error);
      showMessage(`Error: ${error.message}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitEmail();
    }
  };

  const features = [
    'Enhanced privacy controls',
    'Lightning-fast performance', 
    'Customizable interface',
    'Advanced developer tools',
    'Built-in productivity features',
    'Cross-platform compatibility'
  ];

  return (
    <div className="waitlist-container" style={{
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      padding: '2rem',
      margin: '2rem 0',
      border: '1px solid rgba(136, 231, 85, 0.2)',
      backdropFilter: 'blur(10px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(136, 231, 85, 0.05) 0%, rgba(85, 231, 196, 0.03) 50%, rgba(85, 153, 231, 0.05) 100%)',
        borderRadius: '16px',
        zIndex: 1
      }} />
      
      {/* Floating Particles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '3px',
        height: '3px',
        background: '#88E755',
        borderRadius: '50%',
        boxShadow: '0 0 8px rgba(136, 231, 85, 0.6)',
        animation: 'waitlistFloat 6s ease-in-out infinite',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '2px',
        height: '2px',
        background: '#ffffff',
        borderRadius: '50%',
        boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
        animation: 'waitlistFloat 8s ease-in-out infinite 2s',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '20%',
        width: '4px',
        height: '4px',
        background: '#55e7c4',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(85, 231, 196, 0.6)',
        animation: 'waitlistFloat 7s ease-in-out infinite 1s',
        zIndex: 1
      }} />
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #88E755 0%, #55e7c4 50%, #5599e7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
          fontFamily: 'Space Grotesk, sans-serif',
          textShadow: '0 0 20px rgba(136, 231, 85, 0.3)'
        }}>
          Join the PRISM Waitlist
        </div>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>
          Be the first to experience the next-generation browser that puts you in control!
        </p>
        
        {/* Input Section */}
        <div className="waitlist-input-group" style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your email address"
            className="cursor-target"
            style={{
              flex: '1',
              minWidth: '250px',
              maxWidth: '350px',
              height: '54px',
              minHeight: '54px',
              maxHeight: '54px',
              padding: '16px',
              border: '2px solid rgba(136, 231, 85, 0.3)',
              borderRadius: '10px',
              fontSize: '18px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              backdropFilter: 'blur(5px)',
              transition: 'all 0.3s ease',
              outline: 'none',
              fontFamily: 'Space Grotesk, sans-serif',
              boxSizing: 'border-box',
              lineHeight: '1.4',
              resize: 'none',
              overflow: 'hidden'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#88E755';
              e.target.style.boxShadow = '0 0 0 3px rgba(136, 231, 85, 0.2)';
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.height = '54px';
              e.target.style.minHeight = '54px';
              e.target.style.maxHeight = '54px';
              e.target.style.padding = '16px';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(136, 231, 85, 0.3)';
              e.target.style.boxShadow = 'none';
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.height = '54px';
              e.target.style.minHeight = '54px';
              e.target.style.maxHeight = '54px';
              e.target.style.padding = '16px';
            }}
          />
          
          <button
            onClick={submitEmail}
            disabled={isLoading}
            className="cursor-target"
            style={{
              padding: '16px 30px',
              background: isLoading 
                ? 'rgba(136, 231, 85, 0.6)' 
                : 'linear-gradient(135deg, #88E755 0%, #66d93d 100%)',
              color: '#000',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: 'Space Grotesk, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              opacity: isLoading ? 0.6 : 1,
              boxShadow: '0 0 15px rgba(136, 231, 85, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = '0 10px 25px rgba(136, 231, 85, 0.4)';
                e.target.style.background = 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)';
                e.target.style.color = '#88E755';
                //e.target.style.textShadow = '0 0 10px rgba(136, 231, 85, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = '0 0 15px rgba(136, 231, 85, 0.2)';
                e.target.style.background = 'linear-gradient(135deg, #88E755 0%, #66d93d 100%)';
                e.target.style.color = '#000';
                e.target.style.textShadow = 'none';
              }
            }}
          >
            {isLoading && (
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgba(0, 0, 0, 0.3)',
                borderTop: '2px solid #000',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            )}
            <span>{isLoading ? 'Joining...' : 'Join Waitlist'}</span>
          </button>
        </div>
        
        {/* Message Display */}
        {message && (
          <div style={{
            marginTop: '15px',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            background: messageType === 'success' 
              ? 'rgba(72, 187, 120, 0.2)' 
              : messageType === 'error' 
              ? 'rgba(245, 101, 101, 0.2)' 
              : 'rgba(66, 153, 225, 0.2)',
            color: messageType === 'success' 
              ? '#68D391' 
              : messageType === 'error' 
              ? '#F56565' 
              : '#63B3ED',
            border: `1px solid ${
              messageType === 'success' 
                ? 'rgba(72, 187, 120, 0.3)' 
                : messageType === 'error' 
                ? 'rgba(245, 101, 101, 0.3)' 
                : 'rgba(66, 153, 225, 0.3)'
            }`
          }}>
            {message}
          </div>
        )}
        
        {/* Features Section */}
        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
          <h3 style={{
            color: '#88E755',
            marginBottom: '15px',
            textAlign: 'center',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            What to expect from Prism:
          </h3>
          
          <div className="waitlist-features-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: '8px 0',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                  paddingLeft: '25px',
                  fontSize: '0.9rem'
                }}
              >
                <span style={{
                  content: '✓',
                  color: '#88E755',
                  fontWeight: 'bold',
                  position: 'absolute',
                  left: 0,
                  top: '8px'
                }}>
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS Animation for spinner */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes waitlistFloat {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-10px) translateX(3px);
            opacity: 1;
          }
          50% {
            transform: translateY(-5px) translateX(-2px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-12px) translateX(5px);
            opacity: 0.9;
          }
        }
        
        .waitlist-container {
          padding: 1.5rem !important;
        }
        
        .waitlist-input-group {
          flex-direction: column !important;
          align-items: stretch !important;
        }
        
        .waitlist-input-group input,
        .waitlist-input-group button {
          width: 100% !important;
          min-width: auto !important;
          max-width: none !important;
        }
        
        .waitlist-features-grid {
          grid-template-columns: 1fr !important;
          text-align: center !important;
        }
        
        @media (min-width: 640px) {
          .waitlist-container {
            padding: 2rem !important;
          }
          
          .waitlist-input-group {
            flex-direction: row !important;
            align-items: stretch !important;
          }
          
          .waitlist-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            text-align: left !important;
          }
        }
        
        @media (min-width: 768px) {
          .waitlist-features-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        
        /* Enforce strict height constraints on email input */
        .waitlist-input-group input[type="email"] {
          height: 54px !important;
          min-height: 54px !important;
          max-height: 54px !important;
          box-sizing: border-box !important;
          line-height: 1.4 !important;
          resize: none !important;
          overflow: hidden !important;
          padding: 16px !important;
          font-size: 18px !important;
        }
        
        /* Prevent any extension or browser interference */
        .waitlist-input-group input[type="email"]:focus {
          height: 54px !important;
          min-height: 54px !important;
          max-height: 54px !important;
          padding: 16px !important;
        }
        
        /* Block extension modifications */
        .waitlist-input-group input[type="email"]::-webkit-outer-spin-button,
        .waitlist-input-group input[type="email"]::-webkit-inner-spin-button {
          -webkit-appearance: none !important;
          margin: 0 !important;
        }
        
        /* Force consistent dimensions regardless of content */
        .waitlist-input-group input[type="email"]::placeholder {
          line-height: 1.4 !important;
          vertical-align: middle !important;
        }
      `}</style>
    </div>
  );
};

export default WaitlistSection;