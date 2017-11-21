const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9999,
    stats: 'minimal',
    noInfo: false
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('develop')
      }
    })
  ]
});
