const fs = require('fs');
const path = require('path');
(
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

//Create 404 handler
const errorHandler = (req, res) => {
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('page not found');
}

module.exports = {
  homeHandler: homeHandler,
  assetsHandler: assetsHandler,
  errorHandler: errorHandler
}
