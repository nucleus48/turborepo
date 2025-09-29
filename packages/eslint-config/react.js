import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import baseConfigs from "./base.js";

export default defineConfig(
  baseConfigs,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs["recommended-latest"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  }
);
