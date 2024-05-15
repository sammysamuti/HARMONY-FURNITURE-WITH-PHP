<?php
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["type"]) && $_POST["type"] === "register") {
        validateRegister();
    } elseif (isset($_POST["type"]) && $_POST["type"] === "login") {
        validateLogin();
    }
}


function sendResponse($status, $message)
{
    $response = array("status" => $status, "message" => $message);
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}


// function validatePassword($password)
// {
//     $passwordPattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?])[A-Za-z\d-+_!@#$%^&*.,?]{6,12}$/";
//     if (!preg_match($passwordPattern, $password)) {
//         sendResponse("error", "Password should contain at least one lowercase letter, one uppercase letter, one digit, one operator, and be between 6 and 12 characters.");
//         exit();
//     }
// }




function validateLogin()
{
    $email = $_POST["login-email"];


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendResponse("error", "Invalid email format.");
        exit();
    }
}

function validateRegister()
{
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    // $confirmPassword = $_POST["confirm-password"];

    if (strlen($username) < 5) {
        sendResponse("error", "Username should be at least 5 characters long.");

        exit();
    }


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendResponse("error", "Invalid email format.");
        exit();
    }


    if (strlen($password) < 8) {
        sendResponse("error", "Password should be at least 8 characters long.");

        exit();
    }


    // if ($password !== $confirmPassword) {
    //     sendResponse("error", "Passwords do not match.");
    //     exit();
    // }


    sendResponse("success", "Registration successful!");
}
