"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "@/lib/lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => 1 - Math.pow(1 - t, 4), // buttery easing

      smoothWheel: true,
      smoothTouch: true,

      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,

      orientation: "vertical",
      gestureOrientation: "vertical",

      autoResize: true,
      overscroll: false,
      anchors: false, // ❗ disable default anchor handling

      syncTouch: true,
    });

    lenisRef.current = lenis;
    setLenis(lenis); // ✅ store globally

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
