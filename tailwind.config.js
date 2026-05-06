/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17171c",
        "cohere-black": "#000000",
        ink: "#212121",
        "deep-green": "#003c33",
        "dark-navy": "#071829",
        canvas: "#ffffff",
        "soft-stone": "#eeece7",
        "pale-green": "#edfce9",
        hairline: "#d9d9dd",
        "border-light": "#e5e7eb",
        "card-border": "#f2f2f2",
        muted: "#93939f",
        slate: "#75758a",
        "body-muted": "#616161",
        "action-blue": "#1863dc",
        coral: "#ff7759",
        "coral-soft": "#ffad9b",
        // AngaritaRad brand accent layered on top
        brand: "#ef4444",
        "brand-dark": "#b91c1c",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "Arial", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "Arial", "ui-sans-serif"],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "22px",
        xl: "30px",
        pill: "32px",
      },
    },
  },
  plugins: [],
};
