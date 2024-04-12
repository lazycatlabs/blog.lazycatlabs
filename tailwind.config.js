const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.DEFAULT'),
            a: {
              color: theme('colors.sky.DEFAULT'),
              '&:hover': {
                color: `${theme('colors.sapphire.DEFAULT')} !important`,
              },
              code: { color: theme('colors.sapphire.DEFAULT') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.pink.DEFAULT'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.pink.DEFAULT'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.pink.DEFAULT'),
            },
            'h4,h5,h6': {
              color: theme('colors.pink.DEFAULT'),
            },
            pre: {
              backgroundColor: theme('colors.mantle.DEFAULT'),
            },
            code: {
              color: theme('colors.yellow.DEFAULT'),
              backgroundColor: theme('colors.surface0.DEFAULT'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            details: {
              backgroundColor: theme('colors.surface0.DEFAULT'),
            },
            hr: { borderColor: theme('colors.mantle.DEFAULT') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.text.DEFAULT'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.surface0.DEFAULT'),
            },
            strong: { color: theme('colors.yellow.DEFAULT') },
            thead: {
              th: {
                color: theme('colors.text.DEFAULT'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.surface0.DEFAULT'),
              },
            },
            blockquote: {
              color: theme('colors.text.DEFAULT'),
              borderLeftColor: theme('colors.surface0.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@catppuccin/tailwindcss')({
      prefix: false,
      defaultFlavour: 'mocha',
    }),
  ],
}
