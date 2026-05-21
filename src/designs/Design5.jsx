import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Design5() {
  const { language: activeLang } = useContext(LanguageContext);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1f77d6 0%, #ff6b35 50%, #39ff14 100%)', color: 'white' }}>
      {/* Navigation */}
      <nav className="py-6 px-12 flex justify-between items-center" style={{ backgroundColor: 'rgba(31,119,214,0.9)' }}>
        <div className="text-3xl font-black" style={{ color: '#39ff14', textShadow: '0 4px 10px rgba(57,255,20,0.5)' }}>
          FullRange 🚀
        </div>
        <div className="flex gap-8 text-sm font-bold">
          <a href="#" className="hover:scale-110 transition-transform">Home</a>
          <a href="#" className="hover:scale-110 transition-transform">Services</a>
          <a href="#" className="hover:scale-110 transition-transform">Contact</a>
        </div>
      </nav>

      {/* Hero - VIBRANT */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-8xl font-black mb-6 animate-pulse" style={{ color: 'white', textShadow: '0 0 30px rgba(57,255,20,0.8)' }}>
            FullRange Supply
          </h1>
          <p className="text-3xl font-black mb-12" style={{ color: '#39ff14' }}>Let's Grow Together! 📈</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="px-10 py-4 bg-white text-[#ff6b35] font-black rounded-2xl hover:scale-110 transition-transform" style={{ boxShadow: '0 10px 30px rgba(57,255,20,0.4)' }}>
              Get Started
            </button>
            <button className="px-10 py-4 border-4 border-white text-white font-black rounded-2xl hover:bg-white hover:text-[#1f77d6] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services - VIBRANT */}
      <section className="py-32 px-12" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <h2 className="text-6xl font-black text-center mb-24" style={{ color: 'white', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          Amazing Services ✨
        </h2>
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'Sourcing', color: '#ff6b35', emoji: '🏭' },
            { title: 'Quality', color: '#1f77d6', emoji: '✅' },
            { title: 'Logistics', color: '#39ff14', emoji: '🚚' },
            { title: 'Support', color: '#ffd700', emoji: '🎯' },
          ].map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl text-center hover:scale-110 transition-transform duration-300 font-bold cursor-pointer"
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: `3px solid ${s.color}`,
                boxShadow: `0 8px 20px ${s.color}40`,
              }}
            >
              <div className="text-5xl mb-3">{s.emoji}</div>
              <h3 className="text-2xl mb-2">{s.title}</h3>
              <p style={{ color: s.color }} className="font-black">Excellence Guaranteed</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities - VIBRANT */}
      <section className="py-32 px-12">
        <h2 className="text-6xl font-black text-center mb-24" style={{ color: 'white' }}>Manufacturing Hubs 🌍</h2>
        <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto">
          {['Shenzhen', 'Shanghai', 'Guangzhou', 'Suzhou', 'Hangzhou'].map((city, i) => {
            const colors = ['#ff6b35', '#1f77d6', '#39ff14', '#ffd700', '#ff1493'];
            return (
              <div
                key={i}
                className="p-6 rounded-2xl text-center font-black text-lg hover:scale-110 transition-transform cursor-pointer"
                style={{
                  backgroundColor: colors[i],
                  color: colors[i] === '#1f77d6' ? 'white' : 'black',
                  boxShadow: `0 10px 30px ${colors[i]}60`,
                }}
              >
                {city}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 text-center font-bold" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <p>&copy; 2026 FullRange Supply. Making Sourcing FUN! 🎉</p>
      </footer>
    </div>
  );
}
