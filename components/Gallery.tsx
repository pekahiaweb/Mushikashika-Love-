"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { SCENES } from "@/lib/data";

function SceneCard({ scene, index }: { scene: typeof SCENES[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden"
        style={{
          borderRadius: 16,
          gridRow: scene.tall ? "span 2" : "span 1",
          cursor: "pointer",
          minHeight: scene.tall ? 360 : 180,
        }}
      >
        {/* Scene colour wash */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(145deg, ${scene.color}33 0%, #050810 80%)`,
            borderBottom: `3px solid ${scene.color}`,
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Placeholder play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex items-center justify-center text-2xl"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: `${scene.color}22`,
              border: `1px solid ${scene.color}44`,
              color: scene.color,
            }}
          >
            ▶
          </div>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex flex-col justify-end p-5"
              style={{
                background:
                  "linear-gradient(0deg, rgba(5,8,16,0.96) 0%, rgba(5,8,16,0.7) 50%, transparent 100%)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                style={{ color: scene.color }}
              >
                {scene.scene}
              </span>
              <h4 className="font-poppins font-bold text-lg text-cream mb-2">{scene.title}</h4>
              <p className="text-xs leading-relaxed text-muted">{scene.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Default title */}
        {!hovered && (
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{
              background: "linear-gradient(0deg, rgba(5,8,16,0.9) 0%, transparent 100%)",
            }}
          >
            <span className="text-xs font-semibold text-cream">{scene.title}</span>
          </div>
        )}
      </motion.div>
    </Reveal>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6" style={{ background: "#050810" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel text="Key Scenes" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-poppins font-extrabold text-cream mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            The city in
            <br />
            <span className="text-gold-light">eight frames.</span>
          </h2>
        </Reveal>
        <div
          className="gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gridAutoRows: "200px",
            gap: 16,
          }}
        >
          {SCENES.map((s, i) => (
            <SceneCard key={s.id} scene={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
