"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

// City light particle counts
const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: 50 + Math.random() * 50,
  size: Math.random() > 0.8 ? 3 : 1,
  color: Math.random() > 0.6 ? "#d4a017" : Math.random() > 0.5 ? "#00e5ff" : "#ffffff",
  duration: 1.5 + Math.random() * 3,
  delay: Math.random() * 4,
}));

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100vh", minHeight: 700 }}
    >
      {/* ── Animated background ── */}
      <motion.div
        style={{ y: bgY, position: "absolute", inset: 0 }}
      >
        {/* Base night sky gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,26,47,0.35) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 20% 60%, rgba(184,134,11,0.15) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 80% 30%, rgba(0,229,255,0.06) 0%, transparent 50%),
              linear-gradient(180deg, #020408 0%, #050810 40%, #0a1020 100%)
            `,
          }}
        />

        {/* City light scatter */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
            }}
          />
        ))}

        {/* Street-level red glow */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "45%",
            background: "linear-gradient(0deg, rgba(139,26,47,0.18) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(5,8,16,0.8) 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 text-center px-6"
      >
        {/* Location eyebrow */}
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              Harare, Zimbabwe · 2026
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
        </Reveal>

        {/* MUSHIKASHIKA */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-poppins font-black leading-none text-cream"
            style={{
              fontSize: "clamp(32px, 7vw, 96px)",
              letterSpacing: "0.08em",
              textShadow: "0 0 80px rgba(184,134,11,0.3)",
            }}
          >
            MUSHIKASHIKA
          </motion.h1>
        </div>

        {/* LOVE — gold gradient */}
        <div className="overflow-hidden mb-9">
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-poppins font-black leading-none text-gradient-gold"
            style={{
              fontSize: "clamp(48px, 11vw, 144px)",
              letterSpacing: "0.12em",
              filter: "drop-shadow(0 0 40px rgba(184,134,11,0.5))",
            }}
          >
            LOVE
          </motion.div>
        </div>

        {/* Tagline */}
        <Reveal delay={0.8}>
          <p
            className="uppercase tracking-widest text-muted mb-12"
            style={{ fontSize: "clamp(11px, 1.6vw, 15px)", letterSpacing: "0.18em" }}
          >
            Harare has teeth. But it also has a heart.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={1.0}>
          <a href="#synopsis">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(184,134,11,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="font-poppins font-semibold uppercase tracking-widest text-gold-light"
              style={{
                fontSize: 13,
                letterSpacing: "0.2em",
                padding: "16px 48px",
                border: "1px solid #b8860b",
                background: "rgba(184,134,11,0.12)",
                backdropFilter: "blur(12px)",
                borderRadius: 50,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Enter Harare
            </motion.button>
          </a>
        </Reveal>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(180deg, transparent, #b8860b)" }}
        />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      </motion.div>

      {/* Film info strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex justify-between items-end px-6 md:px-10 pb-5"
        style={{
          background: "linear-gradient(0deg, rgba(5,8,16,0.9) 0%, transparent 100%)",
        }}
      >
        <span className="text-xs tracking-widest uppercase text-muted hidden sm:block">
          Written by Andrew Pekahia
        </span>
        <span className="text-xs tracking-widest uppercase text-muted hidden sm:block">
          Romantic Thriller / Crime Drama
        </span>
      </div>
    </section>
  );
}
