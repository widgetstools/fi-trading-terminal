// ─────────────────────────────────────────────────────────────
//  FI Design System — Semantic Tokens
//  Maps primitives to purpose-driven roles.
//  Each color scheme (dark/light) gets its own mappings.
// ─────────────────────────────────────────────────────────────

import { colors, typography, radius, spacing, opacity, transition } from './primitives';

// ── Color Scheme Type ──
export interface ColorScheme {
  surface: {
    ground:    string;  // page/app background
    primary:   string;  // card/panel background
    secondary: string;  // hover, header background
    tertiary:  string;  // active/pressed, accent bg
  };
  text: {
    primary:   string;  // main body text
    secondary: string;  // labels, descriptions
    muted:     string;  // captions, timestamps
    faint:     string;  // disabled, placeholder
  };
  border: {
    primary:   string;  // panel borders, dividers
    secondary: string;  // interactive borders (inputs, buttons)
  };
  accent: {
    positive:      string;  // buy, gain, success
    positiveHover: string;
    negative:      string;  // sell, loss, error
    negativeHover: string;
    warning:       string;  // caution, pending
    info:          string;  // informational, links
    highlight:     string;  // emphasis, selected
    purple:        string;  // tertiary accent
  };
  action: {
    buyBg:    string;  // buy CTA button background
    buyText:  string;
    sellBg:   string;  // sell CTA button background
    sellText: string;
  };
  scrollbar: string;
}

// ── Dark Scheme ──
// Coinbase Advanced inspired. Near-black neutral ground, electric blue
// primary, vivid emerald/coral for trading. Generous radius, calm chrome.
export const dark: ColorScheme = {
  surface: {
    ground:    '#0a0b0d',
    primary:   '#111317',
    secondary: '#181b21',
    tertiary:  '#21252d',
  },
  text: {
    primary:   '#ffffff',
    secondary: '#b1b5c3',
    muted:     '#7d8597',
    faint:     '#4e5564',
  },
  border: {
    primary:   '#1f232b',
    secondary: '#2a2f39',
  },
  accent: {
    positive:      '#05b169',   // coinbase emerald
    positiveHover: '#04935a',
    negative:      '#cf202f',   // coinbase coral red
    negativeHover: '#b01926',
    warning:       '#f7b500',
    info:          '#1652f0',   // signature coinbase blue
    highlight:     '#45b3ff',
    purple:        '#b16dff',
  },
  action: {
    buyBg:    '#05b169',
    buyText:  '#ffffff',
    sellBg:   '#cf202f',
    sellText: '#ffffff',
  },
  scrollbar: '#2a2f39',
};

// ── Light Scheme (VS Code Light Modern style) ──
// Pure neutral grays — no blue/warm tint in chrome.
// Trading accents provide all color. WCAG AA text contrast.
export const light: ColorScheme = {
  surface: {
    ground:    '#f8f8f8',   // neutral gray ground (VS Code bg)
    primary:   '#ffffff',   // white cards/panels
    secondary: '#f3f3f3',   // hover/header (VS Code sidebar)
    tertiary:  '#e8e8e8',   // pressed/active state
  },
  text: {
    primary:   '#3b3b3b',   // VS Code editor foreground
    secondary: '#616161',   // VS Code description foreground
    muted:     '#767676',   // WCAG AA minimum on white
    faint:     '#a0a0a0',   // placeholders, disabled
  },
  border: {
    primary:   '#e5e5e5',   // neutral border (VS Code panel border)
    secondary: '#d4d4d4',   // interactive border
  },
  accent: {
    positive:      colors.teal[600],    // #0d9488 — vibrant buy/positive
    positiveHover: colors.teal[700],    // #0f766e
    negative:      colors.red[600],     // #dc2626 — visible red
    negativeHover: colors.red[700],     // #b91c1c
    warning:       '#d97706',           // amber-600 — reads as warning
    info:          '#2563eb',           // blue-600 — bright info
    highlight:     '#0891b2',           // cyan-600 — bright highlight
    purple:        colors.purple[600],  // #9333ea
  },
  action: {
    buyBg:    colors.teal[600],   // #0d9488
    buyText:  '#ffffff',
    sellBg:   colors.red[600],    // #dc2626
    sellText: '#ffffff',
  },
  scrollbar: '#c4c4c4',
};

// ── Shared (non-theme-dependent) ──
export const shared = {
  typography,
  radius,
  spacing,
  opacity,
  transition,
} as const;

export const semantic = { dark, light, shared } as const;
