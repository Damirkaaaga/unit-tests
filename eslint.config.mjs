import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules, // ← Вот так подключаем recommended
      'no-unused-vars': ['warn'],
      'space-infix-ops': ['error'],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true,
        beforeEach: true,
        afterEach: true,
      },
    },
  },
  {
    files: ['babel.config.cjs'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        module: true,
        require: true,
        __dirname: true,
      },
    },
  },
]);
