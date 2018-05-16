const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const precss = require('precss');
const cssnano = require('cssnano');
const cssrest = require('postcss-css-reset');
const plugins = process.env.NODE_ENV === 'production' ? {
  'postcss-css-reset': {},
  'postcss-import': {},
  'postcss-cssnext':{
    // browsers: ['> 2%','not ie <= 8']
  },
  'precss': {},
  'cssnano': {
    preset: 'default'
  }
} : {
  'postcss-css-reset': {},
  'postcss-import': {},
  'postcss-cssnext':{
    browsers: ['> 2%','not ie <= 8']
  },
  'precss': {}
};

module.exports = {
  plugins
}
