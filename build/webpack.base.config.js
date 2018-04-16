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
    path: path.join(rootPath, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': resolve('src'),
      'packages': resolve('packages'),
      'lib': resolve('lib'),
      'components': resolve('examples/src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ['vue-style-loader','css-loader','postcss-loader']
            }
            // extractCSS: true,
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
        use: ['vue-style-loader','css-loader','postcss-loader']
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
      template: resolve('examples/src/index.tpl'),
      filename: 'index.html',
      inject: true
    })
  ]
}
