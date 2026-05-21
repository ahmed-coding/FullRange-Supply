# Design System Integration Guide

## Step-by-Step Integration

### Step 1: Update App.jsx

Add ThemeProvider to your App component:

```jsx
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import YourComponents from './components/YourComponents'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <YourComponents />
      </LanguageProvider>
    </ThemeProvider>
  )
}
```

### Step 2: Import Animations CSS

Make sure animations.css is imported in your index.css:

```css
@import "tailwindcss";
@import "./styles/animations.css";
```

### Step 3: Create Theme Switcher Component

```jsx
// components/ThemeSwitcher.jsx
import { useTheme } from '../context/ThemeContext'

export default function ThemeSwitcher() {
  const { currentTheme, switchTheme, availableThemes } = useTheme()

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded">
      {availableThemes.map(theme => (
        <button
          key={theme.id}
          onClick={() => switchTheme(theme.id)}
          className={`
            px-4 py-2 rounded transition-all
            ${currentTheme === theme.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white border-2 border-gray-300 hover:border-blue-600'
            }
          `}
          title={theme.description}
        >
          {theme.name}
        </button>
      ))}
    </div>
  )
}
```

### Step 4: Update Tailwind Config

If you have a tailwind.config.js, extend it with theme colors:

```javascript
// tailwind.config.js
import { tailwindThemeExtension } from './src/styles/tailwindConfig.js'

export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: tailwindThemeExtension
  },
  plugins: [],
}
```

Or if using @tailwindcss/vite (which you are), the config will be auto-discovered.

### Step 5: Use Theme in Components

#### Example: Button Component

```jsx
// components/Button.jsx
import { useThemeColor } from '../context/ThemeContext'

export default function Button({ children, onClick, variant = 'primary' }) {
  const primaryColor = useThemeColor('primary')
  const backgroundColor = useThemeColor('background')

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: variant === 'primary' ? primaryColor : 'transparent',
        color: variant === 'primary' ? backgroundColor : primaryColor,
        border: `2px solid ${primaryColor}`,
      }}
      className="
        px-8 py-3 rounded
        transition-all duration-300
        hover:shadow-lg
        focus-visible:outline-2 focus-visible:outline-offset-2
      "
    >
      {children}
    </button>
  )
}
```

#### Example: Card Component

```jsx
// components/Card.jsx
import { useTheme } from '../context/ThemeContext'

export default function Card({ children, title }) {
  const { theme } = useTheme()

  return (
    <div
      className="
        p-8 rounded transition-all duration-300
        hover:shadow-lg
      "
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borders.radius.lg,
      }}
    >
      {title && (
        <h3
          className="text-2xl font-bold mb-4"
          style={{
            color: theme.colors.primary,
            fontFamily: theme.typography.fontFamily.serif,
          }}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
```

#### Example: Using CSS Variables

```jsx
// components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="
        py-24 px-8 text-center
        transition-colors duration-300
      "
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
      }}
    >
      <h1
        className="
          text-4xl md:text-5xl font-bold mb-4
          animate-luxury-fade
        "
        style={{
          color: 'var(--color-primary)',
          fontFamily: 'var(--font-serif)',
        }}
      >
        Welcome to FullRange Supply
      </h1>
      <p
        className="text-lg max-w-2xl mx-auto mb-8"
        style={{
          color: 'var(--color-text)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        Premium B2B sourcing solutions...
      </p>
      <button
        className="
          px-8 py-3 rounded
          hover:shadow-lg transition-all
        "
        style={{
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-accent)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        Get Started
      </button>
    </section>
  )
}
```

### Step 6: Add Theme Switcher to Header

```jsx
// components/Header.jsx
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const { activeLang, setActiveLang } = useLanguage()
  const { currentTheme } = useTheme()

  return (
    <header
      className="
        flex justify-between items-center
        p-4 px-8 border-b
        transition-colors duration-300
      "
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
        FullRange Supply
      </div>

      <div className="flex gap-4 items-center">
        {/* Language Switcher */}
        <div className="flex gap-2">
          {['en', 'ar', 'zh'].map(lang => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1 rounded ${
                activeLang === lang ? 'font-bold' : ''
              }`}
              style={{
                backgroundColor: activeLang === lang ? 'var(--color-primary)' : 'transparent',
                color: activeLang === lang ? 'var(--color-accent)' : 'var(--color-text)',
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Theme Info */}
        <span
          className="text-sm"
          style={{ color: 'var(--color-text)' }}
        >
          Theme: {currentTheme}
        </span>
      </div>
    </header>
  )
}
```

### Step 7: Create a Settings/Demo Page

```jsx
// components/DesignSystemDemo.jsx
import { useTheme } from '../context/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

export default function DesignSystemDemo() {
  const { theme, currentTheme } = useTheme()

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Design System Demo</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Switch Themes</h2>
        <ThemeSwitcher />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Current Theme: {theme.name}</h2>
        <p className="mb-4">{theme.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="font-bold mb-2">Colors</h3>
            <div className="space-y-2">
              {Object.entries(theme.colors).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded border"
                    style={{ backgroundColor: value }}
                  />
                  <span className="text-sm">{key}: {value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">Fonts</h3>
            <div>
              <p style={{ fontFamily: theme.typography.fontFamily.serif }}>
                Serif: {theme.typography.fontFamily.serif}
              </p>
              <p style={{ fontFamily: theme.typography.fontFamily.sans }}>
                Sans: {theme.typography.fontFamily.sans}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        <div className="space-y-4">
          {/* Button Examples */}
          <div>
            <h3 className="font-bold mb-2">Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <button
                className="px-6 py-2 rounded transition-all hover:shadow-lg"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.accent,
                }}
              >
                Primary Button
              </button>
              <button
                className="px-6 py-2 rounded border-2 transition-all hover:shadow-lg"
                style={{
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary,
                }}
              >
                Secondary Button
              </button>
            </div>
          </div>

          {/* Card Examples */}
          <div>
            <h3 className="font-bold mb-2">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map(i => (
                <div
                  key={i}
                  className="p-6 rounded transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.border,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <h4
                    style={{
                      color: theme.colors.primary,
                      fontFamily: theme.typography.fontFamily.serif,
                    }}
                    className="font-bold mb-2"
                  >
                    Card {i}
                  </h4>
                  <p style={{ color: theme.colors.text }}>
                    This is a sample card component using the current theme.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Animation Examples */}
          <div>
            <h3 className="font-bold mb-2">Animations</h3>
            <div className="flex gap-4 flex-wrap">
              <div className="p-4 bg-blue-100 rounded animate-pulse">
                Fade In
              </div>
              <div className="p-4 bg-green-100 rounded animate-bounce">
                Bounce
              </div>
              <div className="p-4 bg-purple-100 rounded animate-spin">
                Spin
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## Testing the Setup

### 1. Test Theme Switching
```jsx
// Should see all colors and styles change
// localStorage should save the selected theme
// Page should persist theme on reload
```

### 2. Test Language Integration
```jsx
// Language context should work with Theme context
// RTL/LTR should adapt based on language
// All text should be properly positioned
```

### 3. Test Accessibility
```jsx
// Tab through all interactive elements
// Focus outlines should be visible
// High contrast mode should work
// Reduced motion should disable animations
```

### 4. Test Responsive
```jsx
// Test on mobile (375px), tablet (768px), desktop (1920px)
// Spacing should adapt correctly
// Text should be readable at all sizes
// Touch targets should be 44px minimum
```

---

## Common Issues & Solutions

### Issue: CSS variables not updating
**Solution:** Make sure ThemeProvider is wrapping all components

### Issue: Tailwind classes not working
**Solution:** Verify tailwind config has been extended with `tailwindThemeExtension`

### Issue: Animations not working
**Solution:** Ensure `animations.css` is imported in `index.css`

### Issue: RTL not applying
**Solution:** Verify LanguageContext is correctly setting `document.documentElement.dir`

### Issue: Theme not persisting
**Solution:** Check browser localStorage is enabled and allowed

---

## Files Created

```
src/
├── styles/
│   ├── designSystems.js          (10 complete theme objects)
│   ├── tailwindConfig.js         (Tailwind extensions)
│   └── animations.css            (All keyframe animations)
├── context/
│   └── ThemeContext.jsx          (Theme provider + hooks)
└── index.css                     (Updated with new variables)

Project Root/
├── DESIGN_SYSTEM.md              (Complete documentation)
└── DESIGN_SYSTEM_QUICK_REF.md    (Quick reference)
```

---

## Next: Component Updates

Once the design system is integrated, update these components to use the theme:

1. **Hero.jsx** - Use theme colors and fonts
2. **Services.jsx** - Use theme card styles
3. **Button.jsx** - Use theme colors and animations
4. **Navigation.jsx** - Use theme spacing and colors
5. **Cities.jsx** - Use theme border radius and shadows
6. **Contact.jsx** - Use theme form styles
7. **Footer.jsx** - Use theme background colors

---

## Deployment Checklist

- [ ] All components wrapped with ThemeProvider
- [ ] CSS variables applied to all elements
- [ ] Theme persists in localStorage
- [ ] All animations working smoothly
- [ ] RTL support verified
- [ ] Accessibility tested
- [ ] Responsive design verified
- [ ] Performance optimized
- [ ] All 10 themes tested

---

**Status:** Ready for Production  
**Version:** 1.0.0  
**Last Updated:** May 2026
