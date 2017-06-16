
require('./check-versions')()

var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')
var rm = require('rimraf')
var path = require('path')

var webpackConfig = require('./webpack.dist.conf')
var config = require('../config')

var spinner = ora('packaging NPM module...')
spinner.start()

rm(config.build.distRoot, err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Package complete.\n'))
  })
})
