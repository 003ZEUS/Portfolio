import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "neon-purple": "#8b5cf6",
        "neon-purple-bright": "#a855f7",
        "soft-purple-glow": "#c084fc",
        "gradient-dark": {
          from: "#0a0014",
          via: "#12002a",
          to: "#050505",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "cyberpunk-gradient":
          "linear-gradient(135deg, #0a0014 0%, #12002a 50%, #050505 100%)",
        "glow-gradient":
          "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(139, 92, 246, 0.5)",
        "neon-lg": "0 0 40px rgba(139, 92, 246, 0.4)",
        "neon-sm": "0 0 10px rgba(139, 92, 246, 0.3)",
        glow: "0 0 30px rgba(168, 85, 247, 0.3)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
