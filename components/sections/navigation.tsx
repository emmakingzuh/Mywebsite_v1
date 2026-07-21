"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { studio, nav } from "@/lib/site-content";
import { Magnetic } from "@/components/primitives/magnetic";
import { useSmoothScroll } from "@/components/experience/smooth-scroll";

export function Navigation() {
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    scrollTo(href, { offset: -20 });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? "border-b border-white/5 bg-black/30 backdrop-blur-xl" : ""
          }`}
        >
          <nav className="editorial-container flex h-16 items-center justify-between sm:h-20">
            <button
              onClick={() => scrollTo(0)}
              className="font-mono-label text-[11px] tracking-[0.25em] text-white/90"
              aria-label="Back to top"
            >
              {studio.shortName}
              <span className="text-white/40"> STUDIOS</span>
            </button>

            <div className="hidden items-center gap-10 md:flex">
              {nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="group relative font-mono-label text-[10px] text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-500 ease-editorial group-hover:w-full" />
                </button>
              ))}
            </div>

            <Magnetic
              as="button"
              onClick={() => go("#contact")}
              className="hidden font-mono-label text-[10px] text-white/80 md:block"
              aria-label="Start a project"
            >
              <span className="rounded-full border border-white/15 px-5 py-2.5 transition-colors duration-500 hover:border-white/40 hover:bg-white/5">
                Start a Project
              </span>
            </Magnetic>

            <button
              className="text-white/80 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {nav.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  onClick={() => go(item.href)}
                  className="font-display text-4xl text-white/80"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
