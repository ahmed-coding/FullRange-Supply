import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Design6() {
  const { language: activeLang } = useContext(LanguageContext);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2c3e50', color: '#ffffff' }}>
      {/* Navigation */}
      <nav className="py-6 px-12 flex justify-between items-center" style={{ backgroundColor: '#000000', borderBottom: '8px solid #c0392b' }}>
        <div className="text-3xl font-black tracking-wider" style={{ color: '#c0392b', textShadow: '0 4px 15px rgba(192,57,43,0.6)' }}>
          FULLRANGE
        </div>
        <div className="flex gap-8 text-sm font-black uppercase tracking-widest">
          <a href="#" className="hover:text-[#c0392b] transition-colors">Supply</a>
          <a href="#" className="hover:text-[#c0392b] transition-colors">Trade</a>
          <a href="#" className="hover:text-[#c0392b] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero - INDUSTRIAL */}
      <section className="h-screen flex flex-col justify-center items-center px-12 relative" style={{ backgroundColor: '#1a1a1a', borderBottom: '16px solid #c0392b' }}>
        <div className="relative z-10 text-center">
          <h1 className="text-8xl font-black mb-6 tracking-tighter uppercase" style={{ color: '#c0392b', textShadow: '0 8px 20px rgba(0,0,0,0.8)', letterSpacing: '0.05em' }}>
            FULLRANGE
          </h1>
          <p className="text-4xl font-black mb-12 uppercase" style={{ color: '#95a5a6', letterSpacing: '0.1em' }}>
            Industrial Strength Sourcing
          </p>
          <div className="flex gap-8 justify-center">
            <button className="px-12 py-6 border-4 border-[#c0392b] text-[#c0392b] font-black uppercase text-lg hover:bg-[#c0392b] hover:text-white transition-all" style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.5)' }}>
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Services - INDUSTRIAL */}
      <section className="py-32 px-12" style={{ backgroundColor: '#1a1a1a' }}>
        <h2 className="text-6xl font-black text-center mb-24 uppercase" style={{ color: '#c0392b' }}>
          SERVICES
        </h2>
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
          {['SOURCING', 'QUALITY', 'LOGISTICS', 'SUPPORT'].map((service, i) => (
            <div
              key={i}
              className="p-8 font-black text-center hover:scale-105 transition-transform cursor-pointer"
              style={{
                backgroundColor: '#2c3e50',
                border: '8px solid #c0392b',
                boxShadow: '0 10px 25px rgba(0,0,0,0.7)',
                color: '#c0392b',
              }}
            >
              <h3 className="text-2xl uppercase tracking-wider">{service}</h3>
              <p className="text-xs mt-4 opacity-80">INDUSTRIAL GRADE</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities - INDUSTRIAL */}
      <section className="py-32 px-12" style={{ backgroundColor: '#2c3e50' }}>
        <h2 className="text-6xl font-black text-center mb-24 uppercase" style={{ color: '#c0392b' }}>MANUFACTURING HUBS</h2>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['SHENZHEN', 'SHANGHAI', 'GUANGZHOU', 'SUZHOU', 'HANGZHOU', 'DONGGUAN'].map((city, i) => (
            <div
              key={i}
              className="p-12 font-black text-center hover:shadow-2xl transition-all cursor-pointer"
              style={{
                border: '8px solid #c0392b',
                backgroundColor: '#1a1a1a',
                color: '#c0392b',
                boxShadow: '0 8px 20px rgba(192,57,43,0.3)',
              }}
            >
              <h3 className="text-2xl uppercase tracking-wider">{city}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 text-center font-black uppercase" style={{ backgroundColor: '#000000', borderTop: '8px solid #c0392b' }}>
        <p>&copy; 2026 FULLRANGE SUPPLY. INDUSTRIAL STRENGTH. PROVEN RESULTS.</p>
      </footer>
    </div>
  );
}
