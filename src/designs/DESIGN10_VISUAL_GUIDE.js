/**
 * DESIGN #10: BOLD GEOMETRIC - VISUAL ARCHITECTURE
 * ==================================================
 *
 * FILE PATH: /home/ahmed/Desktop/amz-company/src/designs/Design10.jsx
 * STATUS: Complete (1015 lines)
 *
 * DESIGN PHILOSOPHY:
 * Modern, artistic, geometric design system
 * Bold, confident, creative aesthetic
 * Artistic supply chain branding
 */

// ============================================
// COLOR PALETTE REFERENCE
// ============================================

const DESIGN10_COLORS = {
  // Primary dark background
  charcoal: '#36454f',           // Deep charcoal gray

  // Bold primary accent
  burntSienna: '#e97451',        // Warm reddish-orange

  // Secondary cool accent
  teal: '#008080',               // Rich teal-blue

  // Tertiary warm accent
  mustard: '#d4a574',            // Sophisticated mustard gold

  // Text colors
  white: '#ffffff',              // Clean white
  lightGray: '#f5f5f5',          // Light background
};

// ============================================
// TYPOGRAPHY SYSTEM
// ============================================

const TYPOGRAPHY = {
  // Headlines
  h1: {
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: '4rem',            // 64px
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '-0.03em',    // Negative tracking for impact
    lineHeight: 1.2,
  },

  // Subheadings
  h2: {
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: '3.5rem',          // 56px
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    lineHeight: 1.3,
  },

  h3: {
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: '2rem',            // 32px
    fontWeight: 900,
    textTransform: 'uppercase',
    lineHeight: 1.4,
  },

  // Body text
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',            // 16px
    fontWeight: 400,
    lineHeight: 1.6,
  },

  // Labels
  label: {
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: '0.875rem',        // 14px
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
};

// ============================================
// GEOMETRIC SHAPES (CSS clip-path values)
// ============================================

const GEOMETRIC_SHAPES = {
  // Button shape - trapezoid
  trapezoid: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)',

  // City card shape - hexagon
  hexagon: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',

  // Icon shape - pentagon
  pentagon: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',

  // Process step - diamond
  diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',

  // Process step - octagon
  octagon: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',

  // Card corner variation - skewed rectangle
  skewedRect: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',

  // Alternative skew
  altSkew: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',

  // Diagonal section - triangle
  diagonalTriangle: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',

  // Circle (for comparison)
  circle: 'circle(50%)',
};

// ============================================
// ANIMATION CONFIGURATION
// ============================================

const ANIMATIONS = {
  // Continuous rotation
  rotate360: {
    animate: { rotate: 360 },
    transition: { duration: 20, repeat: Infinity, ease: 'linear' },
  },

  // Scale pulse
  scalePulse: {
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 3, repeat: Infinity },
  },

  // Floating Y motion
  floatingY: {
    animate: { y: [0, 30, 0] },
    transition: { duration: 4, repeat: Infinity },
  },

  // Hover scale
  hoverScale: {
    whileHover: { scale: 1.05, y: -20 },
  },

  // SVG line drawing
  drawLine: {
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    transition: { duration: 2 },
  },
};

// ============================================
// COMPONENT SECTIONS (8 Total)
// ============================================

/**
 * 1. NAVBAR
 * =========
 * - Fixed position (z-50)
 * - Charcoal background
 * - 4px burnt sienna bottom border
 * - Backdrop blur effect
 * - Logo with hover rotate effect
 * - Navigation buttons with skew on hover
 */

/**
 * 2. HERO SECTION
 * ===============
 * Visual Elements:
 * - Charcoal background
 * - Animated geometric background shapes:
 *   * Skewed rectangle (teal, top-left, 0.15 opacity)
 *   * Triangle (teal, bottom-right, 0.12 opacity)
 *   * Pentagon (mustard, top-middle, 0.1 opacity)
 * - Diagonal dividing line (0.05 opacity)
 *
 * Content Layout (2 columns on desktop):
 * LEFT COLUMN:
 *   - Geometric badge (skewed, diamond icon)
 *   - Main title (4rem, burnt sienna)
 *   - Tagline (burnt sienna, 2.5rem)
 *   - Description (light gray, 1.125rem)
 *   - CTA buttons:
 *     * Trapezoid button (burnt sienna)
 *     * Hexagon button (teal outline)
 *
 * RIGHT COLUMN (hidden on mobile):
 *   - Overlapping geometric illustration:
 *     * Teal circle (top-right)
 *     * Mustard rectangle (rotated -15deg)
 *     * Burnt sienna triangle
 *     * Charcoal skewed rectangle
 */

/**
 * 3. SERVICES SECTION
 * ===================
 * - Light gray background
 * - Diagonal gradient accent (top-left, 0.03 opacity)
 * - Section header:
 *   * Diamond icon (burnt sienna)
 *   * Title (5rem, charcoal)
 *   * Description (teal)
 * - Card grid:
 *   * 3 columns (desktop), 1 column (mobile)
 *   * Overlapping layout (-space-x-8)
 *   * 6 cards total
 *   * Each card features:
 *     - Skewed corner clip-path
 *     - 3px colored border (alternating burnt sienna/teal)
 *     - Circular or diamond icon (rotating on hover)
 *     - Bold title (uppercase)
 *     - Description text
 *     - Animated bottom accent line
 *     - Hover: lift (-20px) and rotate (3deg)
 */

/**
 * 4. ABOUT SECTION
 * ===============
 * - Charcoal background
 * - Geometric accent shape (top-right, skewed, 0.1 opacity)
 * - Header:
 *   * Bold title (3.5rem, burnt sienna)
 *   * Description (mustard, 1.25rem)
 * - Three stat displays (3 columns desktop):
 *   * Different geometric backgrounds:
 *     - Stat 1: Trapezoid clip-path
 *     - Stat 2: Circle
 *     - Stat 3: Diamond
 *   * Large number (01, 02, 03) with scale animation
 *   * Value text (uppercase, white)
 *   * Animated bottom line width: [60px → 100% → 60px]
 */

/**
 * 5. MANUFACTURING CITIES
 * =======================
 * - Light gray background
 * - Diagonal pattern (45deg, charcoal, 0.05 opacity)
 * - Section title (charcoal, 5rem)
 * - Hexagonal card grid:
 *   * 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
 *   * 8 city cards
 *   * Each card:
 *     - Hexagon shape (polygon clip-path)
 *     - Rotating background colors (burnt sienna, teal, mustard, charcoal)
 *     - Emoji icon with rotation animation
 *     - City name (uppercase, white, 2rem)
 *     - Stats text
 *     - Hover: lift (-20px) and rotate (5deg)
 *     - Border accent on hover (hexagon outline)
 */

/**
 * 6. PROCESS SECTION
 * ==================
 * - Charcoal background
 * - Diagonal pattern background (45deg repeating gradient)
 * - Animated SVG connecting lines:
 *   * Teal diagonal (bottom-left to top-right)
 *   * Mustard diagonal (top-left to bottom-right)
 * - Section title (5rem, burnt sienna)
 * - Process steps (4 columns desktop):
 *   * Different geometric backgrounds per step:
 *     - Step 1: Trapezoid
 *     - Step 2: Circle
 *     - Step 3: Diamond
 *     - Step 4: Octagon
 *   * Large number (1, 2, 3, 4) with floating animation
 *   * Title and description
 *   * Arrow connector (→) between steps with motion
 *   * Colors alternate between steps
 *   * Hover: scale (1.1) and rotate (5deg)
 */

/**
 * 7. CONTACT SECTION
 * ==================
 * - Light gray background
 * - Diagonal charcoal section at top (diagonal clip-path)
 * - Header:
 *   * White title (5rem)
 *   * Mustard description
 * - Form layout (2 columns desktop):
 *   LEFT COLUMN:
 *   - Name input (teal border, skewed clip-path)
 *   - Email input (teal border, skewed clip-path)
 *   - Subject input (teal border, skewed clip-path)
 *
 *   RIGHT COLUMN:
 *   - Message textarea (5 rows, burnt sienna border, alt-skewed clip-path)
 * - Submit button:
 *   * Teal background
 *   * Skewed trapezoid clip-path
 *   * Hover: scale (1.05) and rotate (2deg)
 */

/**
 * 8. FOOTER
 * =========
 * - Charcoal background
 * - Diagonal burnt sienna accent at top (0.1 opacity)
 * - Three-column layout:
 *   * Column 1: Brand, tagline
 *   * Column 2: Quick links (uppercase)
 *   * Column 3: Contact info
 * - Gradient divider line (burnt sienna → teal → mustard)
 * - Copyright section:
 *   * Copyright text (teal)
 *   * Design signature (mustard)
 */

// ============================================
// KEY DESIGN CHARACTERISTICS
// ============================================

const DESIGN_TRAITS = {
  // 1. Geometric Emphasis
  // - Shapes used throughout (trapezoid, hexagon, pentagon, diamond, octagon)
  // - CSS clip-path for GPU-accelerated rendering
  // - Overlapping elements with z-index stacking

  // 2. Bold Typography
  // - Archivo Black 900 weight
  // - Uppercase text throughout
  // - Negative letter-spacing
  // - Large font sizes

  // 3. Diagonal Lines & Asymmetry
  // - 45-degree diagonal sections
  // - Skewed clip-path polygons
  // - Asymmetrical layouts
  // - Diagonal connecting lines (SVG)

  // 4. Bold Color Blocks
  // - Solid, confident colors
  // - High contrast combinations
  // - Geometric color sections
  // - Opacity layering for depth

  // 5. Smooth Animations
  // - Framer Motion integration
  // - Continuous subtle motion
  // - Scroll-triggered animations (whileInView)
  // - Interactive hover states

  // 6. Sharp, Angular Design
  // - No border-radius (except circles)
  // - Right angles and sharp corners
  // - Diagonal cuts
  // - Modern, confident aesthetic

  // 7. Artistic Feel
  // - Creative shape combinations
  // - Modern asymmetrical layouts
  // - Confident visual hierarchy
  // - Distinctive branding

  // 8. Overlapping Elements
  // - Negative margins for stacking
  // - Z-index layering
  // - Depth perception through layering
  // - Visual rhythm from stacked elements
};

// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

const RESPONSIVE = {
  // Mobile (< 640px)
  mobile: {
    grid: '1 column',
    navHidden: 'md:hidden',
    hero: 'single column (illustration hidden)',
    services: '1 column',
    about: '1 column',
    cities: '1 column',
    process: '1 column',
    contact: '1 column',
    footer: 'stacked',
  },

  // Tablet (640px - 1024px)
  tablet: {
    grid: '2 columns',
    cities: '2 columns',
  },

  // Desktop (> 1024px)
  desktop: {
    grid: '3-4 columns',
    hero: '2 columns with illustration',
    cities: '4 columns',
    contact: '2 columns',
  },
};

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

const PERFORMANCE = {
  // CSS clip-path: GPU accelerated
  // No expensive calculations in render
  // Framer Motion optimizations:
  // - useMotionTemplate for conditional rendering
  // - whileInView for lazy animations
  // - Hardware acceleration via transform/opacity

  // Bundle size: Minimal (no extra dependencies)
  // Animation performance: 60fps target
  // Lazy rendering: Animations only play when in view
};

// ============================================
// ACCESSIBILITY FEATURES
// ============================================

const A11Y = {
  // Semantic HTML
  // Color contrast: WCAG AA compliant
  // Focus states on all interactive elements
  // Alt text for emojis (via labels)
  // Responsive design supports all breakpoints
  // Clear visual hierarchy
  // Readable typography
  // Skip navigation support via sections
};

// ============================================
// IMPLEMENTATION NOTES
// ============================================

/**
 * To use Design10 in your application:
 *
 * 1. Import the component:
 *    import Design10 from './designs/Design10';
 *
 * 2. Pass content data:
 *    <Design10 content={contentData} />
 *
 * 3. Integrate with language switching:
 *    - Uses useLanguage() hook from context
 *    - Supports t() function for translations
 *    - Works with i18n system
 *
 * 4. Customize colors:
 *    - Edit colors object at top of component
 *    - Color palette is centralized
 *    - Easy to maintain and update
 *
 * 5. Modify animations:
 *    - Edit duration, delay, easing in motion configs
 *    - Framer Motion animations are explicit
 *    - Easy to tweak motion feel
 *
 * 6. Adjust shapes:
 *    - Edit clip-path polygon values
 *    - All shapes are defined in CSS
 *    - No external SVG files needed
 */

export default Design10;
