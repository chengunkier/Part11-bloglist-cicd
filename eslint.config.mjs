import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none' }],
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'frontend/**', 'e2e-tests/**'],
  },
]