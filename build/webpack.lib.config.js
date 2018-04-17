const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.config')
const utils = require('./utils')

const packpage = require('../package')

module.exports = Object.assign(webpackBaseConfig, {
  entry: {
    [packpage.name]: utils.resolve('src/index.js')
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  output: {
    filename: '../lib/[name].js',
    library: packpage.name,
    libraryTarget: 'umd',
    chunkFilename: '[name]_[chunkhash:8].js'
  },
  plugins: []
})
