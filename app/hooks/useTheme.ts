import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');


  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  const saveTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme-preference', newTheme);
    
    if (newTheme === 'system') {
      setResolvedTheme(getSystemTheme());
    } else {
      setResolvedTheme(newTheme);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference') as Theme | null;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
      
      if (savedTheme === 'system') {
        setResolvedTheme(getSystemTheme());
      } else {
        setResolvedTheme(savedTheme as 'light' | 'dark');
      }
    } else {
      setTheme('system');
      setResolvedTheme(getSystemTheme());
    }
  }, []);

  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setResolvedTheme(getSystemTheme());
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [resolvedTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme: saveTheme,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
  };
};
