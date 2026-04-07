"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "@/lib/lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // ↓ shorter = more responsive on mobile
      easing: (t: number) => 1 - Math.pow(1 - t, 3),

      smoothWheel: true,

      // ❗ MOBILE FIXES
      smoothTouch: false, // 🔥 important
      syncTouch: false, // 🔥 important

      wheelMultiplier: 1,
      touchMultiplier: 1,

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
