<?php

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

// Define database connection parameters
$servername = "localhost:3306";
$username = "greenace_AdminDemo";
$password = "BRI7t^vWQO#1";
$dbname = "greenace_databaseDemo";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$stmt = $conn->prepare("INSERT INTO form_data (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    $response_array['status'] = 'success';
} else {
    $response_array['status'] = 'error';
    $response_array['error_message'] = mysqli_error($conn);
}

echo json_encode($response_array);

$stmt->close();
$conn->close();

?>

