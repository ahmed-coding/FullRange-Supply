/**
 * Component Styles Module
 * Provides theme-aware Tailwind classes for all components
 * Supports all 10 design themes
 */

// Theme color palettes
export const themeColors = {
  luxuryMinimal: {
    name: 'Luxury Minimal',
    primary: '#c9a961',
    secondary: '#1a1a1a',
    accent: '#f5f3ef',
    text: '#1a1a1a',
    textLight: '#666666',
    border: '#e0e0e0',
    bg: '#ffffff',
    bgAlt: '#f5f3ef',
  },
  modernTech: {
    name: 'Modern Tech',
    primary: '#00d9ff',
    secondary: '#0a0e27',
    accent: '#ffffff',
    text: '#0a0e27',
    textLight: '#666666',
    border: '#e0e0e0',
    bg: '#ffffff',
    bgAlt: '#f5f7fa',
  },
  corporateProfessional: {
    name: 'Corporate Professional',
    primary: '#1e3a5f',
    secondary: '#546e7a',
    accent: '#ffffff',
    text: '#1e3a5f',
    textLight: '#546e7a',
    border: '#d0d8e0',
    bg: '#ffffff',
    bgAlt: '#f5f7fa',
  },
  darkElegant: {
    name: 'Dark Elegant',
    primary: '#b76e79',
    secondary: '#0f0f0f',
    accent: '#2d1b4e',
    text: '#ffffff',
    textLight: '#b0b0b0',
    border: '#3a3a3a',
    bg: '#1a1a1a',
    bgAlt: '#2d2d2d',
  },
  vibrantStartup: {
    name: 'Vibrant Startup',
    primary: '#1f77d6',
    secondary: '#ff6b35',
    accent: '#39ff14',
    text: '#ffffff',
    textLight: '#e0e0e0',
    border: '#ff6b35',
    bg: '#0a0a0a',
    bgAlt: '#1a1a1a',
  },
  industrialEdge: {
    name: 'Industrial Edge',
    primary: '#2c3e50',
    secondary: '#c0392b',
    accent: '#95a5a6',
    text: '#2c3e50',
    textLight: '#7f8c8d',
    border: '#34495e',
    bg: '#ecf0f1',
    bgAlt: '#d5dbdb',
  },
  natureInspired: {
    name: 'Nature Inspired',
    primary: '#2d5016',
    secondary: '#8b6f47',
    accent: '#a8b8a0',
    text: '#2d5016',
    textLight: '#7a8870',
    border: '#c5d5b0',
    bg: '#f5f8f3',
    bgAlt: '#e8f0e5',
  },
  futuristicNeo: {
    name: 'Futuristic Neo',
    primary: '#ff006e',
    secondary: '#0a0e27',
    accent: '#8338ec',
    text: '#ffffff',
    textLight: '#b0b0b0',
    border: '#ff006e',
    bg: '#0a0e27',
    bgAlt: '#1a1a2e',
  },
  classicElegant: {
    name: 'Classic Elegant',
    primary: '#d4af37',
    secondary: '#4a1c1c',
    accent: '#faf7f2',
    text: '#4a1c1c',
    textLight: '#8b7355',
    border: '#d4af37',
    bg: '#faf7f2',
    bgAlt: '#f0ede8',
  },
  boldGeometric: {
    name: 'Bold Geometric',
    primary: '#e97451',
    secondary: '#36454f',
    accent: '#008080',
    text: '#36454f',
    textLight: '#7a8a8a',
    border: '#e97451',
    bg: '#f5f5f5',
    bgAlt: '#ebebeb',
  },
};

// Button styles for each theme
export const buttonStyles = {
  luxuryMinimal: {
    primary: 'bg-transparent border-2 border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#1a1a1a] transition-all duration-300',
    secondary: 'bg-[#c9a961] text-[#1a1a1a] hover:bg-[#d4af37] transition-all duration-300',
    tertiary: 'border border-[#e0e0e0] text-[#1a1a1a] hover:border-[#c9a961] hover:text-[#c9a961]',
  },
  modernTech: {
    primary: 'bg-gradient-to-r from-[#00d9ff] to-[#0099cc] text-[#0a0e27] hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300',
    secondary: 'bg-[#0a0e27] border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff] hover:text-[#0a0e27]',
    tertiary: 'border border-slate-400 text-slate-600 hover:border-[#00d9ff] hover:text-[#00d9ff]',
  },
  corporateProfessional: {
    primary: 'bg-[#1e3a5f] text-white hover:bg-[#2d5a8c] transition-colors duration-300',
    secondary: 'border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white',
    tertiary: 'border border-[#546e7a] text-[#546e7a] hover:bg-[#546e7a] hover:text-white',
  },
  darkElegant: {
    primary: 'bg-transparent border-2 border-[#b76e79] text-[#b76e79] hover:bg-[#b76e79] hover:text-white hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300',
    secondary: 'bg-[#b76e79] text-white hover:bg-[#d4a5ae] transition-all duration-300',
    tertiary: 'border border-[#3a3a3a] text-[#b0b0b0] hover:border-[#b76e79] hover:text-[#b76e79]',
  },
  vibrantStartup: {
    primary: 'bg-gradient-to-r from-[#1f77d6] to-[#ff6b35] text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300',
    secondary: 'bg-[#ff6b35] text-white hover:bg-[#ff8555] transition-all duration-300',
    tertiary: 'border-2 border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14] hover:text-[#000000]',
  },
  industrialEdge: {
    primary: 'bg-[#2c3e50] border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-all duration-300',
    secondary: 'bg-[#c0392b] text-white hover:bg-[#e74c3c] transition-all duration-300',
    tertiary: 'border-2 border-[#2c3e50] text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white',
  },
  natureInspired: {
    primary: 'bg-[#2d5016] text-white hover:bg-[#3d6b1f] transition-all duration-300',
    secondary: 'border-2 border-[#2d5016] text-[#2d5016] hover:bg-[#2d5016] hover:text-white',
    tertiary: 'border border-[#a8b8a0] text-[#7a8870] hover:border-[#2d5016] hover:text-[#2d5016]',
  },
  futuristicNeo: {
    primary: 'bg-[#ff006e] text-white hover:shadow-lg hover:shadow-pink-500/50 hover:border-2 hover:border-[#ff006e] transition-all duration-300',
    secondary: 'border-2 border-[#8338ec] text-[#8338ec] hover:bg-[#8338ec] hover:text-white',
    tertiary: 'border border-[#ff006e] text-[#ff006e] hover:bg-[#ff006e] hover:text-white',
  },
  classicElegant: {
    primary: 'bg-[#d4af37] text-[#4a1c1c] hover:bg-[#e5c76b] transition-all duration-300 font-semibold',
    secondary: 'border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#4a1c1c]',
    tertiary: 'border border-[#8b7355] text-[#8b7355] hover:border-[#d4af37] hover:text-[#d4af37]',
  },
  boldGeometric: {
    primary: 'bg-[#e97451] text-white hover:bg-[#f59469] transition-all duration-300 clip-path-polygon',
    secondary: 'border-2 border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white',
    tertiary: 'border border-[#36454f] text-[#36454f] hover:border-[#e97451] hover:text-[#e97451]',
  },
};

// Card styles for each theme
export const cardStyles = {
  luxuryMinimal: {
    default: 'bg-white border border-[#e0e0e0] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300',
    elevated: 'bg-[#f5f3ef] border border-[#c9a961]/20 rounded-lg shadow-lg',
    gradient: 'bg-gradient-to-br from-white to-[#f5f3ef] border border-[#c9a961]/10 rounded-lg',
  },
  modernTech: {
    default: 'bg-white/10 backdrop-blur border border-[#00d9ff]/20 rounded-lg hover:border-[#00d9ff]/50 transition-all duration-300',
    elevated: 'bg-white/20 backdrop-blur border border-[#00d9ff]/40 rounded-lg shadow-xl shadow-cyan-500/10',
    gradient: 'bg-gradient-to-br from-[#00d9ff]/10 to-transparent border border-[#00d9ff]/20 rounded-lg',
  },
  corporateProfessional: {
    default: 'bg-white border border-[#d0d8e0] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
    elevated: 'bg-[#f5f7fa] border border-[#1e3a5f]/20 rounded-lg shadow-xl',
    gradient: 'bg-gradient-to-br from-white to-[#f5f7fa] border border-[#1e3a5f]/10',
  },
  darkElegant: {
    default: 'bg-[#2d2d2d] border border-[#b76e79]/20 rounded-lg hover:border-[#b76e79]/50 transition-all duration-300',
    elevated: 'bg-[#1a1a1a] border border-[#b76e79]/40 rounded-lg shadow-xl shadow-rose-500/10',
    gradient: 'bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-[#b76e79]/20',
  },
  vibrantStartup: {
    default: 'bg-[#1a1a1a] border-2 border-[#ff6b35] rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300',
    elevated: 'bg-[#1a1a1a] border-2 border-[#1f77d6] rounded-lg shadow-xl shadow-blue-500/30',
    gradient: 'bg-gradient-to-br from-[#1f77d6]/10 to-[#ff6b35]/10 border-2 border-[#39ff14]/30',
  },
  industrialEdge: {
    default: 'bg-[#ecf0f1] border-2 border-[#34495e] rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300',
    elevated: 'bg-[#d5dbdb] border-2 border-[#2c3e50] rounded-sm shadow-xl',
    gradient: 'bg-gradient-to-br from-[#ecf0f1] to-[#d5dbdb] border-2 border-[#c0392b]/20',
  },
  natureInspired: {
    default: 'bg-white border border-[#c5d5b0] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300',
    elevated: 'bg-[#f5f8f3] border border-[#2d5016]/20 rounded-2xl shadow-lg',
    gradient: 'bg-gradient-to-br from-[#f5f8f3] to-white border border-[#a8b8a0] rounded-2xl',
  },
  futuristicNeo: {
    default: 'bg-[#1a1a2e]/80 backdrop-blur border border-[#ff006e]/40 rounded-lg hover:border-[#ff006e]/100 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20',
    elevated: 'bg-[#1a1a2e] border border-[#8338ec]/60 rounded-lg shadow-xl shadow-purple-500/30',
    gradient: 'bg-gradient-to-br from-[#ff006e]/10 via-[#8338ec]/5 to-transparent border border-[#ff006e]/20 rounded-lg',
  },
  classicElegant: {
    default: 'bg-[#faf7f2] border border-[#d4af37] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
    elevated: 'bg-white border-2 border-[#d4af37] rounded-lg shadow-xl',
    gradient: 'bg-gradient-to-br from-white to-[#faf7f2] border border-[#d4af37]/50',
  },
  boldGeometric: {
    default: 'bg-white border-2 border-[#e97451] clip-path-polygon hover:shadow-lg transition-shadow duration-300',
    elevated: 'bg-[#f5f5f5] border-3 border-[#008080] clip-path-polygon shadow-xl',
    gradient: 'bg-gradient-to-br from-[#e97451]/5 to-[#008080]/5 border-2 border-[#e97451] clip-path-polygon',
  },
};

// Form input styles
export const formStyles = {
  luxuryMinimal: {
    input: 'w-full px-4 py-3 bg-white border border-[#e0e0e0] text-[#1a1a1a] rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961]/30 transition-all duration-300',
    label: 'block text-sm font-medium text-[#1a1a1a] mb-2',
    error: 'border-red-500 focus:ring-red-500/30',
  },
  modernTech: {
    input: 'w-full px-4 py-3 bg-white/10 backdrop-blur border border-[#00d9ff]/20 text-white rounded-lg focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 placeholder-slate-400 transition-all duration-300',
    label: 'block text-sm font-medium text-white mb-2',
    error: 'border-red-500 focus:ring-red-500/50',
  },
  corporateProfessional: {
    input: 'w-full px-4 py-3 bg-white border border-[#d0d8e0] text-[#1e3a5f] rounded-lg focus:outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 transition-all duration-300',
    label: 'block text-sm font-medium text-[#1e3a5f] mb-2',
    error: 'border-red-500 focus:ring-red-500/20',
  },
  darkElegant: {
    input: 'w-full px-4 py-3 bg-[#2d2d2d] border border-[#b76e79]/30 text-white rounded-lg focus:outline-none focus:border-[#b76e79] focus:ring-2 focus:ring-[#b76e79]/20 placeholder-slate-400 transition-all duration-300',
    label: 'block text-sm font-medium text-white mb-2',
    error: 'border-red-500 focus:ring-red-500/30',
  },
  vibrantStartup: {
    input: 'w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#ff6b35] text-white rounded-lg focus:outline-none focus:border-[#1f77d6] focus:ring-2 focus:ring-[#1f77d6]/30 placeholder-slate-400 transition-all duration-300',
    label: 'block text-sm font-medium text-white mb-2',
    error: 'border-[#39ff14] focus:ring-[#39ff14]/50',
  },
  industrialEdge: {
    input: 'w-full px-4 py-3 bg-[#ecf0f1] border-2 border-[#34495e] text-[#2c3e50] rounded-sm focus:outline-none focus:border-[#c0392b] focus:ring-2 focus:ring-[#c0392b]/30 transition-all duration-300',
    label: 'block text-sm font-medium text-[#2c3e50] mb-2 font-bold',
    error: 'border-[#c0392b] focus:ring-[#c0392b]/50',
  },
  natureInspired: {
    input: 'w-full px-4 py-3 bg-white border border-[#c5d5b0] text-[#2d5016] rounded-2xl focus:outline-none focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/20 transition-all duration-300',
    label: 'block text-sm font-medium text-[#2d5016] mb-2',
    error: 'border-red-500 focus:ring-red-500/20',
  },
  futuristicNeo: {
    input: 'w-full px-4 py-3 bg-[#1a1a2e]/60 backdrop-blur border border-[#ff006e]/40 text-white rounded-lg focus:outline-none focus:border-[#ff006e] focus:ring-2 focus:ring-[#ff006e]/40 placeholder-slate-400 transition-all duration-300 hover:border-[#ff006e]/60',
    label: 'block text-sm font-medium text-white mb-2 uppercase tracking-wide',
    error: 'border-[#ff006e] focus:ring-[#ff006e]/60',
  },
  classicElegant: {
    input: 'w-full px-4 py-3 bg-[#faf7f2] border border-[#d4af37] text-[#4a1c1c] rounded-lg focus:outline-none focus:border-[#4a1c1c] focus:ring-2 focus:ring-[#d4af37]/30 transition-all duration-300',
    label: 'block text-sm font-medium text-[#4a1c1c] mb-2 font-semibold',
    error: 'border-red-500 focus:ring-red-500/20',
  },
  boldGeometric: {
    input: 'w-full px-4 py-3 bg-white border-2 border-[#e97451] text-[#36454f] rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#e97451]/30 clip-path-polygon transition-all duration-300',
    label: 'block text-sm font-medium text-[#36454f] mb-2 font-bold',
    error: 'border-red-500 focus:ring-red-500/30',
  },
};

// Badge/Pill styles
export const badgeStyles = {
  luxuryMinimal: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a961]/10 border border-[#c9a961]/20 text-[#c9a961]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a961] text-[#1a1a1a]',
  },
  modernTech: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff] text-[#0a0e27]',
  },
  corporateProfessional: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e3a5f]/10 border border-[#1e3a5f]/30 text-[#1e3a5f]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e3a5f] text-white',
  },
  darkElegant: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b76e79]/10 border border-[#b76e79]/30 text-[#b76e79]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b76e79] text-white',
  },
  vibrantStartup: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f77d6]/20 border-2 border-[#1f77d6] text-[#1f77d6]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1f77d6] to-[#ff6b35] text-white',
  },
  industrialEdge: {
    default: 'inline-flex items-center gap-2 px-3 py-2 rounded-sm bg-[#c0392b]/10 border-2 border-[#c0392b] text-[#c0392b]',
    solid: 'inline-flex items-center gap-2 px-3 py-2 rounded-sm bg-[#c0392b] text-white',
  },
  natureInspired: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d5016]/10 border border-[#a8b8a0] text-[#2d5016]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d5016] text-white',
  },
  futuristicNeo: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff006e]/20 border border-[#ff006e]/60 text-[#ff006e]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff006e] text-white',
  },
  classicElegant: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37] text-[#d4af37]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37] text-[#4a1c1c]',
  },
  boldGeometric: {
    default: 'inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#e97451]/10 border-2 border-[#e97451] text-[#e97451]',
    solid: 'inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#e97451] text-white',
  },
};

// Section background styles
export const sectionStyles = {
  luxuryMinimal: {
    bg: 'bg-white',
    bgAlt: 'bg-[#f5f3ef]',
    text: 'text-[#1a1a1a]',
  },
  modernTech: {
    bg: 'bg-white',
    bgAlt: 'bg-[#f5f7fa]',
    text: 'text-slate-900',
  },
  corporateProfessional: {
    bg: 'bg-white',
    bgAlt: 'bg-[#f5f7fa]',
    text: 'text-[#1e3a5f]',
  },
  darkElegant: {
    bg: 'bg-[#0f0f0f]',
    bgAlt: 'bg-[#1a1a1a]',
    text: 'text-white',
  },
  vibrantStartup: {
    bg: 'bg-[#0a0a0a]',
    bgAlt: 'bg-[#1a1a1a]',
    text: 'text-white',
  },
  industrialEdge: {
    bg: 'bg-[#ecf0f1]',
    bgAlt: 'bg-[#d5dbdb]',
    text: 'text-[#2c3e50]',
  },
  natureInspired: {
    bg: 'bg-[#f5f8f3]',
    bgAlt: 'bg-white',
    text: 'text-[#2d5016]',
  },
  futuristicNeo: {
    bg: 'bg-[#0a0e27]',
    bgAlt: 'bg-[#1a1a2e]',
    text: 'text-white',
  },
  classicElegant: {
    bg: 'bg-[#faf7f2]',
    bgAlt: 'bg-white',
    text: 'text-[#4a1c1c]',
  },
  boldGeometric: {
    bg: 'bg-[#f5f5f5]',
    bgAlt: 'bg-white',
    text: 'text-[#36454f]',
  },
};

// Typography styles
export const typographyStyles = {
  luxuryMinimal: {
    heading: 'font-serif tracking-wide text-[#1a1a1a]',
    body: 'font-sans text-[#666666]',
    accent: 'text-[#c9a961]',
  },
  modernTech: {
    heading: 'font-sans font-bold tracking-tight text-slate-900',
    body: 'font-sans text-slate-700',
    accent: 'text-[#00d9ff]',
  },
  corporateProfessional: {
    heading: 'font-sans font-bold tracking-normal text-[#1e3a5f]',
    body: 'font-sans text-[#546e7a]',
    accent: 'text-[#1e3a5f]',
  },
  darkElegant: {
    heading: 'font-serif tracking-wide text-white',
    body: 'font-sans text-[#b0b0b0]',
    accent: 'text-[#b76e79]',
  },
  vibrantStartup: {
    heading: 'font-sans font-bold tracking-tight text-white',
    body: 'font-sans text-[#e0e0e0]',
    accent: 'text-[#1f77d6]',
  },
  industrialEdge: {
    heading: 'font-sans font-bold tracking-wide text-[#2c3e50]',
    body: 'font-sans font-bold text-[#7f8c8d]',
    accent: 'text-[#c0392b]',
  },
  natureInspired: {
    heading: 'font-sans font-bold tracking-normal text-[#2d5016]',
    body: 'font-sans text-[#7a8870]',
    accent: 'text-[#8b6f47]',
  },
  futuristicNeo: {
    heading: 'font-mono font-bold tracking-widest text-white',
    body: 'font-sans text-[#b0b0b0]',
    accent: 'text-[#ff006e]',
  },
  classicElegant: {
    heading: 'font-serif tracking-wide text-[#4a1c1c]',
    body: 'font-serif text-[#8b7355]',
    accent: 'text-[#d4af37]',
  },
  boldGeometric: {
    heading: 'font-sans font-black tracking-tight text-[#36454f]',
    body: 'font-sans text-[#7a8a8a]',
    accent: 'text-[#e97451]',
  },
};

// Helper function to get all styles for a theme
export const getThemeStyles = (themeName) => {
  const normalizedName = themeName?.toLowerCase().replace(/\s+/g, '') || 'luxuryminimal';

  const themeMap = {
    luxuryminimal: 'luxuryMinimal',
    moderntech: 'modernTech',
    corporateprofessional: 'corporateProfessional',
    darkelegant: 'darkElegant',
    vibrantstartup: 'vibrantStartup',
    industrialedge: 'industrialEdge',
    natureinspired: 'natureInspired',
    futuristicneo: 'futuristicNeo',
    classicelegant: 'classicElegant',
    boldgeometric: 'boldGeometric',
  };

  const key = themeMap[normalizedName] || 'luxuryMinimal';

  return {
    colors: themeColors[key],
    buttons: buttonStyles[key],
    cards: cardStyles[key],
    forms: formStyles[key],
    badges: badgeStyles[key],
    sections: sectionStyles[key],
    typography: typographyStyles[key],
  };
};

export default {
  themeColors,
  buttonStyles,
  cardStyles,
  formStyles,
  badgeStyles,
  sectionStyles,
  typographyStyles,
  getThemeStyles,
};
