"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import './PrismLoader.css';

const PrismLoader = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Booting PrismSpace');
  const loaderRef = useRef(null);

  const loadingSteps = useMemo(() => [
    ['Reading interface', 28],
    ['Warming visual systems', 54],
    ['Loading your workspace', 78],
    ['Finalizing experience', 94],
  ], []);

  useEffect(() => {
    let cancelled = false;

    const waitForImage = (image) => {
      if (image.complete) return Promise.resolve();
      return new Promise((resolve) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      });
    };

    const waitForPage = async () => {
      setStatus('Loading your workspace');

      if (document.readyState !== 'complete') {
        await new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));
      }

      const images = Array.from(document.images);
      await Promise.all(images.map(waitForImage));

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      // Give React and the browser one paint to finish layout before revealing the page.
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      if (!cancelled) {
        setStatus('Ready to explore');
        setProgress(100);
        setIsReady(true);
      }
    };

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 94) return current;
        const nextStep = loadingSteps.find(([, threshold]) => current < threshold);
        if (nextStep) {
          setStatus(nextStep[0]);
          return Math.min(nextStep[1] - 2, current + Math.max(1, (nextStep[1] - current) * 0.08));
        }
        return current;
      });
    }, 120);

    waitForPage();

    return () => {
      cancelled = true;
      window.clearInterval(progressTimer);
    };
  }, [loadingSteps, onLoadComplete]);

  useEffect(() => {
    if (!loaderRef.current) return undefined;

    const context = gsap.context(() => {
      const enterItems = loaderRef.current.querySelectorAll('[data-loader-enter]');
      const ambientRings = loaderRef.current.querySelectorAll('.loader-ambient');
      const logoGlow = loaderRef.current.querySelector('.logo-glow');
      const logoOrbits = loaderRef.current.querySelectorAll('.logo-orbit');
      const logoContainer = loaderRef.current.querySelector('.logo-container-loader');
      const logoMark = loaderRef.current.querySelector('.modern-logo');
      const logoWordmark = loaderRef.current.querySelector('.loader-wordmark');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion) {
        gsap.set(enterItems, { opacity: 1, y: 0 });
        if (isReady) {
          setIsVisible(false);
          onLoadComplete?.();
        }
        return;
      }

      if (isReady) {
        gsap.timeline({
          defaults: { ease: 'power3.inOut' },
          onComplete: () => {
            setIsVisible(false);
            onLoadComplete?.();
          },
        })
          .to(loaderRef.current, { opacity: 0, duration: 0.48, y: -8 })
          .set(loaderRef.current, { visibility: 'hidden' });
        return;
      }

      gsap.set(enterItems, { opacity: 0, y: 14 });
      gsap.set(logoContainer, { opacity: 0 });
      gsap.set(logoWordmark, { opacity: 0, y: 12 });
      gsap.set(logoMark, { opacity: 0, scale: 0.52, rotation: -14, y: 12, filter: 'blur(8px) drop-shadow(0 0 0 rgba(161, 254, 160, 0))' });
      gsap.set(logoOrbits, { opacity: 0, scaleX: 0.38, scaleY: 0.72 });
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .to(enterItems[0], { opacity: 1, y: 0, duration: 0.45 })
        .to(enterItems[1], { opacity: 1, y: 0, duration: 0.7 }, '-=0.16')
        .to(enterItems[2], { opacity: 1, y: 0, duration: 0.38 }, '-=0.18')
        .to(enterItems[3], { opacity: 1, y: 0, duration: 0.38 }, '-=0.12')
        .to(enterItems[4], { opacity: 1, y: 0, duration: 0.38 }, '-=0.12');

      gsap.timeline({ delay: 0.36, defaults: { ease: 'power4.out' } })
        .to(logoContainer, { opacity: 1, duration: 0.14 })
        .to(logoOrbits, { opacity: 1, scaleX: 1.08, scaleY: 1, duration: 0.7, stagger: 0.08 }, '-=0.04')
        .to(logoMark, { opacity: 1, scale: 1.12, rotation: 0, y: 0, filter: 'blur(0px) drop-shadow(0 0 24px rgba(161, 254, 160, 0.9))', duration: 0.72 }, '-=0.52')
        .to(logoMark, { scale: 1, duration: 0.32, ease: 'power2.out' })
        .to(logoWordmark, { opacity: 1, y: 0, duration: 0.42 }, '-=0.08');

      gsap.fromTo(logoGlow, { opacity: 0, scale: 0.58 }, { opacity: 1, scale: 1.24, duration: 0.9, delay: 0.34, ease: 'power2.out' });
      gsap.to(logoGlow, { scale: 1.1, opacity: 0.78, duration: 1.8, delay: 1.24, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      gsap.to(ambientRings, { rotation: 360, duration: 42, repeat: -1, ease: 'none', stagger: { each: -12 } });
      gsap.to(logoOrbits, { scaleY: 1.06, opacity: 0.94, duration: 2.2, repeat: -1, yoyo: true, stagger: 0.28, ease: 'sine.inOut' });
    }, loaderRef);

    return () => context.revert();
  }, [isReady, onLoadComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div ref={loaderRef} className="modern-loader" role="status" aria-live="polite" aria-label="Loading PrismSpace">
      <div className="loader-ambient loader-ambient-one" aria-hidden="true" />
      <div className="loader-ambient loader-ambient-two" aria-hidden="true" />
      <div className="modern-loader-content">
        <div className="loader-topline" data-loader-enter>
          <span className="loader-kicker"><i /> PRISMSPACE / SYSTEM</span>
          <span className="loader-version">V.01</span>
        </div>

        <div className="loader-brand-lockup" data-loader-enter>
          <div className="logo-container-loader">
            <div className="logo-glow" />
            <span className="logo-orbit logo-orbit-one" />
            <span className="logo-orbit logo-orbit-two" />
            <img
              src="/logo-icon.png"
              alt=""
              className="modern-logo"
            />
          </div>
          <p className="loader-wordmark">prism<span>space</span></p>
        </div>

        <div className="loader-readout" data-loader-enter>
          <span className="loader-state-dot" />
          <span>{status}</span>
          <strong>{Math.round(Math.min(progress, 100))}%</strong>
        </div>

        <div className="progress-container" data-loader-enter aria-hidden="true">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          <div className="progress-ticks"><span>00</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
        </div>

        <div className="loader-footer" data-loader-enter>
          <span>ALL SYSTEMS / {isReady ? 'ONLINE' : 'SYNCING'}</span>
          <span>BUILT FOR PARALLEL THINKING</span>
        </div>
      </div>
    </div>
  );
};

export default PrismLoader;
