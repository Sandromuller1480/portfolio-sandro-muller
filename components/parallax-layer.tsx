"use client";

import { useEffect, useRef } from "react";

export function ParallaxLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let visible = false;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) update();
    });

    const update = () => {
      if (!visible || frame) return;
      frame = window.requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - rect.top) / window.innerHeight));
        element.style.setProperty("--parallax-y", `${progress * 42}px`);
        frame = 0;
      });
    };

    observer.observe(element);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ transform: "translate3d(0, var(--parallax-y, 0px), 0)" }}
    >
      <div className="absolute left-[8%] top-16 h-56 w-px bg-[#C6A66B]/35" />
      <div className="absolute right-[10%] top-28 h-72 w-72 border border-[#F4F0E8]/10" />
    </div>
  );
}
