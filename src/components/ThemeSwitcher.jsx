/**
 * Theme Switcher Component
 * Allows users to switch between all 10 design themes
 */

import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
  const { currentTheme, switchTheme, availableThemes } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
        aria-label="Open theme switcher"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 0l4.24-4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m6.08 0l4.24 4.24" />
        </svg>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        whileHover={{ opacity: 1, scale: 1, y: 0 }}
        className="absolute bottom-16 right-0 bg-white dark:bg-slate-900 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 p-3 min-w-max"
      >
        <div className="max-h-64 overflow-y-auto">
          {availableThemes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => switchTheme(themeOption.id)}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors text-sm ${
                currentTheme === themeOption.id
                  ? 'bg-blue-500 text-white font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={themeOption.description}
            >
              {themeOption.name}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
