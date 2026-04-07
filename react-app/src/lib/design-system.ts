import {
  DESIGN_SYSTEMS,
  DEFAULT_DS,
  DEFAULT_THEME,
  STORAGE_KEY_DS,
  STORAGE_KEY_THEME,
  type ThemeMode,
} from '../../../design-system/registry';

export { DESIGN_SYSTEMS, type ThemeMode };

export function getStoredDS(): string {
  return localStorage.getItem(STORAGE_KEY_DS) || DEFAULT_DS;
}

export function getStoredTheme(): ThemeMode {
  return (localStorage.getItem(STORAGE_KEY_THEME) as ThemeMode) || DEFAULT_THEME;
}

export function applyDesignSystem(ds: string, theme: ThemeMode) {
  const root = document.documentElement;
  root.dataset.ds = ds;
  root.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY_DS, ds);
  localStorage.setItem(STORAGE_KEY_THEME, theme);
  window.dispatchEvent(new CustomEvent('fi-ds-change', { detail: { ds, theme } }));
}
