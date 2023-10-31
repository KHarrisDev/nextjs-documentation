/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontSize: {
    //   mammoth: "8rem",
    // },
    fontFamily: {
      body: ['"Open Sans"', "Teko"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#E66969",
      },
      gray: {
        DEFAULT: "#625A5A",
      },
      neutral: {
        DEFAULT: "#fff",
        n00: "#F2F2F2",
        n01: "#F0F0F0",
        n02: "#b7b7b7",
        n03: "#707070",
        n04: "#8B8686",
        n05: "#605A5A",
        n06: "#1f2d3d",
        n07: "#1D1D1D",
        n08: "#151515",
        n19: "#101010",
        n10: "#000",
        n11: "#D5D5D5",
        n12: "#343434",
        n13: "#2b2b2b",
        n14: "#C3C3C3",
        n15: "#A5A5A5",
      },
    },
    extend: {},
  },
  plugins: [],
};
