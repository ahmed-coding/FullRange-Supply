# Design #6: Industrial Edge - Visual Design Guide

## Design Philosophy

Design #6 embodies the aesthetic of industrial manufacturing: **raw, powerful, reliable, and no-nonsense**. Every design decision prioritizes strength, clarity, and functional beauty over decoration.

---

## Visual Elements Breakdown

### 1. BORDERS & STRUCTURE

#### Heavy Border System
```
Primary Sections: border-8 (8px solid black)
├── Hero section
├── Service cards
├── About corner accents
├── Contact form wrapper
└── Section dividers

Secondary Elements: border-4 (4px solid)
├── Service card icons
├── About content boxes
├── Process step numbers
├── Form inputs
└── City cards dividers
```

#### Border Colors
- **Structural**: Pure black (#000000)
- **Accent**: Rust orange (#c0392b) for emphasis
- **Subtle**: Gun metal gray (#2c3e50) for hierarchy

### 2. METAL TEXTURE EFFECT

**Application Pattern**
```css
repeating-linear-gradient(
  90deg,
  #1a1a1a,
  #1a1a1a 2px,
  #222 2px,
  #222 4px
)
```

**Used On**
- Hero background overlay (opacity: 0.1)
- About section overlay (opacity: 0.05)
- Process section overlay (opacity: 0.05)
- Footer overlay (opacity: 0.05)

**Effect**: Subtle metallic sheen that appears on hover, simulating industrial metal finishes

### 3. COLOR BLOCKING

#### Color Zones
```
Dark Sections (#1a1a1a, #000):
  ├── Hero: Dark background with black border
  ├── About: Dark with metal texture overlay
  ├── Process: Dark with vertical timeline
  └── Footer: Black with rust top border

Light Sections (#ecf0f1, #fff):
  ├── Services: Light gray with black borders
  ├── Cities: Light with white cards
  └── Contact: Light with form container

Accent Color: Rust Orange (#c0392b)
  ├── Headings
  ├── CTA buttons
  ├── Icons & highlights
  └── Hover states
```

---

## Section-by-Section Visual Breakdown

### HERO SECTION

**Visual Hierarchy**
```
┌─────────────────────────────┐
│  8px Black Border (Full)    │
│                             │
│     ┌──────────────────┐   │
│     │ Rust Orange Box  │   │
│     │  (Badge Area)    │   │
│     └──────────────────┘   │
│                             │
│    BOLD INDUSTRIAL TITLE    │
│      (4rem, weight 800)     │
│                             │
│  RUST ORANGE TAGLINE LINE   │
│     (Heavy, Uppercase)      │
│                             │
│   Gray Body Description     │
│    (Supporting text)        │
│                             │
│  ┌──────────┐ ┌──────────┐ │
│  │ Button 1 │ │ Button 2 │ │
│  │ Outlined │ │  Filled  │ │
│  └──────────┘ └──────────┘ │
│                             │
│        ⌄ Scroll ⌄           │
└─────────────────────────────┘
```

**Button Styling**
- Primary: Rust orange outline (4px) + transparent fill
- Secondary: Rust orange filled (solid) with white text
- Hover: Scale 1.05 + glow shadow effect
- No rounded corners (sharp edges)

### SERVICES SECTION

**Grid Layout (3 columns)**
```
┌────────────────────────────────────────┐
│ LIGHT GRAY BACKGROUND (#ecf0f1)        │
│                                        │
│  ┌──────────┐ ┌──────────┐ ┌────────┐│
│  │ Card 1   │ │ Card 2   │ │ Card 3 ││
│  │ 8px Blk  │ │ 8px Blk  │ │ 8px Blk││
│  │ Border   │ │ Border   │ │ Border ││
│  │          │ │          │ │        ││
│  │  [ICON]  │ │  [ICON]  │ │ [ICON] ││
│  │ Rust Box │ │ Rust Box │ │ Rust   ││
│  │          │ │          │ │ Box    ││
│  │ TITLE    │ │ TITLE    │ │ TITLE  ││
│  │          │ │          │ │        ││
│  │ · Item 1 │ │ · Item 1 │ │· Item1 ││
│  │ · Item 2 │ │ · Item 2 │ │· Item2 ││
│  │ · Item 3 │ │ · Item 3 │ │· Item3 ││
│  │          │ │          │ │        ││
│  └──────────┘ └──────────┘ └────────┘│
│                                        │
└────────────────────────────────────────┘
```

**Card Elements**
- Icon: 16x16px with 4px rust border in 32x32px container
- Title: Heavy black, uppercase
- Items: Rust vertical line on left (4px), text on right

### ABOUT SECTION

**Two-Column Layout**
```
┌─────────────────────────────────────┐
│ DARK BACKGROUND (#1a1a1a)           │
│                                     │
│  LEFT              │      RIGHT     │
│  ─────────────────────────────────  │
│                    │                │
│  RUST ORANGE       │  ┌──────────┐ │
│  HEADING           │  │ Box 1    │ │
│                    │  │ 4px Rust │ │
│  Stats Grid:       │  │ Border   │ │
│  ┌───┐ ┌───┐       │  │ #2c3e50  │ │
│  │   │ │   │       │  │          │ │
│  │◯15│ │◯50│ Rust  │  │ TITLE    │ │
│  │   │ │   │ Border│  │ Description
│  └───┘ └───┘       │  └──────────┘ │
│  Text  Text        │                │
│                    │  ┌──────────┐ │
│  ┌───┐ ┌───┐       │  │ Box 2    │ │
│  │   │ │   │       │  │ 4px Rust │ │
│  │◯99│ │◯50│       │  │ Border   │ │
│  │   │ │   │       │  │ #2c3e50  │ │
│  └───┘ └───┘       │  │          │ │
│  Text  Text        │  │ TITLE    │ │
│                    │  │ Description
│                    │  └──────────┘ │
│                    │                │
│  Corner Design:    │  ┌──────────┐ │
│  ┌─────────────┐   │  │ Box 3    │ │
│  │           └─┼───┘  │ 4px Rust │ │
│  │             │      │ Border   │ │
└──┼─────────────┘      │ #2c3e50  │ │
   │                    │          │ │
   │                    │ TITLE    │ │
   │                    │ Description
   │                    │          │ │
   │                    └──────────┘ │
   └────────────────────────────────┘
```

**Stat Circles**
- 32x32px circular borders (4px rust)
- Large numbers (2.25rem, weight 800)
- Rust orange color
- Labels below in concrete gray

### CITIES SECTION

**Card Grid (3 columns)**
```
┌──────────────────────────────┐
│ LIGHT GRAY (#ecf0f1)         │
│                              │
│  ┌──────────┐                │
│  │ Card     │ 8px Border     │
│  │ (White)  │ (Black)        │
│  │          │                │
│  │ CITY     │ Rust Orange    │
│  │ REGION   │ Text           │
│  │ ──────── │ Black Divider  │
│  │          │ (2px)          │
│  │ ■ Facility 1              │
│  │ ■ Facility 2              │
│  │ ■ Facility 3              │
│  │ ■ in Rust                 │
│  └──────────┘ Hover: Lift    │
│               up (-8px Y)    │
│               Shadow glow    │
└──────────────────────────────┘
```

**Card Interactivity**
- Hover: Translate Y-8px
- Hover: Shadow "0 20px 40px rgba(0,0,0,0.3)"
- Smooth transitions (300ms)

### PROCESS SECTION

**Timeline Vertical Design**
```
┌─────────────────────────────┐
│ DARK BACKGROUND (#1a1a1a)   │
│                             │
│  ┌─────────────────────┐    │
│  │ Step 1 (LEFT)       │ ┌──│
│  │ 4px Rust Border     │ │  │
│  │ Content...          │ │  │
│  └─────────────────────┘ │  │
│                         ┌──│─│
│                         │ ◯1│ Center
│                         │  │ Rust Line
│          ┌──────────────┘  │ (2px Vert)
│          │                 │
│  ┌───────┴──────────────┐  │
│  │ Step 2 (RIGHT)       │  │
│  │ 4px Rust Border      │──│
│  │ Content...           │  │
│  └──────────────────────┘  │
│                            │
│          ┌──────┐          │
│          │ ◯ 2  │──────┐   │
│          └──────┘      │   │
│                        │   │
│  ┌────────────────────┐│   │
│  │ Step 3 (LEFT)      ││   │
│  │ 4px Rust Border    ││──│
│  │ Content...         ││  │
│  └────────────────────┘│  │
│                        │  │
│                        ──│─
└─────────────────────────────┘
```

**Step Numbers**
- 20x20px squares (not circles)
- 4px rust orange borders
- Centered number (weight 800, rust orange)
- Numbered: 1, 2, 3, 4, 5...

### CONTACT SECTION

**Form Layout**
```
┌─────────────────────────────┐
│ LIGHT BACKGROUND (#ecf0f1)  │
│                             │
│  8px BLACK BORDER TOP       │
│                             │
│  ┌───────────────────────┐  │
│  │ HEADING (Uppercase)   │  │
│  │ Subtext               │  │
│  └───────────────────────┘  │
│                             │
│  ┌─────────────┬─────────┐  │
│  │ Name Field  │ Email   │  │
│  │ 4px Black   │ 4px Blk │  │
│  │ Border      │ Border  │  │
│  │ Focus→Rust  │ F→Rust  │  │
│  └─────────────┴─────────┘  │
│                             │
│  ┌─────────────────────────┐│
│  │ Message Area            ││
│  │ 4px Black Border        ││
│  │ Focus: Border Rust      ││
│  │ (6 rows)                ││
│  │                         ││
│  │                         ││
│  └─────────────────────────┘│
│                             │
│  ┌─────────────────────────┐│
│  │ SEND MESSAGE BUTTON     ││
│  │ Full Width              ││
│  │ 4px Rust Border         ││
│  │ Rust Fill + White Text  ││
│  │ Hover: Glow Effect      ││
│  └─────────────────────────┘│
│                             │
│  8px BLACK BORDER BOTTOM    │
└─────────────────────────────┘
```

**Form Inputs**
- All 4px black borders
- Focus state: Border changes to rust orange
- No background change on focus
- Light gray placeholder text

### FOOTER

**Structure**
```
┌─────────────────────────────────────┐
│ BLACK BACKGROUND (#000000)          │
│ 8px RUST TOP BORDER                 │
│                                     │
│  Metal Texture Overlay (5% opacity) │
│                                     │
│  [LOGO]  │  [LINKS]  │  [CONTACT]  │
│  ────────┼───────────┼─────────────│
│  AMZ.    │ Services  │ +1-800...   │
│  Rust    │ About     │ info@...    │
│  Orange  │ Cities    │             │
│          │ Process   │             │
│                                     │
│  ─────────────────────────────────  │
│  2px Rust Divider Line              │
│                                     │
│  Copyright Text (Concrete Color)   │
│  Center Aligned, Heavy Font         │
│                                     │
└─────────────────────────────────────┘
```

---

## Typography Examples

### Heading Examples
```
H1 (4rem, weight 800, uppercase):
   INDUSTRIAL EDGE

H2 (3rem, weight 700, uppercase):
   OUR SERVICES

H3 (2rem, weight 700, uppercase):
   MANUFACTURING CITIES

H4 (1.5rem, weight 600, uppercase):
   STEP ONE

Body (1rem, weight 500):
   This is body text with supporting information.

Caption (0.875rem, weight 600, uppercase):
   SUPPORTING TEXT
```

### Font Stack
```css
font-family: 'Work Sans', 'Courier New', monospace;
```

---

## Color Application Matrix

| Element | Color | Use Case |
|---------|-------|----------|
| Main Heading | #ecf0f1 (white) | Hero section |
| Section Title | #000000 (black) | Light sections |
| Section Title | #c0392b (rust) | Dark sections |
| Body Text | #34495e (dark gray) | Light sections |
| Body Text | #95a5a6 (concrete) | Dark sections |
| Borders | #000000 (black) | Major structure |
| Borders | #c0392b (rust) | Emphasis |
| Backgrounds | #1a1a1a (very dark) | Hero/About/Process/Footer |
| Backgrounds | #ecf0f1 (light gray) | Services/Cities/Contact |
| Cards | #ffffff (white) | On light sections |
| Accents | #c0392b (rust) | CTAs, highlights |

---

## Animation Sequences

### Hero Entrance
```
Time 0ms: Hero content opacity 0, Y+40px
Time 800ms: Fade in, slide up
Time 200ms delay: Badge fades in
```

### Service Cards
```
Time 0ms: All cards opacity 0, Y+20px
Time staggered: Each card fades in with 120ms delay
Hover: Scale 1.05, shadow appears
```

### Process Timeline
```
Time 0ms: Steps alternate sides (L/R)
Initial: Opacity 0, X±40px (depending on side)
Staggered: Each step animates 100ms apart
```

---

## Hover States

### Button Hover
```
Scale: 1.02 → 1.05
Box Shadow: 0 0 30px rgba(192, 57, 43, 0.5)
Border: Maintains rust orange with glow
Transition: 300ms ease
```

### Card Hover
```
Transform: translateY(-8px)
Box Shadow: 0 20px 40px rgba(0,0,0,0.3)
Metal Texture: Opacity increases slightly
Transition: 300ms ease
```

### Input Focus
```
Border Color: #000 → #c0392b (rust)
Box Shadow: Subtle inset or outline
Transition: 200ms ease
Outline: None (uses border color change)
```

---

## Responsive Typography

### Desktop (>1024px)
- H1: 4rem (64px)
- H2: 3rem (48px)
- H3: 2rem (32px)
- Body: 1rem (16px)

### Tablet (768px - 1024px)
- H1: 3.5rem (56px)
- H2: 2.5rem (40px)
- H3: 1.75rem (28px)
- Body: 0.95rem (15px)

### Mobile (<768px)
- H1: 3rem (48px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)
- Body: 0.9rem (14px)

---

## Spacing Scale

**8px Base Unit (Tailwind-like)**
```
py-8  = 32px vertical padding
px-6  = 24px horizontal padding
gap-6 = 24px gap between items
gap-8 = 32px gap between sections
mb-6  = 24px margin bottom
mb-12 = 48px margin bottom
mb-16 = 64px margin bottom
```

---

## Border Reference

### Heavy Structural Borders
```
border-8 border-black = 8px solid black
Common on: Major sections, form containers
```

### Medium Emphasis Borders
```
border-4 border-[#c0392b] = 4px solid rust orange
Common on: Cards, input fields, icon boxes
```

### Light Dividers
```
border-l-4 border-[#c0392b] = 4px left border
Common on: Item lists, nested content
```

---

## Shadow Effects

### Hover Glow (On Buttons)
```
boxShadow: '0 0 30px rgba(192, 57, 43, 0.5)'
Effect: Red/orange glow around element
```

### Card Elevation (On Hover)
```
boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
Effect: Deep shadow beneath element
```

---

## Design Principles Applied

1. **Heavy Visual Weight** → Thick borders, bold typography
2. **Industrial Authenticity** → Metal textures, structural design
3. **No-Nonsense** → Sharp corners, minimal decoration
4. **Strong Contrast** → Black/orange/white color scheme
5. **Functional Beauty** → Form follows content
6. **Reliability** → Consistent spacing and alignment
7. **Raw Power** → Heavy shadows, bold colors

---

## End of Visual Design Guide

This guide should help visualize all design elements and how they work together to create a cohesive, industrial aesthetic that communicates strength, reliability, and expertise.
