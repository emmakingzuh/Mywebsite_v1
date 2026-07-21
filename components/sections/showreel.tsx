"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { showreel } from "@/lib/site-content";
import { MediaEmbed } from "@/components/primitives/media-embed";
import { Reveal, MaskReveal } from "@/components/primitives/reveal";

export function Showreel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.98]);

  return (
    <section ref={ref} id="reel" className="relative py-32 sm:py-48">
      <div className="editorial-container">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <span className="font-mono-label text-[10px] text-white/40">
                02 — Featured
              </span>
            </Reveal>
            <h2 className="mt-4 font-display text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
              <MaskReveal text={showreel.title} />
            </h2>
          </div>
          <Reveal delay={0.15} className="max-w-md">
            <p className="text-sm leading-relaxed text-white/55">
              {showreel.subtitle}
            </p>
          </Reveal>
        </div>

        <motion.div style={{ y, scale }} className="relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10">
            <MediaEmbed media={showreel.media} className="h-full w-full" />
            {/* Frame corners */}
            <div className="pointer-events-none absolute inset-0">
              {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                (pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} h-5 w-5 border-white/30 ${
                      pos.includes("top") ? "border-t" : "border-b"
                    } ${pos.includes("left") ? "border-l" : "border-r"}`}
                  />
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
