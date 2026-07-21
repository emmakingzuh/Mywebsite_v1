"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/site-content";
import { Reveal, MaskReveal } from "@/components/primitives/reveal";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section ref={ref} id="work" className="relative py-32 sm:py-48">
        <div className="editorial-container">
          <div className="mb-20 flex items-end justify-between">
            <div>
              <Reveal>
                <span className="font-mono-label text-[10px] text-white/40">
                  03 — Selected Work
                </span>
              </Reveal>
              <h2 className="mt-4 font-display text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                <MaskReveal text="Selected Work" />
              </h2>
            </div>
            <Reveal delay={0.15} className="hidden sm:block">
              <span className="font-mono-label text-[10px] text-white/40">
                {projects.length} Projects
              </span>
            </Reveal>
          </div>

          <div className="flex flex-col gap-24 sm:gap-40">
            {projects.map((p, i) => (
              <WorkRow key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <ProjectCaseStudy project={active} onClose={() => setActive(null)} onNavigate={setActive} />}
      </AnimatePresence>
    </>
  );
}

function WorkRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const rowRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const [hovered, setHovered] = useState(false);
  const offset = index % 2 === 0 ? "lg:pl-0 lg:pr-[12%]" : "lg:pl-[12%] lg:pr-0";

  return (
    <motion.button
      ref={rowRef}
      onClick={onOpen}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      data-cursor="view"
      data-cursor-label="View"
      data-project={project.id}
      className={`group relative block w-full text-left ${offset}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
        />
        {/* Gradient wash from project palette */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-70"
          style={{
            background: `linear-gradient(135deg, ${project.palette[0]}55, transparent 50%, ${project.palette[2]}55)`,
          }}
        />
        {/* Light sweep on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-editorial group-hover:translate-x-full" />
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:bg-black/0" />

        {/* Index */}
        <span className="absolute left-5 top-5 font-mono-label text-[10px] text-white/70">
          {project.index}
        </span>
        <span className="absolute right-5 top-5 flex items-center gap-1.5 font-mono-label text-[10px] text-white/70">
          {project.category}
          <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      {/* Meta */}
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-[clamp(1.75rem,4vw,3.5rem)] leading-none tracking-[-0.02em] text-white">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
            {project.excerpt}
          </p>
        </div>
        <div className="hidden shrink-0 text-right sm:block">
          <p className="font-mono-label text-[10px] text-white/40">{project.client}</p>
          <p className="mt-2 font-mono-label text-[10px] text-white/40">{project.year}</p>
        </div>
      </div>
    </motion.button>
  );
}
