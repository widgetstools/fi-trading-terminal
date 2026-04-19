// ─────────────────────────────────────────────────────────────
//  FI Design System — Semantic Tokens
//  Ferrari Luce V2: red-forward interpretation.
//
//  Intent:
//    - Rosso Corsa IS the brand (authentic Luce convention).
//      Used on primary buttons, active tabs, focus rings, logo.
//    - Sell/negative uses a rose-shifted red (#E63980 / #CB1F66)
//      — still red-family (reads as loss) but distinct hue from
//      brand so a trader can tell a sell button from a primary CTA.
//    - Platinum/silver is a secondary chrome accent (ticker text,
//      data highlights) rather than the brand.
//    - Jet-black dark + pure-neutral light surfaces.
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
// Jet-black chrome + Rosso Corsa brand + rose-shifted sell.
// Red is the hero, silver recedes to secondary chrome.
export const dark: ColorScheme = {
  surface: {
    ground:    colors.charcoal[975],  // #0a0a0a
    primary:   colors.charcoal[950],  // #141414
    secondary: colors.charcoal[925],  // #1e1e1e
    tertiary:  colors.charcoal[850],  // #2a2a2a
  },
  text: {
    primary:   '#f5f5f5',
    secondary: '#b8b8b8',
    muted:     colors.charcoal[500],
    faint:     colors.charcoal[700],
  },
  border: {
    primary:   colors.charcoal[900],
    secondary: colors.charcoal[800],
  },
  accent: {
    positive:      colors.green[400],     // #00a676 — racing green
    positiveHover: colors.green[500],     // #008a61
    negative:      colors.rose[400],      // #e63980 — ROSE (sell)
    negativeHover: colors.rose[500],      // #c01f63
    warning:       colors.orange[500],    // #ff6b35
    info:          colors.red[400],       // #e32636 — ROSSO CORSA BRAND
    infoHover:     colors.red[500],       // #c01020
    highlight:     colors.platinum[200],  // #e1e4ea — silver accent
    purple:        colors.purple[400],    // #8b5cf6
  },
  action: {
    buyBg:    colors.green[500],  // #008a61
    buyText:  '#ffffff',
    sellBg:   colors.rose[400],   // #e63980 — rose sell
    sellText: '#ffffff',
  },
  state: {
    focusRing:    colors.red[400],                 // Rosso Corsa focus
    focusRingBg:  'rgba(227,38,54,0.30)',          // Rosso Corsa @ 30%
    disabledBg:   colors.charcoal[850],
    disabledFg:   colors.charcoal[700],
    hoverOverlay: 'rgba(255,255,255,0.05)',
  },
  overlay: {
    positiveSoft:  'rgba(0,166,118,0.14)',    // racing green @ 14%
    positiveRing:  'rgba(0,166,118,0.35)',
    negativeSoft:  'rgba(230,57,128,0.14)',   // rose @ 14%
    negativeRing:  'rgba(230,57,128,0.38)',
    warningSoft:   'rgba(255,107,53,0.14)',
    warningRing:   'rgba(255,107,53,0.38)',
    infoSoft:      'rgba(227,38,54,0.14)',    // Rosso Corsa @ 14%
    infoRing:      'rgba(227,38,54,0.38)',
    neutralSoft:   'rgba(122,122,122,0.18)',
    neutralRing:   'rgba(122,122,122,0.28)',
  },
  scrollbar: colors.charcoal[800],
};

// ── Light Scheme ────────────────────────────────────────────
// Pure neutral off-white chrome + Ferrari GT red brand + rose sell.
export const light: ColorScheme = {
  surface: {
    ground:    colors.charcoal[50],   // #fafafa
    primary:   '#ffffff',
    secondary: colors.charcoal[100],  // #f2f2f2
    tertiary:  colors.charcoal[150],  // #e5e5e5
  },
  text: {
    primary:   '#1a1a1a',
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
    negative:      colors.rose[600],      // #cb1f66 — rose sell
    negativeHover: colors.rose[700],      // #9e0f4a
    warning:       colors.orange[600],    // #d15427
    info:          colors.red[600],       // #c8102e — FERRARI GT BRAND
    infoHover:     colors.red[700],       // #9e0821
    highlight:     colors.platinum[600],  // #5a6370 — silver accent
    purple:        colors.purple[600],    // #6d28d9
  },
  action: {
    buyBg:    colors.green[600],  // #007f5c
    buyText:  '#ffffff',
    sellBg:   colors.rose[600],   // #cb1f66
    sellText: '#ffffff',
  },
  state: {
    focusRing:    colors.red[600],                 // Ferrari GT focus
    focusRingBg:  'rgba(200,16,46,0.22)',          // Ferrari GT @ 22%
    disabledBg:   colors.charcoal[100],
    disabledFg:   colors.charcoal[400],
    hoverOverlay: 'rgba(0,0,0,0.04)',
  },
  overlay: {
    positiveSoft:  'rgba(0,127,92,0.10)',
    positiveRing:  'rgba(0,127,92,0.32)',
    negativeSoft:  'rgba(203,31,102,0.10)',   // rose @ 10%
    negativeRing:  'rgba(203,31,102,0.32)',
    warningSoft:   'rgba(209,84,39,0.12)',
    warningRing:   'rgba(209,84,39,0.35)',
    infoSoft:      'rgba(200,16,46,0.10)',    // Ferrari GT @ 10%
    infoRing:      'rgba(200,16,46,0.32)',
    neutralSoft:   'rgba(111,111,111,0.08)',
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
