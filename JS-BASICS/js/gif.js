/* controlling gif images with javascript.
   date created: Jan 21, 2019

*/



function turnOn(){
  document.getElementById("lightbulb").src=('/home/robert/Dropbox/PC_Files/Online_Transfer/Projects/RLabontes_JavaScript_Lessons/JS-BASICS/images/gif_images/pic_bulbon.gif');
}

function turnOff(){
  document.getElementById("lightbulb").src=('/home/robert/Dropbox/PC_Files/Online_Transfer/Projects/RLabontes_JavaScript_Lessons/JS-BASICS/images/gif_images/pic_bulboff.gif');
}

turnOn();
turnOff();

// find a way to make the snapple go down when the user clicks the mouse

document.getElementById("drink_button").addEventListener("click", drunkUp);


let mouseClicked = 0;
function drunkUp() {
  mouseClicked++;

  if (mouseClicked == 1){
    document.getElementById("snapple").src=('/home/robert/Dropbox/PC_Files/Online_Transfer/Projects/RLabontes_JavaScript_Lessons/JS-BASICS/images/gif_images/frame_1_delay-0.6s.gif');
    document.getElementById("drink_button").innerHTML = 'Drink more?';
    }if (mouseClicked == 2){
    document.getElementById("snapple").src=('/home/robert/Dropbox/PC_Files/Online_Transfer/Projects/RLabontes_JavaScript_Lessons/JS-BASICS/images/gif_images/frame_2_delay-0.6s.gif');
    document.getElementById("drink_button").innerHTML = 'Drink more?';
  }if (mouseClicked == 3){
    document.getElementById("snapple").src=('/home/robert/Dropbox/PC_Files/Online_Transfer/Projects/RLabontes_JavaScript_Lessons/JS-BASICS/images/gif_images/frame_3_delay-1.5s.gif');
    document.removeEventListener("drink_button", drunkUp); // remove event listener
    document.getElementById("refill_button").innerHTML = '<button onclick="Refill()">Refill?</button>';
  }
}

function Refill(){
  mouseClicked = 0; // reset mouse click
  document.getElementById("snapple").src=('/home/robert/Dropbox/PC_Files/Online_Transfer/Projects/RLabontes_JavaScript_Lessons/JS-BASICS/images/gif_images/frame_0_delay-0.75s.gif');
}
