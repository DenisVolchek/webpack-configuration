const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',
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
