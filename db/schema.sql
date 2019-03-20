CREATE DATABASE burger_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(144) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
)