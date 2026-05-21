import { createContext, useContext, useState, useEffect } from 'react';
import { designSystems } from '../styles/designSystems.js';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('luxury-minimal');
  const [themeLoaded, setThemeLoaded] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('fullrange-theme');
    if (savedTheme && designSystems[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    setThemeLoaded(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!themeLoaded) return;

    const theme = designSystems[currentTheme];
    if (!theme) return;

    // Apply CSS variables for colors
    const root = document.documentElement;

    // Primary colors
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-text', theme.colors.text);
    root.style.setProperty('--color-text-light', theme.colors.textLight);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-background-dark', theme.colors.backgroundDark);

    // Utility colors
    root.style.setProperty('--color-border', theme.colors.border);
    root.style.setProperty('--color-border-light', theme.colors.borderLight);
    root.style.setProperty('--color-success', theme.colors.success);
    root.style.setProperty('--color-warning', theme.colors.warning);
    root.style.setProperty('--color-error', theme.colors.error);

    // Typography
    root.style.setProperty('--font-serif', theme.typography.fontFamily.serif);
    root.style.setProperty('--font-sans', theme.typography.fontFamily.sans);

    // Spacing
    root.style.setProperty('--spacing-unit', `${theme.spacing.unit}px`);

    // Borders
    root.style.setProperty('--radius-sm', theme.borders.radius.sm);
    root.style.setProperty('--radius-md', theme.borders.radius.md);
    root.style.setProperty('--radius-lg', theme.borders.radius.lg);
    root.style.setProperty('--radius-xl', theme.borders.radius.xl);
    root.style.setProperty('--radius-full', theme.borders.radius.full);

    // Shadows
    root.style.setProperty('--shadow-sm', theme.shadows.sm);
    root.style.setProperty('--shadow-md', theme.shadows.md);
    root.style.setProperty('--shadow-lg', theme.shadows.lg);
    root.style.setProperty('--shadow-xl', theme.shadows.xl);

    // Animation
    root.style.setProperty('--animation-duration-fast', `${theme.animation.durations.fast}ms`);
    root.style.setProperty('--animation-duration-base', `${theme.animation.durations.base}ms`);
    root.style.setProperty('--animation-duration-slow', `${theme.animation.durations.slow}ms`);
    root.style.setProperty('--animation-easing', theme.animation.easing);

    // Save to localStorage
    localStorage.setItem('fullrange-theme', currentTheme);

  }, [currentTheme, themeLoaded]);

  const switchTheme = (themeId) => {
    if (designSystems[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  const getCurrentTheme = () => designSystems[currentTheme];

  const getThemeProperty = (path) => {
    const theme = getCurrentTheme();
    return path.split('.').reduce((obj, key) => obj?.[key], theme);
  };

  const value = {
    currentTheme,
    switchTheme,
    theme: getCurrentTheme(),
    getThemeProperty,
    availableThemes: Object.entries(designSystems).map(([id, design]) => ({
      id,
      name: design.name,
      description: design.description,
    })),
    themeLoaded,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Custom hook for theme-specific values
export const useThemeValue = (path) => {
  const { theme } = useTheme();
  return path.split('.').reduce((obj, key) => obj?.[key], theme);
};

// Custom hook to get color
export const useThemeColor = (colorKey) => {
  const { theme } = useTheme();
  return theme?.colors?.[colorKey] || '#000000';
};

// Custom hook to get spacing
export const useThemeSpacing = (scale = 1) => {
  const { theme } = useTheme();
  return (theme?.spacing?.unit || 8) * scale;
};
