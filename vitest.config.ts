import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react() // If you're using React. Adjust or remove based on your framework.
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Example of setting up an alias for src directory
    },
  },
  test: {
    // Specify the test environment
    environment: 'happy-dom',
    // Additional Vitest configurations can go here
    globals: true, // If you want to automatically import `describe`, `it`, etc.
    // setupFiles: './src/setupTests.ts', // If you have any setup files to run before the tests
    // Configure code coverage, mocking, etc. as needed:
    coverage: {
      provider: 'v8', // Use 'c8' for V8 code coverage
      reporter: ['text', 'json', 'html'], // Output formats for the coverage report
    },
  }
});

