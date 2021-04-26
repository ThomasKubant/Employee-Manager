const inquier = require('inquirer');
const connection = require('./db/connection.js');
const cTable = require('console.table');
const { query } = require('./db/connection.js');
let viewDepartments = () => {
    let query = `SELECT * FROM departments`;
    dbQuery(query);
    userActionPrompt();
}
let viewRoles = () => {
    let query = `
    SELECT roles.id, roles.title, roles.salary, departments.department_name
    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id;`;
    dbQuery(query);
    userActionPrompt();
}
let viewEmployees = () => {
    let query = `
    SELECT e.id, e.first_name, e.last_name, r.title, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
    FROM employees e
    LEFT JOIN roles r
    ON e.role_id = r.id
    INNER JOIN employees m
    ON m.id = e.manager_id;`
    dbQuery(query);
    userActionPrompt();
}
let addEmployee = () => {
    inquier.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: "What is the employee's first name?"
        },
        {
            name: 'lastName',
            type: 'input',
            message: "What is the employee's last name?"
        },
        {
            name: 'role',
            type: 'list',
            message: "What is the employee's role?",
            choices: [
                "District Manager",
                "General Manager",
                "Salesperson",
                "Customer Service Representative",
                "IT",
                "Public Relations",
                "Human Resources Manager",
                "Software Engineer",
                "Engineer",
                "Maintenence"
            ]
        },
        {
            name: 'manager',
            type: 'list',
            message: "Who is the employee's manager?",
            choices: [
                "Thomas Kubant",
                "Larry Lobster"
            ]
        }
    ]).then(({ firstName, lastName, role, manager }) => {
        if (role == "District Manager") role = 1;
        if (role == "General Manager") role = 2;
        if (role == "Salesperson") role = 3;
        if (role == "Customer Service Representative") role = 4;
        if (role == "IT") role = 5;
        if (role == "Public Relations") role = 6;
        if (role == "Human Resources Manager") role = 7;
        if (role == "Software Engineer") role = 8;
        if (role == "Engineer") role = 9;
        if (role == "Maintenence") role = 10;
        if (manager == "Thomas Kubant") manager = 1;
        if (manager == "Larry Lobster") manager = 2;
        let query = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES ('${firstName}', '${lastName}', ${role}, ${manager})`
        dbQueryNoTable(query);
        userActionPrompt();
    })
}
let addRole = () => {
    inquier.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the title of the role?'
        },
        {
            name: 'salary',
            type: 'number',
            message: "What is the role's salary?"
        },
        {
            name: 'department',
            type: 'list',
            message: 'What is the department the role belongs to?',
            choices: [
                "Management",
                "Sales",
                "Customer Service",
                "IT",
                "Relations",
                "Human Resources",
                "Engineering",
                "Housekeeping"
            ]
        }
    ]).then(({ name, salary, department }) => {
        if(department == "Management") department = 1;
        if(department == "Sales") department = 2;
        if(department == "Customer Service") department = 3;
        if(department == "IT") department = 4;
        if(department == "Relations") department = 5;
        if(department == "Human Resources") department = 6;
        if(department == "Engineering") department = 7;
        if(department == "Housekeeping") department = 8;
        
        let query = `INSERT INTO roles (title, salary, department_id)
        VALUES
        ('${name}', ${salary}, ${department});`
        dbQueryNoTable(query);
        userActionPrompt();
    })
}
let addDepartment = () => {
    inquier.prompt([
        {
            name: 'name',
            type: 'input',
            message:'What is the name of the department?'
        },
    ]).then(({ name }) => {
        let query = `INSERT INTO departments (department_name)
        VALUES
        ('${name}')`
        dbQueryNoTable(query);
    })
}
let updateEmployeeRole = () => {
    inquier.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's last name?"
        },
        {
            name: "role",
            type: 'list',
            message: "What is the employee's new role?",
            choices: [
                "District Manager",
                "General Manager",
                "Salesperson",
                "Customer Service Representative",
                "IT",
                "Public Relations",
                "Human Resources Manager",
                "Software Engineer",
                "Engineer",
                "Maintenence"
            ]
        },
    ]).then(({ name, role }) => {
        if (role == "District Manager") role = 1;
        if (role == "General Manager") role = 2;
        if (role == "Salesperson") role = 3;
        if (role == "Customer Service Representative") role = 4;
        if (role == "IT") role = 5;
        if (role == "Public Relations") role = 6;
        if (role == "Human Resources Manager") role = 7;
        if (role == "Software Engineer") role = 8;
        if (role == "Engineer") role = 9;
        if (role == "Maintenence") role = 10;
        let query = `UPDATE employees SET role_id = ${role} WHERE last_name = '${name}'`;
        dbQueryNoTable(query);
        userActionPrompt();
    })
}
let dbQuery = (query) => {
    connection.promise().query(query).then(([results]) => {
        console.log('\n')
        console.table(results);
        console.log('\n')
    });
};
let dbQueryNoTable = (query) => {
    connection.promise().query(query)
};
let userActionPrompt = () => {
    inquier.prompt([
        {
            name: 'userAction',
            type: 'list',
            message: 'What would you like to do?',
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add An Employee", "Add A Role", "Add A Department", "Update Employee Role"]
        }]).then(({ userAction  }) => {
        if(userAction == 'View All Departments') viewDepartments();
        if(userAction == 'View All Roles') {viewRoles()}
        if(userAction == 'View All Employees') {viewEmployees()}
        if(userAction == 'Add An Employee') {addEmployee()}
        if(userAction == 'Add A Role') {addRole()}
        if(userAction == 'Add A Department') {addDepartment()}
        if(userAction == 'Update Employee Role') {updateEmployeeRole()}
    });
}
let initialize = () => {
    console.log(`
    ========================================================================================   
    ========================================================================================

    :::::::::: ::::    ::::  :::::::::  :::        ::::::::  :::   ::: :::::::::: :::::::::: 
    :+:        +:+:+: :+:+:+ :+:    :+: :+:       :+:    :+: :+:   :+: :+:        :+:        
    +:+        +:+ +:+:+ +:+ +:+    +:+ +:+       +:+    +:+  +:+ +:+  +:+        +:+        
    +#++:++#   +#+  +:+  +#+ +#++:++#+  +#+       +#+    +:+   +#++:   +#++:++#   +#++:++#   
    +#+        +#+       +#+ +#+        +#+       +#+    +#+    +#+    +#+        +#+        
    #+#        #+#       #+# #+#        #+#       #+#    #+#    #+#    #+#        #+#        
    ########## ###       ### ###        ########## ########     ###    ########## ########## 
    ::::    ::::      :::     ::::    :::     :::      ::::::::  :::::::::: :::::::::        
    +:+:+: :+:+:+   :+: :+:   :+:+:   :+:   :+: :+:   :+:    :+: :+:        :+:    :+:       
    +:+ +:+:+ +:+  +:+   +:+  :+:+:+  +:+  +:+   +:+  +:+        +:+        +:+    +:+       
    +#+  +:+  +#+ +#++:++#++: +#+ +:+ +#+ +#++:++#++: :#:        +#++:++#   +#++:++#:        
    +#+       +#+ +#+     +#+ +#+  +#+#+# +#+     +#+ +#+   +#+# +#+        +#+    +#+       
    #+#       #+# #+#     #+# #+#   #+#+# #+#     #+# #+#    #+# #+#        #+#    #+#       
    ###       ### ###     ### ###    #### ###     ###  ########  ########## ###    ###  

    ========================================================================================   
    ========================================================================================
    `);
    userActionPrompt();
}
initialize();