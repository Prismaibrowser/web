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

// Dynamically import PrismaticBurst to avoid SSR issues
const PrismaticBurst = dynamic(() => import('./PrismaticBurst'), { ssr: false });

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

  return (
    <footer className="footer-new">
      {/* PrismaticBurst Background */}
      <div className="footer-background">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={1.0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={24}
            mixBlendMode="lighten"
            colors={['#88E755', '#60D394', '#ffffff']}
          />
        </div>
      </div>

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
              textAlign: 'center'
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