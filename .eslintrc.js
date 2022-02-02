module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'max-len': 'off',
    'no-unused-expressions': 'off',
  },
};
