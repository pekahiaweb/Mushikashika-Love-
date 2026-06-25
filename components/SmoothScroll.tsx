"use client";
import { useEffect, useRef } from "react";

interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    let rafId: number;

    (async () => {
      try {
        const { default: Lenis } = await import("lenis");
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        lenisRef.current = lenis as unknown as LenisInstance;

        const animate = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);
      } catch {
        // Lenis unavailable — native scroll handles it gracefully
      }
    })();

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
