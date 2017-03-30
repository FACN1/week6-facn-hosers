const dbConnection = require('../database/db_connection.js');

function getData(cb, search){
  if (!search){
    dbConnection.query('SELECT shop_name, shop_rating, cost, address, description, tags FROM shops;', (err, res) => {
      if (err) cb(err);
      cb(null, res.rows);
    });
  }
  else {
    // dbConnection.query(`SELECT shop_name, shop_rating, cost, address, description,tags FROM shops WHERE tags LIKE '%`+ search +`%';`, (err, res)

    dbConnection.query(`SELECT shop_name, shop_rating, cost, address, description,tags FROM shops WHERE tags LIKE '%${search}%';`,
     (err, res) => {
      if (err) cb(err);
      cb(null, res.rows);
    });
  };
}

// function render(err, res){
//   if (err) {
//     console.log(err);
//     return;
//   }
//   else {
//     console.log(res);
//   }
// }
// getData(render);
// getData(render, 'coffee');

module.exports = {
  getData: getData
}
