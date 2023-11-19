/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontSize: {
        sm: ["14px"],
        base: ["16px"],
        lg: ["18px"],
        xl: ["20px"],
        "2xl": ["24px"],
        "3xl": ["28px"],
        "4xl": ["32px"],
        "5xl": ["52px"],
        "6xl": ["64px"],
      },
      colors: {
        "gradient-color-front": "#E5793B",
        "gradient-color-back": "#FF4185",
        "primary-color": "#DA7D4A",
        "text-primary": "#334155",
        "text-secondary": "#94A3B8",
        "bg-color-theme-1": "##FFFFFF",
        "bg-color-theme-2": "#CCCCCC",
        "bg-color-theme-3": "#F7ECE1",
        "bg-color-theme-4": "#F8FAFC"
      },
    },
  },
  plugins: [],
};
