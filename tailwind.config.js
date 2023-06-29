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
  darkMode: 'class',
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
      colors: {
        primary: {
          50: '#fbf2e2',
          100: '#f6deb5',
          200: '#f1c886',
          300: '#ecb259',
          400: '#e9a23a',
          500: '#e59428',
          600: '#e18925',
          700: '#da7b21',
          800: '#d36d1e',
          900: '#c8581b',
        },
        gray: colors.neutral,
        // Light
        backgroud: {
          DEFAULT: '#eff1f5',
          dark: '#1e1e2e',
        },
        card: {
          DEFAULT: '#ccd0da',
          dark: '#313244',
        },
        text: {
          DEFAULT: '#4c4f69',
          dark: '#cdd6f4',
        },

        textSubtitle: {
          DEFAULT: '#7f849c',
          dark: '#8c8fa1',
        },

        red: {
          DEFAULT: '#d20f39',
          dark: '#f38ba8',
        },
        green: {
          DEFAULT: '#40a02b',
          dark: '#a6e3a1',
        },
        roseWater: {
          DEFAULT: '#dc8a78',
          dark: '#f5e0dc',
        },
        flamingo: {
          DEFAULT: '#dd7878',
          dark: '#f2cdcd',
        },
        pink: {
          DEFAULT: '#ea76cb',
          dark: '#f5c2e7',
        },
        mauve: {
          DEFAULT: '#8839ef',
          dark: '#cba6f7',
        },
        maroon: {
          DEFAULT: '#e64553',
          dark: '#eba0ac',
        },
        peach: {
          DEFAULT: '#fe640b',
          dark: '#fab387',
        },
        yellow: {
          DEFAULT: '#df8e1d',
          dark: '#f9e2af',
        },
        teal: {
          DEFAULT: '#179299',
          dark: '#94e2d5',
        },
        sapphire: {
          DEFAULT: '#209fb5',
          dark: '#89dceb',
        },
        sky: {
          DEFAULT: '#04a5e5',
          dark: '#89dceb',
        },
        blue: {
          DEFAULT: '#1e66f5',
          dark: '#89b4fa',
        },
        lavender: {
          DEFAULT: '#7287fd',
          dark: '#b4befe',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue'),
              '&:hover': {
                color: `${theme('colors.blue')} !important`,
              },
              code: { color: theme('colors.blue') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: colors.text,
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: colors.text,
            },
            h3: {
              fontWeight: '600',
              color: colors.text,
            },
            'h4,h5,h6': {
              color: colors.text,
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: colors.card,
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: colors.card,
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: colors.text,
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.dark'),
              '&:hover': {
                color: `${theme('colors.blue.dark')} !important`,
              },
              code: { color: theme('colors.blue.dark') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: colors.text,
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: colors.text,
            },
            h3: {
              fontWeight: '600',
              color: colors.text,
            },
            'h4,h5,h6': {
              color: colors.text,
            },
            pre: {
              backgroundColor: theme('colorsBackground'),
            },
            code: {
              backgroundColor: theme('colorsBackground'),
            },
            details: {
              backgroundColor: theme('colorsBackground'),
            },
            hr: { borderColor: theme('colorsBackground') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: colors.text },
            thead: {
              th: {
                color: colors.text,
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: colors.text,
              borderLeftColor: theme('colors.gray.700'),
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
  ],
}
