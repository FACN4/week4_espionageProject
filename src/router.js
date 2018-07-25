const handlers = require("./handlers");

var router = function(req, res) {
  var url = req.url;
  if (url === "/") {
    // run index.html
    handlers.handlerHome(req, res);
  }
   else if (url.includes("/citysearch")) {
     console.log("We have a serach!")
  }
  else if (["/index.js", "/style.css","/dom.js","/xhr.js"].includes(url)) {
    // run public files
    handlers.handlerPublic(req,res,url);
  } else {
    //404
    handlers.handler404(req, res);
  }
};

module.exports = router;
