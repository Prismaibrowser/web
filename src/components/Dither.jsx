'use client';

import { useEffect, useRef } from 'react';

import './Dither.css';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const toRgb = (color) => color.map((channel) => Math.round(clamp(channel, 0, 1) * 255));

const createRandom = (seed) => {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
};

const buildParticles = (width, height, random, pixelSize) => {
  const targetCount = clamp(Math.round((width * height) / 680), 900, 3400);
  const particles = [];
  const safeWidth = width * 0.31;
  const safeHeight = height * 0.29;

  let attempts = 0;
  const maxAttempts = targetCount * 8;

  while (particles.length < targetCount && attempts < maxAttempts) {
    attempts += 1;
    const x = random() * width;
    const y = random() * height;
    const centerDistance = Math.sqrt(
      ((x - width / 2) / safeWidth) ** 2 + ((y - height / 2) / safeHeight) ** 2
    );

    // Layer several low-frequency fields so the dither forms irregular clouds
    // instead of a uniform grid. The center remains calm behind the copy.
    const field =
      Math.sin(x * 0.009 + y * 0.002) * 0.34 +
      Math.sin(y * 0.013 - x * 0.003) * 0.28 +
      Math.sin((x + y) * 0.004) * 0.2 +
      (random() - 0.5) * 0.28;
    const edgeStrength = clamp((centerDistance - 0.38) / 1.05, 0, 1);
    const density = clamp(edgeStrength * 0.88 + field * 0.72, 0.02, 0.95);
    if (random() > density) continue;

    particles.push({
      x,
      y,
      originX: x,
      originY: y,
      radius: random() > 0.82 ? pixelSize * (1.4 + random() * 0.9) : pixelSize * (0.55 + random() * 0.4),
      opacity: 0.24 + random() * 0.66,
      speed: 0.22 + random() * 0.58,
      amplitudeX: 10 + random() * 32,
      amplitudeY: 8 + random() * 28,
      phase: random() * Math.PI * 2,
      drift: random() * Math.PI * 2,
    });
  }

  return particles;
};

export default function Dither({
  waveSpeed = 0.22,
  waveColor = [0, 0.87, 0.5],
  backgroundColor = [0, 0, 0],
  pixelSize = 3,
  disableAnimation = false,
  randomSeed,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seed = Number.isFinite(randomSeed) ? randomSeed : Math.floor(Math.random() * 2 ** 31);
    const random = createRandom(seed);
    const [red, green, blue] = toRgb(waveColor);
    let particles = [];
    let frameId;
    let startTime = performance.now();
    let width = 0;
    let height = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(bounds.width));
      height = Math.max(1, Math.floor(bounds.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = buildParticles(width, height, random, pixelSize);
      startTime = performance.now();
    };

    const draw = (now) => {
      const motionTime = (now - startTime) / 1000;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        const positionX = particle.originX + Math.sin(motionTime * particle.speed * waveSpeed * 9 + particle.phase) * particle.amplitudeX;
        const positionY = particle.originY + Math.cos(motionTime * particle.speed * waveSpeed * 7 + particle.drift) * particle.amplitudeY;
        const flicker = 0.65 + Math.sin(motionTime * particle.speed * 2.4 + particle.phase) * 0.35;
        const tint = 0.58 + flicker * 0.42;
        context.fillStyle = `rgba(${Math.round(red * tint)}, ${Math.round(green * tint)}, ${Math.round(blue * tint)}, ${particle.opacity * flicker})`;
        context.fillRect(
          Math.round(positionX / pixelSize) * pixelSize,
          Math.round(positionY / pixelSize) * pixelSize,
          particle.radius,
          particle.radius
        );
      }

      if (!disableAnimation && !prefersReducedMotion.matches) {
        frameId = requestAnimationFrame(draw);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();
    draw(performance.now());

    const handleMotionPreference = () => {
      cancelAnimationFrame(frameId);
      draw(performance.now());
    };
    prefersReducedMotion.addEventListener('change', handleMotionPreference);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      prefersReducedMotion.removeEventListener('change', handleMotionPreference);
    };
  }, [backgroundColor, disableAnimation, pixelSize, randomSeed, waveColor, waveSpeed]);

  return <canvas ref={canvasRef} className="dither-container" aria-hidden="true" />;
}
