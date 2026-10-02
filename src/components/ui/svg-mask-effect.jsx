"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
  style,
  revealOnScroll = true,
  scrollReveal = true,
}) => {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);

  // High-performance cursor spotlight: updates CSS variables directly on DOM
  // ZERO React state updates on mousemove -> ZERO re-renders of the child tree!
  const handleMouseMove = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${Math.round(e.clientX - rect.left)}px`);
    el.style.setProperty("--mouse-y", `${Math.round(e.clientY - rect.top)}px`);
    el.style.setProperty("--spotlight-opacity", "1");
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--spotlight-opacity", "0");
  }, []);

  // rAF-throttled scroll detection
  useEffect(() => {
    if (!scrollReveal) {
      setIsRevealed(true);
      setIsFullyRevealed(true);
      return;
    }

    let isDisposed = false;
    let ticking = false;
    const element = containerRef.current;
    if (!element) return;

    const triggerReveal = () => {
      if (isDisposed) return;
      setIsRevealed(true);
      // Once transition completes (950ms), drop clip-path to free GPU memory
      setTimeout(() => {
        if (!isDisposed) setIsFullyRevealed(true);
      }, 1000);
    };

    const checkVisibility = () => {
      if (isDisposed || !element) return;
      const rect = element.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= vh * 0.88 && rect.bottom >= 0) {
        triggerReveal();
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
      }
    };

    // Immediate check
    checkVisibility();
    const timer1 = setTimeout(checkVisibility, 60);
    const timer2 = setTimeout(checkVisibility, 250);

    // IntersectionObserver
    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              triggerReveal();
              if (observer) observer.disconnect();
              break;
            }
          }
        },
        { threshold: 0, rootMargin: "0px 0px -5% 0px" }
      );
      observer.observe(element);
    } catch (e) {}

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      isDisposed = true;
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollReveal]);

  // ── SCROLL REVEAL MODE ──────────────────────────────────────────────────
  if (scrollReveal) {
    const activeClip = isFullyRevealed
      ? "none"
      : isRevealed
      ? "circle(150% at 50% 50%)"
      : "circle(0% at 50% 50%)";

    return (
      <div
        ref={containerRef}
        className={cn("relative w-full overflow-hidden", className)}
        style={{
          backgroundColor: "#a1fea0",
          transform: "translateZ(0)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative w-full"
          style={{
            backgroundColor: "#000000",
            clipPath: activeClip,
            WebkitClipPath: activeClip,
            transition: isFullyRevealed
              ? "none"
              : "clip-path 0.95s cubic-bezier(0.19, 1, 0.22, 1), -webkit-clip-path 0.95s cubic-bezier(0.19, 1, 0.22, 1)",
            willChange: isFullyRevealed ? "auto" : "clip-path",
            transform: "translateZ(0)",
            ...style,
          }}
        >
          {/* Hardware-accelerated cursor spotlight using CSS variables */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              opacity: "var(--spotlight-opacity, 0)",
              transition: "opacity 0.25s ease-out",
              background:
                "radial-gradient(circle 380px at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(161, 254, 160, 0.09), transparent 70%)",
            }}
          />

          {children}
        </div>
      </div>
    );
  }

  // ── CLASSIC CURSOR MASK MODE (Aceternity UI fallback) ────────────────────
  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full", className || "h-screen")}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: "#a1fea0",
        transform: "translateZ(0)",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundColor: "#000000",
          clipPath: `circle(var(--mask-radius, ${size}px) at var(--mouse-x, 50%) var(--mouse-y, 50%))`,
          WebkitClipPath: `circle(var(--mask-radius, ${size}px) at var(--mouse-x, 50%) var(--mouse-y, 50%))`,
          transition: "clip-path 0.15s ease-out, -webkit-clip-path 0.15s ease-out",
          transform: "translateZ(0)",
          ...style,
        }}
      >
        {children}
      </div>
      {revealText && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {revealText}
        </div>
      )}
    </div>
  );
};

