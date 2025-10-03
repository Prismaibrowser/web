'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

const ParticleEffects = ({ className = '' }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef(0);
  const animationFrameRef = useRef();
  const lastUpdateRef = useRef(0);
  const particleRefs = useRef([]);
  const isMobileRef = useRef(false);

  // Check if device is mobile
  useEffect(() => {
    isMobileRef.current = window.matchMedia('(max-width: 768px)').matches;
  }, []);

  // Further reduce particle count for better performance
  const particleCount = useMemo(() => {
    return isMobileRef.current ? 8 : 20; // Reduced from 15 to 8 on mobile, 35 to 20 on desktop
  }, []);

  // Chunk rendering - process particles in batches
  const updateParticles = useCallback((timestamp) => {
    if (!containerRef.current) return;
    
    // Throttle updates to 60fps max
    if (timestamp - lastUpdateRef.current < 16) {
      animationFrameRef.current = requestAnimationFrame(updateParticles);
      return;
    }
    lastUpdateRef.current = timestamp;

    const particles = particleRefs.current;
    if (!particles || particles.length === 0) {
      animationFrameRef.current = requestAnimationFrame(updateParticles);
      return;
    }

    // Process particles in chunks to avoid blocking the main thread
    const chunkSize = isMobileRef.current ? 4 : 8;
    let index = 0;

    const processChunk = () => {
      const endIndex = Math.min(index + chunkSize, particles.length);
      
      for (let i = index; i < endIndex; i++) {
        const particle = particles[i];
        if (!particle) continue;
        
        const factor = (i % 3 + 1) * 0.1;
        
        // Mouse-based 3D movement (only when hovered)
        let mouseTranslateX = 0;
        let mouseTranslateY = 0;
        let rotateX = 0;
        let rotateY = 0;
        let scale = 1;
        
        if (isHovered) {
          mouseTranslateX = mousePosition.x * 15 * factor; // Reduced from 20 to 15
          mouseTranslateY = mousePosition.y * 15 * factor;
          rotateX = mousePosition.y * 8 * factor; // Reduced from 10 to 8
          rotateY = mousePosition.x * 8 * factor;
          scale = 1 + Math.abs(mousePosition.x * mousePosition.y) * 0.2 * factor; // Reduced from 0.3 to 0.2
        }
        
        // Scroll-based vertical movement (smoothed)
        const scrollMultiplier = (i % 2 === 0 ? 1 : -1);
        // Reduced scroll sensitivity for smoother movement
        const scrollOffset = scrollY * 0.2 * scrollMultiplier; // Reduced from 0.5 to 0.2
        const scrollTranslateY = -scrollOffset * factor;
        
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
        
        // Simplified glow effect for better performance
        if (!isMobileRef.current) {
          const movementIntensity = Math.sqrt(finalTranslateX ** 2 + finalTranslateY ** 2) / 100;
          const proximity = isHovered ? Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2) : 1;
          const scrollIntensity = Math.abs(scrollTranslateY) / 50;
          const glowIntensity = Math.max(0.6, 1 - proximity * 0.5 + movementIntensity * 0.2 + scrollIntensity * 0.1); // Reduced intensities
          const isGreen = particle.style.background.includes('#88E755');
          
          particle.style.boxShadow = `
            0 0 ${12 * glowIntensity}px ${isGreen ? `rgba(136, 231, 85, ${0.7 * glowIntensity})` : `rgba(255, 255, 255, ${0.8 * glowIntensity})`},
            0 0 ${25 * glowIntensity}px ${isGreen ? `rgba(136, 231, 85, ${0.3 * glowIntensity})` : `rgba(255, 255, 255, ${0.4 * glowIntensity})`}
          `;
          
          particle.style.opacity = Math.min(1, 0.7 + glowIntensity * 0.2); // Reduced from 0.3 to 0.2
        }
      }
      
      index = endIndex;
      
      // If there are more particles to process, schedule next chunk
      if (index < particles.length) {
        setTimeout(processChunk, 0); // Yield to event loop
      }
    };

    processChunk();
    animationFrameRef.current = requestAnimationFrame(updateParticles);
  }, [mousePosition, isHovered, scrollY]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll tracking for particle movement with smoothing
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 1 : -1;
      scrollDirection.current = direction;
      lastScrollY.current = currentScrollY;
      setScrollY(currentScrollY);
    };

    // Mouse tracking for 3D effects
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePosition({ x, y });
    };

    // Create particles
    const createParticles = () => {
      particleRefs.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Reduce complexity on mobile
        const isGreen = Math.random() > 0.4;
        const size = 2 + Math.random() * (isMobileRef.current ? 1.5 : 3); // Reduced size variation
        const leftPos = Math.random() * 100;
        const topPos = Math.random() * 100;
        const delay = Math.random() * 5; // Reduced max delay
        
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
          animation: floatParticle ${4 + Math.random() * 3}s ease-in-out infinite; /* Reduced animation duration */
          animation-delay: ${delay}s;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Reduced transition time */
          box-shadow: 0 0 ${isGreen ? '8px rgba(136, 231, 85, 0.5)' : '6px rgba(255, 255, 255, 0.7)'}; /* Reduced glow */
          opacity: 0.6; /* Reduced opacity */
          z-index: 1;
          ${isMobileRef.current ? '' : 'transform-style: preserve-3d;'}
          will-change: transform;
        `;

        container.appendChild(particle);
        particleRefs.current.push(particle);
      }
    };

    createParticles();

    // Container hover effects
    const handleMouseEnter = () => {
      setIsHovered(true);
      container.style.perspective = '1000px';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
      const particles = particleRefs.current;
      if (particles) {
        particles.forEach((particle) => {
          if (particle) {
            particle.style.transform = 'translateX(0) translateY(0) rotateX(0) rotateY(0) scale(1)';
            const isGreen = particle.style.background.includes('#88E755');
            particle.style.boxShadow = `0 0 ${isGreen ? '8px rgba(136, 231, 85, 0.5)' : '6px rgba(255, 255, 255, 0.7)'}`;
            particle.style.opacity = '0.6';
          }
        });
      }
    };

    // Visibility detection to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (container) {
      observer.observe(container);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(updateParticles);

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.innerHTML = '';
      }
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (observer && container) {
        observer.unobserve(container);
      }
    };
  }, [particleCount, updateParticles]);

  // Pause animation when not visible
  useEffect(() => {
    if (!isVisible && animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    } else if (isVisible && !animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(updateParticles);
    }
  }, [isVisible, updateParticles]);

  return (
    <>
      <div
        ref={containerRef}
        className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
        style={{
          zIndex: 1,
          pointerEvents: 'auto',
          perspective: '1000px',
        }}
      />
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1) rotateZ(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-10px) translateX(3px) scale(1.05) rotateZ(45deg); /* Reduced movement */
            opacity: 0.9;
          }
          50% {
            transform: translateY(-5px) translateX(-2px) scale(0.95) rotateZ(90deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-12px) translateX(5px) scale(1) rotateZ(135deg);
            opacity: 0.8;
          }
        }

        .floating-particle {
          filter: drop-shadow(0 0 4px currentColor); /* Reduced shadow */
          ${isMobileRef.current ? '' : 'transform-style: preserve-3d;'}
          backface-visibility: hidden;
          will-change: transform, opacity, box-shadow;
        }

        .floating-particle:hover {
          animation-play-state: paused !important;
          filter: brightness(1.3) drop-shadow(0 0 10px currentColor) !important; /* Reduced hover effect */
        }

        @media (max-width: 768px) {
          .floating-particle {
            opacity: 0.4; /* Reduced opacity on mobile */
            transform: scale(0.7); /* Smaller particles on mobile */
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