import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        orange: {
          50: '#fff3eb',
          100: '#ffe0cc',
          200: '#ffbf99',
          300: '#ff9f66',
          400: '#ff7f33',
          500: '#F95C09',
          600: '#d64f08',
          700: '#b34207',
          800: '#8f3506',
          900: '#6b2805',
          950: '#451a03',
        },
        green: {
          50: '#f6fde9',
          100: '#e8fac7',
          200: '#d2f492',
          300: '#bcea5c',
          400: '#a7e136',
          500: '#9FDD43',
          600: '#86b836',
          700: '#6e942a',
          800: '#566f1e',
          900: '#3e4b14',
          950: '#272e0c',
        },
        purple: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#AB47BC',
          400: '#9C27B0',
          500: '#712FDC',
          600: '#5E1BB8',
          700: '#4C148F',
          800: '#3A0E67',
          900: '#280A3F',
        },
        blue: {
          50: '#E9E4FC',
          100: '#C7BBF6',
          200: '#A491F1',
          300: '#8066EB',
          400: '#5C3CE5',
          500: '#2F08A8',
          600: '#23036e',
          700: '#1C0663',
          800: '#130442',
          900: '#0A0221',
        },
        dna: '#100b17',
        nav: 'rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        aim: 'linear-gradient(to bottom, #0B0B0B, #13131D)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        montserrat: ['var(--aw-font-montserrat, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        raleway: ['var(--aw-font-raleway, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        video: '115px',
        '2xl': defaultTheme.fontSize['2xl'],
        '3xl': defaultTheme.fontSize['3xl'],
        '4xl': defaultTheme.fontSize['4xl'],
        '5xl': defaultTheme.fontSize['5xl'],
        '6xl': defaultTheme.fontSize['6xl'],
        '7xl': defaultTheme.fontSize['7xl'],
        '8xl': defaultTheme.fontSize['8xl'],
        '9xl': defaultTheme.fontSize['9xl'],
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
