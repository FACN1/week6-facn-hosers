const handler = require('./handler.js');

const routes = {
  '/': handler.homeHandler,
  '404': handler.errorHandler,
  '/main.css': handler.assetsHandler,
  '/main.js': handler.assetsHandler,
  '/render.js':handler.assetsHandler,
  '/addAllData': handler.allDataHandler
}

const router = (req, res) => {
  if(routes[req.url]) {
    routes[req.url](req, res);
  }
  else {
    routes[404](req, res);
  }
}

module.exports = router;
