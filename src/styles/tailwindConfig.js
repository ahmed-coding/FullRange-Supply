/**
 * Tailwind CSS Configuration Extension
 * Provides custom design tokens for all 10 design themes
 *
 * Usage in tailwind.config.js:
 * import { tailwindThemeExtension } from './src/styles/tailwindConfig.js'
 *
 * Then in the config extend: { ...tailwindThemeExtension }
 */

export const tailwindThemeExtension = {
  colors: {
    // Luxury Minimal
    'luxury': {
      gold: '#c9a961',
      charcoal: '#1a1a1a',
      cream: '#f5f3ef',
    },
    // Modern Tech
    'tech': {
      cyan: '#00d9ff',
      navy: '#0a0e27',
      white: '#ffffff',
    },
    // Corporate Professional
    'corporate': {
      blue: '#1e3a5f',
      gray: '#546e7a',
      light: '#ffffff',
    },
    // Dark Elegant
    'elegant': {
      rose: '#b76e79',
      purple: '#2d1b4e',
      black: '#0f0f0f',
    },
    // Vibrant Startup
    'vibrant': {
      blue: '#1f77d6',
      orange: '#ff6b35',
      lime: '#39ff14',
    },
    // Industrial Edge
    'industrial': {
      rust: '#c0392b',
      gray: '#2c3e50',
      concrete: '#95a5a6',
    },
    // Nature Inspired
    'nature': {
      green: '#2d5016',
      brown: '#8b6f47',
      sage: '#a8b8a0',
    },
    // Futuristic Neo
    'futuristic': {
      pink: '#ff006e',
      purple: '#8338ec',
      space: '#0a0e27',
    },
    // Classic Elegant
    'classic': {
      gold: '#d4af37',
      burgundy: '#4a1c1c',
      cream: '#faf7f2',
    },
    // Bold Geometric
    'geometric': {
      sienna: '#e97451',
      charcoal: '#36454f',
      teal: '#008080',
    },
  },

  fontFamily: {
    // Luxury Minimal
    'serif-luxury': "'Playfair Display', Georgia, serif",
    'sans-luxury': "'Montserrat', 'Segoe UI', sans-serif",

    // Modern Tech
    'sans-tech': "'Inter', 'Segoe UI', sans-serif",

    // Corporate Professional
    'sans-corporate': "'Roboto', 'Segoe UI', sans-serif",

    // Dark Elegant
    'serif-elegant': "'Georgia', serif",
    'sans-elegant': "'Poppins', sans-serif",

    // Vibrant Startup
    'sans-vibrant': "'Poppins', sans-serif",

    // Industrial Edge
    'sans-industrial': "'Work Sans', sans-serif",

    // Nature Inspired
    'sans-nature': "'Nunito', sans-serif",

    // Futuristic Neo
    'mono-futuristic': "'Space Mono', monospace",

    // Classic Elegant
    'serif-classic': "'Playfair Display', Georgia, serif",
    'sans-classic': "'Lato', sans-serif",

    // Bold Geometric
    'sans-geometric': "'Archivo Black', sans-serif",
  },

  fontSize: {
    // Luxury Minimal
    'luxury-h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'luxury-h2': ['2.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    'luxury-h3': ['2rem', { lineHeight: '1.4' }],
    'luxury-h4': ['1.5rem', { lineHeight: '1.5' }],
    'luxury-body': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],

    // Modern Tech
    'tech-h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
    'tech-h2': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'tech-h3': ['2rem', { lineHeight: '1.3' }],
    'tech-h4': ['1.5rem', { lineHeight: '1.4' }],
    'tech-body': ['1rem', { lineHeight: '1.6' }],

    // Corporate Professional
    'corporate-h1': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
    'corporate-h2': ['2.25rem', { lineHeight: '1.3' }],
    'corporate-h3': ['1.75rem', { lineHeight: '1.4' }],
    'corporate-h4': ['1.25rem', { lineHeight: '1.5' }],
    'corporate-body': ['1rem', { lineHeight: '1.6' }],

    // Dark Elegant
    'elegant-h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'elegant-h2': ['2.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    'elegant-h3': ['2rem', { lineHeight: '1.4' }],
    'elegant-h4': ['1.5rem', { lineHeight: '1.5' }],
    'elegant-body': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],

    // Vibrant Startup
    'vibrant-h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
    'vibrant-h2': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'vibrant-h3': ['2rem', { lineHeight: '1.3' }],
    'vibrant-h4': ['1.5rem', { lineHeight: '1.4' }],
    'vibrant-body': ['1rem', { lineHeight: '1.6' }],

    // Industrial Edge
    'industrial-h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
    'industrial-h2': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
    'industrial-h3': ['2rem', { lineHeight: '1.3' }],
    'industrial-h4': ['1.5rem', { lineHeight: '1.4' }],
    'industrial-body': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],

    // Nature Inspired
    'nature-h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'nature-h2': ['2.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    'nature-h3': ['2rem', { lineHeight: '1.4' }],
    'nature-h4': ['1.5rem', { lineHeight: '1.5' }],
    'nature-body': ['1rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],

    // Futuristic Neo
    'futuristic-h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
    'futuristic-h2': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
    'futuristic-h3': ['2rem', { lineHeight: '1.3' }],
    'futuristic-h4': ['1.5rem', { lineHeight: '1.4' }],
    'futuristic-body': ['1rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],

    // Classic Elegant
    'classic-h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
    'classic-h2': ['2.75rem', { lineHeight: '1.3', letterSpacing: '0.04em' }],
    'classic-h3': ['2rem', { lineHeight: '1.4', letterSpacing: '0.03em' }],
    'classic-h4': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
    'classic-body': ['1rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],

    // Bold Geometric
    'geometric-h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
    'geometric-h2': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
    'geometric-h3': ['2rem', { lineHeight: '1.3' }],
    'geometric-h4': ['1.5rem', { lineHeight: '1.4' }],
    'geometric-body': ['1rem', { lineHeight: '1.6' }],
  },

  borderRadius: {
    'luxury-xs': '2px',
    'luxury-sm': '4px',
    'luxury-md': '6px',
    'luxury-lg': '8px',

    'tech-xs': '4px',
    'tech-sm': '8px',
    'tech-md': '12px',
    'tech-lg': '16px',

    'corporate-xs': '2px',
    'corporate-sm': '4px',
    'corporate-md': '6px',
    'corporate-lg': '8px',

    'elegant-xs': '3px',
    'elegant-sm': '6px',
    'elegant-md': '9px',
    'elegant-lg': '12px',

    'vibrant-xs': '6px',
    'vibrant-sm': '12px',
    'vibrant-md': '18px',
    'vibrant-lg': '24px',

    'industrial-xs': '0px',
    'industrial-sm': '2px',
    'industrial-md': '4px',
    'industrial-lg': '8px',

    'nature-xs': '8px',
    'nature-sm': '16px',
    'nature-md': '24px',
    'nature-lg': '32px',

    'futuristic-xs': '2px',
    'futuristic-sm': '4px',
    'futuristic-md': '8px',
    'futuristic-lg': '16px',

    'classic-xs': '3px',
    'classic-sm': '6px',
    'classic-md': '9px',
    'classic-lg': '12px',

    'geometric-xs': '0px',
    'geometric-sm': '2px',
    'geometric-md': '4px',
    'geometric-lg': '8px',
  },

  boxShadow: {
    // Luxury Minimal
    'luxury-sm': '0 1px 2px rgba(26, 26, 26, 0.05)',
    'luxury-md': '0 4px 6px rgba(26, 26, 26, 0.08)',
    'luxury-lg': '0 8px 16px rgba(26, 26, 26, 0.1)',

    // Modern Tech
    'tech-sm': '0 2px 4px rgba(10, 14, 39, 0.08)',
    'tech-md': '0 4px 12px rgba(10, 14, 39, 0.12)',
    'tech-lg': '0 8px 24px rgba(10, 14, 39, 0.15)',

    // Corporate Professional
    'corporate-sm': '0 1px 3px rgba(30, 58, 95, 0.08)',
    'corporate-md': '0 4px 6px rgba(30, 58, 95, 0.1)',
    'corporate-lg': '0 8px 12px rgba(30, 58, 95, 0.12)',

    // Dark Elegant
    'elegant-sm': '0 2px 8px rgba(0, 0, 0, 0.4)',
    'elegant-md': '0 4px 16px rgba(0, 0, 0, 0.5)',
    'elegant-lg': '0 8px 24px rgba(0, 0, 0, 0.6)',

    // Vibrant Startup
    'vibrant-sm': '0 2px 8px rgba(31, 119, 214, 0.15)',
    'vibrant-md': '0 4px 12px rgba(31, 119, 214, 0.2)',
    'vibrant-lg': '0 8px 24px rgba(31, 119, 214, 0.25)',

    // Industrial Edge
    'industrial-sm': '0 1px 4px rgba(44, 62, 80, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    'industrial-md': '0 2px 8px rgba(44, 62, 80, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    'industrial-lg': '0 4px 12px rgba(44, 62, 80, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',

    // Nature Inspired
    'nature-sm': '0 2px 8px rgba(45, 80, 22, 0.08)',
    'nature-md': '0 4px 12px rgba(45, 80, 22, 0.12)',
    'nature-lg': '0 8px 20px rgba(45, 80, 22, 0.15)',

    // Futuristic Neo
    'futuristic-sm': '0 0 10px rgba(255, 0, 110, 0.3)',
    'futuristic-md': '0 0 20px rgba(255, 0, 110, 0.4)',
    'futuristic-lg': '0 0 30px rgba(255, 0, 110, 0.5)',

    // Classic Elegant
    'classic-sm': '0 2px 8px rgba(74, 28, 28, 0.1)',
    'classic-md': '0 4px 12px rgba(74, 28, 28, 0.12)',
    'classic-lg': '0 8px 20px rgba(74, 28, 28, 0.15)',

    // Bold Geometric
    'geometric-sm': '0 2px 4px rgba(54, 69, 79, 0.1), 0 4px 8px rgba(233, 116, 81, 0.08)',
    'geometric-md': '0 4px 8px rgba(54, 69, 79, 0.12), 0 8px 16px rgba(233, 116, 81, 0.1)',
    'geometric-lg': '0 8px 16px rgba(54, 69, 79, 0.15), 0 12px 24px rgba(233, 116, 81, 0.15)',
  },

  animation: {
    // Luxury Minimal
    'luxury-fade': 'fadeIn 300ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
    'luxury-slide': 'slideUp 300ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
    'luxury-float': 'subtle 6s ease-in-out infinite',

    // Modern Tech
    'tech-slide': 'slideIn 300ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
    'tech-bounce': 'bounceIn 300ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
    'tech-glow': 'glow 2s ease-in-out infinite',

    // Corporate Professional
    'corporate-fade': 'fadeIn 300ms ease-in-out forwards',
    'corporate-slide': 'slideDown 300ms ease-in-out forwards',
    'corporate-pulse': 'pulse 4s ease-in-out infinite',

    // Dark Elegant
    'elegant-fade': 'fadeIn 300ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
    'elegant-glow': 'glowPulse 3s ease-in-out infinite',
    'elegant-neon': 'neon 2s ease-in-out infinite',

    // Vibrant Startup
    'vibrant-bounce': 'bounce 1s ease-out infinite',
    'vibrant-spin': 'spin 2s linear infinite',
    'vibrant-rainbow': 'rainbow 4s linear infinite',

    // Industrial Edge
    'industrial-slide': 'slide 300ms ease-out forwards',
    'industrial-shake': 'shake 600ms ease-in-out',
    'industrial-metal': 'metal 2s ease-in-out infinite',

    // Nature Inspired
    'nature-sway': 'sway 4s ease-in-out infinite',
    'nature-grow': 'grow 300ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
    'nature-flow': 'flow 3s ease-in-out infinite',

    // Futuristic Neo
    'futuristic-glitch': 'glitch 500ms ease-in-out',
    'futuristic-scan': 'scan 2s ease-in-out infinite',
    'futuristic-hologram': 'hologram 3s ease-in-out infinite',

    // Classic Elegant
    'classic-fade': 'fadeInUp 300ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
    'classic-ornamental': 'ornamental 2s ease-in-out infinite',
    'classic-elegant': 'elegant 600ms ease-in-out forwards',

    // Bold Geometric
    'geometric-rotate': 'rotateIn 300ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
    'geometric-skew': 'skew 2s ease-in-out infinite',
    'geometric-shape': 'geometric 3s ease-in-out infinite',
  },

  keyframes: {
    // Shared keyframes
    fadeIn: {
      'from': { opacity: '0' },
      'to': { opacity: '1' },
    },
    slideUp: {
      'from': { transform: 'translateY(20px)', opacity: '0' },
      'to': { transform: 'translateY(0)', opacity: '1' },
    },
    slideDown: {
      'from': { transform: 'translateY(-20px)', opacity: '0' },
      'to': { transform: 'translateY(0)', opacity: '1' },
    },
    slideIn: {
      'from': { transform: 'translateX(-20px)', opacity: '0' },
      'to': { transform: 'translateX(0)', opacity: '1' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    spin: {
      'from': { transform: 'rotate(0deg)' },
      'to': { transform: 'rotate(360deg)' },
    },

    // Luxury Minimal
    subtle: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-4px)' },
    },

    // Modern Tech
    bounceIn: {
      '0%': { transform: 'scale(0.95)', opacity: '0' },
      '50%': { transform: 'scale(1.05)' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
    glow: {
      '0%, 100%': { filter: 'drop-shadow(0 0 4px #00d9ff)' },
      '50%': { filter: 'drop-shadow(0 0 8px #00d9ff)' },
    },

    // Dark Elegant
    glowPulse: {
      '0%, 100%': { boxShadow: '0 0 20px rgba(183, 110, 121, 0.3)' },
      '50%': { boxShadow: '0 0 30px rgba(183, 110, 121, 0.6)' },
    },
    neon: {
      '0%, 100%': { filter: 'drop-shadow(0 0 10px #b76e79)' },
      '50%': { filter: 'drop-shadow(0 0 20px #b76e79)' },
    },

    // Vibrant Startup
    rainbow: {
      '0%': { filter: 'hue-rotate(0deg)' },
      '100%': { filter: 'hue-rotate(360deg)' },
    },

    // Industrial Edge
    slide: {
      'from': { transform: 'translateX(-100%)' },
      'to': { transform: 'translateX(0)' },
    },
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-2px)' },
      '75%': { transform: 'translateX(2px)' },
    },
    metal: {
      '0%, 100%': { filter: 'brightness(1)' },
      '50%': { filter: 'brightness(1.1)' },
    },

    // Nature Inspired
    sway: {
      '0%, 100%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(2deg)' },
    },
    grow: {
      'from': { transform: 'scale(0.8)', opacity: '0' },
      'to': { transform: 'scale(1)', opacity: '1' },
    },
    flow: {
      '0%, 100%': { opacity: '0.5' },
      '50%': { opacity: '1' },
    },

    // Futuristic Neo
    glitch: {
      '0%': { transform: 'translate(0)' },
      '20%': { transform: 'translate(-2px, 2px)' },
      '40%': { transform: 'translate(-2px, -2px)' },
      '60%': { transform: 'translate(2px, 2px)' },
      '80%': { transform: 'translate(2px, -2px)' },
      '100%': { transform: 'translate(0)' },
    },
    scan: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(4px)' },
    },
    hologram: {
      '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 20px #ff006e)' },
      '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 40px #8338ec)' },
    },

    // Classic Elegant
    fadeInUp: {
      'from': { opacity: '0', transform: 'translateY(20px)' },
      'to': { opacity: '1', transform: 'translateY(0)' },
    },
    ornamental: {
      '0%, 100%': { opacity: '0.6' },
      '50%': { opacity: '1' },
    },
    elegant: {
      'from': { transform: 'scaleX(0)' },
      'to': { transform: 'scaleX(1)' },
    },

    // Bold Geometric
    rotateIn: {
      'from': { transform: 'rotate(-20deg)', opacity: '0' },
      'to': { transform: 'rotate(0deg)', opacity: '1' },
    },
    skew: {
      '0%, 100%': { transform: 'skewX(0deg)' },
      '50%': { transform: 'skewX(5deg)' },
    },
    geometric: {
      '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      '50%': { clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)' },
      '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    },
  },

  transitionTimingFunction: {
    'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    'ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  },

  spacing: {
    'luxury': '8px',
    'tech': '8px',
    'corporate': '8px',
    'elegant': '8px',
    'vibrant': '8px',
    'industrial': '8px',
    'nature': '8px',
    'futuristic': '8px',
    'classic': '8px',
    'geometric': '8px',
  },
};

export default tailwindThemeExtension;
