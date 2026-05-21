/**
 * DESIGN #10: BOLD GEOMETRIC
 * ===========================
 * A modern, artistic geometric design system for FullRange Supply website
 *
 * AESTHETIC: Modern, Artistic, Geometric, Bold, Confident
 * VIBE: Creative, artistic, confident, professional with artistic flair
 *
 * COLOR PALETTE
 * =============
 * - Charcoal (#36454f): Primary dark background, text
 * - Burnt Sienna (#e97451): Bold accent, primary CTA, highlights
 * - Teal (#008080): Secondary accent, geometric elements
 * - Mustard (#d4a574): Tertiary accent, warm contrast
 * - White (#ffffff): Text on dark backgrounds
 * - Light Gray (#f5f5f5): Secondary background
 */

// DESIGN SYSTEM FEATURES
// =======================

/**
 * 1. GEOMETRIC SHAPES THROUGHOUT
 * ==============================
 * Implemented via CSS clip-path and transforms:
 *
 * - Trapezoid: clip-path: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)'
 * - Hexagon: clip-path: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
 * - Pentagon: clip-path: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
 * - Diamond: clip-path: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
 * - Triangle: CSS border trick for sharp geometric forms
 * - Octagon: clip-path: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
 *
 * Custom clip-path for skewed rectangles: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)'
 */

/**
 * 2. BOLD TYPOGRAPHY
 * ==================
 * Font: Archivo Black (font-weight: 900)
 * - Headlines: 3.5rem - 5rem, uppercase, tight tracking
 * - Subheadings: 2rem - 2.5rem, uppercase, bold
 * - Body text: 1rem - 1.25rem, regular weight
 *
 * Letter-spacing: -0.03em for headlines (negative tracking for impact)
 * Text-transform: uppercase throughout for boldness
 * Font-family: "'Archivo Black', sans-serif" for maximum impact
 */

/**
 * 3. DIAGONAL LINES & ASYMMETRICAL LAYOUT
 * =======================================
 * - Transform: rotate(-15deg), skewX(-10deg) on elements
 * - SVG animated lines at 45-degree angles
 * - Diagonal background clips: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)'
 * - Skewed borders and containers
 * - Overlapping elements with negative margins and z-index stacking
 */

/**
 * 4. OVERLAPPING & LAYERING
 * ==========================
 * Achieved through:
 * - Negative margins: -space-x-8 on card grid
 * - Z-index stacking: zIndex increased based on card position
 * - Absolute positioning for background shapes
 * - Overlapping geometric shapes in hero illustration
 * - Framer Motion animations for depth perception
 */

/**
 * 5. BOLD COLOR BLOCKS
 * ====================
 * Large geometric shapes filled with solid, confident colors:
 * - Full-width diagonal sections
 * - Overlapping rectangles and circles
 * - Contrasting color combinations:
 *   - Charcoal + Burnt Sienna (dark + warm)
 *   - Teal + Mustard (cool + warm)
 * - Opacity variations (0.6 - 0.8) for depth
 */

/**
 * 6. GEOMETRIC ANIMATIONS
 * =======================
 * Framer Motion animations:
 * - rotate: 360deg continuous rotation
 * - scale: [1, 1.1, 1] pulsing effect
 * - y: [0, 30, 0] floating motion
 * - skewX: transform skew on hover
 * - pathLength: SVG line drawing animations
 * - whileHover: scale, rotate, y transforms on interaction
 *
 * Durations: 3s - 25s for smooth, confident motion
 * Delays: Staggered animations for cascade effect
 */

/**
 * 7. SHARP, ANGULAR DESIGN
 * ========================
 * No border-radius on main elements:
 * - Buttons: clip-path instead of rounded corners
 * - Cards: sharp corners via clip-path
 * - Containers: right angles and diagonal cuts
 * - Only circles used for specific geometric elements
 * - All transitions are sharp and angular
 */

/**
 * COMPONENT BREAKDOWN
 * ===================
 */

/**
 * NAVBAR
 * ------
 * - Charcoal background with burnt sienna bottom border (4px)
 * - Geometric text with bold Archivo Black
 * - Hover states with color change and skew transform
 * - Sticky positioning with z-50
 */

/**
 * HERO SECTION
 * -----------
 * - Charcoal background
 * - Animated geometric background shapes:
 *   - Skewed rectangle (teal, top-left)
 *   - Triangle (bottom-right)
 *   - Pentagon (top-middle)
 * - Two-column layout:
 *   LEFT: Bold title, tagline, description, geometric CTA buttons
 *   RIGHT: Overlapping geometric shapes illustration
 * - Trapezoid and hexagon CTA buttons with geometric shapes
 * - Diagonal dividing line background
 */

/**
 * SERVICES SECTION
 * ---------------
 * - Light gray background
 * - Geometric badge with diamond shape (icon)
 * - Overlapping card grid (-space-x-8 for overlap effect)
 * - Cards with:
 *   - Skewed top-right corner (polygon clip-path)
 *   - 3px colored borders (burnt sienna or teal alternating)
 *   - Circular or diamond-shaped icon containers
 *   - Hover: lift effect (y: -20) and rotate
 * - Accent line animation on bottom
 * - 6 service cards displayed in 3-column grid
 */

/**
 * ABOUT SECTION
 * ---------------
 * - Charcoal background
 * - Geometric accent shape (top-right)
 * - Bold burnt sienna title
 * - Three stat displays with:
 *   - Animated background geometric shapes (different per stat)
 *   - Large numbered badges (01, 02, 03)
 *   - Value text (uppercase, bold)
 *   - Animated bottom accent line
 *   - Hover states with scale and lift
 */

/**
 * MANUFACTURING CITIES
 * -------------------
 * - Light gray background
 * - Hexagonal card layout (8 cities)
 * - Each card:
 *   - Hexagon clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)
 *   - Colored background (rotating through 4 colors)
 *   - Emoji icon with hover animation
 *   - City name (uppercase, bold)
 *   - Stats text
 * - Hover effects: lift (-20px y), rotate (5deg)
 * - Outer hexagon border accent on hover
 */

/**
 * PROCESS SECTION
 * ---------------
 * - Charcoal background
 * - Diagonal pattern background (repeating-linear-gradient 45deg)
 * - Animated SVG connecting lines (teal and mustard)
 * - Four process steps with:
 *   - Different geometric backgrounds (square, circle, diamond, octagon)
 *   - Large numbered badge (1-4)
 *   - Step title and description
 *   - Hover: scale (1.1) and rotate (5deg)
 * - Arrow connectors between steps
 * - Colors alternate for visual rhythm
 */

/**
 * CONTACT SECTION
 * ---------------
 * - Light gray background
 * - Diagonal charcoal section at top
 * - Form with:
 *   - Left column: Name, Email, Subject inputs
 *   - Right column: Message textarea
 *   - All fields with geometric clip-path (skewed corners)
 *   - Different border colors (teal for inputs, burnt sienna for textarea)
 * - Geometric form layout with clip-path skewing
 * - Large geometric CTA button with animation
 */

/**
 * FOOTER
 * ------
 * - Charcoal background
 * - Diagonal accent section at top (burnt sienna)
 * - Three-column layout:
 *   - Brand/description
 *   - Quick links
 *   - Contact info
 * - Gradient divider line (burnt sienna -> teal -> mustard)
 * - Copyright text with design signature
 * - All text in uppercase with bold weights
 */

/**
 * IMPLEMENTATION NOTES
 * ====================
 *
 * 1. FRAMER MOTION INTEGRATION
 *    - Smooth animations on scroll and hover
 *    - Staggered animations for cascade effect
 *    - Continuous subtle animations (rotation, floating)
 *    - whileInView for scroll-triggered animations
 *
 * 2. RESPONSIVE DESIGN
 *    - Mobile: Full-width, stacked layouts
 *    - Tablet: 2-column grids
 *    - Desktop: 3-4 column grids
 *    - Hidden elements on mobile (hero illustration)
 *
 * 3. ACCESSIBILITY
 *    - All buttons have meaningful labels
 *    - Color contrast: meets WCAG standards
 *    - Focus states on interactive elements
 *    - Semantic HTML structure
 *
 * 4. PERFORMANCE
 *    - CSS clip-path for shapes (GPU accelerated)
 *    - Optimized SVG animations
 *    - Lazy animations with whileInView
 *    - No excessive repaints or layout shifts
 *
 * 5. CUSTOMIZATION POINTS
 *    - Color palette at top of component
 *    - Font sizes in comment blocks
 *    - Animation durations and delays
 *    - Clip-path polygon values for shapes
 *    - Grid layouts (cols, gaps)
 *
 * USAGE IN APP
 * ============
 * To use Design10 in your app:
 *
 * 1. Import: import Design10 from './designs/Design10';
 * 2. Use in App.jsx or as a theme option
 * 3. Pass content data as prop: <Design10 content={content} />
 * 4. Integrate with ThemeContext for switching designs
 *
 * BROWSER SUPPORT
 * ===============
 * - Chrome/Edge: Full support (clip-path, CSS Grid, Grid Gap)
 * - Firefox: Full support
 * - Safari: Full support (iOS 14+)
 * - Mobile: Responsive, tested on common breakpoints
 *
 * NO EXTERNAL DEPENDENCIES (except Framer Motion & React)
 * ========================================================
 * - Pure CSS for shapes (clip-path, borders, gradients)
 * - Framer Motion for animations
 * - SVG for line elements
 * - No additional icon libraries needed (emoji used)
 */
