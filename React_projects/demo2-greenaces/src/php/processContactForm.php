require_once '../config/db_config.php';

<?php

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

//php recaptcha 

$secretKey = "6LfrRg0lAAAAAP1V2i_yRQ08W-XwLWDrrlF5nCgT";
$response = $data['g-recaptcha-response'];
$remoteIp = $_SERVER['REMOTE_ADDR'];

$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = array(
    'secret' => $secretKey,
    'response' => $response,
    'remoteip' => $remoteIp
);

$options = array(
    'http' => array(
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$isValid = json_decode($result)->success;

// Defined database connection parameters using the imported database file
$servername = DB_HOST;
$username = DB_USERNAME;
$password = DB_PASSWORD;
$dbname = DB_NAME;


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$stmt = $conn->prepare("INSERT INTO form_data (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

$response_array = array();

if ($isValid && $stmt->execute()) {
    $response_array['status'] = 'success';
} else {
    $response_array['status'] = 'error';
    $response_array['error_message'] = mysqli_error($conn);
}

echo json_encode($response_array);

$stmt->close();
$conn->close();

?>
