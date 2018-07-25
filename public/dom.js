var searchInput = document.getElementById('searchInput');
console.log(searchInput);

var sendForm = function () {
 var url = searchWrapper(searchInput.value);
 xhrAPI(url,console.log);
};
