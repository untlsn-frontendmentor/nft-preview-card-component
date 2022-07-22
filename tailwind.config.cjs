module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#EC5F59',
          blue: '#00B0F0',
          text: '#32465A',
          yellow: '#FADF82',
          gray: '#9B9B9B',
        },
        background: {
          gray: '#F3F6F9',
          // Mainly use with opacity 33%
          shadow: '#32465A',
        },
      },
    },
  },
  plugins: [],
};
