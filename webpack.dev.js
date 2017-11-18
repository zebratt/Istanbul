const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9999
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '点赢宝',
      template: 'dist/index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
