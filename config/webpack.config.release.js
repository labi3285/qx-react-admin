const merge = require('webpack-merge')
const webpack = require('webpack');
const common = require('./webpack.config.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'null',
  optimization: {
    splitChunks: {
      // chunks: 'initial',
      // chunks: 'async',
      // chunks: 'all',
      chunks: 'all',
    }
  },
  plugins: [
    // 优化组件id序列化
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
})
