// ── Film Data ─────────────────────────────────────────────────────────────────
import { colors } from "./tokens";

export const CAST = [
  {
    name: 'Lisa Ransburg',
    role: 'Protagonist',
    desc: 'A South African woman who lost her family farm and everything to a mining scam. Stranded in Harare with no passport, no money — and no choice but to fight back.',
    icon: '◈',
    accent: colors.burgundy,
    detail: 'Mid-20s · South African · Red mini skirt',
  },
  {
    name: 'Tafadzwa "Tafa"',
    role: 'The Driver',
    desc: 'Scruffy, charming, drowning in debt. An aspiring tech inventor who built the WE MOVE app and a necklace with a tracking micro-chip. The city\'s most unlikely hero.',
    icon: '◉',
    accent: colors.earth,
    detail: 'Early 30s · Harare · Toyota Wish',
  },
  {
    name: 'Boss Micho',
    role: 'Antagonist',
    desc: "Harare's shadow economy in human form. Bald, colorful suits, leather gloves. Runs romance scams across borders and owns the streets through fear and debt.",
    icon: '◆',
    accent: colors.wine,
    detail: '40s · Crime Boss · Mike Dube',
  },
  {
    name: 'Shamiso',
    role: 'The Informant',
    desc: "Tafa's casual lover. Beautiful, calculating — and willing to trade his secrets for her own safety when Boss Micho comes calling.",
    icon: '◇',
    accent: colors.gold,
    detail: 'Mid-20s · Curvy · Complicated',
  },
  {
    name: 'Mai Tino',
    role: 'The Landlady',
    desc: 'Big-bodied, powerful, and absolutely terrifying with a broom. Soils herself in fear only when Boss Micho himself arrives at the cottage door.',
    icon: '◈',
    accent: colors.amber,
    detail: '40s · Powerful · Broom-wielding',
  },
  {
    name: 'Sergeant Chauke',
    role: 'The Law',
    desc: 'Tired and cynical. Seen everything Harare has to offer. Until Tafa hands him a GPS coordinate and the exact location of the city\'s most wanted crime boss.',
    icon: '◉',
    accent: colors.cyanDim,
    detail: '40s · ZRP · Reluctant hero',
  },
  {
    name: 'Dred',
    role: 'The Tout',
    desc: "Loud, dreadlocked, always on the street corner. Tafa's taxi tout and early-warning system for police operations. Pure Harare energy.",
    icon: '◇',
    accent: colors.earth,
    detail: 'Early 20s · Dreadlocks · Loud',
  },
] as const;

export const SCENES = [
  {
    id: 'arrivals',
    title: 'Arrivals',
    scene: 'RGM International Airport',
    desc: 'Lisa steps off the plane into glossy tiles and a city that doesn\'t know her name yet.',
    color: colors.cyan,
    tall: true,
  },
  {
    id: 'avenues',
    title: 'The Avenues',
    scene: 'Harare CBD, Night',
    desc: 'Neon bleeds into puddles. Police boots on wet asphalt. A woman in a red skirt who doesn\'t belong.',
    color: colors.burgundy,
    tall: false,
  },
  {
    id: 'cottage',
    title: 'The Cottage',
    scene: "Tafa's One-Room",
    desc: 'A 32" TV. Hand-drawn WE MOVE poster. The smell of yesterday\'s sadza. This is headquarters.',
    color: colors.earth,
    tall: false,
  },
  {
    id: 'raid',
    title: 'The Raid',
    scene: 'Avenues at 2AM',
    desc: 'Blue lights. Running feet. The city culling itself in the dark.',
    color: colors.wine,
    tall: true,
  },
  {
    id: 'warehouse',
    title: 'Warehouse',
    scene: 'Graniteside Industrial',
    desc: "Cracked walls. Dim light. Boss Micho's screwdriver catching what little there is.",
    color: '#333333',
    tall: false,
  },
  {
    id: 'mbare',
    title: 'Mbare Braai',
    scene: 'Mbare, Sunday',
    desc: 'Smoke and Zimdancehall. Sadza with your hands. This is the real Harare.',
    color: colors.amber,
    tall: false,
  },
  {
    id: 'nehanda',
    title: 'Mbuya Nehanda',
    scene: 'Harare CBD, Golden Hour',
    desc: '"My bones will rise again." The statue catches fire in afternoon light.',
    color: colors.gold,
    tall: true,
  },
  {
    id: 'chase',
    title: 'The Chase',
    scene: 'Harare CBD Alleyways',
    desc: "Tafa's silver pen in his pocket. The necklace transmitting. Police converging.",
    color: colors.cyanDim,
    tall: false,
  },
] as const;

export const LOCATIONS = [
  { name: 'RGM International Airport', label: 'Arrivals Hall', desc: 'Glossy tiles. Rolling suitcases. The last moment of hope before Harare shows its teeth.', color: colors.cyan },
  { name: 'The Avenues', label: 'Harare CBD · Night', desc: 'Street lights and shadows. A neighbourhood that means different things after dark.', color: colors.burgundy },
  { name: "Tafa's Cottage", label: 'High-Density Suburbs', desc: 'One room. 32" TV. A WE MOVE poster on the wall. The headquarters of an unlikely revolution.', color: colors.earth },
  { name: 'Mbare', label: 'South Harare', desc: "Braai smoke at sunset. Zimdancehall from every speaker. The city's beating, beautiful heart.", color: colors.amber },
  { name: 'Mbuya Nehanda Statue', label: 'Harare CBD', desc: '"My bones will rise again." Golden hour falls on bronze. The spirit of resistance, still standing.', color: colors.gold },
  { name: 'Graniteside Warehouse', label: 'Industrial Area', desc: "Cracked walls. Dim fluorescent light. Boss Micho's last stand. The endgame.", color: colors.wine },
  { name: '263 Guest House', label: 'Avenues', desc: 'Peeling paint. A single bed. Where Lisa learns that survival isn\'t the same as living.', color: colors.muted },
  { name: 'Harare CBD Alleyways', label: 'The Chase', desc: 'Neon bleeds on wet asphalt. Every shadow could be an exit — or a dead end.', color: colors.cyanDim },
] as const;

export const QUOTES = [
  { text: 'Harare has teeth. But it also has a heart.', attr: '— Tagline', large: true },
  { text: 'Love makes you do stupid things.', attr: '— Tagline', large: false },
  { text: 'The best tour guide in the city.', attr: '— Tagline', large: false },
  { text: 'My bones will rise again.', attr: '— Mbuya Nehanda, 1898 · Echoed in the film', large: false },
  { text: 'Tinouraya huku.', attr: '— Harare proverb · We prepare chicken for guests.', large: false },
  { text: 'A Zimbabwean story with a heartbeat loud enough to be heard across the continent.', attr: '— Development Notes', large: false },
] as const;
