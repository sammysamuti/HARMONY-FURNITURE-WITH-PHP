<?php
include '../PHP/database.php';

try {
    // database connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL query to create Users table
    $sql = "CREATE TABLE Users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        is_verified BOOLEAN DEFAULT FALSE
    )";
    $conn->exec($sql);

    // SQL query to create Products table
    $sql = "CREATE TABLE Products (
        product_id INT AUTO_INCREMENT PRIMARY KEY,
        product_name VARCHAR(100) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        stock_quantity INT NOT NULL,
        image_url VARCHAR(255)
    )";
    $conn->exec($sql);

    // SQL query to create Orders table
    $sql = "CREATE TABLE Orders (
        order_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        total_amount DECIMAL(10, 2) NOT NULL,
        payment_status VARCHAR(20) NOT NULL,
        delivery_status VARCHAR(20) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )";
    $conn->exec($sql);

    // SQL query to create Favorites table
    $sql = "CREATE TABLE Favorites (
        favorite_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        product_id INT,
        FOREIGN KEY (user_id) REFERENCES Users(user_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )";
    $conn->exec($sql);
    $sql = "CREATE TABLE user_otp (
       otp_id INT AUTO_INCREMENT PRIMARY KEY,
       user_id INT,
      otp_code INT,
        FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )";
    $conn->exec($sql);

    echo "Tables created successfully";
} catch (PDOException $e) {
    echo "Error creating tables: " . $e->getMessage();
}

$conn = null;
