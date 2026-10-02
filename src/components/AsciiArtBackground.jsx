"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AsciiArtBackground() {
  const asciiRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    if (!asciiRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in ASCII lines staggered
      gsap.from(linesRef.current, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: asciiRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Parallax scroll effect
      gsap.to(asciiRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: asciiRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Glitch effect on random lines
      const glitchLines = gsap.utils.toArray(linesRef.current).filter((_, i) => i % 7 === 0);
      gsap.to(glitchLines, {
        x: () => gsap.utils.random(-5, 5),
        opacity: () => gsap.utils.random(0.4, 1),
        duration: 0.1,
        repeat: -1,
        repeatDelay: () => gsap.utils.random(2, 5),
        ease: "steps(2)",
      });
    }, asciiRef);

    return () => ctx.revert();
  }, []);

  const asciiArt = [
    "    ╔══════════════════════════════════════════════════════════════════╗",
    "    ║  ██████╗ ██████╗ ██╗███████╗███╗   ███╗███████╗██████╗  █████╗  ║",
    "    ║  ██╔══██╗██╔══██╗██║██╔════╝████╗ ████║██╔════╝██╔══██╗██╔══██╗ ║",
    "    ║  ██████╔╝██████╔╝██║███████╗██╔████╔██║███████╗██████╔╝███████║ ║",
    "    ║  ██╔═══╝ ██╔══██╗██║╚════██║██║╚██╔╝██║╚════██║██╔═══╝ ██╔══██║ ║",
    "    ║  ██║     ██║  ██║██║███████║██║ ╚═╝ ██║███████║██║     ██║  ██║ ║",
    "    ║  ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝ ║",
    "    ╚══════════════════════════════════════════════════════════════════╝",
    "",
    "         ┌────────────────────────────────────────────────────┐",
    "         │  > git clone https://github.com/prism-ai.git      │",
    "         │  > cd prism-ai                                     │",
    "         │  > npm install                                     │",
    "         │  > npm run dev                                     │",
    "         │                                                    │",
    "         │  [████████████████████████████████████] 100%       │",
    "         │                                                    │",
    "         │  ✓ Build complete in 12.4s                        │",
    "         │  ✓ Server running on http://localhost:3000        │",
    "         └────────────────────────────────────────────────────┘",
    "",
    "    ╭─────────────────────────────────────────────────────────────╮",
    "    │                  ⚡ DEVELOPER METRICS ⚡                     │",
    "    ├─────────────────────────────────────────────────────────────┤",
    "    │  • Contributors:     [████████░░] 847                      │",
    "    │  • Commits:          [██████████] 12,453                   │",
    "    │  • Pull Requests:    [█████████░] 1,247                    │",
    "    │  • Issues Resolved:  [████████░░] 3,891                    │",
    "    │  • Stars:            [██████████] ★ 45.2k                  │",
    "    │  • Forks:            [████████░░] 8,341                    │",
    "    ╰─────────────────────────────────────────────────────────────╯",
    "",
    "         ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
    "         ┃  🔧 TECH STACK                                  ┃",
    "         ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫",
    "         ┃  Frontend:  React 19 • Next.js 15 • TypeScript ┃",
    "         ┃  Styling:   Tailwind CSS • Framer Motion       ┃",
    "         ┃  Backend:   Node.js • Python • FastAPI         ┃",
    "         ┃  AI/ML:     TensorFlow • PyTorch • Scikit      ┃",
    "         ┃  DevOps:    Docker • Kubernetes • GitHub CI    ┃",
    "         ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
    "",
    "    ╔══════════════════════════════════════════════════════════════╗",
    "    ║                   🚀 CONTRIBUTION FLOW 🚀                    ║",
    "    ╠══════════════════════════════════════════════════════════════╣",
    "    ║                                                              ║",
    "    ║    1. Fork Repo      ────►    2. Clone Local                ║",
    "    ║         │                           │                        ║",
    "    ║         ▼                           ▼                        ║",
    "    ║    3. Create Branch  ────►    4. Make Changes               ║",
    "    ║         │                           │                        ║",
    "    ║         ▼                           ▼                        ║",
    "    ║    5. Run Tests      ────►    6. Push & PR                  ║",
    "    ║         │                           │                        ║",
    "    ║         └───────────────────────────┘                        ║",
    "    ║                      │                                       ║",
    "    ║                      ▼                                       ║",
    "    ║              7. Code Review & Merge                          ║",
    "    ║                                                              ║",
    "    ╚══════════════════════════════════════════════════════════════╝",
    "",
    "         ┌──────────────────────────────────────────────┐",
    "         │  $ npm run test                              │",
    "         │  ✓ 1,247 tests passing                       │",
    "         │  ✓ Code coverage: 94%                        │",
    "         │  ✓ All checks passed                         │",
    "         └──────────────────────────────────────────────┘",
    "",
    "    ╭───────────────────────────────────────────────────────────╮",
    "    │         💡 GETTING STARTED IS EASY 💡                     │",
    "    ├───────────────────────────────────────────────────────────┤",
    "    │                                                           │",
    "    │  • Read CONTRIBUTING.md for guidelines                   │",
    "    │  • Check open issues for beginner-friendly tasks         │",
    "    │  • Join our Discord community                            │",
    "    │  • Follow coding standards & conventions                 │",
    "    │  • Write tests for new features                          │",
    "    │  • Document your changes                                 │",
    "    │                                                           │",
    "    ╰───────────────────────────────────────────────────────────╯",
  ];

  return (
    <div
      ref={asciiRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0.15,
        pointerEvents: "none",
        zIndex: 1,
        width: "100%",
        maxWidth: "1200px",
        userSelect: "none",
      }}
    >
      <pre
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "clamp(7px, 0.8vw, 12px)",
          lineHeight: 1.2,
          color: "#000000",
          margin: 0,
          textAlign: "left",
          whiteSpace: "pre",
          overflow: "hidden",
        }}
      >
        {asciiArt.map((line, index) => {
          // Use a deterministic pseudo-random opacity based on index
          // This ensures server and client render the same values
          const seed = index * 2654435761; // Large prime number for better distribution
          const pseudoRandom = (seed % 1000) / 1000; // Value between 0 and 1
          const opacity = 0.6 + pseudoRandom * 0.4; // Between 0.6 and 1.0
          
          return (
            <div
              key={index}
              ref={(el) => (linesRef.current[index] = el)}
              style={{
                opacity: opacity,
              }}
            >
              {line}
            </div>
          );
        })}
      </pre>
    </div>
  );
}
