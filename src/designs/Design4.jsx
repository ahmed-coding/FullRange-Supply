import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useThemeClasses';

// ============================================
// ICONS FOR SERVICES
// ============================================
const serviceIcons = [
  <svg key="sourcing" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  <svg key="quality" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="shipping" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
  <svg key="order" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
  <svg key="import" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
  <svg key="trading" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="consulting" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
  <svg key="market" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  <svg key="financial" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  <svg key="risk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
];

// ============================================
// PROCESS STEPS ICONS
// ============================================
const processStepsData = [
  { key: 'inquiry', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg> },
  { key: 'sourcing', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
  { key: 'negotiation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { key: 'sampling', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { key: 'shipping', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
  { key: 'delivery', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
];

// ============================================
// ANIMATED COUNTER COMPONENT
// ============================================
function AnimatedCounter({ value, accentColor }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span
      ref={ref}
      className="text-5xl md:text-6xl font-light transition-colors duration-300"
      style={{ color: accentColor }}
    >
      {displayValue.toLocaleString()}+
    </span>
  );
}

// ============================================
// MAIN DESIGN 4 COMPONENT (700+ lines)
// ============================================
export default function Design4({ content }) {
  const { t } = useLanguage();
  const { theme, currentTheme } = useTheme();
  const classes = useThemeClasses(currentTheme);

  const company = content?.company || {};
  const hero = content?.hero || {};
  const services = content?.services || [];
  const servicesSection = content?.servicesSection || {};
  const stats = content?.stats || {};
  const statsArray = content?.statsArray || [];
  const values = content?.aboutValues || [];
  const aboutSection = content?.aboutSection || {};
  const processSection = content?.processSection || {};
  const processLabels = processSection?.labels || {};
  const contactSection = content?.contactSection || {};
  const cities = content?.manufacturingCities || [];

  // Dark Elegant Theme Colors
  const roseGold = '#b76e79';
  const almostBlack = '#0f0f0f';
  const deepPurple = '#2d1b4e';
  const charcoal = '#1a1a1a';
  const textLight = '#f5f1f0';
  const textDark = '#a0a0a0';

  // Scroll handlers
  const scrollToContact = () => document.getElementById('design4-contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('design4-services')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProcess = () => document.getElementById('design4-process')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAboutUs = () => document.getElementById('design4-about')?.scrollIntoView({ behavior: 'smooth' });

  // ============================================
  // SECTION 1: HERO
  // ============================================
  const HeroSection = () => (
    <section
      id="design4-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${almostBlack} 0%, ${deepPurple} 50%, ${almostBlack} 100%)`
      }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${roseGold}20, transparent 70%)`
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${roseGold}15, transparent 70%)`
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 rounded-full border"
          style={{
            backgroundColor: `${roseGold}15`,
            borderColor: `${roseGold}30`,
            color: roseGold,
          }}
        >
          <span className="text-sm font-medium uppercase tracking-wider">{t(hero.badge)}</span>
        </motion.div>

        {/* Main Title with Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-light mb-6 tracking-tight"
          style={{
            color: textLight,
            fontFamily: "'Georgia', serif",
            textShadow: `0 0 40px ${roseGold}30, 0 0 80px ${roseGold}15`
          }}
        >
          {t(company.name)}
        </motion.h1>

        {/* Elegant Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl font-light mb-4"
          style={{
            color: roseGold,
            fontFamily: "'Georgia', serif",
            letterSpacing: '0.05em'
          }}
        >
          {t(company.tagline)}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: textDark }}
        >
          {t(company.description)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 rounded-lg font-medium transition-all duration-400 border-2"
            style={{
              borderColor: roseGold,
              color: roseGold,
              boxShadow: `0 0 20px ${roseGold}30`,
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 40px ${roseGold}60, inset 0 0 20px ${roseGold}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px ${roseGold}30`;
            }}
          >
            {t(hero.ctaPrimary)}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToServices}
            className="px-8 py-4 rounded-lg font-medium transition-all duration-400"
            style={{
              backgroundColor: roseGold,
              color: almostBlack,
              boxShadow: `0 0 30px ${roseGold}40`,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 50px ${roseGold}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${roseGold}40`;
            }}
          >
            {t(hero.ctaSecondary)}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: roseGold }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: roseGold }}
          />
        </motion.div>
      </motion.div>
    </section>
  );

  // ============================================
  // SECTION 2: SERVICES
  // ============================================
  const ServicesSection = () => (
    <section
      id="design4-services"
      className="py-32 transition-colors duration-300"
      style={{ backgroundColor: charcoal }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase tracking-widest text-sm font-medium"
            style={{ color: roseGold }}
          >
            {t({ en: 'Our Expertise', ar: 'خبراتنا', zh: '我们的专业' })}
          </span>
          <h2
            className="text-4xl md:text-5xl font-light mt-4 mb-6 tracking-tight"
            style={{
              color: textLight,
              fontFamily: "'Georgia', serif",
            }}
          >
            {t(servicesSection.title)}
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: textDark }}
          >
            {t(servicesSection.description)}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-8 rounded-lg transition-all duration-400 group"
              style={{
                backgroundColor: `${deepPurple}40`,
                borderLeft: `4px solid ${roseGold}`,
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 40px ${roseGold}30, inset 0 0 20px ${roseGold}10`;
                e.currentTarget.style.backgroundColor = `${deepPurple}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 24px rgba(0, 0, 0, 0.4)`;
                e.currentTarget.style.backgroundColor = `${deepPurple}40`;
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  backgroundColor: `${roseGold}20`,
                  color: roseGold,
                  boxShadow: `0 0 20px ${roseGold}30`
                }}
              >
                {serviceIcons[catIndex % serviceIcons.length]}
              </div>

              {/* Service Category Title */}
              <h3
                className="text-xl font-light mb-4 tracking-tight"
                style={{
                  color: textLight,
                  fontFamily: "'Georgia', serif",
                }}
              >
                {t(category.category)}
              </h3>

              {/* Service Items */}
              <div className="space-y-4">
                {category.items?.map((item, itemIndex) => (
                  <div key={itemIndex} className="pl-4" style={{ borderLeftColor: `${roseGold}40`, borderLeftWidth: '2px' }}>
                    <h4
                      className="font-medium mb-1 transition-colors duration-300"
                      style={{ color: textLight }}
                    >
                      {t(item.title)}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: textDark }}
                    >
                      {t(item.description)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ============================================
  // SECTION 3: ABOUT WITH ANIMATED COUNTERS
  // ============================================
  const AboutSection = () => (
    <section
      id="design4-about"
      className="py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${charcoal} 0%, ${deepPurple}30 50%, ${charcoal} 100%)`
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${roseGold}20, transparent 70%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase tracking-widest text-sm font-medium"
            style={{ color: roseGold }}
          >
            {t({ en: 'About Us', ar: 'من نحن', zh: '关于我们' })}
          </span>
          <h2
            className="text-4xl md:text-5xl font-light mt-4 mb-6 tracking-tight"
            style={{
              color: textLight,
              fontFamily: "'Georgia', serif",
            }}
          >
            {t(aboutSection.title)}
          </h2>
          <p
            className="max-w-3xl mx-auto text-lg leading-relaxed"
            style={{ color: textDark }}
          >
            {t(aboutSection.description)}
          </p>
        </motion.div>

        {/* Statistics with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {statsArray.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-400"
              style={{
                backgroundColor: `${deepPurple}30`,
                boxShadow: `0 0 20px ${roseGold}20`,
                border: `1px solid ${roseGold}30`
              }}
              whileHover={{
                boxShadow: `0 0 40px ${roseGold}40, inset 0 0 20px ${roseGold}10`
              }}
            >
              <AnimatedCounter value={stats[stat.key] || 0} accentColor={roseGold} />
              <p
                className="mt-4 text-sm uppercase tracking-wider font-light"
                style={{ color: textDark }}
              >
                {t(stat.label)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: `${roseGold}15`,
                borderColor: `${roseGold}30`,
                border: '1px solid',
                boxShadow: `0 0 15px ${roseGold}20`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${roseGold}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 15px ${roseGold}20`;
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: roseGold }}
              />
              <span
                className="font-light text-sm"
                style={{ color: roseGold }}
              >
                {t(value)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ============================================
  // SECTION 4: MANUFACTURING CITIES
  // ============================================
  const CitiesSection = () => (
    <section
      id="design4-cities"
      className="py-32 transition-colors duration-300"
      style={{ backgroundColor: almostBlack }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase tracking-widest text-sm font-medium"
            style={{ color: roseGold }}
          >
            {t({ en: 'Manufacturing Hubs', ar: 'مراكز التصنيع', zh: '制造中心' })}
          </span>
          <h2
            className="text-4xl md:text-5xl font-light mt-4 tracking-tight"
            style={{
              color: textLight,
              fontFamily: "'Georgia', serif",
            }}
          >
            {t({ en: 'Global Presence', ar: 'الانتشار العالمي', zh: '全球覆盖' })}
          </h2>
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cities.slice(0, 6).map((city, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-6 rounded-lg transition-all duration-400 group"
              style={{
                backgroundColor: `${deepPurple}50`,
                borderLeft: `4px solid ${roseGold}`,
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.5)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 40px ${roseGold}40, inset 0 0 20px ${roseGold}15`;
                e.currentTarget.style.backgroundColor = `${deepPurple}70`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 24px rgba(0, 0, 0, 0.5)`;
                e.currentTarget.style.backgroundColor = `${deepPurple}50`;
              }}
            >
              <h3
                className="text-2xl font-light mb-2 tracking-tight"
                style={{
                  color: textLight,
                  fontFamily: "'Georgia', serif",
                }}
              >
                {t(city.name)}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: textDark }}
              >
                {t(city.description)}
              </p>
              <div className="flex flex-wrap gap-2">
                {city.specialties?.slice(0, 3).map((spec, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: `${roseGold}20`,
                      color: roseGold,
                      border: `1px solid ${roseGold}40`
                    }}
                  >
                    {t(spec)}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ============================================
  // SECTION 5: PROCESS WORKFLOW
  // ============================================
  const ProcessSection = () => (
    <section
      id="design4-process"
      className="py-32 transition-colors duration-300"
      style={{ backgroundColor: charcoal }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase tracking-widest text-sm font-medium"
            style={{ color: roseGold }}
          >
            {t({ en: 'Our Process', ar: 'عملية العمل', zh: '工作流程' })}
          </span>
          <h2
            className="text-4xl md:text-5xl font-light mt-4 mb-6 tracking-tight"
            style={{
              color: textLight,
              fontFamily: "'Georgia', serif",
            }}
          >
            {t(processSection.title)}
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: textDark }}
          >
            {t(processSection.description)}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
            style={{
              background: `linear-gradient(to right, transparent, ${roseGold}40, transparent)`,
              boxShadow: `0 0 20px ${roseGold}20`
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2">
            {processStepsData.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  {/* Step Circle */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      backgroundColor: deepPurple,
                      borderColor: roseGold,
                      color: roseGold,
                      boxShadow: `0 0 20px ${roseGold}30`,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 40px ${roseGold}60, inset 0 0 15px ${roseGold}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${roseGold}30`;
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Text */}
                  <div className="text-center">
                    <span
                      className="text-sm font-light mb-1 block"
                      style={{ color: roseGold }}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className="font-light text-sm md:text-base tracking-tight"
                      style={{ color: textLight }}
                    >
                      {t(processLabels[step.key])}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center p-8 rounded-lg"
          style={{
            backgroundColor: `${deepPurple}40`,
            border: `1px solid ${roseGold}30`,
            boxShadow: `0 0 30px ${roseGold}20`
          }}
        >
          <p
            className="text-lg leading-relaxed"
            style={{ color: textDark }}
          >
            {t({ en: 'Each step is managed by our expert team with transparent communication and quality assurance', ar: 'يتم إدارة كل خطوة من قبل فريقنا الخبير مع التواصل الشفاف وضمان الجودة', zh: '每一步都由我们的专业团队管理，保持透明沟通和质量保证' })}
          </p>
        </motion.div>
      </div>
    </section>
  );

  // ============================================
  // SECTION 6: CONTACT FORM
  // ============================================
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '', email: '', phone: '', company: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setSubmitted(false);
      }, 2000);
    };

    return (
      <section
        id="design4-contact"
        className="py-32 relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${charcoal} 0%, ${deepPurple}20 100%)`
        }}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${roseGold}30, transparent 70%)`
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="uppercase tracking-widest text-sm font-medium"
              style={{ color: roseGold }}
            >
              {t({ en: 'Get in Touch', ar: 'تواصل معنا', zh: '联系我们' })}
            </span>
            <h2
              className="text-4xl md:text-5xl font-light mt-4 tracking-tight"
              style={{
                color: textLight,
                fontFamily: "'Georgia', serif",
              }}
            >
              {t(contactSection.title)}
            </h2>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-lg"
            style={{
              backgroundColor: `${deepPurple}40`,
              border: `2px solid ${roseGold}30`,
              boxShadow: `0 0 40px ${roseGold}20, inset 0 0 20px ${roseGold}10`
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  className="block text-sm font-light mb-2 transition-colors duration-300"
                  style={{ color: textLight }}
                >
                  {t({ en: 'Your Name', ar: 'اسمك', zh: '您的名称' })}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg font-light transition-all duration-300 border-2 outline-none"
                  style={{
                    backgroundColor: `${charcoal}80`,
                    color: textLight,
                    borderColor: `${roseGold}30`,
                    boxShadow: `0 0 15px ${roseGold}10`
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = roseGold;
                    e.target.style.boxShadow = `0 0 30px ${roseGold}40, inset 0 0 10px ${roseGold}15`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${roseGold}30`;
                    e.target.style.boxShadow = `0 0 15px ${roseGold}10`;
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-sm font-light mb-2"
                  style={{ color: textLight }}
                >
                  {t({ en: 'Email Address', ar: 'عنوان البريد الإلكتروني', zh: '电子邮件地址' })}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg font-light transition-all duration-300 border-2 outline-none"
                  style={{
                    backgroundColor: `${charcoal}80`,
                    color: textLight,
                    borderColor: `${roseGold}30`,
                    boxShadow: `0 0 15px ${roseGold}10`
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = roseGold;
                    e.target.style.boxShadow = `0 0 30px ${roseGold}40, inset 0 0 10px ${roseGold}15`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${roseGold}30`;
                    e.target.style.boxShadow = `0 0 15px ${roseGold}10`;
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-sm font-light mb-2"
                  style={{ color: textLight }}
                >
                  {t({ en: 'Phone Number', ar: 'رقم الهاتف', zh: '电话号码' })}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg font-light transition-all duration-300 border-2 outline-none"
                  style={{
                    backgroundColor: `${charcoal}80`,
                    color: textLight,
                    borderColor: `${roseGold}30`,
                    boxShadow: `0 0 15px ${roseGold}10`
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = roseGold;
                    e.target.style.boxShadow = `0 0 30px ${roseGold}40, inset 0 0 10px ${roseGold}15`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${roseGold}30`;
                    e.target.style.boxShadow = `0 0 15px ${roseGold}10`;
                  }}
                />
              </div>

              {/* Company */}
              <div>
                <label
                  className="block text-sm font-light mb-2"
                  style={{ color: textLight }}
                >
                  {t({ en: 'Company Name', ar: 'اسم الشركة', zh: '公司名称' })}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg font-light transition-all duration-300 border-2 outline-none"
                  style={{
                    backgroundColor: `${charcoal}80`,
                    color: textLight,
                    borderColor: `${roseGold}30`,
                    boxShadow: `0 0 15px ${roseGold}10`
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = roseGold;
                    e.target.style.boxShadow = `0 0 30px ${roseGold}40, inset 0 0 10px ${roseGold}15`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${roseGold}30`;
                    e.target.style.boxShadow = `0 0 15px ${roseGold}10`;
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-light mb-2"
                style={{ color: textLight }}
              >
                {t({ en: 'Your Message', ar: 'رسالتك', zh: '您的消息' })}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg font-light transition-all duration-300 border-2 outline-none resize-none"
                style={{
                  backgroundColor: `${charcoal}80`,
                  color: textLight,
                  borderColor: `${roseGold}30`,
                  boxShadow: `0 0 15px ${roseGold}10`
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = roseGold;
                  e.target.style.boxShadow = `0 0 30px ${roseGold}40, inset 0 0 10px ${roseGold}15`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = `${roseGold}30`;
                  e.target.style.boxShadow = `0 0 15px ${roseGold}10`;
                }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-lg font-light transition-all duration-400 text-lg tracking-wide"
              style={{
                backgroundColor: roseGold,
                color: almostBlack,
                boxShadow: `0 0 30px ${roseGold}40`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 50px ${roseGold}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${roseGold}40`;
              }}
            >
              {submitted ? t({ en: 'Message Sent!', ar: 'تم إرسال الرسالة!', zh: '消息已发送！' }) : t({ en: 'Send Message', ar: 'إرسال الرسالة', zh: '发送消息' })}
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center font-light"
                style={{ color: roseGold }}
              >
                {t({ en: 'Thank you for your message. We will be in touch soon!', ar: 'شكراً لرسالتك. سنتواصل معك قريباً!', zh: '感谢您的消息。我们很快会与您联系！' })}
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>
    );
  };

  // ============================================
  // RENDER COMPLETE DESIGN
  // ============================================
  return (
    <div style={{ backgroundColor: almostBlack }}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CitiesSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
