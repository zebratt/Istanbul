const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let commonConfig = {
    entry: {
        main: path.resolve(__dirname, 'src/app'),
        vendors: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'echarts', 'antd']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
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
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
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
            utils: path.resolve(__dirname, 'src/utils'),
            images: path.resolve(__dirname, 'images')
        },
        extensions: ['.js']
    },
    plugins: [
        new ExtractTextPlugin('style.[contenthash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        })
    ]
}

module.exports = commonConfig
