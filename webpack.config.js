const path = require('path');

module.exports = {
  entry: path.resolve('www', 'js', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./www/js/dist/')
  },
  devtool: 'source-map',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
  	rules: [
  	  { test: /\.(pug|jade)$/, use: { loader: 'pug-loader', query: {} } },
  	  { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader"}
  	]
  }
};