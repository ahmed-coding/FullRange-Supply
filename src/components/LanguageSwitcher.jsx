import { motion } from 'framer-motion';
import { useLanguage, languages } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { activeLang, setActiveLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-[#0f2744] rounded-lg p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveLang(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            activeLang === lang.code
              ? 'bg-[#d4af37] text-[#0a1628]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {lang.name}
        </motion.button>
      ))}
    </div>
  );
}