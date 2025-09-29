import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import baseConfigs from "./base.js";
import reactConfigs from "./react.js";

export default defineConfig(
  baseConfigs,
  reactConfigs,
  nextPlugin.flatConfig.recommended,
  nextPlugin.flatConfig.coreWebVitals,
);
