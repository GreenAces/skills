<!DOCTYPE html>
<html>
<body>

<?php

  //varible declartions

  $servername = "localhost:3306";
  $username = "greenace_AdminDemo";
  $password = "BRI7t^vWQO#1";
  $dbname = "greenace_databaseDemo";
  $firstName = $_POST['fname'];
  $lastName = $_POST['lname'];

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO table1 (fname, lname)
  VALUES ('$firstName', '$lastName')";

  if ($conn->query($sql) === TRUE) {
    echo "Your name was added successfully.";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();



?>





</body>
</html>
