import { LanguageProvider } from './context/LanguageContext';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ManufacturingCities from './components/ManufacturingCities';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import contentData from './data/content.json';

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-white font-bold text-xl">
              FullRange<span className="text-[#d4af37]">.</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors text-sm">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors text-sm">
                About
              </button>
              <button onClick={() => scrollToSection('cities')} className="text-slate-300 hover:text-white transition-colors text-sm">
                Cities
              </button>
              <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-white transition-colors text-sm">
                Process
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors text-sm">
                Contact
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const content = contentData.content || contentData;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a1628]">
        <Navbar />
        <main className="pt-16">
          <Hero content={content} />
          <Services content={content} />
          <About content={content} />
          <ManufacturingCities content={content} />
          <Process content={content} />
          <Contact content={content} />
        </main>
        <Footer content={content} />
      </div>
    </LanguageProvider>
  );
}

export default App;