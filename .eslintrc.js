module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'],
  overrides: [{
    files: ['*.ts', '*.tsx', '**/src/**.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string':'off'
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:@typescript-eslint/strict']
  }
  // , {
  //   files: ['**/src/**/*.test.{ts,tsx}'],
  //   rules: {
  //     'i18next/no-literal-string': 'off'
  //   }
  // }
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'import/no-unresolved': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    semi: 'off',
    'require-await': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/semi': 'error',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'typescript-eslint/no-unused-vars': 'off',
    'react/jsx-indent': [2, 4, {
      indentLogicalExpressions: true
    }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }],
    'max-len': ['error', {
      ignoreComments: true
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    __IS_DEV__: true
  }
};
