const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const serverConfig = require("./webpack.server.config");
const clientConfig = require("./webpack.server.config");


const isProduction = process.env.NODE_ENV === "production";
const rootDir = path.resolve(__dirname, "../");
const srcDir = path.join(rootDir, "src");

const baseConfig = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "eval-source-map",
  resolve: {
    alias: {
      "SRC": srcDir,
      "PAGE": path.join(srcDir, "page"),
      "COMPONENT": path.join(srcDir, "component")
    },
    extensions: [".ts", ".js", ".d.ts", ".json"]
  },
  entry: path.resolve(__dirname, "../src/main.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main-webpack.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "vue-tslint-loader",
        exclude: /node_modules/,
        options: {
          emitErrors: true,
          configFile: path.join(rootDir, "tslint.json")
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    ... (isProduction ? [] : [new FriendlyErrorsPlugin()])
  ]
};

module.exports = [
  webpackMerge(baseConfig, serverConfig),
  webpackMerge(baseConfig, clientConfig)
];
