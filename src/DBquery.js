const dbConnection = require('../database/db_connection.js')


function getAllData(cb){
  dbConnection.query('SELECT shop_name, shop_rating, cost, address, description, tags FROM shops;', (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
}

function getSearchData(search, cb){
  dbConnection.query(`SELECT shop_name, shop_rating, cost, address, description,tags FROM shops WHERE tags ILIKE '%${search}%';`,
   (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
}

module.exports = {
  getAllData: getAllData,
  getSearchData: getSearchData
}
