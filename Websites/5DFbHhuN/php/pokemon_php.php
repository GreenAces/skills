<!DOCTYPE html>
<html>
<body>

<?php

  //varible declartions

  $servername = "localhost:3306";
  $username = "greenace_pokemonFormAdmin";
  $password = "rwKB;6fMm;G6";
  $dbname = "greenace_pokemonFormDatabase";
  $enjoyable = $_POST['enjoyable'];
  $age = $_POST['age'];
  $errors = $_POST['errors'];
  $bugImpactGameplay = $_POST['bugImpactGameplay'];
  $recommenedGame = $_POST['recommenedGame'];
  $AndriodORBrowser =  $_POST['AndriodORBrowser'];
  $rateGame = $_POST['rateGame'];
  $textarea = $_POST['textarea'];


  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


  //push data from array to mysql if conditions are valid

  $sql = "INSERT INTO feedback_form (enjoyable, age, errors, bugImpactGameplay, recommenedGame, AndriodORBrowser, rateGame, textarea)
  VALUES ('$enjoyable','$age', '$errors', '$bugImpactGameplay', '$recommenedGame', '$AndriodORBrowser', '$rateGame', '$textarea' )";


//check database connection and provide client feedback for submitting the form or show cause of error
  if ($conn->query($sql) === TRUE) {
    echo "Thank you for your feedback.";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();



?>





</body>
</html>
