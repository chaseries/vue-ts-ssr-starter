const path = require("path");
const distPath = path.resolve(__dirname, "../dist/");
const isProduction = process.env.NODE_ENV === "production";


module.exports = {
  distPath,
  isProduction
};
