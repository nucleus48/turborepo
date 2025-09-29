import eslintConfig from "eslint-config-expo/flat.js";
import { defineConfig } from "eslint/config";
import baseConfigs from "./base.js";

export default defineConfig(baseConfigs, eslintConfig);
