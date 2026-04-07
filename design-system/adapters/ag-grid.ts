// ─────────────────────────────────────────────────────────────
//  FI Design System — AG Grid Adapter
//  Uses CSS variables (--bn-*) so the grid re-skins automatically
//  whenever the active design system / theme changes.
// ─────────────────────────────────────────────────────────────

import { shared } from '../tokens/semantic';

const sharedParams: Record<string, unknown> = {
  backgroundColor:            'var(--bn-bg1)',
  foregroundColor:            'var(--bn-t0)',
  headerBackgroundColor:      'var(--bn-bg2)',
  headerForegroundColor:      'var(--bn-t1)',
  oddRowBackgroundColor:      'var(--bn-bg2)',
  rowHoverColor:              'var(--bn-bg3)',
  selectedRowBackgroundColor: 'color-mix(in srgb, var(--bn-yellow) 12%, transparent)',
  borderColor:                'var(--bn-border)',
  rowBorderColor:             'var(--bn-border)',
  fontFamily:                 shared.typography.fontFamily.mono,
  fontSize:                   parseInt(shared.typography.fontSize.sm),
  headerFontSize:             parseInt(shared.typography.fontSize.xs) + 1,
  cellHorizontalPaddingScale: 0.6,
  wrapperBorder:              false,
  columnBorder:               false,
};

export const agGridLightParams: Record<string, unknown> = { ...sharedParams };
export const agGridDarkParams: Record<string, unknown> = { ...sharedParams };
