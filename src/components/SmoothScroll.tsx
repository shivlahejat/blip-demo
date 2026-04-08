"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "@/lib/lenis";
import { ENABLE_SMOOTH_SCROLLING, SMOOTH_SCROLL_CONFIG } from "@/constants/config";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // If smooth scrolling is disabled in config, do not initialize Lenis
    if (!ENABLE_SMOOTH_SCROLLING) return;

    const lenis = new Lenis({
      duration: SMOOTH_SCROLL_CONFIG.duration,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),

      smoothWheel: SMOOTH_SCROLL_CONFIG.smoothWheel,

      // ❗ MOBILE FIXES
      smoothTouch: SMOOTH_SCROLL_CONFIG.smoothTouch,
      syncTouch: false, // keep false usually

      wheelMultiplier: SMOOTH_SCROLL_CONFIG.wheelMultiplier,
      touchMultiplier: SMOOTH_SCROLL_CONFIG.touchMultiplier,

      orientation: "vertical",
      gestureOrientation: "vertical",

      autoResize: true,
      overscroll: true, // allow natural bounce on mobile
    });

    setLenis(lenis);

    // ✅ cleaner RAF (no manual ref needed)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
