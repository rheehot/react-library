//https://sujinlee.me/webpack-react-tutorial/
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: {
    vendor: ['semantic-ui-react'],
    app: './src/index.tsx'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  output: {
    publicPath: "/",
    filename: '[name].[hash].js',
  },
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, //
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.ts','.tsx', '.css']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    })
  ],

  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  },
};