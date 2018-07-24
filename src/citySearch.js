const citiesJSON = require("./cities.json");

const includesSearch = function (input, cities){
  let output = [];
  let numCities = cities.length
  for (let i = 0; i < numCities; i++){
    if (cities[i].name.includes(input)){
      output.push(cities[i]);
    }
  }
  var sortedCities = sortByNameLength(output);
  var top8Cities = sortedCities.slice(0,8);
  console.log(top8Cities);
  return top8Cities;
}

const sortByNameLength = function (arr){
  return arr.sort(function(a,b){
    return a.name.length - b.name.length;
  })
}

includesSearch("London",citiesJSON);
