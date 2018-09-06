const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const prodConfig = merge(baseConfig, {
  output: {
    filename: '[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css' }),
    new BundleAnalyzerPlugin()
  ]
});

prodConfig.plugins.unshift(new CleanWebpackPlugin(['dist']));

module.exports = prodConfig;
