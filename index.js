const inquier = require('inquirer');
const mysql = require('mysql2');

let viewDepartments = () => {
    
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
    inquier.prompt([
        {
            name: 'userAction',
            type: 'list',
            message: 'What would you like to do?',
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add An Employee", "Add A Role", "Add A Department", "Update Employee Role"]
        }
    ]).then(answers => {
        if(answers.userAction == 'View All Departments') {viewDepartments()}
        if(answers.userAction == 'View All Roles') {viewRoles()}
        if(answers.userAction == 'View All Employees') {viewEmployees()}
        if(answers.userAction == 'Add An Employee') {addEmployee()}
        if(answers.userAction == 'Add A Role') {addRole()}
        if(answers.userAction == 'Add A Department') {addDepartment()}
        if(answers.userAction == 'Update Employee Role') {updateEmployeeRole()}
    })
}
initialize();