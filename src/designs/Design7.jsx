import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Design7() {
  const { language: activeLang } = useContext(LanguageContext);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf7f2', color: '#2d5016' }}>
      {/* Navigation */}
      <nav className="py-6 px-12 flex justify-between items-center" style={{ backgroundColor: '#2d5016' }}>
        <div className="text-2xl font-light tracking-wide" style={{ color: '#a8b8a0' }}>
          🌱 FullRange
        </div>
        <div className="flex gap-8 text-sm" style={{ color: '#a8b8a0' }}>
          <a href="#" className="hover:text-[#d4af37] transition-colors">Home</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors">Services</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors">Cities</a>
        </div>
      </nav>

      {/* Hero - NATURE */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full" style={{ backgroundColor: '#2d5016' }}></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full" style={{ backgroundColor: '#8b6f47' }}></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-7xl font-light mb-6" style={{ fontFamily: 'Nunito, sans-serif', color: '#2d5016', letterSpacing: '0.05em' }}>
            FullRange Supply
          </h1>
          <p className="text-2xl font-light mb-12" style={{ color: '#8b6f47' }}>Growing Together 🌿 Sustainable Sourcing</p>
          <div className="flex gap-6 justify-center">
            <button className="px-12 py-4 rounded-full font-semibold transition-all" style={{ backgroundColor: '#2d5016', color: '#faf7f2', boxShadow: '0 4px 15px rgba(45,80,22,0.2)' }}>
              Explore Our Forest
            </button>
          </div>
        </div>
      </section>

      {/* Services - NATURE */}
      <section className="py-32 px-12" style={{ backgroundColor: '#e8f3e3' }}>
        <h2 className="text-6xl font-light text-center mb-24" style={{ fontFamily: 'Nunito, sans-serif', color: '#2d5016' }}>
          Our Sustainable Services 🌍
        </h2>
        <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: 'Organic Growth', emoji: '🌱', desc: 'Building lasting relationships' },
            { title: 'Eco-Conscious', emoji: '♻️', desc: 'Sustainable practices' },
            { title: 'Natural Flow', emoji: '💧', desc: 'Seamless logistics' },
          ].map((s, i) => (
            <div
              key={i}
              className="p-12 text-center rounded-3xl transition-all hover:scale-105"
              style={{
                backgroundColor: '#faf7f2',
                border: `2px solid #8b6f47`,
                boxShadow: '0 4px 15px rgba(139,111,71,0.1)',
              }}
            >
              <div className="text-5xl mb-4">{s.emoji}</div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: '#2d5016' }}>{s.title}</h3>
              <p className="text-sm" style={{ color: '#8b6f47' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities - NATURE */}
      <section className="py-32 px-12">
        <h2 className="text-6xl font-light text-center mb-24" style={{ fontFamily: 'Nunito, sans-serif', color: '#2d5016' }}>
          Growing Across China 🌏
        </h2>
        <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto">
          {['Shenzhen', 'Shanghai', 'Guangzhou', 'Suzhou', 'Hangzhou'].map((city, i) => (
            <div
              key={i}
              className="p-8 text-center rounded-2xl cursor-pointer hover:scale-110 transition-transform"
              style={{
                backgroundColor: '#2d5016',
                color: '#faf7f2',
              }}
            >
              <div className="text-3xl mb-2">🏭</div>
              <h3 className="font-semibold">{city}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 text-center" style={{ backgroundColor: '#2d5016', color: '#faf7f2' }}>
        <p>&copy; 2026 FullRange Supply. Growing Sustainably. 🌿</p>
      </footer>
    </div>
  );
}
