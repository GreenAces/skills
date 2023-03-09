<?php
  header('Content-Type: application/json');

  $data = json_decode(file_get_contents('php://input'), true);

  // variable declarations
  $servername = "localhost:3306";
  $username = "greenace_rabbit";
  $password = "6B7LQ;0N&~un";
  $dbname = "greenace_DatabaseForms";

  // create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // prepare and bind statement
  $stmt = $conn->prepare("INSERT INTO greenace_DatabaseForms.pokemon_form (enjoyable, age, errors, bugImpactGameplay, recommenedGame, AndriodORBrowser, rateGame, textarea) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
  $stmt->bind_param("ssssssss", $enjoyable, $age, $errors, $bugImpactGameplay, $recommenedGame, $AndriodORBrowser, $rateGame, $textarea);

  // sanitize input data to prevent SQL injection attacks
  $enjoyable = mysqli_real_escape_string($conn, $data['enjoyable']);
  $age = mysqli_real_escape_string($conn, $data['age']);
  $errors = mysqli_real_escape_string($conn, $data['errors']);
  $bugImpactGameplay = mysqli_real_escape_string($conn, $data['bugImpactGameplay']);
  $recommenedGame = mysqli_real_escape_string($conn, $data['recommenedGame']);
  $AndriodORBrowser = mysqli_real_escape_string($conn, $data['AndriodORBrowser']);
  $rateGame = mysqli_real_escape_string($conn, $data['rateGame']);
  $textarea = mysqli_real_escape_string($conn, $data['textarea']);

  // execute statement
  if ($stmt->execute() === TRUE) {
    echo "Connection successful.";
  } else {
    echo "Error: " . $stmt->error;
  }

  $stmt->close();
  $conn->close();

  // pokemonGame validationForm
  $errors = [];
  $fields = ['enjoyable', 'age', 'errors', 'bugImpactGameplay', 'recommenedGame', 'AndriodORBrowser', 'rateGame'];
  $optionalFields = ['textarea'];
  $values = [];

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($fields as $field) {
      if (empty($data[$field]) && !in_array($field, $optionalFields)) {
        $errors[] = $field;
      } else {
        $values[$field] = $data[$field];
      }
    }

    if (empty($errors)) {
      foreach ($fields as $field) {
        printf("%s: %s<br />", $field, $data[$field]);
      }
      exit;
    }
  }
?>
