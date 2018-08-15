"use strict";

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['babel-polyfill', './index.js'], // babel-polyfill はIE11などで必要
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {comments: /^\**!|@preserve|@license|@cc_on/},
          safari10: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
};
