// ─────────────────────────────────────────────────────────────
//  FI Design System — Primitive Tokens
//  Ferrari Luce V2: red-forward interpretation.
//
//  Palette direction:
//    - Rosso Corsa IS the brand (authentic Luce convention).
//    - Sell/negative is hue-shifted ~20° toward rose/magenta
//      (#E63980) so it's visually distinct from brand red while
//      still reading as red-family = "loss".
//    - Platinum/silver becomes a secondary chrome accent
//      (ticker highlights, metadata) rather than brand.
//    - Racing green for buy. Vivid orange for warning. No yellow.
// ─────────────────────────────────────────────────────────────

export const colors = {
  charcoal: {
    0:   '#ffffff',
    50:  '#fafafa',
    100: '#f2f2f2',
    150: '#e5e5e5',
    200: '#e2e2e2',
    300: '#cccccc',
    400: '#a0a0a0',
    500: '#7a7a7a',
    600: '#6f6f6f',
    650: '#4f4f4f',
    700: '#4a4a4a',
    800: '#353535',
    850: '#2a2a2a',
    900: '#252525',
    925: '#1e1e1e',
    950: '#141414',
    975: '#0a0a0a',
  },
  // Rosso Corsa — BRAND. The iconic Ferrari red.
  red: {
    50:  '#ffe7ea',
    100: '#ffbfc7',
    200: '#ff8c9a',
    300: '#fa5869',
    400: '#e32636',  // dark brand (Rosso Corsa)
    500: '#c01020',  // dark brand hover
    600: '#c8102e',  // light brand (Ferrari GT)
    700: '#9e0821',  // light brand hover
    800: '#7a0218',
    900: '#5a0010',
  },
  // Rose — SELL / negative. Hue-shifted ~20° toward pink so it's
  // visually distinct from Rosso Corsa brand but still reads as
  // red-family loss.
  rose: {
    50:  '#ffe7f0',
    100: '#ffbed7',
    200: '#ff8cb8',
    300: '#fa5998',
    400: '#e63980',  // dark sell
    500: '#c01f63',  // dark sell hover
    600: '#cb1f66',  // light sell
    700: '#9e0f4a',  // light sell hover
    800: '#7a0a3a',
  },
  // Racing green — positive / buy.
  green: {
    50:  '#e6f7f0',
    100: '#b9e9d5',
    200: '#82d7b3',
    300: '#3fc28a',
    400: '#00a676',
    500: '#008a61',
    600: '#007f5c',
    700: '#006046',
    800: '#004832',
    900: '#002f20',
  },
  // Vivid orange — warning only. Pure orange, never brown, never yellow.
  orange: {
    300: '#ffb58e',
    400: '#ff8d5e',
    500: '#ff6b35',
    600: '#d15427',
    700: '#a63f18',
  },
  // Platinum / silver — SECONDARY chrome accent (highlights, tickers,
  // data metadata). Not the brand in this variant.
  platinum: {
    50:  '#f6f7f9',
    100: '#e8eaee',
    200: '#e1e4ea',
    300: '#c9cdd4',
    400: '#9ba0ac',
    500: '#6a717e',
    600: '#5a6370',
    700: '#4f5661',
    800: '#34383f',
    900: '#22252a',
  },
  // Blue — info-only semantic (rare use, never brand).
  blue: {
    300: '#7fa6e5',
    400: '#5d85d0',
    500: '#3e6fd6',
    600: '#2c4da3',
    700: '#1f3a7f',
  },
  purple: {
    300: '#c4a9f5',
    400: '#8b5cf6',
    500: '#7c3aed',
    600: '#6d28d9',
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
