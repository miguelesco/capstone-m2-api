const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { default: merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const scssRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

/** @type {import('webpack').Configuration} * */
const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [scssRules],
  },
};

module.exports = merge(common, prodConfig);