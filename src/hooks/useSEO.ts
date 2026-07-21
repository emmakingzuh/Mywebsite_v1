import { useEffect } from "react";

/**
 * useSEO — updates document title and meta description for a given context.
 * Restores defaults on unmount.
 */
const DEFAULT_TITLE = "Emmykingz Studios — Premium Creative Production";
const DEFAULT_DESC =
  "Emmykingz Studios — a premium creative studio crafting cinematic visual stories, brand films, and immersive digital experiences.";

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOG(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO(title?: string, description?: string, image?: string) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setOG("og:title", title);
    }
    if (description) {
      setMeta("description", description);
      setOG("og:description", description);
    }
    if (image) {
      setOG("og:image", image);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta("description", DEFAULT_DESC);
      setOG("og:title", DEFAULT_TITLE);
      setOG("og:description", DEFAULT_DESC);
    };
  }, [title, description, image]);
}
