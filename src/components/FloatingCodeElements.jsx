"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FloatingCodeElements() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const codeSnippets = [
    "{ git clone }",
    "npm install",
    "$ npm run dev",
    "✓ Ready",
    "fork();",
    "commit -m",
    "push origin",
    "pull request",
    "merge --ff",
    "deploy()",
    "test.pass",
    "build: ✓",
    "CI/CD ✓",
    "docker run",
    "k8s apply",
    "localhost:3000",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        elementsRef.current.forEach((el, i) => {
          if (!el) return;

        // Random initial position
        const startX = gsap.utils.random(-100, 100);
        const startY = gsap.utils.random(-100, 100);

        gsap.set(el, {
          x: startX,
          y: startY,
          opacity: 0,
          scale: 0.8,
        });

        // Entrance animation
        gsap.to(el, {
          opacity: gsap.utils.random(0.25, 0.45),
          scale: gsap.utils.random(0.9, 1.2),
          duration: gsap.utils.random(1, 2),
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Floating animation
        gsap.to(el, {
          y: `+=${gsap.utils.random(-80, 80)}`,
          x: `+=${gsap.utils.random(-60, 60)}`,
          rotation: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(8, 15),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          style={{
            position: "absolute",
            left: `${10 + (index % 5) * 18}%`,
            top: `${10 + Math.floor(index / 5) * 25}%`,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "clamp(13px, 1.3vw, 20px)",
            fontWeight: 700,
            color: "#000000",
            opacity: 0.22,
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  );
}
