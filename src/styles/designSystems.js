/**
 * Design Systems - 10 Complete Theme Objects
 * Each theme includes colors, typography, spacing, borders, shadows, and animations
 * All themes follow an 8px grid system and support RTL/LTR layouts
 */

// Base spacing scale (8px grid)
const spacingScale = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 192, 224, 256];

// Standard animation timings
const animationConfig = {
  fast: 150,
  base: 300,
  slow: 500,
  verySlow: 800,
};

const easeInOutQuad = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
const easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

// ============================================
// DESIGN #1: LUXURY MINIMAL
// ============================================
export const luxuryMinimal = {
  id: 'luxury-minimal',
  name: 'Luxury Minimal',
  description: 'Ultra-premium, minimalist, high-end B2B aesthetic',
  colors: {
    primary: '#c9a961',
    secondary: '#1a1a1a',
    accent: '#f5f3ef',
    text: '#1a1a1a',
    textLight: '#f5f3ef',
    background: '#f5f3ef',
    backgroundDark: '#ffffff',
    border: '#d4d0c0',
    borderLight: '#e8e4d8',
    success: '#4a7c59',
    warning: '#c98f5f',
    error: '#a64c4c',
  },
  typography: {
    fontFamily: {
      serif: "'Playfair Display', Georgia, serif",
      sans: "'Montserrat', 'Segoe UI', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' },
      h2: { size: '2.75rem', weight: 300, lineHeight: 1.3, letterSpacing: '-0.01em' },
      h3: { size: '2rem', weight: 400, lineHeight: 1.4 },
      h4: { size: '1.5rem', weight: 400, lineHeight: 1.5 },
    },
    body: {
      size: '1rem',
      weight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    caption: {
      size: '0.875rem',
      weight: 300,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(26, 26, 26, 0.05)',
    base: '0 4px 6px rgba(26, 26, 26, 0.08)',
    md: '0 8px 16px rgba(26, 26, 26, 0.1)',
    lg: '0 12px 24px rgba(26, 26, 26, 0.15)',
    xl: '0 16px 32px rgba(26, 26, 26, 0.2)',
  },
  animation: {
    durations: animationConfig,
    easing: easeInOutCubic,
    keyframes: {
      fadeIn: '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }',
      slideUp: '@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }',
      subtle: '@keyframes subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#c9a961',
      secondary: '#1a1a1a',
      accent: '#f5f3ef',
    },
  },
};

// ============================================
// DESIGN #2: MODERN TECH
// ============================================
export const modernTech = {
  id: 'modern-tech',
  name: 'Modern Tech',
  description: 'Contemporary, bold, innovative aesthetic for tech-savvy brands',
  colors: {
    primary: '#00d9ff',
    secondary: '#0a0e27',
    accent: '#ffffff',
    text: '#0a0e27',
    textLight: '#ffffff',
    background: '#ffffff',
    backgroundDark: '#0a0e27',
    border: '#e0e0e0',
    borderLight: '#f0f0f0',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  typography: {
    fontFamily: {
      serif: "'Inter', sans-serif",
      sans: "'Inter', 'Segoe UI', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' },
      h2: { size: '2.75rem', weight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' },
      h3: { size: '2rem', weight: 600, lineHeight: 1.3 },
      h4: { size: '1.5rem', weight: 600, lineHeight: 1.4 },
    },
    body: {
      size: '1rem',
      weight: 500,
      lineHeight: 1.6,
      letterSpacing: '0em',
    },
    caption: {
      size: '0.875rem',
      weight: 500,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 2px 4px rgba(10, 14, 39, 0.08)',
    base: '0 4px 12px rgba(10, 14, 39, 0.12)',
    md: '0 8px 24px rgba(10, 14, 39, 0.15)',
    lg: '0 12px 32px rgba(10, 14, 39, 0.2)',
    xl: '0 16px 48px rgba(10, 14, 39, 0.25)',
  },
  animation: {
    durations: animationConfig,
    easing: easeOutCubic,
    keyframes: {
      slideIn: '@keyframes slideIn { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }',
      bounceIn: '@keyframes bounceIn { 0% { transform: scale(0.95); opacity: 0; } 50% { transform: scale(1.05); } 100% { transform: scale(1); opacity: 1; } }',
      glow: '@keyframes glow { 0%, 100% { filter: drop-shadow(0 0 4px #00d9ff); } 50% { filter: drop-shadow(0 0 8px #00d9ff); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#00d9ff',
      secondary: '#0a0e27',
      accent: '#ffffff',
    },
  },
};

// ============================================
// DESIGN #3: CORPORATE PROFESSIONAL
// ============================================
export const corporateProfessional = {
  id: 'corporate-professional',
  name: 'Corporate Professional',
  description: 'Traditional B2B, trustworthy, established aesthetic',
  colors: {
    primary: '#1e3a5f',
    secondary: '#546e7a',
    accent: '#ffffff',
    text: '#1e3a5f',
    textLight: '#ffffff',
    background: '#ffffff',
    backgroundDark: '#f8f9fa',
    border: '#cbd5e0',
    borderLight: '#e2e8f0',
    success: '#48bb78',
    warning: '#ed8936',
    error: '#f56565',
  },
  typography: {
    fontFamily: {
      serif: "'Roboto', sans-serif",
      sans: "'Roboto', 'Segoe UI', sans-serif",
    },
    headings: {
      h1: { size: '2.75rem', weight: 700, lineHeight: 1.2, letterSpacing: '-0.01em' },
      h2: { size: '2.25rem', weight: 700, lineHeight: 1.3 },
      h3: { size: '1.75rem', weight: 600, lineHeight: 1.4 },
      h4: { size: '1.25rem', weight: 600, lineHeight: 1.5 },
    },
    body: {
      size: '1rem',
      weight: 400,
      lineHeight: 1.6,
      letterSpacing: '0em',
    },
    caption: {
      size: '0.875rem',
      weight: 400,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 1px 3px rgba(30, 58, 95, 0.08)',
    base: '0 4px 6px rgba(30, 58, 95, 0.1)',
    md: '0 8px 12px rgba(30, 58, 95, 0.12)',
    lg: '0 12px 20px rgba(30, 58, 95, 0.15)',
    xl: '0 16px 28px rgba(30, 58, 95, 0.2)',
  },
  animation: {
    durations: animationConfig,
    easing: 'ease-in-out',
    keyframes: {
      fadeIn: '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }',
      slideDown: '@keyframes slideDown { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }',
      pulse: '@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#1e3a5f',
      secondary: '#546e7a',
      accent: '#ffffff',
    },
  },
};

// ============================================
// DESIGN #4: DARK ELEGANT
// ============================================
export const darkElegant = {
  id: 'dark-elegant',
  name: 'Dark Elegant',
  description: 'Sophisticated dark theme, premium feel',
  colors: {
    primary: '#b76e79',
    secondary: '#2d1b4e',
    accent: '#0f0f0f',
    text: '#f5f1f0',
    textLight: '#0f0f0f',
    background: '#0f0f0f',
    backgroundDark: '#1a1a1a',
    border: '#4a3f52',
    borderLight: '#3d3245',
    success: '#5ecc71',
    warning: '#f5b041',
    error: '#e74c3c',
  },
  typography: {
    fontFamily: {
      serif: "'Georgia', serif",
      sans: "'Poppins', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' },
      h2: { size: '2.75rem', weight: 400, lineHeight: 1.3, letterSpacing: '-0.01em' },
      h3: { size: '2rem', weight: 500, lineHeight: 1.4 },
      h4: { size: '1.5rem', weight: 500, lineHeight: 1.5 },
    },
    body: {
      size: '1rem',
      weight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    caption: {
      size: '0.875rem',
      weight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '3px',
      sm: '6px',
      md: '9px',
      lg: '12px',
      xl: '16px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 2px 8px rgba(0, 0, 0, 0.4)',
    base: '0 4px 16px rgba(0, 0, 0, 0.5)',
    md: '0 8px 24px rgba(0, 0, 0, 0.6)',
    lg: '0 12px 32px rgba(0, 0, 0, 0.7)',
    xl: '0 16px 40px rgba(0, 0, 0, 0.8)',
  },
  animation: {
    durations: animationConfig,
    easing: easeInOutCubic,
    keyframes: {
      fadeIn: '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }',
      glowPulse: '@keyframes glowPulse { 0%, 100% { box-shadow: 0 0 20px rgba(183, 110, 121, 0.3); } 50% { box-shadow: 0 0 30px rgba(183, 110, 121, 0.6); } }',
      neon: '@keyframes neon { 0%, 100% { filter: drop-shadow(0 0 10px #b76e79); } 50% { filter: drop-shadow(0 0 20px #b76e79); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#b76e79',
      secondary: '#2d1b4e',
      accent: '#0f0f0f',
    },
  },
};

// ============================================
// DESIGN #5: VIBRANT STARTUP
// ============================================
export const vibrantStartup = {
  id: 'vibrant-startup',
  name: 'Vibrant Startup',
  description: 'Bold, colorful, youthful, energetic aesthetic',
  colors: {
    primary: '#1f77d6',
    secondary: '#ff6b35',
    accent: '#39ff14',
    text: '#1a1a1a',
    textLight: '#ffffff',
    background: '#ffffff',
    backgroundDark: '#f8f8f8',
    border: '#e0e0e0',
    borderLight: '#f0f0f0',
    success: '#00d084',
    warning: '#ffa502',
    error: '#ff3366',
  },
  typography: {
    fontFamily: {
      serif: "'Poppins', sans-serif",
      sans: "'Poppins', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 800, lineHeight: 1.1, letterSpacing: '-0.03em' },
      h2: { size: '2.75rem', weight: 800, lineHeight: 1.2, letterSpacing: '-0.02em' },
      h3: { size: '2rem', weight: 700, lineHeight: 1.3 },
      h4: { size: '1.5rem', weight: 700, lineHeight: 1.4 },
    },
    body: {
      size: '1rem',
      weight: 600,
      lineHeight: 1.6,
      letterSpacing: '0em',
    },
    caption: {
      size: '0.875rem',
      weight: 600,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '6px',
      sm: '12px',
      md: '18px',
      lg: '24px',
      xl: '32px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 2px 8px rgba(31, 119, 214, 0.15)',
    base: '0 4px 12px rgba(31, 119, 214, 0.2)',
    md: '0 8px 24px rgba(31, 119, 214, 0.25)',
    lg: '0 12px 32px rgba(31, 119, 214, 0.3)',
    xl: '0 16px 48px rgba(31, 119, 214, 0.35)',
  },
  animation: {
    durations: animationConfig,
    easing: easeOutCubic,
    keyframes: {
      bounce: '@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }',
      spin: '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }',
      rainbow: '@keyframes rainbow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#1f77d6',
      secondary: '#ff6b35',
      accent: '#39ff14',
    },
  },
};

// ============================================
// DESIGN #6: INDUSTRIAL EDGE
// ============================================
export const industrialEdge = {
  id: 'industrial-edge',
  name: 'Industrial Edge',
  description: 'Raw, industrial, construction-inspired aesthetic',
  colors: {
    primary: '#c0392b',
    secondary: '#2c3e50',
    accent: '#95a5a6',
    text: '#2c3e50',
    textLight: '#ecf0f1',
    background: '#ecf0f1',
    backgroundDark: '#34495e',
    border: '#7f8c8d',
    borderLight: '#bdc3c7',
    success: '#27ae60',
    warning: '#e67e22',
    error: '#e74c3c',
  },
  typography: {
    fontFamily: {
      serif: "'Work Sans', sans-serif",
      sans: "'Work Sans', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 900, lineHeight: 1.1, letterSpacing: '-0.04em' },
      h2: { size: '2.75rem', weight: 900, lineHeight: 1.2, letterSpacing: '-0.03em' },
      h3: { size: '2rem', weight: 800, lineHeight: 1.3 },
      h4: { size: '1.5rem', weight: 800, lineHeight: 1.4 },
    },
    body: {
      size: '1rem',
      weight: 600,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    caption: {
      size: '0.875rem',
      weight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '0px',
      sm: '2px',
      md: '4px',
      lg: '8px',
      xl: '12px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '2px',
      base: '3px',
      thick: '4px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 1px 4px rgba(44, 62, 80, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    base: '0 2px 8px rgba(44, 62, 80, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    md: '0 4px 12px rgba(44, 62, 80, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    lg: '0 8px 20px rgba(44, 62, 80, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    xl: '0 12px 28px rgba(44, 62, 80, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },
  animation: {
    durations: animationConfig,
    easing: 'ease-out',
    keyframes: {
      slide: '@keyframes slide { from { transform: translateX(-100%); } to { transform: translateX(0); } }',
      shake: '@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-2px); } 75% { transform: translateX(2px); } }',
      metal: '@keyframes metal { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.1); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#c0392b',
      secondary: '#2c3e50',
      accent: '#95a5a6',
    },
  },
};

// ============================================
// DESIGN #7: NATURE INSPIRED
// ============================================
export const natureInspired = {
  id: 'nature-inspired',
  name: 'Nature Inspired',
  description: 'Organic, sustainable, green-focused aesthetic',
  colors: {
    primary: '#2d5016',
    secondary: '#8b6f47',
    accent: '#a8b8a0',
    text: '#2d5016',
    textLight: '#f5f5f0',
    background: '#f5f5f0',
    backgroundDark: '#e8e8e0',
    border: '#c5c9bc',
    borderLight: '#d5d9cc',
    success: '#4a9d6f',
    warning: '#d4a574',
    error: '#c05550',
  },
  typography: {
    fontFamily: {
      serif: "'Nunito', sans-serif",
      sans: "'Nunito', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' },
      h2: { size: '2.75rem', weight: 700, lineHeight: 1.3, letterSpacing: '-0.01em' },
      h3: { size: '2rem', weight: 600, lineHeight: 1.4 },
      h4: { size: '1.5rem', weight: 600, lineHeight: 1.5 },
    },
    body: {
      size: '1rem',
      weight: 500,
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    caption: {
      size: '0.875rem',
      weight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 2px 8px rgba(45, 80, 22, 0.08)',
    base: '0 4px 12px rgba(45, 80, 22, 0.12)',
    md: '0 8px 20px rgba(45, 80, 22, 0.15)',
    lg: '0 12px 28px rgba(45, 80, 22, 0.2)',
    xl: '0 16px 36px rgba(45, 80, 22, 0.25)',
  },
  animation: {
    durations: animationConfig,
    easing: easeInOutCubic,
    keyframes: {
      sway: '@keyframes sway { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(2deg); } }',
      grow: '@keyframes grow { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }',
      flow: '@keyframes flow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#2d5016',
      secondary: '#8b6f47',
      accent: '#a8b8a0',
    },
  },
};

// ============================================
// DESIGN #8: FUTURISTIC NEO
// ============================================
export const futuristicNeo = {
  id: 'futuristic-neo',
  name: 'Futuristic Neo',
  description: 'Next-gen, sci-fi inspired, cutting-edge aesthetic',
  colors: {
    primary: '#ff006e',
    secondary: '#8338ec',
    accent: '#0a0e27',
    text: '#00f5ff',
    textLight: '#0a0e27',
    background: '#0a0e27',
    backgroundDark: '#050810',
    border: '#8338ec',
    borderLight: '#b367ff',
    success: '#00ff88',
    warning: '#ffbe0b',
    error: '#ff006e',
  },
  typography: {
    fontFamily: {
      serif: "'Space Mono', monospace",
      sans: "'Space Mono', monospace",
    },
    headings: {
      h1: { size: '3.5rem', weight: 700, lineHeight: 1.1, letterSpacing: '-0.04em' },
      h2: { size: '2.75rem', weight: 700, lineHeight: 1.2, letterSpacing: '-0.03em' },
      h3: { size: '2rem', weight: 600, lineHeight: 1.3 },
      h4: { size: '1.5rem', weight: 600, lineHeight: 1.4 },
    },
    body: {
      size: '1rem',
      weight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.02em',
    },
    caption: {
      size: '0.875rem',
      weight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 0 10px rgba(255, 0, 110, 0.3)',
    base: '0 0 20px rgba(255, 0, 110, 0.4)',
    md: '0 0 30px rgba(255, 0, 110, 0.5)',
    lg: '0 0 40px rgba(255, 0, 110, 0.6)',
    xl: '0 0 50px rgba(255, 0, 110, 0.7)',
  },
  animation: {
    durations: animationConfig,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      glitch: '@keyframes glitch { 0% { transform: translate(0); } 20% { transform: translate(-2px, 2px); } 40% { transform: translate(-2px, -2px); } 60% { transform: translate(2px, 2px); } 80% { transform: translate(2px, -2px); } 100% { transform: translate(0); } }',
      scan: '@keyframes scan { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }',
      hologram: '@keyframes hologram { 0%, 100% { opacity: 1; filter: drop-shadow(0 0 20px #ff006e); } 50% { opacity: 0.8; filter: drop-shadow(0 0 40px #8338ec); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#ff006e',
      secondary: '#8338ec',
      accent: '#0a0e27',
    },
  },
};

// ============================================
// DESIGN #9: CLASSIC ELEGANT
// ============================================
export const classicElegant = {
  id: 'classic-elegant',
  name: 'Classic Elegant',
  description: 'Timeless, elegant, European luxury aesthetic',
  colors: {
    primary: '#d4af37',
    secondary: '#4a1c1c',
    accent: '#faf7f2',
    text: '#4a1c1c',
    textLight: '#faf7f2',
    background: '#faf7f2',
    backgroundDark: '#ffffff',
    border: '#d4c5b0',
    borderLight: '#e8dcc8',
    success: '#5c8f6b',
    warning: '#d4a574',
    error: '#a85a5a',
  },
  typography: {
    fontFamily: {
      serif: "'Playfair Display', Georgia, serif",
      sans: "'Lato', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 700, lineHeight: 1.2, letterSpacing: '0.05em' },
      h2: { size: '2.75rem', weight: 700, lineHeight: 1.3, letterSpacing: '0.04em' },
      h3: { size: '2rem', weight: 600, lineHeight: 1.4, letterSpacing: '0.03em' },
      h4: { size: '1.5rem', weight: 600, lineHeight: 1.5, letterSpacing: '0.02em' },
    },
    body: {
      size: '1rem',
      weight: 400,
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    caption: {
      size: '0.875rem',
      weight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '3px',
      sm: '6px',
      md: '9px',
      lg: '12px',
      xl: '16px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '2px',
      thick: '3px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 2px 8px rgba(74, 28, 28, 0.1)',
    base: '0 4px 12px rgba(74, 28, 28, 0.12)',
    md: '0 8px 20px rgba(74, 28, 28, 0.15)',
    lg: '0 12px 28px rgba(74, 28, 28, 0.18)',
    xl: '0 16px 36px rgba(74, 28, 28, 0.2)',
  },
  animation: {
    durations: animationConfig,
    easing: easeInOutCubic,
    keyframes: {
      fadeInUp: '@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }',
      ornamental: '@keyframes ornamental { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }',
      elegant: '@keyframes elegant { from { transform: scaleX(0); } to { transform: scaleX(1); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#d4af37',
      secondary: '#4a1c1c',
      accent: '#faf7f2',
    },
  },
};

// ============================================
// DESIGN #10: BOLD GEOMETRIC
// ============================================
export const boldGeometric = {
  id: 'bold-geometric',
  name: 'Bold Geometric',
  description: 'Modern, geometric, artistic aesthetic',
  colors: {
    primary: '#e97451',
    secondary: '#36454f',
    accent: '#008080',
    text: '#36454f',
    textLight: '#ffffff',
    background: '#ffffff',
    backgroundDark: '#f8f8f8',
    border: '#36454f',
    borderLight: '#c0c0c0',
    success: '#2e8b57',
    warning: '#ff8c00',
    error: '#dc143c',
  },
  typography: {
    fontFamily: {
      serif: "'Archivo Black', sans-serif",
      sans: "'Archivo Black', sans-serif",
    },
    headings: {
      h1: { size: '3.5rem', weight: 900, lineHeight: 1.1, letterSpacing: '-0.04em' },
      h2: { size: '2.75rem', weight: 900, lineHeight: 1.2, letterSpacing: '-0.03em' },
      h3: { size: '2rem', weight: 800, lineHeight: 1.3 },
      h4: { size: '1.5rem', weight: 800, lineHeight: 1.4 },
    },
    body: {
      size: '1rem',
      weight: 600,
      lineHeight: 1.6,
      letterSpacing: '0em',
    },
    caption: {
      size: '0.875rem',
      weight: 600,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
  },
  spacing: {
    unit: 8,
    scale: spacingScale,
  },
  borders: {
    radius: {
      none: '0',
      xs: '0px',
      sm: '2px',
      md: '4px',
      lg: '8px',
      xl: '12px',
      full: '9999px',
    },
    width: {
      none: '0',
      thin: '1px',
      base: '3px',
      thick: '4px',
    },
  },
  shadows: {
    none: 'none',
    sm: '0 2px 4px rgba(54, 69, 79, 0.1), 0 4px 8px rgba(233, 116, 81, 0.08)',
    base: '0 4px 8px rgba(54, 69, 79, 0.12), 0 8px 16px rgba(233, 116, 81, 0.1)',
    md: '0 8px 16px rgba(54, 69, 79, 0.15), 0 12px 24px rgba(233, 116, 81, 0.15)',
    lg: '0 12px 24px rgba(54, 69, 79, 0.2), 0 16px 32px rgba(233, 116, 81, 0.2)',
    xl: '0 16px 32px rgba(54, 69, 79, 0.25), 0 20px 40px rgba(233, 116, 81, 0.25)',
  },
  animation: {
    durations: animationConfig,
    easing: easeOutCubic,
    keyframes: {
      rotateIn: '@keyframes rotateIn { from { transform: rotate(-20deg); opacity: 0; } to { transform: rotate(0deg); opacity: 1; } }',
      skew: '@keyframes skew { 0%, 100% { transform: skewX(0deg); } 50% { transform: skewX(5deg); } }',
      geometric: '@keyframes geometric { 0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); } 50% { clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); } 100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); } }',
    },
  },
  tailwindExtension: {
    colors: {
      primary: '#e97451',
      secondary: '#36454f',
      accent: '#008080',
    },
  },
};

// ============================================
// DESIGN SYSTEMS COLLECTION
// ============================================
export const designSystems = {
  'luxury-minimal': luxuryMinimal,
  'modern-tech': modernTech,
  'corporate-professional': corporateProfessional,
  'dark-elegant': darkElegant,
  'vibrant-startup': vibrantStartup,
  'industrial-edge': industrialEdge,
  'nature-inspired': natureInspired,
  'futuristic-neo': futuristicNeo,
  'classic-elegant': classicElegant,
  'bold-geometric': boldGeometric,
};

// ============================================
// UTILITIES
// ============================================
export const getAllDesigns = () => Object.values(designSystems);
export const getDesignById = (id) => designSystems[id];
export const getDesignNames = () => Object.entries(designSystems).map(([id, design]) => ({ id, name: design.name }));

// Default export
export default designSystems;
