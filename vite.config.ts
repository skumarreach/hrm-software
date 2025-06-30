import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /^\/(?!api).*$/, to: '/index.html' }
      ]
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /^\/(?!api).*$/, to: '/index.html' }
      ]
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});