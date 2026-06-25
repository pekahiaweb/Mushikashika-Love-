"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

// Lenis smooth scroll wrapper — degrades gracefully if Lenis fails to import
export default function SmoothScroll({ children }: Props) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let raf: number;

    (async () => {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        lenisRef.current = lenis;

        function animate(time: number) {
          (lenis as { raf: (t: number) => void }).raf(time);
          raf = requestAnimationFrame(animate);
        }
        raf = requestAnimationFrame(animate);
      } catch {
        // Lenis unavailable — native scroll handles it
      }
    })();

    return () => {
      cancelAnimationFrame(raf);
      if (lenisRef.current) {
        (lenisRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
