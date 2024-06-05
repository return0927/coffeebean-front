import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  server: {
    proxy: {
      '/api': {
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
        target:
          process.env.NODE_ENV === 'dev'
            ? 'http://localhost:8080/api'
            : 'https://api.coffee.ajou.enak.kr/api',
      },
    },
  },
});
