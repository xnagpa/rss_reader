const path = require('path');

module.exports = {
  entry: path.resolve('www', 'js', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./js/dist/')
  }
};