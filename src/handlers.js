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

var handlerPublic = function(req, res, url) {
var extension = url.split('.')[1];
var extensionType = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript'
  //Add images and other file types
};
// url == /style.css

fs.readFile(path.join(__dirname, '..', 'public', url ),"utf8" ,(err, file) => {
  if (err) {
    handler500(res);
    return;
  } else {
    res.writeHead(200, { "Content-Type": extensionType[extension]});
    res.end(file);
  }
});


};

var handlerCities = function(req, res, url) {

  };

var handler404 = function(req, res) {
  fs.readFile(
    path.join(__dirname, "..", "public", "404.html"),
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

module.exports = {
  handlerHome,
  handlerPublic,
  handlerCities,
  handler404
};
