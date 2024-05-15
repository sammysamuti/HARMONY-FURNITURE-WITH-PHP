<?php
header("Access-Control-Allow-Origin: *");
include '../PHP/database.php';

try {
    // Establishing database connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $email = $_POST["login-email"];
    $password = $_POST["login-password"];

    // Fetching user data by email and verifying password
    $userDataSql = "SELECT * FROM Users WHERE email = :email";
    $userDataStmt = $conn->prepare($userDataSql);
    $userDataStmt->bindParam(':email', $email);
    $userDataStmt->execute();
    $userData = $userDataStmt->fetch(PDO::FETCH_ASSOC);

    if ($userData && (password_verify($password, $userData['password']) || $password === $userData['password'])) {
        // Sending success response
        $response = array(
            "email" => $email,
            "is_admin"  => $userData["is_admin"],
            "is_verified" =>
            $userData["is_verified"],
            "status" => "success",
            "message" => "login successful.",
        );
        echo json_encode($response);
    } else {
        // Invalid email or password
        $response = array(
            'status' => 'error',
            'message' => "Invalid credentials"
        );
        echo json_encode($response);
    }
} catch (Exception $e) {
    // Error response
    $response = array(
        'status' => 'error',
        'message' => "Error: " . $e->getMessage()
    );
    echo json_encode($response);
}

$conn = null;
