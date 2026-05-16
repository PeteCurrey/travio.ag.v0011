/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        travio: {
          white: "#FFFFFF",
          "off-white": "#F5F5F3",
          black: "#0A0A0A",
          charcoal: "#1C1C1C",
          mid: "#6B6B6B",
          subtle: "#D4D4D2",
          accent: "#2D5A27",
          "accent-dk": "#1E3D1A",
        }
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        'xs': '2px',
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.07)',
      },
      padding: {
        'section-desktop': '96px',
        'section-mobile': '64px',
      }
    },
  },
  plugins: [],
};
