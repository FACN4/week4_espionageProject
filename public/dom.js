//searchInput from index.HTML
var searchInput = document.getElementById("searchInput");

var sendForm = function() {
  var url = searchWrapper(searchInput.value); // searchWrapper defined in xhr.js
  xhrAPI(url, appendCities); //xhrAPI defined in xhr.js
};

//creates a drop down menu from the array of cities. Is called by an XHR request.
var appendCities = function(arrOfCities) {
  var ul = document.getElementById("dropdown");
  ul.innerHTML = "";
  if (searchInput.value.length > 0) {
    arrOfCities.forEach(function(city) {
      let li = document.createElement("li");
      let divCity = document.createElement("div");
      let divCountry = document.createElement("div");
      li.setAttribute("tabindex", "0");
      li.classList.add("liList");
      divCity.classList.add("cityName");
      divCountry.classList.add("countryName");
      divCity.textContent = city.name;
      divCountry.textContent = city.country;
      ul.appendChild(li);
      li.appendChild(divCity);
      li.appendChild(divCountry);
      var img = document.getElementById("pxlrimage");
      img.classList.add("blur");
      var showImage = function() {
        img.classList = "";
        var cityForAPI = li.firstChild.textContent;
        searchInput.value = cityForAPI;
        var query = city.name;
        var id = "pxlrimage";
        if (query.toUpperCase() === "HULL") {
          document.getElementById("pxlrimage").src =
            "https://vectortoons.com/wp-content/uploads/2015/07/pile-of-poop-emoji-collection-3-010.jpg";
        } else {
          pixabyXhrApi(query, id);
        }
        ul.innerHTML = "";
      };
      li.addEventListener("click", showImage, false);
      li.addEventListener("keypress", function(e){
        var key = e.which || e.keyCode;
        if (key === 13) { showImage();}
        }
      );
    });
  }
};

searchInput.addEventListener("keypress", function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    var query = searchInput.value;
    var id = "pxlrimage";
    if (query.toUpperCase() === "HULL") {
      document.getElementById("pxlrimage").src =
        "https://vectortoons.com/wp-content/uploads/2015/07/pile-of-poop-emoji-collection-3-010.jpg";
    } else {
      pixabyXhrApi(query, id); //
    }
  }
});
