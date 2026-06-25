// ── Design Tokens ─────────────────────────────────────────────────────────────
import type { CSSProperties } from "react";

export const colors = {
  midnight:  "#050810",
  deepBlue:  "#0a1020",
  navyGlass: "rgba(5,8,16,0.75)",
  burgundy:  "#8b1a2f",
  wine:      "#6b0f1e",
  gold:      "#b8860b",
  goldLight: "#d4a017",
  goldPale:  "#f0c040",
  amber:     "#c8902e",
  cyan:      "#00e5ff",
  cyanDim:   "#00b8cc",
  earth:     "#8b6b4a",
  cream:     "#e8e4dc",
  muted:     "#9a9080",
  glass:     "rgba(255,255,255,0.04)",
  glassBd:   "rgba(255,255,255,0.10)",
  goldGlass: "rgba(184,134,11,0.12)",
} as const;

export type ColorKey = keyof typeof colors;

export const glassStyle = (extra: CSSProperties = {}): CSSProperties => ({
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 20,
  ...extra,
});
