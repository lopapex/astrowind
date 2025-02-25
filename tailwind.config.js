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
        orange: '#F95C09',
        green: '#9FDD43',
        nav: 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': "12px",
        'sm': "14px",
        'base': '16px',
        'lg': "18px",
        'xl': "20px",
        'video': "115px",
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
