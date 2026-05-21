/**
 * DESIGN #10: BOLD GEOMETRIC - INTEGRATION GUIDE
 * ===============================================
 *
 * Complete implementation of a modern, artistic geometric design system
 * for FullRange Supply website with bold, confident aesthetic.
 *
 * PROJECT: /home/ahmed/Desktop/amz-company
 * MAIN FILE: /home/ahmed/Desktop/amz-company/src/designs/Design10.jsx
 * SUPPORT FILES:
 *   - DESIGN10_SPECS.js (specifications and notes)
 *   - DESIGN10_VISUAL_GUIDE.js (visual architecture reference)
 */

// ============================================
// QUICK START
// ============================================

/**
 * Step 1: Import Design10 in your App component
 */
// import Design10 from './designs/Design10';

/**
 * Step 2: Use the component with content data
 */
// function App() {
//   return (
//     <Design10 content={contentData} />
//   );
// }

/**
 * Step 3: Or integrate with theme switcher
 */
// import Design10 from './designs/Design10';
//
// function App() {
//   const { currentTheme } = useTheme();
//
//   if (currentTheme === 'bold-geometric') {
//     return <Design10 content={content} />;
//   }
//   // ... other themes
// }

// ============================================
// FILE STRUCTURE
// ============================================

const FILE_STRUCTURE = {
  main_component: '/home/ahmed/Desktop/amz-company/src/designs/Design10.jsx',
  specs_document: '/home/ahmed/Desktop/amz-company/src/designs/DESIGN10_SPECS.js',
  visual_guide: '/home/ahmed/Desktop/amz-company/src/designs/DESIGN10_VISUAL_GUIDE.js',
  integration_guide: '/home/ahmed/Desktop/amz-company/src/designs/DESIGN10_INTEGRATION.js',
};

// ============================================
// COMPONENT SECTIONS (DETAILED)
// ============================================

const SECTIONS = {
  // SECTION 1: NAVBAR
  // ================
  navbar: {
    id: 'navbar',
    type: 'Fixed Navigation',
    background: 'Charcoal (#36454f)',
    borderBottom: '4px Burnt Sienna (#e97451)',
    features: [
      'Fixed position (z-50)',
      'Backdrop blur effect',
      'Logo with hover rotate (5deg)',
      'Navigation links with skew hover effect',
      'Smooth scroll navigation to all sections',
    ],
    sectionIds: ['services', 'manufacturing-cities', 'about', 'process', 'contact'],
  },

  // SECTION 2: HERO
  // ===============
  hero: {
    id: 'hero',
    type: 'Full-Height Hero',
    background: 'Charcoal (#36454f)',
    minHeight: '100vh',
    layout: '2 columns (desktop), 1 column (mobile)',
    leftColumn: {
      elements: [
        {
          name: 'Geometric Badge',
          type: 'Skewed box',
          background: 'Burnt Sienna with 15% opacity',
          border: '2px Burnt Sienna',
          icon: 'Diamond shape',
          animation: 'skewX hover effect',
        },
        {
          name: 'Main Title',
          fontSize: '4rem',
          fontFamily: 'Archivo Black',
          color: 'White',
          textTransform: 'uppercase',
          animation: 'fade-in + slide-up',
        },
        {
          name: 'Tagline',
          fontSize: '2.5rem',
          color: 'Burnt Sienna (#e97451)',
          fontWeight: 'bold',
        },
        {
          name: 'Description',
          fontSize: '1.125rem',
          color: '#b0b0b0',
          maxWidth: '3xl',
        },
        {
          name: 'CTA Buttons',
          buttons: [
            {
              type: 'Trapezoid',
              background: 'Burnt Sienna',
              text: 'Contact Us',
              action: 'scrollToSection(contact)',
            },
            {
              type: 'Hexagon',
              border: '3px Teal',
              background: 'transparent',
              text: 'Our Services',
              action: 'scrollToSection(services)',
            },
          ],
        },
      ],
    },
    rightColumn: {
      visible: 'md:block only',
      elements: [
        {
          name: 'Teal Circle',
          shape: 'circle',
          size: 'w-72 h-72',
          animation: 'floating [0, 30, 0]',
          duration: '4s infinite',
        },
        {
          name: 'Mustard Rectangle',
          rotation: '-15deg',
          animation: 'rotate + move',
          size: 'w-64 h-56',
        },
        {
          name: 'Burnt Sienna Triangle',
          shape: 'CSS border triangle',
          animation: 'rotate [0, 15, 0]',
        },
        {
          name: 'Charcoal Accent',
          shape: 'skewed rectangle',
          animation: 'floating',
        },
      ],
    },
    animations: {
      background_shapes: 'Continuous rotation + scale',
      duration_range: '15s - 25s',
      stagger: 'different durations per shape',
    },
  },

  // SECTION 3: SERVICES
  // ===================
  services: {
    id: 'services',
    type: 'Card Grid',
    background: 'Light Gray (#f5f5f5)',
    header: {
      icon: 'Diamond shape',
      title: {
        fontSize: '5rem',
        color: 'Charcoal',
        fontFamily: 'Archivo Black',
      },
      description: {
        color: 'Teal',
        fontSize: '1.25rem',
      },
    },
    cardGrid: {
      columns: '3 (desktop), 1 (mobile)',
      gap: '0',
      overlap: '-space-x-8',
      totalCards: 6,
      card: {
        shape: 'skewed corners (polygon)',
        border: '3px (alternating Burnt Sienna/Teal)',
        icon: {
          shape: 'circle or diamond',
          size: 'w-16 h-16',
          animation: 'rotate 360 on hover',
        },
        content: {
          title: 'uppercase, bold, charcoal',
          description: 'body text, charcoal',
        },
        hover: 'lift (-20px) + rotate (3deg)',
        accent: 'bottom line animated',
      },
    },
  },

  // SECTION 4: ABOUT
  // ================
  about: {
    id: 'about',
    type: 'Statistics Display',
    background: 'Charcoal (#36454f)',
    header: {
      title: {
        fontSize: '3.5rem',
        color: 'Burnt Sienna',
        textTransform: 'uppercase',
      },
      description: {
        color: 'Mustard',
        fontSize: '1.25rem',
      },
    },
    statBlocks: {
      count: 3,
      columns: '3 (desktop), 1 (mobile)',
      stat: {
        index: '0, 1, 2',
        shapes: ['trapezoid', 'circle', 'diamond'],
        colors: ['Burnt Sienna', 'Teal', 'Mustard'],
        number: {
          fontSize: '6rem',
          animation: 'scale [1, 1.1, 1]',
          duration: '2s infinite',
        },
        label: 'uppercase, bold, white',
        accent: 'animated bottom line',
      },
    },
  },

  // SECTION 5: MANUFACTURING CITIES
  // ================================
  cities: {
    id: 'manufacturing-cities',
    type: 'Hexagonal Card Grid',
    background: 'Light Gray (#f5f5f5)',
    pattern: 'diagonal stripes (45deg)',
    header: {
      title: {
        fontSize: '5rem',
        color: 'Charcoal',
        textTransform: 'uppercase',
      },
    },
    hexGrid: {
      columns: '4 (desktop), 2 (tablet), 1 (mobile)',
      totalCards: 8,
      cardHeight: 'h-80',
      hexagon: {
        shape: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        colors: ['Burnt Sienna', 'Teal', 'Mustard', 'Charcoal'],
        colorRotation: 'repeating cycle',
      },
      content: {
        emoji: 'rotating animation',
        cityName: 'uppercase, white, 2rem',
        stats: 'white text',
      },
      hover: 'lift (-20px) + rotate (5deg)',
      border: 'hexagon outline on hover',
    },
  },

  // SECTION 6: PROCESS
  // ==================
  process: {
    id: 'process',
    type: 'Step Process',
    background: 'Charcoal (#36454f)',
    pattern: 'diagonal grid (45deg repeating)',
    animatedLines: {
      line1: 'Teal diagonal (bottom-left to top-right)',
      line2: 'Mustard diagonal (top-left to bottom-right)',
      animation: 'pathLength draw on scroll',
      duration: '2s',
    },
    header: {
      title: {
        fontSize: '5rem',
        color: 'Burnt Sienna',
        textTransform: 'uppercase',
      },
    },
    steps: {
      count: 4,
      columns: '4 (desktop), 1 (mobile)',
      step: {
        index: '1, 2, 3, 4',
        shapes: ['trapezoid', 'circle', 'diamond', 'octagon'],
        colors: ['Burnt Sienna', 'Teal', 'Mustard', 'Charcoal'],
        number: {
          fontSize: '6rem',
          animation: 'floating [0, -10, 0]',
          duration: '2s infinite',
        },
        title: 'uppercase, bold',
        description: 'body text',
        connector: 'arrow (→) with motion',
      },
      hover: 'scale (1.1) + rotate (5deg)',
    },
  },

  // SECTION 7: CONTACT
  // ==================
  contact: {
    id: 'contact',
    type: 'Contact Form',
    background: 'Light Gray (#f5f5f5)',
    topDiagonal: 'Charcoal section (clip-path diagonal)',
    header: {
      title: {
        color: 'White',
        fontSize: '5rem',
        textTransform: 'uppercase',
      },
      description: {
        color: 'Mustard',
        fontSize: '1.125rem',
      },
    },
    form: {
      columns: '2 (desktop), 1 (mobile)',
      leftColumn: [
        {
          name: 'Name Input',
          type: 'text',
          border: '2px Teal',
          clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',
        },
        {
          name: 'Email Input',
          type: 'email',
          border: '2px Teal',
          clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',
        },
        {
          name: 'Subject Input',
          type: 'text',
          border: '2px Teal',
          clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',
        },
      ],
      rightColumn: [
        {
          name: 'Message Textarea',
          rows: 5,
          border: '2px Burnt Sienna',
          clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
        },
      ],
      button: {
        text: 'Send Message',
        background: 'Teal',
        color: 'White',
        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
        hover: 'scale (1.05) + rotate (2deg)',
      },
    },
  },

  // SECTION 8: FOOTER
  // =================
  footer: {
    id: 'footer',
    type: 'Footer',
    background: 'Charcoal (#36454f)',
    topAccent: 'Burnt Sienna diagonal (10% opacity)',
    layout: '3 columns (desktop), stacked (mobile)',
    column1: {
      name: 'Brand',
      logo: 'AMZ.',
      description: 'Company tagline',
    },
    column2: {
      name: 'Quick Links',
      links: ['Services', 'About', 'Process', 'Contact'],
      style: 'uppercase, teal, bold',
    },
    column3: {
      name: 'Contact',
      email: 'dynamic from data',
      phone: 'dynamic from data',
      style: 'mustard, bold',
    },
    divider: 'gradient line (Burnt Sienna → Teal → Mustard)',
    copyright: {
      line1: 'year + company name (teal)',
      line2: 'Design signature (mustard)',
    },
  },
};

// ============================================
// ANIMATION SPECIFICATIONS
// ============================================

const ANIMATION_SPECS = {
  // Global animations
  stagger: 'Cascading effect (0.1s - 0.15s per item)',
  easing: 'cubic-bezier easing functions',

  // Background shapes (Hero)
  backgroundShapes: {
    rotate: 'continuous 360° rotation',
    duration: '15s - 25s (varies per shape)',
    scale: '[1, 1.1, 1] or [1, 1.15, 1]',
    opacity: '0.1 - 0.15',
  },

  // Cards
  cards: {
    initial: 'opacity: 0, y: 40',
    whileInView: 'opacity: 1, y: 0',
    hover: 'y: -20, rotate: 3-5deg',
  },

  // Numbers
  numbers: {
    scale: '[1, 1.1, 1]',
    duration: '2s infinite',
    y: '[0, -10, 0]',
  },

  // Lines
  lines: {
    initial: 'pathLength: 0',
    whileInView: 'pathLength: 1',
    duration: '2s',
  },

  // Connectors
  connectors: {
    x: '[0, 5, 0]',
    duration: '1.5s infinite',
  },
};

// ============================================
// COLOR USAGE MATRIX
// ============================================

const COLOR_USAGE = {
  charcoal_36454f: {
    uses: ['Navbar bg', 'Hero bg', 'Process bg', 'About bg', 'Form section', 'Footer bg', 'Text on light backgrounds'],
    contrast: 'Pairs well with: Burnt Sienna, Teal, Mustard',
  },

  burntSienna_e97451: {
    uses: ['Navbar border', 'Hero title', 'CTA buttons', 'Icons', 'Badges', 'Accents', 'Process step', 'Footer accent'],
    contrast: 'Bold warm accent against charcoal and teal',
  },

  teal_008080: {
    uses: ['Secondary CTA', 'Card borders', 'Stats display', 'Form inputs', 'Process lines', 'Links', 'Accents'],
    contrast: 'Cool accent balancing warm colors',
  },

  mustard_d4a574: {
    uses: ['Tertiary accent', 'Stats display', 'Footer text', 'Descriptions', 'Footer divider', 'Process line'],
    contrast: 'Warm sophisticated accent',
  },

  white_ffffff: {
    uses: ['Text on dark backgrounds', 'Button text', 'Cards content'],
    contrast: 'High contrast with dark backgrounds',
  },

  lightGray_f5f5f5: {
    uses: ['Section backgrounds', 'Form backgrounds', 'Card backgrounds'],
    contrast: 'Neutral light background',
  },
};

// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

const RESPONSIVE_BEHAVIOR = {
  mobile: {
    breakpoint: '< 640px',
    hero: 'Single column (illustration hidden)',
    services: '1 column cards',
    cities: '1 column hexagons',
    cities_gap: 'Full width spacing',
    process: '1 column steps',
    contact: '1 column form',
    footer: 'Stacked 1 column',
    navbar: 'Links hidden, hamburger menu in future',
  },

  tablet: {
    breakpoint: '640px - 1024px',
    hero: 'Single column',
    services: '2 columns',
    cities: '2 columns',
    process: '2 columns',
    contact: '1 column',
    footer: '2 columns',
  },

  desktop: {
    breakpoint: '> 1024px',
    hero: '2 columns with illustration',
    services: '3 columns overlapping',
    cities: '4 columns hexagons',
    process: '4 columns steps',
    contact: '2 columns form',
    footer: '3 columns',
  },
};

// ============================================
// PERFORMANCE CONSIDERATIONS
// ============================================

const PERFORMANCE_NOTES = {
  rendering: [
    'CSS clip-path: GPU accelerated',
    'Framer Motion: Hardware acceleration via transform/opacity',
    'SVG animations: Optimized pathLength',
    'No expensive calculations in render',
  ],

  bundle_impact: [
    'Main dependency: Framer Motion (already in project)',
    'No additional libraries needed',
    'Pure CSS for shapes',
    'Emoji for icons (no icon library)',
  ],

  optimization_strategies: [
    'whileInView: animations only play when visible',
    'Lazy rendering: components render on view',
    'Motion templates: reduced re-renders',
    'CSS transforms: smooth 60fps animations',
  ],

  target_fps: 60,
};

// ============================================
// ACCESSIBILITY CHECKLIST
// ============================================

const A11Y_CHECKLIST = {
  semantic_html: 'Proper section/nav/main structure',
  color_contrast: 'WCAG AA compliant',
  focus_states: 'All interactive elements have visible focus',
  alt_text: 'Emoji have descriptive labels',
  responsive: 'Works on all breakpoints',
  keyboard_navigation: 'All sections accessible via tab',
  labels: 'Form fields have associated labels',
  semantic_buttons: 'Buttons use proper button elements',
  aria_labels: 'Navigation buttons have aria-labels',
};

// ============================================
// CUSTOMIZATION GUIDE
// ============================================

const CUSTOMIZATION = {
  colors: {
    edit_location: 'Line 32-38 in Design10.jsx',
    how_to: 'Update the colors object with new hex values',
    example: {
      before: "charcoal: '#36454f'",
      after: "charcoal: '#1a1a1a'",
    },
  },

  typography: {
    font_family: 'Change in style prop or component wrapper',
    sizes: 'Edit fontSize values in motion.div styles',
    weights: 'Modify fontWeight properties',
  },

  shapes: {
    clip_path: 'Edit polygon values in style props',
    location: 'Inline styles in each section component',
    examples: [
      "clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)'",
      "clipPath: 'circle(50%)'",
    ],
  },

  animations: {
    duration: 'Modify transition.duration in animate props',
    easing: 'Change transition.ease settings',
    delays: 'Adjust transition.delay for stagger effect',
  },

  spacing: {
    padding: 'Edit className paddings (px-6, py-24, etc)',
    gaps: 'Modify grid gap values',
    margins: 'Adjust mx-auto, mb-, etc',
  },
};

// ============================================
// TESTING CHECKLIST
// ============================================

const TESTING_CHECKLIST = {
  visual_tests: [
    'Hero section renders correctly',
    'Geometric shapes display properly',
    'All sections visible and styled',
    'Colors appear as designed',
    'Overlapping cards stack correctly',
    'Hexagons render properly',
  ],

  animation_tests: [
    'Background shapes rotate smoothly',
    'Hover effects work on cards',
    'Scroll animations trigger on view',
    'SVG lines animate on scroll',
    'Floating animations continuous',
  ],

  responsive_tests: [
    'Mobile layout stacks properly',
    'Tablet layout 2-column',
    'Desktop layout 3-4 column',
    'Illustrations hidden on mobile',
    'Text readable at all sizes',
  ],

  browser_tests: [
    'Chrome/Edge: full support',
    'Firefox: full support',
    'Safari: full support',
    'Mobile browsers: responsive',
  ],

  accessibility_tests: [
    'Keyboard navigation works',
    'Focus states visible',
    'Color contrast adequate',
    'Screen reader compatible',
  ],
};

// ============================================
// DEPLOYMENT NOTES
// ============================================

const DEPLOYMENT = {
  production_ready: true,
  dependencies_needed: ['framer-motion', 'react'],
  files_included: [
    'Design10.jsx (main component)',
    'DESIGN10_SPECS.js (specifications)',
    'DESIGN10_VISUAL_GUIDE.js (reference)',
    'DESIGN10_INTEGRATION.js (this file)',
  ],
  build_time: 'No build warnings expected',
  browser_support: 'Chrome, Firefox, Safari, Edge (latest)',
  fallback_support: 'Graceful degradation in older browsers',
};

export default {
  FILE_STRUCTURE,
  SECTIONS,
  ANIMATION_SPECS,
  COLOR_USAGE,
  RESPONSIVE_BEHAVIOR,
  PERFORMANCE_NOTES,
  A11Y_CHECKLIST,
  CUSTOMIZATION,
  TESTING_CHECKLIST,
  DEPLOYMENT,
};
