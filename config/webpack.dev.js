/* eslint-disable */
const { default: merge } = require('webpack-merge');
const common = require('./webpack.common.js');
/* eslint-disable */

const scssRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

/** @type {import('webpack').Configuration} * */
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: '../dist',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: true,
  },
  target: 'web',
  devtool: 'eval-source-map',
  module: {
    rules: [scssRules],
  },
};

module.exports = merge(common, devConfig);