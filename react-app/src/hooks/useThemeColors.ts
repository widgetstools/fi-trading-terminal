import { useMemo } from 'react';
import { useTheme } from '@/context/ThemeContext';

export function useThemeColors() {
  const { isDark } = useTheme();

  return useMemo(() => {
    const get = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    // Fallbacks mirror the new design-system palette (fi-dark.css / fi-light.css).
    // Renamed `yellow` → `amber` to reflect the burnt-copper warning hue.
    return {
      bg: get('--bn-bg') || (isDark ? '#0a0a0a' : '#fafafa'),
      bg1: get('--bn-bg1') || (isDark ? '#141414' : '#ffffff'),
      bg2: get('--bn-bg2') || (isDark ? '#1e1e1e' : '#f2f2f2'),
      bg3: get('--bn-bg3') || (isDark ? '#2a2a2a' : '#e5e5e5'),
      border: get('--bn-border') || (isDark ? '#252525' : '#e2e2e2'),
      border2: get('--bn-border2') || (isDark ? '#353535' : '#cccccc'),
      t0: get('--bn-t0') || (isDark ? '#f5f5f5' : '#1a1a1a'),
      t1: get('--bn-t1') || (isDark ? '#b8b8b8' : '#4f4f4f'),
      t2: get('--bn-t2') || (isDark ? '#7a7a7a' : '#6f6f6f'),
      t3: get('--bn-t3') || (isDark ? '#4a4a4a' : '#a0a0a0'),
      green: get('--bn-green') || (isDark ? '#00a676' : '#007f5c'),
      red: get('--bn-red') || (isDark ? '#e32636' : '#c8102e'),
      amber: get('--bn-amber') || (isDark ? '#ff6b35' : '#d15427'),
      blue: get('--bn-blue') || (isDark ? '#c9cdd4' : '#4f5661'),
      cyan: get('--bn-cyan') || (isDark ? '#e1e4ea' : '#5a6370'),
      gridLine: isDark ? '#1e1e1e' : '#f2f2f2',
      isDark,
    };
  }, [isDark]);
}
