const citiesJSON = require("./cities.json");
const countryNamesJSON = require("./countryNames.json");

const search = function(input, cities = citiesJSON) {
  var allMatches = includesSearch(input, cities); //Finds any matches that contain the input
  var completeMatches = allMatches.filter(city =>  "country" in city); //Excludes all cities that don't have a country property
  var sortedMatches = sortByNameLength(completeMatches); //Sorts matches so that shorter matches are pushed to the front. This means that user typed cities will be prefered
  var top8Matches = sortedMatches.slice(0,8); //Cuts off all but top 8 cities
  var top8Formated = countryCodeToName(top8Matches); //Changes the country name from 2 letter code to full name
  return top8Formated;
}

const countryCodeToName = function(arr,countryNames = countryNamesJSON) {
  return arr.map(function(city){
    if (city.country in countryNames){
      city.country = countryNames[city.country];
    }
    return city;
  })
};

const includesSearch = function (input, cities){
  let output = [];
  let numCities = cities.length
  for (let i = 0; i < numCities; i++){
    if (cities[i].name.toUpperCase().includes(input.toUpperCase())){
      output.push(cities[i]);
    }
  }
  return output;
}

const sortByNameLength = function (arr){
  return arr.sort(function(a,b){
    return a.name.length - b.name.length;
  })
}

module.exports = {
  search,
  includesSearch,
  sortByNameLength,
  citiesJSON,
  countryCodeToName
}
