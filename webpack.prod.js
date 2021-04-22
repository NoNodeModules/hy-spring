const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
      filename: '[name].[contenthash].js',
    },
    plugins: [new CleanWebpackPlugin()],
  }