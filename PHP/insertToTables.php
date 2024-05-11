<?php
header("Access-Control-Allow-Origin: *");
include '../PHP/database.php';

try {
    // Establishing database connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $tableName = $_POST['tableName'];


    if (!isset($tableName) || empty($tableName) || !in_array($tableName, array('Users', 'Products', 'Orders', 'Favorites'))) {
        throw new Exception("Invalid table name provided");
    }


    $sql = "";
    switch ($tableName) {
        case 'Users':
            // Register form data
            $username = $_POST["username"];
            $email = $_POST["email"];
            $password = $_POST["password"];

            // Hash the password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Checking if email already exists
            $emailExistsSql = "SELECT COUNT(*) FROM Users WHERE email = :email";
            $emailExistsStmt = $conn->prepare($emailExistsSql);
            $emailExistsStmt->bindParam(':email', $email);
            $emailExistsStmt->execute();
            $emailExists = $emailExistsStmt->fetchColumn();

            if ($emailExists) {
                // if email already exists, a response is sent
                $response = array(
                    'status' => 'error',
                    'message' => "Email already exists"
                );
                echo json_encode($response);
            } else {

                $sql = "INSERT INTO Users (username, password, email) VALUES (:username, :password, :email)";
                // Preparing and executing the query
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':username', $username);
                $stmt->bindParam(':password', $hashedPassword); // Inserting hashed password
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $response = array(
                    'status' => 'success',
                    'message' => "User registered successfully"
                );
                echo json_encode($response);
            }
            break;
        case 'Products':
            $sql = "INSERT INTO Products (product_name, description, price, stock_quantity, image_url) VALUES (:product_name, :description, :price, :stock_quantity, :image_url)";
            break;
        case 'Orders':
            $sql = "INSERT INTO Orders (user_id, total_amount, payment_status, delivery_status) VALUES (:user_id, :total_amount, :payment_status, :delivery_status)";
            break;
        case 'Favorites':
            $sql = "INSERT INTO Favorites (user_id, product_id) VALUES (:user_id, :product_id)";
            break;
        default:
            throw new Exception("Invalid table name provided");
            break;
    }
} catch (Exception $e) {
    // Constructing error response
    $response = array(
        'status' => 'error',
        'message' => "Error inserting data: " . $e->getMessage()
    );
    echo json_encode($response);
}

$conn = null;
