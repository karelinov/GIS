import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { globals: globals.browser },
    /*parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },*/
    /*extends: ["eslint:recommended"],*/
    rules: {
        "no-undef": "error",
        "no-useless-escape":"off",
        "no-extra-semi":"off"
    },
    /*
    env: {
        browser: true,
        node: true,
        es6: true
    }*/
  },
]);
