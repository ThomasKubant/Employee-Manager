const mysql = require('mysql2');

const db = mysql.createConnection(
    {
         host: 'localhost',
         user: 'root',
        //  CHANGE PASSWORD HERE
         password: 'Password',
         database: 'main'
    },
    console.log('Connected to Employee Database!')
);

module.exports = db;