const handlers = require("./handlers");

var router = function(req, res) {
  var url = req.url;
  console.log(url)

  if (url === "/") {
    // run index.html
    handlers.handlerHome(req, res);
  }
   else if (url.includes("/citysearch")) {
     handlers.handlerCities(req,res);
  }
  else if (["/index.js", "/style.css","/dom.js","/xhr.js","/imgs/404Ben.jpg"].includes(url)) {
    // run public files
    console.log(url)

    handlers.handlerPublic(req,res,url);
  } else {
    //404
    handlers.handler404(req, res);
  }
};

module.exports = router;
