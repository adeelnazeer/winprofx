// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,tsx,mdx}",
    "./src/components/**/*.{js,jsx,tsx,mdx}",
    "./src/app/**/*.{js,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#46c0e9",
        secondary: "#0d1428",
        accent: "#3b165e",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
