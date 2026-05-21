import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Design2() {
  const { language: activeLang } = useContext(LanguageContext);

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[activeLang] || obj.en || '';
  };

  const cities = [
    { name: 'Shenzhen', specialty: 'Electronics & Tech', icon: '⚡' },
    { name: 'Guangzhou', specialty: 'Textiles & Fashion', icon: '👕' },
    { name: 'Shanghai', specialty: 'Logistics Hub', icon: '🚀' },
  ];

  const services = [
    { title: 'Supplier Network', desc: '10,000+ verified manufacturers', color: '#ff6b35' },
    { title: 'Quality Assurance', desc: 'International certifications', color: '#00d9ff' },
    { title: 'Fast Logistics', desc: '15+ global shipping routes', color: '#39ff14' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a2a4a] to-[#0a0e27]" style={{ color: '#ffffff' }}>
      {/* Navigation */}
      <nav className="py-6 px-12 flex justify-between items-center backdrop-blur-md">
        <div className="text-2xl font-bold tracking-wider" style={{ color: '#00d9ff', textShadow: '0 0 20px rgba(0,217,255,0.5)' }}>
          FullRange
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-[#00d9ff] transition-colors">Home</a>
          <a href="#" className="hover:text-[#00d9ff] transition-colors">Services</a>
          <a href="#" className="hover:text-[#00d9ff] transition-colors">Cities</a>
        </div>
      </nav>

      {/* Hero - MODERN TECH */}
      <section className="h-screen flex items-center justify-center px-12 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00d9ff] rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00d9ff] rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-8xl font-black mb-6 tracking-tight" style={{ background: 'linear-gradient(45deg, #00d9ff, #ffffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            FullRange Supply
          </h1>
          <p className="text-2xl mb-12 text-[#00d9ff]">Global Sourcing, Simplified</p>
          <div className="flex gap-6 justify-center">
            <button className="px-8 py-4 bg-[#00d9ff] text-[#0a0e27] font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all" style={{ boxShadow: '0 0 20px rgba(0,217,255,0.3)' }}>
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-[#00d9ff] text-[#00d9ff] font-bold rounded-lg hover:bg-[#00d9ff] hover:text-[#0a0e27] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services - MODERN TECH */}
      <section className="py-32 px-12">
        <h2 className="text-6xl font-black text-center mb-24" style={{ color: '#00d9ff', textShadow: '0 0 20px rgba(0,217,255,0.3)' }}>
          Our Services
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-xl backdrop-blur-xl border border-[#00d9ff] hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(0,217,255,0.05)', boxShadow: '0 0 30px rgba(0,217,255,0.2)' }}
            >
              <div className="text-5xl mb-4">{service.title.charAt(0)}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: service.color }}>{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities - MODERN TECH */}
      <section className="py-32 px-12">
        <h2 className="text-6xl font-black text-center mb-24" style={{ color: '#00d9ff' }}>
          Manufacturing Hubs
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cities.map((city, i) => (
            <div
              key={i}
              className="p-8 rounded-xl cursor-pointer hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0,217,255,0.1)',
                border: '2px solid #00d9ff',
                boxShadow: '0 0 20px rgba(0,217,255,0.2)',
              }}
            >
              <div className="text-4xl mb-4">{city.icon}</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#00d9ff' }}>{city.name}</h3>
              <p className="text-sm text-gray-300">{city.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 text-center text-gray-500 border-t border-[#00d9ff]/20">
        <p>&copy; 2026 FullRange Supply. Powered by technology.</p>
      </footer>
    </div>
  );
}
