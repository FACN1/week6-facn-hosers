const dbConnection = require('../database/db_connection.js');

function getData(search, cb){
  if (!search){
    dbConnection.query('SELECT shop_name, shop_rating, cost, address, description, tags FROM shops;', (err, res) => {
      if (err) cb(err);
      cb(null, res.rows);
    });
  }
  else {

    dbConnection.query(`SELECT shop_name, shop_rating, cost, address, description,tags FROM shops WHERE tags LIKE '%${search}%';`,
     (err, res) => {
      if (err) cb(err);
      cb(null, res.rows);
    });
  };
}

module.exports = {
  getData: getData
}
