const handlers = require("./handlers");

const router = function(req, res) {
  let url = req.url;

  if (url === "/") {
    handlers.handlerHome(req, res);
  } else if (url.includes("/citysearch")) {
    handlers.handlerCities(req, res);
  } else if (
    [
      "/index.js",
      "/style.css",
      "/dom.js",
      "/xhr.js",
      "/imgs/404Ben.jpg"
    ].includes(url)
  ) {
    handlers.handlerPublic(req, res, url);
  } else {
    handlers.handler404(req, res);
  }
};

module.exports = router;
