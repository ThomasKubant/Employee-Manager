INSERT INTO departments (department_name)
VALUES
    ('OGP'),
    ('Arts & Crafts'),
    ('Grocery'),
    ('Produce'),
    ('Bakery'),
    ('Deli'),
    ('Hardware'),
    ('Electronics');
INSERT INTO roles (title, salary, department_id)
VALUES
    ('Team Lead', 170000, 1),
    ('Coach', 125000, 2),
    ('Stocking', 100000, 3),
    ('Digital', 110000, 8),
    ('Cashier', 75000, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Thomas', 'Kubant', 1, NULL),
    ('Test', 'Name', 2, 1),
    ('Christina', 'Williams', 3, 2),
    ('Merriam', 'Louis', 4, 2),
    ('Trinity', 'Bonnette', 4, 2),
    ('Jim', 'Carrey', 5, NULL);


