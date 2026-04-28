import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const stepsData = [
  { key: 'inquiry', icon: 'search' },
  { key: 'sourcing', icon: 'users' },
  { key: 'negotiation', icon: 'money' },
  { key: 'sampling', icon: 'shield' },
  { key: 'shipping', icon: 'truck' },
  { key: 'delivery', icon: 'check' }
];

const stepsEn = ['Inquiry', 'Supplier Sourcing', 'Negotiation', 'Sampling & QC', 'Shipping & Logistics', 'Delivery'];
const stepsAr = ['الاستفسار', 'البحث عن الموردين', 'التفاوض', 'العينات وضمان الجودة', 'الشحن واللوجستيات', 'التسليم'];
const stepsZh = ['询价', '供应商寻找', '谈判', '样品与质检', '运输与物流', '交付'];

const defaultTitle = { en: 'Seamless Trading Workflow', ar: 'سلسلة عمل تجارية سلسة', zh: '无缝贸易流程' };
const defaultDesc = { en: 'A proven 6-step process ensuring smooth transactions from inquiry to delivery', ar: 'عملية من 6 خطوات تضمن صفقات سلسة من الاستفسار إلى التسليم', zh: '经过验证的6步流程，确保从询价到交付的顺畅交易' };
const bottomText = { en: 'Each step is managed by our expert team with transparent communication', ar: 'كل خطوة يديرها فريقنا الخبير مع تواصل شفاف', zh: '每一步都由我们的专业团队管理，保持透明沟通' };

const icons = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  money: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  truck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
};

function getStepLabel(key, lang) {
  const idx = stepsData.findIndex(s => s.key === key);
  if (lang === 'ar') return stepsAr[idx];
  if (lang === 'zh') return stepsZh[idx];
  return stepsEn[idx];
}

export default function Process({ content }) {
  const { t, activeLang } = useLanguage();
  const section = content?.processSection || {};

  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37] uppercase tracking-widest text-sm font-medium">
            {t({ en: 'Our Process', ar: 'عملية العمل', zh: '工作流程' })}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            {t(section.title) || t(defaultTitle)}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t(section.description) || t(defaultDesc)}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2">
            {stepsData.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-[#0a1628] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-4"
                  >
                    {icons[step.icon]}
                  </motion.div>
                  <div className="text-center">
                    <span className="text-[#d4af37] text-sm font-medium mb-1 block">
                      0{index + 1}
                    </span>
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {getStepLabel(step.key, activeLang)}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            {t(bottomText)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}