const path = require('path');
const webpack = require('webpack');
const sharedPlugins = require('./sharedPlugins');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }),
];

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, '/../src/assets/js/main.js'),
    ]
  },
  output: {
    path: path.join(__dirname, '/../dist/'),
    filename: '[name].min.js',
    publicPath: '/',
  },
  plugins: plugins.concat(sharedPlugins),
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['latest'],
        },
      }],
    }, {
      test: /\.scss/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [path.join(__dirname, '/../src/assets/scss')],
          },
        },
      ],
    }],
  },
};
