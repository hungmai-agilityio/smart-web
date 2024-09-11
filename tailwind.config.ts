import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#4b4b4b',
        second: '#ebcb80',
        dark: '#7d7d7d'
      },
      width: {
        desc: '555px',
        'pro-lg': '262px',
        'pro-md': '160px',
        'pro-sm': '120px',
        'icon-sm': '20px',
        'icon-xs': '15px',
        'icon-xxs': '11px'
      },
      height: {
        portfolio: '380px',
        hero: '585px',
        footer: '424px',
        'icon-sm': '22px',
        'icon-xs': '11px',
        'icon-xxs': '9px',
        'place-lg': '300px',
        'place-md': '192px',
        'place-sm': '116px',
        'pro-lg': '262px',
        'pro-md': '160px',
        'pro-sm': '120px'
      },
      fontSize: {
        'x-xs': '11px'
      },
      aspectRatio: {
        image: '4 / 3'
      }
    }
  },
  plugins: []
};
export default config;
