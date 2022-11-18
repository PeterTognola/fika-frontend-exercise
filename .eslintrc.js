module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  extends: [
    'handlebarlabs',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
    'react/require-default-props': 0,
    'import/extensions': 0,
    singleQuote: 0,
  },
  globals: {
    __DEV__: 'readonly',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.generated.*'],
};
