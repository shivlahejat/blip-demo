"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  visibleItems?: number;
}

export const AnimatedList = ({
  children,
  className,
  delay = 5000,
  visibleItems = 3,
}: AnimatedListProps) => {
  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  const total = childrenArray.length;
  const itemHeight = 80;

  // Render 3 copies: we scroll through the middle copy, then snap back
  const loopItems = [...childrenArray, ...childrenArray, ...childrenArray];

  const controls = useAnimation();
  const currentIndexRef = useRef(0); // absolute index, never resets
  const isSnapping = useRef(false);

  useEffect(() => {
    if (total === 0) return;

    const tick = async () => {
      if (isSnapping.current) return;

      currentIndexRef.current += 1;
      const nextY = -(currentIndexRef.current * itemHeight);

      await controls.start({
        y: nextY,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      // Once we've scrolled through the first copy, snap back to the
      // equivalent position in the middle copy — invisible because items look identical
      if (currentIndexRef.current >= total) {
        isSnapping.current = true;
        currentIndexRef.current -= total;
        await controls.set({ y: -(currentIndexRef.current * itemHeight) });
        isSnapping.current = false;
      }
    };

    const interval = setInterval(tick, delay);
    return () => clearInterval(interval);
  }, [total, delay, controls, itemHeight]);

  return (
    <div
      className={cn("overflow-hidden relative", className)}
      style={{ height: `${visibleItems * itemHeight}px` }}
    >
      <motion.div animate={controls}>
        {loopItems.map((item, i) => (
          <div key={i} className="h-[80px] flex items-center justify-center">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
