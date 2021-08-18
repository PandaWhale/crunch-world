const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 8080,
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
      '/signin': 'http://localhost:3000',
      '/signup': 'http://localhost:3000',
      '/images': 'http://localhost:3000'
    },
    hot: true,
    historyApiFallback: true,
  }
}
