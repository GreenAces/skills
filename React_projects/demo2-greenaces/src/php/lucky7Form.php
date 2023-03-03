<?php

  //varible declartions

  $servername = "localhost:3306";
  $username = "greenace_rabbit";
  $password = "6B7LQ;0N&~un";
  $dbname = "greenace_DatabaseForms";
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

  $sql = "INSERT INTO greenace_DatabaseForms.lucky7_form (enjoyable, age, errors, bugImpactGameplay, recommenedGame, AndriodORBrowser, rateGame, textarea)
  VALUES ('$enjoyable','$age', '$errors', '$bugImpactGameplay', '$recommenedGame', '$AndriodORBrowser', '$rateGame', '$textarea' )";

//check database connection and provide client feedback for submitting the form or show cause of error
  if ($conn->query($sql) === TRUE) {
    echo "Connection successful.";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();


  //pokemon validationForm part 1 of 3

$errors = [];
$fields = ['enjoyable', 'age', 'errors', 'bugImpactGameplay', 'recommenedGame', 'AndriodORBrowser', 'rateGame'];
$optionalFields = ['textarea'];
$values = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    foreach ($fields as $field) {
        if (empty($_POST[$field]) && !in_array($field, $optionalFields)) {
            $errors[] = $field;
        } else {
            $values[$field] = $_POST[$field];
        }
    }

//part 2 of 3

    if (empty($errors)) {


    foreach ($fields as $field) {

        if ($field === "enjoyable") {
            printf("%s: %s<br />", $field, var_export($_POST[$field], TRUE));
        } else {
            printf("%s: %s<br />", $field, $_POST[$field]);
        }

        if ($field === "age") {
            printf("%s: %s<br />", $field, var_export($_POST[$field], TRUE));
        } else {
            printf("%s: %s<br />", $field, $_POST[$field]);
        }

        if ($field === "errors") {
            printf("%s: %s<br />", $field, var_export($_POST[$field], TRUE));
        } else {
            printf("%s: %s<br />", $field, $_POST[$field]);
        }

        if ($field === "bugImpactGameplay") {
            printf("%s: %s<br />", $field, var_export($_POST[$field], TRUE));
        } else {
            printf("%s: %s<br />", $field, $_POST[$field]);
        }

        if ($field === "recommenedGame") {
            printf("%s: %s<br />", $field, var_export($_POST[$field], TRUE));
        } else {
            printf("%s: %s<br />", $field, $_POST[$field]);
        }


        if ($field === "AndriodORBrowser") {
            printf("%s: %s<br />", $field, var_export($_POST[$field], TRUE));
        } else {
            printf("%s: %s<br />", $field, $_POST[$field]);
        }


        if ($field === "rateGame") {
            printf("%s: %s<br />", $field, var_export($_POST[$field], TRUE));
        } else {
            printf("%s: %s<br />", $field, $_POST[$field]);
        }



    }; // end of for reach loop
    exit;
}
}








?>


<!DOCTYPE html>
<html>
<body>


  <html lang="en">
      <head>
        <title>GreenAces Lucky7 Feedback</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="https://greenaces.site/5DFbHhuN/css/pokemon_form.css">

      </head>
  <body>
    <div id="header"><!--div tag 1 of 3 opened -->

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://greenaces.site"><img id="GreenAcesNavbarBrand" src = "https://greenaces.site/5DFbHhuN/images/greenaces_logo/GreenAces-logo.jpg" alt= "GreenAces-logo"></a></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownProjects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownProjects">
              <li><a class="dropdown-item" href="#"><b>Browser Games</b></a></li>
              <li><hr class="dropdown-divider3"></li>
              <li><a class="dropdown-item" href="https://greenaces.site/lucky7.html">Lucky 7</a></li>
              <li><a class="dropdown-item" href="https://greenaces.site/pokemon.html">Pokemon</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAndroid" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Andriod
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownProjects">
              <li><a class="dropdown-item" href="#"><b>Apps</b></a></li>
              <li><hr class="dropdown-divider3"></li>
              <li><a class="dropdown-item" href="#">App 1</a></li>
              <li><a class="dropdown-item" href="#">App 2</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownOther" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Other
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownOther">
              <li><a class="dropdown-item" href="https://greenaces.site/index3.html">Test 1</a></li>
              <li><hr class="dropdown-divider1"></li>
              <li><a class="dropdown-item" href="https://greenaces.site/practice.html">Test 2</a></li>
              <li><hr class="dropdown-divider2"></li>
              <li><a class="dropdown-item" href="https://greenaces.site/lucky7Form.php">Test 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  </div><!--div tag 1 of 3 closed -->

    <div class="container">
  <div class="row">
    <div class="col align-self-start">

      <!-- part 3 of 3 -->

      <h1>Lucky7 Feedback form</h1>


      <p>Please answer questions honestly. WARNING: This form is being tested. DO NOT SUBMIT THE FORM.</p>

    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

        <p>1)&nbsp;<b>Did you find the game fun or enjoyable?</b></p>
        <input type="radio" id="enjoyable_Yes" name="enjoyable"  <?php if (isset($values['enjoyable']) && $values['enjoyable'] == "enjoyable_Yes") echo "checked"; ?> value="enjoyable_Yes">
        <label for="enjoyable">Yes</label><br>
        <input type="radio" id="enjoyable_No" name="enjoyable"   <?php if (isset($values['enjoyable']) && $values['enjoyable'] == "enjoyable_No") echo "checked"; ?> value="enjoyable_No">
        <label for="enjoyable">No</label><br>
        <input type="radio" id="enjoyable_alright" name="enjoyable" <?php if (isset($values['enjoyable']) && $values['enjoyable'] == "enjoyable_alright") echo "checked"; ?> value="enjoyable_alright">
        <label for="enjoyable">It's alright</label>

        <div>
        <?php if (in_array('enjoyable', $errors)): ?>
        <span class="error">Missing</span>
        <?php endif; ?>
        </div>

        <br></br>

        <p>2)&nbsp;<b>Please select your age:</b></p>
        <input type="radio" id="age1" name="age" <?php if (isset($values['age']) && $values['age'] == "30") echo "checked"; ?> value="30">
        <label for="age1">0 - 30</label><br>
        <input type="radio" id="age2" name="age" <?php if (isset($values['age']) && $values['age'] == "60") echo "checked"; ?> value="60">
        <label for="age2">31 - 60</label><br>
        <input type="radio" id="age3" name="age" <?php if (isset($values['age']) && $values['age'] == "100") echo "checked"; ?> value="100">
        <label for="age3">61 - 100</label>

        <div>
        <?php if (in_array('age', $errors)): ?>
        <span class="error">Missing</span>
        <?php endif; ?>
        </div>


        <br></br>

        <p>3)&nbsp;<b>Did you experience any bugs or errors during gameplay?</b></p>
        <input type="radio" id="errors_Yes" name="errors" <?php if (isset($values['errors']) && $values['errors'] == "errors_Yes") echo "checked"; ?> value="errors_Yes">
        <label for="errors_Yes">Yes</label><br>
        <input type="radio" id="errors_No" name="errors"  <?php if (isset($values['errors']) && $values['errors'] == "errors_No") echo "checked"; ?> value="errors_No">
        <label for="errors_No">No</label>

        <div>
        <?php if (in_array('errors', $errors)): ?>
        <span class="error">Missing</span>
        <?php endif; ?>
       </div>

        <br></br>

        <p>4)&nbsp;<b>If you answered "Yes" to the previous question, did the errors or bugs impact your gameplay?</b></p>
        <input type="radio" id="bugImpactGameplay_Yes" name="bugImpactGameplay" <?php if (isset($values['bugImpactGameplay']) && $values['bugImpactGameplay'] == "bugImpactGameplay_Yes") echo "checked"; ?> value="bugImpactGameplay_Yes">
        <label for="bugImpactGameplay_Yes">Yes, the bugs effected my gameplay</label><br>
        <input type="radio" id="bugImpactGameplay_No" name="bugImpactGameplay"  <?php if (isset($values['bugImpactGameplay']) && $values['bugImpactGameplay'] == "bugImpactGameplays_No") echo "checked"; ?> value="bugImpactGameplays_No">
        <label for="bugImpactGameplay_No">No, I didn't find any bugs during gameplay that ruined my experience</label>

        <div>
        <?php if (in_array('bugImpactGameplay', $errors)): ?>
        <span class="error">Missing</span>
        <?php endif; ?>
       </div>

        <br></br>

        <p>5)&nbsp;<b>Would you recommened this game to a friend?</b></p>
        <input type="radio" id="recommenedGame_Yes" name="recommenedGame" <?php if (isset($values['recommenedGame']) && $values['recommenedGame'] == "recommenedGame_Yes") echo "checked"; ?> value="recommenedGame_Yes">
        <label for="recommenedGame_Yes">Yes</label><br>
        <input type="radio" id="recommenedGame_No" name="recommenedGame"  <?php if (isset($values['recommenedGame']) && $values['recommenedGame'] == "recommenedGame_No") echo "checked"; ?> value="recommenedGame_No">
        <label for="recommenedGame_No">Nope</label>

        <div>
        <?php if (in_array('recommenedGame', $errors)): ?>
        <span class="error">Missing</span>
        <?php endif; ?>
       </div>

        <br></br>

        <p>6)&nbsp;<b>Would you play this game if was available as an Andriod app or would you rather play with a browser?</b></p>
        <input type="radio" id="andriod_Yes" name="AndriodORBrowser"  <?php if (isset($values['AndriodORBrowser']) && $values['AndriodORBrowser'] == "andriod_Yes") echo "checked"; ?> value="andriod_Yes">
        <label for="recommenedGame_Yes">Yes. I would like to play this game on Andriod</label><br>
        <input type="radio" id="andriod_No" name="AndriodORBrowser"   <?php if (isset($values['AndriodORBrowser']) && $values['AndriodORBrowser'] == "andriod_No") echo "checked"; ?> value="andriod_No">
        <label for="recommenedGame_No">No. I would rather play using a browser</label>

        <div>
        <?php if (in_array('AndriodORBrowser', $errors)): ?>
        <span class="error">Missing</span>
        <?php endif; ?>
       </div>

        <br></br>

        <p>7)&nbsp;<b>From 1 to 5, with 1 being poor, 3 being average, and 5 being the best, how would you rate this game?</b></p>
        <input type="radio" id="rateGame_1" name="rateGame"  <?php if (isset($values['rateGame']) && $values['rateGame'] == "rateGame_1") echo "checked"; ?> value="rateGame_1">
        <label for="rateGame_1">1</label><br></br>
        <input type="radio" id="rateGame_2" name="rateGame"  <?php if (isset($values['rateGame']) && $values['rateGame'] == "rateGame_2") echo "checked"; ?> value="rateGame_2">
        <label for="rateGame_2">2</label><br></br>
        <input type="radio" id="recommenedGame_No" name="rateGame"  <?php if (isset($values['rateGame']) && $values['rateGame'] == "rateGame_3") echo "checked"; ?> value="rateGame_3">
        <label for="rateGame_3">3</label><br></br>
        <input type="radio" id="recommenedGame_No" name="rateGame"  <?php if (isset($values['rateGame']) && $values['rateGame'] == "rateGame_4") echo "checked"; ?> value="rateGame_4">
        <label for="rateGame_4">4</label><br></br>
        <input type="radio" id="recommenedGame_No" name="rateGame"  <?php if (isset($values['rateGame']) && $values['rateGame'] == "rateGame_5") echo "checked"; ?> value="rateGame_5">
        <label for="rateGame_5">5</label><br></br>

         <div>
         <?php if (in_array('rateGame', $errors)): ?>
         <span class="error">Missing</span>
         <?php endif; ?>
        </div>

        <br></br>

        <p>8)&nbsp;<b>Please enter any suggestions or complaints in the text area below:</b></p>
        <input type="text" id="textarea" name="textarea" rows="1" cols="1" value="<?php echo htmlspecialchars($values['textarea']);?>">
        <label for="text"></label>

        
        <?php
        include "redirect.php";
        ?>

       
        <br></br>
        <input type="submit" value="Submit">




      </form>





  </div>


      <br></br>

    </div>


    <div class="col align-self-center">

      <!--add content here -->

      <p id="displayText2"></p>

    </div>


    <div class="col align-self-end">

      <!--add content here -->
    <p id="displayText"></p>

    </div>



  </div>
  </div>


  <!-- Optional JavaScript; choose one of the two! -->

  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  <!-- Option 2: Separate Popper and Bootstrap JS -->
  <!--
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
  -->



</body>
</html>
