/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    fontSize: {
      xxs: ["10px", "11px"],
      xs: ["12px", "18px"],
      sm: ["14px", "21px"],
      md: ["16px", "24px"],
      mdd: ["16px", "18px"],
      lg: ["18px", "28px"],
      xl: ["24px", "32px"],
      huge: ["36px", "44px"],
    },
    extend: {
      colors: {
        green: "#0FAE96",
        neutral: "#ECF1F0",
        gray: "#B6B6B6",
        purpole: "#1D1429",
        popular: "#211631",
        secondary: "rgba(255, 255, 255, 0.1)",
        red: "#AE0000",
        fuchsia: "#1E1E1E",
        silv: "#EAEAEA",
        slate: "#C6C6C6",
        indigo: "#2C223B",
        stone: "rgba(255, 255, 255, 0.05)",
        zinc: "rgba(255, 255, 255, 0.02)",
        primary: "rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
