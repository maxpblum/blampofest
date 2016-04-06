const path = require('path')

module.exports = {
  debug: true,
  devServer: {
    contentBase: './build',
    port: 9000,
    https: false,
  },
  devtool: 'eval-source-map',
  entry: './src/index',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
