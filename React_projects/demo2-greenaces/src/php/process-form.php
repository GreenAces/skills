<?php
// Set up database connection
$db_host = 'localhost:3306'; // Replace with your database host
$db_name = 'greenace_databaseDemo'; // Replace with your database name 
$db_user = 'greenace_AdminDemo'; // Replace with your database user 
$db_pass = 'BRI7t^vWQO#1'; // Replace with your database password
$db_conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Check for database connection errors
if ($db_conn->connect_error) {
  die('Database connection failed: ' . $db_conn->connect_error);
}

// Define input validation function
function validate_input($input) {
  $input = trim($input);
  $input = stripslashes($input);
  $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
  return $input;
}

// Initialize variables
$name = $email = $message = '';

// Check for form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Validate and sanitize inputs
  $name = validate_input($_POST['name']);
  $email = validate_input($_POST['email']);
  $message = validate_input($_POST['message']);

  // Validate inputs
  if (empty($name)) {
    $name_error = 'Name is required.';
  } elseif (strlen($name) > 15) {
    $name_error = 'Name cannot exceed 15 characters.';
  }

  if (empty($email)) {
    $email_error = 'Email is required.';
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $email_error = 'Invalid email format.';
  } elseif (strlen($email) > 64) {
    $email_error = 'Email cannot exceed 64 characters.';
  }

  if (empty($message)) {
    $message_error = 'Message is required.';
  } elseif (strlen($message) > 200) {
    $message_error = 'Message cannot exceed 200 characters.';
  }

  // Insert data into database if inputs are valid
  if (empty($name_error) && empty($email_error) && empty($message_error)) {
    $sql = "INSERT INTO form_data (name, email, message) VALUES ('$name', '$email', '$message')";
    if ($db_conn->query($sql) === true) {
      $success_message = 'Form submitted successfully.';
      $name = $email = $message = '';
    } else {
      $error_message = 'Error: ' . $sql . '<br>' . $db_conn->error;
    }
  }
}

// Close database connection
$db_conn->close();
?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
  <label>
    <b>Name:</b><br>
    <input type="text" name="name" value="<?php echo htmlspecialchars($name); ?>">
    <?php if (!empty($name_error)) { echo '<span style="color: red;">' . htmlspecialchars($name_error) . '</span>'; } ?>
  </label><br><br>
  <label>
    <b>Email:</b><br>
    <input type="email" name="email" value="<?php echo htmlspecialchars($email); ?>">
    <?php if (!empty($email_error)) { echo '<span style="color: red;">' . htmlspecialchars($email_error) . '</span>'; } ?>
  </label><br><br>
  <label>
    <b>Message:</b><br>
    <textarea name="message"><?php echo htmlspecialchars($message); ?></textarea>
    <?php
