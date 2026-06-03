import { useEffect } from "react";

const SITE_NAME = "Tilz Group";
const BASE_URL = "https://tilzgroup.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_TITLE = "Tilz Group – Commerce Infrastructure for Brands Built to Scale";
const DEFAULT_DESCRIPTION =
  "Tilz Group delivers end-to-end commerce capability — marketplace consulting, UK 3PL logistics, and digital B2B trade — for manufacturers and brands ready to grow globally.";

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
  path?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  author?: string;
}

function setMeta(selector: string, content: string, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${selector}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, selector);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link") as HTMLLinkElement;
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSeoMeta({
  title,
  description,
  ogImage,
  path,
  type = "website",
  noIndex = false,
  publishedTime,
  author,
}: SeoMeta) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonical = path ? `${BASE_URL}${path}` : BASE_URL;
    const image = ogImage ?? DEFAULT_OG_IMAGE;

    document.title = fullTitle;

    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow");

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", image, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:image:alt", `${title} – ${SITE_NAME}`, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_GB", "property");

    if (type === "article" && publishedTime) {
      setMeta("article:published_time", publishedTime, "property");
    }
    if (type === "article" && author) {
      setMeta("article:author", author, "property");
    }

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setMeta("twitter:image:alt", `${title} – ${SITE_NAME}`);
    setMeta("twitter:site", "@tilzgroup");

    setCanonical(canonical);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, ogImage, path, type, noIndex, publishedTime, author]);
}
