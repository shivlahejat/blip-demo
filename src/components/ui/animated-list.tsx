"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";
import {
  ANIMATED_LIST_DELAY_MS,
  ENABLE_ANIMATED_LIST,
  ANIMATED_LIST_TRANSITION_DURATION,
  ANIMATED_LIST_EASING,
} from "@/constants/config";

export interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  visibleItems?: number;
}

export const AnimatedList = ({
  children,
  className,
  delay = ANIMATED_LIST_DELAY_MS,
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
  const hasInitialized = useRef(false);

  useEffect(() => {
    // If animation is disabled in config, do not start the interval
    if (total === 0 || !ENABLE_ANIMATED_LIST) return;

    if (!hasInitialized.current) {
      // Start at the exact middle copy so backwards-dipping easing (like backInOut)
      // doesn't show blank empty space above the first item.
      currentIndexRef.current = total;
      controls.set({ y: -(total * itemHeight) });
      hasInitialized.current = true;
    }

    const tick = async () => {
      if (isSnapping.current) return;

      currentIndexRef.current += 1;
      const nextY = -(currentIndexRef.current * itemHeight);

      await controls.start({
        y: nextY,
        transition: {
          duration: ANIMATED_LIST_TRANSITION_DURATION,
          ease: ANIMATED_LIST_EASING,
        },
      });

      // Once we've scrolled through to the start of the third copy, snap back to the
      // equivalent position in the second copy — invisible because items look identical,
      // and guarantees we always have a full copy of items above and below us.
      if (currentIndexRef.current >= 2 * total) {
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
