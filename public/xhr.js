function xhrAPI(url,callback){
  var xhr=new XMLHttpRequest();

  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      var res =JSON.parse(xhr.responseText);
      return callback(res);
    }
  };


xhr.open("GET",url,true);
xhr.send();


}
