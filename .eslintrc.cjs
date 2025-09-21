/* Why: consistent lint defaults for Next/App Router + TS + Tailwind */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-refresh", "tailwindcss"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ],
  rules: {
    "react-refresh/only-export-components": "off", // Next handles boundary splits
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  settings: {
    tailwindcss: { callees: ["cn"] }
  }
};