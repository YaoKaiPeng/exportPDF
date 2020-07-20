const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const devConfig = {
  mode: "development",
  entry: path.join(__dirname, "../example/app.js"),
  output: {
    path: path.join(__dirname, "../example/"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../example/"),
    compress: true,
    host: "0.0.0.0",
    port: 12580
  }
};
module.exports = merge(devConfig, baseConfig);
