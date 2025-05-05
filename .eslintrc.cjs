module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": ["warn"],
    "space-infix-ops": ["error"],
    semi: ["error", "always"],
    quotes: ["error", "single"],
  },
};
