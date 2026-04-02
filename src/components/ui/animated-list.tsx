"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
  maxItems?: number;
}

export const AnimatedList = React.memo(
  ({
    children,
    className,
    delay = 1500,
    maxItems = 4,
    ...props
  }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);

    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(() => {
      return childrenArray
        .slice(0, index + 1)
        .slice(-maxItems)
        .reverse();
    }, [index, childrenArray, maxItems]);

    return (
      <div
        className={cn("relative flex items-center justify-center", className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item, i) => {
            const offset = i * -14;
            const scale = 1 - i * 0.06;
            const opacity = 1 - i * 0.2;

            return (
              <motion.div
                layout
                key={(item as React.ReactElement).key}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{
                  opacity,
                  y: offset + 20,
                  scale,
                  zIndex: 100 - i,
                }}
                exit={{ opacity: 0, y: 40, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                className="absolute w-full"
                style={{
                  filter: i > 1 ? "blur(3px)" : "blur(0px)",
                }}
              >
                {item}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";
