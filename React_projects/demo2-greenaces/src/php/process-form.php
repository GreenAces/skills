<?php

// Define database connection parameters
$host = "localhost:3306";
$user = "greenace_AdminDemo";
$password = "BRI7t^vWQO#1";
$database = "greenace_databaseDemo";

// Create a new mysqli object and check for errors
$mysqli = new mysqli($host, $user, $password, $database);
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data and escape it
    $name = $mysqli->real_escape_string($_POST['name']);
    $email = $mysqli->real_escape_string($_POST['email']);
    $message = $mysqli->real_escape_string($_POST['message']);

    // Prepare and execute the SQL query
    $stmt = $mysqli->prepare("INSERT INTO form_data (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);
    $stmt->execute();

    // Check for errors and return a JSON response
    if ($stmt->error) {
        $response = array('success' => false, 'error' => $stmt->error);
    } else if ($stmt->affected_rows > 0) {
        $response = array('success' => true);
    } else {
        $response = array('success' => false);
    }
    header('Content-Type: application/json');
    echo json_encode($response);

    // Close the prepared statement and database connection
    $stmt->close();
    $mysqli->close();

} else {
    printf("No data was submitted.\n");
}

?>
