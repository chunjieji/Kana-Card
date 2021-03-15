const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports =  merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // output: {
  //   publicPath: '/'
  // },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000
  }
})