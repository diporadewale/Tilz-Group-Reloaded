import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
      ? `${title} | Tilz Group`
      : "Tilz Group – Commerce Infrastructure for Brands Built to Scale";
    return () => {
      document.title = "Tilz Group – Commerce Infrastructure for Brands Built to Scale";
    };
  }, [title]);
}
