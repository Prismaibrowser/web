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
  const [isLowPerformance, setIsLowPerformance] = useState(performanceMode);
  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
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
    
    if (!cursorRef.current) return;
    
    if (constants.reducedAnimations) {
      // Use transform instead of GSAP for better performance
      cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    } else {
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.1,
        ease: 'power3.out'
      });
    }
  }, [constants.throttleMs, constants.reducedAnimations]);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      // Force hide cursor on all elements
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

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      
      if (constants.reducedAnimations) {
        // Use CSS animation for spinning in performance mode
        if (cursorRef.current) {
          cursorRef.current.style.animation = `spin ${spinDuration}s linear infinite`;
        }
      } else {
        spinTl.current = gsap
          .timeline({ repeat: -1 })
          .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' });
      }
    };

    createSpinTimeline();

    const moveHandler = e => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        moveCursor(e.clientX, e.clientY);
      });
    };
    window.addEventListener('mousemove', moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current || constants.reducedAnimations) return;

      const mouseX = gsap.getProperty(cursorRef.current, 'x');
      const mouseY = gsap.getProperty(cursorRef.current, 'y');

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

    // Optimized click animations
    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      
      if (constants.reducedAnimations) {
        // Use CSS transforms for better performance
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorRef.current.style.transform += ' scale(0.9)';
      } else {
        gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
      }
    };

    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      
      if (constants.reducedAnimations) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.9)', '');
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
      spinTl.current?.pause();

      gsap.set(cursorRef.current, { rotation: 0 });

      const updateCorners = (mouseX, mouseY) => {
        if (constants.reducedAnimations) {
          // Skip complex corner animations in performance mode
          return;
        }
        
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
        
        if (constants.reducedAnimations) {
          // Skip mousemove animations in performance mode
          return;
        }
        
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
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 }
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
          if (!activeTarget && cursorRef.current && spinTl.current && !constants.reducedAnimations) {
            const currentRotation = gsap.getProperty(cursorRef.current, 'rotation');
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: '+=360', duration: spinDuration, ease: 'none' });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: 'none',
              onComplete: () => {
                spinTl.current?.restart();
              }
            });
          } else if (constants.reducedAnimations && cursorRef.current) {
            // Re-enable CSS animation
            cursorRef.current.style.animation = `spin ${spinDuration}s linear infinite`;
          }
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
        cursorRef.current.style.animation = '';
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

  useEffect(() => {
    if (!cursorRef.current) return;

    if (constants.reducedAnimations) {
      // Use CSS animation for better performance
      cursorRef.current.style.animation = `spin ${spinDuration}s linear infinite`;
      if (spinTl.current) {
        spinTl.current.kill();
      }
    } else if (spinTl.current && spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    }
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