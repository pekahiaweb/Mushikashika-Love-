"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  const lenisRef = useRef<{ destroy: () => void; raf: (t: number) => void } | null>(null);

  useEffect(() => {
    let rafId: number;

    (async () => {
      try {
        const { default: Lenis } = await import("lenis");
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        lenisRef.current = lenis as unknown as { destroy: () => void; raf: (t: number) => void };

        function animate(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(animate);
        }
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
