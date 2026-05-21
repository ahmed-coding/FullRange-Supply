import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage, languages } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { activeLang, setActiveLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find(l => l.code === activeLang);

  const handleSelect = (langCode) => {
    setActiveLang(langCode);
    setIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: i * 0.05, ease: 'easeOut' }
    })
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 border border-[#d4af37]/30 text-[#d4af37] font-medium text-sm hover:border-[#d4af37]/60 transition-all duration-300 flex items-center gap-2 group"
        whileHover={{ borderColor: '#d4af37' }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="inline-block">{currentLang?.name}</span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <path d="M4 6L8 10L12 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 mt-2 py-2 bg-[#0f2744] border border-[#d4af37]/20 rounded-lg shadow-2xl backdrop-blur-sm min-w-[140px] z-50"
          >
            {languages.map((lang, i) => (
              <motion.button
                key={lang.code}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => handleSelect(lang.code)}
                className={`w-full px-4 py-2.5 text-sm font-medium text-left transition-all duration-200 relative overflow-hidden group ${
                  activeLang === lang.code
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {activeLang === lang.code && (
                    <motion.span
                      layoutId="activeDot"
                      className="w-2 h-2 rounded-full bg-[#d4af37]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  {lang.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}