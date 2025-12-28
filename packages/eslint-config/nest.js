import turboConfig from "eslint-config-turbo/flat";
import { defineConfig } from "eslint/config";
import baseConfigs from "./base.js";

export default defineConfig(baseConfigs, turboConfig);
