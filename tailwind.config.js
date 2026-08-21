/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Espejo de los tokens de angaritarad.com (ver src/index.css :root).
        canvas: "#16150f",
        "canvas-mid": "#26251e",
        "canvas-card": "#2f2e26",
        "canvas-soft": "#1e1d17",
        ink: "#f7f7f4",
        body: "#b8b5ae",
        muted: "#807d72",
        "muted-soft": "#5a5852",
        hairline: "#3a3830",
        "hairline-soft": "#2f2e26",
        "hairline-strong": "#4a4840",
        brand: "#f54e00",
        "brand-dark": "#d04200",
        "aurora-peach": "#dfa88f",
        "aurora-mint": "#9fc9a2",
        "aurora-blue": "#9fbbe0",
        "aurora-lavender": "#c0a8dd",
        "aurora-gold": "#c08532",
        success: "#1f8a65",
        error: "#cf2d56",
        institutional: "#16150f",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["Inter", "system-ui", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
