import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    watch: {
      usePolling: true, // Helps with some file system watchers, especially on Windows
    },
  },
});
