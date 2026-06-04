/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    '#111212',
          darker:  '#171818',
          yellow:  '#f2c705',
          'yellow-light': '#ffdf52',
          white:   '#f7f7f7',
          'gray-1': '#eeeeee',
          'gray-2': '#cccccc',
          'gray-3': '#8a8a8a',
          border:  '#858585',
        },
      },
      fontFamily: {
        merriweather:      ['"Merriweather"', 'Georgia', 'serif'],
        'merriweather-sans': ['"Merriweather Sans"', 'sans-serif'],
        'dm-sans':         ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '4.6875rem', letterSpacing: '-0.025em' }],
        'h2':   ['2.25rem', { lineHeight: '2.5rem',    letterSpacing: '-0.025em' }],
        'h3':   ['1.25rem', { lineHeight: '1.6875rem' }],
        'body-lg': ['1.25rem', { lineHeight: '1.875rem' }],
        'body':    ['1rem',    { lineHeight: '1.5rem' }],
        'sm-label': ['0.875rem', { lineHeight: '1.25rem' }],
      },
      maxWidth: {
        site: '1120px',
      },
      borderRadius: {
        card: '2rem',
      },
      backgroundImage: {
        'glass-card': 'linear-gradient(130deg, rgba(255,255,255,0) 2%, rgba(255,255,255,0.08) 99%)',
      },
    },
  },
  plugins: [],
};
