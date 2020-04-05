"use strict";

var path = require('path');

module.exports = {
  entry: './public/js/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              esmodules: true
            }
          }]]
        }
      }
    }]
  }
};