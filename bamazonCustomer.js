const mysql = require('mysql');
const inquirer = require('inquirer');

// create connection to sql database
const connection = mysql.createConnection({
    host: 'localhost',

    //port
    port: 3306,

    user: 'root',

    password: 'Password',
    database: 'bamazon'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log(`MySQL connect on ${connection.threadId}`);

    connection.end();
});