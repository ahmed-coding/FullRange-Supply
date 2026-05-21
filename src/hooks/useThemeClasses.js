/**
 * useThemeClasses Hook
 * Provides utilities for dynamically applying theme-aware classes
 * Manages color lookups, typography, animations, and responsive styles
 */

import { useMemo } from 'react';
import { getThemeStyles } from '../styles/componentStyles';

export const useThemeClasses = (themeName = 'luxuryMinimal') => {
  const theme = useMemo(() => getThemeStyles(themeName), [themeName]);

  /**
   * Get a specific color from the theme
   */
  const getColor = (colorKey) => {
    return theme.colors[colorKey] || '#000000';
  };

  /**
   * Get button classes with optional size and state modifiers
   */
  const getButtonClasses = (variant = 'primary', size = 'md', state = 'default') => {
    const baseClasses = theme.buttons[variant] || theme.buttons.primary;

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const stateClasses = {
      disabled: 'opacity-50 cursor-not-allowed',
      loading: 'opacity-70',
      default: '',
    };

    return `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${stateClasses[state] || ''} font-semibold rounded-lg transition-all duration-300`.trim();
  };

  /**
   * Get card classes with optional elevation
   */
  const getCardClasses = (elevation = 'default', custom = '') => {
    const baseClasses = theme.cards[elevation] || theme.cards.default;
    return `${baseClasses} ${custom}`.trim();
  };

  /**
   * Get form input classes
   */
  const getFormInputClasses = (error = false) => {
    const base = theme.forms.input;
    return error ? `${base} ${theme.forms.error}` : base;
  };

  /**
   * Get form label classes
   */
  const getFormLabelClasses = () => {
    return theme.forms.label;
  };

  /**
   * Get badge classes
   */
  const getBadgeClasses = (solid = false) => {
    return solid ? theme.badges.solid : theme.badges.default;
  };

  /**
   * Get section background classes
   */
  const getSectionClasses = (bgVariant = 'bg') => {
    return theme.sections[bgVariant] || theme.sections.bg;
  };

  /**
   * Get typography classes
   */
  const getTypographyClasses = (type = 'body') => {
    return theme.typography[type] || theme.typography.body;
  };

  /**
   * Get heading classes with size modifiers
   */
  const getHeadingClasses = (level = 'h2') => {
    const headingMap = {
      h1: 'text-5xl md:text-7xl font-bold leading-tight',
      h2: 'text-4xl md:text-5xl font-bold leading-tight',
      h3: 'text-2xl md:text-3xl font-bold',
      h4: 'text-xl md:text-2xl font-bold',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
    };

    return `${headingMap[level] || headingMap.h2} ${theme.typography.heading}`.trim();
  };

  /**
   * Get animation classes for theme
   */
  const getAnimationClasses = () => {
    const animationMap = {
      luxuryMinimal: 'transition-all duration-500 ease-in-out',
      modernTech: 'transition-all duration-300 ease-out',
      corporateProfessional: 'transition-all duration-400 ease-in-out',
      darkElegant: 'transition-all duration-500 ease-in-out',
      vibrantStartup: 'transition-all duration-300 ease-out animate-pulse-glow',
      industrialEdge: 'transition-all duration-200 ease-out',
      natureInspired: 'transition-all duration-600 ease-in-out',
      futuristicNeo: 'transition-all duration-300 ease-out',
      classicElegant: 'transition-all duration-500 ease-in-out',
      boldGeometric: 'transition-all duration-300 ease-out',
    };

    return animationMap[themeName] || 'transition-all duration-300 ease-in-out';
  };

  /**
   * Get responsive classes
   */
  const getResponsiveClasses = (mobile, tablet, desktop) => {
    return `${mobile} md:${tablet} lg:${desktop}`.trim();
  };

  /**
   * Get gradient classes specific to theme
   */
  const getGradientClasses = () => {
    const gradientMap = {
      luxuryMinimal: 'bg-gradient-to-br from-[#c9a961]/5 to-transparent',
      modernTech: 'bg-gradient-to-br from-[#00d9ff]/10 to-transparent',
      corporateProfessional: 'bg-gradient-to-br from-[#1e3a5f]/5 to-transparent',
      darkElegant: 'bg-gradient-to-br from-[#b76e79]/10 to-transparent',
      vibrantStartup: 'bg-gradient-to-br from-[#1f77d6]/20 to-[#ff6b35]/20',
      industrialEdge: 'bg-gradient-to-br from-[#2c3e50]/10 to-[#c0392b]/10',
      natureInspired: 'bg-gradient-to-br from-[#2d5016]/5 to-[#8b6f47]/5',
      futuristicNeo: 'bg-gradient-to-br from-[#ff006e]/20 to-[#8338ec]/10',
      classicElegant: 'bg-gradient-to-br from-[#d4af37]/10 to-transparent',
      boldGeometric: 'bg-gradient-to-br from-[#e97451]/5 to-[#008080]/5',
    };

    return gradientMap[themeName] || 'bg-gradient-to-br from-transparent to-transparent';
  };

  /**
   * Get border styles
   */
  const getBorderClasses = (size = 'base', style = 'solid') => {
    const borderMap = {
      thin: 'border',
      base: 'border',
      thick: 'border-2',
      heavy: 'border-4',
    };

    const styleMap = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    };

    const borderColor = {
      luxuryMinimal: 'border-[#c9a961]/30',
      modernTech: 'border-[#00d9ff]/20',
      corporateProfessional: 'border-[#1e3a5f]/20',
      darkElegant: 'border-[#b76e79]/20',
      vibrantStartup: 'border-[#ff6b35]',
      industrialEdge: 'border-[#2c3e50]',
      natureInspired: 'border-[#a8b8a0]',
      futuristicNeo: 'border-[#ff006e]/40',
      classicElegant: 'border-[#d4af37]',
      boldGeometric: 'border-[#e97451]',
    };

    return `${borderMap[size]} ${styleMap[style]} ${borderColor[themeName]}`.trim();
  };

  /**
   * Get shadow classes for theme
   */
  const getShadowClasses = (intensity = 'md') => {
    const shadowMap = {
      luxuryMinimal: {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
      modernTech: {
        sm: 'shadow-sm shadow-cyan-500/10',
        md: 'shadow-md shadow-cyan-500/20',
        lg: 'shadow-xl shadow-cyan-500/30',
      },
      corporateProfessional: {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
      darkElegant: {
        sm: 'shadow-sm shadow-rose-500/10',
        md: 'shadow-md shadow-rose-500/15',
        lg: 'shadow-lg shadow-rose-500/20',
      },
      vibrantStartup: {
        sm: 'shadow-sm shadow-orange-500/20',
        md: 'shadow-md shadow-orange-500/30',
        lg: 'shadow-xl shadow-orange-500/40',
      },
      industrialEdge: {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-xl',
      },
      natureInspired: {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
      futuristicNeo: {
        sm: 'shadow-sm shadow-pink-500/20',
        md: 'shadow-md shadow-pink-500/30',
        lg: 'shadow-xl shadow-pink-500/50',
      },
      classicElegant: {
        sm: 'shadow-sm',
        md: 'shadow-md shadow-[#d4af37]/10',
        lg: 'shadow-lg shadow-[#d4af37]/20',
      },
      boldGeometric: {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
    };

    return shadowMap[themeName]?.[intensity] || 'shadow-md';
  };

  /**
   * Get hover effect classes
   */
  const getHoverClasses = () => {
    const hoverMap = {
      luxuryMinimal: 'hover:border-[#c9a961] hover:shadow-lg transition-all duration-300',
      modernTech: 'hover:border-[#00d9ff]/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300',
      corporateProfessional: 'hover:shadow-lg transition-all duration-300',
      darkElegant: 'hover:border-[#b76e79]/50 hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300',
      vibrantStartup: 'hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300',
      industrialEdge: 'hover:shadow-lg transition-all duration-200',
      natureInspired: 'hover:shadow-lg transition-all duration-400',
      futuristicNeo: 'hover:border-[#ff006e] hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300',
      classicElegant: 'hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300',
      boldGeometric: 'hover:shadow-lg transition-all duration-300',
    };

    return hoverMap[themeName] || 'hover:shadow-lg transition-all duration-300';
  };

  /**
   * Combine multiple class groups
   */
  const combineClasses = (...classes) => {
    return classes.filter(Boolean).join(' ').trim();
  };

  return {
    // Direct style accessors
    colors: theme.colors,
    buttons: theme.buttons,
    cards: theme.cards,
    forms: theme.forms,
    badges: theme.badges,
    sections: theme.sections,
    typography: theme.typography,

    // Helper functions
    getColor,
    getButtonClasses,
    getCardClasses,
    getFormInputClasses,
    getFormLabelClasses,
    getBadgeClasses,
    getSectionClasses,
    getTypographyClasses,
    getHeadingClasses,
    getAnimationClasses,
    getResponsiveClasses,
    getGradientClasses,
    getBorderClasses,
    getShadowClasses,
    getHoverClasses,
    combineClasses,
  };
};

export default useThemeClasses;
