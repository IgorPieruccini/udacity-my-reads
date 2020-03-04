const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');

module.exports = env => {
  return {
    entry: './src/index.jsx',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: env.ASSET_PATH
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.jsx', '.js']
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
  };
};
