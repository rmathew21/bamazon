const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');

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
    connection.query("Select item_id, product_name, price, stock_quantity FROM products",
        function (error, results) {
            if (error) throw error;
            console.table(results);
            productChoice();
        }
    );
}
// I'm not sure why RowDataPacket is appearing in terminal

function productChoice() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log(results);
        inquirer.prompt([
            {
                type: "input",
                message: "What is the item_id of the product you would like to purchase?",
                name: "itemId"
            },
            {
                type: "input",
                message: "How many would you like to buy?",
                name: "stockQuantity"
            }]).then(function (answer) {
                let a = parseInt(parseInt(answer.itemId) - 1);
                let b = parseInt(answer.stockQuantity) * results[a].price

                if (parseInt(answer.stockQuantity) <= results[a].stock_quantity) {
                    connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: (parseInt(results[a].stock_quantity) - answer.stockQuantity)
                        },
                        { item_id: answer.itemId }
                    ],
                    function (error) {
                        if (error) throw error;
                        console.log("Thanks for your order! Your total is " + "$" + b.toFixed(2));
                        console.log("\n\n");
                        connection.end();
                    });
                }
                else {
                    console.log("----------Quantity entered is larger than the available stock for this product. Please lower your amount and try again.----------");

                    productChoice();
                }
            });
    });
}
