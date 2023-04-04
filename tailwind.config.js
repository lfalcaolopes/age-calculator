/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-off-white": "hsl(0, 0%, 94%)",
        "custom-light-grey": "hsl(0, 0%, 86%)",
        "custom-smokey-grey": "hsl(0, 0%, 44%)",
        "custom-off-black": "hsl(0, 0%, 8%)",
        "custom-purple": "hsl(259, 100%, 65%)",
        "custom-light-red": "hsl(0, 100%, 67%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
