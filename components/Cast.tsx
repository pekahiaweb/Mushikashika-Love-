"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { CAST } from "@/lib/data";

function CastCard({ char, index }: { char: typeof CAST[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: hovered ? 1.03 : 1,
          borderColor: hovered ? char.accent : "rgba(255,255,255,0.10)",
          boxShadow: hovered ? `0 0 32px ${char.accent}44` : "none",
        }}
        transition={{ duration: 0.25 }}
        className="glass flex flex-col gap-3 h-full"
        style={{ padding: "32px 28px", border: "1px solid rgba(255,255,255,0.10)", cursor: "default" }}
      >
        <div className="flex justify-between items-start">
          <span style={{ fontSize: 28, color: char.accent }}>{char.icon}</span>
          <span
            className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{ color: char.accent, background: `${char.accent}22`, fontSize: 9 }}
          >
            {char.role}
          </span>
        </div>

        <div>
          <h3
            className="font-poppins font-bold text-cream mb-1"
            style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
          >
            {char.name}
          </h3>
          <p className="text-xs tracking-wide" style={{ color: "#9a9080" }}>
            {char.detail}
          </p>
        </div>

        <p className="text-sm leading-relaxed flex-grow" style={{ color: "#9a9080" }}>
          {char.desc}
        </p>

        <div
          className="flex items-center gap-2 pt-2 mt-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
          <span className="text-xs tracking-wide" style={{ color: "#555" }}>
            Actor · Coming Soon
          </span>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Cast() {
  return (
    <section id="cast" className="py-28 px-6" style={{ background: "#0a1020" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel text="Characters" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-poppins font-extrabold text-cream mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Everyone in this city
            <br />
            <span className="text-gold-light">has something to hide.</span>
          </h2>
        </Reveal>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {CAST.map((c, i) => (
            <CastCard key={c.name} char={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
