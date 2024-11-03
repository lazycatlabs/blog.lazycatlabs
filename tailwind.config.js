module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@catppuccin/tailwindcss')({
      prefix: false,
      defaultFlavour: 'mocha',
    }),
  ],
}
