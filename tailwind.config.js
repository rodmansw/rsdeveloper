module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  // purge: false,
  theme: {
    extend: {
      colors: {
        blog: {
          bg: 'var(--bg)',
          'bg-secondary': 'var(--bg-secondary)',
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          ternary: 'var(--ternary)'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
