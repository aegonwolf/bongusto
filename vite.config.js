import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  envPrefix: 'VITE_', // Ensure VITE_ prefix is used
  server: {
    watch: {
      usePolling: true, // Helps with some file system watchers, especially on Windows
    },
  },
});
