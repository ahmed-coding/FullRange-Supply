import { useParams } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Design1 from './designs/Design1';
import Design2 from './designs/Design2';
import Design3 from './designs/Design3';
import Design4 from './designs/Design4';
import Design5 from './designs/Design5';
import Design6 from './designs/Design6';
import Design7 from './designs/Design7';
import Design8 from './designs/Design8';
import Design9 from './designs/Design9';
import Design10 from './designs/Design10';

const designs = [Design1, Design2, Design3, Design4, Design5, Design6, Design7, Design8, Design9, Design10];
const designNames = ['Luxury Minimal', 'Modern Tech', 'Corporate Professional', 'Dark Elegant', 'Vibrant Startup', 'Industrial Edge', 'Nature Inspired', 'Futuristic Neo', 'Classic Elegant', 'Bold Geometric'];

export default function DesignShowcase() {
  const { designNumber } = useParams();
  const index = parseInt(designNumber) - 1;

  if (index < 0 || index >= designs.length) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Design Gallery</h1>
        <div className="grid grid-cols-5 gap-4">
          {designNames.map((name, i) => (
            <a
              key={i}
              href={`/design/${i + 1}`}
              className="p-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              <div className="font-bold">{i + 1}</div>
              <div className="text-xs mt-2">{name}</div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  const DesignComponent = designs[index];

  return (
    <ThemeProvider initialTheme="luxury-minimal">
      <LanguageProvider>
        <div>
          <div className="fixed top-4 left-4 z-50 bg-black bg-opacity-70 text-white p-4 rounded-lg">
            <p className="text-sm font-bold mb-2">Design #{index + 1}: {designNames[index]}</p>
            <div className="flex gap-2 flex-wrap">
              {designNames.map((name, i) => (
                <a
                  key={i}
                  href={`/design/${i + 1}`}
                  className={`px-3 py-1 rounded text-xs ${index === i ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'} transition-colors`}
                >
                  {i + 1}
                </a>
              ))}
            </div>
          </div>
          <DesignComponent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
