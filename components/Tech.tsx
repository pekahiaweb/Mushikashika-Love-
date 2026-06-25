"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const TECH_ITEMS = [
  {
    icon: "⊛",
    title: "WE MOVE",
    subtitle: "LOCALIZED TELEMETRY APP",
    desc: "Tafa's hand-built tracking system. Designed to navigate Harare's informal economy, repurposed to trap a crime boss. A WE MOVE poster on his cottage wall. A silver pen as the activator.",
    color: "#00e5ff",
    borderColor: "rgba(0,229,255,0.2)",
    bgColor: "rgba(0,229,255,0.1)",
    features: [
      "Real-time GPS tracking",
      "Localized mesh signal",
      "Panic button integration",
      "Off-grid operation",
    ],
  },
  {
    icon: "◉",
    title: "The Necklace",
    subtitle: "MICRO-CHIP TRACKING BEACON",
    desc: "Lisa's gold necklace, modified. Inside the pendant: a tracking chip so small Boss Micho searches her three times and never finds it. The bait. The trap. The signal that ends everything.",
    color: "#d4a017",
    borderColor: "rgba(184,134,11,0.2)",
    bgColor: "rgba(184,134,11,0.1)",
    features: [
      "Gold plating concealment",
      "72-hour battery life",
      "Paired to WE MOVE",
      "Signal: activated by silver pen",
    ],
  },
  {
    icon: "⊙",
    title: "Mushikashika",
    subtitle: "HARARE'S INFORMAL TAXI ECONOMY",
    desc: "Unregistered. Unlicensed. Indispensable. Tafa's Toyota Wish navigates a city that was never built for people like him — and that's exactly what makes him the perfect guide.",
    color: "#8b6b4a",
    borderColor: "rgba(139,107,74,0.2)",
    bgColor: "rgba(139,107,74,0.12)",
    features: [
      "Toyota Wish · Dusty, dented",
      "Routes the GPS doesn't know",
      "No meter. Negotiated fare.",
      '"Mutsvairo! Cobra Cobra!"',
    ],
  },
] as const;

export default function Tech() {
  return (
    <section
      id="tech"
      className="relative py-28 px-6"
      style={{ background: "#050810" }}
    >
      {/* Cyan ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(0,229,255,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel text="Innovation in the Story" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-poppins font-extrabold text-cream mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Low-tech city.
            <br />
            <span style={{ color: "#00e5ff" }}>High-tech heart.</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {TECH_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={0.15 + i * 0.1}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 40px ${item.bgColor}`,
                }}
                className="glass"
                style={{
                  padding: "40px 36px",
                  border: `1px solid ${item.borderColor}`,
                  borderRadius: 20,
                  height: "100%",
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center text-2xl mb-6"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: item.bgColor,
                    border: `1px solid ${item.borderColor}`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="font-poppins font-bold mb-2"
                  style={{ fontSize: 20, color: item.color }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "#9a9080" }}
                >
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#9a9080" }}>
                  {item.desc}
                </p>

                {/* Feature list */}
                <div className="flex flex-col gap-1.5">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: item.color }}
                      />
                      <span className="text-xs text-muted">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
