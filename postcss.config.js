module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-for': {},
    'postcss-nested': {},
    'postcss-cssnext': {
      browsers: [
        'last 2 versions',
        '> 2%',
      ],
      features: {
        customProperties: {
          preserve: true,
          warnings: false,
        },
      },
    },
  },
};
