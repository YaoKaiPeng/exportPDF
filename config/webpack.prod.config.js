const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const prodConfig = {
  mode: "production",
  entry: ["@babel/polyfill", path.join(__dirname, "../src/index.js")],
  output: {
    path: path.join(__dirname, "../lib/"),
    filename: "index.js",
    libraryTarget: "umd",
    libraryExport: "default"
  }
};

module.exports = merge(prodConfig, baseConfig);
