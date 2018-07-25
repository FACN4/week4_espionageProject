const citiesJSON = require("./cities.json");

const search = function(input, cities = citiesJSON) {
  var allMatches = includesSearch(input, cities);
  var sortedMatches = sortByNameLength(allMatches);
  var top8Matches = sortedMatches.slice(0, 8);
  return top8Matches;
};

const includesSearch = function(input, cities) {
  let output = [];
  let numCities = cities.length;
  for (let i = 0; i < numCities; i++) {
    if (cities[i].name.toUpperCase().includes(input.toUpperCase())) {
      output.push(cities[i]);
    }
  }
  return output;
};

const sortByNameLength = function(arr) {
  return arr.sort(function(a, b) {
    return a.name.length - b.name.length;
  });
};

module.exports = {
  search,
  includesSearch,
  sortByNameLength,
  citiesJSON
};
