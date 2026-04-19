// ─────────────────────────────────────────────────────────────
//  FI Design System — AG Grid Adapter
//  Exports raw param objects for light and dark modes.
//  Each app wraps them with themeQuartz.withParams() locally
//  (avoids importing ag-grid-community from the design system).
// ─────────────────────────────────────────────────────────────

import { dark, light, shared } from '../tokens/semantic';

// ─────────────────────────────────────────────────────────────
//  Alignment helpers
//
//  Rule: a column's cell alignment is mirrored on its header
//  by default. Users override by setting `headerAlign` (or an
//  explicit ag-*-aligned-header class in `headerClass`).
//
//  Precedence (highest → lowest):
//    1. explicit col.headerAlign
//    2. explicit ag-*-aligned-header in col.headerClass
//    3. inferred from col.cellAlign
//    4. inferred from col.cellStyle.textAlign
//    5. inferred from col.type === 'numericColumn' → right
// ─────────────────────────────────────────────────────────────

export type CellAlign = 'left' | 'center' | 'right';

// Loose ColDef shape — keeps this adapter independent of the
// ag-grid-community package so apps own that dependency.
export interface AlignableColDef {
  type?: string | string[];
  cellAlign?: CellAlign;
  headerAlign?: CellAlign;
  cellStyle?: Record<string, unknown> | ((...a: unknown[]) => unknown);
  cellClass?: string | string[];
  headerClass?: string | string[];
  [k: string]: unknown;
}

const HEADER_CLASS: Record<CellAlign, string> = {
  left:   'ag-left-aligned-header',
  center: 'ag-center-aligned-header',
  right:  'ag-right-aligned-header',
};

const CELL_CLASS: Record<CellAlign, string> = {
  left:   'ag-left-aligned-cell',
  center: 'ag-center-aligned-cell',
  right:  'ag-right-aligned-cell',
};

const isNumericType = (t: string | string[] | undefined): boolean =>
  Array.isArray(t) ? t.includes('numericColumn') : t === 'numericColumn';

const extractExplicitHeaderAlign = (hc: string | string[] | undefined): CellAlign | null => {
  if (!hc) return null;
  const s = Array.isArray(hc) ? hc.join(' ') : hc;
  if (s.includes('ag-right-aligned-header'))  return 'right';
  if (s.includes('ag-center-aligned-header')) return 'center';
  if (s.includes('ag-left-aligned-header'))   return 'left';
  return null;
};

const inferCellAlign = (col: AlignableColDef): CellAlign | null => {
  if (col.cellAlign) return col.cellAlign;
  if (col.cellStyle && typeof col.cellStyle === 'object') {
    const ta = (col.cellStyle as Record<string, unknown>)['textAlign'];
    if (ta === 'left' || ta === 'center' || ta === 'right') return ta;
  }
  if (isNumericType(col.type)) return 'right';
  return null;
};

const appendClass = (existing: string | string[] | undefined, cls: string): string | string[] => {
  if (!existing) return cls;
  if (Array.isArray(existing)) return existing.includes(cls) ? existing : [...existing, cls];
  return existing.split(/\s+/).includes(cls) ? existing : `${existing} ${cls}`;
};

/**
 * Mirrors cell alignment onto the column header unless the caller
 * has already pinned a header alignment (via `headerAlign` or an
 * explicit `ag-*-aligned-header` class). Also mirrors `cellAlign`
 * onto the cell itself so numericColumn isn't the only path to a
 * right-aligned cell.
 */
export function alignColumn<T>(col: T): T {
  const out = { ...(col as unknown as AlignableColDef) };

  // 1. Mirror cellAlign into cell (class-based, CSS controls padding).
  if (out.cellAlign) {
    out.cellClass = appendClass(out.cellClass, CELL_CLASS[out.cellAlign]);
  }

  // 2. Resolve effective header alignment.
  const override =
    out.headerAlign ??
    extractExplicitHeaderAlign(out.headerClass) ??
    null;

  const effective: CellAlign | null = override ?? inferCellAlign(out);
  if (!effective) return (out as unknown) as T;

  // 3. Only write the header class if there isn't already one that
  //    pins alignment — respect the user's explicit override.
  if (!extractExplicitHeaderAlign(out.headerClass)) {
    out.headerClass = appendClass(out.headerClass, HEADER_CLASS[effective]);
  }

  // Strip the helper keys so they don't leak into ag-grid.
  delete out.cellAlign;
  delete out.headerAlign;

  return (out as unknown) as T;
}

/** Apply `alignColumn` across an array of column definitions. */
export function alignColumns<T>(cols: T[]): T[] {
  return cols.map((c) => alignColumn(c));
}

export const agGridLightParams: Record<string, unknown> = {
  backgroundColor:          light.surface.primary,
  foregroundColor:           light.text.primary,
  headerBackgroundColor:     light.surface.secondary,
  headerForegroundColor:     light.text.secondary,
  oddRowBackgroundColor:     '#fafafa',
  rowHoverColor:             light.surface.secondary,
  selectedRowBackgroundColor:'rgba(14,203,129,0.08)',
  borderColor:               light.border.primary,
  rowBorderColor:            `${light.border.primary}99`,
  fontFamily:                shared.typography.fontFamily.mono,
  fontSize:                  parseInt(shared.typography.fontSize.sm),
  headerFontSize:            parseInt(shared.typography.fontSize.xs) + 1,
  cellHorizontalPaddingScale: 0.6,
  wrapperBorder:             false,
  columnBorder:              false,
};

export const agGridDarkParams: Record<string, unknown> = {
  backgroundColor:          dark.surface.primary,
  foregroundColor:           dark.text.primary,
  headerBackgroundColor:     dark.surface.secondary,
  headerForegroundColor:     dark.text.secondary,
  oddRowBackgroundColor:     dark.surface.primary,
  rowHoverColor:             dark.surface.secondary,
  selectedRowBackgroundColor:`${dark.accent.warning}14`,
  borderColor:               dark.border.primary,
  rowBorderColor:            `${dark.border.primary}99`,
  fontFamily:                shared.typography.fontFamily.mono,
  fontSize:                  parseInt(shared.typography.fontSize.sm),
  headerFontSize:            parseInt(shared.typography.fontSize.xs) + 1,
  cellHorizontalPaddingScale: 0.6,
  wrapperBorder:             false,
  columnBorder:              false,
};
