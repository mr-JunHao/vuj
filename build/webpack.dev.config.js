const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
});
