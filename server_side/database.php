<?php
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "123456789@abc";
$dbname = "Harmony_furniture";
try {
    $conn = new PDO("mysql:host=$servername", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $sql = "CREATE DATABASE IF NOT EXISTS $dbname ";
    $conn->exec($sql);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

$conn = null;
