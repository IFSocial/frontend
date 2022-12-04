module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      tsx: true,
    },
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'import-helpers',
    'react-hooks',
    'jest',
    'prettier',
  ],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/'],
          'module',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-webpack-loader-syntax': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: '**/tsconfig.json',
      },
    },
  },
};
