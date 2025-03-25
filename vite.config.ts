import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/revestimientos-rgb/',  // Cambialo por el nombre real
  plugins: [react()],
});
