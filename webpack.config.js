/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-07-24 11:31:57
 * @LastEditTime: 2021-07-24 11:44:38
 * @LastEditors: rodchen
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8001,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};