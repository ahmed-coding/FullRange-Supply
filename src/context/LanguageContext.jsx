import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', name: 'EN', dir: 'ltr' },
  { code: 'ar', name: 'AR', dir: 'rtl' },
  { code: 'zh', name: '中文', dir: 'ltr' }
];

const validLanguages = ['en', 'ar', 'zh'];

// Get initial language from URL or localStorage
const getInitialLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');

  if (urlLang && validLanguages.includes(urlLang)) {
    return urlLang;
  }

  const saved = localStorage.getItem('preferredLanguage');
  if (saved && validLanguages.includes(saved)) {
    return saved;
  }

  return 'en';
};

export function LanguageProvider({ children }) {
  const [activeLang, setActiveLang] = useState(getInitialLanguage());
  const [isInitialized, setIsInitialized] = useState(false);

  // Set up DOM attributes on mount
  useEffect(() => {
    document.documentElement.dir = activeLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = activeLang;
    setIsInitialized(true);
  }, []);

  // Update URL and localStorage when language changes (but not on mount)
  useEffect(() => {
    if (!isInitialized) return;

    const params = new URLSearchParams(window.location.search);
    params.set('lang', activeLang);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    localStorage.setItem('preferredLanguage', activeLang);
  }, [activeLang, isInitialized]);

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[activeLang] || obj.en || '';
  };

  return (
    <LanguageContext.Provider value={{ activeLang, setActiveLang, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);