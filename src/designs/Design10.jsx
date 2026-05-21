import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/**
 * Design #10: BOLD GEOMETRIC
 * Modern, artistic, geometric, bold, confident design
 * Colors: Charcoal (#36454f), Burnt Sienna (#e97451), Teal (#008080), Mustard (#d4a574)
 * Vibe: Artistic, bold, confident, creative, modern with geometric shapes
 */

const Design10 = ({ content }) => {
  const { t } = useLanguage();
  const company = content?.company || {};
  const hero = content?.hero || {};
  const servicesData = content?.services || [];
  const aboutData = content?.aboutSection || {};
  const aboutValues = content?.aboutValues || [];
  const manufacturingCities = content?.manufacturingCities || [];
  const processSteps = content?.processSection?.steps || [];
  const contactData = content?.contact || {};
  const footerData = content?.footer || {};

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const colors = {
    charcoal: '#36454f',
    burntSienna: '#e97451',
    teal: '#008080',
    mustard: '#d4a574',
    white: '#ffffff',
    lightGray: '#f5f5f5',
  };

  // ========================================
  // GEOMETRIC NAVBAR
  // ========================================
  const NavBar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b-4" style={{
      backgroundColor: `${colors.charcoal}`,
      borderColor: colors.burntSienna,
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="text-white font-black text-2xl"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              AMZ<span style={{ color: colors.burntSienna }}>.</span>
            </motion.a>
            <nav className="hidden md:flex items-center gap-6">
              {['services', 'manufacturing-cities', 'about', 'process', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  whileHover={{ color: colors.burntSienna, transform: 'skewX(-5deg)' }}
                  className="text-white transition-colors text-sm font-bold uppercase tracking-wider"
                  style={{
                    position: 'relative',
                  }}
                >
                  {item.replace('-', ' ')}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );

  // ========================================
  // HERO SECTION - Diagonal Geometric
  // ========================================
  const HeroSection = () => (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: colors.charcoal }}
      id="hero"
    >
      {/* Animated geometric background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96"
        style={{
          backgroundColor: colors.burntSienna,
          clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)',
          opacity: 0.15,
        }}
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80"
        style={{
          backgroundColor: colors.teal,
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          opacity: 0.12,
        }}
        animate={{ rotate: -360, scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64"
        style={{
          backgroundColor: colors.mustard,
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          opacity: 0.1,
        }}
        animate={{ rotate: 360, y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Diagonal divider line */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 45%, ${colors.teal} 45%, ${colors.teal} 55%, transparent 55%)`,
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content with geometric shapes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Geometric badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 relative"
              style={{
                backgroundColor: `${colors.burntSienna}15`,
                border: `2px solid ${colors.burntSienna}`,
                transform: 'skewX(-10deg)',
              }}
              whileHover={{ skewX: 0, scale: 1.05 }}
            >
              <div className="w-3 h-3" style={{
                backgroundColor: colors.burntSienna,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }} />
              <span className="text-sm font-black uppercase tracking-wider" style={{ color: colors.burntSienna }}>
                {t(hero.badge)}
              </span>
            </motion.div>

            {/* Bold heading */}
            <motion.h1
              className="mb-6 leading-tight"
              style={{
                fontSize: '4rem',
                fontFamily: "'Archivo Black', sans-serif",
                fontWeight: 900,
                color: colors.white,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t(company.name)}
            </motion.h1>

            {/* Tagline with accent */}
            <motion.p
              className="mb-6 text-2xl font-bold"
              style={{ color: colors.burntSienna }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t(company.tagline)}
            </motion.p>

            {/* Description */}
            <motion.p
              className="mb-12 text-lg leading-relaxed"
              style={{ color: '#b0b0b0' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t(company.description)}
            </motion.p>

            {/* Geometric CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Trapezoid button */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-black text-lg uppercase tracking-wider transition-all relative group"
                style={{
                  backgroundColor: colors.burntSienna,
                  color: colors.white,
                  clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)',
                }}
              >
                {t(hero.ctaPrimary)}
              </motion.button>

              {/* Hexagon-like button */}
              <motion.button
                onClick={() => scrollToSection('services')}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-black text-lg uppercase tracking-wider transition-all"
                style={{
                  backgroundColor: 'transparent',
                  border: `3px solid ${colors.teal}`,
                  color: colors.teal,
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                {t(hero.ctaSecondary)}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Geometric illustration with overlapping shapes */}
          <motion.div
            className="relative h-96 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Large background circle (teal) */}
            <motion.div
              className="absolute w-72 h-72 rounded-full"
              style={{
                backgroundColor: colors.teal,
                top: '20px',
                right: '20px',
                opacity: 0.8,
              }}
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Overlapping rectangle (mustard) */}
            <motion.div
              className="absolute w-64 h-56"
              style={{
                backgroundColor: colors.mustard,
                top: '100px',
                left: '40px',
                transform: 'rotate(-15deg)',
                opacity: 0.7,
              }}
              animate={{ rotate: [-15, -10, -15], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Triangle shape (burntSienna) */}
            <motion.div
              className="absolute"
              style={{
                width: 0,
                height: 0,
                borderLeft: '80px solid transparent',
                borderRight: '80px solid transparent',
                borderBottom: `160px solid ${colors.burntSienna}`,
                top: '80px',
                right: '80px',
                opacity: 0.6,
              }}
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Small charcoal rectangle accent */}
            <motion.div
              className="absolute w-32 h-32"
              style={{
                backgroundColor: colors.charcoal,
                bottom: '60px',
                right: '40px',
                clipPath: 'polygon(0 0, 70% 0, 100% 100%, 30% 100%)',
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

  // ========================================
  // SERVICES SECTION - Overlapping Geometric Cards
  // ========================================
  const ServicesSection = () => (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: colors.lightGray }}
      id="services"
    >
      {/* Diagonal background accent */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.charcoal} 0%, ${colors.charcoal} 30%, transparent 30%)`,
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header with geometric accent */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: colors.burntSienna,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            />
            <h2 className="text-5xl font-black" style={{
              color: colors.charcoal,
              fontFamily: "'Archivo Black', sans-serif",
              textTransform: 'uppercase',
            }}>
              {t(content?.servicesSection?.title)}
            </h2>
          </div>
          <p className="text-xl" style={{ color: colors.teal, fontWeight: 600 }}>
            {t(content?.servicesSection?.description)}
          </p>
        </motion.div>

        {/* Overlapping card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 -space-x-8 relative">
          {servicesData.slice(0, 6).map((service, index) => (
            <motion.div
              key={index}
              className="relative pt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ zIndex: servicesData.length - index }}
            >
              {/* Geometric card background */}
              <motion.div
                className="p-8 relative group"
                style={{
                  backgroundColor: colors.white,
                  border: `3px solid ${index % 2 === 0 ? colors.burntSienna : colors.teal}`,
                  clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
                }}
                whileHover={{
                  y: -20,
                  rotate: 3,
                }}
              >
                {/* Icon placeholder with geometric shape */}
                <motion.div
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: index % 2 === 0 ? colors.burntSienna : colors.teal,
                    clipPath: index % 3 === 0 ? 'circle(50%)' : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span style={{ fontSize: '28px', color: colors.white }}>
                    {index === 0 ? '🔍' : index === 1 ? '✓' : index === 2 ? '🚀' : index === 3 ? '💼' : index === 4 ? '🌍' : '📊'}
                  </span>
                </motion.div>

                <h3 className="text-2xl font-black mb-4" style={{
                  color: colors.charcoal,
                  textTransform: 'uppercase',
                  fontFamily: "'Archivo Black', sans-serif",
                }}>
                  {t(service.title)}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.charcoal }}>
                  {t(service.description)}
                </p>

                {/* Geometric accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1"
                  style={{
                    backgroundColor: index % 2 === 0 ? colors.burntSienna : colors.teal,
                    width: '0%',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ========================================
  // ABOUT SECTION - Geometric Stat Display
  // ========================================
  const AboutSection = () => (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: colors.charcoal }}
      id="about"
    >
      {/* Background geometric pattern */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        style={{
          backgroundColor: colors.burntSienna,
          clipPath: 'polygon(0 0, 100% 20%, 80% 100%, 0 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with geometric accent */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6" style={{
            color: colors.burntSienna,
            fontFamily: "'Archivo Black', sans-serif",
            textTransform: 'uppercase',
            fontSize: '3.5rem',
          }}>
            {t(aboutData.title)}
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: colors.mustard, fontWeight: 600 }}>
            {t(aboutData.description)}
          </p>
        </motion.div>

        {/* Stats with geometric blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {aboutValues.map((value, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Large geometric shape background */}
              <motion.div
                className="absolute inset-0 opacity-20 -z-10"
                style={{
                  backgroundColor: [colors.burntSienna, colors.teal, colors.mustard][index],
                  clipPath: ['polygon(0 0, 85% 0, 100% 100%, 15% 100%)', 'circle(50%)', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'][index],
                }}
              />

              <div className="relative p-8">
                {/* Numeric badge */}
                <motion.div
                  className="text-6xl font-black mb-4"
                  style={{
                    color: [colors.burntSienna, colors.teal, colors.mustard][index],
                    fontFamily: "'Archivo Black', sans-serif",
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>

                <h3 className="text-2xl font-black" style={{
                  color: colors.white,
                  textTransform: 'uppercase',
                  fontFamily: "'Archivo Black', sans-serif",
                }}>
                  {t(value)}
                </h3>

                {/* Diagonal accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1"
                  style={{
                    backgroundColor: [colors.burntSienna, colors.teal, colors.mustard][index],
                    width: '60px',
                  }}
                  animate={{ width: ['60px', '100%', '60px'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ========================================
  // MANUFACTURING CITIES - Hexagonal Cards
  // ========================================
  const ManufacturingCitiesSection = () => (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: colors.lightGray }}
      id="manufacturing-cities"
    >
      {/* Angled background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: `repeating-linear-gradient(45deg, ${colors.charcoal} 0px, ${colors.charcoal} 10px, transparent 10px, transparent 20px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black" style={{
            color: colors.charcoal,
            fontFamily: "'Archivo Black', sans-serif",
            textTransform: 'uppercase',
          }}>
            {t(content?.manufacturingCitiesSection?.title)}
          </h2>
        </motion.div>

        {/* Hexagonal city cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {manufacturingCities.slice(0, 8).map((city, index) => (
            <motion.div
              key={index}
              className="relative h-80 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -20, rotate: 5 }}
            >
              {/* Hexagonal card */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-6 text-center"
                style={{
                  backgroundColor: [colors.burntSienna, colors.teal, colors.mustard, colors.charcoal][index % 4],
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <div>
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {index === 0 ? '🏭' : index === 1 ? '⚙️' : index === 2 ? '🌆' : index === 3 ? '🚀' : index === 4 ? '💼' : index === 5 ? '🏢' : index === 6 ? '📍' : '🌟'}
                  </motion.div>
                  <h3 className="text-2xl font-black" style={{
                    color: colors.white,
                    textTransform: 'uppercase',
                    fontFamily: "'Archivo Black', sans-serif",
                  }}>
                    {t(city.name)}
                  </h3>
                  <p className="text-sm mt-2" style={{ color: colors.white }}>
                    {city.stats}
                  </p>
                </div>
              </motion.div>

              {/* Outer geometric accent */}
              <motion.div
                className="absolute inset-0"
                style={{
                  border: `3px solid ${[colors.burntSienna, colors.teal, colors.mustard, colors.charcoal][index % 4]}`,
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ========================================
  // PROCESS SECTION - Diagonal Geometric Flow
  // ========================================
  const ProcessSection = () => (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: colors.charcoal }}
      id="process"
    >
      {/* Diagonal connecting lines background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        style={{ pointerEvents: 'none' }}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="diagonals" patternUnits="userSpaceOnUse" width="100" height="100">
            <line x1="0" y1="0" x2="100" y2="100" stroke={colors.burntSienna} strokeWidth="2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke={colors.teal} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black" style={{
            color: colors.burntSienna,
            fontFamily: "'Archivo Black', sans-serif",
            textTransform: 'uppercase',
          }}>
            {t(content?.processSection?.title)}
          </h2>
        </motion.div>

        {/* Process steps with geometric connectors */}
        <div className="relative">
          {/* Animated connecting diagonal lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
            preserveAspectRatio="none"
          >
            <motion.line
              x1="10%"
              y1="20%"
              x2="90%"
              y2="80%"
              stroke={colors.teal}
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              opacity={0.3}
            />
            <motion.line
              x1="10%"
              y1="80%"
              x2="90%"
              y2="20%"
              stroke={colors.mustard}
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.2 }}
              opacity={0.3}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.slice(0, 4).map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Geometric shape container */}
                <motion.div
                  className="relative p-8 text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {/* Background geometric shape (different for each) */}
                  <motion.div
                    className="absolute inset-0 -z-10"
                    style={{
                      backgroundColor: [colors.burntSienna, colors.teal, colors.mustard, colors.charcoal][index],
                      clipPath: ['polygon(0 0, 85% 0, 100% 100%, 15% 100%)', 'circle(50%)', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'][index],
                      opacity: 0.8,
                    }}
                  />

                  {/* Number badge */}
                  <motion.div
                    className="text-6xl font-black mb-4"
                    style={{
                      color: [colors.white, colors.charcoal, colors.charcoal, colors.white][index],
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {index + 1}
                  </motion.div>

                  <h3 className="text-xl font-black mb-3" style={{
                    color: [colors.white, colors.charcoal, colors.charcoal, colors.white][index],
                    textTransform: 'uppercase',
                    fontFamily: "'Archivo Black', sans-serif",
                  }}>
                    {t(step.title)}
                  </h3>
                  <p className="text-sm" style={{
                    color: [colors.white, colors.charcoal, colors.charcoal, colors.white][index],
                  }}>
                    {t(step.description)}
                  </p>
                </motion.div>

                {/* Arrow connector (except last) */}
                {index < 3 && (
                  <motion.div
                    className="absolute -right-12 top-1/3 text-3xl"
                    style={{ color: colors.teal }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ========================================
  // CONTACT SECTION - Geometric Form
  // ========================================
  const ContactSection = () => (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: colors.lightGray }}
      id="contact"
    >
      {/* Diagonal geometric background sections */}
      <motion.div
        className="absolute top-0 left-0 w-full h-64"
        style={{
          backgroundColor: colors.charcoal,
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-white mb-4" style={{
            fontFamily: "'Archivo Black', sans-serif",
            textTransform: 'uppercase',
          }}>
            {t(contactData.title)}
          </h2>
          <p className="text-lg" style={{ color: colors.mustard, fontWeight: 600 }}>
            {t(contactData.description)}
          </p>
        </motion.div>

        {/* Geometric form layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Left: Form fields */}
          <div className="space-y-6">
            {[
              { label: 'Name', type: 'text' },
              { label: 'Email', type: 'email' },
              { label: 'Subject', type: 'text' },
            ].map((field, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
              >
                <label className="block text-sm font-black mb-2" style={{
                  color: colors.charcoal,
                  textTransform: 'uppercase',
                }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full px-6 py-3 border-2 focus:outline-none transition-all"
                  style={{
                    borderColor: colors.teal,
                    backgroundColor: colors.white,
                    color: colors.charcoal,
                    clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',
                  }}
                  placeholder={field.label}
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Message field */}
          <motion.div whileHover={{ x: -10 }}>
            <label className="block text-sm font-black mb-2" style={{
              color: colors.charcoal,
              textTransform: 'uppercase',
            }}>
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-6 py-3 border-2 focus:outline-none transition-all resize-none"
              style={{
                borderColor: colors.burntSienna,
                backgroundColor: colors.white,
                color: colors.charcoal,
                clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
              }}
              placeholder="Your message..."
            />
          </motion.div>
        </motion.div>

        {/* Submit button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 font-black text-lg uppercase tracking-wider"
            style={{
              backgroundColor: colors.teal,
              color: colors.white,
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
            }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );

  // ========================================
  // FOOTER - Diagonal Geometric
  // ========================================
  const FooterSection = () => (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ backgroundColor: colors.charcoal }}
    >
      {/* Diagonal accent background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-48"
        style={{
          backgroundColor: colors.burntSienna,
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
          opacity: 0.1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-4 text-white" style={{
              fontFamily: "'Archivo Black', sans-serif",
            }}>
              AMZ<span style={{ color: colors.burntSienna }}>.</span>
            </h3>
            <p style={{ color: colors.mustard, fontWeight: 600 }}>
              Bold, geometric, creative solutions for global supply chain
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-black mb-4 text-white" style={{
              fontFamily: "'Archivo Black', sans-serif",
              textTransform: 'uppercase',
            }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Services', 'About', 'Process', 'Contact'].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="font-bold hover:text-burntSienna transition-colors"
                    style={{
                      color: colors.teal,
                      textTransform: 'uppercase',
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-black mb-4 text-white" style={{
              fontFamily: "'Archivo Black', sans-serif",
              textTransform: 'uppercase',
            }}>
              Contact
            </h4>
            <p style={{ color: colors.mustard, fontWeight: 600 }}>
              {footerData.email}
            </p>
            <p style={{ color: colors.mustard, fontWeight: 600 }}>
              {footerData.phone}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-1 my-8"
          style={{
            background: `linear-gradient(90deg, ${colors.burntSienna} 0%, ${colors.teal} 50%, ${colors.mustard} 100%)`,
          }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p style={{ color: colors.teal, fontWeight: 600 }}>
            &copy; {new Date().getFullYear()} {t(company.name)}. All rights reserved.
          </p>
          <p style={{ color: colors.mustard, fontWeight: 600, marginTop: '8px' }}>
            Bold Geometric Design #10
          </p>
        </motion.div>
      </div>
    </footer>
  );

  // ========================================
  // MAIN RENDER
  // ========================================
  return (
    <div style={{ backgroundColor: colors.charcoal, color: colors.white, fontFamily: "'Inter', sans-serif" }}>
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ManufacturingCitiesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Design10;
