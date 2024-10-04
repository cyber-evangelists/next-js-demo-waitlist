/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode based on a class, e.g., <body class="dark">
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "425px" },
      // => @media (max-width: 420px) { ... }

      "min-2xl": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      "min-xl": { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      "min-lg": { min: "1024px" },
      // => @media (min-width: 1023px) { ... }

      "min-md": { min: "768px" },
      // => @media (min-width: 767px) { ... }

      "min-sm": { min: "639px" },
      // => @media (min-width: 639px) { ... }

      "min-xs": { min: "425px" },
      // => @media (min-width: 420px) { ... }
    },
    extend: {
      backgroundColor: {
        // Light mode colors
        primary: "rgb(227,241,249)", // Light blue color
        dark: "#111827", // Dark background for light mode (outside gradient)
        shadow: "rgb(99 102 241 / 0.15)",

        // Card background
        cardBg: "rgb(244,248,254)",

        // Dark mode background colors
        "dark-primary": "rgb(31 41 55)", // Dark primary background in dark mode
        "dark-cardBg": "rgb(17 24 39)", // Dark card background for dark mode
      },
      colors: {
        // Text and background colors for light and dark mode
        primary: "#1f2937", // Primary text color (light mode)
        dark: "#111827", // Dark background outside the gradient (light mode)

        // Dark mode colors
        "dark-primary": "#e5e7eb", // Light text in dark mode
        "dark-dark": "#111827", // Darker background in dark mode
      },
      // Adding box shadows for light and dark mode
      boxShadow: {
        cf0cr: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", // Light mode shadow
        "cf0cr-dark":
          "0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1)", // Dark mode shadow
      },
      backgroundImage: {
        // Custom gradient for light mode
        "custom-gradient":
          "linear-gradient(330deg, rgba(227,241,249,1) 32%, rgba(180,173,255,1) 60%, rgba(227,241,249,1) 71%) no-repeat",

        // Custom gradient for dark mode
        "dark-custom_gradient":
          "linear-gradient(330deg, rgba(31,41,55,1) 32%, rgba(17,24,39,1) 60%, rgba(31,41,55,1) 71%) no-repeat",
      },

      fill: {
        svgColor: "rgb(107 114 128 / 0.7)", // SVG fill color
        "dark-svgColor": "rgb(255 255 255 / 0.7)", // SVG fill color for dark mode
      },
    },
  },
  plugins: [],
};
