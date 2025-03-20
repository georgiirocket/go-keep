import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname, // Node.js v20.11.0+
})

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules',
      'dist',
      'build',
      'public',
      'wailsjs',
      'postcss.config.cjs',
      'tailwind.config.cjs',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Ensure ESLint uses your TS config
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        document: 'readonly', // ✅ Define document as a global variable
        window: 'readonly', // ✅ (Optional) Allow window as well
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
  },
  js.configs.recommended,
  ...compat.extends(
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ),
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          semi: false,
          tabWidth: 2,
          singleQuote: true,
          printWidth: 80,
          endOfLine: 'auto',
          arrowParens: 'always',
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
      'react-hooks/exhaustive-deps': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  },
]
