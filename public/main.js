var requestModule = (function(){

  function makeRequest(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(xhr.readyState == 4 && xhr.status === 200){
        callback(null, xhr.responseText);
      }
      else if(xhr.status === 404){
        callback(new Error('OH Blimey !! page not found :('));
      }
    }
    xhr.open(method,url);
    xhr.send();
  }

  return{
    makeRequest: makeRequest
  }
})();

requestModule.makeRequest('GET', '/addAllData' ,  renderModule.updateDOM)


var searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var value = searchForm.searchValue.value;
  if(typeof value !== "string") {
    searchForm.searchValue.value = "Input must be words";
  }
  else {
    var url = '/search?'+ value.trim();
    requestModule.makeRequest('GET', url ,renderModule.updateDOM)
    searchForm.searchValue.value = null;
  }
})
