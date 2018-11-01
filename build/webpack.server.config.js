const webpack = require("webpack");
const VueSsrServerPlugin = require("vue-server-renderer/server-plugin");
const imports = require("./imports");


module.exports = {
  target: "node",
  entry: "./src/entry-server.ts",
  output: {
    filename: "server.main.js",
    path: imports.distPath,
    libraryTarget: "commonjs2",
    libraryExport: "default"
  },
  plugins: [
    new VueSsrServerPlugin({
      filename: "app.server.json"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(imports.isProduction ? "production" : "development"),
      "process.env.VUE_ENV": JSON.stringify("server")
    })
  ]
};
