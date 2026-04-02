import { useCallback, useLayoutEffect, useRef, useState } from "react";


export function useHeroImageOverflow() {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const [imageOverflow, setImageOverflow] = useState(0);

  const calculateOverflowRef = useRef<() => void>(() => {});
 
  const handleImageRef = useCallback((el: HTMLDivElement | null) => {
    imageWrapperRef.current = el;
  }, []);

  const handleImageLoad = useCallback(() => {
    calculateOverflowRef.current();
  }, []);

  useLayoutEffect(() => {
    const calculateOverflow = () => {
      if (!heroContainerRef.current || !imageWrapperRef.current) return;
      const heroBottom = heroContainerRef.current.getBoundingClientRect().bottom;
      const imageBottom = imageWrapperRef.current.getBoundingClientRect().bottom;
      setImageOverflow(Math.max(0, imageBottom - heroBottom));
    };

    calculateOverflowRef.current = calculateOverflow;

    calculateOverflow();
    window.addEventListener("resize", calculateOverflow);
    return () => window.removeEventListener("resize", calculateOverflow);
  }, []);

  return { heroContainerRef, handleImageRef, handleImageLoad, imageOverflow };
}
