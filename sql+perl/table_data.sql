CREATE DATABASE ;

DROP TABLE IF EXISTS `new_table`;

CREATE TABLE `new_table` (
  `id` INTEGER PRIMARY KEY,
  `first_name` CHAR(20) NULL DEFAULT NULL,
  `last_name` CHAR(20) NULL DEFAULT NULL,
  `home` CHAR(20) NULL DEFAULT NULL
);

INSERT INTO new_table (first_name, last_name, home) VALUES ('Rose','Tyler','Earth');
INSERT INTO new_table (first_name, last_name, home) VALUES ('Zoe','Heriot','Space Station W3');
INSERT INTO new_table (first_name, last_name, home) VALUES ('Jo','Grant','Earth');
INSERT INTO new_table (first_name, home) VALUES ('Leela','Unspecified');
INSERT INTO new_table (first_name, home) VALUES ('Romana','Gallifrey');
INSERT INTO new_table (first_name, last_name, home) VALUES ('Clara','Oswald','Earth');
INSERT INTO new_table (first_name, home) VALUES ('Adric','Alzarius');
INSERT INTO new_table (first_name, last_name, home) VALUES ('Susan','Foreman','Gallifrey');
