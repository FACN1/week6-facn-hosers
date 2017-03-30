const fs = require('fs');
const path = require('path');
const DBquery = require('./DBquery');
const url = require('url');

const extensionType = {
  'js': 'application/javascript',
  'css': 'text/css'
}

const homeHandler = (req, res) => {
  let filePath = path.join(__dirname, '..', 'public/index.html');
  fs.readFile(filePath, function(error, file) {
    if(error) {
      console.log(error);
    }
    else {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  })
}
//Create handler for main.js and main.css
const assetsHandler = (req, res) => {
  //Handler Variables
  let url = req.url;
  let extension = url.split('.')[1];
  let filePath = path.join(__dirname, '..', 'public', url);
  fs.readFile(filePath, function (error, file) {
    if (error) {
      console.log(error);
      return;
    }
    else{
      res.writeHead(200, {"content-type":extensionType[extension]});
      res.end(file);
    }
  })
}

const allDataHandler = (req, res) => {
  DBquery.getData(null,(err, result) => {
    if (err) throw err;
    let table = JSON.stringify(result);
    res.writeHead(200, {"content-type": 'application/json'});
    res.end(table);
  });
}

const searchHandler = (req, res) => {
  let searchUrl = req.url;
  let searchString = searchUrl.split('?')[1];
  DBquery.getData(searchString,(err, result) => {
    if (err) throw err;
    let table = JSON.stringify(result);
    res.writeHead(200, {"content-type": 'application/json'});
    res.end(table);
  });
}
//Create 404 handler
const errorHandler = (req, res) => {
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('page not found');
}

module.exports = {
  homeHandler: homeHandler,
  assetsHandler: assetsHandler,
  errorHandler: errorHandler,
  allDataHandler: allDataHandler,
  searchHandler: searchHandler
}
