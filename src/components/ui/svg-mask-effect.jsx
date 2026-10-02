"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
  style,
  revealOnScroll = false,
  scrollReveal = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    container.addEventListener("mousemove", updateMousePosition);
    return () => container.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    if (!revealOnScroll || scrollReveal || !containerRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [revealOnScroll, scrollReveal]);

  if (scrollReveal) {
    return (
      <motion.div
        className={cn("relative w-full will-change-[clip-path]", className)}
        style={{ overflow: "clip", ...style }}
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        whileInView={{ clipPath: "circle(150% at 50% 50%)" }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ clipPath: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } }}
      >
        {children}
      </motion.div>
    );
  }

  const maskSize = isHovered || isRevealed ? revealSize : size;
  const maskX = mousePosition.x ?? (containerRef.current?.clientWidth ?? 0) / 2;
  const maskY = mousePosition.y ?? (containerRef.current?.clientHeight ?? 0) / 2;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative overflow-hidden", className || "h-screen")}
      animate={{ backgroundColor: "#000000" }}
      transition={{ backgroundColor: { duration: 0.3 } }}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
        animate={{
          maskPosition: `${maskX - maskSize / 2}px ${maskY - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-black opacity-50 dark:bg-white" />
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold"
        >
          {children}
        </div>
      </motion.div>
      <div className="flex h-full w-full items-center justify-center">
        {revealText}
      </div>
    </motion.div>
  );
};
