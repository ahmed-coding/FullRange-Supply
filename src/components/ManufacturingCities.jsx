import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ManufacturingCities({ content }) {
  const { t } = useLanguage();
  const cities = content?.manufacturingCities || [];
  const [expandedCity, setExpandedCity] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <section id="cities" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37] uppercase tracking-widest text-sm font-medium">
            {t({ en: 'Manufacturing Hubs', ar: 'مراكز التصنيع', zh: '制造中心' })}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            {t({
              en: 'Across China\'s Premier Industrial Centers',
              ar: 'عبر مراكز الصناعة الرائدة في الصين',
              zh: '遍布中国顶级工业中心',
            })}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {t({
              en: 'We operate across China\'s most dynamic manufacturing regions, each specializing in unique industries and product categories.',
              ar: 'نعمل عبر أكثر المناطق الصناعية ديناميكية في الصين، كل منها متخصصة في صناعات وفئات منتجات فريدة.',
              zh: '我们在中国最具活力的制造地区开展业务，每个地区都专门从事独特的工业和产品类别。',
            })}
          </p>
        </motion.div>

        {/* Cities Grid - each city with potential expansion below */}
        <div className="space-y-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cities.map((city, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <motion.button
                  onClick={() => setExpandedCity(expandedCity === index ? null : index)}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-full text-left relative bg-gradient-to-br from-[#0f2744] to-[#1a3d5c] border border-[#d4af37]/20 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-[#d4af37]/50 cursor-pointer"
                >
                  {/* Background gradient accent */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Rank badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-[#d4af37]/20 border border-[#d4af37]/40 rounded-full flex items-center justify-center text-[#d4af37] text-xs font-bold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {city.rank}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* City Name & Chinese */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {city.city.en}
                      </h3>
                      <p className="text-[#d4af37] text-sm font-medium">{city.city.zh}</p>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                        {t({ en: 'Specialties', ar: 'التخصصات', zh: '专业' })}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {city.specialties.slice(0, 2).map((specialty, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-xs text-[#d4af37] font-medium hover:border-[#d4af37]/60 transition-colors"
                          >
                            {specialty}
                          </span>
                        ))}
                        {city.specialties.length > 2 && (
                          <span className="inline-block px-3 py-1 text-xs text-slate-500">
                            +{city.specialties.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{
                        opacity: expandedCity === index ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[#d4af37] text-sm font-medium flex items-center gap-1"
                    >
                      {expandedCity === index
                        ? t({ en: 'Show Less', ar: 'عرض أقل', zh: '显示较少' })
                        : t({ en: 'View More', ar: 'عرض المزيد', zh: '查看更多' })}
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        animate={{ rotate: expandedCity === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M4 6L8 10L12 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.button>

                {/* Expanded Description - Outside card, below it */}
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{
                    opacity: expandedCity === index ? 1 : 0,
                    height: expandedCity === index ? 'auto' : 0,
                    marginTop: expandedCity === index ? 12 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-[#0f2744]/50 border border-[#d4af37]/10 rounded-xl p-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {t(city.description)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            {t({
              en: 'Explore sourcing opportunities across our network of manufacturing partners',
              ar: 'اكتشف فرص التوريد عبر شبكتنا من شركاء التصنيع',
              zh: '探索遍布我们制造合作伙伴网络的采购机会',
            })}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#0a1628] font-bold rounded-lg hover:shadow-xl hover:shadow-[#d4af37]/30 transition-all duration-300"
          >
            {t({ en: 'Start Your Sourcing Journey', ar: 'ابدأ رحلتك في التوريد', zh: '开始您的采购之旅' })}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
