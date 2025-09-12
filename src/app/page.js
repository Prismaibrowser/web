'use client';

import { useRef } from 'react';
import LaserFlow from "@/components/LaserFlow";
import CardNav from "@/components/CardNav";
import Shuffle from "@/components/Shuffle";

function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);

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
    <div 
      style={{ 
        height: '100vh', 
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
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
      
      <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
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
            zIndex: 6
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
    </div>
  );
}

export default function Home() {
  return (
    <LaserFlowBoxExample />
  );
}
