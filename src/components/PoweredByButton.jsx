'use client';

import { useState } from 'react';

export default function PoweredByButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#090c12] border border-[#a1fea0]/20 hover:border-[#a1fea0]/40 transition-all duration-300 overflow-hidden"
      style={{
        boxShadow: isHovered 
          ? '0 0 20px rgba(161, 254, 160, 0.15), 0 10px 25px rgba(0, 0, 0, 0.25)' 
          : '0 10px 25px rgba(0, 0, 0, 0.25)'
      }}
    >
      {/* Animated background glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#a1fea0]/0 via-[#a1fea0]/5 to-[#a1fea0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          animation: isHovered ? 'shimmer 2s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Power icon */}
      <div className="relative z-10 flex items-center justify-center w-4 h-4">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300"
        >
          {/* Lightning bolt */}
          <path
            d="M9 2L4 9H8L7 14L12 7H8L9 2Z"
            stroke="#a1fea0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isHovered ? '#a1fea0' : 'none'}
            className="transition-all duration-300"
            style={{
              filter: isHovered ? 'drop-shadow(0 0 4px #a1fea0)' : 'none'
            }}
          />
        </svg>
      </div>

      {/* Text */}
      <span 
        className="relative z-10 font-mono text-xs font-medium tracking-wider uppercase transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          color: isHovered ? '#a1fea0' : 'rgba(161, 254, 160, 0.7)',
          textShadow: isHovered ? '0 0 8px rgba(161, 254, 160, 0.3)' : 'none'
        }}
      >
        Powered by
      </span>

      {/* Scan line effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(161, 254, 160, 0.03) 50%, transparent 100%)',
          animation: isHovered ? 'scan 3s ease-in-out infinite' : 'none'
        }}
      />
    </button>
  );
}

