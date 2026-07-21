"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

type AmbientBackgroundProps = {
  /** Active palette [c1, c2, c3] in hex; transitions smoothly when changed */
  palette: [string, string, string];
};

/**
 * Living background: large blurred abstract gradient shapes that drift and
 * react to scroll. GPU-accelerated, subtle, never distracting.
 */
export function AmbientBackground({ palette }: AmbientBackgroundProps) {
  const scrollY = useMotionValue(0);
  const smoothScroll = useSpring(scrollY, { stiffness: 60, damping: 20, mass: 0.6 });

  const y1 = useTransform(smoothScroll, [0, 4000], [0, -180]);
  const y2 = useTransform(smoothScroll, [0, 4000], [0, 220]);
  const y3 = useTransform(smoothScroll, [0, 4000], [0, -120]);

  const rot1 = useTransform(smoothScroll, [0, 4000], [0, 24]);
  const rot2 = useTransform(smoothScroll, [0, 4000], [0, -18]);

  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => scrollY.set(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollY]);

  const [c1, c2, c3] = palette;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, hsl(0 0% 8%) 0%, hsl(0 0% 4%) 60%, hsl(0 0% 3%) 100%)",
        }}
      />

      {/* Drifting blob 1 — top left, warm */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: y1,
          y: y1,
          rotate: rot1,
          top: "-12%",
          left: "-10%",
          width: "52vw",
          height: "52vw",
          background: `radial-gradient(circle at 50% 50%, ${c1} 0%, transparent 62%)`,
          filter: "blur(90px)",
          opacity: 0.34,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting blob 2 — right mid, secondary */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: y2,
          y: y2,
          rotate: rot2,
          top: "30%",
          right: "-14%",
          width: "46vw",
          height: "46vw",
          background: `radial-gradient(circle at 50% 50%, ${c2} 0%, transparent 64%)`,
          filter: "blur(110px)",
          opacity: 0.3,
        }}
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting blob 3 — bottom, tertiary */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: y3,
          y: y3,
          bottom: "-18%",
          left: "20%",
          width: "50vw",
          height: "50vw",
          background: `radial-gradient(circle at 50% 50%, ${c3} 0%, transparent 66%)`,
          filter: "blur(100px)",
          opacity: 0.26,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle film grain overlay */}
      <div
        ref={grainRef}
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
