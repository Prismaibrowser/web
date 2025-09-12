'use client';

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const LaserFlow = ({
  className,
  color = "#88E755",
  speed = 2,
  thickness = 2,
  children,
  ...props
}) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => (prev >= 100 ? 0 : prev + speed));
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background p-4",
        className
      )}
      {...props}
    >
      {/* Laser beam effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${position}%`,
          top: 0,
          width: `${thickness}px`,
          height: '100%',
          background: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
          opacity: 0.7,
          transform: 'translateX(-50%)',
          transition: 'left 0.016s linear',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LaserFlow;
