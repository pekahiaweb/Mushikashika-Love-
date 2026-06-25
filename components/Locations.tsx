"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { LOCATIONS } from "@/lib/data";

export default function Locations() {
  return (
    <section id="locations" className="py-28 px-6" style={{ background: "#050810" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel text="Harare Locations" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-poppins font-extrabold text-cream mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            The city is
            <br />
            <span className="text-gold-light">the co-star.</span>
          </h2>
        </Reveal>

        <div
          className="gap-5"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}
        >
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 0.07}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 28px ${loc.color}33`,
                }}
                className="glass h-full"
                style={{
                  padding: "28px 24px",
                  borderLeft: `3px solid ${loc.color}`,
                  borderRadius: 20,
                }}
              >
                <span
                  className="block mb-2 font-semibold uppercase tracking-widest"
                  style={{ fontSize: 9, color: loc.color }}
                >
                  {loc.label}
                </span>
                <h3
                  className="font-poppins font-bold text-cream mb-3"
                  style={{ fontSize: 16, lineHeight: 1.3 }}
                >
                  {loc.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{loc.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
