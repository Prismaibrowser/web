import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const StarBorder = ({ 
  children, 
  className = '', 
  style = {},
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  ...props 
}) => {
  const buttonRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const border = borderRef.current;
    const morphBg = button?.querySelector('.morph-bg');
    
    if (!button || !border) return;

    const tl = gsap.timeline({ paused: true });
    
    // Initial state
    gsap.set(border, { 
      scale: 0.8, 
      opacity: 0.6,
      rotation: 0 
    });

    // Hover animation
    tl.to(border, {
      scale: 1.1,
      opacity: 1,
      rotation: 360,
      duration: 0.6,
      ease: "power2.out"
    });

    const handleMouseEnter = () => {
      if (!disabled) {
        tl.play();
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Morph effect - change background and text color
        gsap.to(button, {
          backgroundColor: '#88E755',
          color: '#000',
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Add morphing border radius effect
        gsap.to(button, {
          borderRadius: '20px',
          duration: 0.4,
          ease: "back.out(1.7)"
        });
        
        // Show morphing background
        if (morphBg) {
          gsap.to(morphBg, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    const handleMouseLeave = () => {
      if (!disabled) {
        tl.reverse();
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Revert morph effect
        gsap.to(button, {
          backgroundColor: 'transparent',
          color: '#88E755',
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Revert border radius
        gsap.to(button, {
          borderRadius: '8px',
          duration: 0.4,
          ease: "back.out(1.7)"
        });
        
        // Hide morphing background
        if (morphBg) {
          gsap.to(morphBg, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { padding: '8px 16px', fontSize: '14px' };
      case 'large':
        return { padding: '16px 32px', fontSize: '18px' };
      default:
        return { padding: '12px 24px', fontSize: '16px' };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: '#88E755',
          border: '2px solid #88E755'
        };
      case 'outline':
        return {
          backgroundColor: 'rgba(136, 231, 85, 0.1)',
          color: '#88E755',
          border: '1px solid rgba(136, 231, 85, 0.3)'
        };
      default:
        return {
          backgroundColor: '#88E755',
          color: '#000',
          border: 'none'
        };
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`star-border-button ${className}`}
      style={{
        position: 'relative',
        border: 'none',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        opacity: disabled ? 0.6 : 1,
        ...getSizeStyles(),
        ...getVariantStyles(),
        ...style
      }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {/* Animated border */}
      <div
        ref={borderRef}
        style={{
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          background: `
            linear-gradient(45deg, 
              #88E755 0%, 
              #00ff88 25%, 
              #88E755 50%, 
              #00ff88 75%, 
              #88E755 100%
            )
          `,
          borderRadius: '10px',
          zIndex: -1,
          backgroundSize: '200% 200%',
          animation: 'shimmer 2s linear infinite'
        }}
      />
      
      {/* Morphing background effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(136, 231, 85, 0.1) 0%, rgba(0, 255, 136, 0.1) 100%)',
          borderRadius: 'inherit',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          zIndex: 0
        }}
        className="morph-bg"
      />
      
      {/* Content */}
      <span style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </span>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </button>
  );
};

export default StarBorder;