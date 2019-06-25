const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [ 'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                  },
                },
              'postcss-loader',
              'sass-loader'
            ],
      }
    ]
  }
});
