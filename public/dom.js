var searchInput = document.getElementById("searchInput");
console.log(searchInput);

var sendForm = function() {
  var url = searchWrapper(searchInput.value);

  xhrAPI(url, console.log);
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
  let ul = document.getElementById("dropdown");
  arrOfCities.forEach(function(city) {
    let li = document.createElement("li");
    let divCity = document.createElement("div");
    let divCountry = document.createElement("div");
    divCity.textContent = city.name;
    divCountry.textContent = "(" + city.country + ")";
    ul.appendChild(li);
    li.appendChild(divCity);
    li.appendChild(divCountry);
  });
};

appendCities(arrOfCities);

//create clickable list items. Ee
// var clickableItem = function(){
//   let cityForPixlr =
// }
//
// li.addEventListener('click', clickableItem(), false )
