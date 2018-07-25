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
      console.log(res);
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
    // if (typeof response.hit.length !== Number) {
    //   img.src =
    //     "https://www.google.co.il/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwig_6alh7vcAhVE26QKHdWQDdwQjRx6BAgBEAU&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F42135268%2Fangular2-onerror-image-binding&psig=AOvVaw2C_wRzT5zeHaTCSW8S9s3A&ust=1532635734227280";
    // } else {
    img.src = response.hits[0].largeImageURL;
    // }
  };
  xhrAPI(url, appendimage);
}
