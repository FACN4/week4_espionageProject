const path = require("path");
const fs = require("fs");
//const cities = require("./cities.js");

var handler500 = function(res) {
  res.writeHead(500, { "content-type": "text/plain" });
  res.end("server error");
};

var handlerHome = function(req, res) {
  fs.readFile(
    path.join(__dirname, "..", "public", "index.html"),
    "utf8",
    (err, file) => {
      if (err) {
        handler500(res);
        return;
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(file);
      }
    }
  );
};

var handlerPublic = function(req, res, url) {};

var handlerCities = function(req, res, url) {};

var handler404 = function(req, res, url) {};

module.exports = {
  handlerHome,
  handlerPublic,
  handlerCities,
  handler404
};
