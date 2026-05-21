import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ManufacturingCities from './components/ManufacturingCities';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
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
            <a href="#" className="text-white font-bold text-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] rounded">
              AMZ<span className="text-[#d4af37]">.</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] rounded" aria-label="Go to Services section">
                Services
              </button>
              <button onClick={() => scrollToSection('manufacturing-cities')} className="text-slate-300 hover:text-white transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] rounded" aria-label="Go to Manufacturing Cities section">
                Cities
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] rounded" aria-label="Go to About section">
                About
              </button>
              <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-white transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] rounded" aria-label="Go to Process section">
                Process
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] rounded" aria-label="Go to Contact section">
                Contact
              </button>
            </nav>
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
    <ThemeProvider initialTheme="luxury-minimal">
      <LanguageProvider>
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--color-background-dark, #0a1628)' }}>
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
          <ThemeSwitcher />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;