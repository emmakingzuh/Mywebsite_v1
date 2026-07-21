"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { X, ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/site-content";
import { MediaEmbed } from "@/components/primitives/media-embed";
import { Reveal, MaskReveal } from "@/components/primitives/reveal";
import { useSmoothScroll } from "@/components/experience/smooth-scroll";

type Props = {
  project: Project;
  onClose: () => void;
  onNavigate: (p: Project) => void;
};

export function ProjectCaseStudy({ project, onClose, onNavigate }: Props) {
  const { scrollTo } = useSmoothScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.94]);

  // Lock body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const related = project.related
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as Project[];

  const next = projects[(projects.findIndex((p) => p.id === project.id) + 1) % projects.length];

  const goNext = (p: Project) => {
    onNavigate(p);
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background"
    >
      {/* Ambient palette wash */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background: `radial-gradient(80% 50% at 20% 0%, ${project.palette[0]}40, transparent 60%), radial-gradient(60% 50% at 90% 30%, ${project.palette[1]}40, transparent 60%), radial-gradient(70% 50% at 50% 100%, ${project.palette[2]}40, transparent 60%)`,
        }}
      />

      {/* Sticky header */}
      <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10">
        <button
          onClick={onClose}
          className="group flex items-center gap-2 font-mono-label text-[10px] text-white/60 transition-colors hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-white/40">
            <X className="h-3.5 w-3.5" />
          </span>
          Close
        </button>
        <span className="font-mono-label text-[10px] text-white/40">
          {project.index} / {project.title}
        </span>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="h-[100svh] overflow-y-auto"
        onScroll={() => {
          setScrolling(true);
          clearTimeout((goNext as never as { _t?: ReturnType<typeof setTimeout> })._t);
          (goNext as never as { _t?: ReturnType<typeof setTimeout> })._t = setTimeout(
            () => setScrolling(false),
            200
          );
        }}
      >
        {/* Hero video */}
        <div className="relative h-[100svh] w-full">
          <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
            <MediaEmbed media={project.hero} className="h-full w-full" ambient />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-24">
            <div className="editorial-container">
              <Reveal>
                <span className="font-mono-label text-[10px] text-white/60">
                  {project.category} — {project.year}
                </span>
              </Reveal>
              <h1 className="mt-4 font-display text-[clamp(3rem,12vw,11rem)] leading-[0.9] tracking-[-0.03em] text-white">
                <MaskReveal text={project.title} />
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative px-6 py-24 sm:px-10 sm:py-32 lg:py-48">
          <div className="editorial-container">
            {/* Overview */}
            <CaseBlock label="Overview">
              <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-white/85">
                {project.caseStudy.overview}
              </p>
            </CaseBlock>

            {/* Challenge + Creative Direction */}
            <div className="mt-24 grid gap-16 lg:grid-cols-2 lg:gap-24">
              <CaseBlock label="Challenge">
                <p className="text-base leading-relaxed text-white/60">
                  {project.caseStudy.challenge}
                </p>
              </CaseBlock>
              <CaseBlock label="Creative Direction">
                <p className="text-base leading-relaxed text-white/60">
                  {project.caseStudy.creativeDirection}
                </p>
              </CaseBlock>
            </div>

            {/* Process */}
            <CaseBlock label="Process" className="mt-32">
              <ol className="flex flex-col gap-6">
                {project.caseStudy.process.map((step, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-6 border-t border-white/10 py-6">
                      <span className="font-mono-label text-[10px] text-white/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg leading-relaxed text-white/75">{step}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </CaseBlock>

            {/* Behind the scenes */}
            <CaseBlock label="Behind the Scenes" className="mt-32">
              <p className="text-base leading-relaxed text-white/60">
                {project.caseStudy.behindTheScenes}
              </p>
            </CaseBlock>

            {/* Gallery */}
            <CaseBlock label="Gallery" className="mt-32">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.caseStudy.gallery.map((src, i) => (
                  <Reveal
                    key={i}
                    delay={i * 0.06}
                    className={i % 3 === 0 ? "sm:col-span-2" : ""}
                  >
                    <div className="group relative aspect-[16/10] overflow-hidden">
                      <img
                        src={src}
                        alt={`${project.title} gallery ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </CaseBlock>

            {/* Final result */}
            <CaseBlock label="Final Result" className="mt-32">
              <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-white/85">
                {project.caseStudy.finalResult}
              </p>
            </CaseBlock>

            {/* Related */}
            {related.length > 0 && (
              <CaseBlock label="Related Projects" className="mt-32">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {related.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => goNext(p)}
                      className="group relative aspect-[16/10] overflow-hidden text-left"
                    >
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />
                      <div className="absolute bottom-5 left-5">
                        <p className="font-mono-label text-[9px] text-white/60">{p.category}</p>
                        <p className="mt-1 font-display text-2xl text-white">{p.title}</p>
                      </div>
                      <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/70 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  ))}
                </div>
              </CaseBlock>
            )}

            {/* Next project */}
            {next && (
              <button
                onClick={() => goNext(next)}
                className="group mt-32 flex w-full items-center justify-between border-t border-white/10 pt-12"
              >
                <div className="text-left">
                  <span className="font-mono-label text-[10px] text-white/40">Next Project</span>
                  <p className="mt-3 font-display text-[clamp(2rem,6vw,5rem)] leading-none tracking-[-0.02em] text-white">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 text-white/60 transition-transform duration-500 group-hover:translate-x-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CaseBlock({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <span className="font-mono-label text-[10px] text-white/40">{label}</span>
      </Reveal>
      <div className="mt-6">{children}</div>
    </div>
  );
}
