CREATE DATABASE bank;

USE bank;

CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL
);

CREATE TABLE transfers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    amount DECIMAL(10, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES customers(id),
    FOREIGN KEY (receiver_id) REFERENCES customers(id)
);
