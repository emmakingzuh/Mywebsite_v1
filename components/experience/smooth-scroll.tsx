"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

type ScrollTo = (target: number | string | HTMLElement, opts?: { offset?: number }) => void;

type SmoothScrollContextValue = {
  lenis: Lenis | null;
  scrollTo: ScrollTo;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      lerp: 0.1,
    });
    lenisRef.current = lenis;
    setReady(true);

    let rafId = 0;
    let lastTime = 0;
    const raf = (time: number) => {
      if (time - lastTime > 16) {
        lenis.raf(time);
        lastTime = time;
      }
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo: ScrollTo = (target, opts) => {
    const lenis = lenisRef.current;
    if (!lenis) {
      // Fallback native scroll
      if (typeof target === "string") {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth" });
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    if (typeof target === "number") {
      lenis.scrollTo(target, { offset: opts?.offset ?? 0 });
    } else if (typeof target === "string") {
      lenis.scrollTo(target, { offset: opts?.offset ?? 0 });
    } else if (target instanceof HTMLElement) {
      lenis.scrollTo(target, { offset: opts?.offset ?? 0 });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: ready ? lenisRef.current : null, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
