//search wrapped called in the DOM
function searchWrapper(query) {
  return "/citysearch?q=" + query;
}

//xhrAPI called in the DOM
function xhrAPI(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText);
      return callback(res);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function pixabyXhrApi(query, id) {
  var apiKey = "?key=" + "9584813-640bae5525454946bf1d1f8ae";
  var url = "https://pixabay.com/api/" + apiKey + "&q=" + query;
  var appendimage = function(response) {
    var img = document.getElementById(id);
    if (response.hits.length === 0) {
      img.src = "http://www.cricketd8.com/images/notfound.gif";
    } else {
      img.src = response.hits[Math.floor(Math.random() * 10)].largeImageURL;
    }
  };
  xhrAPI(url, appendimage);
}
