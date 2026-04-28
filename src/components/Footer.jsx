import { useLanguage } from '../context/LanguageContext';

export default function Footer({ content }) {
  const { t } = useLanguage();
  const company = content?.company || {};

  return (
    <footer className="bg-[#0a1628] border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-start">
            <h3 className="text-white font-semibold text-lg">{t(company.name)}</h3>
            <p className="text-slate-400 text-sm mt-1">
              {t(company.tagline)}
            </p>
          </div>
          <div className="text-slate-500 text-sm">
            {new Date().getFullYear()} {t({ en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.', zh: '版权所有。' })}
          </div>
        </div>
      </div>
    </footer>
  );
}