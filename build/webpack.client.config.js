const webpack = require("webpack");
const imports = require("./imports");
const VueSsrClientPlugin = require("vue-server-renderer/client-plugin");


module.exports = {
  entry: {
    app: "./src/entry-client.ts"
  },
  output: {
    path: imports.distPath,
    filename: "[name].main.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(imports.isProduction ? "production" : "development"),
      "process.env.VUE_ENV": JSON.stringify("client")
    }),
    new VueSsrClientPlugin({
      filename: "client-manifest.json"
    })
  ]
};
