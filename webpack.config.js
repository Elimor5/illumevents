
var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015","react"]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
}
