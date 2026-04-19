import { useMemo } from 'react';
import { useTheme } from '@/context/ThemeContext';

export function useThemeColors() {
  const { isDark } = useTheme();

  return useMemo(() => {
    const get = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    // Fallbacks mirror the Data Double palette in fi-dark.css / fi-light.css.
    return {
      bg: get('--bn-bg') || (isDark ? '#1e1c2e' : '#f5f3ee'),
      bg1: get('--bn-bg1') || (isDark ? '#252339' : '#fdfbf5'),
      bg2: get('--bn-bg2') || (isDark ? '#2e2b45' : '#edeae0'),
      bg3: get('--bn-bg3') || (isDark ? '#38344f' : '#e3decb'),
      border: get('--bn-border') || (isDark ? '#38344f' : '#dfd9c8'),
      border2: get('--bn-border2') || (isDark ? '#4b4560' : '#ccc5af'),
      t0: get('--bn-t0') || (isDark ? '#e8e4d8' : '#1e1c2e'),
      t1: get('--bn-t1') || (isDark ? '#a9a5b5' : '#504a62'),
      t2: get('--bn-t2') || '#7a7489',
      t3: get('--bn-t3') || (isDark ? '#504a62' : '#a9a5b5'),
      green: get('--bn-green') || (isDark ? '#a8d229' : '#6b8c18'),
      red: get('--bn-red') || (isDark ? '#db3880' : '#b51f60'),
      amber: get('--bn-amber') || (isDark ? '#ec8039' : '#b65420'),
      blue: get('--bn-blue') || (isDark ? '#42b0df' : '#2589b8'),
      cyan: get('--bn-cyan') || (isDark ? '#e9c230' : '#a88918'),
      gridLine: isDark ? '#2e2b45' : '#edeae0',
      isDark,
    };
  }, [isDark]);
}
