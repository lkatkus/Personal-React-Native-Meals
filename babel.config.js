module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@screens': './screens',
            '@navigation': './navigation',
            '@components': './components',
            '@containers': './containers',
          },
        },
      ],
    ],
  };
};
