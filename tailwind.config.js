/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          // Define shades for your primary color
          main: "#054bb4", // Main color shade
          50: "#2e5caf", // Optional lighter shade
          100: "#658cc2", // Optional even lighter shade
          // ... (add more shades as needed)
        },
        secondary: {
          // Define shades for your secondary color
          main: "#5d6169", // Main color shade
          50: "#lighter-shade", // Optional lighter shade
          100: "#another-lighter-shade", // Optional even lighter shade
          // ... (add more shades as needed)
        },
      },
    },
  },
  plugins: [],
};
