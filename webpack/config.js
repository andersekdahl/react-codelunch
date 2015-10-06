'use strict';

var mode = require('./mode');

var filename = 'assets/bundle.js';
if (mode.IS_PROD) {
  filename = 'assets/bundle.[hash].js';
}

var devPort = process.env.WEBPACK_DEVPORT || 8080;

var publicPath = '';
if (mode.IS_HOT) {
  // todo: Avoid this (https://github.com/webpack/style-loader/issues/55)
  publicPath = 'http://localhost:' + devPort + '/';
}

var path = require('path');
var root = path.join(__dirname, '..');
var loaders = require('./loaders');
var plugins = require('./plugins');
var postcss = require('./postcss');

var entry = path.join(root, 'src', 'entry.js');
if (mode.IS_HOT) {
  entry = [
    'webpack-dev-server/client?http://0.0.0.0:' + devPort,
    'webpack/hot/only-dev-server',
    entry
  ];
}

module.exports = {
  entry: entry,

  debug: mode.IS_PROD ? null : true,
  devtool: mode.IS_PROD ? null : 'source-map',

  output: {
    path: process.env.WEBPACK_OUT || path.join(root, 'build'),
    filename: filename,
    pathinfo: true,
    publicPath: publicPath
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {},
    root: path.join(root, 'src')
  },

  devServer: {
    port: devPort,
    inline: true,
    hot: true
  },

  module: {
    loaders: loaders
  },

  plugins: plugins,

  postcss: postcss,

  extractCssModuleClassnames: {
    onOutput: function (currentFilePath, curr, all) {
      console.log(currentFilePath);
    }
  }
};
