// ─────────────────────────────────────────────────────────────
//  FI Design System — Primitive Tokens
//  "Data Double" infographic aesthetic.
//
//  Palette direction:
//    - Deep aubergine-navy backgrounds (warmer than charcoal) echo
//      the editorial infographic feel of The Data Double poster.
//    - Cyan is the dominant data/brand color (bars, headings, links).
//    - Warm orange for high-energy physical data (heart-rate spikes).
//    - Lime green for positive trading / category markers.
//    - Magenta-rose for negative. Amber retained as a minor data-
//      category highlight, never as brand.
//    - Warm off-white text, not pure white — editorial typography feel.
// ─────────────────────────────────────────────────────────────

export const colors = {
  // Aubergine-navy grayscale — warm-shifted so surfaces read as
  // editorial print rather than clinical dark chrome.
  aubergine: {
    0:   '#ffffff',
    50:  '#f5f3ee',  // light ground (warm off-white, editorial)
    100: '#edeae0',  // light hover
    150: '#e3decb',  // light pressed
    200: '#dfd9c8',  // light border primary
    300: '#ccc5af',  // light border secondary
    400: '#a9a5b5',  // light faint / dark secondary
    500: '#7a7489',  // muted text both themes
    600: '#504a62',  // light secondary / dark faint
    700: '#4b4560',  // dark border secondary
    800: '#38344f',  // dark tertiary surface / border primary
    900: '#2e2b45',  // dark secondary surface (hover/header)
    950: '#252339',  // dark primary surface (card)
    975: '#1e1c2e',  // dark ground (deepest)
  },
  // Cyan/aqua — BRAND. The dominant Data Double data-viz color.
  cyan: {
    50:  '#e8f6fb',
    100: '#c5e8f3',
    200: '#91d1e5',
    300: '#5ec0e8',
    400: '#42b0df',  // dark brand
    500: '#2589b8',  // dark hover / light brand
    600: '#1d6e93',  // light hover
    700: '#145270',
    800: '#0d3a52',
  },
  // Lime green — positive / buy / category-A marker.
  lime: {
    50:  '#f2f9d6',
    100: '#def1a0',
    200: '#c9e667',
    300: '#b6dc28',
    400: '#a8d229',  // dark positive
    500: '#8cb01c',  // dark hover / buy bg
    600: '#6b8c18',  // light positive / buy bg
    700: '#527012',  // light hover
    800: '#3d530d',
  },
  // Warm orange — warning and high-energy data spikes.
  orange: {
    300: '#f2ab78',
    400: '#ec8039',  // dark warning (echoes heart-rate spikes)
    500: '#d26a22',
    600: '#b65420',  // light warning
    700: '#8e3f14',
  },
  // Rose / magenta — negative / sell. Distinct from orange,
  // distinct from red-neon, fits the Data Double dot palette.
  rose: {
    50:  '#fbe7f1',
    100: '#f2c0da',
    200: '#e58fbc',
    300: '#db5b9b',  // dot marker
    400: '#db3880',  // dark negative
    500: '#b51f60',  // dark hover / light negative
    600: '#8e1048',  // light hover
    700: '#6a0a34',
  },
  // Amber — tertiary data-category highlight (NEVER brand).
  amber: {
    300: '#f2d977',
    400: '#e9c230',  // dark highlight
    500: '#c29d1a',
    600: '#a88918',  // light highlight
    700: '#7f6610',
  },
  // Muted purple — quaternary accent.
  purple: {
    300: '#c4b0de',
    400: '#9b7fc5',  // dark
    500: '#7e5eae',
    600: '#6b4a96',  // light
  },
  // ── Aliases so shadcn/primeng adapters keep compiling without
  // cross-cutting rewrites. The Data Double palette is canonically
  // named (aubergine/lime/cyan/rose); these aliases just re-expose
  // the same scales under the adapter's expected keys.
  charcoal: {
    0:   '#ffffff',
    50:  '#f5f3ee',
    100: '#edeae0',
    150: '#e3decb',
    200: '#dfd9c8',
    300: '#ccc5af',
    400: '#a9a5b5',
    500: '#7a7489',
    600: '#504a62',
    700: '#4b4560',
    800: '#38344f',
    900: '#2e2b45',
    950: '#252339',
    975: '#1e1c2e',
  },
  teal: {
    500: '#8cb01c',  // positive semantic alias
  },
  blue: {
    50:  '#e8f6fb',
    100: '#c5e8f3',
    200: '#91d1e5',
    300: '#5ec0e8',
    400: '#42b0df',
    500: '#2589b8',
    600: '#1d6e93',
    700: '#145270',
    800: '#0d3a52',
    900: '#09283a',
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
    wide:   '0.05em',  // editorial all-caps labels lean slightly wider
    wider:  '0.08em',
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
  sm:   '0 1px 2px rgba(0,0,0,0.22)',
  md:   '0 2px 8px rgba(0,0,0,0.32)',
  lg:   '0 4px 16px rgba(0,0,0,0.42)',
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
