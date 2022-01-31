<!DOCTYPE html>
<html>
<body>

<?php

  $servername = "localhost";
  $username = "AdminDemo";
  $pass = "ujDl9b$.Mxy";
  $dbname = "greenace_databaseDemo";
  $conn = mysqli_connect($servername,$username,$pass,$dbname);

  $firstName = $_POST['fname'];
  $lastName = $_POST['lname'];

  if ($conn) {

    Welcome <?php echo $_POST["fname"]; ?>

  }else{

    die("invalid credentials entered" . mysqli_connect_error());

  }


?>

</body>
</html>
