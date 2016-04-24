var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/src/index.jsx",
  devServer: {
    contentBase: './build',
    port: 9000,
    https: false,
  },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts', 'build'),
    filename: "bundle.js",
  },
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
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /.svg$/, loaders: ['url-loader?mimetype=image/svg+xml'] },
      { test: /.png$/, loaders: ['url-loader?mimetype=image/png'] },
      { test: /.jpe?g$/, loaders: ['url-loader?mimetype=image/jpg'] },
    ]
  },
  devtool: 'source-maps',
  resolve: {
   extensions: ["", ".js", ".jsx" ]
  }
};
