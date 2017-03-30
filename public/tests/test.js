QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "render test", function (a){
  var tab = document.getElementById('shops-table');
  a.equal(tab.childElementCount, 1, 'Table should start with one row');
  renderModule.updateDOM(null, fakedbTable)
  a.equal(tab.childElementCount, 3, 'row should be added');
})
