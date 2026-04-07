import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { DESIGN_SYSTEMS } from '../../../design-system/registry';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  ds: string;
  setDs: (ds: string) => void;
  designSystems: typeof DESIGN_SYSTEMS;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true,
  ds: 'fi',
  setDs: () => {},
  designSystems: DESIGN_SYSTEMS,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('fi-theme');
    return stored === 'light' ? 'light' : 'dark';
  });
  const [ds, setDsState] = useState<string>(() => localStorage.getItem('fi-ds') || 'fi');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-ds', ds);
    document.body.dataset.agThemeMode = theme;
    localStorage.setItem('fi-theme', theme);
    localStorage.setItem('fi-ds', ds);
  }, [theme, ds]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setDs = useCallback((next: string) => {
    setDsState(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark', ds, setDs, designSystems: DESIGN_SYSTEMS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
