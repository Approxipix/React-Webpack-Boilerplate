// ESLint configuration:
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'no-alert': 'error',
    'space-before-function-paren': 0,
    'max-len': ['error', 120, 2, { ignoreUrls: true }],
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'prettier/prettier': ['error'],
  },
};
