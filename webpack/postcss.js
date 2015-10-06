var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');

var autoprefixerOptions = {
  browsers: ['last 2 version', 'ie 11']
};

module.exports = [
  autoprefixer(autoprefixerOptions),
  mqpacker,
];
