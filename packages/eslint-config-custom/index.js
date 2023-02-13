module.exports = {
  // extends: ["next", "turbo", "prettier"],
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    project: "tsconfig.json",
    // tsconfigRootDir: __dirname,
    sourceType: "module",
    // ecmaVersion: "latest",
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    // "@next/next/no-html-link-for-pages": "off",
    // "react/jsx-key": "off",

    "@typescript-eslint/consistent-type-assertions": "off",
    // "no-console": "error",
    // "no-unused-vars": [
    //   "error",
    //   { vars: "all", args: "after-used", ignoreRestSiblings: true },
    // ],
  },
};
