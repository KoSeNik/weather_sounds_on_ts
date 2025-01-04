import globals from "globals";
import pluginJs from "@eslint/js";
import { configs as tsConfigs } from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs}"],
      languageOptions: {
        globals: globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      extends: ["eslint:recommended", pluginJs.configs.recommended],
    },
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        globals: globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      extends: [
        "eslint:recommended",
        pluginJs.configs.recommended,
        ...tsConfigs.recommended,
      ],
    },
  ],
};
