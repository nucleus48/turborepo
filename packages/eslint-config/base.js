import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import turboConfig from "eslint-config-turbo/flat";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export function extendTs(dir) {
  return {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dir,
      },
    },
  };
}

export default defineConfig(
  globalIgnores(["scripts", "public", "*.js", "*.mjs", "*.cjs"]),
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  turboConfig,
  prettierConfig
);
