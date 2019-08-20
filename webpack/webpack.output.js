/* eslint-disable @typescript-eslint/no-var-requires */
const PATH = require('../config/path');

module.exports = {
  filename: '[name].bundle.js',
  chunkFilename: '[name].bundle.js',
  path: PATH.DEST,
  publicPath: '/',
};
