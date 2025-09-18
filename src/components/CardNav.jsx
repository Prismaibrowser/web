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

    // Animate cards in with staggered timing
    tl.to(
      cards,
      { 
        y: 0, 
        opacity: 1, 
        visibility: 'visible',
        pointerEvents: 'auto',
        duration: 0.5, 
        ease, 
        stagger: 0.1 
      },
      0
    );

    return tl;
  };

  // Prevent menu from disappearing during scroll
  useEffect(() => {
    const handleScroll = () => {
      // Do nothing during scroll when menu is open
      // Just prevent any interference
    };

    // Only add scroll listener when menu is expanded
    if (isExpanded) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Ensure cards remain visible and stable during scroll
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
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
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
    
    if (!isExpanded) {
      // Opening menu
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      
      // Set proper height for the nav container
      const newHeight = calculateHeight();
      gsap.set(navRef.current, { height: newHeight });
      
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
      // Closing menu
      setIsHamburgerOpen(false);
      
      // Clear any scroll timeouts to prevent interference
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      setIsScrolling(false);
      
      // Set up reverse complete callback
      tl.eventCallback('onReverseComplete', () => {
        setIsExpanded(false);
        // Reset nav height
        gsap.set(navRef.current, { height: 60 });
      });
      
      // Clear any previous callbacks to prevent conflicts
      tl.eventCallback('onComplete', null);
      
      // Reverse the timeline to hide cards
      tl.reverse();
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
