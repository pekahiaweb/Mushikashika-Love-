"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { QUOTES } from "@/lib/data";

export default function Press() {
  return (
    <section id="press" className="py-28 px-6" style={{ background: "#0a1020" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionLabel text="Voice of the Film" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-poppins font-extrabold text-cream mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Words from
            <br />
            <span className="text-gold-light">Harare&apos;s streets.</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(184,134,11,0.2)" }}
                className="glass flex flex-col justify-between"
                style={{
                  padding: "36px 32px",
                  gridColumn: q.large ? "span 2" : "span 1",
                  borderBottom: "2px solid #b8860b",
                  borderRadius: 20,
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    fontSize: 40,
                    color: "rgba(184,134,11,0.3)",
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  className="font-poppins italic text-cream mb-5"
                  style={{
                    fontWeight: q.large ? 700 : 500,
                    fontSize: q.large ? "clamp(18px, 2.5vw, 28px)" : "clamp(14px, 1.5vw, 18px)",
                    lineHeight: 1.5,
                  }}
                >
                  {q.text}
                </p>
                <span className="text-xs tracking-wide text-gold">{q.attr}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
