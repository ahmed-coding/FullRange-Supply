import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

/**
 * DESIGN #6: INDUSTRIAL EDGE
 * Aesthetic: Raw, industrial, construction-inspired, strong, rugged
 * Colors: Gun metal gray (#2c3e50), rust orange (#c0392b), concrete (#95a5a6), black (#000)
 * Vibe: Strong, reliable, no-nonsense, industrial
 *
 * File: src/designs/Design6.jsx (646+ lines)
 * Complete component with 7 major sections:
 * - Hero (full-screen intro)
 * - Services (3-column grid)
 * - About (split layout with stats)
 * - Manufacturing Cities
 * - Process (vertical timeline)
 * - Contact (heavy-bordered form)
 * - Footer (navigation + info)
 */

// Metal texture pattern for industrial aesthetic
const metalTexturePattern = `
  repeating-linear-gradient(
    90deg,
    #1a1a1a,
    #1a1a1a 2px,
    #222 2px,
    #222 4px
  )
`;

// Industrial design theme export
export const industrialTheme = {
  id: 'industrial-edge',
  name: 'Industrial Edge',
  description: 'Raw, industrial, construction-inspired, strong, rugged',
  colors: {
    primary: '#c0392b', // Rust orange - primary action
    secondary: '#2c3e50', // Gun metal gray - secondary backgrounds
    accent: '#95a5a6', // Concrete - supporting text
    text: '#000000', // Black - text on light
    textLight: '#34495e', // Darker gray - secondary text
    background: '#ecf0f1', // Light gray - light sections
    backgroundDark: '#1a1a1a', // Very dark - dark sections
    border: '#000000', // Black - structural borders
    borderLight: '#2c3e50', // Gray borders - subtle divisions
    success: '#27ae60',
    warning: '#c0392b',
    error: '#e74c3c',
  },
  typography: {
    fontFamily: {
      serif: "'Work Sans', 'Courier New', monospace",
      sans: "'Work Sans', 'Courier New', monospace",
    },
    headings: {
      h1: { size: '4rem', weight: 800, lineHeight: 1.1, letterSpacing: '0.02em' },
      h2: { size: '3rem', weight: 700, lineHeight: 1.2, letterSpacing: '0.01em' },
      h3: { size: '2rem', weight: 700, lineHeight: 1.3 },
      h4: { size: '1.5rem', weight: 600, lineHeight: 1.4 },
    },
    body: {
      size: '1rem',
      weight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    caption: {
      size: '0.875rem',
      weight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
  },
};

// Icon definitions for services
const icons = {
  sourcing: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  quality: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  shipping: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
  order: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8"><path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
};

const iconArray = Object.values(icons);

/**
 * Main Design6 Component
 * Exports complete industrial-themed landing page
 */
export default function Design6({ content }) {
  const { t } = useLanguage();
  const company = content?.company || {};
  const hero = content?.hero || {};
  const services = content?.services || [];
  const section = content?.servicesSection || {};
  const aboutData = content?.about || {};
  const aboutSection = content?.aboutSection || {};
  const citiesData = content?.manufacturingCities || [];
  const processData = content?.process || [];
  const contactData = content?.contact || {};

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  const getIcon = (idx) => iconArray[idx % iconArray.length];

  // ===========================
  // HERO SECTION - INDUSTRIAL
  // ===========================
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Metal texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: metalTexturePattern }} />

      {/* Industrial gradient background */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, #1a1a1a 0%, #2c3e50 50%, #1a1a1a 100%)`,
      }} />

      {/* Heavy border effect - 8px black frame */}
      <div className="absolute inset-0 border-8 border-black pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Industrial badge - 4px rust border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block mb-8 px-6 py-3 border-4 border-[#c0392b]"
          style={{ backgroundColor: 'rgba(192, 57, 43, 0.1)' }}
        >
          <span className="text-[#c0392b] font-bold uppercase tracking-widest text-sm">{t(hero.badge)}</span>
        </motion.div>

        {/* Main heading - Bold, Industrial, 4rem, weight 800 */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-wide" style={{ color: '#ecf0f1', fontFamily: "'Work Sans', monospace" }}>
          <span>{t(company.name)}</span>
        </h1>

        {/* Subheading - Rust orange, uppercase */}
        <p className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wider" style={{ color: '#c0392b', fontFamily: "'Work Sans', monospace" }}>
          {t(company.tagline)}
        </p>

        {/* Description - Concrete color, supporting text */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: '#95a5a6', fontFamily: "'Work Sans', monospace" }}>
          {t(company.description)}
        </p>

        {/* Heavy CTA buttons - 4px borders, thick strokes */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(192, 57, 43, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-10 py-4 border-4 border-[#c0392b] uppercase font-bold tracking-widest text-lg transition-all"
            style={{ color: '#c0392b', backgroundColor: 'transparent' }}
          >
            {t(hero.ctaPrimary)}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(192, 57, 43, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToServices}
            className="px-10 py-4 border-4 uppercase font-bold tracking-widest text-lg transition-all"
            style={{ backgroundColor: '#c0392b', color: '#fff', borderColor: '#c0392b' }}
          >
            {t(hero.ctaSecondary)}
          </motion.button>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="w-8 h-12 border-4 border-[#c0392b] flex justify-center pt-3"
        >
          <div className="w-1.5 h-2 bg-[#c0392b]" />
        </motion.div>
      </motion.div>
    </section>
  );

  // ===========================
  // SERVICES SECTION - Grid with Heavy Borders
  // ===========================
  const ServicesSection = () => (
    <section id="services" className="py-32 relative" style={{ backgroundColor: '#ecf0f1' }}>
      {/* Heavy top border - 8px black */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-wide" style={{ color: '#000' }}>
            Our Services
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2c3e50' }}>
            {t(section.description)}
          </p>
        </motion.div>

        {/* 3-column grid with staggered animation */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="p-8 transition-all duration-300 border-8 border-black relative group hover:shadow-2xl"
              style={{ backgroundColor: '#fff' }}
            >
              {/* Metal shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity" style={{ backgroundImage: metalTexturePattern }} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon container - 4px rust border */}
                  <div className="w-16 h-16 flex items-center justify-center border-4 border-[#c0392b]" style={{ backgroundColor: '#c0392b15' }}>
                    <div style={{ color: '#c0392b' }}>
                      {getIcon(catIndex)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black uppercase" style={{ color: '#000' }}>
                    {t(category.category)}
                  </h3>
                </div>

                {/* Items with rust left border */}
                <div className="space-y-4 border-l-4 border-[#c0392b] pl-6">
                  {category.items?.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-bold uppercase tracking-wider mb-2" style={{ color: '#2c3e50' }}>
                        {t(item.title)}
                      </h4>
                      <p style={{ color: '#34495e' }}>
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

      {/* Heavy bottom border - 8px black */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-black" />
    </section>
  );

  // ===========================
  // ABOUT SECTION - Industrial Stats & Content
  // ===========================
  const AboutSection = () => (
    <section id="about" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Metal texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: metalTexturePattern }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats in circular borders */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-wide" style={{ color: '#c0392b' }}>
              {t(aboutSection.title)}
            </h2>

            <p className="text-lg mb-12 leading-relaxed" style={{ color: '#95a5a6' }}>
              {t(aboutData.description)}
            </p>

            {/* Industrial stats in bordered circles - 4px rust borders */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Global Partners', value: '500+' },
                { label: 'Industries Served', value: '50+' },
                { label: 'Quality Rate', value: '99.8%' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="relative w-32 h-32 mx-auto"
                >
                  <div className="w-full h-full border-4 border-[#c0392b] rounded-full flex flex-col items-center justify-center relative group">
                    <div className="text-3xl font-black" style={{ color: '#c0392b' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase font-bold text-center mt-2" style={{ color: '#95a5a6' }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Heavy bordered content boxes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* 3 content boxes with 4px rust borders */}
            {[
              { title: 'Reliability', desc: 'Built on decades of industrial expertise and proven track record' },
              { title: 'Innovation', desc: 'Cutting-edge manufacturing solutions and continuous improvement' },
              { title: 'Quality', desc: 'Uncompromising standards in every product and service delivery' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border-4 border-[#2c3e50]" style={{ backgroundColor: '#2c3e50' }}>
                <h3 className="font-black uppercase tracking-wider mb-3" style={{ color: '#c0392b' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#95a5a6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Corner accent borders */}
      <div className="absolute top-0 left-0 w-32 h-32 border-r-4 border-b-4 border-[#c0392b]" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-l-4 border-t-4 border-[#c0392b]" />
    </section>
  );

  // ===========================
  // CITIES SECTION - Manufacturing Locations
  // ===========================
  const CitiesSection = () => (
    <section id="manufacturing-cities" className="py-32" style={{ backgroundColor: '#ecf0f1' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-wide" style={{ color: '#000' }}>
            Manufacturing Cities
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2c3e50' }}>
            Industrial facilities across strategic global locations
          </p>
        </motion.div>

        {/* 3-column grid with 8px black borders */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {citiesData.slice(0, 6).map((city, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              className="p-8 border-8 border-black transition-all duration-300 group"
              style={{ backgroundColor: '#fff' }}
            >
              {/* Metal shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: metalTexturePattern }} />

              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase mb-3 tracking-wider" style={{ color: '#c0392b' }}>
                  {city.name}
                </h3>
                <p className="mb-4" style={{ color: '#34495e' }}>
                  {city.region}
                </p>

                {/* Industrial divider line - 2px black */}
                <div className="h-2 bg-black mb-4 w-12" />

                {/* Facilities list with rust square bullets */}
                <ul className="space-y-2">
                  {city.facilities?.slice(0, 3).map((facility, fidx) => (
                    <li key={fidx} className="flex items-start gap-3" style={{ color: '#2c3e50' }}>
                      <span className="text-[#c0392b] font-bold mt-1">■</span>
                      <span className="font-medium">{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ===========================
  // PROCESS SECTION - Vertical Timeline
  // ===========================
  const ProcessSection = () => (
    <section id="process" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Metal texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: metalTexturePattern }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-wide" style={{ color: '#c0392b' }}>
            Our Process
          </h2>
        </motion.div>

        {/* Industrial timeline with vertical center line */}
        <div className="relative">
          {/* Vertical connector line - 2px rust center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2" style={{ backgroundColor: '#c0392b' }} />

          <div className="space-y-12">
            {processData.slice(0, 5).map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content box with 4px rust border */}
                <div className="flex-1 border-4 border-[#c0392b] p-8" style={{ backgroundColor: '#2c3e50' }}>
                  <h3 className="text-2xl font-black mb-3 uppercase" style={{ color: '#c0392b' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#95a5a6' }}>
                    {step.description}
                  </p>
                </div>

                {/* Industrial numbered square - 4px rust border, not circular */}
                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-[#c0392b] bg-black flex items-center justify-center relative z-10">
                    <span className="text-2xl font-black" style={{ color: '#c0392b' }}>
                      {idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ===========================
  // CONTACT SECTION - Heavy Bordered Form
  // ===========================
  const ContactSection = () => (
    <section id="contact" className="py-32 relative" style={{ backgroundColor: '#ecf0f1' }}>
      {/* Heavy top border - 8px black */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-wide" style={{ color: '#000' }}>
            Get in Touch
          </h2>
          <p className="text-xl" style={{ color: '#2c3e50' }}>
            Reach out to discuss your industrial supply needs
          </p>
        </motion.div>

        {/* Form with 8px border */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 border-8 border-black"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block font-black uppercase tracking-wider mb-4" style={{ color: '#000' }}>
                Name
              </label>
              <input
                type="text"
                className="w-full p-4 border-4 border-black focus:border-[#c0392b] focus:outline-none transition-colors"
                style={{ backgroundColor: '#f9f9f9' }}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-black uppercase tracking-wider mb-4" style={{ color: '#000' }}>
                Email
              </label>
              <input
                type="email"
                className="w-full p-4 border-4 border-black focus:border-[#c0392b] focus:outline-none transition-colors"
                style={{ backgroundColor: '#f9f9f9' }}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block font-black uppercase tracking-wider mb-4" style={{ color: '#000' }}>
              Message
            </label>
            <textarea
              rows="6"
              className="w-full p-4 border-4 border-black focus:border-[#c0392b] focus:outline-none transition-colors resize-none"
              style={{ backgroundColor: '#f9f9f9' }}
              placeholder="Your message..."
            />
          </div>

          {/* Submit button with hover glow */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(192, 57, 43, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-6 border-4 uppercase font-black tracking-widest text-lg transition-all"
            style={{ backgroundColor: '#c0392b', borderColor: '#c0392b', color: '#fff' }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Heavy bottom border - 8px black */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-black" />
    </section>
  );

  // ===========================
  // FOOTER SECTION
  // ===========================
  const FooterSection = () => (
    <footer className="relative" style={{ backgroundColor: '#000' }}>
      {/* Metal texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: metalTexturePattern }} />

      <div className="relative z-10 py-16 px-6 border-t-8 border-[#c0392b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-wider" style={{ color: '#c0392b' }}>
                AMZ<span style={{ color: '#95a5a6' }}>.</span>
              </h3>
              <p style={{ color: '#95a5a6' }}>
                Industrial supply excellence since 2009
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black uppercase mb-4 tracking-wider" style={{ color: '#c0392b' }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Services', 'About', 'Cities', 'Process'].map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="hover:text-[#c0392b] transition-colors font-bold uppercase text-sm"
                      style={{ color: '#95a5a6' }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-black uppercase mb-4 tracking-wider" style={{ color: '#c0392b' }}>
                Contact
              </h4>
              <p style={{ color: '#95a5a6' }} className="font-bold">
                +1-800-SUPPLY-1
              </p>
              <p style={{ color: '#95a5a6' }} className="font-bold">
                info@amz-supply.com
              </p>
            </div>
          </div>

          {/* Divider - 2px rust */}
          <div className="h-2 bg-[#c0392b] mb-8" />

          {/* Copyright */}
          <div className="text-center">
            <p style={{ color: '#95a5a6' }} className="font-bold">
              © 2024 AMZ Industrial Supply. Industrial Edge Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  // ===========================
  // RENDER COMPLETE PAGE
  // ===========================
  return (
    <div style={{ backgroundColor: '#1a1a1a' }}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CitiesSection />
      <ProcessSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export { industrialTheme };
