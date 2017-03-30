const tape = require('tape');
const shot = require('shot');
const router = require('../router.js');
const path = require('path');
const fs = require('fs');

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
// tape('Assets Route', function(t){
//   //Get a file to compare to in our tests:
//   var filePath = path.join(__dirname, '../..', 'public/assets/main.css')
//   var cssFile = fs.readFileSync(filePath).toString();
//   //Use shot inject to test home route
//   shot.inject(router, {method: 'get', url:'/assets/main.css'}, function(res){
//     t.equal(res.statusCode, 200, 'test that status code is 200');
//     t.equal(res.payload, cssFile, 'main.css was found');
//     t.end();
//   })
// })
//
// tape('Error Route', function(t){
//   shot.inject(router, {method: 'get', url:'/error'}, function(res){
//     t.equal(res.statusCode, 404, 'test that status code is 404');
//     t.equal(res.payload, 'page not found', 'page was not found');
//     t.end();
//   })
// })
