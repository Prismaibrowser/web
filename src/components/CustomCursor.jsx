import { useRef, useEffect, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      // Restore default cursor on cleanup
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: position.x - 20,
        top: position.y - 20,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: `
          radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(136, 231, 85, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, rgba(136, 231, 85, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(136, 231, 85, 0.6) 100%)
        `,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'all 0.15s ease-out',
        boxShadow: `
          0 0 30px rgba(136, 231, 85, 0.6),
          0 0 60px rgba(136, 231, 85, 0.4),
          inset 0 0 20px rgba(255, 255, 255, 0.3),
          inset -10px -10px 20px rgba(0, 0, 0, 0.2)
        `,
        border: '1px solid rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(2px)',
        transform: 'translateZ(0)',
        filter: 'drop-shadow(0 0 10px rgba(136, 231, 85, 0.5))'
      }}
    >
      {/* Inner crystal highlight */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '20%',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
          filter: 'blur(1px)'
        }}
      />
      {/* Secondary highlight */}
      <div
        style={{
          position: 'absolute',
          top: '60%',
          right: '25%',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, transparent 70%)',
          filter: 'blur(0.5px)'
        }}
      />
    </div>
  );
}
