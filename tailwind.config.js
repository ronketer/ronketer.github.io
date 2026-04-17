/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        charcoal:     '#0f1117',
        navy:         '#161b27',
        'navy-light': '#1e2538',
        accent:       '#38bdf8',
        'accent-dim': '#0ea5e9',
        muted:        '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 32px rgba(56,189,248,0.25)',
        'glow-card':   '0 0 32px rgba(56,189,248,0.08)',
        'glow-badge':  '0 0 24px rgba(56,189,248,0.12)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up':        'fadeUp 0.6s ease-out forwards',
        'bounce-slow':    'bounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
