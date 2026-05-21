import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useThemeClasses';

export default function Footer({ content }) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const classes = useThemeClasses(theme?.id || 'luxury-minimal');
  const company = content?.company || {};

  // Get theme-specific colors and styles
  const bgStyle = {
    backgroundColor: theme?.colors?.backgroundDark || '#0a1628',
    borderTopColor: `${theme?.colors?.primary || '#d4af37'}20`,
  };
  const textColor = theme?.colors?.text || '#ffffff';
  const textLightColor = theme?.colors?.textLight || '#a0aec0';

  return (
    <footer className="border-t py-8 transition-colors duration-300" style={bgStyle}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-start">
            <h3 className={`font-semibold text-lg transition-colors duration-300`} style={{ color: textColor }}>{t(company.name)}</h3>
            <p className={`text-sm mt-1 transition-colors duration-300`} style={{ color: textLightColor }}>{t(company.tagline)}</p>
          </div>
          <div className={`text-sm transition-colors duration-300`} style={{ color: textLightColor }}>
            {new Date().getFullYear()} {t({ en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.', zh: '版权所有。' })}
          </div>
        </div>
      </div>
    </footer>
  );
}