var requestModule = (function(){

  function makeRequest(method, url, body, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(xhr.readyState == 4 && xhr.status === 200){
        console.log('about to render:', xhr);
        callback(null, xhr.responseText);
      }
      else if(xhr.status === 404){
        callback(new Error('OH Blimey !! page not found :('));
      }
    }
    xhr.open(method,url);
    xhr.send(body);
  }

  return{
    makeRequest: makeRequest
  }
})();

requestModule.makeRequest('GET', '/addAllData' ,"",  renderModule.updateDOM)


var searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var value = searchForm.searchValue.value;
  if(typeof value !== "string") {
    searchForm.searchValue.value = "Input must be words";
  }
  else {
    var url = '/search?'+ value.trim();
    requestModule.makeRequest('GET', url, "",renderModule.updateDOM)
    searchForm.searchValue.value = null;
  }
})

var addForm = document.getElementById('addForm');

addForm.addEventListener('submit', function(event){
  event.preventDefault();
  var inputs  = ['name','desc', 'rate', 'cost','loc', 'tags']
  var data = {};
  inputs.forEach(function(ip){
    data[ip] = addForm[ip].value
  });
  requestModule.makeRequest('POST', '/addShop', JSON.stringify(data),renderModule.updateDOM)
})
