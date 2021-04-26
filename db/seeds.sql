INSERT INTO departments (department_name)
VALUES
    ('Management'),
    ('Sales'),
    ('Customer Service'),
    ('IT'),
    ('Relations'),
    ('Human Resources'),
    ('Engineering'),
    ('Housekeeping');
INSERT INTO roles (title, salary, department_id)
VALUES
    ('District Manager', 170000, 1),
    ('General Manager', 125000, 1),
    ('Salesperson', 75000, 2),
    ('Customer Service', 75000, 3),
    ('IT', 100000, 4),
    ('Public Relations', 80000, 5),
    ('Human Resources Manager', 100000, 6),
    ('Software Engineer', 100000, 7),
    ('Engineer', 110000, 7),
    ('Maintenence', 50000, 8);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Thomas', 'Kubant', 1, NULL),
    ('Larry', 'Lobster', 2, 1),
    ('Christina', 'Williams', 3, 2),
    ('Merriam', 'Louis', 4, 2),
    ('Trinity', 'Bonnette', 5, 2),
    ('Jim', 'Carrey', 6, NULL),
    ('Barry', 'Gilmore', 7, 1),
    ("Jerry", "Seinfeld", 8, 2),
    ("Jake", "Ewald", 9, 2),
    ("Brendan", "Lukens", 10, 2);


