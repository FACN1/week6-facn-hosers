# week6-facn-hosers
App to list food and coffee locations around Nazareth

## User Stories
As a tourist in Nazareth looking for somewhere to eat or drink
> I want to vist the site and see a list of places with locations, ratings, prices, and descriptions

> I want to search for a particular food or drink item and see a list of shops where I can get that item

> I want to be able to add a new shop to the list and see it updated

> I want to be able to add a review to an existing place

## Basic Interface

User directs to page, have a show all button, a search bar, and an "add" button (or where ever we choose).

When show all button is pressed, show whole table.

Upon searching, reload same page, with a reduced table with rows where the string searched for is somewhere in the description, but the same buttons.

"Add" button should reload the page with a new row added to the table with whatever the user has input.

"Show more" button should show the next five results (as in when the user first directs to the page)

## Psuedo Code

1. On '/' or home route, serve should serve the index.html.

2. Index.html should load the client js.

3. On show all button press, client side js should make GET request to server for whole table and render to dom.

4. On search form button press, client side js should make a GET request to server for data matching that search and render to the dom.

5. On add button, client side js should make a POST request to the server. The server should add this to the database and render whole table to the dom (maybe diff CSS highlighting added row)

# File Structure

- public
  - index.html
  - assets
    - main.css
    - main.js
    - Other js files
  - tests
    - test.html
    - clienttests.js
- src
  - server.js
  - handler.js
  - routes.js
  - request.js *module with which to make requests to database*
  - test
    - servertests.js
- database
  - db_build.js

  *in this file we connect to database and then run the build.sql file below*
  - db_build.sql

  *sql script which we build our table with on the remote database*
  - db_connection.js

  *to connect to the remote db*
