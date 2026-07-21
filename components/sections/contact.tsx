"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { studio } from "@/lib/site-content";
import { Reveal, MaskReveal } from "@/components/primitives/reveal";
import { Magnetic } from "@/components/primitives/magnetic";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 sm:py-48">
      <div className="editorial-container">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="font-mono-label text-[10px] text-white/40">06 — Contact</span>
          </Reveal>

          <h2 className="mt-8 font-display text-[clamp(2.5rem,9vw,9rem)] leading-[0.9] tracking-[-0.03em] text-white">
            <MaskReveal text="Let's Create" />
            <span className="block text-white/55">
              <MaskReveal text="Something." delay={0.18} />
            </span>
          </h2>

          <Reveal delay={0.2} className="mt-12">
            <Magnetic as="a" href={`mailto:${studio.email}`} strength={0.25} className="group inline-flex">
              <span className="font-display text-[clamp(1.25rem,3vw,2rem)] text-white/80 transition-colors duration-500 group-hover:text-white">
                {studio.email}
              </span>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <div className="flex flex-col items-center gap-2 font-mono-label text-[10px] text-white/40 sm:flex-row sm:gap-6">
              <span>{studio.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
              <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white/70">
                {studio.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-16">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {studio.social.map((s) => (
                <Magnetic
                  key={s.label}
                  as="a"
                  href={s.href}
                  strength={0.4}
                  className="group inline-flex"
                  aria-label={s.label}
                >
                  <span className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono-label text-[10px] text-white/70 transition-colors duration-500 group-hover:border-white/40 group-hover:text-white">
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Magnetic>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
