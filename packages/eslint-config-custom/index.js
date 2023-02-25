module.exports = {
  ignorePatterns: ["index.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "airbnb-typescript",
    "turbo",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": 1,
    "react/jsx-key": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
