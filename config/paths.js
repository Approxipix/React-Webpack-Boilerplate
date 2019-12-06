const paths = require('path');

module.exports = {
  src: paths.resolve(__dirname, '../src'),
  build: paths.resolve(__dirname, '../dist'),
  static: paths.resolve(__dirname, '../public'),
};
