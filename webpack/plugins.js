'use strict';

var mode = require('./mode');
var webpack = require('webpack');
module.exports = [new webpack.DefinePlugin({
  'process.env.NODE_ENV': mode.IS_PROD ? '"production"' : '"development"'
})];

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports.push(new HtmlWebpackPlugin({
  title: 'React Code Lunch',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  }
}));

if (mode.IS_HOT) {
  module.exports.push(new webpack.HotModuleReplacementPlugin());
} else {
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  module.exports.push(new ExtractTextPlugin(mode.IS_PROD ? 'assets/bundle.[hash].css' : 'assets/bundle.css'));
}

if (mode.IS_PROD) {
  module.exports.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    output: {
      comments: false
    }
  }));

  module.exports.push(new webpack.optimize.DedupePlugin());
  module.exports.push(new webpack.optimize.OccurenceOrderPlugin());
  module.exports.push(new webpack.optimize.AggressiveMergingPlugin());
} else {
  var WebpackNotifierPlugin = require('webpack-notifier');
  module.exports.push(new WebpackNotifierPlugin());
}
