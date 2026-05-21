import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function ManufacturingCities({ content }) {
  const { t, activeLang } = useLanguage();
  const cities = content?.manufacturingCities || [];

  const [selectedCity, setSelectedCity] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [layoutMode, setLayoutMode] = useState('grid');

  // Extract unique specialties for filtering
  const specialtyOptions = useMemo(() => {
    const specialties = new Set();
    cities.forEach(city => {
      const specs = t(city.specialties).split(', ');
      specs.forEach(spec => specialties.add(spec.trim()));
    });
    return Array.from(specialties).sort();
  }, [cities, t]);

  // Filter cities based on active filter
  const filteredCities = useMemo(() => {
    if (activeFilter === 'all') return cities;
    return cities.filter(city => {
      const specs = t(city.specialties);
      return specs.includes(activeFilter);
    });
  }, [cities, activeFilter, t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  };

  const cardHoverVariants = {
    rest: { scale: 1, rotateZ: 0 },
    hover: { scale: 1.05, rotateZ: 1 }
  };

  // LAYOUT 1: Grid Cards with Hover Overlay
  const GridLayout = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
    >
      <AnimatePresence mode="popLayout">
        {filteredCities.map((city, index) => (
          <motion.div
            key={city.name.en}
            variants={itemVariants}
            exit="exit"
            onClick={() => setSelectedCity(city)}
            className="cursor-pointer h-64 md:h-72"
          >
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="relative h-full rounded-xl overflow-hidden group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/20"
            >
              {/* Background city image placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-blue-500/20 group-hover:from-[#d4af37]/40 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
                {/* City Header */}
                <div className="z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{t(city.name)}</h3>
                  <p className="text-[#d4af37] text-sm font-medium">{t(city.province)}</p>
                </div>

                {/* Hover Reveal Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t({ en: 'Specialties', ar: 'التخصصات', zh: '特色' })}</p>
                    <div className="flex flex-wrap gap-2">
                      {t(city.specialties).split(', ').map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-[#d4af37]/20 text-[#d4af37] px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCity(city);
                    }}
                    className="w-full mt-4 px-4 py-2 bg-[#d4af37] hover:bg-[#f5c969] text-slate-900 font-medium rounded-lg transition-colors duration-200 text-sm"
                  >
                    {t({ en: 'View Details', ar: 'عرض التفاصيل', zh: '查看详情' })}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );

  // LAYOUT 2: Horizontal Scroll (Desktop)
  const HorizontalLayout = () => (
    <div className="hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto pb-4 scrollbar-hide"
      >
        <div className="flex gap-6 min-w-min">
          <AnimatePresence mode="popLayout">
            {filteredCities.map((city, index) => (
              <motion.div
                key={city.name.en}
                variants={itemVariants}
                exit="exit"
                onClick={() => setSelectedCity(city)}
                className="flex-shrink-0 w-80 h-96 cursor-pointer"
              >
                <motion.div
                  whileHover={{ translateY: -10 }}
                  className="relative h-full rounded-2xl overflow-hidden group bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 hover:border-[#d4af37] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/30 p-6 flex flex-col justify-between"
                >
                  {/* Background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-blue-500/10" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-white">{t(city.name)}</h3>
                      <p className="text-[#d4af37] font-medium mt-1">{t(city.province)}</p>
                    </div>

                    {/* Why Leading */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-3"
                    >
                      <p className="text-xs uppercase tracking-widest text-slate-400">{t({ en: "Why It's Leading", ar: 'لماذا هي رائدة', zh: '为何领先' })}</p>
                      <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                        {t(city.whyLeading)}
                      </p>
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <motion.div
                    className="relative z-10 space-y-3"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t({ en: 'Key Products', ar: 'المنتجات الرئيسية', zh: '主要产品' })}</p>
                      <div className="flex flex-wrap gap-2">
                        {t(city.specialties).split(', ').slice(0, 2).map((specialty, idx) => (
                          <span key={idx} className="text-xs bg-[#d4af37]/20 text-[#d4af37] px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCity(city);
                      }}
                      className="w-full px-4 py-2 bg-[#d4af37] hover:bg-[#f5c969] text-slate-900 font-medium rounded-lg transition-colors duration-200 text-sm"
                    >
                      {t({ en: 'Explore', ar: 'استكشف', zh: '浏览' })}
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );

  // LAYOUT 3: Interactive Tabs
  const TabLayout = () => (
    <div className="lg:hidden space-y-6">
      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 overflow-x-auto pb-2"
      >
        {filteredCities.map((city) => (
          <motion.button
            key={city.name.en}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
              selectedCity?.name.en === city.name.en
                ? 'bg-[#d4af37] text-slate-900'
                : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
            }`}
          >
            {t(city.name)}
          </motion.button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {selectedCity && (
          <motion.div
            key={selectedCity.name.en}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 space-y-4"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">{t(selectedCity.name)}</h3>
              <p className="text-[#d4af37] font-medium">{t(selectedCity.province)}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t({ en: "Why It's Leading", ar: 'لماذا هي رائدة', zh: '为何领先' })}</p>
              <p className="text-slate-300 leading-relaxed">{t(selectedCity.whyLeading)}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t({ en: 'Specialties', ar: 'التخصصات', zh: '特色' })}</p>
              <div className="flex flex-wrap gap-2">
                {t(selectedCity.specialties).split(', ').map((specialty, idx) => (
                  <span key={idx} className="text-sm bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 px-4 py-3 bg-[#d4af37] hover:bg-[#f5c969] text-slate-900 font-medium rounded-lg transition-colors duration-200"
            >
              {t({ en: 'Share City Info', ar: 'مشاركة معلومات المدينة', zh: '分享城市信息' })}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section id="manufacturing-cities" className="py-20 md:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#d4af37] uppercase tracking-widest text-sm font-medium">
            {t({ en: 'Manufacturing Hubs', ar: 'مراكز التصنيع', zh: '制造枢纽' })}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4 md:mb-6">
            {t({ en: 'China\'s 10 Major Manufacturing Cities', ar: 'مراكز الصين العشرة الرئيسية للتصنيع', zh: '中国10大制造城市' })}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            {t({ en: 'Strategic production centers driving global supply chains', ar: 'مراكز الإنتاج الاستراتيجية التي تقود سلاسل الإمداد العالمية', zh: '驱动全球供应链的战略生产中心' })}
          </p>
        </motion.div>

        {/* Layout Toggle & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          {/* Layout Mode Toggle - Desktop only */}
          <div className="hidden lg:flex gap-2 bg-slate-800/50 border border-slate-700 rounded-lg p-1">
            {[
              { mode: 'grid', label: t({ en: 'Grid', ar: 'شبكة', zh: '网格' }), icon: '⊞' },
              { mode: 'scroll', label: t({ en: 'Scroll', ar: 'تمرير', zh: '滚动' }), icon: '→' },
              { mode: 'tabs', label: t({ en: 'Tabs', ar: 'تبويب', zh: '标签页' }), icon: '∿' }
            ].map(({ mode, label, icon }) => (
              <motion.button
                key={mode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLayoutMode(mode)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  layoutMode === mode
                    ? 'bg-[#d4af37] text-slate-900'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{icon}</span>
                {label}
              </motion.button>
            ))}
          </div>

          {/* Filter Controls */}
          <div className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-[#d4af37] text-slate-900'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {t({ en: 'All Cities', ar: 'جميع المدن', zh: '所有城市' })}
            </motion.button>
          </div>
        </motion.div>

        {/* Specialty Filter Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-slate-700/50"
        >
          {specialtyOptions.slice(0, 6).map((specialty) => (
            <motion.button
              key={specialty}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(specialty)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === specialty
                  ? 'bg-[#d4af37] text-slate-900'
                  : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-slate-700'
              }`}
            >
              {specialty}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-slate-700 transition-all duration-300"
          >
            +{specialtyOptions.length - 6}
          </motion.button>
        </motion.div>

        {/* Layout Rendering */}
        {layoutMode === 'scroll' && <HorizontalLayout />}
        {layoutMode === 'tabs' && <TabLayout />}
        {layoutMode === 'grid' && <GridLayout />}

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-slate-400 text-sm"
        >
          {t({ en: `Showing ${filteredCities.length} of ${cities.length} cities`, ar: `عرض ${filteredCities.length} من ${cities.length} مدينة`, zh: `显示 ${filteredCities.length} 个城市，共 ${cities.length} 个` })}
        </motion.div>
      </div>

      {/* Modal - City Details */}
      <AnimatePresence>
        {selectedCity && layoutMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCity(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl"
            >
              <div className="p-6 md:p-8">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCity(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  ×
                </motion.button>

                {/* City Header */}
                <div className="mb-6">
                  <h3 className="text-4xl font-bold text-white mb-2">{t(selectedCity.name)}</h3>
                  <p className="text-[#d4af37] text-lg font-medium">{t(selectedCity.province)}</p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Why Leading */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="text-sm uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                      {t({ en: "Why It's Leading", ar: 'لماذا هي رائدة', zh: '为何领先' })}
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                      {t(selectedCity.whyLeading)}
                    </p>
                  </motion.div>

                  {/* Specialties */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="text-sm uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                      {t({ en: 'Specialties', ar: 'التخصصات', zh: '特色' })}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {t(selectedCity.specialties).split(', ').map((specialty, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * idx }}
                          className="bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full text-xs font-medium border border-[#d4af37]/30"
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-3 mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-3 bg-[#d4af37] hover:bg-[#f5c969] text-slate-900 font-semibold rounded-lg transition-colors duration-200"
                  >
                    {t({ en: 'Connect with Suppliers', ar: 'التواصل مع الموردين', zh: '连接供应商' })}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    {t({ en: 'Share', ar: 'مشاركة', zh: '分享' })}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
