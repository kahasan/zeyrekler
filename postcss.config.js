module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--t': '(max-width: 980px)' },
        },
        {
          customMedia: { '--d': '(max-width: 1270px)' },
        },
        {
          customMedia: { '--s': '(max-width: 374px) and (min-width: 0px)' },
        },
        {
          customMedia: { '--m': '(min-width: 374px)' },
        },
      ],
    },
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
};
