import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mf: {
          black: "#050505",
          dark: "#0a0a0a",
          green: "#00E054", // Verde neon característico
          greenDark: "#00A33B",
          silver: "#E5E7EB", // Prata/Branco para textos[cite: 1]
          gold: "#D4AF37", // Para a seção do Invest+
        },
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 224, 84, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 224, 84, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;