import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '*.config.*'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        JSX: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        HTMLElement: 'readonly',
        Event: 'readonly',
        KeyboardEvent: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        MediaQueryList: 'readonly',
        MediaQueryListEvent: 'readonly',
      },
    },
    settings: {
      react: { version: '18' },
    },
    rules: {
      // Core rules
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'prefer-const': 'error',
      'no-empty': 'error',
      'no-console': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',

      // React / Preact
      'react/display-name': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },
  eslintConfigPrettier,
);
