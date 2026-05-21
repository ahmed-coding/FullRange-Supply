import { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Design1() {
  const { language: activeLang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', email: '', country: '', message: '' });
  const [expandedCity, setExpandedCity] = useState(null);

  // Mock data function
  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[activeLang] || obj.en || '';
  };

  const content = {
    company: {
      name: { en: 'FullRange Supply', ar: 'FullRange Supply', zh: 'FullRange Supply' },
      tagline: { en: 'From China to the World — Smart Sourcing, Safe Trade', ar: 'من الصين إلى العالم — توريد ذكي وتجارة آمنة', zh: '从中国到世界 — 智能采购，安全贸易' },
    },
    hero: {
      badge: { en: 'Premium Sourcing Partner', ar: 'شريك التوريد المميز', zh: '优质采购合作伙伴' },
      ctaPrimary: { en: 'Contact Us', ar: 'اتصل بنا', zh: '联系我们' },
    }
  };

  const cities = [
    { name: 'Shenzhen', specialty: 'Electronics & Semiconductors', desc: 'China\'s tech hub' },
    { name: 'Guangzhou', specialty: 'Textiles & Apparel', desc: 'World\'s largest textile center' },
    { name: 'Shanghai', specialty: 'Chemicals & Logistics', desc: 'International trade hub' },
    { name: 'Suzhou', specialty: 'Precision Manufacturing', desc: 'Silicon Valley of China' },
    { name: 'Hangzhou', specialty: 'E-commerce & Digital', desc: 'Alibaba headquarters' },
  ];

  const services = [
    { title: 'Supplier Sourcing', desc: 'Verified factories across China' },
    { title: 'Price Negotiation', desc: 'Best prices and terms' },
    { title: 'Quality Control', desc: 'International standards' },
    { title: 'Logistics', desc: 'Global shipping solutions' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef', color: '#1a1a1a' }}>
      {/* Navigation */}
      <nav className="py-6 px-12 flex justify-between items-center" style={{ backgroundColor: '#1a1a1a', color: '#f5f3ef' }}>
        <div className="text-2xl font-light tracking-widest">{t(content.company.name)}</div>
        <div className="flex gap-8 text-sm tracking-wide">
          <a href="#hero" className="hover:text-[#c9a961] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#c9a961] transition-colors">Services</a>
          <a href="#cities" className="hover:text-[#c9a961] transition-colors">Cities</a>
          <a href="#contact" className="hover:text-[#c9a961] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section - LUXURY MINIMAL */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-12" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="mb-8">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#c9a961' }}>
            {t(content.hero.badge)}
          </span>
        </div>
        <h1 className="text-7xl font-light mb-6" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a', letterSpacing: '-0.02em' }}>
          {t(content.company.name)}
        </h1>
        <p className="text-2xl font-light mb-12 max-w-2xl" style={{ color: '#c9a961' }}>
          {t(content.company.tagline)}
        </p>
        <div className="flex gap-6">
          <button className="px-12 py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#1a1a1a] transition-all duration-300">
            {t(content.hero.ctaPrimary)}
          </button>
          <button className="px-12 py-4 bg-[#c9a961] text-[#1a1a1a] hover:bg-[#b89948] transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Services - LUXURY MINIMAL */}
      <section id="services" className="py-32 px-12" style={{ backgroundColor: '#1a1a1a', color: '#f5f3ef' }}>
        <h2 className="text-6xl font-light text-center mb-24" style={{ fontFamily: 'Georgia, serif' }}>Services</h2>
        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="p-8 border border-[#c9a961] hover:bg-[#c9a961] hover:text-[#1a1a1a] transition-colors duration-300">
              <h3 className="text-lg font-light mb-3" style={{ fontFamily: 'Georgia, serif' }}>{service.title}</h3>
              <p className="text-sm opacity-80">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities - LUXURY MINIMAL */}
      <section id="cities" className="py-32 px-12" style={{ backgroundColor: '#f5f3ef' }}>
        <h2 className="text-6xl font-light text-center mb-24" style={{ fontFamily: 'Georgia, serif' }}>Manufacturing Hubs</h2>
        <div className="flex gap-8 overflow-x-auto pb-8 max-w-6xl mx-auto">
          {cities.map((city, i) => (
            <div key={i} className="flex-shrink-0 w-96 p-8" style={{ backgroundColor: '#f5f3ef', border: '1px solid #c9a961', borderLeft: '4px solid #c9a961' }}>
              <h3 className="text-2xl font-light mb-2" style={{ fontFamily: 'Georgia, serif' }}>{city.name}</h3>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#c9a961' }}>{city.specialty}</p>
              <p className="text-sm opacity-70">{city.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact - LUXURY MINIMAL */}
      <section id="contact" className="py-32 px-12" style={{ backgroundColor: '#1a1a1a', color: '#f5f3ef' }}>
        <h2 className="text-6xl font-light text-center mb-24" style={{ fontFamily: 'Georgia, serif' }}>Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-transparent border-b border-[#c9a961] focus:outline-none text-white placeholder-opacity-60"
              style={{ borderBottomColor: '#c9a961' }}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-transparent border-b border-[#c9a961] focus:outline-none text-white placeholder-opacity-60"
              style={{ borderBottomColor: '#c9a961' }}
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full p-4 bg-transparent border-b border-[#c9a961] focus:outline-none text-white placeholder-opacity-60"
              style={{ borderBottomColor: '#c9a961' }}
            />
            <button className="w-full py-4 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-[#1a1a1a] transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 text-center text-sm opacity-60">
        <p>&copy; 2026 FullRange Supply. All rights reserved.</p>
      </footer>
    </div>
  );
}
