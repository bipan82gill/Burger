DROP DATABASE IF EXISTS mcx99fmgcbp81apj;
CREATE DATABASE mcx99fmgcbp81apj;

USE mcx99fmgcbp81apj;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);
INSERT INTO burgers(burger_name,devoured) VALUES("Cheese Burger", true);
INSERT INTO burgers(burger_name) VALUES("Chilli Burger");
INSERT INTO burgers(burger_name,devoured) VALUES("Veggie Burger", true);
INSERT INTO burgers(burger_name,devoured) VALUES("Chicken Burger", true);
 
 SELECT * FROM burgers;