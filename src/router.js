const handlers = require("./handlers");

var router = function(req, res) {
  var url = req.url;
  if (url === "/") {
    // run index.html
    handlers.handlerHome(req, res);
  } //else if (url === "/cities") {
  //}
  else if (["/index.js", "/style.css"].includes(url)) {
    // run public files
  } else {
    //404
    handlers.handler404(req, res);
  }
};

module.exports = router;
