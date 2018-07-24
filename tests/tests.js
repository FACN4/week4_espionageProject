var test = require("tape");
var search = require("../src/citySearch");

test("Tape working", function(t) {
  t.equal(1, 1, "Tape is working");
  t.end();
});

test("IncludesSearch tests", function(t){
  t.same(search.includesSearch("Y",testJSON), testJSON, "The actual should return all objects as they all contain Y");
  t.same(search.includesSearch("y",testJSON), testJSON, "Search should be case-insensitive");
  t.end();
})

const testJSON = [
  {
    "country": "GB",
    "name": "York",
    "lat": "53.95763",
    "lng": "-1.08271"
  },
  {
    "country": "GB",
    "name": "Yetminster",
    "lat": "50.89579",
    "lng": "-2.57959"
  },
  {
    "country": "GB",
    "name": "Yeovil",
    "lat": "50.94159",
    "lng": "-2.63211"
  },
  {
    "country": "GB",
    "name": "Yelverton",
    "lat": "50.4929",
    "lng": "-4.08382"
  },
  {
    "country": "GB",
    "name": "Yealmpton",
    "lat": "50.34856",
    "lng": "-3.99877"
  },
  {
    "country": "GB",
    "name": "Yeadon",
    "lat": "53.86437",
    "lng": "-1.68743"
  },
  {
    "country": "GB",
    "name": "Yazor",
    "lat": "52.11667",
    "lng": "-2.86667"
  },
  {
    "country": "GB",
    "name": "Yaxley",
    "lat": "52.51768",
    "lng": "-0.25852"
  },
]
