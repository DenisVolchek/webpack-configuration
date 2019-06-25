const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
         'postcss-loader',
         'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});
