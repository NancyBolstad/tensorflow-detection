module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';
  return {
    entry: require('./webpack.entry'),
    output: require('./webpack.output'),
    module: require('./webpack.module'),
    resolve: require('./webpack.resolve'),
    optimization: require('./webpack.optimization'),
    plugins: require('./webpack.plugins'),
    ...(IS_DEVELOPMENT
      ? {
          devtool: 'source-map',
          devServer: require('./webpack.devServer'),
        }
      : {}),
  };
};
