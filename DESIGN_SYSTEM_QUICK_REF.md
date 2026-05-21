# Design System Quick Reference

## Quick Start

### 1. Wrap Your App with ThemeProvider

```jsx
// App.jsx
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  )
}
```

### 2. Use Theme Hook in Components

```jsx
import { useTheme, useThemeColor } from './context/ThemeContext'

export function Button({ children }) {
  const { theme } = useTheme()
  const primaryColor = useThemeColor('primary')
  
  return (
    <button style={{ color: primaryColor }}>
      {children}
    </button>
  )
}
```

### 3. Switch Themes

```jsx
import { useTheme } from './context/ThemeContext'

export function ThemeSwitcher() {
  const { switchTheme, availableThemes } = useTheme()
  
  return (
    <div>
      {availableThemes.map(theme => (
        <button 
          key={theme.id}
          onClick={() => switchTheme(theme.id)}
        >
          {theme.name}
        </button>
      ))}
    </div>
  )
}
```

---

## Available Themes

| ID | Theme Name | Best For |
|----|-----------|----------|
| `luxury-minimal` | Luxury Minimal | Premium B2B, luxury brands |
| `modern-tech` | Modern Tech | Tech companies, startups |
| `corporate-professional` | Corporate Professional | Enterprise, corporations |
| `dark-elegant` | Dark Elegant | Premium services, luxury |
| `vibrant-startup` | Vibrant Startup | SaaS, creative agencies |
| `industrial-edge` | Industrial Edge | Manufacturing, construction |
| `nature-inspired` | Nature Inspired | Green/eco companies |
| `futuristic-neo` | Futuristic Neo | AI/ML, tech innovators |
| `classic-elegant` | Classic Elegant | Heritage, established brands |
| `bold-geometric` | Bold Geometric | Design studios, creative |

---

## CSS Variables (Available in All Themes)

### Colors
```css
var(--color-primary)           /* Main brand color */
var(--color-secondary)         /* Supporting color */
var(--color-accent)            /* Highlight color */
var(--color-text)              /* Text on light backgrounds */
var(--color-text-light)        /* Text on dark backgrounds */
var(--color-background)        /* Main background */
var(--color-background-dark)   /* Alternative background */
var(--color-border)            /* Border color */
var(--color-success)           /* Success/positive state */
var(--color-warning)           /* Warning state */
var(--color-error)             /* Error/danger state */
```

### Typography
```css
var(--font-serif)              /* Serif font family */
var(--font-sans)               /* Sans-serif font family */
```

### Spacing & Sizing
```css
var(--spacing-unit)            /* 8px - base unit */
var(--radius-xs)               /* Extra small radius */
var(--radius-sm)               /* Small radius */
var(--radius-md)               /* Medium radius */
var(--radius-lg)               /* Large radius */
var(--radius-xl)               /* Extra large radius */
```

### Shadows
```css
var(--shadow-sm)               /* Subtle shadow */
var(--shadow-md)               /* Medium shadow */
var(--shadow-lg)               /* Large shadow */
var(--shadow-xl)               /* Extra large shadow */
```

### Animation
```css
var(--animation-duration-fast) /* 150ms */
var(--animation-duration-base) /* 300ms */
var(--animation-duration-slow) /* 500ms */
var(--animation-easing)        /* Theme-specific easing */
```

---

## Tailwind Classes by Theme

### Luxury Minimal
```jsx
className="
  text-luxury-h1
  font-serif-luxury
  text-luxury-gold
  rounded-luxury-md
  shadow-luxury-lg
  animate-luxury-fade
"
```

### Modern Tech
```jsx
className="
  text-tech-h1
  font-sans-tech
  text-tech-cyan
  rounded-tech-lg
  shadow-tech-md
  animate-tech-bounce
"
```

### Corporate Professional
```jsx
className="
  text-corporate-h1
  font-sans-corporate
  text-corporate-blue
  rounded-corporate-md
  shadow-corporate-md
  animate-corporate-fade
"
```

### Dark Elegant
```jsx
className="
  text-elegant-h1
  font-serif-elegant
  text-elegant-rose
  rounded-elegant-md
  shadow-elegant-lg
  animate-elegant-glow
"
```

### Vibrant Startup
```jsx
className="
  text-vibrant-h1
  font-sans-vibrant
  text-vibrant-blue
  rounded-vibrant-sm
  shadow-vibrant-lg
  animate-vibrant-bounce
"
```

### Industrial Edge
```jsx
className="
  text-industrial-h1
  font-sans-industrial
  text-industrial-rust
  rounded-industrial-md
  shadow-industrial-md
  animate-industrial-shake
"
```

### Nature Inspired
```jsx
className="
  text-nature-h1
  font-sans-nature
  text-nature-green
  rounded-nature-lg
  shadow-nature-md
  animate-nature-sway
"
```

### Futuristic Neo
```jsx
className="
  text-futuristic-h1
  font-mono-futuristic
  text-futuristic-pink
  rounded-futuristic-md
  shadow-futuristic-lg
  animate-futuristic-glitch
"
```

### Classic Elegant
```jsx
className="
  text-classic-h1
  font-serif-classic
  text-classic-gold
  rounded-classic-md
  shadow-classic-md
  animate-classic-fade
"
```

### Bold Geometric
```jsx
className="
  text-geometric-h1
  font-sans-geometric
  text-geometric-sienna
  rounded-geometric-md
  shadow-geometric-lg
  animate-geometric-rotate
"
```

---

## Component Examples

### Button (All Themes)
```jsx
<button className="
  px-8 py-3
  bg-[var(--color-primary)]
  text-[var(--color-accent)]
  rounded-[var(--radius-lg)]
  shadow-[var(--shadow-md)]
  hover:shadow-[var(--shadow-lg)]
  transition-all
  duration-[var(--animation-duration-base)]
">
  Click Me
</button>
```

### Card (All Themes)
```jsx
<div className="
  p-8
  border border-[var(--color-border)]
  rounded-[var(--radius-lg)]
  bg-[var(--color-background)]
  shadow-[var(--shadow-md)]
  hover:shadow-[var(--shadow-lg)]
  transition-all
  duration-[var(--animation-duration-base)]
">
  Card Content
</div>
```

### Form Input (All Themes)
```jsx
<input
  type="text"
  className="
    w-full
    px-4 py-3
    border-2
    border-[var(--color-border)]
    rounded-[var(--radius-md)]
    text-[var(--color-text)]
    placeholder:text-gray-400
    focus:border-[var(--color-primary)]
    focus:outline-none
    focus:ring-2
    focus:ring-[var(--color-primary)]/20
    transition-all
    duration-[var(--animation-duration-base)]
  "
  placeholder="Enter text..."
/>
```

---

## Available Animations

### Quick List
```
animate-luxury-fade
animate-luxury-slide
animate-luxury-float

animate-tech-slide
animate-tech-bounce
animate-tech-glow

animate-corporate-fade
animate-corporate-slide
animate-corporate-pulse

animate-elegant-fade
animate-elegant-glow
animate-elegant-neon

animate-vibrant-bounce
animate-vibrant-spin
animate-vibrant-rainbow

animate-industrial-slide
animate-industrial-shake
animate-industrial-metal

animate-nature-sway
animate-nature-grow
animate-nature-flow

animate-futuristic-glitch
animate-futuristic-scan
animate-futuristic-hologram

animate-classic-fade
animate-classic-ornamental
animate-classic-elegant

animate-geometric-rotate
animate-geometric-skew
animate-geometric-shape
```

---

## Type Scale (All Themes)

```
H1:  3.5rem (56px)   - Page titles, hero headlines
H2:  2.75rem (44px)  - Section titles
H3:  2rem (32px)     - Subsection titles, cards
H4:  1.5rem (24px)   - Category labels
Body: 1rem (16px)    - Main content
Caption: 0.875rem (14px) - Helper text, labels
```

---

## Spacing Scale (8px Grid)

```
0px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 160px, 192px, 224px, 256px
```

In Tailwind: `0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px), 24 (96px)...`

---

## Responsive Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

---

## Color Hex Codes

### Luxury Minimal
- Primary: #c9a961
- Secondary: #1a1a1a
- Accent: #f5f3ef

### Modern Tech
- Primary: #00d9ff
- Secondary: #0a0e27
- Accent: #ffffff

### Corporate Professional
- Primary: #1e3a5f
- Secondary: #546e7a
- Accent: #ffffff

### Dark Elegant
- Primary: #b76e79
- Secondary: #2d1b4e
- Accent: #0f0f0f

### Vibrant Startup
- Primary: #1f77d6
- Secondary: #ff6b35
- Accent: #39ff14

### Industrial Edge
- Primary: #c0392b
- Secondary: #2c3e50
- Accent: #95a5a6

### Nature Inspired
- Primary: #2d5016
- Secondary: #8b6f47
- Accent: #a8b8a0

### Futuristic Neo
- Primary: #ff006e
- Secondary: #8338ec
- Accent: #0a0e27

### Classic Elegant
- Primary: #d4af37
- Secondary: #4a1c1c
- Accent: #faf7f2

### Bold Geometric
- Primary: #e97451
- Secondary: #36454f
- Accent: #008080

---

## Utility Hooks

### `useTheme()`
```jsx
const { 
  currentTheme,      // Current theme ID
  switchTheme,       // Function to change theme
  theme,             // Current theme object
  availableThemes,   // All available themes
  getThemeProperty,  // Get nested property
  themeLoaded        // Is theme loaded?
} = useTheme()
```

### `useThemeColor(colorKey)`
```jsx
const primaryColor = useThemeColor('primary')  // Returns hex code
```

### `useThemeSpacing(scale)`
```jsx
const spacing = useThemeSpacing(2)  // Returns 16px (2 * 8px)
```

---

## Accessibility Features

- **Keyboard Navigation:** All interactive elements focusable with outline
- **Prefers Reduced Motion:** Respects system preference, disables animations
- **Touch Targets:** 44x44px minimum on mobile
- **Focus Visible:** Clear focus outline on all interactive elements
- **Color Contrast:** 4.5:1 WCAG AA compliant (or better)

---

## RTL Support

Automatically applied based on language:

```jsx
// English
<html dir="ltr" lang="en">

// Arabic
<html dir="rtl" lang="ar">

// Chinese
<html dir="ltr" lang="zh">
```

---

## Performance Tips

1. Use CSS variables for dynamic values
2. Minimize animation complexity
3. Use `transform` and `opacity` for animations (GPU accelerated)
4. Lazy load images and non-critical resources
5. Test on actual devices, not just browsers

---

## File Locations

```
src/
├── styles/
│   ├── designSystems.js      ← 10 theme objects
│   ├── tailwindConfig.js     ← Tailwind extensions
│   └── animations.css        ← All keyframes
├── context/
│   └── ThemeContext.jsx      ← Theme provider + hooks
└── index.css                 ← Global styles + variables
```

---

## Next Steps

1. **Import animations.css** in your main CSS file ✓
2. **Wrap app with ThemeProvider** ✓
3. **Use useTheme() hook** in components ✓
4. **Apply theme classes** to elements ✓
5. **Test theme switching** ✓
6. **Verify RTL/LTR** support ✓

---

## Support & Documentation

See **DESIGN_SYSTEM.md** for:
- Complete design specifications
- Component guidelines
- Best practices
- Customization guide
- Resources and references

---

**Last Updated:** May 2026  
**Version:** 1.0.0  
**All 10 Themes:** Ready to Use
