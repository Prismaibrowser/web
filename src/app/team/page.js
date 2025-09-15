'use client'

import React from 'react';
import ChromaGrid from '../../components/ChromaGrid';
import CardNav from '../../components/CardNav';
import Footer from '../../components/Footer';
import TargetCursor from '../../components/TargetCursor';
import teamData from './team-data.json';

export default function TeamPage() {
  const navItems = [
    {
      label: "About",
      bgColor: "#010710",
      textColor: "#88E755",
      links: [
        { label: "Team", ariaLabel: "About Team", href: "/team" },
        { label: "Documentation", ariaLabel: "Documentation" },
        { label: "GitHub", ariaLabel: "GitHub" }
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
        { label: "Email", ariaLabel: "Email us" },
        { label: "X", ariaLabel: "X" },
        { label: "Reddit", ariaLabel: "Reddit" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#060010', 
      minHeight: '100vh', 
      width: '100%',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Custom Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        performanceMode={false}
      />
      {/* Navigation Header */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        backgroundColor: 'rgba(6, 0, 16, 0.95)',
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
          color: '#88E755'
        }}>
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


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}