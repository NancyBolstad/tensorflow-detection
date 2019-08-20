/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const express = require('express');

module.exports = {
  port: 3000,
  hot: true,
  hotOnly: true,
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../dist'),
  before: app => {
    app.use('/static', express.static(path.resolve(__dirname, '../static')));
  },
};
