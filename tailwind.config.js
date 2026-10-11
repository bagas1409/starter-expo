/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rowdies_400Regular"],
        rowdies: ["Rowdies_400Regular"],
        "rowdies-light": ["Rowdies_300Light"],
        "rowdies-bold": ["Rowdies_700Bold"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px", fontFamily: "Rowdies_400Regular" }],
        sm: ["14px", { lineHeight: "20px", fontFamily: "Rowdies_400Regular" }],
        base: ["16px", { lineHeight: "24px", fontFamily: "Rowdies_400Regular" }],
        lg: ["18px", { lineHeight: "28px", fontFamily: "Rowdies_400Regular" }],
        xl: ["20px", { lineHeight: "28px", fontFamily: "Rowdies_400Regular" }],
        "2xl": ["24px", { lineHeight: "32px", fontFamily: "Rowdies_400Regular" }],
        "3xl": ["30px", { lineHeight: "36px", fontFamily: "Rowdies_400Regular" }],
        "4xl": ["36px", { lineHeight: "40px", fontFamily: "Rowdies_400Regular" }],
        "5xl": ["48px", { lineHeight: "1", fontFamily: "Rowdies_400Regular" }],
      },
    },
  },
  plugins: [],
};
