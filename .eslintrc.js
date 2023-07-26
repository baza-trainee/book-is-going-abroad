module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'prettier',
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': [
      1,
      150,
      2,
      {
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
  },
  ignorePatterns: ['.eslintrc.js'],
};
