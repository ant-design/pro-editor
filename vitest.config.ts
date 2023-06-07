import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  test: {
    setupFiles: path.join(__dirname, './tests/test-setup.ts'),
    environment: 'jsdom',
    globals: true,
    testTimeout: 20000,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'lcov'],
    },
    alias: {
      '@ant-design/pro-editor': path.join(__dirname, './src'),
      '@': path.join(__dirname, './src'),
    },
  },
});
