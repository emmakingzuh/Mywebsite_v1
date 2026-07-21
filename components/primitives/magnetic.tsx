"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "button" | "a";
  href?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

/**
 * Magnetic wrapper — element drifts toward the cursor on hover.
 */
export function Magnetic({
  children,
  className,
  strength = 0.35,
  as = "div",
  href,
  onClick,
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const style = { x: sx, y: sy };
  const handlers = {
    onPointerMove: onMove,
    onPointerLeave: reset,
    onPointerEnter: () => setHovered(true),
  };
  const cursorAttr = hovered ? { "data-cursor": "hover" } : {};

  if (as === "a") {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={className}
        onClick={onClick}
        style={style}
        {...handlers}
        {...cursorAttr}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  if (as === "button") {
    return (
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        className={className}
        onClick={onClick}
        style={style}
        {...handlers}
        {...cursorAttr}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={style}
      {...handlers}
      {...cursorAttr}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
