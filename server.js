const express = require("express");
const path = require("path");
// const createBundleRenderer = require("vue-server-renderer");

const isProduction = process.env.NODE_ENV === "production";

const server = express();

server.get("*", (req, res) => {
  res.end("Works");
});

server.listen(process.argv[2] || 8080);
