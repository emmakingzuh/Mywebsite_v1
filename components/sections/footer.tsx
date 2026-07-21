"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { studio, nav } from "@/lib/site-content";
import { useSmoothScroll } from "@/components/experience/smooth-scroll";

export function Footer() {
  const { scrollTo } = useSmoothScroll();
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 pb-8 pt-20 sm:px-10">
      {/* Animated divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      <div className="editorial-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Logo block */}
          <div>
            <button
              onClick={() => scrollTo(0)}
              className="font-display text-[clamp(2rem,5vw,4rem)] leading-none tracking-[-0.02em] text-white"
            >
              {studio.name}
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">
              {studio.description}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-label text-[9px] text-white/30">Index</span>
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href, { offset: -20 })}
                className="group flex w-fit items-center gap-2 font-mono-label text-[10px] text-white/50 transition-colors hover:text-white"
              >
                <span className="h-px w-0 bg-white transition-all duration-500 ease-editorial group-hover:w-4" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-label text-[9px] text-white/30">Connect</span>
            {studio.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 font-mono-label text-[10px] text-white/50 transition-colors hover:text-white"
              >
                <span className="h-px w-0 bg-white transition-all duration-500 ease-editorial group-hover:w-4" />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-mono-label text-[9px] text-white/30">
            © {year} {studio.name}. All Rights Reserved.
          </p>
          <p className="font-mono-label text-[9px] text-white/30">
            Creating Motion. Building Experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
