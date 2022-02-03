function validateForm() {

  //varible declartion
  let enjoyable = document.forms["https://greenaces.site/pokemon_php.php"]["enjoyable"].value;
  let age = document.forms["https://greenaces.site/pokemon_php.php"]["age"].value;
  let errors = document.forms["https://greenaces.site/pokemon_php.php"]["errors"].value;
  let bugImpactGameplay = document.forms["https://greenaces.site/pokemon_php.php"]["bugImpactGameplay"].value;
  let recommenedGame = document.forms["https://greenaces.site/pokemon_php.php"]["recommenedGame"].value;
  let andriodOrBrowser = document.forms["https://greenaces.site/pokemon_php.php"]["AndriodORBrowser"].value;
  let rateGame = document.forms["https://greenaces.site/pokemon_php.php"]["rateGame"].value;



  //The user will be prompted to answer questions 1 to 7 if the radio buttons are not clicked.

  if (enjoyable == "") {
    alert("Answer Question #1");
    return false;
  }

  if (age == "") {
    alert("Answer Question #2");
    return false;
  }

  if (errors == "") {
    alert("Answer Question #3");
    return false;
  }

  if (bugImpactGameplay == "") {
    alert("Answer Question #4");
    return false;
  }

  if (recommenedGame == "") {
    alert("Answer Question #5");
    return false;
  }

  if (andriodOrBrowser == "") {
    alert("Answer Question #6");
    return false;
  }

  if (rateGame == "") {
    alert("Answer Question #7");
    return false;
  }

  //if user tries to submit an empty form, advice them that this is not allowed

  if (rateGame == "" && andriodOrBrowser == "" && recommenedGame == "" && bugImpactGameplay == "" && errors == "" && age == "" && enjoyable == "" ) {

    document.getElementById('submit').onclick = function() {
    this.disabled = true;
    alert("Answer questions 1 to 7 before submitting this form.");
  }

  }else if (rateGame !== null && andriodOrBrowser !== null && recommenedGame !== null && bugImpactGameplay !== null && errors !== null && age !== null && enjoyable !== null) {

    document.getElementById('submit').onclick = function() {
    this.disabled = false;

      }//end of function

  }//end of if statment



}//end of validateForm function
