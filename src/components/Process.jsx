import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useThemeClasses';

const stepsData = [
  { key: 'inquiry', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg> },
  { key: 'sourcing', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
  { key: 'negotiation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { key: 'sampling', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { key: 'shipping', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
  { key: 'delivery', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
];

// const labels = {
//   inquiry: { en: 'Inquiry', ar: 'الاستفسار', zh: '询价' },
//   sourcing: { en: 'Supplier Sourcing', ar: 'البحث عن الموردين', zh: '供应商寻找' },
//   negotiation: { en: 'Negotiation', ar: 'التفاوض', zh: '谈判' },
//   sampling: { en: 'Sampling & QC', ar: 'العينات وضمان الجودة', zh: '样品与质检' },
//   shipping: { en: 'Shipping & Logistics', ar: 'الشحن واللوجستيات', zh: '运输与物流' },
//   delivery: { en: 'Delivery', ar: 'التسليم', zh: '交付' }
// };

export default function Process({ content }) {
  const { t } = useLanguage();
  const { theme, currentTheme } = useTheme();
  const classes = useThemeClasses(currentTheme);
  const section = content?.processSection || {};
  const labels = content?.processSection?.labels || {};

  // Get theme-specific colors and styles
  const bgStyle = {
    backgroundColor: theme?.colors?.backgroundDark || '#0a1628',
  };
  const accentColor = theme?.colors?.primary || '#d4af37';
  const textColor = theme?.colors?.text || '#ffffff';
  const textLightColor = theme?.colors?.textLight || '#a0aec0';
  const secondaryColor = theme?.colors?.secondary || '#0f2744';

  return (
    <section id="process" className="py-24 transition-colors duration-300" style={bgStyle}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm font-medium transition-colors duration-300" style={{ color: accentColor }}>{t({ en: 'Our Process', ar: 'عملية العمل', zh: '工作流程' })}</span>
          <h2 className={`${classes.getHeadingClasses('h2')} mt-4 mb-6 transition-colors duration-300`} style={{ color: textColor }}>{t(section.title)}</h2>
          <p className={`max-w-2xl mx-auto text-lg transition-colors duration-300`} style={{ color: textLightColor }}>{t(section.description)}</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 transition-colors duration-300" style={{
            background: `linear-gradient(to right, transparent, ${accentColor}30, transparent)`
          }} />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2">
            {stepsData.map((step, index) => (
              <motion.div key={step.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      backgroundColor: secondaryColor,
                      borderColor: accentColor,
                      color: accentColor,
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="text-center">
                    <span className="text-sm font-medium mb-1 block transition-colors duration-300" style={{ color: accentColor }}>0{index + 1}</span>
                    <h3 className={`font-semibold text-sm md:text-base transition-colors duration-300`} style={{ color: textColor }}>{t(labels[step.key])}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-16 text-center">
          <p className="transition-colors duration-300" style={{ color: textLightColor }}>{t({ en: 'Each step is managed by our expert team with transparent communication', ar: 'كل خطوة يديرها فريقنا الخبير مع تواصل شفاف', zh: '每一步都由我们的专业团队管理，保持透明沟通' })}</p>
        </motion.div>
      </div>
    </section>
  );
}