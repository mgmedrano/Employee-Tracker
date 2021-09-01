USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineer");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant Manager", 160000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Medrano", 1, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Art", "Medrano", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Artemio", "Medrano", 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Teresa", "Medrano", 4, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Skyylee", "Medrano", 5, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Melodee", "Medrano", 7, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Archie", "Medrano", 6, 7);