"use client";

const SOCIAL_LINKS = ["Instagram", "X (Twitter)", "Facebook", "YouTube"] as const;

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#050810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Harare skyline silhouette SVG */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        style={{ height: 80, opacity: 0.04 }}
      >
        <path
          d="
            M0,120 L0,80 L30,80 L30,50 L50,50 L50,30 L70,30 L70,50 L80,50 L80,20 L90,20 L90,50
            L110,50 L110,60 L130,60 L130,40 L140,40 L140,20 L150,20 L150,10 L160,10 L160,20
            L170,20 L170,40 L190,40 L190,60 L210,60 L210,45 L230,45 L230,25 L240,25 L240,45
            L260,45 L260,55 L280,55 L280,35 L300,35 L300,55 L320,55 L320,50 L340,50 L340,70
            L380,70 L380,40 L390,40 L390,20 L400,20 L400,5 L410,5 L410,20 L420,20 L420,40
            L440,40 L440,70 L480,70 L480,60 L500,60 L500,45 L510,45 L510,30 L520,30 L520,45
            L540,45 L540,65 L570,65 L570,50 L590,50 L590,35 L600,35 L600,50 L620,50 L620,65
            L660,65 L660,75 L700,75 L700,55 L720,55 L720,40 L730,40 L730,25 L740,25 L740,40
            L760,40 L760,55 L780,55 L780,70 L820,70 L820,55 L840,55 L840,40 L850,40 L850,55
            L880,55 L880,65 L920,65 L920,50 L940,50 L940,60 L980,60 L980,70 L1020,70
            L1020,55 L1040,55 L1040,45 L1050,45 L1050,30 L1060,30 L1060,45 L1080,45 L1080,60
            L1120,60 L1120,75 L1160,75 L1160,60 L1180,60 L1180,45 L1190,45 L1190,30 L1200,30
            L1200,45 L1220,45 L1220,60 L1260,60 L1260,70 L1300,70 L1300,80 L1340,80 L1340,70
            L1380,70 L1380,80 L1440,80 L1440,120 Z
          "
          fill="#e8e4dc"
        />
      </svg>

      <div className="relative max-w-5xl mx-auto px-6 py-16 pb-20">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Film title */}
          <div>
            <div
              className="font-poppins font-black tracking-widest text-gradient-gold"
              style={{ fontSize: 28, letterSpacing: "0.12em" }}
            >
              MUSHIKASHIKA LOVE
            </div>
            <div className="text-xs tracking-widest uppercase text-muted mt-1.5">
              A film by Andrew Pekahia · Harare, Zimbabwe
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-6">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs font-medium tracking-widest uppercase text-muted hover:text-gold-light transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-14 h-px" style={{ background: "rgba(184,134,11,0.3)" }} />

          {/* Credits */}
          <div
            className="text-xs leading-relaxed"
            style={{ color: "#444", letterSpacing: "0.12em" }}
          >
            Supported by the Swiss Embassy Zimbabwe · SSADZA Fund
            <br />
            <span style={{ color: "#333" }}>
              © 2026 MUSHIKASHIKA LOVE. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
