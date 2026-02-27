export default {
  content: [
    './public/**/*.html',
    './public/**/*.js',
    './doubao_watermark/**/*.html',
    './doubao_watermark/**/*.js',
    './src/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        dark: 'var(--color-dark)',
        'lazy-dark': 'var(--color-lazy-dark)',
        'lazy-card': 'var(--color-lazy-card)',
        success: 'var(--color-success)',
        warn: 'var(--color-warn)',
        err: 'var(--color-err)',
        info: 'var(--color-info)'
      },
      boxShadow: {
        soft: '0 4px 20px -2px var(--shadow-soft)',
        card: '0 0 20px var(--shadow-card)'
      }
    }
  },
  plugins: []
};
