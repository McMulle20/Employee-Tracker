INSERT INTO department (name) 
VALUES  ('Sales'),
        ('Engineering'),
        ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Manager', 75000, 1),
        ('Software Engineer', 90000, 2),
        ('Accountant', 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Alice', 'Johnson', 1, NULL),
        ('Bob', 'Smith', 2, NULL),
        ('Charlie', 'Brown', 3, 1);