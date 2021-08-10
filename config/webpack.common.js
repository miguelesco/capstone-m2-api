/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* eslint-disable */
const path = require('path');


const assetsRule = {
  type: "asset",
  test: /\.(png|svg|jpg|jpeg|gif)$/i
}


/** @type {import('webpack').Configuration} **/
module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js",".json"]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].[contenthash].js",
    publicPath: ""
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack Project',
    template: 'src/index.html',
  }), new CleanWebpackPlugin()],
  module: {
    rules: [assetsRule],
  },

};