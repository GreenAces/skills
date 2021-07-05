/* This Javascript file is for testing purposes. Please read JavaScript manual for more information.

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

*/



/*
NOTE:
Lastest update: (7/5/2021)
Added comments to the following classes: pokemenClass, playerMoves Class, and computerMoves Class to ensure where tags ended to prevent confusion.

1) The attack and defense menu needs to change each time a pokemon is loaded. [100% completed]
2) Add computer pokemon each time player selects a pokemon. [10% completed]
2.1) Add new waiting mechanism for when computer selects a pokemon [42% completed]
2.2) Fix new waiting mechanism so that player1 can pick a pokemon when they click on it again but NOT when it's the computers turn. notify user if this happens. start with charmander and turn sound off first. ;)
3) Fix attack graphic id -- could be issue with css as image is too big and not in the right place. [100% completed]
4) Save health information to array when pokemon gets injured. also restore health info when player switches back to pokemon.
5) Add a rule to the referee class about not being able to attack or defend if a pokemon is NOT selected. (working on it but it has errors -- see line 201)
6) On line 791 (or computer moves - phase1 function) improve the condition for the else if function
7) Remove the stars *** for the following comment: "please wait for computer to attack or switch(***)" but only after fixing new mechanism
8) improve code on line 369 -- scythers attack move -- computer attacks too fast -- it should attack every 8 secs if conditions are true
9) fix boolean state and permission levels for pikachu and scyther (line 385)
10) charmander sound is turned off
11) add attack graphic for squirtle on line 66
12) Make all the pokemon functional -- currently only charmander and squirtle only work together.
13) Find a way to randomly select a computer pokemon and focus on making player1 attacks effective only if conditions are true... eg: water vs fire type --- see line 480
14) Make healthBar turn red when health is < 40
15) Find a way to save pokemon health and name when player1 changes pokemon


Date:
09/31/2019 -- load the correct pokemonImage with the following array: loadPokemonImage on line 429

Uncaught SyntaxError: Unexpected identifier on line 947

*/




class images {
  constructor () {
    this.chrAtkImage1 = function (){  // image 1 of 6

      document.getElementById("attack_graphic").innerHTML='<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/fireBlaster.gif" </img>';
      document.getElementById("attack_graphic").style.width = 180;
      document.getElementById("attack_graphic").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 4 secs
        document.getElementById("attack_graphic").innerHTML=("");

      }, 5000); // 5 sec wait time



    }
    this.scyAtkImage1 = function (){ // image 2 of 6

      document.getElementById("attack_graphic").innerHTML='<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/slash.gif" </img>';
      document.getElementById("attack_graphic").style.width = 180;
      document.getElementById("attack_graphic").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("attack_graphic").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.squPokeImage = function (){ // image 3 of 6

      document.getElementById("attack_graphic").innerHTML='<img src ="/home/robertlabonte/Practice/Programming/skills/JS-BASICS/images/pokemon/slash.gif" </img>';
      document.getElementById("attack_graphic").style.width = 180;
      document.getElementById("attack_graphic").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("attack_graphic").innerHTML=("");

      }, 6000); // 6 sec wait time

    }

  } // end of constructor

} // end of images class



player1Img = new images;
computerImg = new images;



class sound {
  constructor (){
     this.charmanderVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/CharmanderVoice.mp3');
     this.blastoiseVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/BlastoiseVoice.wav');
     this.charizardVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/CharizardVoice.wav');
     this.pikachuVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/PikachuVoice.mp3');
     this.pokemonBattleVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/gameboy_battleTheme.mp3');
     this.pokemonVictoryVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/victoryThemezz.mp3');
     this.scytherVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/ScytherVoice.wav');
     this.squirtleVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/SquirtleVoicezzz.mp3');
     this.wartortleVO = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/WartortleVoice.wav');
     this.soundConfirmer = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/pokemon/soundConfirmer.wav');

    this.soundSettingsOn = function() {

        // inform user of audio change with audio file

          player1SD.soundConfirmer.play();

        setTimeout(function() { // This is an anonymous callback function

          //play pokemon battle theme
          player1SD.pokemonBattleVO.play();

        }, 2000); // 2 sec wait time



      }

    this.soundSettingsOff = function (){
      // inform user of audio change without audio file
      document.getElementById("statusProgress3").innerHTML=("Sound is off.");

      setTimeout(function() { // This is an anonymous callback function

      // clears the previous text displayed above
      document.getElementById("statusProgress3").innerHTML=("");

      }, 2000); // 2 sec wait time

      // turn off battle theme
      player1SD.pokemonBattleVO.pause();

      // turn off victory theme
      player1SD.pokemonVictoryVO.pause();


      // turn off pokemon voices
      player1SD.charmanderVO.pause();
      player1SD.blastoiseVO.pause();
      player1SD.charizardVO.pause();
      player1SD.pikachuVO.pause();
      player1SD.scytherVO.pause();
      player1SD.squirtleVO.pause();
      player1SD.wartortleVO.pause();






    }

    }


  } // end of soundclass



player1SD = new sound;
computerSD = new sound;





class referee {
  constructor (){
    this.pokemonName = ["Charmander","Scyther","Blastoise","Charizard","Squirtle","Warturtle","Pikachu"];
    this.fullHealth = [100];
    this.healthBar = [0]; // NOTE: this is intentionally left empty but pokemon health will not exceed 100 HP when data is pushed to it.
    this.lowHealth = [40];
    this.zeroHealth = [0];
    this.rechargeHealth = [60];
    this.isRecharging = false;
    this.halfSum = function(total, num){

      return total + num;

      }

    this.getHealth = function() {


        return this.fullHealth.reduce(this.halfSum) + this.healthBar.reduce(this.halfSum);

}

    this.informStatus = function() {

      if(p1.getHealth() <= p1.lowHealth){


        document.getElementById("statusProgress").innerHTML=("Player1 pokemon health is low.");


      }else if (comp.getHealth() <= comp.lowHealth){

      //  comp.healthBar.reduce(this.getHealth);
        document.getElementById("statusProgress").innerHTML=("Computer pokemon health is low.");




      }

    }


    this.informWinner = function() { // informs winner and resets pokemon game

      if(p1.getHealth() == p1.zeroHealth){

          document.getElementById("statusProgress").innerHTML=("Player1 lost the match... Game will restart in 10 secs...");

          setTimeout (function(){

            //reload page

            window.location.reload();



          },10000); // reloads page after 10 secs


      }else if(comp.getHealth() == comp.zeroHealth){

          document.getElementById("statusProgress").innerHTML=("Player1 won the match... Game will restart in 10 secs...");

          setTimeout (function(){

            //reload page

            window.location.reload();



          },10000); // reloads page after 10 secs

      }


    }


    }




  }





p1 = new referee;

comp = new referee;



class wait {
  constructor() {
    this.makeMove = [{player1Move: false, computerMove: false}];
    this.noSelectionMeansDisable = function () {


      // disable attack and defense menu when computerMove and player1Move is false

      if(player1CH.pokemonType[0].isSelected === false &&
         player1CH.pokemonType[1].isSelected === false &&
         player1CH.pokemonType[2].isSelected === false &&
         player1CH.pokemonType[3].isSelected === false){

           setTimeout (function(){

             //reload page

             window.location.reload();



           },2000); // reloads page after 2 secs


        //remove add event listener for attack & defense buttons only
        //player1 only has permissions to select a pokemon

        document.getElementById("attackA").removeEventListener("click", attackA);
        document.getElementById("attackB").removeEventListener("click", attackB);
        document.getElementById("attackC").removeEventListener("click", attackC);
        document.getElementById("defenseA").removeEventListener("click", defenseA);
        document.getElementById("defenseB").removeEventListener("click", defenseB);
        document.getElementById("defenseC").removeEventListener("click", defenseC);


        document.getElementById("statusProgress3").innerHTML=("Please select a pokemon to begin the match.");



      } // end of if statement

    } // end of noSelectionMeansDisable function


    this.enableMoves = function () {

        //change permissions so that player1 can make a move
        confirm.makeMove[0].player1Move = true;
        confirm.makeMove[0].computerMove = false;

      setTimeout(function(){

        if (confirm.makeMove[0].player1Move === true && confirm.makeMove[0].computerMove === false){

          document.getElementById("statusProgress3").innerHTML=("You can now attack or switch pokemon.");

          //add event listener for switch button
          document.getElementById("Charmander_sel").addEventListener("click", player1CH.chrPokeImage);
          document.getElementById("Blastoise_sel").addEventListener("click", player1CH.blaPokeImage);
          document.getElementById("Pikachu_sel").addEventListener("click", player1CH.pikPokeImage);
          document.getElementById("Warturtle_sel").addEventListener("click", player1CH.warPokeImage);

          // Attack menu for Event listeners

          document.getElementById("attackA").addEventListener("click", attackA);
          document.getElementById("attackB").addEventListener("click", attackB);
          document.getElementById("attackC").addEventListener("click", attackC);

          // Defense menu for Event listeners

          document.getElementById("defenseA").addEventListener("click", defenseA);
          document.getElementById("defenseB").addEventListener("click", defenseB);
          document.getElementById("defenseC").addEventListener("click", defenseC);


          // Change boolean state so computer can make a move
            confirm.makeMove[0].player1Move = false;

        }


      }, 5) // 5 ms wait time to enable permissions for player1 to make move


    }; // end of enableMoves function

    this.disableMoves = function () {

      //change permissions so that computer can make a move
      confirm.makeMove[0].player1Move = false;
      confirm.makeMove[0].computerMove = true;

      setTimeout(function(){

          if (confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true){

          document.getElementById("statusProgress3").innerHTML = "It's the computers turn to attack or switch pokemon.";

          //remove add event listener for switch button
          document.getElementById("Charmander_sel").removeEventListener("click", player1CH.chrPokeImage);
          document.getElementById("Blastoise_sel").removeEventListener("click", player1CH.blaPokeImage);
          document.getElementById("Pikachu_sel").removeEventListener("click", player1CH.pikPokeImage);
          document.getElementById("Warturtle_sel").removeEventListener("click", player1CH.warPokeImage);

          //remove add event listener for attack & defense buttons

          document.getElementById("attackA").removeEventListener("click", attackA);
          document.getElementById("attackB").removeEventListener("click", attackB);
          document.getElementById("attackC").removeEventListener("click", attackC);
          document.getElementById("defenseA").removeEventListener("click", defenseA);
          document.getElementById("defenseB").removeEventListener("click", defenseB);
          document.getElementById("defenseC").removeEventListener("click", defenseC);

          // Change boolean state so player1 can make a move
            confirm.makeMove[0].computerMove = false;

        } // end of else if statement



      },1) // 1 milli secs wait time to disable permissions and allow computer to make a move

    } // end of disableMoves function


  } // end of constructor
} // end of wait class



confirm = new wait;




class changePokemon {

  constructor () {
    this.player1PokemonChoices = ["Charmander","Blastoise","Warturtle", "Pikachu"];
    this.ComputerPokemonChoices = ["Scyther", "Charizard","Squirtle"];
    this.pokemonType = [{Type: "fire", pokemonName: this.player1PokemonChoices[0], isSelected: false },
                       {Type: "water", pokemonName:  this.player1PokemonChoices[1], isSelected: false},
                       {Type: "water", pokemonName: this.player1PokemonChoices[2], isSelected: false},
                       {Type: "electric", pokemonName: this.player1PokemonChoices[3], isSelected: false},
                       {Type: "grass", pokemonName: this.ComputerPokemonChoices[0], isSelected: false},
                       {Type: "fire", pokemonName: this.ComputerPokemonChoices[1], isSelected: false},
                       {Type: "water", pokemonName: this.ComputerPokemonChoices[2], isSelected: false}
                        ];
    this.savedPokemonName = []; // NOTE: empty array of randomly selected pokemon generated from randomPokemonSelector()
    this.loadPokemonImage = []; // NOTE: this array of pokemon images are empty until computerPokemonLoader() is called upon.

    this.computerPokemonLoader = function () {

    this.loadPokemonImage.push(

      this.squPokeImage2(),   // index 2
      this.scyPokeImage2(),  // index 1
      this.chaPokeImage(),  // index 0

    );

  }; // end of computerPokemonLoader function

    this.repeat === true;

    this.randomPokemonSelector = function () {

      //Saves randomly generated pokemon name to the empty array labaled as "savedPokemonName" so that I can retrieve it later

        this.savedPokemonName.push(this.ComputerPokemonChoices[Math.floor(Math.random()*this.ComputerPokemonChoices.length)]);
        this.restoredPokemonName();


        if (computerCH.repeat === true) {

          //calling function to save data to another empty array labeled as loadPokemonImage: NOTE: this should only be executed once
          this.computerPokemonLoader();

          computerCH.repeat === false;

        }else if (computerCH.repeat === false) {

          console.log("repeat is off");

        }



    }



    this.restoredPokemonName = function(){

      //clear previous pokemon name
      document.getElementById("cpuPokemonName").innerHTML = ("");

      //load pokemon name from empty array above
      document.getElementById("cpuPokemonName").innerHTML = this.savedPokemonName;

      //load pokemon image from empty array above
      this.loadPokemonImage[2];

      //debugging here:
      console.log(this.loadPokemonImage);

    }


    this.charmanderStats = [-20, -10, -45]; // attack/defense moves
    this.charmanderRest = [+45]; // restores health by +45 hp
    this.blastoiseStats = [-20, -10, -45];
    this.blastoiseRest = [+45];
    this.wartortleStats = [-30, -10, -35, -20, -25];
    this.wartortleRest = [+45];
    this.pikachuStats = [-20, -10, -45];
    this.pikachuRest = [+45];


    this.chrPokeImage =  function () {

      confirm.makeMove[0].player1Move = true;


      if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {

      // set boolean stats to true when user selects a pokemon
      player1CH.pokemonType[0].isSelected = true;
      // set boolean stats to false for non-selected pokemon
      player1CH.pokemonType[1].isSelected = false;
      player1CH.pokemonType[2].isSelected = false;
      player1CH.pokemonType[3].isSelected = false;

      // inform player1 of pokemon change
      document.getElementById("statusProgress3").innerHTML =("You seleted " + player1CH.player1PokemonChoices[0]+ ". " + " Computer will now select a pokemon.");


      //load pokemon attack/defense menu
      document.getElementById("attackA").innerHTML = ("Fire Blaster (-20HP)");
      document.getElementById("attackB").innerHTML = ("Blaze (-10HP)");
      document.getElementById("attackC").innerHTML = ("Solar Power (-45)");

      document.getElementById("defenseA").innerHTML = ("Growl (-10HP)");
      document.getElementById("defenseB").innerHTML = ("Smokescreen (-20HP)");
      document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");


      //load pokemon name
      document.getElementById("p1PokemonName").innerHTML = player1CH.player1PokemonChoices[0];

      //load pokemon sound
      player1SD.charmanderVO.play();

      // load player1 pokemon
      document.getElementById("Player1PokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/charmander.gif" </img>';
      document.getElementById("Player1PokeImage").style.width = 200;
      document.getElementById("Player1PokeImage").style.height = 180;


        //Change boolean state so computer can make a move
         confirm.makeMove[0].player1Move = false;



         setTimeout(function (){

           // if player1 selects fire-type pokemon, computer will use a water-type pokemon

           let isPokemonFire = player1CH.pokemonType.filter(function(perfectMatch){

           if(perfectMatch.Type === "fire" && perfectMatch.isSelected === true){ // NOTE: use this as a else if statement instead...


           //load  water-type for computer pokemon
          document.getElementById("CpuPokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/squirtle.gif" </img>';
          document.getElementById("CpuPokeImage").style.width = 320;
          document.getElementById("CpuPokeImage").style.height = 380;

          //load pokemon sound
          computerSD.squirtleVO.play();

          //change boolean state
          confirm.makeMove[0].computerMove = false;
          confirm.makeMove[0].player1Move = true;


           }

         });


         },6000); // 6 sec wait time to load computer pokemon




    } // end of 1st if statement

    } // end of chrPokeImage function

    this.scyPokeImage = function () {

      confirm.makeMove[0].computerMove = true;


      if(confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true) {



      // set boolean stats to true when computer selects a pokemon
      computerCH.pokemonType[4].isSelected = true;
      // set boolean stats to false for non-selected pokemon
      computerCH.pokemonType[5].isSelected = false;
      computerCH.pokemonType[6].isSelected = false;

      setTimeout(function(){

        // if player1 selects electric-type pokemon, computer will use a grass-type pokemon

        let isPokemonElectric = player1CH.pokemonType.filter(function(perfectMatch){

        if(perfectMatch.Type === "electric" && perfectMatch.isSelected === true){


            // remove previous Pokemon image

            let elem =  document.createElement("img");
            elem.src ="";
            document.getElementById("CpuPokeImage").appendChild(elem);
            document.getElementById("CpuPokeImage").style.width = 100;
            document.getElementById("CpuPokeImage").style.height = 100;

            // replace with new pokemon

            document.getElementById("CpuPokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/Scyther.gif" </img>';
            document.getElementById("CpuPokeImage").style.width = 320;
            document.getElementById("CpuPokeImage").style.height = 380;




       //load pokemon sound
       computerSD.scytherVO.play();

       //change boolean state
       confirm.makeMove[0].computerMove = false;
       confirm.makeMove[0].player1Move = true;



        }

      });


    },3000); // 3 sec wait time for computer to select pokemon


  } // end of 1st if statement

}// end of scyPokeImage function

    this.blaPokeImage = function () {


          confirm.makeMove[0].player1Move = true;

       if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {

         // set boolean stats to true when user selects a pokemon
         player1CH.pokemonType[1].isSelected = true;

         // set boolean stats to false for non-selected pokemon
         player1CH.pokemonType[0].isSelected = false;
         player1CH.pokemonType[2].isSelected = false;
         player1CH.pokemonType[3].isSelected = false;

         // inform player1 of pokemon change
         document.getElementById("statusProgress3").innerHTML =("You seleted " + player1CH.player1PokemonChoices[1]+ ". " + " Computer will now select a pokemon.") ;

         //load pokemon attack/defense menu
         document.getElementById("attackA").innerHTML = ("Aqua Jet (-20HP)");
         document.getElementById("attackB").innerHTML = ("Bubble (-10HP)");
         document.getElementById("attackC").innerHTML = ("Hydro Pump (-45)");

         document.getElementById("defenseA").innerHTML = ("Protect (-10HP)");
         document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
         document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

         //load pokemon name
         document.getElementById("p1PokemonName").innerHTML = player1CH.player1PokemonChoices[1];

         //load pokemon sound
         player1SD.blastoiseVO.play();

        // load player1 pokemon

       document.getElementById("Player1PokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/blastoise.gif" </img>';
       document.getElementById("Player1PokeImage").style.width = 100;
       document.getElementById("Player1PokeImage").style.height = 100;







      }else if (confirm.makeMove[0].computerMove === true) {


          document.getElementById("statusProgress3").innerHTML = "It's the computers turn to attack or switch pokemon(***)."; // remove stars if no conflict is present with other counter

          //remove add event listener for switch button
          document.getElementById("Charmander_sel").removeEventListener("click", player1CH.chrPokeImage);
          document.getElementById("Blastoise_sel").removeEventListener("click", player1CH.blaPokeImage);
          document.getElementById("Pikachu_sel").removeEventListener("click", player1CH.pikPokeImage);
          document.getElementById("Warturtle_sel").removeEventListener("click", player1CH.warPokeImage);

          // re-enable event listener after 8 secs
          setTimeout(function() { // This is an anonymous callback function



            document.getElementById("statusProgress3").innerHTML = "You can now attack or switch pokemon.";

            //add event listener for switch button
            document.getElementById("Charmander_sel").addEventListener("click", player1CH.chrPokeImage);
            document.getElementById("Blastoise_sel").addEventListener("click", player1CH.blaPokeImage);
            document.getElementById("Pikachu_sel").addEventListener("click", player1CH.pikPokeImage);
            document.getElementById("Warturtle_sel").addEventListener("click", player1CH.warPokeImage);


          }, 8000); // 8 sec wait time


          }


          // change boolean state so computer can make a move
            confirm.makeMove[0].player1Move = false;


    }
    this.squPokeImage2 = function () {

      if(this.savedPokemonName[0] == "Charizard" || this.savedPokemonName[0] == "Scyther"){

        console.log(this.savedPokemonName);

        // remove previous Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("CpuPokeImage").appendChild(elem);
        document.getElementById("CpuPokeImage").style.width = 100;
        document.getElementById("CpuPokeImage").style.height = 100;

        // replace with new pokemon

        document.getElementById("CpuPokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/squirtle.gif" </img>';
        document.getElementById("CpuPokeImage").style.width = 320;
        document.getElementById("CpuPokeImage").style.height = 380;

      }

    }


    this.scyPokeImage2 = function () {


      if(this.savedPokemonName[0] == "Charizard" || this.savedPokemonName[0] == "Squirtle"){

        console.log(this.savedPokemonName);

        // remove previous Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("CpuPokeImage").appendChild(elem);
        document.getElementById("CpuPokeImage").style.width = 100;
        document.getElementById("CpuPokeImage").style.height = 100;

        // replace with new pokemon

        document.getElementById("CpuPokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/Scyther.gif" </img>';
        document.getElementById("CpuPokeImage").style.width = 320;
        document.getElementById("CpuPokeImage").style.height = 380;

      }



    }

    this.chaPokeImage = function () {

      // remove previous pokemonName and image if one is already selected and restore new pokemonName

      if(this.savedPokemonName[0] == "Squirtle" || this.savedPokemonName[0] == "Scyther"){

        console.log(this.savedPokemonName);

        // remove previous Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("CpuPokeImage").appendChild(elem);
        document.getElementById("CpuPokeImage").style.width = 100;
        document.getElementById("CpuPokeImage").style.height = 100;

        // replace with new pokemon

        document.getElementById("CpuPokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/charizard.gif" </img>';
        document.getElementById("CpuPokeImage").style.width = 320;
        document.getElementById("CpuPokeImage").style.height = 380;

      }




    }

    this.pikPokeImage = function () {

      confirm.makeMove[0].player1Move = true;


      if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {


        // set boolean stats to true when user selects a pokemon
        player1CH.pokemonType[3].isSelected = true;

        // set boolean stats to false for non-selected pokemon
        player1CH.pokemonType[0].isSelected = false;
        player1CH.pokemonType[2].isSelected = false;
        player1CH.pokemonType[1].isSelected = false;

        // inform player1 of pokemon change
        document.getElementById("statusProgress3").innerHTML =("You seleted " + player1CH.player1PokemonChoices[3]+ ". " + " Computer will now select a pokemon.") ;

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-20HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-10HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-45)");

        document.getElementById("defenseA").innerHTML = ("Growl (-10HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

        //load pokemon name
        document.getElementById("p1PokemonName").innerHTML = player1CH.player1PokemonChoices[3];

        //load pokemon sound
        player1SD.pikachuVO.play();

       // load player1 pokemon

      document.getElementById("Player1PokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/Pikachu.gif" </img>';
      document.getElementById("Player1PokeImage").style.width = 200;
      document.getElementById("Player1PokeImage").style.height = 180;

     setTimeout(function(){

       //call the scyther function (computerMove) in 6 secs
       computerCH.scyPokeImage();

     },6000)


     //change boolean state
     confirm.makeMove[0].player1Move = false;
     confirm.makeMove[0].computerMove = true;



   } // end of 1st if statement

 } // end of pikPokeImage function

    this.squPokeImage = function () {

      // load computer pokemon
      document.getElementById("attack_graphic").innerHTML='<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/squirtle.gif" </img>';
      document.getElementById("attack_graphic").style.width = 200;
      document.getElementById("attack_graphic").style.height = 180;

    }

    this.warPokeImage = function () {


      confirm.makeMove[0].player1Move = true;

      if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {

        // set boolean stats to true when user selects a pokemon
        player1CH.pokemonType[2].isSelected = true;

        // set boolean stats to false for non-selected pokemon
        player1CH.pokemonType[0].isSelected = false;
        player1CH.pokemonType[3].isSelected = false;
        player1CH.pokemonType[1].isSelected = false;

        // inform player1 of pokemon change
        document.getElementById("statusProgress3").innerHTML =("You seleted " + player1CH.player1PokemonChoices[2]+ ". " + " Computer will now select a pokemon.") ;


        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Bubble Beam (-30HP)");
        document.getElementById("attackB").innerHTML = ("Tail Whip (-10HP)");
        document.getElementById("attackC").innerHTML = ("Flash Cannon (-35)");

        document.getElementById("defenseA").innerHTML = ("Withdraw (-20HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-25HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

        //load pokemon name
        document.getElementById("p1PokemonName").innerHTML = player1CH.player1PokemonChoices[2];

        //load pokemon sound
        player1SD.wartortleVO.play();

       // load player1 pokemon

      document.getElementById("Player1PokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/warturtle.gif" </img>';
      document.getElementById("Player1PokeImage").style.width = 200;
      document.getElementById("Player1PokeImage").style.height = 180;



     }else if (confirm.makeMove[0].computerMove === true) {


         document.getElementById("statusProgress3").innerHTML = "It's the computers turn to attack or switch pokemon(***)."; // remove stars if no conflict is present with other counter

         //remove add event listener for switch button
         document.getElementById("Charmander_sel").removeEventListener("click", player1CH.chrPokeImage);
         document.getElementById("Blastoise_sel").removeEventListener("click", player1CH.blaPokeImage);
         document.getElementById("Pikachu_sel").removeEventListener("click", player1CH.pikPokeImage);
         document.getElementById("Warturtle_sel").removeEventListener("click", player1CH.warPokeImage);

         // re-enable event listener after 8 secs
         setTimeout(function() { // This is an anonymous callback function



           document.getElementById("statusProgress3").innerHTML = "You can now attack or switch pokemon.";

           //add event listener for switch button
           document.getElementById("Charmander_sel").addEventListener("click", player1CH.chrPokeImage);
           document.getElementById("Blastoise_sel").addEventListener("click", player1CH.blaPokeImage);
           document.getElementById("Pikachu_sel").addEventListener("click", player1CH.pikPokeImage);
           document.getElementById("Warturtle_sel").addEventListener("click", player1CH.warPokeImage);


         }, 8000); // 8 sec wait time


         }


         // change boolean state so computer can make a move
           confirm.makeMove[0].player1Move = false;


    }





} // end of pokemeon constructor


} // end of changePokemon class




player1CH = new changePokemon;
computerCH = new changePokemon;





class player1Moves {
   constructor () {
     this.pokemonName = ["Charmander","Scyther","Blastoise","Charizard","Squirtle","Warturtle", "Pikachu"];
     this.player1Menu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];
     this.attackOptions = ["Fire Blaster","Blaze", "Solar Beam"];
     this.fireBlasterMove = function () {



          if(player1CH.pokemonType[0].isSelected === true){


            //change boolean state so that computer can attack
            confirm.makeMove[0].player1Move = false;
            confirm.makeMove[0].computerMove = true;

            console.log(confirm.makeMove[0]);

           // fireBlaster does -20 damage on computer
           let health = document.getElementById("cpuHP")
           health.value -= 10;

           // changes need to be reflected in healthBar array as well
            comp.healthBar.push(-10);
            console.log("FireBlaster Damage is "+comp.healthBar);
            console.log("Computer health status is "+comp.getHealth());

            // show image
            player1Img.chrAtkImage1();




          } // end of if statement


     } // end of fireBlasterMove


     this.blazeMove = function() {
       // blaze does -10 damage on computer
       let health = document.getElementById("cpuHP")
       health.value -= 10;

     } // end of blazeMove


     this.solarMove = function(){
       // solar restores +45 health for player1 but can't attack for 3 moves -- fix that part
       let health = document.getElementById("player1HP")
       health.value += 45;

       let speed = document.getElementById("playerSpeed")
       speed.value -=65;

     } // end of solarMove


   } // end of player1Move constructor




} // end of play1Moves class




player1 = new player1Moves;



class computerMoves {
   constructor () {
     this.pokemonName = ["Charmander","Scyther","Blastoise","Charizard","Squirtle","Warturtle", "Pikachu"];
     this.compMenu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];
     this.ScytherMoves = function () {

          confirm.makeMove[0].computerMove = true;

       if(confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
         && player1CH.pokemonType[3].isSelected === true) {

         // does -10 damage to player1
          document.getElementById("player1HP").value -= 10;


         // changes need to be reflected in healthBar array as well
            p1.healthBar.push(-10);


         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1]+ " attacked "+player1.pokemonName[6]+" with Slash!";

         // show attack image
         computerImg.scyAtkImage1();

         //Change boolean state so that player1 can make a move
         confirm.makeMove[0].computerMove = false;




     } // end of if statement1

   } // end of scytherMoves function


   this.SquirtleMoves = function () {
     confirm.makeMove[0].computerMove = true;

  if(confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
    && player1CH.pokemonType[0].isSelected === true) {

    // does -20 damage to player1
     document.getElementById("player1HP").value -= 20;

    //debugging pokemon name here:
      player1CH.randomPokemonSelector();


    // changes need to be reflected in healthBar array as well
       p1.healthBar.push(-20);

    // get the status of health for player1 and computer pokemon
       comp.informStatus();
       console.log(p1.healthBar);

   // check computers health and report it to player if these conditions are true

      comp.informWinner();


    // inform player1 of attack from computer
    document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Bubble Beam!";

    // show attack image
    computerImg.squPokeImage();

    //Change boolean state so that player1 can make a move
    confirm.makeMove[0].computerMove = false;
    console.log(confirm.makeMove[0]);
    confirm.enableMoves();
    console.log(confirm.makeMove[0]);


    } // end of 2nd if statement

  } // end of SquirtleMoves function

} // end of computerMoves constructor

} // end of computerMoves...



computer = new computerMoves;



// restart function

function refreshPage(){

    window.location.reload();
}



// Attack menu for Event listeners

document.getElementById("attackA").addEventListener("click", attackA);
document.getElementById("attackB").addEventListener("click", attackB);
document.getElementById("attackC").addEventListener("click", attackC);

// Defense menu for Event listeners

document.getElementById("defenseA").addEventListener("click", defenseA);
document.getElementById("defenseB").addEventListener("click", defenseB);
document.getElementById("defenseC").addEventListener("click", defenseC);


// Event listener for player1 pokemon change

document.getElementById("Charmander_sel").addEventListener("click", player1CH.chrPokeImage);
document.getElementById("Blastoise_sel").addEventListener("click", player1CH.blaPokeImage);
document.getElementById("Pikachu_sel").addEventListener("click", player1CH.pikPokeImage);
document.getElementById("Warturtle_sel").addEventListener("click", player1CH.warPokeImage);

//Event listener for sound settings
document.getElementById("soundON").addEventListener("click", player1SD.soundSettingsOn);
document.getElementById("soundOFF").addEventListener("click", player1SD.soundSettingsOff);

//Event listener for restart button

document.getElementById("restartYES").addEventListener("click", refreshPage);




function attackA() {

console.log(confirm.makeMove[0]);

player1.fireBlasterMove();
confirm.noSelectionMeansDisable();
confirm.enableMoves();
confirm.disableMoves();


if(confirm.makeMove[0].player1Move === false){

  setTimeout (function(){


    computer.SquirtleMoves();

  },2000); // computer attacks after 2 secs

}




}

function attackB() {


player1.blazeMove();
confirm.noSelectionMeansDisable();



}

function attackC() {


player1.solarMove();
confirm.noSelectionMeansDisable();


}



function defenseA() {




confirm.noSelectionMeansDisable();


}

function defenseB() {



confirm.noSelectionMeansDisable();


}

function defenseC() {



confirm.noSelectionMeansDisable();



}
