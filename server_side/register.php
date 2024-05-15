<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include '../PHP/database.php';

$apiKey =
    $_ENV['SENDGRID_API_KEY'];

// Function to generate OTP
function generateOTP()
{
    return rand(100000, 999999); // Generate a 6-digit OTP
}

// Generate OTP and store it in session
session_start();
$otp = generateOTP();
$_SESSION['otp'] = $otp;


try {
    // Establishing database connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Register form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO Users (username, password, email) VALUES (:username, :password, :email)";
    // Preparing and executing the query
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $hashedPassword); // Inserting hashed password
    $stmt->bindParam(':email', $email);
    $stmt->execute();


    // Set the email data
    $emailData = array(
        'personalizations' => array(
            array(
                'to' => array(
                    array(
                        'email' => $_POST['email']
                    )
                )
            )
        ),
        'from' => array(
            'email' => 'samiyashost@gmail.com'
        ),
        'subject' => 'Your OTP for registration',
        'content' => array(
            array(
                'type' => 'text/plain',
                'value' => 'Your OTP is: ' . $otp
            ),
            array(
                'type' => 'text/html',
                'value' => '<h1>Your OTP is: ' . $otp . '</h1>'
            )
        )
    );

    // Set the SendGrid API endpoint
    $endpoint = 'https://api.sendgrid.com/v3/mail/send';

    // Initialize cURL
    $ch = curl_init($endpoint);

    // Set cURL options
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ));
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailData));

    // Set the path to the cacert.pem file
    curl_setopt($ch, CURLOPT_CAINFO, 'C:\Users\samiy\Downloads\cacert.pem');



    // select user_id

    // Fetching user data by email and verifying password
    $userDataSql = "SELECT user_id FROM Users WHERE email = :email";
    $userDataStmt = $conn->prepare($userDataSql);
    $userDataStmt->bindParam(':email', $email);
    $userDataStmt->execute();
    $userData = $userDataStmt->fetch(PDO::FETCH_ASSOC);



    $sql = "INSERT INTO user_otp (user_id,otp_code) VALUES (:user_id, :otp_code)";

    // Preparing and executing the query
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':user_id', $userData["user_id"]);
    $stmt->bindParam(':otp_code', $otp);
    $stmt->execute();





    // Execute the cURL request
    $response = curl_exec($ch);

    // Check for errors
    if (curl_errno($ch)) {
        $response = array(
            "status" => "error",
            "message" => "Error: " . curl_error($ch)
        );
    } else {
        // Check HTTP status code
        $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($http_status != 202) {
            $response = array(
                "status" => "error",
                "message" => "Error: Failed to send email. HTTP Status Code: " . $http_status
            );
        } else {
            // Construct response with redirect URL
            // $redirectURL = "verify.php?otp=$otp";
            $response = array(
                "email" => $email,
                "status" => "success",
                "message" => "Otp sent successfully.",
            );
        }
    }


    // Send JSON response
    header('Content-Type: application/json');
    echo json_encode($response);

    // Close cURL session
    curl_close($ch);
} catch (Exception $e) {
    // Constructing error response
    $response = array(
        'status' => 'error',
        'message' => "Error inserting data: " . $e->getMessage()
    );

    // Send JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
}
