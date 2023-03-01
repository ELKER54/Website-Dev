/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('../public/bg.svg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#059669",
          secondary: "#0ea5e9",
          accent: "#1FB2A5",
          neutral: "#191D24",
          "base-100": "#1e293b",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
