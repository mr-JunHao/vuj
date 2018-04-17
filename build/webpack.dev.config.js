const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../src"),
    compress: true,
    hot: true,
    port: 3000,
    host: "0.0.0.0",
    stats: "errors-only",
    proxy: {
      
    },
    clientLogLevel: "none"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
});
