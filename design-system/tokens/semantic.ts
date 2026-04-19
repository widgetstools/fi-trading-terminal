// ─────────────────────────────────────────────────────────────
//  FI Design System — Semantic Tokens (Data Double variant)
//
//  Role mappings:
//    accent.info      → cyan  (brand: primary buttons, active tabs,
//                              focus rings, logo, intraday line)
//    accent.positive  → lime  (buy / gain)
//    accent.negative  → rose/magenta  (sell / loss)
//    accent.warning   → orange  (warning, high-energy data spikes)
//    accent.highlight → amber  (minor data-category emphasis, never brand)
//    accent.purple    → muted purple (quaternary)
// ─────────────────────────────────────────────────────────────

import { colors, typography, radius, spacing, opacity, transition } from './primitives';

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
    negative:      string;
    negativeHover: string;
    warning:       string;
    info:          string;  // BRAND (cyan)
    infoHover:     string;
    highlight:     string;  // amber — minor data highlight
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
export const dark: ColorScheme = {
  surface: {
    ground:    colors.aubergine[975],  // #1e1c2e
    primary:   colors.aubergine[950],  // #252339
    secondary: colors.aubergine[900],  // #2e2b45
    tertiary:  colors.aubergine[800],  // #38344f
  },
  text: {
    primary:   '#e8e4d8',              // warm editorial off-white
    secondary: colors.aubergine[400],  // #a9a5b5
    muted:     colors.aubergine[500],  // #7a7489
    faint:     colors.aubergine[600],  // #504a62
  },
  border: {
    primary:   colors.aubergine[800],  // #38344f
    secondary: colors.aubergine[700],  // #4b4560
  },
  accent: {
    positive:      colors.lime[400],    // #a8d229 — lime buy
    positiveHover: colors.lime[500],    // #8cb01c
    negative:      colors.rose[400],    // #db3880 — magenta sell
    negativeHover: colors.rose[500],    // #b51f60
    warning:       colors.orange[400],  // #ec8039 — warm orange warning
    info:          colors.cyan[400],    // #42b0df — CYAN BRAND
    infoHover:     colors.cyan[500],    // #2589b8
    highlight:     colors.amber[400],   // #e9c230 — amber highlight
    purple:        colors.purple[400],  // #9b7fc5
  },
  action: {
    buyBg:    colors.lime[500],    // #8cb01c
    buyText:  '#1e1c2e',           // dark text on lime — better contrast
    sellBg:   colors.rose[400],    // #db3880
    sellText: '#ffffff',
  },
  state: {
    focusRing:    colors.cyan[400],
    focusRingBg:  'rgba(66,176,223,0.30)',       // cyan @ 30%
    disabledBg:   colors.aubergine[800],
    disabledFg:   colors.aubergine[600],
    hoverOverlay: 'rgba(232,228,216,0.05)',
  },
  overlay: {
    positiveSoft:  'rgba(168,210,41,0.14)',    // lime @ 14%
    positiveRing:  'rgba(168,210,41,0.35)',
    negativeSoft:  'rgba(219,56,128,0.14)',    // rose @ 14%
    negativeRing:  'rgba(219,56,128,0.38)',
    warningSoft:   'rgba(236,128,57,0.14)',    // orange @ 14%
    warningRing:   'rgba(236,128,57,0.38)',
    infoSoft:      'rgba(66,176,223,0.14)',    // cyan @ 14%
    infoRing:      'rgba(66,176,223,0.35)',
    neutralSoft:   'rgba(122,116,137,0.18)',   // aubergine-500 @ 18%
    neutralRing:   'rgba(122,116,137,0.28)',
  },
  scrollbar: colors.aubergine[700],
};

// ── Light Scheme ────────────────────────────────────────────
// Warm off-white editorial paper feel. Deeper accent variants for
// WCAG AA contrast on the light ground.
export const light: ColorScheme = {
  surface: {
    ground:    colors.aubergine[50],   // #f5f3ee — editorial warm off-white
    primary:   '#fdfbf5',              // paper-cream card
    secondary: colors.aubergine[100],  // #edeae0
    tertiary:  colors.aubergine[150],  // #e3decb
  },
  text: {
    primary:   colors.aubergine[975],  // #1e1c2e — echoes dark ground
    secondary: colors.aubergine[600],  // #504a62
    muted:     colors.aubergine[500],  // #7a7489
    faint:     colors.aubergine[400],  // #a9a5b5
  },
  border: {
    primary:   colors.aubergine[200],  // #dfd9c8
    secondary: colors.aubergine[300],  // #ccc5af
  },
  accent: {
    positive:      colors.lime[600],    // #6b8c18
    positiveHover: colors.lime[700],    // #527012
    negative:      colors.rose[500],    // #b51f60
    negativeHover: colors.rose[600],    // #8e1048
    warning:       colors.orange[600],  // #b65420
    info:          colors.cyan[500],    // #2589b8 — CYAN BRAND (light)
    infoHover:     colors.cyan[600],    // #1d6e93
    highlight:     colors.amber[600],   // #a88918
    purple:        colors.purple[600],  // #6b4a96
  },
  action: {
    buyBg:    colors.lime[600],    // #6b8c18
    buyText:  '#ffffff',
    sellBg:   colors.rose[500],    // #b51f60
    sellText: '#ffffff',
  },
  state: {
    focusRing:    colors.cyan[500],
    focusRingBg:  'rgba(37,137,184,0.22)',       // cyan-500 @ 22%
    disabledBg:   colors.aubergine[100],
    disabledFg:   colors.aubergine[400],
    hoverOverlay: 'rgba(30,28,46,0.04)',
  },
  overlay: {
    positiveSoft:  'rgba(107,140,24,0.10)',    // lime-600 @ 10%
    positiveRing:  'rgba(107,140,24,0.32)',
    negativeSoft:  'rgba(181,31,96,0.10)',     // rose-500 @ 10%
    negativeRing:  'rgba(181,31,96,0.32)',
    warningSoft:   'rgba(182,84,32,0.12)',     // orange-600 @ 12%
    warningRing:   'rgba(182,84,32,0.35)',
    infoSoft:      'rgba(37,137,184,0.10)',    // cyan-500 @ 10%
    infoRing:      'rgba(37,137,184,0.32)',
    neutralSoft:   'rgba(80,74,98,0.08)',      // aubergine-600 @ 8%
    neutralRing:   'rgba(80,74,98,0.22)',
  },
  scrollbar: colors.aubergine[300],
};

export const shared = {
  typography,
  radius,
  spacing,
  opacity,
  transition,
} as const;

export const semantic = { dark, light, shared } as const;
