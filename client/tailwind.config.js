/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        still: {
          "0%": { width: "80%", transform: "translateX(-50%)", left: "50%" },
          "100%": { width: "80%", transform: "translateX(-50%)", left: "50%" },
        },
        change: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        still: "still 1s ease-in-out infinite",
        change: "change 1s",
      },
    },
    screens: {
      sm: "510px",
      // => @media (min-width: 540px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "990px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1450px",
      // => @media (min-width: 1450px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
