<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include '../PHP/database.php';



if (isset($_POST['otp']) && isset($_POST["email"])) {
    try {


        // Establishing database connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $email = $_POST["email"];
        $otp = $_POST['otp'];

        $userDataSql = "SELECT * FROM Users JOin user_otp ON Users.user_id = user_otp.user_id WHERE email = :email ORDER BY otp_id DESC LIMIT 1";
        $userDataStmt = $conn->prepare($userDataSql);
        $userDataStmt->bindParam(':email', $email);
        $userDataStmt->execute();
        $userData = $userDataStmt->fetch(PDO::FETCH_ASSOC);

        $otp_code = $userData['otp_code'];



        if ($otp == $otp_code) {

            // update user table
            $sql = "UPDATE Users SET is_verified = 1 WHERE user_id = :user_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':user_id', $userData['user_id']);
            $stmt->execute();

            $response = array(
                "status" => "success",
                "message" => "OTP Matched"
            );
        } else {
            $response = array(
                "status" => "error",
                "message" => "OTP Not Matched"
            );
        }
        // Send JSON response
        header('Content-Type: application/json');
        echo json_encode($response);
    } catch (Exception $e) {
        // Constructing error response
        $response = array(
            'status' => 'error',
            'message' => "Error " . $e->getMessage()
        );

        // Send JSON response
        header('Content-Type: application/json');
        echo json_encode($response);
    }
} else {
    // OTP not provided in URL
    $response = array(
        "status" => "error",
        "message" => "OTP not provided in URL.",
    );
    // Send JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
}
