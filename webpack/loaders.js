'use strict';

module.exports = [];

var mode = require('./mode');

var babelLoaderOptions = {
  stage: 1,
  optional: [
    'runtime'
  ]
};
var jsLoaders = [
  'babel?' + JSON.stringify(babelLoaderOptions)
];
if (mode.IS_HOT) {
  jsLoaders.unshift('react-hot');
}

module.exports.push({
  test: /\.js$/,
  exclude: /node_modules|js\/libs/,
  loaders: jsLoaders
});

module.exports.push({
  test: /\.json$/,
  loaders: ['json']
});

var sassLoaders;
var cssLoaderOptions = {
  modules: true,
  importLoaders: 2
};

var path = require('path');

var sassLoaderOptions = {
  includePaths: [
    path.join(__dirname, '../', 'src', 'styles')
  ]
};

var extractCssClassnamesOptions = {
  rootPath: path.join(__dirname, '../', 'src'),
  outputFile: path.join(__dirname, '../', 'build', 'assets', 'css-classes.json'),
  modules: true
};

if (mode.IS_DEV) {
  cssLoaderOptions.sourceMap = true;
  sassLoaderOptions.sourceMap = true;
}

if (mode.IS_HOT) {
  sassLoaders = [
    'style',
    'css?' + JSON.stringify(cssLoaderOptions),
    'sass?' + JSON.stringify(sassLoaderOptions),
    'postcss'
  ].join('!');
} else {
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  sassLoaders = ExtractTextPlugin.extract('style', [
    'css?' + JSON.stringify(cssLoaderOptions),
    'sass?' + JSON.stringify(sassLoaderOptions),
    'postcss'
  ].join('!'));
}

module.exports.push({
  test: /\.scss$/,
  loader: sassLoaders
});

var filename = 'assets/[name].[ext]';
if (mode.IS_PROD) {
  filename = 'assets/[name].[hash].[ext]';
}

var urlLoaderOptions = {
  limit: 10000,
  name: filename
};

module.exports.push({
  test: /[\\\/]styles[\\\/].*\.(woff2?|eot|ttf|svg|png|jpg|jpeg|gif)/i,
  loader: 'url?' + JSON.stringify(urlLoaderOptions)
});

module.exports.push({
  test: /[\\\/]images[\\\/].*\.(png|jpg|jpeg|gif)/i,
  loader: 'url?' + JSON.stringify(urlLoaderOptions)
});
