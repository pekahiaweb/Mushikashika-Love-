"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Trailer() {
  return (
    <section id="trailer" className="relative py-28 px-6" style={{ background: "#0a1020" }}>
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <SectionLabel text="Official Trailer" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-poppins font-extrabold text-cream mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Coming to a
            <br />
            <span className="text-gold-light">screen near you.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="glass overflow-hidden relative flex flex-col items-center justify-center"
            style={{ aspectRatio: "16/9", minHeight: 300 }}
          >
            {/* Warehouse dark BG */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(145deg, #0a0a0a 0%, #151010 50%, #0a0a0a 100%)",
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px),
                  repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px)
                `,
              }}
            />

            {/* Pulsing play button */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mb-7"
            >
              <div
                className="flex items-center justify-center text-3xl"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(184,134,11,0.15)",
                  border: "2px solid #b8860b",
                  color: "#b8860b",
                  boxShadow: "0 0 60px rgba(184,134,11,0.3)",
                }}
              >
                ▶
              </div>
            </motion.div>

            <p className="relative z-10 text-xs font-medium tracking-widest uppercase text-muted">
              Trailer Coming Soon
            </p>
            <p className="relative z-10 text-xs mt-2 tracking-widest uppercase" style={{ color: "#444" }}>
              Post-production · 2026
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
