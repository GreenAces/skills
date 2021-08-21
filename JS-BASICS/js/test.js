

/* This Javascript file is for testing purposes. Please read JavaScript manual for more information.

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

*/



/*
NOTE:
Lastest update: (8/21/2021)

x0) progressBar must reflect new health status when different pokemon is selected. But don't forget to record previous pokemon HP as it will be needed for switching back on  line 1377 *high priority*
x1) why doesn't tombstone image work when squirtle dies?
x2) retreiverAndResolver formula on line 1420 needs to corrected. restoredHealth on line 1432 is wrong and therefore fix or delete it. refer to the original array for the correct value. also troubleshoot get and set function. *high priority*
x3) create a function to find the correct HP when the switch on line 1377 goes to the default code
x4) investigate this this.squPokeImage2() on line 411
y) Created debuggingOperation() on line 648 -- working on switching pokemon --
z) disabled the restart function on line 361 informWinner() to work on line 222
1) Work on disabling dead pokemon -- see function at line 206 -- note: this is the same problem as line 22
2) Add computer pokemon each time player selects a pokemon. [10% completed]
2.1) Add new waiting mechanism for when computer selects a pokemon [42% completed]
2.2) Fix new waiting mechanism so that player1 can pick a pokemon when they click on it again but NOT when it's the computers turn. notify user if this happens. start with charmander and turn sound off first. ;)
3) find a way to restore pokemon healthbBar after switching pokemon -- note: need at least two pairs of pokemon that are functional (currently only have 1 pair).
3a) why is Computer health status is undefined on line 1149? maybe because it's a function?
3b) show an indictator of the dead pokemon of the total left (3) -- work on that later --  see line 225
3c) function to disable charmander was created but don't know where to put it p1.disableDeadCharmander();
4) Save health information to array when pokemon gets injured. also restore health info when player switches back to pokemon.
5) Add a rule to the referee class about not being able to attack or defend if a pokemon is NOT selected. (working on it but it has errors -- see line 201)
6) On line 791 (or computer moves - phase1 function) improve the condition for the else if function
7) Remove the stars *** for the following comment: "please wait for computer to attack or switch(***)" but only after fixing new mechanism
8) improve code on line 369 -- scythers attack move -- computer attacks too fast -- it should attack every 8 secs if conditions are true
9) fix boolean state and permission levels for pikachu and scyther (line 385)
10)
11)
12) Make all the pokemon functional -- currently only charmander and squirtle only work together.
13) Find a way to randomly select a computer pokemon and focus on making player1 attacks effective only if conditions are true... eg: water vs fire type --- see line 480
14) Make healthBar turn red when health is < 40
15) Find a way to save pokemon health and name when player1 changes pokemon


Date:
09/31/2019 -- load the correct pokemonImage with the following array: loadPokemonImage on line 429


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
    this.scyAtkImage1 = function (){ // image 1 of 6

      document.getElementById("attack_graphic").innerHTML='<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/slash.gif" </img>';
      document.getElementById("attack_graphic").style.width = 180;
      document.getElementById("attack_graphic").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("attack_graphic").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.squAtkImage1 = function (){ // image 1 of 6

      document.getElementById("attack_graphic").innerHTML='<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/bubbles-gif.gif" </img>';
      document.getElementById("attack_graphic").style.width = 180;
      document.getElementById("attack_graphic").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("attack_graphic").innerHTML=("");

      }, 6000); // 6 sec wait time

    }


    this.pikAtkImage1 = function (){ // image 1 of 6

      document.getElementById("attack_graphic").innerHTML='<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/thunderboltimage.jpeg" </img>';
      document.getElementById("attack_graphic").style.width = 180;
      document.getElementById("attack_graphic").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("attack_graphic").innerHTML=("");

      }, 3000); // 3 sec wait time

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
    this.deadPokemon = []; // NOTE: This is an empty array that will be used later -- see line 370 (getHealth) for details.
    this.deathValidator = {pokemonDied:false};
    this.disableDeadCharmander = function () {

      console.log("disableDeadCharmander was started");
      console.log("Before if statement:" + JSON.stringify(p1.deadPokemon[0]));


      if (player1CH.charmanderHealthBar === 0 && p1.deadPokemon[0] === "Charmander") {

        //debugging here -- executes code below but doesn't disable charmander -- perhaps it's being enabled somewhere else?

        console.log("After if statement" + JSON.stringify(p1.deadPokemon[0]));

        document.getElementById("Charmander_sel").removeEventListener("click", player1CH.chrPokeImage);
        document.getElementById("attackA").removeEventListener("click", attackA);
        document.getElementById("attackB").removeEventListener("click", attackB);
        document.getElementById("attackC").removeEventListener("click", attackC);
        document.getElementById("defenseA").removeEventListener("click", defenseA);
        document.getElementById("defenseB").removeEventListener("click", defenseB);
        document.getElementById("defenseC").removeEventListener("click", defenseC);

      } // end of if statment




    }; // end of disableDeadCharmander (WARNING: nothing calls it)




    this.pokemonSwitch = function () {

      /* -- debugging code on line 648


              //NOTE: record the healthBar from charmander before you reset the UI healthbar


              // save this record as xyz as it will be used later when switching pokemon again

              player1CH.savedPokemonName2.push("Charmander");

              //debuggin here -- want to verify charmander is added to array
              console.log(player1CH.savedPokemonName2);

              player1CH.charmanderHealthBar.push(player1CH.modifiedHealthBar[0]);

              //debuggin here -- want to verify healthBar is being pushed to the modifiedHealthBar array
              console.log(player1CH.modifiedHealthBar);


              // reset the UI healthBar for player1 so that the new pokemon starts with 100 health
              let health = document.getElementById("player1HP")
              health.value += 100;

              //where to call this function is the important question --



      }

      */// -- remove tag here as well


    }; // end of pokemonSwitch function

    this.deadPokemonImage = function () {

      //load pokemon tombstone image based on certain conditions.

      if (player1CH.pokemonType[0].isSelected === true ||
          player1CH.pokemonType[1].isSelected === true ||
          player1CH.pokemonType[2].isSelected === true ||
          player1CH.pokemonType[3].isSelected === true ||
          computerCH.pokemonType[4].isSelected === false &&
          computerCH.pokemonType[5].isSelected === false &&
          computerCH.pokemonType[6].isSelected === false) {

        //Inform player that pokemon is dead but let the game continue
          document.getElementById("statusProgress").innerHTML=("Pokemon is dead. Please choose another pokemon.");




        // remove previous player1 Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("Player1PokeImage").appendChild(elem);
        document.getElementById("Player1PokeImage").style.width = 100;
        document.getElementById("Player1PokeImage").style.height = 100;

        // load tombstone
        document.getElementById("Player1PokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/rip_pokemon.jpeg" </img>';
        document.getElementById("Player1PokeImage").style.width = 200;
        document.getElementById("Player1PokeImage").style.height = 180;


          //Change boolean state so player1 can't make a move
           confirm.makeMove[0].computerMove = true;

           // inform player1 that it's the computer turn to attack
           document.getElementById("statusProgress3").innerHTML = "It's the computers turn to attack or switch pokemon. --- debugging here***";

           setTimeout(function(){

             // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
             console.log("Should there be a 3 second timer when a pokemon dies?");


         },3000); // 3 sec wait time for computer to select pokemon



         //load pokemon tombstone image based on certain conditions.

      }else if (computerCH.pokemonType[0].isSelected === false ||
                computerCH.pokemonType[1].isSelected === false ||
                computerCH.pokemonType[2].isSelected === false ||
                computerCH.pokemonType[3].isSelected === false ||
                player1CH.pokemonType[4].isSelected === true &&
                player1CH.pokemonType[5].isSelected === true &&
                player1CH.pokemonType[6].isSelected === true) {

        //Inform player that pokemon is dead but let the game continue
          document.getElementById("statusProgress").innerHTML=("Pokemon is dead. Please choose another pokemon.");


        //no need to disable squirtle as it's a computer pokemon (user could never select it from menu)




        // remove previous computer Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("CpuPokeImage").appendChild(elem);
        document.getElementById("CpuPokeImage").style.width = 100;
        document.getElementById("CpuPokeImage").style.height = 100;

        // load tombstone
        document.getElementById("CpuPokeImage").innerHTML = '<img src ="http://robert-labonte.great-site.net/JS-BASICS/images/pokemon/rip_pokemon.jpeg" </img>';
        document.getElementById("CpuPokeImage").style.width = 200;
        document.getElementById("CpuPokeImage").style.height = 180;


          //Change boolean state so computer move can't make a move
           confirm.makeMove[0].player1Move = true;

           //Inform player1 that they can attack the computer
           document.getElementById("statusProgress3").innerHTML=("You can now attack or switch pokemon. ---debugging here***");


           setTimeout(function(){


             // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
             console.log("Should there be a 3 second timer when a pokemon dies?****");

         },3000); // 3 sec wait time for computer to select pokemon



      } // end of if statements





}; // end of deadPokemonImage function



    this.fullHealth = [100];
    this.healthBar = [0]; // NOTE: this is intentionally left empty but pokemon health will not exceed 100 HP when data is pushed to it.
    this.lowHealth = [40];
    this.zeroHealth = [0];
    this.rechargeHealth = [60];
    this.isRecharging = false;




    this.getHealth = function() {

      console.log("getHealth was started");

      // new variable declartions to avoid reference error

      let charmanderHP4 = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
      let squirtleHP4 = a2.squirtleHealthBar2.reduce(array1.PokemonHPReduced);



        if (charmanderHP4 === 320 && squirtleHP4 >= 110) {

          // confirm dead pokemon
          p1.deathValidator.pokemonDied = true;

          // record data to deadPokemon array as well
          p1.deadPokemon.push("Charmander");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + p1.deadPokemon);

          // display player1 deadPokemon
          p1.deadPokemonImage();


          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          p1.deadPokemon.length = 1;


        } else if (charmanderHP4 >= 320 && squirtleHP4 === 100) {


          // confirm dead pokemon
          p1.deathValidator.pokemonDied = true;

          // record data to deadPokemon array as well
          p1.deadPokemon.push("Squirtle");


          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + p1.deadPokemon);

          // display computer deadPokemon
          p1.deadPokemonImage();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          p1.deadPokemon.length = 1;



        } // end of if statements


} // end of getHealth function






    this.isPokemonAlive = function () { // NOTE: function NOT called yet...

      if (JSON.stringify(player1CH.charmanderHealthBar != 0) ) {

        //NOTE: record the healthBar from charmander before you reset the UI healthbar


        // save this record as xyz as it will be used later when switching pokemon again

        p1.savedPokemonName2.push("Charmander");

        //debuggin here -- want to verify charmander is added to array
        console.log(p1.savedPokemonName2);

        player1CH.charmanderHealthBar.push(player1CH.modifiedHealthBar[0]);

        //debuggin here -- want to verify healthBar is being pushed to the modifiedHealthBar array
        console.log(player1CH.modifiedHealthBar);


        // reset the UI healthBar for player1 so that the new pokemon starts with 100 health
        let health = document.getElementById("player1HP")
        health.value += 100;

        //where to call this function is the important question --


      }



    };// end of isPokemonAlive



    this.informStatus = function() {

      console.log("InformStatus function was called.");

      //inform pokemon health status when each pokemon have low health

      // varible declartions

      let charmanderHP2 = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
      let squirtleHP2 = a2.squirtleHealthBar2.reduce(array1.PokemonHPReduced);

              if (charmanderHP2 <= 360 ) {



             document.getElementById("statusProgress").innerHTML=("Player1 pokemon health is low.");

             // update html progress bar --- see line on 232 for more details
                console.log("insert code here if needed on this line ");

        } else if (squirtleHP2 <= 150) {




             document.getElementById("statusProgress").innerHTML=("Computer pokemon health is low.");

             // update html progress bar --- see line on 232 for more details
                console.log("insert code here if needed on this line ");




           } // end of if statements


    } // end of informStatus function


    this.informWinner = function() {

      console.log("InformWinner function was called.");

      // informs the winner of the game and restarts it based on certain conditions.

      // new variable declartions to avoid reference error

      let charmanderHP3 = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
      let squirtleHP3 = a2.squirtleHealthBar2.reduce(array1.PokemonHPReduced);



          if (charmanderHP3 === 320 && squirtleHP3 >=110 ){

          console.log("debuggin--player1 pokemon is dead.");

          document.getElementById("statusProgress").innerHTML=("Your pokemon died. Pick another one to continue the battle.");

          p1.getHealth();


        } else if (charmanderHP3 >=320 && squirtleHP3 === 110) {

          console.log("debuggin--player1 won the match");

          document.getElementById("statusProgress").innerHTML=("Player1 won the match... Game will restart in 10 secs...");

          p1.getHealth();

          /* --- disabled the restart function to work on line 222
          setTimeout (function(){

            //reload page

            window.location.reload();



          },10000); // reloads page after 10 secs

          */// --- delete this tag as well

      } // end of if statements


    } // end of InformWinner function




} // end of constructor class


  } //end of referee class





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
    this.debuggingOperation = function() {

      //default message for debuggingOperating function -- comment out if working on errors

    //  console.log("DebuggingOperation function is launched. There are no major issues here.");


      // debugging begins here -- actual code is on 236

        let x = 20;


        if (x=== 10) {




          console.log("debuggingOperation successful : if statment was triggered.");
          console.log("----------------------------------------------------------");




          console.log("---------------------------------------------------------");








          //NOTE: record the healthBar from charmander before you reset the UI healthbar

          // set a limit to how many entries is entered into the array; therefore charmander is only displayed once

          player1CH.savedPokemonName2.push("Charmander");
          player1CH.savedPokemonName2.length = 1;

          // remember this: JSON.stringify(player1CH.CharmanderHealthBar2[6]=== -120)

          //debuggin here -- verify only charmander is added to array and verify the datatype of charmanderHealthBar to debug line 714
          console.log(player1CH.savedPokemonName2); // charmander







          //get healh information for charmanderHealthBar2




          // reset the UI healthBar for player1 so that the new pokemon starts with 100 health

          //  let health = document.getElementById("player1HP")
          //  health.value += 100;






        } // end of if statement








   }; // end of debuggingOperation function


    this.pokemonType = [{Type: "fire", pokemonName: this.player1PokemonChoices[0], isSelected: false },
                       {Type: "water", pokemonName:  this.player1PokemonChoices[1], isSelected: false},
                       {Type: "water", pokemonName: this.player1PokemonChoices[2], isSelected: false},
                       {Type: "electric", pokemonName: this.player1PokemonChoices[3], isSelected: false},
                       {Type: "grass", pokemonName: this.ComputerPokemonChoices[0], isSelected: false},
                       {Type: "fire", pokemonName: this.ComputerPokemonChoices[1], isSelected: false},
                       {Type: "water", pokemonName: this.ComputerPokemonChoices[2], isSelected: false}
                        ];

    this.savedPokemonName = []; // NOTE: empty array of that will be filled with pokemon names to be used later  -- the 1st one will be used to make the game more challenging for player1 -- see squPokeImage2 on line 699 for examples
    this.savedPokemonName2 = []; // NOTE: empty array of that will be filled with pokemon names to be used later -- the 2nd one will be used for storing names only
    this.modifiedHealthBar = []; // NOTE: empty array that will contain pokemone health status to be used later
    this.loadPokemonImage = []; // NOTE: this array of pokemon images are empty until computerPokemonLoader() is called upon.

    this.computerPokemonLoader = function () {

    this.loadPokemonImage.push(

      this.squPokeImage2(),   // index 2
      this.scyPokeImage2(),  // index 1
      this.chaPokeImage(),  // index 0

    );

  }; // end of computerPokemonLoader function

    // player1 pokemon options
    this.charmanderStats = [-20, -10, -45]; // attack/defense moves
    this.charmanderRest = [+45]; // restores health by +45 hp
    this.charmanderHealthBar = 100;


    this.blastoiseStats = [-20, -10, -45];
    this.blastoiseRest = [+45];
    this.blastoiseHealthBar = 100;


    this.wartortleStats = [-30, -10, -35, -20, -25];
    this.wartortleRest = [+45];
    this.WartortleHealthBar = 100;

    this.pikachuStats = [-20, -10, -45];
    this.pikachuRest = [+45];
    this.pikachuHealthBar = 100;

    // computer pokemon options
    this.squirtleStats =   [-20, -10, -45];
    this.squirtleRest =    [+45];
    this.squirtleHealthBar = 100;


    this.charizardStats = [-20, -10, -45];
    this.charizardRest =  [+45];
    this.charizardHealthBar = 100;

    this.scytherStats = [-20, -10, -45];
    this.scytherRest =  [+45]
    this.syctherHealthBar = 100;


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
      document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

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



      // set boolean stats to true when player1 selects a pokemon
      computerCH.pokemonType[3].isSelected = true;

      // set boolean stats to false for non-selected pokemon
      computerCH.pokemonType[0].isSelected = false;
      computerCH.pokemonType[1].isSelected = false;
      computerCH.pokemonType[2].isSelected = false;
      computerCH.pokemonType[4].isSelected = false;
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


    this.pikPokeImage = function () {

      confirm.makeMove[0].player1Move = true;


      if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {


        // set boolean stats to true when user selects a pokemon
        player1CH.pokemonType[3].isSelected = true;

        // set boolean stats to false for non-selected pokemon

        computerCH.pokemonType[0].isSelected = false;
        computerCH.pokemonType[1].isSelected = false;
        computerCH.pokemonType[2].isSelected = false;
        computerCH.pokemonType[4].isSelected = false;
        computerCH.pokemonType[5].isSelected = false;
        computerCH.pokemonType[6].isSelected = false;

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


} // end of class




player1CH = new changePokemon;
computerCH = new changePokemon;



class objectofArrays {
  constructor () {
    this.charmanderHealthBar2 = [0,20,40,60,80,100,120];
    this.squirtleHealthBar2 =   [0,10,20,30,40,50,60];


  } // end of constructor class
} // end of objectofArrays class

a1 = new objectofArrays;
a2 = new objectofArrays;

class progressBar {
  constructor () {

    this.decreaseSquirtleHP = function () {

      // variable declartions

      let percent = 100;
      let squirtleHP5 = a2.squirtleHealthBar2.reduce(array1.PokemonHPReduced);
      let computerLowHealthIndicator = document.querySelector('.cpuHP');


      switch(squirtleHP5 >= 110) {

      case squirtleHP5 === 210:
      document.querySelector(".cpuHP").style.width =-8.3 + percent + "%";
      break;

      case squirtleHP5 === 200:
      document.querySelector(".cpuHP").style.width =-16.6 + percent + "%";
      break;

      case squirtleHP5 === 200:
      document.querySelector(".cpuHP").style.width =-24.9 + percent + "%";
      break;

      case squirtleHP5 === 190:
      document.querySelector(".cpuHP").style.width =-33.2 + percent + "%";
      break;

      case squirtleHP5 === 180:
      document.querySelector(".cpuHP").style.width =-41.5 + percent + "%";
      break;

      case squirtleHP5 === 170:
      document.querySelector(".cpuHP").style.width =-49.8 + percent + "%";
      break;

      case squirtleHP5 === 160:
      document.querySelector(".cpuHP").style.width =-58.1 + percent + "%";
      computerLowHealthIndicator.style.backgroundColor = "#FD0202";
      break;

      case squirtleHP5 === 150:
      document.querySelector(".cpuHP").style.width =-66.4 + percent + "%";
      break;

      case squirtleHP5 === 140:
      document.querySelector(".cpuHP").style.width =-74.7 + percent + "%";
      break;

      case squirtleHP5 === 130:
      document.querySelector(".cpuHP").style.width =-83 + percent + "%";
      break;

      case squirtleHP5 === 120:
      document.querySelector(".cpuHP").style.width =-91.3 + percent + "%";
      break;

      case squirtleHP5 === 110:
      document.querySelector(".cpuHP").style.width =-100+ percent + "%";
      p1.informWinner();
      break;

      default:
      // Add a function here to find the range of squirtles health for the default block
      console.log("The default block was executed for decreaseSquirtleHP function at this line: ");

}// end of switch statement


    } // end of decreaseSquirtleHP function

    this.decreaseCharmanderHP = function () {

      // variable declartions

      let percent = 100;
      let charmanderHP5 = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
      let player1LowHealthIndicator = document.querySelector('.player1HP');


      switch(charmanderHP5 >= 300) {

      case charmanderHP5 === 420:
      document.querySelector(".player1HP").style.width =-16.67 + percent + "%";
      break;

      case charmanderHP5 === 400:
      document.querySelector(".player1HP").style.width =-33.34 + percent + "%";
      break;

      case charmanderHP5 === 380:
      document.querySelector(".player1HP").style.width =-50.01 + percent + "%";
      break;

      case charmanderHP5 === 360:
      document.querySelector(".player1HP").style.width =-66.68 + percent + "%";
      player1LowHealthIndicator.style.backgroundColor = "#FD0202";
      break;

      case charmanderHP5 === 340:
      document.querySelector(".player1HP").style.width =-83.35 + percent + "%";
      break;

      case charmanderHP5 === 320:
      document.querySelector(".player1HP").style.width =-100 + percent + "%";
      comp.informWinner();
      break;

      default:
      // Add a function here to find the range of charmanders health for the default block
      console.log("The default block was executed for decreaseCharmanderHP function at this line: ");

}// end of switch statement



    } // end of decreaseCharmanderHP function

  } // end of progressBar constructor
} // end of prograssBar class

charmanderProgressBar = new progressBar;
squirtleProgressBar = new progressBar;



class arrayFunctions {

  constructor () {

    this.retreiverAndResolver = function () {
      //retreiverAndResolver is a getter and setter function and will be used to fitch and retreive data from outside this class.

      //find the value of previousHP from charmander and squirtle and create a function to find and restore the difference of HP.
      let charmanderPreviousHP = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
      let squirtlePreviousHP =   a2.squirtleHealthBar2.reduce(array1.PokemonHPReduced);

      let charmanderCurrentHP = restore.charmanderRestoredHP.reduce(array1.PokemonRestoredReducer);
      console.log("charmanderCurrentHP value: "+ charmanderCurrentHP); //0

      let restoredHealth = charmanderPreviousHP  + charmanderCurrentHP;
      console.log("restoredHealth value: " + restoredHealth); //400

      let mirror = {

      restoredHealthCopy: restoredHealth,

      get reducedArray() {
        return this.restoredHealthCopy;
      },

      set createData(x) {
        this.restoredHealthCopy = x * 1;

      }



    }; // end of mirror object


    /*
    console.log(mirror.arrayCopy); // []
    console.log(mirror.reducedArray); // []
    mirror.createData = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
    console.log(mirror.arrayCopy); // 400
    console.log(typeof mirror.arrayCopy);

    */


    } // end of retreiverAndResolver






    this.checkTheStatus = function () {

      // varible declartions

      let charmanderHP = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
      let squirtleHP = a2.squirtleHealthBar2.reduce(array1.PokemonHPReduced);


      // create a reduce function for charmanderHealthBar2 and squirtleHealthBar2
      console.log("charmanderHealthBar2 array was reduced to: " + charmanderHP); // full HP is 420
      console.log("squirtleHealthBar2 array was reduced to: "+ squirtleHP); // full HP  is 210

      //create a logic based on the output for the reduce function and call other functions if conditions are true

      if(charmanderHP === 360 || squirtleHP === 110  ){

          p1.informStatus();


      }else if (charmanderHP >= 310 && squirtleHP >= 110 ) {

        //debugging here -- delete when neccessary
        console.log("Testing getter and setter on this line: ");

        array1.retreiverAndResolver();



      } // end of if statements

    }; // end of checkTheStatus function



    this.PokemonHPReduced = function (accumulator, currentValue) {


          return accumulator + currentValue;
          };

    this.PokemonRestoredReducer = function (accumulator, currentValue) {


                return accumulator + currentValue;
                };

    this.getCharmanderHP =  function () {


      a1.charmanderHealthBar2.filter((element, index, array))


      return element === -60;
    }


    this.getSquirtleHP   =  function () {

      a1.squirtleHealthBar2.filter((element, index, array))

      return element === -30;
    }

  } // end of constructor
} // end of arrayArrows class



array1 = new arrayFunctions;
array2 = new arrayFunctions;


class Sleep {
  constructor () {
    this.restedPokemon = false;
    this.restedPokemonArray = [];
    this.charmanderRestoredHP = [0];


  }// end of rest constructor
} // end of rest class

restore = new Sleep;





class player1Moves {
   constructor () {
     this.pokemonName = ["Charmander","Scyther","Blastoise","Charizard","Squirtle","Warturtle", "Pikachu"];
     this.player1Menu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];
     this.attackOptions = ["Fire Blaster","Blaze", "Solar Beam"];
     this.thunderShockMove = function () {

       if(player1CH.pokemonType[3].isSelected === true) {


         //change boolean state so that computer can attack
         confirm.makeMove[0].player1Move = false;
         confirm.makeMove[0].computerMove = true;

         console.log(confirm.makeMove[0]);

        // thunderShockMove does -20 damage on computer
        let health = document.getElementById("cpuHP")
        health.value -= 20;

        //reflect the changes to the real pokemon health bar as well.
        computerCH.scytherHealthBar -= 20;

        // changes need to be reflected in healthBar array as well
         comp.healthBar.push(-20);
         console.log("ThunderShock Damage is "+comp.healthBar);


         // attack image for pikachu
         player1Img.pikAtkImage1();


     } // end of if statement


     } // end of thunderShockMove





     this.fireBlasterMove = function () {



          if(player1CH.pokemonType[0].isSelected === true) {


            //change boolean state so that computer can attack
            confirm.makeMove[0].player1Move = false;
            confirm.makeMove[0].computerMove = true;

            console.log(confirm.makeMove[0]);

           // fireBlaster does -10 damage on squirtle
           // this is the HTML progress bar that displays the pokemon HP (does damage to computer HP)
           //let health = document.getElementById("cpuHP")

           charmanderProgressBar.decreaseSquirtleHP();


           //reflect the changes to squirtleHealthBar AND squirtleHealthBar2 array as well.
           computerCH.squirtleHealthBar -=10;   //this is a number
           a2.squirtleHealthBar2.push(-10);  //this is an array

           console.log("squirtleHealthBar2 array is " + a2.squirtleHealthBar2);

            // show image
            player1Img.chrAtkImage1();




          } // end of if statement


     } // end of fireBlasterMove


     this.blazeMove = function() {
       // blaze does -10 damage on computer
       let health = document.getElementById("cpuHP")
       health.value -= 10;

     } // end of blazeMove


     this.rest = function() {

       console.log("The rest function started on this line: ");
       // solar restores +45 health for player1 but can't attack for 3 moves -- fix that part


      let charmanderHPIncreased = document.querySelector('.player1HP');
      let charmanderSpeedDecreased = document.querySelector('.playerSpeed');
      let percent =100;

       //Add 45% to pokemon HP
       charmanderHPIncreased.style.width ="45%";

       //Decrease speedbar to 50% and append this data to an array (will do the array part later)
       charmanderSpeedDecreased.style.width =-50 + percent +"%";

       //Change progress bar color to default color (light blue)
       charmanderHPIncreased.style.backgroundColor = "A6EDED";

       //reflect the changes to charmanderHealthBar2 array as well.
       a1.charmanderHealthBar2.push(45);

       //record rest action that was taken as it will be used later.
       restore.restedPokemon = true;
       restore.restedPokemonArray.push("Charmander");
       restore.charmanderRestoredHP.push(45);

       //debugging
       console.log("The following pokemon rested: " + restore.restedPokemonArray);
       console.log("This is how much HP was restored: " + restore.charmanderRestoredHP);



     } // end of rest function







    } // end of player1Move constructor


} // end of player1Moves class




player1 = new player1Moves;


// compare computerMoves to pokemonType on line 411 -- and create a defensive strategy

class computerMoves {
   constructor () {
     this.pokemonName = ["Charmander","Scyther","Blastoise","Charizard","Squirtle","Warturtle", "Pikachu"];
     this.compMenu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];
     this.ScytherMoves = function () {

       confirm.makeMove[0].computerMove = true;

       //if statement1

    if(confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
      && player1CH.pokemonType[3].isSelected === true) {

        // display and save computer pokemon name to savedPokemonName2 on line 445
       document.getElementById("cpuPokemonName").innerHTML = "Scyther";
       computerCH.savedPokemonName2.push("Scyther");

      //verifying changes -- delete if neccessary
       console.log(computerCH.savedPokemonName2);


      // does -10 damage to player1
       document.getElementById("player1HP").value -= 10;


     // changes need to be reflected in healthBar array as well
         p1.healthBar.push(-10);

     // get the status of health for player1 and computer pokemon

        console.log(p1.healthBar);


      // inform player1 of attack from computer
      document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1]+ " attacked "+player1.pokemonName[6]+" with Slash!";

      // show attack image
      computerImg.scyAtkImage1();

      //Change boolean state so that player1 can make a move
      confirm.makeMove[0].computerMove = false;
      console.log(confirm.makeMove[0]);
      confirm.enableMoves();
      console.log(confirm.makeMove[0]);




     } // end of if statement1

   } // end of scytherMoves function


   this.SquirtleMoves = function () {

     confirm.makeMove[0].computerMove = true;

     // if statement2

  if(confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
    && player1CH.pokemonType[0].isSelected === true) {

    // display and save computer pokemon name to savedPokemonName2 on line 445
     document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
     computerCH.savedPokemonName2.push("Squirtle");


    // this is the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
    // document.getElementById("player1HP").value -= 20;
       squirtleProgressBar.decreaseCharmanderHP();

     //reflect the changes to player1CH.charmanderHealthBar AND charmanderHealthBar2 array as well.
     player1CH.charmanderHealthBar-=20; // this is a number
     a1.charmanderHealthBar2.push(-20); // push this data to charmanderHealthBar2 array as well

     // You need a function to apply the filter over here. But you need to reduce the array first. The function also needs to call informStatus for main logic

        array1.checkTheStatus();

    //debugging here

     console.log("CharmanderHealthBar2 array is "+a1.charmanderHealthBar2);


    // changes need to be reflected in healthBar array as well
       p1.healthBar.push(-20);


    // get the status of health for player1 and computer pokemon

       console.log("healhBar array is " +p1.healthBar); // 0,-20,-20
       console.log("charmanderHealthBar2 array is " +a1.charmanderHealthBar2); //-20



    // inform player1 of attack from computer
    document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Bubble Beam!";

    // show attack image
    computerImg.squAtkImage1();

    //Change boolean state so that player1 can make a move
    confirm.makeMove[0].computerMove = false;
    console.log(confirm.makeMove[0]);
    confirm.enableMoves();
    console.log(confirm.makeMove[0]);


  } // end of if statement2

  } // end of SquirtleMoves function

} // end of computerMoves constructor

} // end of computerMoves class...



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


// Event listener for player1 pokemonchange on line 536


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

player1.thunderShockMove();
player1.fireBlasterMove();
confirm.noSelectionMeansDisable();
confirm.enableMoves();
confirm.disableMoves();
player1CH.debuggingOperation();





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



confirm.noSelectionMeansDisable();


}



function defenseA() {




confirm.noSelectionMeansDisable();


}

function defenseB() {



confirm.noSelectionMeansDisable();


}

function defenseC() {


player1.rest();
confirm.noSelectionMeansDisable();



}
