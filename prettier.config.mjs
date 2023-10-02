/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: ["."],
  // Astro parser
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  // Import sorting
  importOrder: [
    "^@/(.css)$",
    "^next/(.*)$",
    "^@next/(.*)$",
    "^react/(.*)$",
    "^@react/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Tailwind
  tailwindAttributes: ["class", "className"],
  tailwindFunctions: ["cn", "clsx", "twMerge"],
  tailwindConfig: "./tailwind.config.cjs",
};

export default config;
