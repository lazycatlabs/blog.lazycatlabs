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
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
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
              fontWeight: '800',
              fontSize: theme('fontSize.5xl'),
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.pink.DEFAULT'),
            },
            h2: {
              fontWeight: '800',
              fontSize: theme('fontSize.4xl'),
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.flamingo.DEFAULT'),
            },
            h3: {
              fontWeight: '700',
              fontSize: theme('fontSize.3xl'),
              color: theme('colors.flamingo.DEFAULT'),
            },
            'h4,h5,h6': {
              color: theme('colors.flamingo.DEFAULT'),
            },
            pre: {
              backgroundColor: theme('colors.mantle.DEFAULT'),
            },
            code: {
              color: theme('colors.yellow.DEFAULT'),
              backgroundColor: theme('colors.mantle.DEFAULT'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            details: {
              backgroundColor: theme('colors.mantle.DEFAULT'),
            },
            hr: { borderColor: theme('colors.mantle.DEFAULT') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.text.DEFAULT'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.mantle.DEFAULT'),
            },
            strong: { color: theme('colors.yellow.DEFAULT') },
            thead: {
              th: {
                color: theme('colors.text.DEFAULT'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.mantle.DEFAULT'),
              },
            },
            blockquote: {
              color: theme('colors.text.DEFAULT'),
              borderLeftColor: theme('colors.mantle.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@catppuccin/tailwindcss')({
      prefix: false,
      defaultFlavour: 'mocha',
    }),
  ],
}
