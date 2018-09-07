const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const prodConfig = merge(baseConfig, {
  output: {
    filename: '[name].[contenthash:8].js'
  },
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()]
});

prodConfig.plugins.unshift(new CleanWebpackPlugin(['dist']));

module.exports = prodConfig;
