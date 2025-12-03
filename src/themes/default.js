// src/themes/default.js
export default {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    primaryText: "rgba(255,255,255,0.92)",
    mutedText: "rgba(255,255,255,0.65)",
    border: "rgba(255,255,255,0.08)",
    card: "rgba(255,255,255,0.02)",
    hover: "rgba(255,255,255,0.06)",
    gradientPrimary: "linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)",
    gradientAlt: "linear-gradient(270deg,#F46737 0%,#945DD6 100%)",
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
  spacing: {
    xs: "6px",
    sm: "10px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  radii: { sm: "8px", md: "12px", lg: "16px", pill: "999px" },
  shadows: {
    sm: "0 4px 12px rgba(0,0,0,0.18)",
    md: "0 8px 24px rgba(0,0,0,0.25)",
    lg: "0 12px 40px rgba(0,0,0,0.30)",
  },
  transitions: { fast: "150ms ease", base: "250ms ease", slow: "400ms ease" },
  layout: { containerMax: "1280px", sectionMax: "1040px", gutter: "24px" },
  zIndex: { base: 1, header: 10, overlay: 20, modal: 30 },
};
