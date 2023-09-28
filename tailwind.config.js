/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-1": "#11151C",
        "nav-primary": "#2F4550",
      },
      fontSize: {
        xxs: ["0.5rem", "1rem"],
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
