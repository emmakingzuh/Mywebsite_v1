import { useState } from "react";
import type { Platform } from "../data/projects";

interface VideoEmbedProps {
  platform: Platform;
  embedId: string;
  thumbnail: string;
  title: string;
  url: string;
  rounded?: string;
}

/**
 * VideoEmbed — click-to-play hero thumbnail that swaps in the native
 * YouTube/Vimeo/Instagram embed on first interaction. No autoplay.
 */
export default function VideoEmbed({
  platform,
  embedId,
  thumbnail,
  title,
  url,
  rounded = "rounded-2xl",
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const embedSrc = () => {
    if (platform === "youtube") {
      const isShort = url.includes("shorts");
      return `https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${isShort ? "" : ""}`;
    }
    if (platform === "vimeo") {
      return `https://player.vimeo.com/video/${embedId}?autoplay=1&title=0&byline=0&portrait=0`;
    }
    return null;
  };

  // Instagram: no reliable embed; show cover + link
  if (platform === "instagram") {
    return (
      <div className={`group relative overflow-hidden ${rounded} border border-white/10 bg-white/[0.03]`}>
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md">
            Instagram Reel
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on Instagram
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  if (playing) {
    return (
      <div className={`relative aspect-video overflow-hidden ${rounded} border border-white/10 bg-black`}>
        <iframe
          src={embedSrc()!}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`group relative aspect-video w-full overflow-hidden ${rounded} border border-white/10 bg-black`}
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          // YouTube fallback to hqdefault if maxres missing
          const img = e.currentTarget;
          if (platform === "youtube" && !img.src.includes("hqdefault")) {
            img.src = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 transition-opacity duration-500 group-hover:from-black/60" />

      {/* Ambient edge glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14), inset 0 0 50px rgba(123,77,255,0.15)" }}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-black/30">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/5" />
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>

      {/* Title bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
            {platform === "youtube" ? "YouTube" : "Vimeo"}
          </div>
          <div className="mt-1 max-w-md truncate font-display text-lg font-semibold text-white">{title}</div>
        </div>
      </div>
    </button>
  );
}
