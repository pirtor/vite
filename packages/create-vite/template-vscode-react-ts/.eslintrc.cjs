// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["dist", "out", ".eslintrc.cjs", "**/*.d.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  overrides: [
    {
      files: ["packages/webview-ui"],
      env: { browser: true, es2020: true },
      extends: [
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
      ],
      plugins: ["react-refresh"],
      rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["packages/extension-vscode"],
      rules: {},
    },
  ],
});
