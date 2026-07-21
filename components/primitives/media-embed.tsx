"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import type { Media } from "@/lib/site-content";

type MediaEmbedProps = {
  media: Media;
  className?: string;
  /** Autoplay muted loop (for hero/ambient). Default false — click to play. */
  ambient?: boolean;
  rounded?: string;
};

function instagramEmbed(ref: string) {
  if (ref.startsWith("http")) {
    const url = new URL(ref);
    return `https://www.instagram.com${url.pathname}/embed/captioned/`;
  }
  return `https://www.instagram.com/reel/${ref}/embed/captioned/`;
}

function vimeoEmbed(id: string, autoplay: boolean, loop: boolean) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: "0",
  });
  if (autoplay) {
    params.set("autoplay", "1");
    params.set("muted", "1");
    params.set("background", "1");
  }
  if (loop) params.set("loop", "1");
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

function youtubeEmbed(id: string, autoplay: boolean) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) {
    params.set("autoplay", "1");
    params.set("mute", "1");
    params.set("controls", "0");
    params.set("loop", "1");
    params.set("playlist", id);
  }
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

/**
 * Premium media embed with graceful fallback.
 * Detects media kind and renders the appropriate player.
 * If an embed fails to load, shows a thumbnail + external link.
 */
export function MediaEmbed({ media, className, ambient = false, rounded = "rounded-none" }: MediaEmbedProps) {
  const [status, setStatus] = useState<"idle" | "playing" | "error">("idle");
  const [showFallback, setShowFallback] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Fallback timer — if iframe doesn't signal load in 6s, show fallback
  useEffect(() => {
    if (status !== "playing") return;
    const t = setTimeout(() => setShowFallback(true), 6000);
    return () => clearTimeout(t);
  }, [status]);

  const onLoad = () => {
    // iframe loaded — clear the fallback timer
    setShowFallback(false);
  };

  if (media.kind === "image") {
    return (
      <div className={className}>
        <img
          src={media.ref}
          alt={media.title || ""}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  // Instagram embeds render directly — no click-to-play poster needed
  if (media.kind === "instagram") {
    const igPoster = media.poster;
    return (
      <div className={`relative overflow-hidden ${rounded} ${className ?? ""}`}>
        <div className="absolute inset-0">
          <iframe
            src={instagramEmbed(media.ref)}
            className="h-full w-full"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            title={media.title || "Instagram post"}
            onLoad={onLoad}
            onError={() => setShowFallback(true)}
          />
        </div>
        {showFallback && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card p-6 text-center">
            {igPoster && (
              <img src={igPoster} alt={media.title || ""} className="h-full w-full object-cover opacity-60" loading="lazy" />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <p className="font-mono-label text-[10px] text-white/50">Unable to load embed</p>
              <p className="max-w-md text-sm text-white/70">
                {media.description || media.title || "This media is temporarily unavailable."}
              </p>
              {media.externalUrl && (
                <a
                  href={media.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs text-white transition-colors hover:bg-white/10"
                >
                  View externally <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  const playing = status === "playing" || ambient;

  const poster = media.poster;

  return (
    <div className={`relative overflow-hidden ${rounded} ${className ?? ""}`}>
      {/* Poster / play state */}
      <AnimatePresence>
        {!playing && (
          <motion.button
            type="button"
            aria-label={`Play ${media.title || "video"}`}
            onClick={() => setStatus("playing")}
            className="group absolute inset-0 z-10 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {poster && (
              <img
                src={poster}
                alt={media.title || ""}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/10" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full glass text-white transition-transform duration-500 group-hover:scale-110">
              <Play className="ml-0.5 h-5 w-5" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Embed */}
      {playing && !showFallback && (
        <div className="absolute inset-0">
          <iframe
            ref={iframeRef}
            src={
              media.kind === "vimeo"
                ? vimeoEmbed(media.ref, ambient, ambient)
                : media.kind === "youtube"
                ? youtubeEmbed(media.ref, ambient)
                : ""
            }
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            title={media.title || "Video"}
            onLoad={onLoad}
            onError={() => setShowFallback(true)}
          />
        </div>
      )}

      {/* Fallback */}
      {showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card p-6 text-center">
          {poster && (
            <img
              src={poster}
              alt={media.title || ""}
              className="h-full w-full object-cover opacity-60"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="font-mono-label text-[10px] text-white/50">Unable to load embed</p>
            <p className="max-w-md text-sm text-white/70">
              {media.description || media.title || "This media is temporarily unavailable."}
            </p>
            {media.externalUrl && (
              <a
                href={media.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs text-white transition-colors hover:bg-white/10"
              >
                View externally <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
