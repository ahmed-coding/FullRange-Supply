import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function AnimatedCounter({ value }) {
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

  return <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#d4af37]">{displayValue.toLocaleString()}+</span>;
}

export default function About({ content }) {
  const { t } = useLanguage();
  const stats = content?.stats || {};
  const section = content?.aboutSection || {};



  const statsArray = content?.statsArray || [];
  const values = content?.aboutValues || [];


  return (
    <section id="aboutUs" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0f2744]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-[#d4af37] uppercase tracking-widest text-sm font-medium">{t({ en: 'About Us', ar: 'من نحن', zh: '关于我们' })}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{t(section.title)}</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">{t(section.description)}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statsArray.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={stats[stat.key] || 0} />
              <p className="text-slate-400 mt-2 text-sm uppercase tracking-wider">{t(stat.label)}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-full border border-[#d4af37]/20">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span className="text-[#d4af37] font-medium">{t(value)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}