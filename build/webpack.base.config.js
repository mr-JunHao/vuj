const path = require('path')
const webpack = require('webpack')

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rootPath = path.resolve(__dirname, '..');

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  context: resolve('examples'),
  entry: {
    vendor: ['vue', 'vue-router', 'axios'],
    vj: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(rootPath, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extensions: true
          }
        }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name]_[chunkhash:8].css' : '[name].css'
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'vj'],
      template: resolve('./examples/src/index.tpl'),
      filename: 'index.html',
      inject: true
    })
  ]
}
