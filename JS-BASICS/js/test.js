

/* This Javascript file is for testing purposes. Please read JavaScript manual for more information.

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

*/



/*
NOTE:
Lastest update: (8/24/2021)

x0) progressBar must reflect new health status when different pokemon is selected. But don't forget to record previous pokemon HP as it will be needed for switching back on  line 1233 *high priority*
x1) why doesn't tombstone image work when squirtle dies?
x2) retreiverAndResolver formula on line 2952 needs to corrected. restoredHealth on line 1432 is wrong and therefore fix or delete it. refer to the original array for the correct value. also troubleshoot get and set function. *high priority*
x3) create a function to find the correct HP when the switch on line 2077 and 2501 goes to the default code
x4) troubleshoot charmander and squirtle arrays. When squirtle attacks charmander for the first time, nothing displays on the progress bar. why? Array starts at 100 for each. see line 2287 *high priority*
y) Created debuggingOperation() on line 741 -- working on switching pokemon --
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
10) investigate this this.squPokeImage2() on line 411 *low priority*
11) commented out charmander sound on line  844 *********************************************************************************************************************************** 8/24/2021 
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



        if (charmanderHP4 === 0 && squirtleHP4 >= 5) {

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


        } else if (charmanderHP4 >= 5 && squirtleHP4 === 0) {


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

              if (charmanderHP2 <= 50 ) {



             document.getElementById("statusProgress").innerHTML=("Player1 pokemon health is low.");

             // update html progress bar --- see line on 232 for more details
                console.log("insert code here if needed on this line ");

        } else if (squirtleHP2 <= 50) {




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



          if (charmanderHP3 === 0 && squirtleHP3 >= 5 ){

          console.log("debuggin--player1 pokemon is dead.");

          document.getElementById("statusProgress").innerHTML=("Your pokemon died. Pick another one to continue the battle.");

          p1.getHealth();


        } else if (charmanderHP3 >= 5 && squirtleHP3 === 0) {

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
      //player1SD.charmanderVO.play();

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
    this.charmanderHealthBar =  [100];
    this.charmanderHealthBar2 = [100];
    this.charmanderHpRecovered= [45];
    this.squirtleHealthBar =    [100];
    this.squirtleHealthBar2 =   [100];
    this.squirtleHpRecovered =  [30];






  } // end of constructor class
} // end of objectofArrays class

a1 = new objectofArrays;
a2 = new objectofArrays;






class progressBar {
  constructor () {

    this.decreaseSquirtleHP = function () {

      // variable declartions


      let hpDamage = 0;
      let hpRecovered = a2.squirtleHpRecovered.reduce(array2.PokemonRestoredReducer);
      let squirtleHP5 = a2.squirtleHealthBar2.reduce(array1.PokemonHPReduced);
      let computerLowHealthIndicator = document.querySelector('.cpuHP');

      if (squirtleHP5 >= 0 && computer.squirtleMovesActivated[0].squirtleFunction1of6 === true) {

        //if statement will change the variables in the switch statements to reflect changes to the progress bar





        switch(squirtleHP5 >= 0) {

        case squirtleHP5 === 100:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 99 :
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 98 :
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 97 :
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 96 :
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 95 :
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 94:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 93:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 92:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 91:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 90:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 89:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 88:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 86:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 85:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 84:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 83:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 82:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 81:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 80:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 79:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 78:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 77:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 76:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 75:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 74:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 73:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 72:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 71:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 70:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 69:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 68:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =-hpDamage +   "%";
        break;

        case squirtleHP5 === 67:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 66:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 65:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 64:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 63:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 62:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 61:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 60:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 59:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 58:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 57:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 56:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 55:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 54:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 53:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 52:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 51:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 50:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 49:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 48:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 47:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 46:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 45:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 44:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 43:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 42:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 41:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 40:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 39:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 38:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 37:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 36:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 35:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 34:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        computerLowHealthIndicator.style.backgroundColor = "#FD0202";
        break;

        case squirtleHP5 === 33:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 32:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 31:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 30:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 29:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 28:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 27:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 26:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 25:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 24:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 23:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 22:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 21:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 20:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 19:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 18:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 17:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 16:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 15:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 14:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 13:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 12:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 11:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 10:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 9:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 8:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 7:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 6:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 5:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 4:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 3:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 2:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 1:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        break;

        case squirtleHP5 === 0:
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width =hpDamage +   "%";
        p1.informWinner();
        break;

        default:
        // Add a function here to find the range of squirtles health for the default block
        console.log("The default block was executed for decreaseSquirtleHP function at this line: ");

  }// end of switch statement


}else if (squirtleHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction6of6 === true) {



  switch(squirtleHP5 >= 0) {

  case squirtleHP5 === 100:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 99 :
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 98 :
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 97 :
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 96 :
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 95 :
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 94:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 93:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 92:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 91:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 90:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 89:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 88:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 86:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 85:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 84:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 83:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 82:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 81:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 80:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 79:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 78:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 77:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 76:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 75:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 74:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 73:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 72:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 71:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 70:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 69:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 68:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =-hpDamage +   "%";
  break;

  case squirtleHP5 === 67:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 66:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 65:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 64:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 63:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 62:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 61:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 60:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 59:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 58:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 57:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 56:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 55:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 54:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 53:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 52:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 51:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 50:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 49:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 48:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 47:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 46:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 45:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 44:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 43:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 42:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 41:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 40:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 39:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 38:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 37:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 36:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 35:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 34:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  computerLowHealthIndicator.style.backgroundColor = "#FD0202";
  break;

  case squirtleHP5 === 33:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 32:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 31:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 30:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 29:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 28:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 27:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 26:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 25:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 24:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 23:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 22:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 21:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 20:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 19:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 18:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 17:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 16:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 15:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 14:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 13:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 12:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 11:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 10:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 9:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 8:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 7:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 6:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 5:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 4:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 3:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 2:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 1:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  break;

  case squirtleHP5 === 0:
  hpDamage = squirtleHP5 + hpRecovered;
  document.querySelector(".cpuHP").style.width =hpDamage +   "%";
  p1.informWinner();
  break;

  default:
  // Add a function here to find the range of squirtles health for the default block
  console.log("The default block was executed for decreaseSquirtleHP function at this line: ");

}// end of switch statement


}// end if statements

      } // end of decreaseSquirtleHP function


    this.decreaseCharmanderHP = function () {

      // variable declartions


      let hpDamage2 = 0;
      let hpRecovered2 = a1.charmanderHpRecovered.reduce(array1.PokemonRestoredReducer);
      let charmanderHP5 = a1.charmanderHealthBar2.reduce(array1.PokemonHPReduced);
      let player1LowHealthIndicator = document.querySelector('.player1HP');


      if(charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction1of6 === true) {

        //if statement will change the variables in the switch statements to reflect changes to the progress bar


        switch(charmanderHP5 >= 0) {

        case charmanderHP5 === 100:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 99:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 98:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 97:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 96:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 95:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 94:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 93:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 92:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 91:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 90:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 89:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 88:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 87:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 86:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 85:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 84:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 83:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 82:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 81:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 80:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 79:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 78:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 77:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 76:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 75:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 74:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 73:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 72:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 71:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 70:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 69:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 68:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 67:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 66:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 65:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 64:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 63:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 62:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 61:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 60:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 59:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 58:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 57:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 56:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 55:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 54:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 53:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 52:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 51:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 50:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 49:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 48:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 47:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 46:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 45:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 44:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 43:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 42:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 41:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 40:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 39:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 38:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 37:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 36:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 35:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        player1LowHealthIndicator.style.backgroundColor = "#FD0202";
        break;
        case charmanderHP5 === 34:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 33:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 32:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 31:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 30:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 29:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 28:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 27:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 26:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 25:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 24:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 23:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 22:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 21:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 20:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 19:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 18:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 17:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 16:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 15:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 14:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 13:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 12:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 11:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 10:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 9:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 8:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 7:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 6:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 5:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 4:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 3:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 2:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        break;

        case charmanderHP5 === 1:
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
        comp.informWinner();
        break;

        default:
        // Add a function here to find the range of charmanders health for the default block
        console.log("The default block was executed for decreaseCharmanderHP function at this line: ");

}// end of switch statement

}else if (charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction6of6 === true) {






  switch(charmanderHP5 >= 0) {

  case charmanderHP5 === 100:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 99:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 98:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 97:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 96:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 95:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 94:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 93:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 92:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 91:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 90:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 89:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 88:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 87:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 86:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 85:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 84:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 83:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 82:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 81:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 80:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 79:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 78:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 77:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 76:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 75:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 74:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 73:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 72:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 71:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 70:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 69:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 68:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 67:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 66:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 65:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 64:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 63:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 62:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 61:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 60:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 59:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 58:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 57:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 56:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 55:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 54:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 53:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 52:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 51:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 50:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 49:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 48:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 47:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 46:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 45:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 44:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 43:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 42:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 41:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 40:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 39:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 38:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 37:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 36:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 35:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  player1LowHealthIndicator.style.backgroundColor = "#FD0202";
  break;
  case charmanderHP5 === 34:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 33:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 32:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 31:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 30:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 29:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 28:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 27:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 26:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 25:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 24:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 23:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 22:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 21:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 20:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 19:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 18:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 17:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 16:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 15:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 14:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 13:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 12:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 11:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 10:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 9:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 8:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 7:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 6:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 5:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 4:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 3:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 2:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  break;

  case charmanderHP5 === 1:
  hpDamage2 = charmanderHP5 + hpRecovered2;
  document.querySelector(".player1HP").style.width =hpDamage2 +   "%";
  comp.informWinner();
  break;

  default:
  // Add a function here to find the range of charmanders health for the default block
  console.log("The default block was executed for decreaseCharmanderHP function at this line: ");


}// end if switch statement

      }// end of if statements

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

      if(charmanderHP === 50 || squirtleHP === 10  ){

          p1.informStatus();


      }else if (charmanderHP >= 1 && squirtleHP >= 1 ) {

        //debugging here -- delete when neccessary
        console.log("retreiverAndResolver function was commented out on this line : ");

      //  array1.retreiverAndResolver(); <-- remove comment tag when needed



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




     this.charmanderMoves = [{

       charmanderFunction1of6: false, // [0]
       charmanderFunction2of6: false, // [1]
       charmanderFunction3of6: false, // [2]
       charmanderFunction4of6: false, // [3]
       charmanderFunction5of6: false, // [4]
       charmanderFunction6of6: false //  [5]

     }] //end of charmanderMoves object

     this.fireBlasterMove = function () {



          if(player1CH.pokemonType[0].isSelected === true) {

            //confirm attack move for pokemon was clicked
            player1.charmanderMoves[0].charmanderFunction1of6 = true;

            //debugging here -- delete when neccessary
            console.log("charmanderFunction1of6 is: " + player1.charmanderMoves[0].charmanderFunction1of6);

            //change boolean state so that computer can attack
            confirm.makeMove[0].player1Move = false;
            confirm.makeMove[0].computerMove = true;

            console.log(confirm.makeMove[0]);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           charmanderProgressBar.decreaseSquirtleHP();

           //reflect the changes to squirtleHealthBar AND squirtleHealthBar2 array as well.
           //fireBlaster does -10 damage on squirtle
           a2.squirtleHealthBar -=10;         //this is a backup array
           a2.squirtleHealthBar2.push(-10);  //this is an array

           //debugging here
           console.log("squirtleHealthBar array is " + a2.squirtleHealthBar);
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

       //confirm attack move for pokemon was clicked
       player1.charmanderMoves.charmanderFunction6of6 = true;

      // solar restores +45 health for player1 but can't attack for 3 moves -- fix that part

      let charmanderHPIncreased = document.querySelector('.player1HP');
      let charmanderSpeedDecreased = document.querySelector('.playerSpeed');
      let percent2 =100;

       //Add 45% to pokemon HP
       charmanderHPIncreased.style.width ="45%";

       //Decrease speedbar to 50% and append this data to an array (will do the array part later)
       charmanderSpeedDecreased.style.width =-50 + "%";

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

   this.squirtleMovesActivated = [{

    squirtleFunction1of6: false, // [0]
    squirtleFunction2of6: false, // [1]
    squirtleFunction3of6: false, // [2]
    squirtleFunction4of6: false, // [3]
    squirtleFunction5of6: false, // [4]
    squirtleFunction6of6: false  // [5]

  }]//end of squirtleMoves object

   this.squirtleMoves = function () {

     confirm.makeMove[0].computerMove = true;

     // if statement2

     if(confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
        && player1CH.pokemonType[0].isSelected === true) {


          //confirm attack move for pokemon was activated
          computer.squirtleMovesActivated[0].squirtleFunction1of6 = true;

          //debugging here -- delete when neccessary
          console.log("squirtleMoves Function1of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction1of6);


          // display and save computer pokemon name to savedPokemonName2 on line 445
          document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
          computerCH.savedPokemonName2.push("Squirtle");


          //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
          squirtleProgressBar.decreaseCharmanderHP();

          //reflect the changes to charmanderHealthBar AND charmanderHealthBar2 array as well.
          a1.charmanderHealthBar-=20; // this is a backup array
          a1.charmanderHealthBar2.push(-20); // push this data to charmanderHealthBar2 array as well

          // This is the function that applies the filter to the arrays listed above. It also calls other functions
          array1.checkTheStatus();

          //debugging here

          console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);


          // changes need to be reflected in healthBar array as well
          p1.healthBar.push(-20);


          // get the status of health for player1 and computer pokemon

          console.log("healhBar array is " +p1.healthBar); // 0,-20,-20  <-- this is another backup array for debugging -- delete when neccessary
          console.log("charmanderHealthBar2 array is " +a1.charmanderHealthBar2); //-20



          // inform player1 of attack from computer  <-- try to create a function to make this code better -- make it more abstract so all pokemon can use this function
          document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Bubble Beam!";

          // show attack image
          computerImg.squAtkImage1();

          //Change boolean state so that player1 can make a move
          confirm.makeMove[0].computerMove = false;
          console.log(confirm.makeMove[0]);
          confirm.enableMoves();
          console.log(confirm.makeMove[0]);


  } // end of if statement2

      } // end of squirtleMoves function

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




    computer.squirtleMoves();


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
