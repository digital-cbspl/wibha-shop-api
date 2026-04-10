import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        exports: "readonly",
        module: "readonly",
        __dirname: "readonly",
      }
    },
    rules: {
      "no-undef": "error"
    }
  }
];
