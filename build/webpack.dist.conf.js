var utils = require('./utils')
var config = require('../config')
var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.conf')

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: true
    })
  },
  output: {
    path: config.build.distRoot,
    filename: '[name].js',
    library: 'vue-ui-office-fabric',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

webpackConfig.entry = {
  index: './src/index.js'
}

module.exports = webpackConfig
