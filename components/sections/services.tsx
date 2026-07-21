"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/site-content";
import { Reveal, MaskReveal } from "@/components/primitives/reveal";

export function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-48">
      <div className="editorial-container">
        <div className="mb-20">
          <Reveal>
            <span className="font-mono-label text-[10px] text-white/40">04 — Services</span>
          </Reveal>
          <h2 className="mt-4 font-display text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
            <MaskReveal text="What We Make" />
          </h2>
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <ServiceRow key={s.index} service={s} isLast={i === services.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  isLast,
}: {
  service: (typeof services)[number];
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`group border-t border-white/10 ${isLast ? "border-b" : ""}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
        className="flex w-full items-center justify-between gap-6 py-8 sm:py-10"
      >
        <div className="flex items-baseline gap-6 sm:gap-10">
          <span className="font-mono-label text-[10px] text-white/40">{service.index}</span>
          <h3 className="font-display text-[clamp(1.75rem,5vw,4rem)] leading-none tracking-[-0.02em] text-white transition-transform duration-500 ease-editorial group-hover:translate-x-2">
            {service.title}
          </h3>
        </div>
        <span className="hidden max-w-xs text-right text-sm text-white/50 md:block">
          {service.description}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-3 pb-8 pl-[2.75rem] sm:pl-[3.5rem] sm:pb-10">
              {service.capabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 px-4 py-1.5 font-mono-label text-[9px] text-white/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
