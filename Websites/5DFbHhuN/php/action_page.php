<!DOCTYPE html>
<html>
<body>

<?php

  $servername = "localhost:3306";
  $username = "AdminDemo";
  $pass = "ujDl9b$.Mxy";
  $dbname = "greenace_databaseDemo";
  $conn = mysqli_connect($servername,$username,$pass,$dbname);
  $valid = "Connection successful!";


  if(isset($_POST['fname'] && isset($_POST['lname'])) {

    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];

    $sql = "INSERT INTO 'table1' ('fname','lname') VALUES ('$firstName', '$lastName')";

    Welcome,$_POST["fname"];

  ]

  if ($conn == true && $_SERVER["REQUEST_METHOD"]  == "POST") {

    $_POST["valid"];

  }else if{

    die("invalid credentials entered" . mysqli_connect_error());

  }


?>

</body>
</html>
