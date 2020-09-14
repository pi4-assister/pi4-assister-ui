// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
  devServer: {
    // public: 'assister.development:80',
    overlay: true,
    openPage: '#/',
    hot: true,
    open: true,
    port: 8080,
  },
});
