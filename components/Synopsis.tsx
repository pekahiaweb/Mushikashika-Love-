"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const PULL_QUOTES = [
  "Love makes you do stupid things.",
  "The best tour guide in the city.",
  "My bones will rise again.",
];

export default function Synopsis() {
  return (
    <section
      id="synopsis"
      className="relative py-28 px-6"
      style={{ background: "#050810" }}
    >
      {/* Subtle burgundy glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,26,47,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <Reveal>
          <SectionLabel text="The Story" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-poppins font-extrabold text-cream mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15 }}
          >
            Love is the oldest
            <br />
            <span className="text-gold-light">con in the city.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="glass p-10 md:p-14"
            style={{ borderLeft: "3px solid #b8860b", borderRadius: 20 }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#c8c0b4" }}>
              Lisa Ransburg arrives at Robert Gabriel Mugabe International Airport
              with one name on her lips — Mike. Her online boyfriend of six months.
              He promised her a mining claim in Kadoma. A fresh start after losing
              her family farm in South Africa. She steps into the arrivals hall and
              he simply isn&apos;t there.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#c8c0b4" }}>
              Within an hour she&apos;s robbed. Passport gone. Phone gone. Every dollar
              she carried into Zimbabwe — gone. Stranded in the Avenues at night,
              mistaken for a sex worker in a police raid, she&apos;s rescued by the last
              person she&apos;d expect: Tafa, a scruffy mushikashika taxi driver who&apos;s
              drowning in debt to the very man who destroyed her.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "#c8c0b4" }}>
              Boss Micho — the real Mike Dube — is Harare&apos;s shadow economy made
              flesh. And Tafa&apos;s invented something that might just bring him down: a
              localized tracking app, and a necklace with a hidden micro-chip
              beacon. Together, an unlikely pair must decide whether justice — or
              survival — is worth the risk of love.
            </p>

            {/* Pull quotes */}
            <div
              className="flex flex-col gap-4 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {PULL_QUOTES.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-px bg-gold flex-shrink-0" />
                  <span
                    className="text-sm font-medium italic tracking-wide"
                    style={{ color: "#d4a017" }}
                  >
                    &ldquo;{q}&rdquo;
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
