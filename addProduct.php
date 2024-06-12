<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");


include '../PHP/database.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {

        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $productName = $_POST['productName'];
        $description = $_POST['description'];
        $price = $_POST['price'];
        $stockQuantity = $_POST['stockQuantity'];


        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["productImage"]["name"]);

        $sql = "INSERT INTO Products (product_name, description, price, stock_quantity, image_url)
                VALUES (:productName, :description, :price, :stockQuantity, :imageUrl)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':productName', $productName);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':stockQuantity', $stockQuantity);
        $stmt->bindParam(':imageUrl', $target_file);


        $stmt->execute();


        if (move_uploaded_file($_FILES["productImage"]["tmp_name"], $target_file)) {
            echo json_encode(["status" => "success", "message" => "Product added successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to upload product image."]);
        }
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }

    $conn = null;
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
