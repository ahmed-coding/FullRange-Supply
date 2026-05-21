import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Design3() {
  const { language: activeLang } = useContext(LanguageContext);

  const t = (obj) => (!obj) ? '' : (typeof obj === 'string') ? obj : obj[activeLang] || obj.en || '';

  return (
    <div className="min-h-screen bg-gray-50" style={{ color: '#1e3a5f' }}>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>FullRange Supply</div>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-semibold hover:text-blue-600">About</a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">Services</a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">Contact</a>
          </div>
          <button className="px-6 py-2 bg-[#1e3a5f] text-white rounded-md font-semibold">
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-12 py-20 flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4 leading-tight">Premium China Sourcing Partner</h1>
          <p className="text-xl text-gray-600 mb-8">Connect with verified factories. Negotiate better prices. Ensure quality. Manage logistics.</p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#1e3a5f] text-white rounded-md font-semibold">Contact Us</button>
            <button className="px-8 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-md font-semibold">Learn More</button>
          </div>
        </div>
        <div className="flex-1 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-6xl">📦</div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-2 gap-12">
            {[
              { title: 'Supplier Sourcing', desc: 'Access to 10,000+ verified factories' },
              { title: 'Price Negotiation', desc: 'Expert negotiators get you best deals' },
              { title: 'Quality Control', desc: 'Pre-production and pre-shipment inspections' },
              { title: 'Logistics', desc: 'Global shipping and customs handling' },
            ].map((s, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ backgroundColor: '#1e3a5f', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">120+</div>
            <div className="text-sm opacity-80">Global Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">350+</div>
            <div className="text-sm opacity-80">Partner Factories</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">980+</div>
            <div className="text-sm opacity-80">Shipments Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25</div>
            <div className="text-sm opacity-80">Countries Served</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-12 text-center text-gray-600 text-sm">
        <p>&copy; 2026 FullRange Supply. Professional B2B sourcing services.</p>
      </footer>
    </div>
  );
}
