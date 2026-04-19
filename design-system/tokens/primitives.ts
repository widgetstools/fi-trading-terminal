// ─────────────────────────────────────────────────────────────
//  FI Design System — Primitive Tokens
//  Ferrari Luce-inspired palette. Raw values only — no semantic roles.
//
//  Palette direction:
//    - Monochromatic luxury chrome: near-black surfaces + platinum/
//      silver accents, with Rosso Corsa red reserved for critical
//      moments.
//    - In a trading terminal, red is a sell/loss signal, so we assign
//      platinum as the BRAND accent (replacing Luce's usual red brand
//      role) and keep Ferrari red for the `negative` semantic only.
//    - Racing green for positive. Vivid orange for warning. No yellow.
// ─────────────────────────────────────────────────────────────

export const colors = {
  // Jet-black-leaning charcoal. Deeper than the previous palette to
  // give the chrome a more cinematic, high-contrast Luce feel.
  charcoal: {
    0:   '#ffffff',
    50:  '#fafafa',  // light theme ground
    100: '#f2f2f2',  // light hover
    150: '#e5e5e5',  // light pressed / border primary
    200: '#e2e2e2',
    300: '#cccccc',  // light border secondary
    400: '#a0a0a0',  // light faint text
    500: '#7a7a7a',  // muted text (both themes)
    600: '#6f6f6f',
    650: '#4f4f4f',  // light secondary text
    700: '#4a4a4a',  // dark faint text
    800: '#353535',  // dark border secondary
    850: '#2a2a2a',  // dark tertiary surface
    900: '#252525',  // dark border primary
    925: '#1e1e1e',  // dark secondary surface
    950: '#141414',  // dark primary surface (card)
    975: '#0a0a0a',  // dark ground (near-black)
  },
  // Platinum / silver — BRAND accent. Premium metallic chrome, the
  // signature Luce luxury cue.
  platinum: {
    50:  '#f6f7f9',
    100: '#e8eaee',
    200: '#e1e4ea',  // dark highlight / infoHover
    300: '#c9cdd4',  // dark brand (primary)
    400: '#9ba0ac',
    500: '#6a717e',
    600: '#5a6370',  // light highlight
    700: '#4f5661',  // light brand
    800: '#34383f',  // light brand hover
    900: '#22252a',
  },
  // Racing green — positive / buy / gain.
  green: {
    50:  '#e6f7f0',
    100: '#b9e9d5',
    200: '#82d7b3',
    300: '#3fc28a',
    400: '#00a676',  // dark positive
    500: '#008a61',  // dark hover / buy bg
    600: '#007f5c',  // light positive
    700: '#006046',  // light hover
    800: '#004832',
    900: '#002f20',
  },
  // Rosso Corsa — the iconic Ferrari red. Reserved for negative /
  // sell / loss only. Never used as brand in this trading variant.
  red: {
    50:  '#ffe7ea',
    100: '#ffbfc7',
    200: '#ff8c9a',
    300: '#fa5869',
    400: '#e32636',  // dark negative (Rosso Corsa)
    500: '#c01020',  // dark hover / sell bg
    600: '#c8102e',  // light negative (Ferrari GT light-variant)
    700: '#9e0821',  // light hover
    800: '#7a0218',
    900: '#5a0010',
  },
  // Vivid orange — warning only. Pure orange, never brown, never yellow.
  orange: {
    300: '#ffb58e',
    400: '#ff8d5e',
    500: '#ff6b35',  // dark warning
    600: '#d15427',  // light warning
    700: '#a63f18',
  },
  // Cold editorial blue — info semantic (secondary to brand platinum).
  blue: {
    300: '#7fa6e5',
    400: '#5d85d0',
    500: '#3e6fd6',  // dark info
    600: '#2c4da3',  // light info
    700: '#1f3a7f',
  },
  // Deep royal purple — tertiary accent, rarely used in Luce style.
  purple: {
    300: '#c4a9f5',
    400: '#8b5cf6',  // dark
    500: '#7c3aed',
    600: '#6d28d9',  // light
  },
} as const;

export const typography = {
  fontFamily: {
    mono: "'JetBrains Mono', monospace",
    sans: "'Geist', sans-serif",
  },
  fontSize: {
    xs: '10px',
    sm: '11px',
    md: '13px',
    lg: '18px',
  },
  fontWeight: {
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
  letterSpacing: {
    tight:  '0.02em',
    normal: '0.03em',
    wide:   '0.04em',
    wider:  '0.05em',
  },
  lineHeight: {
    none:    1,
    tight:   1.25,
    normal:  1.5,
    relaxed: 1.8,
  },
} as const;

export const spacing = {
  0:  0,
  px: 1,
  0.5: 2,
  1:  4,
  1.5: 6,
  2:  8,
  2.5: 10,
  3:  12,
  3.5: 14,
  4:  16,
  5:  20,
  6:  24,
  8:  32,
} as const;

export const radius = {
  none: '0px',
  sm:   '2px',
  md:   '3px',
  lg:   '4px',
  xl:   '6px',
  full: '9999px',
} as const;

export const opacity = {
  muted:  0.06,
  subtle: 0.08,
  light:  0.12,
  medium: 0.25,
  heavy:  0.35,
  solid:  1.0,
} as const;

export const transition = {
  fast:   '150ms ease',
  normal: '200ms ease',
  slow:   '500ms ease-out',
} as const;

export const shadow = {
  none: 'none',
  sm:   '0 1px 2px rgba(0,0,0,0.25)',
  md:   '0 2px 8px rgba(0,0,0,0.35)',
  lg:   '0 4px 16px rgba(0,0,0,0.45)',
} as const;

export const primitives = {
  colors,
  typography,
  spacing,
  radius,
  opacity,
  transition,
  shadow,
} as const;
