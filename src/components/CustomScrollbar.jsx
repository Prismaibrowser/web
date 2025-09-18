'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import './CustomScrollbar.css';

const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);
  const scrollTimeout = useRef(null);
  const animationFrame = useRef(null);

  // Debounced scroll handler to prevent multiple instances
  const handleScroll = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    
    animationFrame.current = requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScroll = scrollHeight - clientHeight;
      
      if (maxScroll <= 0) {
        setIsVisible(false);
        return;
      }
      
      const progress = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
      setScrollProgress(progress);
      setIsVisible(true);
      
      if (!isDragging) {
        setIsScrolling(true);
        
        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        // Hide scrollbar after scroll stops
        scrollTimeout.current = setTimeout(() => {
          if (!isDragging) {
            setIsScrolling(false);
          }
        }, 1500);
      }
    });
  }, [isDragging]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!scrollbarRef.current) return;
      
      const rect = scrollbarRef.current.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const scrollbarHeight = rect.height;
      const thumbHeight = (window.innerHeight / document.documentElement.scrollHeight) * scrollbarHeight;
      
      // Check if clicking on thumb or track
      const thumbTop = (scrollProgress / 100) * (scrollbarHeight - thumbHeight);
      
      if (clickY >= thumbTop && clickY <= thumbTop + thumbHeight) {
        // Clicking on thumb - start dragging
        setIsDragging(true);
        setIsScrolling(true);
        
        const startY = clickY - thumbTop;
        
        const handleMouseMove = (moveEvent) => {
          const newClickY = moveEvent.clientY - rect.top;
          const newThumbTop = newClickY - startY;
          const maxThumbTop = scrollbarHeight - thumbHeight;
          const clampedThumbTop = Math.max(0, Math.min(maxThumbTop, newThumbTop));
          
          const newProgress = (clampedThumbTop / maxThumbTop) * 100;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const newScrollTop = (newProgress / 100) * maxScroll;
          
          window.scrollTo({ top: newScrollTop, behavior: 'auto' });
        };
        
        const handleMouseUp = () => {
          setIsDragging(false);
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          
          // Start fade timer after dragging stops
          scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
          }, 1500);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      } else {
        // Clicking on track - jump to position
        const thumbHeight = (window.innerHeight / document.documentElement.scrollHeight) * scrollbarHeight;
        const newThumbTop = clickY - thumbHeight / 2;
        const maxThumbTop = scrollbarHeight - thumbHeight;
        const clampedThumbTop = Math.max(0, Math.min(maxThumbTop, newThumbTop));
        
        const newProgress = (clampedThumbTop / maxThumbTop) * 100;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const newScrollTop = (newProgress / 100) * maxScroll;
        
        window.scrollTo({ top: newScrollTop, behavior: 'smooth' });
      }
    };

    // Initial scroll position check
    handleScroll();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const scrollbarElement = scrollbarRef.current;
    if (scrollbarElement) {
      scrollbarElement.addEventListener('mousedown', handleMouseDown);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (scrollbarElement) {
        scrollbarElement.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [handleScroll, scrollProgress, isDragging]);

  // Don't render if not visible or no scrollable content
  if (!isVisible) {
    return null;
  }

  const thumbHeight = Math.max(20, (window.innerHeight / (document.documentElement?.scrollHeight || window.innerHeight)) * 100);
  const thumbTop = (scrollProgress / 100) * (100 - thumbHeight);

  return (
    <div 
      ref={scrollbarRef}
      className={`custom-scrollbar ${(isScrolling || isDragging) ? 'visible' : ''}`}
      style={{
        '--scroll-progress': `${scrollProgress}%`,
        '--thumb-height': `${thumbHeight}%`,
        '--thumb-top': `${thumbTop}%`
      }}
    >
      <div className="scrollbar-track">
        <div className="scrollbar-progress" />
        <div 
          ref={thumbRef}
          className="scrollbar-thumb"
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;