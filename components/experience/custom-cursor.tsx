"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorState = "default" | "hover" | "view" | "drag";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  // Trail
  const tx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.8 });
  const ty = useSpring(y, { stiffness: 120, damping: 20, mass: 0.8 });

  const rafRef = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (hidden) setHidden(false);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);

    // Hover detection via delegation
    const over = (e: Event) => {
      const t = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor], a, button, [role='button']"
      );
      if (!t) {
        setState("default");
        setLabel("");
        return;
      }
      const c = t.getAttribute("data-cursor");
      if (c === "view") {
        setState("view");
        setLabel(t.getAttribute("data-cursor-label") || "View");
      } else if (c === "drag") {
        setState("drag");
        setLabel(t.getAttribute("data-cursor-label") || "Drag");
      } else {
        setState("hover");
        setLabel("");
      }
    };
    document.addEventListener("pointerover", over);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      document.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y, hidden]);

  if (!enabled) return null;

  const sizes: Record<CursorState, number> = {
    default: 10,
    hover: 56,
    view: 96,
    drag: 80,
  };
  const size = sizes[state];

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {/* Ink trail */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: tx,
          y: ty,
          width: 28,
          height: 28,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(40 6% 96% / 0.22), hsl(40 6% 96% / 0) 70%)",
          filter: "blur(4px)",
          opacity: hidden ? 0 : 0.7,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />
      {/* Core cursor */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          x: sx,
          y: sy,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
          background:
            state === "default"
              ? "hsl(40 6% 96%)"
              : "hsl(0 0% 100% / 0.06)",
          border: state === "default" ? "none" : "1px solid hsl(0 0% 100% / 0.18)",
          backdropFilter: state === "default" ? "none" : "blur(6px)",
          boxShadow:
            state === "default"
              ? "0 0 14px hsl(40 6% 96% / 0.4)"
              : "0 0 30px hsl(40 6% 96% / 0.12)",
        }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {label && state !== "default" && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              className="font-mono-label text-[9px] text-white/80"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
