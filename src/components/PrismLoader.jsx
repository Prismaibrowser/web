import { useState, useEffect } from 'react';
import './PrismLoader.css';

const PrismLoader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Check if DOM is loaded
    const handleLoad = () => {
      // Modern loading time for better UX
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setFadeOut(true);
          // Wait for fade animation to complete before removing loader
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadComplete) {
              onLoadComplete();
            }
          }, 500);
        }, 200);
      }, 1000);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Wait for window load event (all resources loaded)
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(progressInterval);
      };
    }

    return () => {
      clearInterval(progressInterval);
    };
  }, [onLoadComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={`modern-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="modern-loader-content">
        {/* Animated Logo */}
        <div className="logo-container-loader">
          <div className="logo-glow"></div>
          <img
            src="/nav-logo.png" 
            alt="Prism Logo" 
            className="modern-logo"
          />
        </div>
        
        {/* Modern Loading Animation */}
        <div className="loading-animation">
          <div className="loading-ring">
            <div className="ring-segment"></div>
            <div className="ring-segment"></div>
            <div className="ring-segment"></div>
            <div className="ring-segment"></div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>
        
        {/* Loading text */}
        <div className="modern-loading-text">
          <span>Initializing Prism AI Browser</span>
        </div>
      </div>
    </div>
  );
};

export default PrismLoader;