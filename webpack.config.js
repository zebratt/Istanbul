const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/app'),
    vendors: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'stage-0', 'es2015'],
          plugins: [
            [
              'transform-runtime',
              {
                helpers: false,
                polyfill: true,
                regenerator: true
              }
            ],
            ['transform-class-properties'],
            [
              'import',
              {
                libraryName: 'antd',
                style: 'css'
              }
            ]
          ]
        }
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils')
    },
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"develop"'
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new HtmlWebpackPlugin({
      title: '点赢宝',
      template: 'dist/index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9999
  },
  devtool: 'cheap-module-eval-source-map'
};
