const path = require("path");
const fs = require("fs");
const citySearch = require("./citySearch");

var handler500 = function(res) {
  res.writeHead(500, { "content-type": "text/plain" });
  res.end("server error");
};

var handlerHome = function(req, res) {
  fs.readFile(
    path.join(__dirname, "..", "public", "index.html"),
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
  var extension = url.split(".")[1];
  console.log(extension);
  var extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg"
  };

    console.log("extension is",path.join(__dirname, "..", "public", url))

  fs.readFile(
    path.join(__dirname, "..", "public", url),
    (err, file) => {
      if (err) {
        console.log(err);
        handler500(res);
        return;
      } else {

        res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);

      }
    });


};

var handlerCities = function(req, res) {
  let url = req.url;
  let query = url.split("q=")[1];
  let formatedQuery = query.replace("%20"," ");
  // let filteredQuery = formatedQuery.match(/^[-a-zA-Z\s]*/gm);
  // console.log(filteredQuery);
  let top8 = citySearch.search(formatedQuery);
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(top8));
};

var handler404 = function(req, res) {
  fs.readFile(
    path.join(__dirname, "..", "public", "404.html"),
    "utf8",
    (err, file) => {
      if (err) {
        console.log(err)
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
