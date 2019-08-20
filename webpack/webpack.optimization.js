module.exports = {
  splitChunks: {
    name: false,
    cacheGroups: {
      vendors: {
        name: 'vendors',
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        minChunks: 1,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};
