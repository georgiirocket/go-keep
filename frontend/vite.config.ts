import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/src': path.resolve('./', './src'),
      '@/wailsjs': path.resolve('./', './wailsjs'),
    },
  },
  plugins: [react(), eslint()]
})
