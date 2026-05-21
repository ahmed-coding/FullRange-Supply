import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

/**
 * DESIGN #9: CLASSIC ELEGANT
 *
 * Aesthetic: Timeless, European luxury, classical design, refined, ornamental
 * Colors: Burgundy (#4a1c1c), Gold (#d4af37), Cream (#faf7f2), Charcoal (#2d2d2d)
 * Typography: Serif (Playfair Display, Georgia), centered layouts, ornamental elements
 *
 * Features:
 * - Symmetrical, centered layouts throughout
 * - Ornamental gold borders, dividers, and decorative elements
 * - Classical serif typography (Playfair Display for headings, Georgia for body)
 * - Gold leaf accents with ornamental patterns
 * - Traditional European luxury aesthetic
 * - Elegant, slow animations (400-500ms)
 * - High contrast: burgundy text on cream, cream text on burgundy
 * - Formal, refined feel with classical manufacturing cities display
 */

// ============================================
// DECORATIVE COMPONENTS
// ============================================

const OrnamentalDivider = ({ width = '100', color = '#d4af37', style: customStyle = {} }) => (
  <svg
    viewBox="0 0 100 20"
    style={{
      maxWidth: `${width}px`,
      width: '100%',
      height: 'auto',
      ...customStyle,
    }}
  >
    <path
      d="M10,10 Q25,5 40,10 T70,10"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="50" cy="10" r="2.5" fill={color} />
  </svg>
);

const OrnamentalCorners = ({ size = 'md', color = '#d4af37' }) => {
  const sizeMap = { sm: '8px', md: '12px', lg: '16px' };
  return (
    <>
      <div style={{ position: 'absolute', top: '-6px', left: '8px', color, fontSize: sizeMap[size] }}>✦</div>
      <div style={{ position: 'absolute', top: '-6px', right: '8px', color, fontSize: sizeMap[size] }}>✦</div>
      <div style={{ position: 'absolute', bottom: '-6px', left: '8px', color, fontSize: sizeMap[size] }}>✦</div>
      <div style={{ position: 'absolute', bottom: '-6px', right: '8px', color, fontSize: sizeMap[size] }}>✦</div>
    </>
  );
};

const SectionDivider = ({ color = '#d4af37' }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex justify-center my-8"
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ width: '60px', height: '1px', backgroundColor: color }} />
      <div style={{ fontSize: '20px', color }}>✦</div>
      <div style={{ width: '60px', height: '1px', backgroundColor: color }} />
    </div>
  </motion.div>
);

// ============================================
// HERO SECTION
// ============================================

function ClassicHero({ content, t }) {
  const company = content?.company || {};
  const hero = content?.hero || {};
  const accentColor = '#d4af37';
  const textColor = '#4a1c1c';
  const bgColor = '#faf7f2';

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAboutUs = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProcess = () => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20 px-6"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #4a1c1c 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Top ornamental symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div style={{ fontSize: '48px', color: accentColor, letterSpacing: '12px' }}>✦ ✦ ✦</div>
        </motion.div>

        {/* Badge/subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '14px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: accentColor,
            }}
          >
            ∼ {t(hero.badge)} ∼
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 700,
            color: textColor,
            letterSpacing: '0.08em',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}
        >
          {t(company.name)}
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center my-8"
        >
          <OrnamentalDivider width="200" color={accentColor} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '24px',
            fontStyle: 'italic',
            color: accentColor,
            marginBottom: '24px',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          {t(company.tagline)}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: '16px',
            color: textColor,
            opacity: 0.85,
            lineHeight: 1.8,
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px',
          }}
        >
          {t(company.description)}
        </motion.p>

        {/* CTA Buttons - Symmetrical */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-6 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(212, 175, 55, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAboutUs}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              padding: '14px 40px',
              border: `2px solid ${accentColor}`,
              backgroundColor: 'transparent',
              color: accentColor,
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {t(hero.ctaAboutUs)}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(212, 175, 55, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToServices}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              padding: '14px 40px',
              border: `2px solid ${accentColor}`,
              backgroundColor: 'transparent',
              color: accentColor,
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {t(hero.ctaSecondary)}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(74, 28, 28, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              padding: '14px 40px',
              border: `2px solid ${accentColor}`,
              backgroundColor: accentColor,
              color: textColor,
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {t(hero.ctaPrimary)}
          </motion.button>
        </motion.div>

        {/* Bottom ornamental symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div style={{ fontSize: '48px', color: accentColor, letterSpacing: '12px' }}>✦ ✦ ✦</div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          style={{
            width: '24px',
            height: '40px',
            border: `2px solid ${accentColor}`,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 0',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: accentColor,
              borderRadius: '2px',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// SERVICES SECTION
// ============================================

function ClassicServices({ content, t }) {
  const services = content?.services || [];
  const section = content?.servicesSection || {};
  const accentColor = '#d4af37';
  const textColor = '#faf7f2';
  const bgColor = '#4a1c1c';

  const serviceIcons = [
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ];

  const getIcon = (idx) => serviceIcons[idx % serviceIcons.length];

  return (
    <section id="services" className="py-32 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <SectionDivider color={accentColor} />
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              color: textColor,
              letterSpacing: '0.08em',
              margin: '24px 0',
            }}
          >
            {t(section.title)}
          </h2>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '16px',
              color: accentColor,
              opacity: 0.9,
              fontStyle: 'italic',
              maxWidth: '500px',
              margin: '0 auto 24px',
            }}
          >
            {t(section.description)}
          </p>
          <SectionDivider color={accentColor} />
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ transform: 'scale(1.02)', boxShadow: `0 12px 24px rgba(212, 175, 55, 0.15)` }}
              className="relative transition-all duration-400"
            >
              <div
                style={{
                  border: `2px solid ${accentColor}`,
                  padding: '32px 24px',
                  backgroundColor: bgColor,
                  position: 'relative',
                }}
              >
                <OrnamentalCorners size="md" color={accentColor} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-400"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                  }}
                >
                  <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getIcon(catIndex)}
                  </div>
                </motion.div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: accentColor,
                    textAlign: 'center',
                    marginBottom: '16px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t(category.category)}
                </h3>

                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {category.items?.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      style={{
                        paddingTop: '16px',
                        borderTop: `1px solid ${accentColor}30`,
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: '14px',
                          fontWeight: 600,
                          color: accentColor,
                          marginBottom: '8px',
                        }}
                      >
                        {t(item.title)}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: '13px',
                          color: textColor,
                          opacity: 0.75,
                          lineHeight: 1.6,
                        }}
                      >
                        {t(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// ABOUT SECTION
// ============================================

function ClassicAbout({ content, t }) {
  const about = content?.aboutSection || {};
  const stats = content?.stats || [];
  const accentColor = '#d4af37';
  const textColor = '#4a1c1c';
  const bgColor = '#faf7f2';

  return (
    <section id="about" className="py-32 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <SectionDivider color={accentColor} />
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              color: textColor,
              letterSpacing: '0.08em',
              margin: '24px 0',
            }}
          >
            {t(about.title)}
          </h2>
          <SectionDivider color={accentColor} />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '16px',
              color: textColor,
              opacity: 0.85,
              lineHeight: 1.8,
              marginBottom: '24px',
            }}
          >
            {t(about.description)}
          </p>
          <SectionDivider color={accentColor} />
        </motion.div>

        {/* Stats - Symmetrical circular display */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-400"
                style={{
                  border: `3px solid ${accentColor}`,
                  backgroundColor: `${accentColor}08`,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '32px',
                    fontWeight: 700,
                    color: accentColor,
                  }}
                >
                  {t(stat.number)}
                </div>
              </motion.div>
              <h4
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: textColor,
                  marginBottom: '8px',
                }}
              >
                {t(stat.label)}
              </h4>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '13px',
                  color: textColor,
                  opacity: 0.7,
                  lineHeight: 1.5,
                }}
              >
                {t(stat.description)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// MANUFACTURING CITIES SECTION
// ============================================

function ClassicManufacturingCities({ content, t }) {
  const cities = content?.manufacturingCities || [];
  const accentColor = '#d4af37';
  const textColor = '#4a1c1c';
  const bgColor = '#ffffff';

  return (
    <section id="manufacturing-cities" className="py-32 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <SectionDivider color={accentColor} />
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              color: textColor,
              letterSpacing: '0.08em',
              margin: '24px 0',
            }}
          >
            Manufacturing Hubs
          </h2>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '16px',
              color: accentColor,
              opacity: 0.9,
              fontStyle: 'italic',
              maxWidth: '500px',
              margin: '16px auto 0',
            }}
          >
            Strategic Global Presence
          </p>
          <SectionDivider color={accentColor} />
        </motion.div>

        {/* Cities grid */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cities.map((city, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03, boxShadow: `0 12px 24px rgba(212, 175, 55, 0.15)` }}
              className="transition-all duration-400"
            >
              <div
                style={{
                  border: `2px solid ${accentColor}`,
                  padding: '32px 24px',
                  backgroundColor: bgColor,
                  position: 'relative',
                }}
              >
                <OrnamentalCorners size="sm" color={accentColor} />

                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '28px',
                    fontWeight: 700,
                    color: accentColor,
                    textAlign: 'center',
                    marginBottom: '12px',
                    letterSpacing: '0.1em',
                  }}
                >
                  {t(city.name)}
                </h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex justify-center mb-4"
                >
                  <OrnamentalDivider width="80" color={accentColor} />
                </motion.div>

                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: '14px',
                    color: textColor,
                    opacity: 0.8,
                    textAlign: 'center',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  {t(city.description)}
                </p>

                {/* Specialties */}
                {city.specialties && city.specialties.length > 0 && (
                  <div
                    style={{
                      borderTop: `1px solid ${accentColor}30`,
                      paddingTop: '16px',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: accentColor,
                        marginBottom: '12px',
                        textAlign: 'center',
                      }}
                    >
                      Specialties
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {city.specialties.map((specialty, specIdx) => (
                        <li
                          key={specIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            color: textColor,
                          }}
                        >
                          <span style={{ color: accentColor, marginRight: '8px', fontSize: '10px' }}>✦</span>
                          {t(specialty)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// PROCESS SECTION
// ============================================

function ClassicProcess({ content, t }) {
  const processSteps = content?.processSteps || [];
  const accentColor = '#d4af37';
  const textColor = '#4a1c1c';
  const bgColor = '#faf7f2';

  return (
    <section id="process" className="py-32 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <SectionDivider color={accentColor} />
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              color: textColor,
              letterSpacing: '0.08em',
              margin: '24px 0',
            }}
          >
            Our Process
          </h2>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '16px',
              color: accentColor,
              opacity: 0.9,
              fontStyle: 'italic',
              maxWidth: '500px',
              margin: '16px auto 0',
            }}
          >
            Streamlined Excellence
          </p>
          <SectionDivider color={accentColor} />
        </motion.div>

        {/* Vertical centered timeline with gold connecting line */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full"
            style={{
              backgroundColor: accentColor,
              top: 0,
              bottom: 0,
              opacity: 0.3,
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative', zIndex: 10 }}>
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '48px',
                    maxWidth: '800px',
                    width: '100%',
                  }}
                >
                  {/* Alternating left/right layout */}
                  {idx % 2 === 0 && (
                    <>
                      <div style={{ flex: 1, textAlign: 'right' }}>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: '20px',
                            fontWeight: 700,
                            color: textColor,
                            marginBottom: '12px',
                          }}
                        >
                          {t(step.title)}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: '14px',
                            color: textColor,
                            opacity: 0.75,
                            lineHeight: 1.6,
                          }}
                        >
                          {t(step.description)}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-400"
                        style={{
                          backgroundColor: accentColor,
                          color: textColor,
                          position: 'relative',
                          zIndex: 20,
                          boxShadow: `0 4px 12px rgba(212, 175, 55, 0.2)`,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: '24px',
                            fontWeight: 700,
                          }}
                        >
                          {idx + 1}
                        </span>
                      </motion.div>
                    </>
                  )}

                  {idx % 2 !== 0 && (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-400"
                        style={{
                          backgroundColor: accentColor,
                          color: textColor,
                          position: 'relative',
                          zIndex: 20,
                          boxShadow: `0 4px 12px rgba(212, 175, 55, 0.2)`,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: '24px',
                            fontWeight: 700,
                          }}
                        >
                          {idx + 1}
                        </span>
                      </motion.div>
                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: '20px',
                            fontWeight: 700,
                            color: textColor,
                            marginBottom: '12px',
                          }}
                        >
                          {t(step.title)}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: '14px',
                            color: textColor,
                            opacity: 0.75,
                            lineHeight: 1.6,
                          }}
                        >
                          {t(step.description)}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================

function ClassicContact({ content, t }) {
  const contact = content?.contactSection || {};
  const accentColor = '#d4af37';
  const textColor = '#4a1c1c';
  const bgColor = '#ffffff';

  return (
    <section id="contact" className="py-32 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <SectionDivider color={accentColor} />
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              color: textColor,
              letterSpacing: '0.08em',
              margin: '24px 0',
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '16px',
              color: accentColor,
              opacity: 0.9,
              fontStyle: 'italic',
              maxWidth: '500px',
              margin: '16px auto 0',
            }}
          >
            We're Here to Serve
          </p>
          <SectionDivider color={accentColor} />
        </motion.div>

        {/* Contact layout - symmetrical */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ borderLeftWidth: '4px', borderLeftColor: accentColor, paddingLeft: '24px' }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  color: textColor,
                  marginBottom: '12px',
                }}
              >
                Contact Information
              </h3>
              <div style={{ width: '60px', height: '1px', backgroundColor: accentColor }} />
            </div>

            {content?.contactInfo?.map((info, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                    fontSize: '12px',
                  }}
                >
                  ✦
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '14px',
                      fontWeight: 600,
                      color: textColor,
                      marginBottom: '4px',
                    }}
                  >
                    {t(info.label)}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '13px',
                      color: textColor,
                      opacity: 0.8,
                    }}
                  >
                    {t(info.value)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '32px 24px',
              border: `2px solid ${accentColor}`,
              backgroundColor: bgColor,
              position: 'relative',
            }}
          >
            <OrnamentalCorners size="md" color={accentColor} />

            <div style={{ position: 'relative', zIndex: 10 }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: textColor,
                  marginBottom: '8px',
                }}
              >
                Name
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: `1px solid ${accentColor}`,
                  fontFamily: "'Georgia', serif",
                  fontSize: '14px',
                  color: textColor,
                  backgroundColor: bgColor,
                  transition: 'all 300ms ease',
                }}
                onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${accentColor}20`)}
                onBlur={(e) => (e.target.style.boxShadow = 'none')}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: textColor,
                  marginBottom: '8px',
                }}
              >
                Email
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: `1px solid ${accentColor}`,
                  fontFamily: "'Georgia', serif",
                  fontSize: '14px',
                  color: textColor,
                  backgroundColor: bgColor,
                  transition: 'all 300ms ease',
                }}
                onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${accentColor}20`)}
                onBlur={(e) => (e.target.style.boxShadow = 'none')}
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: textColor,
                  marginBottom: '8px',
                }}
              >
                Message
              </label>
              <textarea
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: `1px solid ${accentColor}`,
                  fontFamily: "'Georgia', serif",
                  fontSize: '14px',
                  color: textColor,
                  backgroundColor: bgColor,
                  transition: 'all 300ms ease',
                  resize: 'vertical',
                  minHeight: '120px',
                }}
                onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${accentColor}20`)}
                onBlur={(e) => (e.target.style.boxShadow = 'none')}
                placeholder="Your Message"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: `0 12px 24px rgba(212, 175, 55, 0.2)` }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                backgroundColor: accentColor,
                color: textColor,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER SECTION
// ============================================

function ClassicFooter({ content, t }) {
  const accentColor = '#d4af37';
  const textColor = '#faf7f2';
  const bgColor = '#2d2d2d';
  const company = content?.company || {};

  return (
    <footer className="transition-colors duration-300" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <OrnamentalDivider width="180" color={accentColor} />
        </motion.div>

        {/* Footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '24px',
              fontWeight: 700,
              color: accentColor,
              marginBottom: '16px',
              letterSpacing: '0.05em',
            }}
          >
            {t(company.name)}
          </h3>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '14px',
              color: textColor,
              opacity: 0.85,
              lineHeight: 1.6,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {t(company.tagline)}
          </p>
        </motion.div>

        {/* Middle divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <OrnamentalDivider width="180" color={accentColor} />
        </motion.div>

        {/* Links grid */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Navigation */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-center">
            <h4
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '14px',
                fontWeight: 600,
                color: accentColor,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Services', 'About', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '13px',
                      color: textColor,
                      opacity: 0.8,
                      transition: 'color 300ms ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = accentColor)}
                    onMouseLeave={(e) => (e.target.style.color = textColor)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-center">
            <h4
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '14px',
                fontWeight: 600,
                color: accentColor,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Sourcing', 'Quality Control', 'Logistics', 'Trading'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '13px',
                      color: textColor,
                      opacity: 0.8,
                      transition: 'color 300ms ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = accentColor)}
                    onMouseLeave={(e) => (e.target.style.color = textColor)}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-center">
            <h4
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '14px',
                fontWeight: 600,
                color: accentColor,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['About Us', 'Blog', 'Careers', 'Privacy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '13px',
                      color: textColor,
                      opacity: 0.8,
                      transition: 'color 300ms ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = accentColor)}
                    onMouseLeave={(e) => (e.target.style.color = textColor)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <OrnamentalDivider width="160" color={accentColor} />
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t pt-8"
          style={{ borderTopColor: `${accentColor}30` }}
        >
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '12px',
              color: textColor,
              opacity: 0.7,
              marginBottom: '8px',
            }}
          >
            &copy; 2024 FullRange Supply. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '11px',
              color: accentColor,
              opacity: 0.8,
              fontStyle: 'italic',
              letterSpacing: '0.05em',
            }}
          >
            Crafted with Elegance and Precision
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN DESIGN #9 COMPONENT
// ============================================

export default function Design9({ content }) {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <ClassicHero content={content} t={t} />
      <ClassicServices content={content} t={t} />
      <ClassicAbout content={content} t={t} />
      <ClassicManufacturingCities content={content} t={t} />
      <ClassicProcess content={content} t={t} />
      <ClassicContact content={content} t={t} />
      <ClassicFooter content={content} t={t} />
    </div>
  );
}
