CREATE SCHEMA IF NOT EXISTS `tin-example`;

CREATE TABLE IF NOT EXISTS `tin-example`.`Employee`
    ( `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
      `firstName` VARCHAR(50) NOT NULL ,
      `lastName` VARCHAR(50) NOT NULL ,
      `email` VARCHAR(50) NOT NULL ,
      PRIMARY KEY (`_id`),
      UNIQUE INDEX `emp_id_UNIQUE` (`_id` ASC)
    ) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

CREATE TABLE IF NOT EXISTS `tin-example`.`Department`
    ( `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
      `name` VARCHAR(50) NOT NULL ,
      `budget` DECIMAL(10,2) UNSIGNED NOT NULL ,
      PRIMARY KEY (`_id`),
      UNIQUE INDEX `dept_id_UNIQUE` (`_id` ASC)
    ) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

CREATE TABLE IF NOT EXISTS `tin-example`.`Employment`
    ( `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
      `salary` DECIMAL(10,2) UNSIGNED NOT NULL ,
      `dateFrom` DATE NOT NULL ,
      `dateTo` DATE NULL ,
      `emp_id` INT UNSIGNED NOT NULL ,
      `dept_id` INT UNSIGNED NOT NULL ,
      PRIMARY KEY (`_id`),
      UNIQUE INDEX `employment_id_UNIQUE` (`_id` ASC),
      CONSTRAINT `emp_fk` FOREIGN KEY (`emp_id`) REFERENCES `tin-example`.`Employee` (`_id`),
      CONSTRAINT `dept_fk` FOREIGN KEY (`dept_id`) REFERENCES `tin-example`.`Department` (`_id`)
    ) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

INSERT IGNORE INTO `tin-example`.`Employee` (`_id`, `firstName`, `lastName`, `email`) VALUES
  (1, 'Jan', 'Kowalski', 'jan.kowalski@acme.com'),
  (2, 'Adam', 'Zieliński', 'adam.zielinski@acme.com'),
  (3, 'Marian', 'Nowak', 'marian.nowak@acme.com')
  (4, 'Marianek', 'Nowak', 'marian.nowak@acme.com')
;

INSERT IGNORE INTO `tin-example`.`Department` (`_id`, `name`, `budget`) VALUES
  (1, 'HR', 500000),
  (2, 'Sales', 2000000)
;

INSERT IGNORE INTO `tin-example`.`Employment` (`_id`, `emp_id`, `dept_id`, `salary`, `dateFrom`, `dateTo`) VALUES
  (1, 1, 1, 5000, '2001-01-01', '2009-01-01'),
  (2, 2, 1, 4000, '2001-02-01', '2009-02-01'),
  (3, 1, 2, 3000, '2009-01-02', null)
;