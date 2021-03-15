const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/public/index.html'),
      filename: 'index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }),
    new CopyWebpackPlugin({
      patterns:[
        { from: 'src/public/manifest.json' },
        { from: 'src/public/cherry-blossoms-144x144.ico' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|svg|gif|mp3)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
}