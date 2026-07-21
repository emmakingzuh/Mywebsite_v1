"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useSmoothScroll } from "./smooth-scroll";

/**
 * Premium floating scroll indicator — right side, centered vertically.
 * Glassmorphism with animated gradient glow. Circular progress ring.
 * Play while scrolling, Pause when stopped, Reload at bottom.
 */
export function ScrollProgress() {
  const { scrollTo } = useSmoothScroll();
  const [progress, setProgress] = useState(0); // 0..1
  const [atBottom, setAtBottom] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let stopTimer: ReturnType<typeof setTimeout>;
    let raf = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, p)));
      setAtBottom(p >= 0.995);
      setScrolling(true);
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => setScrolling(false), 260);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(stopTimer);
    };
  }, []);

  if (!mounted) return null;

  const R = 22;
  const C = 2 * Math.PI * R;
  const dash = C * progress;

  return (
    <div className="fixed right-5 top-1/2 z-50 -translate-y-1/2 sm:right-7">
      <motion.button
        aria-label={atBottom ? "Return to top" : "Scroll progress"}
        onClick={() => atBottom && scrollTo(0)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full glass"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(40 6% 96% / 0.0), hsl(40 6% 96% / 0.25), hsl(40 6% 96% / 0.0))",
          }}
        />
        {/* Progress ring */}
        <svg className="absolute inset-0 -rotate-90" width="56" height="56" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={R} fill="none" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1.5" />
          <motion.circle
            cx="28"
            cy="28"
            r={R}
            fill="none"
            stroke="hsl(40 6% 96%)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={C}
            animate={{ strokeDashoffset: C - dash }}
            transition={{ duration: 0.2 }}
            style={{ filter: "drop-shadow(0 0 4px hsl(40 6% 96% / 0.5))" }}
          />
        </svg>
        {/* Icon */}
        <div className="relative text-white/80 group-hover:text-white">
          <AnimatePresence mode="wait">
            {atBottom ? (
              <motion.span
                key="reload"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                <RotateCcw className="h-4 w-4" />
              </motion.span>
            ) : scrolling ? (
              <motion.span
                key="play"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Play className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="pause"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Pause className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}
