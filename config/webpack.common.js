const paths = require('./paths');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  target: 'web',
  entry: {
    main: paths.src + '/index.js',
  },
  output: {
    path: paths.build
  },
  resolve: {
    alias: {
      '@': paths.src,
      '@assets': paths.src + '/assets',
      '@pages': paths.src + '/pages',
      '@components': paths.src + '/components'
    },
    extensions: ['.js', '.jsx'],
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        exclude: /node_modules/,
        include: paths.src + '/assets/images',
        options: {
          limit: 8192,
          name: '[name].[hash:4].[ext]',
          outputPath: 'images',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        include: paths.src + '/assets/fonts',
        options: {
          limit: 8192,
          name: '[name].[hash:4].[ext]',
          outputPath: 'fonts',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Webpack Boilerplate',
      template: paths.static + '/index.html',
      favicon: paths.static + '/favicon.ico',
      filename: 'index.html'
    }),
  ],
};
