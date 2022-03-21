<?php
if(isset($_POST['submit'])){
// Fetching variables of the form which travels in URL
$enjoyable = $_POST['enjoyable'];
$age = $_POST['age'];
$errors = $_POST['errors'];
$bugImpactGameplay = $_POST['bugImpactGameplay'];
$recommenedGame = $_POST['recommenedGame'];
$AndriodORBrowser =  $_POST['AndriodORBrowser'];
$rateGame = $_POST['rateGame'];
if($enjoyable !=''&& $age !=''&& $errors !=''&& $bugImpactGameplay !='' && $recommenedGame !='' && $AndriodORBrowser !='' && $rateGame !='')
{
//  To redirect form on a particular page
header("Location: https://greenaces.site/");
}
else{
?>
<span><?php echo "Please answer all questions Before submitting the form. You may leave the last question blank.";?></span> <?php
}
}
?>
