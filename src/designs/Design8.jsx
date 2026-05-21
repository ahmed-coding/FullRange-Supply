/**
 * Design #8: FUTURISTIC NEO
 * Aesthetic: Sci-fi inspired, next-generation, holographic, cutting-edge
 * Colors: Deep space (#0a0e27), neon pink (#ff006e), cyber purple (#8338ec), cyan (#00ff88)
 * Vibe: Advanced, futuristic, tech-forward, otherworldly
 *
 * Features:
 * - Holographic animated background (space theme)
 * - 3D perspective text with neon glow
 * - Intense glow effects and holographic overlays
 * - Scan line animations
 * - Futuristic fonts (Space Mono, geometric sans-serif)
 * - Deep space background with neon accents
 */

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useThemeClasses';
import { useState, useEffect } from 'react';

// ============================================
// GLOBAL STYLES & ANIMATIONS
// ============================================
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  .neo-glow-intense {
    text-shadow: 0 0 10px rgba(255, 0, 110, 0.5), 0 0 20px rgba(255, 0, 110, 0.3), 0 0 30px rgba(255, 0, 110, 0.2);
    animation: neoGlowPulse 3s ease-in-out infinite;
  }

  .neo-glow-cyan {
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.6), 0 0 20px rgba(0, 255, 136, 0.4);
  }

  .neo-glow-purple {
    text-shadow: 0 0 10px rgba(131, 56, 236, 0.6), 0 0 20px rgba(131, 56, 236, 0.4);
  }

  @keyframes neoGlowPulse {
    0%, 100% {
      text-shadow: 0 0 10px rgba(255, 0, 110, 0.5), 0 0 20px rgba(255, 0, 110, 0.3), 0 0 30px rgba(255, 0, 110, 0.2);
    }
    50% {
      text-shadow: 0 0 20px rgba(255, 0, 110, 0.8), 0 0 40px rgba(255, 0, 110, 0.5), 0 0 60px rgba(255, 0, 110, 0.3);
    }
  }

  @keyframes scanLines {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }

  @keyframes holographicShift {
    0%, 100% {
      filter: drop-shadow(0 0 20px #ff006e) drop-shadow(0 0 40px rgba(255, 0, 110, 0.3));
    }
    50% {
      filter: drop-shadow(0 0 30px #8338ec) drop-shadow(0 0 50px rgba(131, 56, 236, 0.3));
    }
  }

  @keyframes cyberFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes neonBorder {
    0%, 100% {
      border-color: #ff006e;
      box-shadow: 0 0 20px rgba(255, 0, 110, 0.5), inset 0 0 20px rgba(255, 0, 110, 0.1);
    }
    50% {
      border-color: #8338ec;
      box-shadow: 0 0 30px rgba(131, 56, 236, 0.5), inset 0 0 20px rgba(131, 56, 236, 0.1);
    }
  }

  .neo-scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff006e, transparent);
    animation: scanLines 8s linear infinite;
    pointer-events: none;
    z-index: 999;
    opacity: 0.3;
  }

  .neo-hologram {
    animation: holographicShift 4s ease-in-out infinite;
  }

  .neo-3d-text {
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    letter-spacing: 0.05em;
    transform: perspective(1200px);
  }

  .neo-neon-border {
    border: 2px solid #ff006e;
    animation: neonBorder 3s ease-in-out infinite;
  }

  .neo-floating {
    animation: cyberFloat 4s ease-in-out infinite;
  }

  .neo-card {
    background: linear-gradient(135deg, rgba(10, 14, 39, 0.8) 0%, rgba(15, 39, 68, 0.6) 100%);
    border: 2px solid;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
  }

  .neo-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.1), transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  .neo-space-bg {
    background:
      radial-gradient(circle at 20% 50%, rgba(255, 0, 110, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(131, 56, 236, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
      linear-gradient(135deg, #0a0e27 0%, #050810 100%);
  }

  .neo-btn-glow {
    background: linear-gradient(135deg, #ff006e, #8338ec);
    box-shadow: 0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3);
    border: 1px solid #ff006e;
    position: relative;
    overflow: hidden;
    transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .neo-btn-glow:hover {
    box-shadow: 0 0 30px rgba(255, 0, 110, 0.8), 0 0 60px rgba(131, 56, 236, 0.5);
    transform: scale(1.05);
  }

  .neo-btn-glow::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: btnShine 2s infinite;
  }

  @keyframes btnShine {
    0% {
      left: -100%;
    }
    50%, 100% {
      left: 100%;
    }
  }
`;

// ============================================
// ICON COMPONENTS
// ============================================
const icons = {
  sourcing: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  quality: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  shipping: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
  process: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
  import: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
  trading: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

// ============================================
// NAVBAR COMPONENT
// ============================================
function Design8Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 neo-space-bg border-b-2 border-pink-500 backdrop-blur-lg" style={{ borderColor: '#ff006e' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-white font-bold text-xl neo-3d-text neo-glow-intense">
              AMZ<span style={{ color: '#00ff88' }}>.</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Cities', id: 'manufacturing-cities' },
                { label: 'About', id: 'about' },
                { label: 'Process', id: 'process' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="neo-3d-text text-sm transition-all duration-300"
                  style={{
                    color: '#00ff88',
                    textShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = '0 0 20px rgba(0, 255, 136, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = '0 0 10px rgba(0, 255, 136, 0.3)';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// HERO SECTION
// ============================================
function Design8Hero({ content }) {
  const { t } = useLanguage();
  const hero = content?.hero || {};
  const company = content?.company || {};

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 neo-space-bg">
      {/* Animated background stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: ['#ff006e', '#8338ec', '#00ff88'][i % 3],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Holographic gradient overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-3 rounded-full mb-8"
          style={{
            border: '2px solid #ff006e',
            background: 'rgba(255, 0, 110, 0.1)',
          }}
        >
          <span className="neo-3d-text text-sm" style={{ color: '#ff006e' }}>
            ► {t(hero.badge)}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 neo-glow-intense"
          style={{
            fontFamily: "'Space Mono', monospace",
            color: '#ffffff',
            letterSpacing: '0.05em',
          }}
        >
          {t(company.name)}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-4 neo-glow-cyan"
          style={{
            fontFamily: "'Space Mono', monospace",
            color: '#00ff88',
            letterSpacing: '0.03em',
          }}
        >
          {t(company.tagline)}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
          style={{
            color: '#b0b9ff',
            lineHeight: '1.8',
          }}
        >
          {t(company.description)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="neo-btn-glow px-8 py-4 text-white font-bold neo-3d-text rounded-lg"
          >
            {t(hero.ctaPrimary)}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToServices}
            className="px-8 py-4 font-bold neo-3d-text rounded-lg neo-neon-border"
            style={{
              color: '#00ff88',
              background: 'transparent',
              transition: 'all 300ms',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(0, 255, 136, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
            }}
          >
            {t(hero.ctaSecondary)}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: '#ff006e' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: '#ff006e' }} />
        </div>
      </motion.div>
    </section>
  );
}

// ============================================
// SERVICES SECTION
// ============================================
function Design8Services({ content }) {
  const { t } = useLanguage();
  const services = content?.services || [];
  const section = content?.servicesSection || {};

  const getIcon = (idx) => Object.values(icons)[idx % Object.values(icons).length];

  return (
    <section id="services" className="py-32 neo-space-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="neo-3d-text text-sm tracking-widest mb-4" style={{ color: '#00ff88' }}>
            ► COMPREHENSIVE SERVICES
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neo-glow-intense" style={{ fontFamily: "'Space Mono', monospace", color: '#ffffff' }}>
            {t(section.title)}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#b0b9ff' }}>
            {t(section.description)}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
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
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="neo-card p-8 rounded-lg group"
              style={{
                borderColor: '#ff006e',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                  color: '#ffffff',
                }}
              >
                {getIcon(catIndex)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 neo-glow-intense" style={{ color: '#ffffff' }}>
                {t(category.category)}
              </h3>

              {/* Items */}
              <div className="space-y-4">
                {category.items?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="pl-4 border-l-2 transition-colors duration-300"
                    style={{ borderColor: '#00ff88' }}
                  >
                    <p className="font-bold text-sm mb-1" style={{ color: '#ffffff' }}>
                      {t(item.title)}
                    </p>
                    <p className="text-sm" style={{ color: '#b0b9ff' }}>
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
}

// ============================================
// ABOUT SECTION
// ============================================
function Design8About({ content }) {
  const { t } = useLanguage();
  const about = content?.about || {};
  const stats = content?.stats || [];

  return (
    <section id="about" className="py-32 neo-space-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="neo-3d-text text-sm tracking-widest mb-4" style={{ color: '#00ff88' }}>
              ► ABOUT FULLRANGE
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 neo-glow-intense" style={{ fontFamily: "'Space Mono', monospace", color: '#ffffff' }}>
              {t(about.title)}
            </h2>
            <p className="text-lg mb-6" style={{ color: '#b0b9ff', lineHeight: '1.8' }}>
              {t(about.description)}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="neo-card p-8 rounded-lg text-center"
                style={{
                  borderColor: idx % 2 === 0 ? '#ff006e' : '#8338ec',
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-2 neo-glow-intense"
                  style={{ color: '#ffffff' }}
                >
                  {t(stat.value)}
                </motion.div>
                <p className="neo-3d-text text-sm" style={{ color: '#00ff88' }}>
                  {t(stat.label)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MANUFACTURING CITIES SECTION
// ============================================
function Design8Cities({ content }) {
  const { t } = useLanguage();
  const cities = content?.manufacturingCities || [];
  const section = content?.citiesSection || {};

  return (
    <section id="manufacturing-cities" className="py-32 neo-space-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="neo-3d-text text-sm tracking-widest mb-4" style={{ color: '#00ff88' }}>
            ► MANUFACTURING HUBS
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neo-glow-intense" style={{ fontFamily: "'Space Mono', monospace", color: '#ffffff' }}>
            {t(section.title)}
          </h2>
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cities.map((city, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="neo-card p-8 rounded-lg group cursor-pointer overflow-hidden"
              style={{
                borderColor: ['#ff006e', '#8338ec', '#00ff88'][idx % 3],
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              {/* 3D Perspective */}
              <div className="relative z-10">
                {/* Icon or City Indicator */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-bold text-lg"
                  style={{
                    background: ['linear-gradient(135deg, #ff006e, #8338ec)', 'linear-gradient(135deg, #8338ec, #00ff88)', 'linear-gradient(135deg, #00ff88, #ff006e)'][idx % 3],
                    color: '#ffffff',
                  }}
                >
                  {idx + 1}
                </div>

                <h3 className="text-xl font-bold mb-2 neo-glow-intense" style={{ color: '#ffffff' }}>
                  {t(city.name)}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#b0b9ff' }}>
                  {t(city.description)}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {city.specialties?.map((spec, specIdx) => (
                    <span
                      key={specIdx}
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: `rgba(0, 255, 136, 0.1)`,
                        color: '#00ff88',
                        border: '1px solid #00ff88',
                      }}
                    >
                      {t(spec)}
                    </span>
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
// PROCESS SECTION
// ============================================
function Design8Process({ content }) {
  const { t } = useLanguage();
  const process = content?.process || [];
  const section = content?.processSection || {};

  return (
    <section id="process" className="py-32 neo-space-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="neo-3d-text text-sm tracking-widest mb-4" style={{ color: '#00ff88' }}>
            ► OUR WORKFLOW
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neo-glow-intense" style={{ fontFamily: "'Space Mono', monospace", color: '#ffffff' }}>
            {t(section.title)}
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #ff006e, #8338ec, #00ff88)',
              boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)',
            }}
          />

          {/* Process Steps */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="neo-card p-8 rounded-lg" style={{ borderColor: '#8338ec' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                        }}
                      >
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold neo-glow-intense" style={{ color: '#ffffff' }}>
                        {t(step.title)}
                      </h3>
                    </div>
                    <p style={{ color: '#b0b9ff' }}>
                      {t(step.description)}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8 rounded-full relative z-10 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #ff006e, #00ff88)',
                    boxShadow: '0 0 30px rgba(255, 0, 110, 0.8)',
                    border: '2px solid #0a0e27',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function Design8Contact({ content }) {
  const { t } = useLanguage();
  const contact = content?.contact || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 neo-space-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="neo-3d-text text-sm tracking-widest mb-4" style={{ color: '#00ff88' }}>
            ► GET IN TOUCH
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neo-glow-intense" style={{ fontFamily: "'Space Mono', monospace", color: '#ffffff' }}>
            {t(contact.title)}
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="neo-card p-12 rounded-lg space-y-6"
          style={{ borderColor: '#ff006e' }}
        >
          {/* Name Field */}
          <motion.div whileHover={{ scale: 1.02 }} className="group">
            <label className="block text-sm font-bold mb-2 neo-3d-text" style={{ color: '#00ff88' }}>
              {t({ en: 'Full Name', ar: 'الاسم الكامل', zh: '全名' })}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-3 rounded-lg neo-3d-text transition-all duration-300"
              style={{
                background: 'rgba(10, 14, 39, 0.5)',
                border: '2px solid #8338ec',
                color: '#ffffff',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff006e';
                e.target.style.boxShadow = '0 0 20px rgba(255, 0, 110, 0.5)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#8338ec';
                e.target.style.boxShadow = 'none';
              }}
              placeholder="Your name"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div whileHover={{ scale: 1.02 }} className="group">
            <label className="block text-sm font-bold mb-2 neo-3d-text" style={{ color: '#00ff88' }}>
              {t({ en: 'Email Address', ar: 'عنوان البريد الإلكتروني', zh: '电子邮件地址' })}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-3 rounded-lg neo-3d-text transition-all duration-300"
              style={{
                background: 'rgba(10, 14, 39, 0.5)',
                border: '2px solid #8338ec',
                color: '#ffffff',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff006e';
                e.target.style.boxShadow = '0 0 20px rgba(255, 0, 110, 0.5)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#8338ec';
                e.target.style.boxShadow = 'none';
              }}
              placeholder="your@email.com"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div whileHover={{ scale: 1.02 }} className="group">
            <label className="block text-sm font-bold mb-2 neo-3d-text" style={{ color: '#00ff88' }}>
              {t({ en: 'Your Message', ar: 'رسالتك', zh: '您的消息' })}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-6 py-3 rounded-lg neo-3d-text transition-all duration-300"
              style={{
                background: 'rgba(10, 14, 39, 0.5)',
                border: '2px solid #8338ec',
                color: '#ffffff',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff006e';
                e.target.style.boxShadow = '0 0 20px rgba(255, 0, 110, 0.5)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#8338ec';
                e.target.style.boxShadow = 'none';
              }}
              placeholder="Your message..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full neo-btn-glow px-8 py-4 text-white font-bold neo-3d-text rounded-lg"
          >
            {t({ en: 'Send Message', ar: 'إرسال الرسالة', zh: '发送消息' })}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Design8Footer({ content }) {
  const { t } = useLanguage();
  const company = content?.company || {};
  const footer = content?.footer || {};

  return (
    <footer className="neo-space-bg border-t-2" style={{ borderColor: '#ff006e' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-4 neo-glow-intense" style={{ fontFamily: "'Space Mono', monospace" }}>
              AMZ<span style={{ color: '#00ff88' }}>.</span>
            </div>
            <p style={{ color: '#b0b9ff' }}>
              {t(company.description)}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 neo-glow-cyan" style={{ fontFamily: "'Space Mono', monospace" }}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { label: 'Services', id: 'services' },
                { label: 'About', id: 'about' },
                { label: 'Process', id: 'process' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm transition-colors duration-300"
                  style={{ color: '#b0b9ff' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00ff88';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#b0b9ff';
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 neo-glow-cyan" style={{ fontFamily: "'Space Mono', monospace" }}>
              Contact
            </h4>
            <div className="space-y-2 text-sm" style={{ color: '#b0b9ff' }}>
              <p>{t(footer.email)}</p>
              <p>{t(footer.phone)}</p>
              <p>{t(footer.address)}</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-2 pt-8" style={{ borderColor: '#8338ec' }}>
          <p className="text-center text-sm" style={{ color: '#b0b9ff' }}>
            © 2024 FullRange Supply. {t({ en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.', zh: '版权所有。' })}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN DESIGN8 COMPONENT
// ============================================
export default function Design8({ content }) {
  // Inject global styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <style>{globalStyles}</style>

      {/* Scan line effect */}
      <div className="neo-scanline" />

      <Design8Navbar />
      <main>
        <Design8Hero content={content} />
        <Design8Services content={content} />
        <Design8About content={content} />
        <Design8Cities content={content} />
        <Design8Process content={content} />
        <Design8Contact content={content} />
      </main>
      <Design8Footer content={content} />
    </div>
  );
}
