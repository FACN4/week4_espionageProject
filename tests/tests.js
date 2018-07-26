const test = require("tape");
const search = require("../src/citySearch");

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
  let actual1 = search.search("y",testJSON1);
  t.same(actual1.length,8, "Search should only return 8 results, only the shortest ones");
  t.same(actual1.includes({
    "country": "GB",
    "name": "Yetminster",
    "lat": "50.89579",
    "lng": "-2.57959"
  }),false, "Search should exclude the largest result names");
  let actual2 = search.search("zadad");
  t.same(actual2.length,1, "There should only be one city with with this text");
  t.end();
});

test("Country code to name tests",function(t){
  t.same(search.countryCodeToName(testJSON4),testJSON5, "Country code should be converted to country name");
  t.same(search.countryCodeToName(testJSON6),testJSON6,"Country code should remain if countryNames.json doesn't have the country code");
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

const testJSON4 = [
  {
    "country": "GB",
    "name": "York",
    "lat": "53.95763",
    "lng": "-1.08271"
  }
];
const testJSON5 = [
    {
      "country": "United Kingdom",
      "name": "York",
      "lat": "53.95763",
      "lng": "-1.08271"
    }
  ];
const testJSON6 = [
  {
    "country": "ELS",
    "name": "York",
    "lat": "53.95763",
    "lng": "-1.08271"
  }
]
