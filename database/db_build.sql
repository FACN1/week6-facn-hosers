BEGIN;

DROP TABLE IF EXISTS shops cascade;

CREATE TABLE shops (
  shop_id SERIAL PRIMARY KEY,
  shop_name VARCHAR(200) NOT NULL,
  shop_rating INTEGER CHECK (shop_rating BETWEEN 0 AND 10),
  cost INTEGER CHECK (cost BETWEEN 1 AND 5),
  address VARCHAR(500),
  description VARCHAR(1000),
  tags VARCHAR(200)
);

INSERT INTO shops (shop_name,shop_rating,cost,address,description,tags)
VALUES
('Casanova Falafel',6,3,'Paulus the 6th St.','Has a cool Parrot','Falafel,Shwarma,Parrot,Chicken,Salads,Fast Food'),
('Abu Ashraf',9,1,'Old Town Market','Best Omlette in town, 10 sheks Food','Falafel,Shwarma,Omlette,Chips,Salads,Fast Food,great service'),
('Liwan',9,3,'Old Town,Simsim Hostel','Nice cozy atmosphere','Taybe Beer,Wifi,good music,coffee,soups,Fast Food,piano,study'),
('Taboun Bakery',10,4,'Paulus the 6th St.','Bakery on the roundabout with burning stove','pizza,bread,cheese bread,take away,Fast Food');

COMMIT;
