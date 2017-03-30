const tape = require('tape');
const shot = require('shot');
const router = require('../router.js');
const path = require('path');
const fs = require('fs');
const dbq = require('../DBquery.js');

//Check router exists
tape('initialize', function(t){
  t.ok(router, 'router exists');
  t.end();
});

 tape('Home Route', function(t){
  //Use shot inject to test home route
  let testStrings = "<title>Nazareth FACN Foods</title>"
  shot.inject(router, {method: 'get', url:'/'}, function(res){
    t.equal(res.statusCode, 200, 'test that status code is 200');
    t.ok(res.payload.includes(testStrings), 'Title string inside index.html was found');
    t.end();
  })
 })
//
tape('404 Route', function(t){
  //Use shot inject to test home route
  shot.inject(router, {method: 'get', url:'/unknown'}, function(res){
    t.equal(res.statusCode, 404, 'test that status code is 404');
    t.equal(res.payload, 'page not found', 'Unknown url returns correct string');
    t.end();
  })
})

// tape ('Getting Data', function(t){
//   let cb = (err, res) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       return res;
//     }
//   }
//
//   t.equal(dbq.getData(cb),
// })
//
// tape('Error Route', function(t){
//   shot.inject(router, {method: 'get', url:'/error'}, function(res){
//     t.equal(res.statusCode, 404, 'test that status code is 404');
//     t.equal(res.payload, 'page not found', 'page was not found');
//     t.end();
//   })
// })
