<?php
// PHP code
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
ob_start();

require __DIR__ . "/vendor/autoload.php";

use Stripe\Stripe;


$stripe_secret_key =

    $_ENV['STRIPE_API_KEY'];

\Stripe\Stripe::setApiKey($stripe_secret_key);

// Handle CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


$request_body = file_get_contents('php://input');

// Check if request body is empty
if (empty($request_body)) {
    http_response_code(400);
    echo json_encode(array("error" => "Empty request body"));
    exit;
}

$data = json_decode($request_body, true);

// Check if JSON decoding was successful
if ($data === null) {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid JSON data received"));
    exit;
}

// Check if 'lineItems' key exists in the data
if (!array_key_exists('lineItems', $data)) {
    http_response_code(400);
    echo json_encode(array("error" => "Missing 'lineItems' key in the JSON data"));
    exit;
}

// Extract cart items from the request body
$cart_items = $data['lineItems'];

// Check if cart_items is an array
if (!is_array($cart_items)) {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid data format for 'lineItems'"));
    exit;
}

// Create line items array dynamically based on cart items
$line_items = [];
foreach ($cart_items as $item) {
    // Check if required keys exist in each item
    if (!isset($item['price']) || !isset($item['name']) || !isset($item['quantity'])) {
        http_response_code(400);
        echo json_encode(array("error" => "Missing required keys in 'lineItems'"));
        exit;
    }

    $line_items[] = [
        'price_data' => [
            'currency' => 'usd',
            'unit_amount' => $item['price'] * 100,
            'product_data' => [
                'name' => $item['name']
            ]
        ],
        'quantity' => $item['quantity'],
    ];
}

// Check if line_items is empty
if (empty($line_items)) {
    http_response_code(400);
    echo json_encode(array("error" => "No line items provided"));
    exit;
}

// Create Checkout session dynamically
$checkout_session = \Stripe\Checkout\Session::create([
    "mode" => "payment",
    "success_url" => "http://localhost/PHP/success.php",
    "locale" => "auto",
    "line_items" => $line_items
]);

// Respond with the Checkout session URL
echo json_encode(array("url" => $checkout_session->url));
exit;
