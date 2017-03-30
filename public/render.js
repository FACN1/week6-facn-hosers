var renderModule = (function() {
  function updateDOM(error, data) {
    if(error) {
      console.log(error);
      return error;
    }
    else {
      var shops = JSON.parse(data);
      var table = document.getElementById('shops-table');
      console.log(shops)
      shops.forEach(function(shop) {
        var row = document.createElement('tr');
        var name = document.createElement('td');
        name.textContent = shop.shop_name;
        row.appendChild(name);
        var desc = document.createElement('td');
        row.appendChild(desc);
        desc.textContent = shop.description;
        var rating = document.createElement('td');
        rating.textContent = shop.shop_rating;
        row.appendChild(rating);
        var cost = document.createElement('td');
        cost.textContent = shop.cost;
        row.appendChild(cost);
        var loc = document.createElement('td');
        loc.textContent = shop.address;
        row.appendChild(loc);
        var tags = document.createElement('td');
        tags.textContent = shop.tags;
        row.appendChild(tags);

        table.appendChild(row);
      })
    }
  }
  return {
    updateDOM: updateDOM
  }
})();
