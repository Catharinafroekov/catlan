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
        150: "150px",
        200: "200px",
        300: "300px",
        500: "500px",
        75: "75px",
        50: "50px",
        25: "35px",
        30: "30px",
      },
      width: {
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        700: "700px",
        75: "75px",
        50: "50px",
        25: "35px",
      },
      colors: {
        lilla: "#732282",
        darkblue: "#6188C1",
        blue: "#e4f7ff",
      },
      borderRadius: {
        15: "15px",
        12: "12px",
      },
      screens: {
        xs: "400px",
        sm: "680px",
        md: "888px",
        lg: "1284px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        motion: "motion 30s linear infinite",
      },
      keyframes: {
        motion: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],

  /** @type {import('tailwindcss').Config} */

  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },


};
