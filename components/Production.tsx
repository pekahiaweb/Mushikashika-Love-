"use client";
import Reveal from "./Reveal";

export default function Production() {
  return (
    <section className="py-20 px-6" style={{ background: "#0a1020" }}>
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <div
            className="glass text-center"
            style={{
              padding: "48px 52px",
              border: "1px solid rgba(184,134,11,0.2)",
              borderRadius: 20,
            }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 mb-7 px-5 py-2 rounded-full"
              style={{
                background: "rgba(184,134,11,0.1)",
                border: "1px solid rgba(184,134,11,0.3)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow"
              />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                SSADZA Fund Grant Recipient · Swiss Embassy Zimbabwe
              </span>
            </div>

            <h3
              className="font-poppins font-bold text-cream mb-4"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
            >
              In Active Development
            </h3>
            <p
              className="text-sm leading-relaxed text-muted mx-auto"
              style={{ maxWidth: 520 }}
            >
              MUSHIKASHIKA LOVE is a Zimbabwean co-production supported by the
              Swiss Embassy SSADZA Fund, written and produced by Andrew Pekahia.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
