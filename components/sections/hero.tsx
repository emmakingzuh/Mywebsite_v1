"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { studio } from "@/lib/site-content";
import { MaskReveal } from "@/components/primitives/reveal";
import { Magnetic } from "@/components/primitives/magnetic";
import { useSmoothScroll } from "@/components/experience/smooth-scroll";

export function Hero() {
  const { scrollTo } = useSmoothScroll();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="editorial-container flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-10 font-mono-label text-[10px] text-white/40"
        >
          Motion Design Studio — Abuja, Nigeria
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.75rem,11vw,11rem)] leading-[0.92] tracking-[-0.03em] text-white">
          <span className="block">
            <MaskReveal text="Creating Motion." delay={0.4} />
          </span>
          <span className="block text-white/55">
            <MaskReveal text="Building Experiences." delay={0.62} />
          </span>
        </h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono-label text-[10px] text-white/45 sm:text-[11px]"
        >
          {studio.subheading.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-white/20" />}
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="mt-16"
        >
          <Magnetic
            as="button"
            onClick={() => scrollTo("#work", { offset: -20 })}
            strength={0.4}
            className="group relative inline-flex"
            aria-label="Explore work"
          >
            <span className="relative z-10 flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-mono-label text-[11px] text-white transition-colors duration-500 group-hover:border-white/50">
              Explore Work
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
            </span>
            <span className="absolute inset-0 -z-10 rounded-full bg-white/0 blur-xl transition-all duration-700 group-hover:bg-white/10" />
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-label text-[9px] text-white/30"
      >
        Scroll
      </motion.div>
    </section>
  );
}
