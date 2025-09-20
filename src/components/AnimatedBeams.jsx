'use client';

import React, { useEffect, useRef, useState } from 'react';

const AnimatedBeams = ({ className = '' }) => {
  const containerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    // Detect footer height to stop beams above it
    const detectFooterHeight = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerTopPosition = windowHeight - footerRect.height;
        setFooterHeight(footerRect.height); // Exact footer height, no buffer
      }
    };

    detectFooterHeight();
    window.addEventListener('resize', detectFooterHeight);
    
    return () => window.removeEventListener('resize', detectFooterHeight);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create animated beams
    const createBeam = (delay = 0) => {
      const beam = document.createElement('div');
      beam.className = 'animated-beam';
      
      // Random horizontal position
      const leftPosition = Math.random() * 100;
      
      // Random beam height
      const beamHeight = 60 + Math.random() * 40;
      
      beam.style.cssText = `
        position: absolute;
        left: ${leftPosition}%;
        top: -150px;
        width: ${1.5 + Math.random() * 1}px;
        height: ${beamHeight}px;
        background: linear-gradient(to bottom, transparent, #88E755, #88E755, transparent);
        opacity: ${0.3 + Math.random() * 0.2};
        animation: beamFall ${4 + Math.random() * 6}s linear infinite;
        animation-delay: ${delay}s;
        border-radius: 2px;
        box-shadow: 0 0 8px rgba(136, 231, 85, 0.4), 0 0 16px rgba(136, 231, 85, 0.2);
        filter: blur(0.5px);
      `;

      container.appendChild(beam);

      // Create explosion effect when beam reaches stopping point
      const animationDuration = (4 + Math.random() * 6) * 1000;
      setTimeout(() => {
        if (beam.parentNode) {
          createExplosion(leftPosition);
        }
      }, animationDuration + delay * 1000);

      // Remove beam after animation
      setTimeout(() => {
        if (beam.parentNode) {
          beam.remove();
        }
      }, animationDuration + 2000 + delay * 1000);
    };

    const createExplosion = (leftPosition) => {
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 25 + Math.random() * 25;
        const xVel = Math.cos(angle) * velocity;
        const yVel = Math.sin(angle) * velocity;

        particle.style.cssText = `
          position: absolute;
          left: ${leftPosition}%;
          bottom: ${footerHeight}px;
          width: ${3 + Math.random() * 2}px;
          height: ${3 + Math.random() * 2}px;
          background: #88E755;
          border-radius: 50%;
          opacity: 0.6;
          animation: explode 2s ease-out forwards;
          --x-vel: ${xVel}px;
          --y-vel: ${yVel}px;
          box-shadow: 0 0 6px rgba(136, 231, 85, 0.4), 0 0 12px rgba(136, 231, 85, 0.2);
        `;

        container.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove();
          }
        }, 2000);
      }
    };

    // Create initial beams - increased count
    const beamCount = 20;
    for (let i = 0; i < beamCount; i++) {
      createBeam(i * 0.3);
    }

    // Continuously create new beams - more frequent
    const interval = setInterval(() => {
      createBeam(0);
    }, 600 + Math.random() * 800);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [footerHeight]);

  return (
    <>
      <div
        ref={containerRef}
        className={`fixed inset-0 w-full pointer-events-none ${className}`}
        style={{
          overflow: 'hidden',
          height: `calc(100vh - ${footerHeight}px)`,
          zIndex: 1
        }}
      />
      <style jsx>{`
        @keyframes beamFall {
          0% {
            transform: translateY(-150px);
            opacity: 0;
          }
          15% {
            opacity: var(--beam-opacity, 0.8);
          }
          85% {
            opacity: var(--beam-opacity, 0.8);
          }
          100% {
            transform: translateY(calc(100vh - ${footerHeight}px));
            opacity: 0;
          }
        }

        @keyframes explode {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
            transform: translate(calc(var(--x-vel) * 0.5), calc(var(--y-vel) * 0.5)) scale(1.2);
          }
          100% {
            transform: translate(var(--x-vel), var(--y-vel)) scale(0.3);
            opacity: 0;
          }
        }

        .animated-beam {
          filter: drop-shadow(0 0 6px rgba(136, 231, 85, 0.3)) drop-shadow(0 0 12px rgba(136, 231, 85, 0.1));
          --beam-opacity: 0.4;
        }

        .explosion-particle {
          filter: drop-shadow(0 0 4px rgba(136, 231, 85, 0.3)) drop-shadow(0 0 8px rgba(136, 231, 85, 0.2));
        }

        @media (max-width: 768px) {
          .animated-beam {
            --beam-opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
};

export default AnimatedBeams;