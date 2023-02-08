module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        c: {
          navy: '#0D1A2D',
          blue: '#15273F',
          cyan: '#06FFFF',
          silver: '#8BA8D0',
        },
      },
    },
  },
  plugins: [],
};
