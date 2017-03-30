# week6-facn-hosers
App to list food and coffee locations around Nazareth

## User Stories
As a tourist in Nazareth looking for somewhere to eat or drink
> I want to visit the site and see a list of places with locations, ratings, prices, and descriptions

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

## Database Files

- db_build.sql - DB script which creates a table with initial values.
- db_connection.js - connects us to the DB with the correct parameters.
- db_build.js - connects to the DB using db_connection and queries the DB with  our DB script.

### Shops Table Schema
```SQL
shop_id SERIAL PRIMARY KEY
shop_name varchar(200) NOT NULL
shop_rating INTEGER
cost varchar(20)
address varchar(500)
description varchar(500)
tags varchar(200)
```

## To do list

- [x] Build and host the database
- [ ] Build the actual site
 - [ ] Get site to display table upon page load
    - [ ] build client side code:
     - [x] HTML page with empty table
     - [ ] JS scripts: Request function to make requests to the server, render function to render the data from database to the server, script to call the function on page load.
    - [ ] build server side code:
     - [ ] Have an endpoint for requesting all the data, which queries the database and sends back the whole table (except for id)
     - [ ] Have an endpoint for requesting some data in the search box and sending back just the results
     - [ ] Have an endpoint which adds data to the table and refreshes the render.
- [ ] Get testing:
  - [ ] Write tests for endpoints that already existing
  - [ ] Write the new endpoints tdd
  - [x] Write the render function tdd
  - [ ] Write the request function tdd
