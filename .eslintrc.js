module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "jsx-a11y/anchor-is-valid": "off", // Desativa a regra temporariamente, durante o desenvolvimento
    "react/react-in-jsx-scope": "off", // Desativa a regra que exige React no escopo ao usar JSX
    "react/prop-types": "off", // Desativa a regra de validação de prop-types
    "no-unused-vars": "off", // Desativa a regra de variáveis não utilizadas
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
