module.exports = {
  experimental: {
    optimizeUniversalDefaults: false,
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.base-content.DEFAULT'),
            a: {
              color: theme('colors.teal.DEFAULT'),
              '&:hover': {
                color: `${theme('colors.secondary')} !important`,
              },
              code: { color: theme('colors.secondary') },
            },
            h1: {
              fontWeight: '800',
              fontSize: theme('fontSize.5xl'),
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('teal.DEFAULT'),
            },
            h2: {
              fontWeight: '800',
              fontSize: theme('fontSize.3xl'),
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('secondary'),
            },
            h3: {
              fontWeight: '700',
              fontSize: theme('fontSize.2xl'),
              color: theme('colors.secondary'),
            },
            'h4,h5,h6': {
              color: theme('colors.secondary'),
            },
            pre: {
              backgroundColor: '#2a2c2d',
              paddingLeft: '1rem',
            },
            code: {
              color: theme('colors.yellow.DEFAULT'),
              backgroundColor: theme('colors.secondary'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            details: {
              backgroundColor: theme('colors.secondary'),
            },
            hr: { borderColor: theme('colors.secondary') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.base-content.DEFAULT'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.secondary'),
            },
            strong: { color: theme('colors.yellow.DEFAULT') },
            thead: {
              th: {
                color: theme('colors.base-content.DEFAULT'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.secondary'),
              },
            },
            blockquote: {
              color: theme('colors.base-content.DEFAULT'),
              borderLeftColor: theme('colors.secondary'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
