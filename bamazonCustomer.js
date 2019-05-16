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
    console.log("\n--------------------Welcome 2 BAMAZON--------------------\n");
    console.log("\n-------------Check out these great deals below-------------\n");
    showProducts();
    // connection.end();
});

function showProducts() {
    connection.query("Select item_id, product_name, department_name, price, stock_quantity FROM products",
        function (error, results) {
            if (error) throw error;
            console.table(results);
            productChoice();
        }
    );
}

function productChoice() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log(results);
    });
}