import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{css,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '1': '10px',
      },
    },
  },
  plugins: [],
};
export default config;
