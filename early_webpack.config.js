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
      },
      { test: /.svg$/, loaders: ['url-loader?mimetype=image/svg+xml'] },
      { test: /.png$/, loaders: ['url-loader?mimetype=image/png'] },
      { test: /.jpe?g$/, loaders: ['url-loader?mimetype=image/jpg'] },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
