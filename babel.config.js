module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
