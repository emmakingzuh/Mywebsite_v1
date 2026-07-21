"use client";

import { useEffect, useState } from "react";
import { AmbientBackground } from "@/components/experience/ambient-background";
import { CustomCursor } from "@/components/experience/custom-cursor";
import { ScrollProgress } from "@/components/experience/scroll-progress";
import { SmoothScrollProvider } from "@/components/experience/smooth-scroll";
import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Showreel } from "@/components/sections/showreel";
import { Work } from "@/components/sections/work";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { projects, studio } from "@/lib/site-content";

const basePalette: [string, string, string] = ["#ff7a45", "#ff3d7f", "#7c3aed"];

export default function Page() {
  const [palette, setPalette] = useState<[string, string, string]>(basePalette);

  // Ambient palette inherits from the section in view
  useEffect(() => {
    const sections: { id: string; palette: [string, string, string] }[] = [
      { id: "top", palette: basePalette },
      ...projects.map((p) => ({ id: `work-${p.id}`, palette: p.palette })),
      { id: "reel", palette: ["#22d3ee", "#0ea5e9", "#6366f1"] },
      { id: "services", palette: ["#f59e0b", "#d97706", "#92400e"] },
      { id: "about", palette: ["#34d399", "#10b981", "#0d9488"] },
      { id: "contact", palette: ["#ff7a45", "#ff3d7f", "#7c3aed"] },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const found = sections.find((s) => entry.target.id === s.id);
            if (found) setPalette(found.palette);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    // Observe sections + project rows
    sections.forEach((s) => {
      const el =
        s.id.startsWith("work-")
          ? document.querySelector(`[data-project="${s.id.replace("work-", "")}"]`)
          : document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SmoothScrollProvider>
      <AmbientBackground palette={palette} />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main className="relative">
        <Hero />
        <Showreel />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
