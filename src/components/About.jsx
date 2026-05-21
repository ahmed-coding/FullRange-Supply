import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useThemeClasses';

function AnimatedCounter({ value, accentColor }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.5 });
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
      if (current >= value) { setDisplayValue(value); clearInterval(timer); }
      else { setDisplayValue(Math.floor(current)); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span ref={ref} className="text-4xl md:text-5xl font-bold transition-colors duration-300" style={{ color: accentColor }}>{displayValue.toLocaleString()}+</span>;
}

export default function About({ content }) {
  const { t } = useLanguage();
  const { theme, currentTheme } = useTheme();
  const classes = useThemeClasses(currentTheme);
  const stats = content?.stats || {};
  const section = content?.aboutSection || {};

  const statsArray = content?.statsArray || [];
  const values = content?.aboutValues || [];

  // Get theme-specific colors and styles
  const bgStyle = {
    background: theme?.colors?.backgroundDark ? `linear-gradient(to bottom, ${theme.colors.backgroundDark}, ${theme.colors.secondary})` : 'linear-gradient(to bottom, #0a1628, #0f2744)',
  };
  const accentColor = theme?.colors?.primary || '#d4af37';
  const textColor = theme?.colors?.text || '#ffffff';
  const textLightColor = theme?.colors?.textLight || '#a0aec0';

  return (
    <section id="about" className="py-24 transition-colors duration-300" style={bgStyle}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm font-medium transition-colors duration-300" style={{ color: accentColor }}>{t({ en: 'About Us', ar: 'من نحن', zh: '关于我们' })}</span>
          <h2 className={`${classes.getHeadingClasses('h2')} mt-4 mb-6 transition-colors duration-300`} style={{ color: textColor }}>{t(section.title)}</h2>
          <p className={`max-w-3xl mx-auto text-lg leading-relaxed transition-colors duration-300`} style={{ color: textLightColor }}>{t(section.description)}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statsArray.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={stats[stat.key] || 0} accentColor={accentColor} />
              <p className="mt-2 text-sm uppercase tracking-wider transition-colors duration-300" style={{ color: textLightColor }}>{t(stat.label)}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300`}
              style={{
                backgroundColor: `${accentColor}15`,
                borderColor: `${accentColor}30`,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              <span className="font-medium transition-colors duration-300" style={{ color: accentColor }}>{t(value)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}