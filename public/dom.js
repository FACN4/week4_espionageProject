//searchInput from index.HTML
var searchInput = document.getElementById("searchInput");
console.log(searchInput);

var sendForm = function() {
  var url = searchWrapper(searchInput.value); // searchWrapper defined in xhr.js
  xhrAPI(url, appendCities); //xhrAPI defined in xhr.js
};

//creates a drop down menu from the array of cities. Is called by an XHR request.
const arrOfCities = [
  {
    country: "GB",
    name: "York",
    lat: "53.95763",
    lng: "-1.08271"
  },
  {
    country: "GB",
    name: "Yetminster",
    lat: "50.89579",
    lng: "-2.57959"
  },
  {
    country: "GB",
    name: "Yeovil",
    lat: "50.94159",
    lng: "-2.63211"
  }
];

var appendCities = function(arrOfCities) {
  var ul = document.getElementById("dropdown");
  ul.innerHTML = "";
  if (searchInput.value.length > 0) {
    arrOfCities.forEach(function(city) {
      let li = document.createElement("li");
      let divCity = document.createElement("div");
      let divCountry = document.createElement("div");
      divCity.textContent = city.name;
      divCountry.textContent = city.country;
      ul.appendChild(li);
      li.appendChild(divCity);
      li.appendChild(divCountry);
      li.addEventListener(
        "click",
        function(e) {
          var cityForAPI = e.target.firstChild.textContent;
          var query = city.name;
          var id = "pxlrimage";
          if (query === "Hull") {
            document.getElementById("pxlrimage").src =
              "https://vectortoons.com/wp-content/uploads/2015/07/pile-of-poop-emoji-collection-3-010.jpg";
          } else {
            pixabyXhrApi(query, id); //
          }
        },
        false
      );
    });
  }
};
