'use client';

import React from 'react';
import './ComingSoonOverlay.css';

const ComingSoonOverlay = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="coming-soon-overlay" onClick={onClose}>
      <div className="coming-soon-modal" onClick={(e) => e.stopPropagation()}>
        <div className="coming-soon-content">
          <div className="coming-soon-icon">
            🚀
          </div>
          <h2>Coming Soon!</h2>
          <p>
            We're working hard to bring you the Prism Browser download. 
            Stay tuned for updates!
          </p>
          <button 
            className="coming-soon-close-btn cursor-target"
            onClick={onClose}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonOverlay;