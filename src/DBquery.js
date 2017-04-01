const dbConnection = require('../database/db_connection.js')


function getAllData(cb){
  dbConnection.query('SELECT shop_name, shop_rating, cost, address, description, tags FROM shops;', (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
}

function getSearchData(search, cb){
  let rightSearch = "%"+search+"%"
  dbConnection.query('SELECT shop_name, shop_rating, cost, address, description,tags FROM shops WHERE tags ILIKE $1',[rightSearch],
   (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
}

function addData(toAdd, cb){
  dbConnection.query('INSERT INTO shops(shop_name,shop_rating,cost, address,description,tags) VALUES ($1,$2,$3,$4,$5,$6)',[toAdd.name, toAdd.rate, toAdd.cost, toAdd.loc, toAdd.desc, toAdd.tags], cb);
}

module.exports = {
  getAllData: getAllData,
  getSearchData: getSearchData,
  addData:addData
}
