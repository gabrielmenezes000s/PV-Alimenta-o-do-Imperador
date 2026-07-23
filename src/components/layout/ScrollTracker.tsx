"use client";

import { useEffect, useRef } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

const THRESHOLDS: { pct: number; event: AnalyticsEvent }[] = [
  { pct: 25, event: "scroll_25" },
  { pct: 50, event: "scroll_50" },
  { pct: 75, event: "scroll_75" },
  { pct: 90, event: "scroll_90" },
];

// Dispara page_view uma vez e os eventos scroll_25/50/75/90 conforme o usuário avança na página.
export function ScrollTracker() {
  const fired = useRef(new Set<number>());

  useEffect(() => {
    trackEvent("page_view");

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (scrollTop / docHeight) * 100;

      for (const { pct: threshold, event } of THRESHOLDS) {
        if (pct >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          trackEvent(event);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
