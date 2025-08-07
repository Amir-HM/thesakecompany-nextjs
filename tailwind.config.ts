import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-display)', ...defaultTheme.fontFamily.sans],
        mono: ['OCR-B', 'Courier Prime', 'Courier New', 'monospace'],
        'ocr-b': ['OCR-B', 'Courier Prime', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#FAFAFA',
          text: '#1D1D1D',
        },
        primary: {
          light: '#F3E8FF',
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
        },
      },
      screens: {
        'xs': '375px',
        ...defaultTheme.screens,
        '2xl': '1536px',
        '3xl': '1920px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
export default config;
