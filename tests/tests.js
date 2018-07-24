var test = require("tape");
var search = require("../src/citySearch");

test("Tape working", function(t) {
  t.equal(1, 1, "Tape is working");
  t.end();
});

test("IncludesSearch tests", function(t){
  t.same(search.includesSearch("Y",testJSON1), testJSON1, "The actual should return all objects as they all contain Y");
  t.same(search.includesSearch("y",testJSON1), testJSON1, "Search should be case-insensitive");
  t.same(search.includesSearch("York",testJSON1),
  [{
    "country": "GB",
    "name": "York",
    "lat": "53.95763",
    "lng": "-1.08271"
  }]
    , "Search should return only York");
  t.end();
});

test("sortByNameLength tests", function(t){
  t.same(search.sortByNameLength(testJSON2), testJSON2, "Should not sort an array which is already sorted");
  t.same(search.sortByNameLength(testJSON3),testJSON2, "Should sort by name length");
  t.end();
});

test("search tests",function(t){
  var actual = search.search("y",testJSON1);
  t.same(actual.length,8, "Search should only return 8 results, only the shortest ones");
  t.same(actual.includes({
    "country": "GB",
    "name": "Yetminster",
    "lat": "50.89579",
    "lng": "-2.57959"
  }),false, "Search should exclude the largest result names");
  t.end();
});


const testJSON1 = [
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
  {
    "country": "GB",
    "name": "Yampey",
    "lat": "52.51768",
    "lng": "-0.25852"
  }
]

const testJSON2 = [
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
  }
];

const testJSON3 = [
  {
    "country": "GB",
    "name": "Yetminster",
    "lat": "50.89579",
    "lng": "-2.57959"
  },
  {
    "country": "GB",
    "name": "York",
    "lat": "53.95763",
    "lng": "-1.08271"
  }
];
