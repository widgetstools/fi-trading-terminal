/*
 * Design System registry — single source of truth for which design
 * systems are available, consumed by both React and Angular apps.
 */

export type ThemeMode = 'dark' | 'light';

export interface DesignSystemDef {
  id: string;
  label: string;
  description: string;
  themes: ThemeMode[];
}

export const DESIGN_SYSTEMS: DesignSystemDef[] = [
  {
    id: 'fi',
    label: 'FI Default',
    description: 'Original navy palette with amber primary.',
    themes: ['dark', 'light'],
  },
  {
    id: 'midnight',
    label: 'Midnight',
    description: 'Near-black ground, electric blue, rounded pills.',
    themes: ['dark', 'light'],
  },
  {
    id: 'gemini',
    label: 'Gemini',
    description: 'True-black ground, sage green primary, generous radius.',
    themes: ['dark', 'light'],
  },
  {
    id: 'resq',
    label: 'Resq',
    description: 'True-black ground, hot-pink primary, indigo accent, pill radius.',
    themes: ['dark', 'light'],
  },
  {
    id: 'wallet',
    label: 'Wallet',
    description: 'Glassy navy ground, mint-teal primary, soft elevated cards.',
    themes: ['dark', 'light'],
  },
  {
    id: 'binance',
    label: 'Binance',
    description: 'Binance Spot — navy ground, signature yellow, sharp 4px radius.',
    themes: ['dark', 'light'],
  },
  {
    id: 'powerui',
    label: 'Power UI',
    description: 'Power BI inspired. Indigo-navy ground, coral/amber/indigo accent triad.',
    themes: ['dark', 'light'],
  },
];

export const DEFAULT_DS = 'fi';
export const DEFAULT_THEME: ThemeMode = 'dark';

export const STORAGE_KEY_DS = 'fi-ds';
export const STORAGE_KEY_THEME = 'fi-theme';
