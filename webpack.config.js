// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pug = {
  test: /\.pug$/,
  loader: "@webdiscus/pug-loader",
};

const config = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [pug],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.pug"),
      filename: "index.html",
    }),
  ],
  stats: {
    children: true,
  },
};
module.exports = config;
