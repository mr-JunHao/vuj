const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.config')

const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    publicPath: '/',
    filename: './lib/[name].js',
    library: 'vj',
    libraryTarget: 'umd',
    chunkFilename: '[name]_[chunkhash:8].js'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    splitChunks: {
      chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async" 
      minSize: 0, // 最小尺寸，默认0
      minChunks: 1, // 最小 chunk ，默认1
      maxAsyncRequests: 1, // 最大异步请求数， 默认1
      maxInitialRequests: 1, // 最大初始化请求书，默认1
      name: () => {}, // 名称，此选项可接收 function
      cacheGroups: { // 这里开始设置缓存的 chunks
        priority: "0", // 缓存组优先级
        vendor: { // key 为entry中定义的 入口名称
          chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步) 
          test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
          name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
          minSize: 0,
          minChunks: 1,
          enforce: true,
          maxAsyncRequests: 1, // 最大异步请求数， 默认1
          maxInitialRequests: 1, // 最大初始化请求书，默认1
          reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
});
