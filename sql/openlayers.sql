CREATE DATABASE `openlayers`;

CREATE TABLE `map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` text COLLATE utf8mb4_unicode_ci,
  `add_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
