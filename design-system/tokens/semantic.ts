// ─────────────────────────────────────────────────────────────
//  FI Design System — Semantic Tokens
//  Ferrari Luce variant.
//
//  Intent:
//    - Monochromatic luxury chrome: platinum/silver as the BRAND
//      accent, reserving Rosso Corsa red for negative/sell semantics
//      (where red naturally belongs in a trading terminal).
//    - Jet-black-leaning dark surfaces for cinematic contrast.
//    - Pure neutral light surfaces (no cream, no warmth).
//    - Racing green for positive, vivid orange for warning.
// ─────────────────────────────────────────────────────────────

import { colors, typography, radius, spacing, opacity, transition } from './primitives';

// ── Color Scheme Type ──
export interface ColorScheme {
  surface: {
    ground:    string;
    primary:   string;
    secondary: string;
    tertiary:  string;
  };
  text: {
    primary:   string;
    secondary: string;
    muted:     string;
    faint:     string;
  };
  border: {
    primary:   string;
    secondary: string;
  };
  accent: {
    positive:      string;
    positiveHover: string;
    negative:      string;  // Rosso Corsa
    negativeHover: string;
    warning:       string;  // vivid orange, never yellow
    info:          string;  // BRAND — platinum/silver (Luce signature)
    infoHover:     string;
    highlight:     string;
    purple:        string;
  };
  action: {
    buyBg:    string;
    buyText:  string;
    sellBg:   string;
    sellText: string;
  };
  state: {
    focusRing:    string;
    focusRingBg:  string;
    disabledBg:   string;
    disabledFg:   string;
    hoverOverlay: string;
  };
  overlay: {
    positiveSoft:  string;
    positiveRing:  string;
    negativeSoft:  string;
    negativeRing:  string;
    warningSoft:   string;
    warningRing:   string;
    infoSoft:      string;
    infoRing:      string;
    neutralSoft:   string;
    neutralRing:   string;
  };
  scrollbar: string;
}

// ── Dark Scheme ─────────────────────────────────────────────
// Jet-black chrome + platinum brand + Rosso Corsa sell. High-contrast
// cinematic feel; reds only appear on loss/sell where they carry
// semantic weight.
export const dark: ColorScheme = {
  surface: {
    ground:    colors.charcoal[975],  // #0a0a0a — near-black
    primary:   colors.charcoal[950],  // #141414 — card
    secondary: colors.charcoal[925],  // #1e1e1e — hover/header
    tertiary:  colors.charcoal[850],  // #2a2a2a — pressed
  },
  text: {
    primary:   '#f5f5f5',             // editorial white
    secondary: '#b8b8b8',
    muted:     colors.charcoal[500],  // #7a7a7a
    faint:     colors.charcoal[700],  // #4a4a4a
  },
  border: {
    primary:   colors.charcoal[900],  // #252525 — subtle
    secondary: colors.charcoal[800],  // #353535 — interactive
  },
  accent: {
    positive:      colors.green[400],     // #00a676 — racing green
    positiveHover: colors.green[500],     // #008a61
    negative:      colors.red[400],       // #e32636 — ROSSO CORSA
    negativeHover: colors.red[500],       // #c01020
    warning:       colors.orange[500],    // #ff6b35 — vivid orange
    info:          colors.platinum[300],  // #c9cdd4 — PLATINUM (brand)
    infoHover:     colors.platinum[200],  // #e1e4ea
    highlight:     colors.platinum[200],  // #e1e4ea — brighter silver
    purple:        colors.purple[400],    // #8b5cf6
  },
  action: {
    buyBg:    colors.green[500],  // #008a61
    buyText:  '#ffffff',
    sellBg:   colors.red[400],    // #e32636 — Rosso Corsa
    sellText: '#ffffff',
  },
  state: {
    focusRing:    colors.platinum[300],            // platinum focus halo
    focusRingBg:  'rgba(201,205,212,0.28)',        // platinum @ 28%
    disabledBg:   colors.charcoal[850],
    disabledFg:   colors.charcoal[700],
    hoverOverlay: 'rgba(255,255,255,0.05)',
  },
  overlay: {
    positiveSoft:  'rgba(0,166,118,0.14)',    // racing green @ 14%
    positiveRing:  'rgba(0,166,118,0.35)',
    negativeSoft:  'rgba(227,38,54,0.14)',    // Rosso Corsa @ 14%
    negativeRing:  'rgba(227,38,54,0.38)',
    warningSoft:   'rgba(255,107,53,0.14)',   // orange @ 14%
    warningRing:   'rgba(255,107,53,0.38)',
    infoSoft:      'rgba(201,205,212,0.12)',  // platinum @ 12%
    infoRing:      'rgba(201,205,212,0.32)',
    neutralSoft:   'rgba(122,122,122,0.18)',  // charcoal-500 @ 18%
    neutralRing:   'rgba(122,122,122,0.28)',
  },
  scrollbar: colors.charcoal[800],
};

// ── Light Scheme ────────────────────────────────────────────
// Pure neutral off-white chrome + gunmetal brand + Ferrari red sell.
// Clean, editorial, no warm tones anywhere.
export const light: ColorScheme = {
  surface: {
    ground:    colors.charcoal[50],   // #fafafa
    primary:   '#ffffff',             // pure white cards
    secondary: colors.charcoal[100],  // #f2f2f2
    tertiary:  colors.charcoal[150],  // #e5e5e5
  },
  text: {
    primary:   '#1a1a1a',             // near-black, not pure
    secondary: colors.charcoal[650],  // #4f4f4f
    muted:     colors.charcoal[600],  // #6f6f6f — AA on off-white
    faint:     colors.charcoal[400],  // #a0a0a0
  },
  border: {
    primary:   colors.charcoal[200],  // #e2e2e2
    secondary: colors.charcoal[300],  // #cccccc
  },
  accent: {
    positive:      colors.green[600],     // #007f5c
    positiveHover: colors.green[700],     // #006046
    negative:      colors.red[600],       // #c8102e — Ferrari GT light
    negativeHover: colors.red[700],       // #9e0821
    warning:       colors.orange[600],    // #d15427
    info:          colors.platinum[700],  // #4f5661 — GUNMETAL (brand)
    infoHover:     colors.platinum[800],  // #34383f
    highlight:     colors.platinum[600],  // #5a6370
    purple:        colors.purple[600],    // #6d28d9
  },
  action: {
    buyBg:    colors.green[600],  // #007f5c
    buyText:  '#ffffff',
    sellBg:   colors.red[600],    // #c8102e
    sellText: '#ffffff',
  },
  state: {
    focusRing:    colors.platinum[700],            // gunmetal focus
    focusRingBg:  'rgba(79,86,97,0.22)',           // gunmetal @ 22%
    disabledBg:   colors.charcoal[100],
    disabledFg:   colors.charcoal[400],
    hoverOverlay: 'rgba(0,0,0,0.04)',
  },
  overlay: {
    positiveSoft:  'rgba(0,127,92,0.10)',     // green-600 @ 10%
    positiveRing:  'rgba(0,127,92,0.32)',
    negativeSoft:  'rgba(200,16,46,0.10)',    // Ferrari GT @ 10%
    negativeRing:  'rgba(200,16,46,0.32)',
    warningSoft:   'rgba(209,84,39,0.12)',    // orange-600 @ 12%
    warningRing:   'rgba(209,84,39,0.35)',
    infoSoft:      'rgba(79,86,97,0.08)',     // gunmetal @ 8%
    infoRing:      'rgba(79,86,97,0.25)',
    neutralSoft:   'rgba(111,111,111,0.08)',  // charcoal-600 @ 8%
    neutralRing:   'rgba(111,111,111,0.22)',
  },
  scrollbar: '#cccccc',
};

// ── Shared ──
export const shared = {
  typography,
  radius,
  spacing,
  opacity,
  transition,
} as const;

export const semantic = { dark, light, shared } as const;
