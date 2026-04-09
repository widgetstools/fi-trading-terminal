// ─────────────────────────────────────────────────────────────
//  FI Design System — AG Grid Adapter
//  Uses CSS variables (--bn-*) so the grid re-skins automatically
//  whenever the active design system / theme changes.
// ─────────────────────────────────────────────────────────────

import { shared } from '../tokens/semantic';

const sharedParams: Record<string, unknown> = {
  backgroundColor:            'var(--bn-bg1)',
  foregroundColor:            'var(--bn-t0)',

  // Header is a distinct tier above row bands so columns read as a header
  headerBackgroundColor:      'var(--bn-bg3)',
  headerForegroundColor:      'var(--bn-t0)',
  headerFontWeight:           600,
  headerTextColor:            'var(--bn-t0)',
  headerRowBorder:            { style: 'solid', width: 1, color: 'var(--bn-border2)' },
  headerColumnBorder:         false,
  headerColumnResizeHandleColor: 'var(--bn-border2)',

  // Row bands — even/odd zebra between bg1 and bg2
  oddRowBackgroundColor:      'var(--bn-bg2)',
  rowHoverColor:              'color-mix(in srgb, var(--bn-green) 8%, var(--bn-bg3))',
  selectedRowBackgroundColor: 'color-mix(in srgb, var(--bn-green) 14%, transparent)',

  borderColor:                'var(--bn-border2)',
  rowBorderColor:             'var(--bn-border)',

  fontFamily:                 shared.typography.fontFamily.mono,
  fontSize:                   parseInt(shared.typography.fontSize.sm),
  headerFontSize:             parseInt(shared.typography.fontSize.xs) + 1,
  cellHorizontalPaddingScale: 0.6,
  wrapperBorder:              { style: 'solid', width: 1, color: 'var(--bn-border2)' },
  rowBorder:                  { style: 'solid', width: 1, color: 'var(--bn-border)' },
  columnBorder:               { style: 'solid', width: 1, color: 'var(--bn-border)' },
};

export const agGridLightParams: Record<string, unknown> = { ...sharedParams };
export const agGridDarkParams: Record<string, unknown> = { ...sharedParams };
