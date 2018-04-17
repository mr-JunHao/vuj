const path = require('path')
const webpack = require('webpack')

const utils = require('./utils');
const packpage = require('../package')

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';


const config = {
  extract: isProduction,
  sourceMap: true
}

function wrap (render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

module.exports = {
  context: utils.resolve('docs'),
  entry: {
    vendor: ['vue', 'vue-router', 'axios'],
    [packpage.name]: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: utils.resolve('dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.js',
      // 'build': utils.resolve('build'),
      '@': utils.resolve('src'),
      'src': utils.resolve('src'),
      'packages': utils.resolve('packages'),
      'lib': utils.resolve('lib'),
      'docs': utils.resolve('docs/src/components')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: utils.cssLoaders({
              sourceMap: config.sourceMap,
              extract: config.extract
            })
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
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true,
          preprocess: function(MarkdownIt, source) {
            // 为table标签加上名为'table'的class
            // MarkdownIt.renderer.rules.table_open = function() {
            //   return '<table class="table">'
            // };
            MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
            return source;
          }
        }
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
      },
      //test : /\.(css|less|sass|scss|stylus|styl|postcss)$/
      ...utils.styleLoaders({
        sourceMap: config.sourceMap,
        extract: config.extract
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['vendor', packpage.name],
      template: utils.resolve('docs/src/index.tpl'),
      filename: 'index.html',
      inject: true
    })
  ]
}
