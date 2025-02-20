import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FF4DC3',
          100: '#FFD6E8',
        },
        gray: {
          DEFAULT: '#9D9D9D',
          100: '#F2F2F2',
        },
        yellow: '#EDFF68',
      },
    },
  },
  plugins: [],
} satisfies Config;
