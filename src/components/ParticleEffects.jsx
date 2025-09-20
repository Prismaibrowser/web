'use client';

import React, { useEffect, useRef, useState } from 'react';

const ParticleEffects = ({ className = '' }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef(0); // 1 for down, -1 for up

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll tracking for particle movement
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 1 : -1;
      scrollDirection.current = direction;
      lastScrollY.current = currentScrollY;
      setScrollY(currentScrollY);
      
      // Temporary debug log to check if scroll is working
      console.log(`Scroll: ${currentScrollY}, Direction: ${direction}`);
    };

    // Mouse tracking for 3D effects
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePosition({ x, y });
    };

    // Create particles similar to footer
    const createParticles = () => {
      const particleCount = 35;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.dataset.index = i;
        
        // Ensure more green particles - 60% green, 40% white
        const isGreen = Math.random() > 0.4;
        const size = 2 + Math.random() * 4;
        const leftPos = Math.random() * 100;
        const topPos = Math.random() * 100;
        const delay = Math.random() * 10;
        
        particle.style.cssText = `
          position: absolute;
          left: ${leftPos}%;
          top: ${topPos}%;
          width: ${size}px;
          height: ${size}px;
          background: ${isGreen ? '#88E755' : '#ffffff'};
          border-radius: 50%;
          pointer-events: auto;
          cursor: pointer;
          animation: floatParticle ${6 + Math.random() * 4}s ease-in-out infinite;
          animation-delay: ${delay}s;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 0 ${isGreen ? '10px rgba(136, 231, 85, 0.6)' : '8px rgba(255, 255, 255, 0.8)'};
          opacity: 0.7;
          z-index: 1;
          transform-style: preserve-3d;
          will-change: transform;
        `;

        container.appendChild(particle);
      }
    };

    createParticles();

    // 3D cursor following effect
    const update3DEffect = () => {
      const particles = container.querySelectorAll('.floating-particle');
      particles.forEach((particle, index) => {
        const factor = (index % 3 + 1) * 0.1; // Different movement factors for depth
        const translateX = mousePosition.x * 20 * factor;
        const translateY = mousePosition.y * 20 * factor;
        const rotateX = mousePosition.y * 10 * factor;
        const rotateY = mousePosition.x * 10 * factor;
        const scale = 1 + Math.abs(mousePosition.x * mousePosition.y) * 0.3 * factor;
        
        particle.style.transform = `
          translateX(${translateX}px) 
          translateY(${translateY}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale(${scale})
        `;
        
        // Enhance glow effect based on mouse proximity
        const proximity = Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2);
        const glowIntensity = Math.max(0.6, 1 - proximity * 0.5);
        const isGreen = particle.style.background.includes('#88E755');
        
        particle.style.boxShadow = `
          0 0 ${15 * glowIntensity}px ${isGreen ? `rgba(136, 231, 85, ${0.8 * glowIntensity})` : `rgba(255, 255, 255, ${0.9 * glowIntensity})`},
          0 0 ${30 * glowIntensity}px ${isGreen ? `rgba(136, 231, 85, ${0.4 * glowIntensity})` : `rgba(255, 255, 255, ${0.5 * glowIntensity})`}
        `;
        
        particle.style.opacity = Math.min(1, 0.7 + glowIntensity * 0.3);
      });
    };

    // Container hover effects
    const handleMouseEnter = () => {
      setIsHovered(true);
      container.style.perspective = '1000px';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
      const particles = container.querySelectorAll('.floating-particle');
      particles.forEach((particle) => {
        particle.style.transform = 'translateX(0) translateY(0) rotateX(0) rotateY(0) scale(1)';
        const isGreen = particle.style.background.includes('#88E755');
        particle.style.boxShadow = `0 0 ${isGreen ? '10px rgba(136, 231, 85, 0.6)' : '8px rgba(255, 255, 255, 0.8)'}`;
        particle.style.opacity = '0.7';
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.innerHTML = '';
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Combined effect for both mouse and scroll updates
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateParticlePositions = () => {
      const particles = container.querySelectorAll('.floating-particle');
      particles.forEach((particle, index) => {
        const factor = (index % 3 + 1) * 0.1;
        
        // Mouse-based 3D movement (only when hovered)
        let mouseTranslateX = 0;
        let mouseTranslateY = 0;
        let rotateX = 0;
        let rotateY = 0;
        let scale = 1;
        
        if (isHovered) {
          mouseTranslateX = mousePosition.x * 20 * factor;
          mouseTranslateY = mousePosition.y * 20 * factor;
          rotateX = mousePosition.y * 10 * factor;
          rotateY = mousePosition.x * 10 * factor;
          scale = 1 + Math.abs(mousePosition.x * mousePosition.y) * 0.3 * factor;
        }
        
        // Scroll-based vertical movement (always active and more pronounced)
        const scrollMultiplier = (index % 2 === 0 ? 1 : -1); // Alternating directions
        const scrollOffset = scrollY * 0.5 * scrollMultiplier; // Increased for more visibility
        // Apply scroll direction - particles move opposite to scroll direction for parallax effect
        const scrollTranslateY = -scrollOffset * factor; // Negative for upward movement when scrolling down
        
        // Debug log for first particle only
        if (index === 0) {
          console.log(`Particle 0: scrollY=${scrollY}, scrollOffset=${scrollOffset}, scrollTranslateY=${scrollTranslateY}`);
        }
        
        // Combine both movements
        const finalTranslateX = mouseTranslateX;
        const finalTranslateY = mouseTranslateY + scrollTranslateY;
        
        particle.style.transform = `
          translateX(${finalTranslateX}px) 
          translateY(${finalTranslateY}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale(${scale})
        `;
        
        // Enhanced glow effect based on movement intensity
        const movementIntensity = Math.sqrt(finalTranslateX ** 2 + finalTranslateY ** 2) / 100;
        const proximity = isHovered ? Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2) : 1;
        const scrollIntensity = Math.abs(scrollTranslateY) / 50; // Add scroll-based glow
        const glowIntensity = Math.max(0.6, 1 - proximity * 0.5 + movementIntensity * 0.3 + scrollIntensity * 0.2);
        const isGreen = particle.style.background.includes('#88E755');
        
        particle.style.boxShadow = `
          0 0 ${15 * glowIntensity}px ${isGreen ? `rgba(136, 231, 85, ${0.8 * glowIntensity})` : `rgba(255, 255, 255, ${0.9 * glowIntensity})`},
          0 0 ${30 * glowIntensity}px ${isGreen ? `rgba(136, 231, 85, ${0.4 * glowIntensity})` : `rgba(255, 255, 255, ${0.5 * glowIntensity})`}
        `;
        
        particle.style.opacity = Math.min(1, 0.7 + glowIntensity * 0.3);
      });
    };

    updateParticlePositions();
  }, [mousePosition, isHovered, scrollY]);

  return (
    <>
      <div
        ref={containerRef}
        className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
        style={{
          zIndex: 1, // Above background but below footer content (footer particles are z-index 3)
          pointerEvents: 'auto',
          perspective: '1000px',
        }}
      />
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1) rotateZ(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-15px) translateX(5px) scale(1.1) rotateZ(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-8px) translateX(-3px) scale(0.9) rotateZ(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-20px) translateX(8px) scale(1.05) rotateZ(270deg);
            opacity: 0.9;
          }
        }

        .floating-particle {
          filter: drop-shadow(0 0 6px currentColor);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, opacity, box-shadow;
        }

        .floating-particle:hover {
          animation-play-state: paused !important;
          filter: brightness(1.5) drop-shadow(0 0 15px currentColor) !important;
        }

        @media (max-width: 768px) {
          .floating-particle {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-particle {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default ParticleEffects;