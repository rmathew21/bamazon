USE bamazon;

CREATE TABLE products (
item_id int(30) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity int(100) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Monopoly Deal", "toys", 7.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Cards Against Humanity", "toys", 19.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Flamin' Hot Cheetos", "groceries", 1.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Electric Wine Opener", "kitchen", 19.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Amazon Basics iPhone Lightning Cable", "cell phone & accessories", 6.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Apple TV 4K", "electronics", 199.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Ninja Air Fryer", "home & kitchen", 79.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Brita Water Filter", "home & kitchen", 24.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Anker Powerbank Portable Charger", "cell phone & accessories", 49.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (item_id, "Wilson Evolution Game Basketball", "sports & fitness", 59.99, 100);