const path = require('path')

const config = {
  context: path.join(__dirname, '/'),
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

module.exports = config;