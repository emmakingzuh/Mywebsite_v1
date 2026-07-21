"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { about } from "@/lib/site-content";
import { Reveal, MaskReveal } from "@/components/primitives/reveal";
import { ChevronDown } from "lucide-react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="about" className="relative py-32 sm:py-48">
      <div className="editorial-container">

        {/* ── Bio row ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Portrait */}
          <div className="relative">
            <Reveal>
              <span className="font-mono-label text-[10px] text-white/40">05 — About</span>
            </Reveal>
            <motion.div
              style={{ y }}
              className="group relative mt-8 aspect-[4/5] w-full overflow-hidden"
            >
              <img
                src={about.portrait}
                alt={about.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="pointer-events-none absolute inset-3 border border-white/15" />
            </motion.div>

            {/* Soft skills chips below portrait */}
            <div className="mt-6 flex flex-wrap gap-2">
              {about.softSkills.map((s, i) => (
                <Reveal key={s} delay={i * 0.04}>
                  <span className="rounded-full border border-white/15 px-3 py-1 font-mono-label text-[9px] text-white/50">
                    {s}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-white">
              <MaskReveal text={about.name} />
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
              {about.roles.map((r, i) => (
                <Reveal key={r} delay={i * 0.05}>
                  <span className="font-mono-label text-[9px] text-white/45">
                    {r}
                    {i < about.roles.length - 1 && <span className="ml-3 text-white/20">/</span>}
                  </span>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-6">
              {about.biography.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base leading-relaxed text-white/60">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10 border-l border-white/15 pl-6">
              <p className="font-display text-lg italic leading-relaxed text-white/75">
                {about.philosophy}
              </p>
            </Reveal>

            {/* Software stack */}
            <Reveal delay={0.25} className="mt-10">
              <p className="mb-4 font-mono-label text-[10px] uppercase tracking-[0.12em] text-white/35">
                Software
              </p>
              <div className="flex flex-wrap gap-2">
                {about.software.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-white/10 bg-white/5 px-3 py-1.5 font-mono-label text-[9px] text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Experience timeline ──────────────────────────────────── */}
        <div className="mt-28 sm:mt-36">
          <Reveal>
            <p className="mb-10 font-mono-label text-[10px] uppercase tracking-[0.12em] text-white/35">
              Experience
            </p>
          </Reveal>
          <div className="flex flex-col gap-0">
            {about.experience.map((entry, i) => (
              <ExperienceRow key={i} entry={entry} isLast={i === about.experience.length - 1} index={i} />
            ))}
          </div>
        </div>

        {/* ── Education + Certifications ───────────────────────────── */}
        <div className="mt-28 grid grid-cols-1 gap-20 sm:mt-36 lg:grid-cols-2">
          {/* Education */}
          <div>
            <Reveal>
              <p className="mb-8 font-mono-label text-[10px] uppercase tracking-[0.12em] text-white/35">
                Education
              </p>
            </Reveal>
            <div className="flex flex-col gap-8">
              {about.education.map((edu, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div>
                    <p className="font-display text-xl tracking-[-0.01em] text-white">{edu.degree}</p>
                    <p className="mt-1 text-sm text-white/55">{edu.institution}</p>
                    <div className="mt-2 flex gap-4">
                      <span className="font-mono-label text-[9px] text-white/35">{edu.location}</span>
                      <span className="font-mono-label text-[9px] text-white/35">{edu.year}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Professional Development */}
          <div>
            <Reveal>
              <p className="mb-8 font-mono-label text-[10px] uppercase tracking-[0.12em] text-white/35">
                Professional Development
              </p>
            </Reveal>
            <div className="flex flex-col gap-5">
              {about.certifications.map((c, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-5">
                    <div>
                      <p className="text-sm font-medium text-white/80">{c.title}</p>
                      <p className="mt-0.5 font-mono-label text-[9px] text-white/40">{c.issuer}</p>
                    </div>
                    <span className="shrink-0 font-mono-label text-[9px] text-white/30">{c.year}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ExperienceRow({
  entry,
  isLast,
  index,
}: {
  entry: (typeof about.experience)[number];
  isLast: boolean;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.04}>
      <div className={`border-t border-white/10 ${isLast ? "border-b" : ""}`}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-4 py-6 text-left sm:items-center"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="font-display text-lg tracking-[-0.01em] text-white">
              {entry.role}
            </span>
            <span className="text-sm text-white/50">{entry.company}</span>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <span className="hidden font-mono-label text-[9px] text-white/35 sm:block">
              {entry.period}
            </span>
            <span className="hidden font-mono-label text-[9px] text-white/25 sm:block">
              {entry.location}
            </span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ChevronDown size={14} className="text-white/40" />
            </motion.span>
          </div>
        </button>

        {/* Mobile period */}
        <div className="flex gap-4 pb-3 sm:hidden">
          <span className="font-mono-label text-[9px] text-white/35">{entry.period}</span>
          <span className="font-mono-label text-[9px] text-white/25">{entry.location}</span>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-2 pb-7 pl-1">
                {entry.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/50">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
