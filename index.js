const inquier = require('inquirer');
const connection = require('./db/connection.js');
const cTable = require('console.table');
const db = require('./db/connection.js');
let viewDepartments = () => {
    let query = `SELECT department_name FROM departments`;
    dbQuery(query);
    userActionPrompt();
}
let viewRoles = () => {
    let query = `SELECT title FROM roles`;
    dbQuery(query);
    userActionPrompt();
}
let viewEmployees = () => {
    let query = `SELECT first_name, last_name FROM employees`
    dbQuery(query);
    userActionPrompt();
}
let addEmployee = () => {
    inquier.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: "What is the employee's first name?"
        }
    ])
}
let dbQuery = (query) => {
    connection.promise().query(query).then(([results]) => {
        console.table(results);
    });
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
    `);
    userActionPrompt();
}
initialize();