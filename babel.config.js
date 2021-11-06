const plugins = [
  [
    'module-resolver',
    {
      root: ['./src/'],
      alias: {
        '@interfaces': './src/interfaces',
        '@components': './src/components',
        '@constants': './src/constants',
        '@styles': './src/styles',
        '@screens': './src/screens',
        '@navigation': './src/navigation',
        '@utils': './src/utils',
        '@contexts': './src/contexts',
        '@hooks': './src/hooks',
        '@assets': './src/assets',
        '@i18n': './src/i18n',
      },
      extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
    },
  ],
];
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
