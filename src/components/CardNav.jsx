import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
// use your own icon import if react-icons is not available
import { GoArrowUpRight, GoDownload } from 'react-icons/go';
import './CardNav.css';

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const calculateHeight = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const numItems = items?.length || 0;
    
    if (isMobile) {
      // For mobile, each card has a fixed height plus padding
      return 60 + (numItems * 100); // Increased height per card for mobile
    }
    
    // For desktop, cards are displayed in a row
    return 280; // Increased height for better card visibility
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    const cards = cardsRef.current.filter(Boolean); // Filter out null/undefined refs
    
    if (!navEl || cards.length === 0) return null;

    // Initialize cards to be hidden with proper starting positions
    gsap.set(cards, { 
      y: 20, 
      opacity: 0, 
      visibility: 'hidden',
      pointerEvents: 'none'
    });

    const tl = gsap.timeline({ 
      paused: true,
      defaults: {
        duration: 0.3, // Reduced from 0.5 for faster animations
        ease: ease
      },
      onComplete: () => {
        // Ensure cards are fully visible and interactive after animation
        cards.forEach(card => {
          if (card) {
            gsap.set(card, { 
              opacity: 1, 
              y: 0, 
              visibility: 'visible',
              pointerEvents: 'auto'
            });
          }
        });
      },
      onReverseComplete: () => {
        // Ensure cards are properly hidden after reverse animation
        cards.forEach(card => {
          if (card) {
            gsap.set(card, { 
              opacity: 0, 
              y: 20, 
              visibility: 'hidden',
              pointerEvents: 'none'
            });
          }
        });
      }
    });

    // Animate cards in with reduced staggered timing
    tl.to(
      cards,
      { 
        y: 0, 
        opacity: 1, 
        visibility: 'visible',
        pointerEvents: 'auto',
        duration: 0.25, // Faster individual card animation
        stagger: 0.05 // Reduced stagger for quicker overall animation
      },
      0
    );

    return tl;
  };

  // Prevent menu from disappearing during scroll
  useEffect(() => {
    const handleScroll = () => {
      // Only close menu if scrolling significantly (more than 50px)
      if (isExpanded && window.scrollY > 50 && !isScrolling) {
        setIsScrolling(true);
        
        // Add a shorter timeout to close menu when scrolling
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          if (isExpanded) {
            toggleMenu(); // Close the menu
          }
          setIsScrolling(false);
        }, 100); // Reduced from potentially longer timeout
      }
    };

    // Add scroll listener regardless of menu state for better responsiveness
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    };
  }, [isExpanded, isScrolling]);

  // Add click outside and escape key handlers for better UX
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isExpanded && navRef.current && !navRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isExpanded) {
        toggleMenu();
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isExpanded]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        // Ensure cards remain visible during resize
        const cards = cardsRef.current.filter(Boolean);
        cards.forEach(card => {
          if (card) {
            gsap.set(card, { 
              opacity: 1, 
              y: 0, 
              visibility: 'visible',
              pointerEvents: 'auto'
            });
          }
        });

        // Don't kill timeline when menu is open, just adjust height
        // Timeline should remain intact to prevent card disappearing
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    // Clear any existing timeouts to prevent conflicts
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
    
    if (!isExpanded) {
      // Opening menu
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      setIsScrolling(false);
      
      // Set proper height for the nav container
      const newHeight = calculateHeight();
      gsap.set(navRef.current, { height: newHeight });
      
      // Clear any previous callbacks
      tl.eventCallback('onReverseComplete', null);
      
      // Play the timeline to show cards
      tl.play(0);
      
      // Ensure cards stay visible after opening
      tl.eventCallback('onComplete', () => {
        const cards = cardsRef.current.filter(Boolean);
        cards.forEach(card => {
          if (card) {
            gsap.set(card, { 
              opacity: 1, 
              y: 0, 
              visibility: 'visible',
              pointerEvents: 'auto'
            });
          }
        });
      });
    } else {
      // Closing menu - faster and more reliable
      setIsHamburgerOpen(false);
      setIsScrolling(false);
      
      // Clear any previous callbacks to prevent conflicts
      tl.eventCallback('onComplete', null);
      
      // Set up reverse complete callback with faster execution
      tl.eventCallback('onReverseComplete', () => {
        setIsExpanded(false);
        // Reset nav height immediately
        gsap.set(navRef.current, { height: 60 });
        
        // Ensure cards are completely hidden
        const cards = cardsRef.current.filter(Boolean);
        cards.forEach(card => {
          if (card) {
            gsap.set(card, { 
              opacity: 0, 
              y: 20, 
              visibility: 'hidden',
              pointerEvents: 'none'
            });
          }
        });
      });
      
      // Reverse the timeline to hide cards with faster timing
      tl.timeScale(1.5); // Make closing 1.5x faster
      tl.reverse();
      
      // Reset time scale after animation
      setTimeout(() => {
        if (tl) tl.timeScale(1);
      }, 300);
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''}`}
        style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu cursor-target ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}>
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <Link href="/">
              <img src={logo} alt={logoAlt} className="logo cursor-target" style={{cursor: 'pointer'}} />
            </Link>
          </div>

          <button
            type="button"
            className="card-nav-cta-button cursor-target"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}>
            <GoDownload className="download-icon" />
            <span className="button-text">Download</span>
          </button>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}>
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => {
                  if (lnk.href) {
                    return (
                      <Link
                        key={`${lnk.label}-${i}`}
                        href={lnk.href}
                        className="nav-card-link cursor-target"
                        aria-label={lnk.ariaLabel}>
                        <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                        {lnk.label}
                      </Link>
                    );
                  } else {
                    return (
                      <a
                        key={`${lnk.label}-${i}`}
                        className="nav-card-link cursor-target"
                        href={lnk.href}
                        aria-label={lnk.ariaLabel}>
                        <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                        {lnk.label}
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
