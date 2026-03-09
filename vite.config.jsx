import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // Optional: set dev server port
    open: true,        // Optional: opens browser automatically
  },
  build: {
    outDir: 'dist',    // Output folder for production build
    sourcemap: false,  // Optional: enable if you need source maps
  },
});
