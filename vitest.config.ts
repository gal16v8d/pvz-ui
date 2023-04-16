import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  test: {
    // Do not process css files (is slow)
    css: false,
    environment: 'jsdom',
    // This is to not import test, it, expect, vi (instead of jest). Similar to how jest works
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
});
