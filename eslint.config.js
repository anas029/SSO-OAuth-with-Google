import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      eqeqeq: "off",
      'no-unused-vars': ["error", { "varsIgnorePattern": "^_$" }],
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
      "no-console": ["warn"]
    },

  }, {
    ignores: [
      "node_modules/",
      "build/",
      "client/"
    ],
  }
];