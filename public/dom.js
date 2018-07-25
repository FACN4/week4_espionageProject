var searchInput = document.getElementById('searchInput');
console.log(searchInput);

var sendForm = function () {
  var url = searchWrapper(searchInput.value);

  xhrAPI(url, console.log);
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGVuaXNrZW50IiwiYSI6ImNqazEyN25tYjBjM3EzdGtjZXM5Mnp3dXMifQ.MluPs6OSZ5OPL-QU_61Low'
}).addTo(mymap);
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

//create clickable list items. Ee
// var clickableItem = function(){
//   let cityForPixlr =
// }
//
// li.addEventListener('click', clickableItem(), false )
