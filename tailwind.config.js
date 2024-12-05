/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        100: "100px",
        500: "500px",
        50: "50px",
      },
      width: {
        100: "100px",
        500: "500px",
        50: "50px",
      },
      colors: {
        lilla: "#732282",
        blue: "#e4f7ff",
      },
    },
  },
  plugins: [],
};
