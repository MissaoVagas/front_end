module.exports = {
  plugins: [
    'jsx-a11y',
  ],
  extends: [
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off', // Desativa a regra temporariamente, durante o desenvolvimento
  },
};