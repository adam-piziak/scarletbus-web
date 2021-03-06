const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(base, {
  entry: './src/entry-client.js',
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'src/assets/favicon.ico'
    })
  ]
})

module.exports = config
