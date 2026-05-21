import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',

  // Build optimization
  build: {
    // Minify and optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },

    // Code splitting configuration
    rollupOptions: {
      output: {
        // Manual chunks for better caching and parallel loading
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-tailwind': ['tailwindcss'],
        },
        chunkFileNames: 'assets/chunk-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },

    // Optimization
    cssMinify: 'lightningcss',
    reportCompressedSize: false,

    // Performance hints
    chunkSizeWarningLimit: 500,
    sourcemap: false, // Disable in production for smaller bundle

    // Assets optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
    emptyOutDir: true,
    outDir: 'dist',
  },

  // Optimization options
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['vite'],
  },

  // Server configuration for development
  server: {
    headers: {
      'X-Custom-Header': 'FullRange Supply',
    },
  },
})