-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the inventory_db database --
CREATE DATABASE employee_db;

-- use inventory_db database --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);

-- Creates the table "role" within employee_db --
CREATE TABLE role (
  -- Creates a numeric column called "id" --
  id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "title" which cannot contain null --
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(6,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(department_id),
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY(id),

  FOREIGN KEY(role_id),
  REFERENCES role(id)
  
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);