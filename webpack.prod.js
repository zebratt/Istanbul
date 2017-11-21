const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
  },
  plugins: [
    new ExtractTextPlugin('style.[contenthash:8].css'),
    new HtmlWebpackPlugin({
      title: '点赢宝',
      template: 'dist/index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
})
