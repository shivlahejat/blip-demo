"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // 🔥 higher = faster response (key for speed)

      smoothWheel: true,
      smoothTouch: true,

      wheelMultiplier: 1.2, // 🔥 faster wheel scroll
      touchMultiplier: 1.3, // 🔥 better mobile feel

      orientation: "vertical",
      gestureOrientation: "vertical",

      autoResize: true,
      autoRaf: true,

      overscroll: true,
      anchors: true,

      allowNestedScroll: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
