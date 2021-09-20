
/*
NOTE:
Lastest update: (9/15/2021)


x0) Change line 215 to reflect changes in charmander and squirtle array. Also find out why does action listeners are disabled after charmander dies? (this happens if you attack when the tombstone appears) *high priority*
x1) Troubleshoot line 2079 (squirleMoves) and line 1581 (increasePlayerHP) --- find out why charmander speed progress bar is NOT decreasing and why charmander's health is not increasing when rest function is called.  *high priority*
x2) retreiverAndResolver formula on line 2952 needs to corrected. *low priority*
x3) Create a function to switch pokemon without losing HP data from array *2nd priority*
x4) Attack moves for computer pokemon need to be combined to one function *3rd priority*
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
11) commented out charmander and squirtle sound on line  844 *********************************************************************************************************************************** 8/24/2021
12) Make all the pokemon functional -- currently only charmander and squirtle only work together.
13) on line 1568 defaultProgressBar.catchErrorFromSwitch(); needs to be updated to reflect changes to player1 and computer speed progressbars *low priority*
14) on line 444 isPokemonAlive can be used to call the function that allows you to switch pokemon (not created yet).
15) add a tip section that changes based on cases from the switch. This should be next to pokomon logo at top left corner. *low priority*
16) pokRecImage2 on line 58 is the recovery image for computer -- to include this code in the function *low priority* ************************************************************************** 9/15/2021

*/




class images {
  constructor () {


    this.pokRecImage1 = function () { // player1 using recovery function image

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
      document.getElementById("computerAttackImage").style.width = 50;
      document.getElementById("computerAttackImage").style.height = 50;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 4 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 3000); // 5 sec wait time

    }// end of pokRecImage1

      this.pokRecImage2 = function () { // computer using recovery function image

        document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
        document.getElementById("player1AttackImage").style.width = 50;
        document.getElementById("player1AttackImage").style.height = 50;

        setTimeout(function() { // This is an anonymous callback function

          // remove attack image after 4 secs
          document.getElementById("player1AttackImage").innerHTML=("");

        }, 3000); // 5 sec wait time

    }// end of pokRecImage2

    this.chrAtkImage1 = function (){  // image 1 of 6

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/fireBlaster.gif" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 4 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time



    }
    this.scyAtkImage1 = function (){ // image 1 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/slash.gif" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.squAtkImage1 = function (){ // image 1 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/bubbles-gif.gif" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }


    this.pikAtkImage1 = function (){ // image 1 of 6

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/thunderboltimage.jpeg" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }



  } // end of constructor

} // end of images class



player1Img = new images;
computerImg = new images;



class sound {
  constructor (){
     this.charmanderVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/CharmanderVoice.mp3');
     this.blastoiseVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/BlastoiseVoice.wav');
     this.charizardVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/CharizardVoice.wav');
     this.pikachuVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/PikachuVoice.mp3');
     this.pokemonBattleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/gameboy_battleTheme.mp3');
     this.pokemonVictoryVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/victoryThemezz.mp3');
     this.scytherVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/ScytherVoice.wav');
     this.squirtleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/SquirtleVoicezzz.mp3');
     this.wartortleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/WartortleVoice.wav');
     this.soundConfirmer = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/soundConfirmer.wav');

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
      document.getElementById("statusProgress3").innerHTML=("Sound was turned off.");

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

      // variable declartions
      let charmanderHP7 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP7 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);

      //load pokemon tombstone image based on certain conditions.

      if (charmanderHP7 === 0 && squirtleHP7 >= 5) {

        //Inform player that pokemon is dead but let the game continue
          document.getElementById("statusProgress").innerHTML=("Pokemon is dead. Please choose another pokemon.");




        // remove previous player1 Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("Player1PokeImage").appendChild(elem);
        document.getElementById("Player1PokeImage").style.width = 100;
        document.getElementById("Player1PokeImage").style.height = 100;

        // load tombstone
        document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/rip_pokemon.jpeg" </img>';
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

      }else if (squirtleHP7 === 0 && charmanderHP7 >= 5) {

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
        document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/rip_pokemon.jpeg" </img>';
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


    this.getHealth = function() {

      console.log("getHealth was started");

      // new variable declartions to avoid reference error

      let charmanderHP4 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP4 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);



        if (charmanderHP4 === 0 && squirtleHP4 >= 5) {

          // confirm dead pokemon
          p1.deathValidator.pokemonDied = true;

          //confirm that the pokemon can no longer be selected
          player1CH.pokemonType[0].isSelected = false; // charmander

          //record data to deadPokemon array as well
          p1.deadPokemon.push("Charmander");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + p1.deadPokemon);

          //display player1 deadPokemon
          p1.deadPokemonImage();

          //make changes to pokemon indicator icon NOTE: only do this for player1
          player1CH.pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit. UPDATE: fix this later as there should be no limit instead use filter

          p1.deadPokemon.length = 6;


        } else if (charmanderHP4 >= 5 && squirtleHP4 === 0) {


          // confirm dead pokemon
          p1.deathValidator.pokemonDied = true;

          //confirm that the pokemon can no longer be selected
          computerCH.pokemonType[2].isSelected = false; // squirtle

          // record data to deadPokemon array as well
          p1.deadPokemon.push("Squirtle");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + p1.deadPokemon);

          // display computer deadPokemon
          p1.deadPokemonImage();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          p1.deadPokemon.length = 6;



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

      let charmanderHP2 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP2 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);

              if (charmanderHP2 <= 40 ) {



             document.getElementById("statusProgress").innerHTML=("Player1 pokemon health is low.");

             // update html progress bar --- see line on 232 for more details
                console.log("insert code here if needed on this line ");

        } else if (squirtleHP2 <= 40) {




             document.getElementById("statusProgress").innerHTML=("Computer pokemon health is low.");

             // update html progress bar --- see line on 232 for more details
                console.log("insert code here if needed on this line ");




           } // end of if statements


    } // end of informStatus function


    this.informWinner = function() {

      console.log("InformWinner function was called.");

      // informs the winner of the game and restarts it based on certain conditions.

      // new variable declartions to avoid reference error

      let charmanderHP3 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP3 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);



          if (charmanderHP3 === 0 && squirtleHP3 >= 1 ){

          console.log("debuggin--player1 pokemon is dead.");

          document.getElementById("statusProgress").innerHTML=("Your pokemon died. Pick another one to continue the battle.");

          p1.getHealth();


        } else if (charmanderHP3 >= 1 && squirtleHP3 === 0) {

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


    this.startGameMessage = function () {

      // disable attack and defense menu when computerMove and player1Move is false

      if(confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === false) {



        document.getElementById("statusProgress3").innerHTML=("Select a pokemon to begin the match!");

        player1CH.pokemonIndicator(); // displays pokemon icon image



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
    this.pokemonIndicator = function() {

      //This function informs the player of the remaining pokemon that is left using images

      //varible declartions
      let charmanderHP8 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP8 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);
      let demopokemon = 1; // replace demopokemon with actual pokemon name -- work on this later
      let demopokemon2 =2; // replace demopokemon with actual pokemon name -- work on this later
      let demopokemon3 =3; // replace demopokemon with actual pokemon name -- work on this later
      let demopokemon4 =4; // replace demopokemon with actual pokemon name -- work on this later

        if (charmanderHP8 >= 5 && squirtleHP8 >= 5) {

          // show default icon if both pokemon are live

          document.getElementById("charmanderIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmanderHeadIcon.jpeg" </img>';
          document.getElementById("charmanderIcon").style.width = 19;
          document.getElementById("charmanderIcon").style.height = 24;

          document.getElementById("PikachuIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/PikachuHeadIcon.jpeg" </img>';
          document.getElementById("PikachuIcon").style.width = 19;
          document.getElementById("PikachuIcon").style.height = 25;

          document.getElementById("BlastoiseIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/BlastoiseHeadIcon.jpeg" </img>';
          document.getElementById("BlastoiseIcon").style.width = 19;
          document.getElementById("BlastoiseIcon").style.height = 25;

        }// end of if statement

        if (charmanderHP8 === 0 && squirtleHP8 >= 5) {

          // remove previousicon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("charmanderIcon").appendChild(elem);
          document.getElementById("charmanderIcon").style.width = 19;
          document.getElementById("charmanderIcon").style.height = 24;

          // replace with new icon

          document.getElementById("charmanderIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmanderHeadDEAD.jpg" </img>';
          document.getElementById("charmanderIcon").style.width = 19;
          document.getElementById("charmanderIcon").style.height = 24;

        }else if (demopokemon === 0 && demopokemon2 >= 5) {

          // remove previous icon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("PikachuIcon").appendChild(elem);
          document.getElementById("PikachuIcon").style.width = 19;
          document.getElementById("PikachuIcon").style.height = 24;

          // replace with new icon

          document.getElementById("PikachuIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/PikachuHeadDead.jpg" </img>';
          document.getElementById("PikachuIcon").style.width = 19;
          document.getElementById("PikachuIcon").style.height = 24;

        }else if (demopokemon3 === 0 && demopokemon4 >= 5) {

          // remove previous icon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("BlastoiseIcon").appendChild(elem);
          document.getElementById("BlastoiseIcon").style.width = 19;
          document.getElementById("BlastoiseIcon").style.height = 24;

          // replace with new icon

          document.getElementById("BlastoiseIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/BlastoiseHeadDead.jpg" </img>';
          document.getElementById("BlastoiseIcon").style.width = 19;
          document.getElementById("BlastoiseIcon").style.height = 24;

        }// end of if statements





    }// end of pokemonIndicator


    this.debuggingOperation = function() {

      //default message for debuggingOperating function -- comment out if working on errors

    //  console.log("DebuggingOperation function is launched. There are no major issues here.");


      // debugging begins here -- actual code is on 236

        let x = 20;


        if (x === 0) {




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
      document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmander.gif" </img>';
      document.getElementById("Player1PokeImage").style.width = 200;
      document.getElementById("Player1PokeImage").style.height = 180;



        //Change boolean state so computer can make a move
         confirm.makeMove[0].player1Move = false;

         //set boolean stats to reflect computer selected pokemon
         computerCH.pokemonType[2].isSelected = true; // squirtle

         //set boolean stats to false for non-selected pokemon
         computerCH.pokemonType[0].isSelected = false;
         computerCH.pokemonType[1].isSelected = false;
         computerCH.pokemonType[3].isSelected = false;
         computerCH.pokemonType[4].isSelected = false;
         computerCH.pokemonType[5].isSelected = false;
         computerCH.pokemonType[6].isSelected = false;



         setTimeout(function (){

           // if player1 selects fire-type pokemon, computer will use a water-type pokemon

           let isPokemonFire = player1CH.pokemonType.filter(function(perfectMatch){

           if(perfectMatch.Type === "fire" && perfectMatch.isSelected === true){ // NOTE: use this as a else if statement instead...


           //load  water-type for computer pokemon
          document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/squirtle.gif" </img>';
          document.getElementById("CpuPokeImage").style.width = 320;
          document.getElementById("CpuPokeImage").style.height = 380;

          //load pokemon sound
          //computerSD.squirtleVO.play();

          //This function restores the default settings of the progress for player1 and computer
          defaultProgressBar.defaultHPSetting();

          //Display and save computer pokemon name to savedPokemonName2 on line 445
          document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
          computerCH.savedPokemonName2.push("Squirtle");

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

            document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Scyther.gif" </img>';
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

       document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise.gif" </img>';
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

      document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Pikachu.gif" </img>';
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
      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/squirtle.gif" </img>';
      document.getElementById("player1AttackImage").style.width = 200;
      document.getElementById("player1AttackImage").style.height = 180;

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

      document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/warturtle.gif" </img>';
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
    this.charmanderBackup =     [100];
    this.charmanderHpRecovered = [0];
    this.chaSpeedProgressBar =  [100];
    this.squirtleHealthBar =    [100];
    this.squirtleBackup =       [100];
    this.squirtleHpRecovered =  [0];
    this.squSpeedProgressBar =  [100];
    this.blastoiseHealthBar =   [100];
    this.blastoiseBackup =      [100];
    this.blastoiseHpRecovered = [0];
    this.blaSpeedProgressBar =  [100];
    this.scytherHealthBar =     [100];
    this.scytherBackup =        [100];
    this.scytherHpRecovered =   [0];
    this.scySpeedProgressBar =  [100];
    this.wartortleHealthBar =   [100];
    this.wartortleBackup =      [100];
    this.wartortleHpRecovered = [0];
    this.warSpeedProgressBar =  [100];
    this.charizardPokemonHealthBar =    [100];
    this.charizardPokemonBackup =       [100];
    this.charizardPokemonHpRecovered =  [0];
    this.charizardSpeedProgressBar =    [100];
    this.pikachuHealthBar =     [100];
    this.pikachuBackup =        [100];
    this.pikachuHpRecovered =   [0];
    this.pikSpeedProgressBar =  [100];


  } // end of constructor class
} // end of objectofArrays class

a1 = new objectofArrays;
a2 = new objectofArrays;
a3 = new objectofArrays;






class progressBar {
  constructor () {

    this.catchErrorFromSwitch = function () {

      //varible declartions

      let squirtleHP8 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);
      let charmanderHP9 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);


  if ( squirtleHP8 < 0 || squirtleHP8 > 100 || charmanderHP9 < 0 || charmanderHP9 > 100 ) {

    throw 'Error: Attack range is out of bounds. Review switch cases.';

  }else if (isNaN(squirtleHP8) || isNaN(charmanderHP9)) {

     throw "Error: The array(s) only accepts numbers.";

  } // end of else if statements


  try {

  // attempt to fix the problem and end the game.

    if( squirtleHP8 < 0 || squirtleHP8 > 100 || charmanderHP9 < 0 || charmanderHP9 > 100) {

        document.getElementById("statusProgress3").innerHTML = "An error occured in the game. Therefore it was terminated.";

        array1.getCharmanderHP();
        array2.getSquirtleHP();

    }else if (isNaN(squirtleHP8) || isNaN(charmanderHP9)) {

        document.getElementById("statusProgress3").innerHTML = "An error occured in the game. Therefore it was terminated.";



    }// end of if statements


} catch (reportError) {

  console.error(reportError);

}

    }// end of catchErrorFromSwitch function


    this.defaultHPSetting = function () {

      let player1DefaultHP = 100;
      let computerDefaultHP = 100;
      let player1DefaultSpeed = 100;
      let computerDefaultSpeed = 100;

      let squirtleHP6 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);
      let charmanderHP6 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);

      if (charmanderHP6 === 100 && squirtleHP6 === 100) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";

        // Add an else if statement later for the defaultSpeed and make player1 lose turn if defaultSpeed is zero but you will need to create an array for this to work...

        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";


      }// end of if statements



    }// end of defaultHPSetting

    this.decreaseComputerHP = function () {

      // variable declartions


      let hpDamage = 0;
      let hpRecovered = a2.squirtleHpRecovered.reduce(array2.PokemonRestoredReducer);
      let squirtleHP5 = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);
      let computerLowHealthIndicator = document.querySelector('.cpuHP');



      if (squirtleHP5 < 0 || squirtleHP5 >= 0  && computer.squirtleMovesActivated[0].squirtleFunction1of6 === true) {

        //if statement will change the variables in the switch statements to reflect changes to the progress bar


        switch(squirtleHP5 < 0 || squirtleHP5 >= 0) {


        case (squirtleHP5 === 0):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        p1.informWinner();
        break;

        case (squirtleHP5 > 0 && squirtleHP5 <= 20):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        break;

        case (squirtleHP5 > 20 && squirtleHP5 <= 40):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        computerLowHealthIndicator.style.backgroundColor = "#FD0202";
        break;

        case (squirtleHP5 > 40 && squirtleHP5 <= 100):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        break;

        default:
        defaultProgressBar.catchErrorFromSwitch();

  }// end of switch statement

        }// end of if statement

            } // end of decreaseComputerHP function


    this.decreasePlayerHP = function () {

      // variable declartions


      let hpDamage2 = 0;
      let hpRecovered2 = a1.charmanderHpRecovered.reduce(array1.PokemonRestoredReducer);
      let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let player1LowHealthIndicator = document.querySelector('.player1HP');



      if(charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction1of6 === true) {

        //if statement will change the variables in the switch statements to reflect changes to the progress bar


        switch(charmanderHP5 < 0 || charmanderHP5 >= 0) {

        case (charmanderHP5 === 0):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        comp.informWinner();
        break;

        case (charmanderHP5 > 0 && charmanderHP5 <= 20):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        break;

        case (charmanderHP5 > 20 && charmanderHP5 <= 40):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        player1LowHealthIndicator.style.backgroundColor = "#FD0202";
        break;

        case (charmanderHP5 > 40 && charmanderHP5 <= 100):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        break;

        default:
        defaultProgressBar.catchErrorFromSwitch();


}// end of switch statement

      }// end of if statement

          } // end of decreasePlayerHP function



this.increaseComputerHP = function () {

  // variable declartions

  let hpDamage = 0;
  let speedReduced = 0;
  let squirtleHP5 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced) + a2.squirtleHpRecovered.reduce(array2.PokemonRestoredReducer);
  let computerSPD =  a1.squSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
  // let computerSPD2,3,4 etc = other SpeedProgressBar -- that you can recycle the code and not have to re-create a new function
  let computerLowHealthIndicator2 = document.querySelector('.cpuHP');

  if (squirtleHP5 < 0 || squirtleHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction6of6 === true && computerSPD >= 0) {



    switch(squirtleHP5 < 0 || squirtleHP5 >= 0 || computerSPD < 0 || computerSPD >= 0) {

    case (squirtleHP5 === 0 || computerSPD === 0):

    hpDamage = squirtleHP5;
    document.querySelector(".cpuHP").style.width = hpDamage +   "%";

    speedReduced = computerSPD;
    document.querySelector(".cpuSpeed").style.width = speedReduced +   "%";
    p1.informWinner();
    //create code here for when computer speed progress bar is 0.
    console.log("no code at line 1536");
    break;

    case (squirtleHP5 > 0 && squirtleHP5 <= 20 || computerSPD > 0 && computerSPD <= 20):

    hpDamage = squirtleHP5;
    document.querySelector(".cpuHP").style.width = hpDamage +   "%";

    speedReduced = computerSPD;
    document.querySelector(".cpuSpeed").style.width = speedReduced +   "%";
    break;

    case (squirtleHP5 > 20 && squirtleHP5 <= 40 || computerSPD > 20 && computerSPD <= 40):

    hpDamage = squirtleHP5;
    document.querySelector(".cpuHP").style.width = hpDamage +   "%";
    computerLowHealthIndicator2.style.backgroundColor = "#A6EDED";

    speedReduced = computerSPD;
    document.querySelector(".cpuSpeed").style.width = speedReduced +   "%";
    break;

    case (squirtleHP5 > 40 && squirtleHP5 <= 100 || computerSPD > 40 && computerSPD <= 100):

    hpDamage = squirtleHP5
    document.querySelector(".cpuHP").style.width = hpDamage +   "%";

    speedReduced = computerSPD;
    document.querySelector(".cpuSpeed").style.width = speedReduced +   "%";
    break;

    default:
    defaultProgressBar.catchErrorFromSwitch();

  }// end of switch statement


        }// end if statements


            }// end of increaseComputerHP



this.increasePlayerHP = function () {

  // variable declartions

  console.log("increasePlayerHP has started");


  let hpDamage2 = 0;
  let speedReduced2 = 0;
  let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced) + a1.charmanderHpRecovered.reduce(array1.PokemonRestoredReducer);
  let player1SPD    = a1.chaSpeedProgressBar.reduce(array1.PokemonSpeedReduced);
  // let player1SPD2,3,4 etc.. = other SpeedProgressBar so that you can recycle the code and not have to re-create a new function.
  let player1LowHealthIndicator2 = document.querySelector('.player1HP');

  console.log("charmanderHP5 output:" + charmanderHP5);
  console.log("player1SPD output:" + player1SPD);

  if (charmanderHP5 < 0 || charmanderHP5 >= 0  && player1.charmanderMoves[0].charmanderFunction6of6 === true && player1SPD >= 0) {


   switch(charmanderHP5 < 0 || charmanderHP5 >= 0 || player1SPD < 0  || player1SPD >= 0) {

   case (charmanderHP5 === 0 || player1SPD === 0):

   hpDamage2 = charmanderHP5;
   document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
   comp.informWinner();

   speedReduced = player1SPD;
   document.querySelector(".playerSpeed").style.width = speedReduced2 +   "%";
   //create a code here for when player1speedbar is 0.
   console.log("no code added for line 1605");
   break;

   case (charmanderHP5 > 0 && charmanderHP5 <= 20 || player1SPD > 0  && player1SPD <= 20):

   hpDamage2 = charmanderHP5;
   document.querySelector(".player1HP").style.width = hpDamage2 +   "%";

   speedReduced = player1SPD;
   document.querySelector(".playerSpeed").style.width = speedReduced2 +   "%";
   break;

   case (charmanderHP5 > 20 && charmanderHP5 <= 40 || player1SPD > 20  && player1SPD <= 40):

   hpDamage2 = charmanderHP5;
   document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
   player1LowHealthIndicator2.style.backgroundColor = "#A6EDED";

   speedReduced = player1SPD;
   document.querySelector(".playerSpeed").style.width = speedReduced2 +   "%";
   break;

   case (charmanderHP5 > 40 && charmanderHP5 <= 100 || player1SPD > 40  && player1SPD <= 100):

   hpDamage2 = charmanderHP5;
   document.querySelector(".player1HP").style.width = hpDamage2 +   "%";

   speedReduced = player1SPD;
   document.querySelector(".playerSpeed").style.width = speedReduced2 +   "%";
   break;

   default:
   defaultProgressBar.catchErrorFromSwitch();


 }// end if switch statement


       }// end of if statements


            }// end of increasePlayerHP



        } // end of progressBar constructor

          } // end of prograssBar class








charmanderProgressBar = new progressBar;
squirtleProgressBar = new progressBar;
defaultProgressBar = new progressBar;



class arrayFunctions {

  constructor () {

    this.retreiverAndResolver = function () {
      //retreiverAndResolver is a getter and setter function and will be used to fitch and retreive data from outside this class.

      //find the value of previousHP from charmander and squirtle and create a function to find and restore the difference of HP.
      let charmanderPreviousHP = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtlePreviousHP =   a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);

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
    mirror.createData = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
    console.log(mirror.arrayCopy); // 400
    console.log(typeof mirror.arrayCopy);

    */


    } // end of retreiverAndResolver






    this.checkTheStatus = function () {

      // varible declartions

      let charmanderHP = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP = a2.squirtleHealthBar.reduce(array1.PokemonHPReduced);


      // create a reduce function for charmanderHealthBar and squirtleHealthBar
      console.log("charmanderHealthBar array was reduced to: " + charmanderHP);
      console.log("squirtleHealthBar array was reduced to: "+ squirtleHP);

      //create a logic based on the output for the reduce function and call other functions if conditions are true

      if(charmanderHP >= 20 &&  charmanderHP <= 40 || squirtleHP >= 20 &&  squirtleHP <= 40){

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

    this.PokemonSpeedReduced = function (accumulator, currentValue) {


          return accumulator + currentValue;
      };


    this.getCharmanderHP =  function () {


      a1.charmanderHealthBar.filter((element, index, array))

      console.log("Results from getCharmanderHP: " + element);
      return element === 45;
    }


    this.getSquirtleHP   =  function () {

      a1.squirtleHealthBar.filter((element, index, array))

      console.log("Results from getSquirtleHP: " + element);
      return element === 30;
    }

  } // end of constructor
} // end of arrayArrows class



array1 = new arrayFunctions;
array2 = new arrayFunctions;



class Sleep {
  constructor () {
    this.restedPokemon = false;
    this.restedPokemonArray = [];
    this.charmanderRestoredHPBackup = [0];


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

           //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
           //fireBlaster does -10 damage on squirtle
            a2.squirtleHealthBar.push(-10);
            a2.squirtleBackup.push(-10);

          //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
            charmanderProgressBar.decreaseComputerHP();

           //debugging here -----------------------------------
            console.log("squirtleHealthBar array is " + a2.squirtleHealthBar);
            console.log("squirtleBackup array is " + a2.squirtleBackup);

            // show image
             player1Img.chrAtkImage1();

             //change boolean state so that computer can attack
             confirm.makeMove[0].player1Move = false;
             confirm.makeMove[0].computerMove = true;

             console.log(confirm.makeMove[0]);


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

       //reflect the changes to the charmanderHpRecovered array only because charmanderHealthBarBackup will eventually have this data when the array is reduced.
       a1.charmanderHpRecovered.push(45);

       // player1 speed progressbar needs to reflect changes if the rest function was clicked.
       a1.chaSpeedProgressBar.push(-50); // Sets charmanders speedbar to 50%

       //This is the function that applies the reduce method to the arrays listed below. player1 recovers HP if certain conditions are true.
       charmanderProgressBar.increasePlayerHP();

       //record rest action that was taken as it will be used later.
       restore.restedPokemon = true;
       restore.restedPokemonArray.push("Charmander");
      // a1.charmanderBackup.push(45); this is the regular backup for hpDamage -- delete it when neccessary
       restore.charmanderRestoredHPBackup.push(45);

       //debugging--------------------------------------
       console.log("The following pokemon health was restored: " + restore.restedPokemonArray);
       console.log("This is how much HP was restored: " + restore.charmanderRestoredHPBackup);
       console.log("charmanderBackup array BEFORE health was restored (commented out on line 1934): " + a1.charmanderBackup);

       // show recovery image
       player1Img.pokRecImage1();

       //change boolean state so that computer can attack
       confirm.makeMove[0].player1Move = false;
       confirm.makeMove[0].computerMove = true;

       console.log(confirm.makeMove[0]);

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

          //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
          a1.charmanderHealthBar.push(-20);
          a1.charmanderBackup.push(-20);


          //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
          squirtleProgressBar.decreasePlayerHP();

          // This is the function that applies the filter to the arrays listed above. It also calls other functions
          array1.checkTheStatus();

          //debugging here------------------------------------------------------

          console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

          // get the status of health for player1 and computer pokemon

          console.log("charmanderBackup array is " +a1.charmanderBackup);

          // inform player1 of attack from computer  <-- try to create a function to make this code better -- make it more abstract so all pokemon can use this function
          document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Bubble Beam!";

          //show attack image
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




//This function needs to be called here as well to inform player1 to select a pokemon at the start of the game
confirm.startGameMessage();




function attackA() {

console.log(confirm.makeMove[0]);

player1.thunderShockMove();
player1.fireBlasterMove();
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




}

function attackC() {






}



function defenseA() {







}

function defenseB() {






}

function defenseC() {


player1.rest();




}
