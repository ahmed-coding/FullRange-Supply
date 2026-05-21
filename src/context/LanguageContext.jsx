import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', name: 'EN', dir: 'ltr' },
  { code: 'ar', name: 'AR', dir: 'rtl' },
  { code: 'zh', name: '中文', dir: 'ltr' }
];

export function LanguageProvider({ children }) {
  const [activeLang, setActiveLang] = useState('en');

  useEffect(() => {
    document.documentElement.dir = activeLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = activeLang;
  }, [activeLang]);

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