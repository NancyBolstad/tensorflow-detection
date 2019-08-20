module.exports = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
  ],
};
