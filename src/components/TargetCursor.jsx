import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

const TargetCursor = ({ targetSelector = '.cursor-target', spinDuration = 2, hideDefaultCursor = true, performanceMode = false }) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastMoveTime = useRef(0);
  const lastMousePosition = useRef({ x: 0, y: 0 }); // Track last known position
  const [isLowPerformance, setIsLowPerformance] = useState(performanceMode);
  const constants = useMemo(
    () => ({
      borderWidth: 4,
      cornerSize: 16,
      parallaxStrength: isLowPerformance ? 0 : 0.00005,
      throttleMs: isLowPerformance ? 32 : 16, // 30fps vs 60fps
      reducedAnimations: isLowPerformance
    }),
    [isLowPerformance]
  );

  // Performance detection
  useEffect(() => {
    if (!performanceMode) {
      const detectPerformance = () => {
        const start = performance.now();
        let frames = 0;
        
        const checkFrame = () => {
          frames++;
          if (frames < 60) {
            requestAnimationFrame(checkFrame);
          } else {
            const duration = performance.now() - start;
            const fps = (frames * 1000) / duration;
            
            // If FPS is below 45, enable performance mode
            if (fps < 45) {
              setIsLowPerformance(true);
            }
          }
        };
        
        requestAnimationFrame(checkFrame);
      };
      
      // Delay performance detection to avoid interference
      setTimeout(detectPerformance, 1000);
    }
  }, [performanceMode]);

  const moveCursor = useCallback((x, y) => {
    const now = performance.now();
    if (now - lastMoveTime.current < constants.throttleMs) {
      return;
    }
    lastMoveTime.current = now;
    
    // Store last known mouse position
    lastMousePosition.current = { x, y };
    
    if (!cursorRef.current) return;
    
    if (constants.reducedAnimations) {
      // Use direct style manipulation with proper positioning for performance mode
      const cursor = cursorRef.current;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
      cursor.style.transform = 'translate(-50%, -50%)';
      
      // Add performance mode class for CSS optimization
      cursor.classList.add('performance-mode');
    } else {
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.1,
        ease: 'power3.out'
      });
      
      // Remove performance mode class
      cursorRef.current.classList.remove('performance-mode');
    }
  }, [constants.throttleMs, constants.reducedAnimations]);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      // Force hide cursor on all elements for custom pointer
      document.body.style.cursor = 'none';
      document.documentElement.style.cursor = 'none';
      document.body.classList.add('custom-cursor-active');
      
      // Add global style to hide cursor on all elements
      const style = document.createElement('style');
      style.id = 'target-cursor-global';
      style.textContent = `
        *, *:before, *:after {
          cursor: none !important;
        }
        a, button, input, textarea, select, [role="button"], [tabindex] {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');

    let activeTarget = null;
    let currentTargetMove = null;
    let currentLeaveHandler = null;
    let isAnimatingToTarget = false;
    let resumeTimeout = null;

    const cleanupTarget = target => {
      if (currentTargetMove) {
        target.removeEventListener('mousemove', currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener('mouseleave', currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    // Initial cursor positioning - ensure cursor starts at center, not top-left
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    
    if (constants.reducedAnimations) {
      // Set initial position using direct styles for performance mode
      cursor.style.left = initialX + 'px';
      cursor.style.top = initialY + 'px';
      cursor.style.transform = 'translate(-50%, -50%)';
    } else {
      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
        x: initialX,
        y: initialY
      });
    }

    const createSpinTimeline = () => {
      // Rotation/spinning animation removed
      // Only keep the corner bracket animations for target framing
      if (spinTl.current) {
        spinTl.current.kill();
        spinTl.current = null;
      }
    };

    createSpinTimeline();

    const moveHandler = e => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      // Store mouse coordinates for immediate use in performance mode
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      if (constants.reducedAnimations) {
        // Direct update without requestAnimationFrame for better responsiveness
        moveCursor(mouseX, mouseY);
      } else {
        animationFrameRef.current = requestAnimationFrame(() => {
          moveCursor(mouseX, mouseY);
        });
      }
    };
    window.addEventListener('mousemove', moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current || constants.reducedAnimations) return;

      let mouseX, mouseY;
      
      if (constants.reducedAnimations) {
        // Get position from style properties in performance mode
        const cursor = cursorRef.current;
        mouseX = parseFloat(cursor.style.left) || 0;
        mouseY = parseFloat(cursor.style.top) || 0;
      } else {
        mouseX = gsap.getProperty(cursorRef.current, 'x');
        mouseY = gsap.getProperty(cursorRef.current, 'y');
      }

      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget =
        elementUnderMouse &&
        (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);

      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });

    // Enhanced click animations with better performance mode handling
    const mouseDownHandler = () => {
      if (!dotRef.current || !cursorRef.current) return;
      
      if (constants.reducedAnimations) {
        // Use CSS transforms with proper positioning for better performance
        const cursor = cursorRef.current;
        const currentLeft = parseFloat(cursor.style.left) || 0;
        const currentTop = parseFloat(cursor.style.top) || 0;
        
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
        
        // Ensure position is maintained during scaling
        cursor.style.left = currentLeft + 'px';
        cursor.style.top = currentTop + 'px';
      } else {
        gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
      }
    };

    const mouseUpHandler = () => {
      if (!dotRef.current || !cursorRef.current) return;
      
      if (constants.reducedAnimations) {
        const cursor = cursorRef.current;
        const currentLeft = parseFloat(cursor.style.left) || 0;
        const currentTop = parseFloat(cursor.style.top) || 0;
        
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        
        // Ensure position is maintained during scaling
        cursor.style.left = currentLeft + 'px';
        cursor.style.top = currentTop + 'px';
      } else {
        gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    //----------------------------------------------------------------
    const enterHandler = e => {
      const directTarget = e.target;

      const allTargets = [];
      let current = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;
      const corners = Array.from(cornersRef.current);
      corners.forEach(corner => {
        gsap.killTweensOf(corner);
      });

      gsap.killTweensOf(cursorRef.current, 'rotation');
      if (spinTl.current) {
        spinTl.current.pause();
      }

      // Remove any existing rotation and keep cursor at 0 rotation
      if (constants.reducedAnimations) {
        cursorRef.current.style.transform = `translate(-50%, -50%)`;
      } else {
        gsap.set(cursorRef.current, { rotation: 0 });
      }

      const updateCorners = (mouseX, mouseY) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(cornersRef.current);

        const { borderWidth, cornerSize, parallaxStrength } = constants;

        let tlOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth
        };
        let trOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth
        };
        let brOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize
        };
        let blOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize
        };

        if (mouseX !== undefined && mouseY !== undefined && parallaxStrength > 0) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: 'power2.out'
            },
            0
          );
        });
      };

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle = null;
      const targetMove = ev => {
        if (moveThrottle || isAnimatingToTarget) return;
        
        moveThrottle = requestAnimationFrame(() => {
          const mouseEvent = ev;
          updateCorners(mouseEvent.clientX, mouseEvent.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.2, y: -cornerSize * 1.2 },
            { x: cornerSize * 0.2, y: -cornerSize * 1.2 },
            { x: cornerSize * 0.2, y: cornerSize * 0.2 },
            { x: -cornerSize * 1.2, y: cornerSize * 0.2 }
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: 'power3.out'
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          // No rotation resumption - rotation animation permanently removed
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener('mousemove', targetMove);
      target.addEventListener('mouseleave', leaveHandler);
    };

    window.addEventListener('mouseover', enterHandler, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      console.log('Cleaning up TargetCursor');

      spinTl.current?.kill();
      
      if (cursorRef.current) {
        // Remove any rotation styles and animations
        cursorRef.current.style.animation = '';
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(/rotate\([^)]*\)/g, '');
      }
      
      // Restore original cursor
      document.body.style.cursor = originalCursor;
      document.documentElement.style.cursor = '';
      document.body.classList.remove('custom-cursor-active');
      
      // Remove global cursor hiding styles
      const globalStyle = document.getElementById('target-cursor-global');
      if (globalStyle) {
        globalStyle.remove();
      }
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor, isLowPerformance]);

  // Add a position recovery mechanism for low-end devices
  useEffect(() => {
    if (!constants.reducedAnimations || !cursorRef.current) return;
    
    const checkCursorPosition = () => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      
      const rect = cursor.getBoundingClientRect();
      const isStuckAtOrigin = rect.left <= 10 && rect.top <= 10;
      const isOutOfBounds = rect.left < -50 || rect.top < -50 || 
                           rect.left > window.innerWidth + 50 || 
                           rect.top > window.innerHeight + 50;
      
      if (isStuckAtOrigin || isOutOfBounds) {
        // Use last known position or center as fallback
        const fallbackX = lastMousePosition.current.x || window.innerWidth / 2;
        const fallbackY = lastMousePosition.current.y || window.innerHeight / 2;
        
        cursor.style.left = fallbackX + 'px';
        cursor.style.top = fallbackY + 'px';
        cursor.style.transform = 'translate(-50%, -50%)';
        
        console.log('Cursor position recovered:', { x: fallbackX, y: fallbackY });
      }
    };
    
    // Check cursor position more frequently in performance mode
    const intervalId = setInterval(checkCursorPosition, 500);
    
    // Also check on window resize
    const handleResize = () => {
      setTimeout(checkCursorPosition, 100);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [constants.reducedAnimations]);

  useEffect(() => {
    if (!cursorRef.current) return;

    // No spinning animation - removed rotation completely
    return () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
    };
  }, [spinDuration, constants.reducedAnimations]);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div ref={dotRef} className="target-cursor-dot" />
      <div className="target-cursor-corner corner-tl" />
      <div className="target-cursor-corner corner-tr" />
      <div className="target-cursor-corner corner-br" />
      <div className="target-cursor-corner corner-bl" />
    </div>
  );
};

export default TargetCursor;

