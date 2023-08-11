/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2374e1",
          50: "#f4f8fd",
          100: "#caddf7",
          200: "#a0c3f2",
          300: "#76a8ec",
          400: "#4c8ee6",
          500: "#2374e1",
          600: "#1c5cb4",
          700: "#154587",
          800: "#0e2e5a",
          900: "#06172c",
        },
      },
      lineHeight: {
        12: '48px',
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      width: {
        sidebar: 250,
      },
      maxWidth: {
        "main-content": 768,
      },
      height: {
        header: 50,
      },
      fontSize: {
        small: 10,
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
