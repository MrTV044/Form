/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "hsl(148, 38%, 91%)",
        "medium-green": "hsl(169, 82%, 27%)",
        "normal-red": "hsl(0, 66%, 54%)",
        "normal-white": "hsl(0, 0%, 100%)",
        "medium-grey": "hsl(186, 15%, 59%)",
        "dark-grey": "hsl(187, 24%, 22%)",
      },

      fontFamily: {
        Karla: ["Karla", "sans-serif", "arial"],
      },
    },

    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
