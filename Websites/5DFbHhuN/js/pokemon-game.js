
/*
NOTE:
Lastest update: (11/01/2021)


x0) pokemon-game.js:1292 Uncaught Error: Attack range is out of bounds. Review switch cases. Comment out this line so you can troubleshoot charmander attack function 1,2 and 3.
x1) Troubleshoot line 2079 (squirleMoves) and line 1581 (increasePlayerHP) --- find out why charmander speed progress bar is NOT decreasing and why charmander's health is not increasing when rest function is called.  *high priority*
x2) retreiverAndResolver formula on line 2952 needs to corrected. *low priority*
x3) on line 1069 chrPokeImage -- you need to figure out a way to save and restore array when switching pokemon then copy code from 1069 to pikPokeImage and blaPokeImage *high priority*
x4) squirtleMoves on lines 3425 to 3744 -- scytherMoves on lines 3747 to 4063 -- onixMoves on lines 4074 to 4404
y) Created debuggingOperation() on line 741 -- working on switching pokemon --
z) disabled the restart function on line 361 informWinner() to work on line 222
1) Work on disabling dead pokemon -- see function at line 206 -- note: this is the same problem as line 22
2) troubleshoot defaultHPSetting on line 2272 + squirtleMoves + loadPikachu functions and make switching pokemon possible by loading the correct array for each pokemon the player selects  ***** 10/22/2021
2.1) Add new waiting mechanism for when computer selects a pokemon [42% completed]
2.2) Fix new waiting mechanism so that player1 can pick a pokemon when they click on it again but NOT when it's the computers turn. notify user if this happens. start with charmander and turn sound off first. ;)
3) find a way to restore pokemon healthbBar after switching pokemon -- note: need at least two pairs of pokemon that are functional (currently only have 1 pair).
3a) why is Computer health status is undefined on line 1149? maybe because it's a function?
3b) show an indictator of the dead pokemon of the total left (3) -- work on that later --  see line 225
3c) call a switch statement on line 1443 for loadScytherOnly function *************************************************************************************************************************** 10/8/2021
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



    this.chrAtkImage1 = function () {  // image 1 of 6

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/fireBlaster.gif" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("player1AttackImage").innerHTML=("");

        }, 5000); // 5 sec wait time

    }

      this.chrAtkImage2 = function () {  // image 2 of 6

        document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blaze.png" </img>';
        document.getElementById("player1AttackImage").style.width = 180;
        document.getElementById("player1AttackImage").style.height = 100;

        setTimeout(function() { // This is an anonymous callback function

          // remove attack image after 5 secs
          document.getElementById("player1AttackImage").innerHTML=("");

          }, 5000); // 5 sec wait time

      }

        this.chrAtkImage3 = function () {  // image 3 of 6

          document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/solarbeam.png" </img>';
          document.getElementById("player1AttackImage").style.width = 180;
          document.getElementById("player1AttackImage").style.height = 100;

          setTimeout(function() { // This is an anonymous callback function

            // remove attack image after 5 secs
            document.getElementById("player1AttackImage").innerHTML=("");

          }, 5000); // 5 sec wait time



    }

    this.chrAtkImage4 = function () {  // image 4 of 6

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/growl.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time



}

this.chrAtkImage5 = function () {  // image 5 of 6

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/smokescreen.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 5 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 5000); // 5 sec wait time



}

this.chrAtkImage6 = function () {  // image 6 of 6 attack image needs to show on player1 side because of self-healing

  document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
  document.getElementById("computerAttackImage").style.width = 180;
  document.getElementById("computerAttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 5 secs
    document.getElementById("computerAttackImage").innerHTML=("");

  }, 5000); // 5 sec wait time



}


    this.scyAtkImage1 = function () { // image 1 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/slash.gif" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.squAtkImage1 = function () { // image 1 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/bubbles-gif.gif" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }

    this.squAtkImage2 = function () { // image 2 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/TailWhip.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }


    this.squAtkImage3 = function () { // image 3 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/waterPulse.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }


    this.squAtkImage4 = function () { // image 4 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/tackle.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }

    this.squAtkImage5 = function () { // image 5 of 6

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/watergun.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }


    this.squAtkImage6 = function () { // image 6 of 6 attack image needs to show on computer side because of self-healing

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("player1AttackImage").innerHTML=("");

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
     this.onixVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/OnixVoice.mp3');
     this.pikachuVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/PikachuVoice.mp3');
     this.pokemonBattleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/gameboy_battleTheme.mp3');
     this.pokemonVictoryVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/victoryThemezz.mp3');
     this.scytherVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/ScytherVoice.wav');
     this.squirtleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/SquirtleVoicezzz.mp3');
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
      player1SD.onixVO.pause();
      player1SD.pikachuVO.pause();
      player1SD.scytherVO.pause();
      player1SD.squirtleVO.pause();







    }

    }


  } // end of soundclass



player1SD = new sound;
computerSD = new sound;





class referee {

  constructor (){
    this.pokemonName = ["Charmander","Scyther","Blastoise","Onix","Squirtle","Pikachu"];
    this.deadPokemon = []; // NOTE: This is an empty array that will be used later -- see line 370 (getHealth) for details.
    this.deathValidator = {pokemonDied:false};
    this.disableDeadPokemon = function () {

      let charmanderHP10 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP9 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP9 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP9 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP9 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP9 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

      console.log("disableDeadPokemon was activated.");

      // consider upgrading this statement to a switch later

      if (charmanderHP10 === 0 && p1.deadPokemon[0] === "Charmander") {

        // change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions

        //below is the original if statment

        document.getElementById("p1PokemonName").innerHTML = "";
        document.getElementById("Charmander_sel").style.color = "#C91212";
        document.getElementById("Charmander_sel").removeEventListener("click", player1CH.chrPokeImage);
        document.getElementById("attackA").removeEventListener("click", attackA);
        document.getElementById("attackB").removeEventListener("click", attackB);
        document.getElementById("attackC").removeEventListener("click", attackC);
        document.getElementById("defenseA").removeEventListener("click", defenseA);
        document.getElementById("defenseB").removeEventListener("click", defenseB);
        document.getElementById("defenseC").removeEventListener("click", defenseC);
        document.getElementById("attackA").innerHTML = ("");
        document.getElementById("attackB").innerHTML = ("");
        document.getElementById("attackC").innerHTML = ("");
        document.getElementById("defenseA").innerHTML = ("");
        document.getElementById("defenseB").innerHTML = ("");
        document.getElementById("defenseC").innerHTML = ("");



      }// end of 1st if statement

        // same conditions for other player1 pokemon
        else if (pikachuHP9 === 0 && p1.deadPokemon[0] === "Pikachu") {


          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Pikachu_sel").style.color = "#C91212";
          document.getElementById("Pikachu_sel").removeEventListener("click", player1CH.pikPokeImage);
          document.getElementById("attackA").removeEventListener("click", attackA);
          document.getElementById("attackB").removeEventListener("click", attackB);
          document.getElementById("attackC").removeEventListener("click", attackC);
          document.getElementById("defenseA").removeEventListener("click", defenseA);
          document.getElementById("defenseB").removeEventListener("click", defenseB);
          document.getElementById("defenseC").removeEventListener("click", defenseC);
          document.getElementById("attackA").innerHTML = ("");
          document.getElementById("attackB").innerHTML = ("");
          document.getElementById("attackC").innerHTML = ("");
          document.getElementById("defenseA").innerHTML = ("");
          document.getElementById("defenseB").innerHTML = ("");
          document.getElementById("defenseC").innerHTML = ("");

        }//end of 2nd if statement

        else if (blastoiseHP9 === 0 && p1.deadPokemon[0] === "Blastoise") {

          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Blastoise_sel").style.color = "#C91212";
          document.getElementById("Blastoise_sel").removeEventListener("click", player1CH.blaPokeImage);
          document.getElementById("attackA").removeEventListener("click", attackA);
          document.getElementById("attackB").removeEventListener("click", attackB);
          document.getElementById("attackC").removeEventListener("click", attackC);
          document.getElementById("defenseA").removeEventListener("click", defenseA);
          document.getElementById("defenseB").removeEventListener("click", defenseB);
          document.getElementById("defenseC").removeEventListener("click", defenseC);
          document.getElementById("attackA").innerHTML = ("");
          document.getElementById("attackB").innerHTML = ("");
          document.getElementById("attackC").innerHTML = ("");
          document.getElementById("defenseA").innerHTML = ("");
          document.getElementById("defenseB").innerHTML = ("");
          document.getElementById("defenseC").innerHTML = ("");

        }//end of 3rd if statement




        else if (squirtleHP9 === 0 && p1.deadPokemon[0] === "Squirtle") {

        //cross-out computer pokemon icon if conditions are valid.

        // remove squirtle icon

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("squirtleIcon").appendChild(elem);
        document.getElementById("squirtleIcon").style.width = 34;
        document.getElementById("squirtleIcon").style.height = 46;

        // replace with new squirtle icon

        document.getElementById("squirtleIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/SquirtleHeadDead.png" </img>';
        document.getElementById("squirtleIcon").style.width = 34;
        document.getElementById("squirtleIcon").style.height = 46;

        // load another computer pokemon
        computerCH.loadOnixOnly();

      }// end of 4th if statement

        //same condition for other computer icons
        else if (scytherHP9 === 0 && p1.deadPokemon[0] === "Scyther") {


          // remove scyther icon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("ScytherIcon").appendChild(elem);
          document.getElementById("ScytherIcon").style.width = 34;
          document.getElementById("ScytherIcon").style.height = 46;

          // replace with new squirtle icon

          document.getElementById("ScytherIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scytherHeadDead.png" </img>';
          document.getElementById("ScytherIcon").style.width = 34;
          document.getElementById("ScytherIcon").style.height = 46;

          // load another computer pokemon
          computerCH.loadOnixOnly();

        }//end of 5th if statement

        else if (onixHP9 === 0 && p1.deadPokemon[0] === "Onix") {



          // remove onix icon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("OnixIcon").appendChild(elem);
          document.getElementById("OnixIcon").style.width = 34;
          document.getElementById("OnixIcon").style.height = 46;

          // replace with new squirtle icon

          document.getElementById("OnixIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/OnixHeadDead.png" </img>';
          document.getElementById("OnixIcon").style.width = 34;
          document.getElementById("OnixIcon").style.height = 46;

          // load another computer pokemon
          computerCH.loadOnixOnly();



        }//end of 6th statement








}// end of disableDeadPokemon






    this.deadPokemonImage = function () {

      // variable declartions
      let charmanderHP7 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP7 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP8 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP8 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP8 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP8 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

      //load pokemon tombstone image based on certain conditions.

      if (charmanderHP7 === 0 && squirtleHP7 >= 5) {

          //Inform player that pokemon is dead but let the game continue

          //orginal if statement is below
          document.getElementById("statusProgress").innerHTML=(p1.deadPokemon +" died. Please choose next pokemon.");


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


          // Change boolean state so player1 can't make a move
          confirm.makeMove[0].computerMove = true;

          // inform player1 that it's the computer turn to attack
          document.getElementById("statusProgress3").innerHTML = "It's the computers turn to attack or switch pokemon. --- debugging here***";

          setTimeout(function() {

         // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
         p1.disableDeadPokemon()

         // give score to computer array

         a2.computerScore.push(1);
         let score2 = a2.computerScore.reduce(array2.PokemonHPReduced);
         console.log("Computer Score: " + score2);


           },3000); // 3 sec wait time for computer to select pokemon

         }//end of 1st if statement

          //same conditions for other player1 pokemon
          else if (pikachuHP8 === 0 && scytherHP8 >= 5) {
            document.getElementById("statusProgress").innerHTML=(p1.deadPokemon +" died. Please choose next pokemon.");

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


            // Change boolean state so player1 can't make a move
            confirm.makeMove[0].computerMove = true;

            // inform player1 that it's the computer turn to attack
            document.getElementById("statusProgress3").innerHTML = "It's the computers turn to attack or switch pokemon. --- debugging here***";

            setTimeout(function() {

           // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
           p1.disableDeadPokemon()

           // give score to computer array

           a2.computerScore.push(1);
           let score2 = a2.computerScore.reduce(array2.PokemonHPReduced);
           console.log("Computer Score: " + score2);


             },3000); // 3 sec wait time for computer to select pokemon

          }//end of 2nd if statement


          else if (blastoiseHP8  === 0 && onixHP8 >= 5) {
            document.getElementById("statusProgress").innerHTML=(p1.deadPokemon +" died. Please choose next pokemon.");

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


            // Change boolean state so player1 can't make a move
            confirm.makeMove[0].computerMove = true;

            // inform player1 that it's the computer turn to attack
            document.getElementById("statusProgress3").innerHTML = "It's the computers turn to attack or switch pokemon. --- debugging here***";

            setTimeout(function() {

           // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
           p1.disableDeadPokemon()

           // give score to computer array

           a2.computerScore.push(1);
           let score2 = a2.computerScore.reduce(array2.PokemonHPReduced);
           console.log("Computer Score: " + score2);


             },3000); // 3 sec wait time for computer to select pokemon

          }//end of 3rd if statement






         //load computer pokemon tombstone image based on certain conditions.

        else if (squirtleHP7 === 0 && charmanderHP7 >= 5) {

        //Inform player computer pokemon died but let the game continue

        //original if statement is below
        document.getElementById("statusProgress").innerHTML=(p1.deadPokemon +" died. Please wait for computer to select the next pokemon.");

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

        p1.disableDeadPokemon();

       // give score to player1 array

       a1.player1Score.push(1);
       let score1 = a1.player1Score.reduce(array1.PokemonHPReduced);
       console.log("Player1 Score: " + score1);


         },3000); // 3 sec wait time for computer to select pokemon



      }//end of 4th if statement


          //same conditions for other computer pokemon
          else if (scytherHP8 === 0 && pikachuHP8 >= 5) {

          document.getElementById("statusProgress").innerHTML=(p1.deadPokemon +" died. Please wait for computer to select the next pokemon.");

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

          p1.disableDeadPokemon();

         // give score to player1 array

         a1.player1Score.push(1);
         let score1 = a1.player1Score.reduce(array1.PokemonHPReduced);
         console.log("Player1 Score: " + score1);


           },3000); // 3 sec wait time for computer to select pokemon

        }//end of 5th if statement


          else if (onixHP8  === 0 && blastoiseHP8 >= 5) {


          document.getElementById("statusProgress").innerHTML=(p1.deadPokemon +" died. Please wait for computer to select the next pokemon.");

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

          p1.disableDeadPokemon();

         // give score to player1 array

         a1.player1Score.push(1);
         let score1 = a1.player1Score.reduce(array1.PokemonHPReduced);
         console.log("Player1 Score: " + score1);


           },3000); // 3 sec wait time for computer to select pokemon

        }//end of 6th if statement








}// end of deadPokemonImage function


    this.isCharmanderDead = function() {

      console.log("isCharmanderDead was started");

      // new variable declartions to avoid reference error

      let charmanderHP4 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP4 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP5 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP5 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP5 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP5 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);



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

          //make changes to pokemon indicator icon
          player1CH.pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

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


} // end of isCharmanderDead function






this.isPikachuDead = function() {

  console.log("isPikachuDead was started");

  // new variable declartions to avoid reference error

  let charmanderHP4 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
  let squirtleHP4 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
  let pikachuHP6 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
  let scytherHP6 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
  let blastoiseHP6 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
  let onixHP6 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);




    if (pikachuHP6 === 0 && scytherHP6 >= 5) {

      // confirm dead pokemon
      p1.deathValidator.pokemonDied = true;

      //confirm that the pokemon can no longer be selected
      player1CH.pokemonType[2].isSelected = false; // pikachu

      //record data to deadPokemon array as well
      p1.deadPokemon.push("Pikachu");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);

      //display player1 deadPokemon
      p1.deadPokemonImage();

      //make changes to pokemon indicator icon
      player1CH.pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 6;


    } else if (pikachuHP6 >= 5 && scytherHP6 === 0) {


      // confirm dead pokemon
      p1.deathValidator.pokemonDied = true;

      //confirm that the pokemon can no longer be selected
      computerCH.pokemonType[3].isSelected = false; // Scyther

      // record data to deadPokemon array as well
      p1.deadPokemon.push("Scyther");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);

      // display computer deadPokemon
      p1.deadPokemonImage();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 6;



    } // end of if statements


} // end of isPikachuDead function






this.isBlastoiseDead = function() {

  console.log("isBlastoiseDead was started");

  // new variable declartions to avoid reference error

  let charmanderHP4 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
  let squirtleHP4 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
  let pikachuHP7 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
  let scytherHP7 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
  let blastoiseHP7 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
  let onixHP7 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);



    if (blastoiseHP7 === 0 && onixHP7 >= 5) {

      // confirm dead pokemon
      p1.deathValidator.pokemonDied = true;

      //confirm that the pokemon can no longer be selected
      player1CH.pokemonType[1].isSelected = false; // blastoise

      //record data to deadPokemon array as well
      p1.deadPokemon.push("Blastoise");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);

      //display player1 deadPokemon
      p1.deadPokemonImage();

      //make changes to pokemon indicator icon
      player1CH.pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 6;


    } else if (blastoiseHP7 >= 5 && onixHP7 === 0) {


      // confirm dead pokemon
      p1.deathValidator.pokemonDied = true;

      //confirm that the pokemon can no longer be selected
      computerCH.pokemonType[4].isSelected = false; // onix

      // record data to deadPokemon array as well
      p1.deadPokemon.push("Onix");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);

      // display computer deadPokemon
      p1.deadPokemonImage();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 6;



    } // end of if statements


} // end of isBlastoiseDead function








    this.informStatus = function() {

      console.log("InformStatus function was called.");

      //inform pokemon health status when each pokemon have low health

      // varible declartions

      let charmanderHP2 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP2 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP3 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP3 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP3 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP3 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);


              if (charmanderHP2 <= 40 || pikachuHP3 <= 40 ||blastoiseHP3 <= 40) {



             document.getElementById("statusProgress").innerHTML=("Player1 pokemon health is low.");


                console.log("insert code here if needed on this line ");

        } else if (squirtleHP2 <= 40|| scytherHP3 <= 40 || onixHP3 <= 40) {




             document.getElementById("statusProgress").innerHTML=("Computer pokemon health is low.");


                console.log("insert code here if needed on this line ");




           } // end of if statements


    } // end of informStatus function


    this.informWinner = function() {

      console.log("InformWinner function was called.");

      // informs the winner of the game and restarts it based on certain conditions.

      // variable declartions

      let charmanderHP3 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP3 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP4 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP4 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP4 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP4 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

          //conditions to execute if computer defeats player1 pokemon are below

          if (charmanderHP3 === 0 && squirtleHP3 >= 1){


            document.getElementById("statusProgress").innerHTML=("Your pokemon died. Pick another one to continue the battle.");

            p1.isCharmanderDead();

          }//end of 1st if statement


          else if (pikachuHP4 === 0 && scytherHP4 >= 1) {


            document.getElementById("statusProgress").innerHTML=("Your pokemon died. Pick another one to continue the battle.");

            p1.isPikachuDead();

          }//end of 2nd if statement

          else if (blastoiseHP4 === 0 && onixHP4 >= 1) {


            document.getElementById("statusProgress").innerHTML=("Your pokemon died. Pick another one to continue the battle.");

            p1.isBlastoiseDead();

          }//end of 3rd if statement



          //conditions to execute if player1 defeats computer pokemon are below

         else if (charmanderHP3 >= 1 && squirtleHP3 === 0) {


           document.getElementById("statusProgress").innerHTML=("Player1 won the match... Game will restart automatically (fix this later).");

           p1.isCharmanderDead();

         }// end of 4th if statement



          else if (pikachuHP4 >= 1 && scytherHP4 === 0) {



            document.getElementById("statusProgress").innerHTML=("Player1 won the match... Game will restart automatically (fix this later).");

            p1.isPikachuDead();

          }//end of 5th if statement



          else if (blastoiseHP4 >= 1 && onixHP4 === 0) {


            document.getElementById("statusProgress").innerHTML=("Player1 won the match... Game will restart automatically (fix this later).");

            p1.isBlastoiseDead();

          }//end of 6th if statement











            }//end of InformWinner function




      }//end of constructor class


}//end of referee class





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
    this.player1PokemonChoices = ["Charmander","Blastoise", "Pikachu"];
    this.ComputerPokemonChoices = ["Scyther", "Onix","Squirtle"];
    this.pokemonIndicator = function() {

      //This function informs the player of the remaining pokemon that is left using images

      //varible declartions
      let charmanderHP8 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP8 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP10 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP10 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP10 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP10 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

        if (charmanderHP8 >= 5 && squirtleHP8 >= 5 || pikachuHP10 >= 5 && scytherHP10 >= 5 || blastoiseHP10 >= 5 && onixHP10 >= 5) {

          // show default icon if both pokemon are live

          //player1 pokemon icons are here

          document.getElementById("charmanderIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmanderHeadIcon.png" </img>';
          document.getElementById("charmanderIcon").style.width = 34;
          document.getElementById("charmanderIcon").style.height = 46;

          document.getElementById("PikachuIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/PikachuHeadIcon.png" </img>';
          document.getElementById("PikachuIcon").style.width = 34;
          document.getElementById("PikachuIcon").style.height = 46;

          document.getElementById("BlastoiseIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/BlastoiseHeadIcon.png" </img>';
          document.getElementById("BlastoiseIcon").style.width = 34;
          document.getElementById("BlastoiseIcon").style.height = 46;

          //computer pokemon icons are here

          document.getElementById("squirtleIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/SquirtleHead.png" </img>';
          document.getElementById("squirtleIcon").style.width = 34;
          document.getElementById("squirtleIcon").style.height = 46;

          document.getElementById("ScytherIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scytherHead.png" </img>';
          document.getElementById("ScytherIcon").style.width = 34;
          document.getElementById("ScytherIcon").style.height = 46;

          document.getElementById("OnixIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/OnixHead.png" </img>';
          document.getElementById("OnixIcon").style.width = 34;
          document.getElementById("OnixIcon").style.height = 46;

        }// end of if statement

        if (charmanderHP8 === 0 && squirtleHP8 >= 5) {

          // remove previousicon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("charmanderIcon").appendChild(elem);
          document.getElementById("charmanderIcon").style.width = 34;
          document.getElementById("charmanderIcon").style.height = 46;

          // replace with new icon

          document.getElementById("charmanderIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmanderHeadDEAD.png" </img>';
          document.getElementById("charmanderIcon").style.width = 34;
          document.getElementById("charmanderIcon").style.height = 46;

        }else if (pikachuHP10 === 0 && scytherHP10 >= 5) {

          // remove previous icon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("PikachuIcon").appendChild(elem);
          document.getElementById("PikachuIcon").style.width = 34;
          document.getElementById("PikachuIcon").style.height = 46;

          // replace with new icon

          document.getElementById("PikachuIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/PikachuHeadDead.jpg" </img>';
          document.getElementById("PikachuIcon").style.width = 34;
          document.getElementById("PikachuIcon").style.height = 46;

        }else if (blastoiseHP10 === 0 && onixHP10 >= 5) {

          // remove previous icon

          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("BlastoiseIcon").appendChild(elem);
          document.getElementById("BlastoiseIcon").style.width = 34;
          document.getElementById("BlastoiseIcon").style.height = 46;

          // replace with new icon

          document.getElementById("BlastoiseIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/BlastoiseHeadDead.png" </img>';
          document.getElementById("BlastoiseIcon").style.width = 34;
          document.getElementById("BlastoiseIcon").style.height = 46;

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


    this.pokemonType = [{Type: "fire", pokemonName: this.player1PokemonChoices[0], isSelected: false,    character:"Charmander"},    // charmander
                       {Type: "water", pokemonName:  this.player1PokemonChoices[1], isSelected: false,   character:"Blastoise"},    // blastoise
                       {Type: "electric", pokemonName: this.player1PokemonChoices[2], isSelected: false, character:"Pikachu"},     // pikachu
                       {Type: "grass", pokemonName: this.ComputerPokemonChoices[0], isSelected: false,   character:"Scyther"},    // Scyther
                       {Type: "rock", pokemonName: this.ComputerPokemonChoices[1], isSelected: false,    character:"Onix"},     // onix
                       {Type: "water", pokemonName: this.ComputerPokemonChoices[2], isSelected: false,   character:"Squirtle"} //squirtle
                        ];

    this.savedPokemonName = []; // NOTE: empty array of that will be filled with pokemon names to be used later  -- the 1st one will be used to make the game more challenging for player1 -- see squPokeImage2 on line 699 for examples
    this.savedPokemonName2 = []; // NOTE: empty array of that will be filled with pokemon names to be used later -- the 2nd one will be used for storing names only







    this.chrPokeImage =  function () {

      let score0 = a1.player1Score.reduce(array1.PokemonHPReduced);


      confirm.makeMove[0].player1Move = true;


      if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {

      // set boolean stats to true when user selects a pokemon
      player1CH.pokemonType[0].isSelected = true;   // charmander
      // set boolean stats to false for non-selected pokemon
      player1CH.pokemonType[1].isSelected = false; // blastoise
      player1CH.pokemonType[2].isSelected = false; // pikachu


      // inform player1 of pokemon change
      document.getElementById("statusProgress3").innerHTML =("You seleted " + player1CH.player1PokemonChoices[0]+ ". " + " Computer will now select a pokemon.");

      // Wait 6 secs and inform player1 that they can begin attacking computer pokemon
      setTimeout(function() {

      document.getElementById("statusProgress3").innerHTML =("You can now attack or switch pokemon.");

    }, 6000); // 6 secs


      //load pokemon attack/defense menu
      document.getElementById("attackA").innerHTML = ("Fire Blaster (-20HP)");
      document.getElementById("attackB").innerHTML = ("Blaze (-10HP)");
      document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

      document.getElementById("defenseA").innerHTML = ("Growl (-10HP)");
      document.getElementById("defenseB").innerHTML = ("Smokescreen (-20HP)");
      document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");


      //load pokemon name
      document.getElementById("p1PokemonName").innerHTML = player1CH.player1PokemonChoices[0]; //charmander

      //load pokemon sound
      //player1SD.charmanderVO.play();

      //if squirtle dies then player1 can't restore it by selecting charmander again.
      if (p1.deathValidator.pokemonDied === true && p1.deadPokemon[0] === "Squirtle") {

        //remove previous pokemon character
        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("Player1PokeImage").appendChild(elem);
        document.getElementById("Player1PokeImage").style.width = 200;
        document.getElementById("Player1PokeImage").style.height = 180;

        //reload player1 pokemon
        document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmander.gif" </img>';
        document.getElementById("Player1PokeImage").style.width = 200;
        document.getElementById("Player1PokeImage").style.height = 180;

        setTimeout(function (){

        computerCH.loadOnixOnly();

        },6000); // 6 sec wait time to load computer pokemon




      //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
    }else if (p1.deathValidator.pokemonDied === true && p1.deadPokemon[0] === "Charmander") {

        // change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions
        // this function is also in disableDeadPokemon() but needs to be called again because this function re-enables player1 pokemon.

        document.getElementById("p1PokemonName").innerHTML = "";
        document.getElementById("Charmander_sel").style.color = "#C91212";
        document.getElementById("Charmander_sel").removeEventListener("click", player1CH.chrPokeImage);
        document.getElementById("attackA").removeEventListener("click", attackA);
        document.getElementById("attackB").removeEventListener("click", attackB);
        document.getElementById("attackC").removeEventListener("click", attackC);
        document.getElementById("defenseA").removeEventListener("click", defenseA);
        document.getElementById("defenseB").removeEventListener("click", defenseB);
        document.getElementById("defenseC").removeEventListener("click", defenseC);
        document.getElementById("attackA").innerHTML = ("");
        document.getElementById("attackB").innerHTML = ("");
        document.getElementById("attackC").innerHTML = ("");
        document.getElementById("defenseA").innerHTML = ("");
        document.getElementById("defenseB").innerHTML = ("");
        document.getElementById("defenseC").innerHTML = ("");



      //if player1 doesn't have a score then allow squirtle (computer pokemon) to battle with charmander (default choice).
    }else if (score0 === 0) {

      //re-activate active listener again because it was disabled in a different scenario.
      document.getElementById("attackA").addEventListener("click", attackA);
      document.getElementById("attackB").addEventListener("click", attackB);
      document.getElementById("attackC").addEventListener("click", attackC);
      document.getElementById("defenseA").addEventListener("click", defenseA);
      document.getElementById("defenseB").addEventListener("click", defenseB);
      document.getElementById("defenseC").addEventListener("click", defenseC);


      // load player1 pokemon
      document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmander.gif" </img>';
      document.getElementById("Player1PokeImage").style.width = 200;
      document.getElementById("Player1PokeImage").style.height = 180;



     setTimeout(function (){

       // if player1 selects fire-type pokemon, computer will use a water-type pokemon

       let isPokemonFire = player1CH.pokemonType.filter(function(perfectMatch){

       if(perfectMatch.Type === "fire" && perfectMatch.isSelected === true){


       //load  water-type for computer pokemon
      document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/squirtle.gif" </img>';
      document.getElementById("CpuPokeImage").style.width = 320;
      document.getElementById("CpuPokeImage").style.height = 380;

      //load pokemon sound
      //computerSD.squirtleVO.play();

      //This function restores the default settings of the progress for player1 and computer
      defaultProgressBar.defaultHPSetting();

      //Display and save computer pokemon name to savedPokemonName2
      document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
      computerCH.savedPokemonName2.push("Squirtle");

      //change boolean state
      confirm.makeMove[0].computerMove = false;
      confirm.makeMove[0].player1Move = true;

      //Change boolean state so computer can make a move
      confirm.makeMove[0].player1Move = false;

       //verify that computer selected a pokemon
      computerCH.pokemonType[2].isSelected = true; // squirtle

      //set boolean stats to false for non-selected pokemon

      computerCH.pokemonType[1].isSelected = false;
      computerCH.pokemonType[3].isSelected = false;
      computerCH.pokemonType[4].isSelected = false;
      computerCH.pokemonType[5].isSelected = false;



    }

     });


     },6000); // 6 sec wait time to load computer pokemon



     }//end of multiple if statements






    } // end of 1st if statement

} // end of chrPokeImage function





    this.blaPokeImage = function () {

      let score0 = a1.player1Score.reduce(array1.PokemonHPReduced);


      confirm.makeMove[0].player1Move = true;


       if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {

         // set boolean stats to true when user selects a pokemon
         player1CH.pokemonType[1].isSelected = true;  //blastoise

         // set boolean stats to false for non-selected pokemon
         player1CH.pokemonType[0].isSelected = false; //charmander
         player1CH.pokemonType[2].isSelected = false; //pikachu


         // inform player1 of pokemon change
         document.getElementById("statusProgress3").innerHTML =("You seleted " + player1CH.player1PokemonChoices[1]+ ". " + " Computer will now select a pokemon.");

         // Wait 6 secs and inform player1 that they can begin attacking computer pokemon
         setTimeout(function() {

         document.getElementById("statusProgress3").innerHTML =("You can now attack or switch pokemon.");

       }, 6000); // 6 secs

         //load pokemon attack/defense menu
         document.getElementById("attackA").innerHTML = ("Aqua Jet (-20HP)");
         document.getElementById("attackB").innerHTML = ("Bubble (-10HP)");
         document.getElementById("attackC").innerHTML = ("Hydro Pump (-45)");

         document.getElementById("defenseA").innerHTML = ("Protect (-10HP)");
         document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
         document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

         //load pokemon name
         document.getElementById("p1PokemonName").innerHTML = player1CH.player1PokemonChoices[1]; // blastoise

         //load pokemon sound
         player1SD.blastoiseVO.play();






         //if Blastoise dies then player1 can't restore it by selecting Blastoise again.
         if (p1.deathValidator.pokemonDied === true && p1.deadPokemon[0] === "Blastoise") {

           //remove previous pokemon character
           let elem =  document.createElement("img");
           elem.src ="";
           document.getElementById("Player1PokeImage").appendChild(elem);
           document.getElementById("Player1PokeImage").style.width = 200;
           document.getElementById("Player1PokeImage").style.height = 180;

           //reload player1 pokemon
           document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise.gif" </img>';
           document.getElementById("Player1PokeImage").style.width = 200;
           document.getElementById("Player1PokeImage").style.height = 180;

           setTimeout(function (){

           computerCH.loadOnixOnly();

           },6000); // 6 sec wait time to load computer pokemon




         //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
       }else if (p1.deathValidator.pokemonDied === true && p1.deadPokemon[0] === "Blastoise") {

           // change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions
           // this function is also in disableDeadPokemon() but needs to be called again because this function re-enables player1 pokemon.

           document.getElementById("p1PokemonName").innerHTML = "";
           document.getElementById("Blastoise_sel").style.color = "#C91212";
           document.getElementById("Blastoise_sel").removeEventListener("click", player1CH.blaPokeImage);
           document.getElementById("attackA").removeEventListener("click", attackA);
           document.getElementById("attackB").removeEventListener("click", attackB);
           document.getElementById("attackC").removeEventListener("click", attackC);
           document.getElementById("defenseA").removeEventListener("click", defenseA);
           document.getElementById("defenseB").removeEventListener("click", defenseB);
           document.getElementById("defenseC").removeEventListener("click", defenseC);
           document.getElementById("attackA").innerHTML = ("");
           document.getElementById("attackB").innerHTML = ("");
           document.getElementById("attackC").innerHTML = ("");
           document.getElementById("defenseA").innerHTML = ("");
           document.getElementById("defenseB").innerHTML = ("");
           document.getElementById("defenseC").innerHTML = ("");



         //if player1 doesn't have a score then allow onix (computer pokemon) to battle with blastoise (default choice).
       }else if (score0 === 0) {

         //re-activate active listener again because it was disabled in a different scenario.
         document.getElementById("attackA").addEventListener("click", attackA);
         document.getElementById("attackB").addEventListener("click", attackB);
         document.getElementById("attackC").addEventListener("click", attackC);
         document.getElementById("defenseA").addEventListener("click", defenseA);
         document.getElementById("defenseB").addEventListener("click", defenseB);
         document.getElementById("defenseC").addEventListener("click", defenseC);


         //load player1 pokemon

        document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise.gif" </img>';
        document.getElementById("Player1PokeImage").style.width = 100;
        document.getElementById("Player1PokeImage").style.height = 100;


        setTimeout(function(){

          // if player1 selects water-type pokemon, computer will use a rock-type pokemon

          let isPokemonElectric = player1CH.pokemonType.filter(function(perfectMatch){

          if(perfectMatch.Type === "water" && perfectMatch.isSelected === true){


              // remove previous Pokemon image

              let elem =  document.createElement("img");
              elem.src ="";
              document.getElementById("CpuPokeImage").appendChild(elem);
              document.getElementById("CpuPokeImage").style.width = 100;
              document.getElementById("CpuPokeImage").style.height = 100;

              // replace with new pokemon

              document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/onix.gif" </img>';
              document.getElementById("CpuPokeImage").style.width = 320;
              document.getElementById("CpuPokeImage").style.height = 380;


             //load pokemon sound
             computerSD.onixVO.play();

             //This function restores the default settings of the progress for player1 and computer
             defaultProgressBar.defaultHPSetting();

             //Display and save computer pokemon name to savedPokemonName2 on line 445
             document.getElementById("cpuPokemonName").innerHTML = "Onix";
             computerCH.savedPokemonName2.push("Onix");

             //change boolean state
             confirm.makeMove[0].computerMove = false;
             confirm.makeMove[0].player1Move = true;

             //verify that computer selected a pokemon
             computerCH.pokemonType[4].isSelected = true; //onix

             // set boolean stats to false for non-selected pokemon
             computerCH.pokemonType[0].isSelected = false;
             computerCH.pokemonType[2].isSelected = false;
             computerCH.pokemonType[5].isSelected = false;



          }

        });


      },6000); // 6 sec wait time to load computer pokemon


        }//end of multiple if statements









      } //end of 1st if statement


    } //end of blaPokeImage function


    this.pikPokeImage = function () {

      let score0 = a1.player1Score.reduce(array1.PokemonHPReduced);


      confirm.makeMove[0].player1Move = true;


      if(confirm.makeMove[0].computerMove === false && confirm.makeMove[0].player1Move === true) {


        // set boolean stats to true when user selects a pokemon
        player1CH.pokemonType[2].isSelected = true; // pikachu

        // set boolean stats to false for non-selected pokemon

        computerCH.pokemonType[0].isSelected = false;
        computerCH.pokemonType[1].isSelected = false;
        computerCH.pokemonType[4].isSelected = false;
        computerCH.pokemonType[5].isSelected = false;


        // inform player1 of pokemon change
        document.getElementById("statusProgress3").innerHTML =("You seleted " + player1CH.player1PokemonChoices[2]+ ". " + " Computer will now select a pokemon.");


        // Wait 3 secs and inform player1 that they can begin attacking computer pokemon
        setTimeout(function() {

        document.getElementById("statusProgress3").innerHTML =("You can now attack or switch pokemon.");

      }, 6000); // 6 secs

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-20HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-10HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-45)");

        document.getElementById("defenseA").innerHTML = ("Growl (-10HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

        //load pokemon name
        document.getElementById("p1PokemonName").innerHTML = player1CH.player1PokemonChoices[2]; // pikachu

        //load pokemon sound
        player1SD.pikachuVO.play();




        //if pikachu dies then player1 can't restore it by selecting pikachu again.
        if (p1.deathValidator.pokemonDied === true && p1.deadPokemon[0] === "Pikachu ") {

          //remove previous pokemon character
          let elem =  document.createElement("img");
          elem.src ="";
          document.getElementById("Player1PokeImage").appendChild(elem);
          document.getElementById("Player1PokeImage").style.width = 200;
          document.getElementById("Player1PokeImage").style.height = 180;

          //reload player1 pokemon
          document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Pikachu.gif" </img>';
          document.getElementById("Player1PokeImage").style.width = 200;
          document.getElementById("Player1PokeImage").style.height = 180;

          setTimeout(function (){

          computerCH.loadOnixOnly();

          },6000); // 6 sec wait time to load computer pokemon




        //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
      }else if (p1.deathValidator.pokemonDied === true && p1.deadPokemon[0] === "Pikachu") {

          // change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions
          // this function is also in disableDeadPokemon() but needs to be called again because this function re-enables player1 pokemon.

          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Pikachu_sel").style.color = "#C91212";
          document.getElementById("Pikachu_sel").removeEventListener("click", player1CH.pikPokeImage);
          document.getElementById("attackA").removeEventListener("click", attackA);
          document.getElementById("attackB").removeEventListener("click", attackB);
          document.getElementById("attackC").removeEventListener("click", attackC);
          document.getElementById("defenseA").removeEventListener("click", defenseA);
          document.getElementById("defenseB").removeEventListener("click", defenseB);
          document.getElementById("defenseC").removeEventListener("click", defenseC);
          document.getElementById("attackA").innerHTML = ("");
          document.getElementById("attackB").innerHTML = ("");
          document.getElementById("attackC").innerHTML = ("");
          document.getElementById("defenseA").innerHTML = ("");
          document.getElementById("defenseB").innerHTML = ("");
          document.getElementById("defenseC").innerHTML = ("");



        //if player1 doesn't have a score then allow scyther (computer pokemon) to battle with pikachu (default choice).
      }else if (score0 === 0) {

        //re-activate active listener again because it was disabled in a different scenario.
        document.getElementById("attackA").addEventListener("click", attackA);
        document.getElementById("attackB").addEventListener("click", attackB);
        document.getElementById("attackC").addEventListener("click", attackC);
        document.getElementById("defenseA").addEventListener("click", defenseA);
        document.getElementById("defenseB").addEventListener("click", defenseB);
        document.getElementById("defenseC").addEventListener("click", defenseC);


        // load player1 pokemon

       document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Pikachu.gif" </img>';
       document.getElementById("Player1PokeImage").style.width = 200;
       document.getElementById("Player1PokeImage").style.height = 180;

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

            //This function restores the default settings of the progress for player1 and computer
            defaultProgressBar.defaultHPSetting();

            //Display and save computer pokemon name to savedPokemonName2 on line 445
            document.getElementById("cpuPokemonName").innerHTML = "Scyther";
            computerCH.savedPokemonName2.push("Scyther");

            //change boolean state
            confirm.makeMove[0].computerMove = false;
            confirm.makeMove[0].player1Move = true;

            //verify that computer selected a pokemon
            computerCH.pokemonType[3].isSelected = true; //Scyther


            // set boolean stats to false for non-selected pokemon
            computerCH.pokemonType[0].isSelected = false;
            computerCH.pokemonType[1].isSelected = false;
            computerCH.pokemonType[4].isSelected = false;
            computerCH.pokemonType[5].isSelected = false;



         }

       });


     },6000); // 6 sec wait time to load computer pokemon



       }//end of multiple if statements





   } // end of 1st if statement

 } // end of pikPokeImage function




// In this section computer pokemon will not be paired to player1 pokemon



this.loadSquirtleOnly = function () {

  setTimeout(function() {

    let onixHP = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

    //if Onix dies than squirtle is loaded up -- no attacks are programmed as of now

    if(onixHP === 0 && p1.deadPokemon[0] === "Onix") {


        //remove previous Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("CpuPokeImage").appendChild(elem);
        document.getElementById("CpuPokeImage").style.width = 100;
        document.getElementById("CpuPokeImage").style.height = 100;

        //replace with new pokemon

        document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/squirtle.gif" </img>';
        document.getElementById("CpuPokeImage").style.width = 320;
        document.getElementById("CpuPokeImage").style.height = 380;

        setTimeout(function() {

        //This function resets the defaultHP color settings of the progress for player1 and computer
        defaultProgressBar.resetHpColorSetting();

      },1000); // 1 sec wait time for loading new progressBar for Scyther

       //call a switch statement here -- work on this later


        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[2] + " and has 2 pokemon remaining.");

       //load pokemon sound
       computerSD.squirtleVO.play();


       //Display and save computer pokemon name to savedPokemonName2 on line 445
       document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
       computerCH.savedPokemonName2.push("Squirtle");

       //change boolean state
       confirm.makeMove[0].computerMove = false;
       confirm.makeMove[0].player1Move = true;

       //verify that computer selected a pokemon
       computerCH.pokemonType[5].isSelected = true; //Squirtle


       // set boolean stats to false for non-selected pokemon
       computerCH.pokemonType[0].isSelected = false;
       computerCH.pokemonType[1].isSelected = false;
       computerCH.pokemonType[2].isSelected = false;
       computerCH.pokemonType[4].isSelected = false;






          }// end of if statement


        },1000); // 1 sec wait time for computer to select pokemon


            } //end of loadSquirtleOnly function





this.loadOnixOnly = function () {

  setTimeout(function() {

    let squirtleHP10 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);

    //if Squirtle dies than onix is loaded up -- no attacks are programmed as of now

    if(squirtleHP10 === 0 && p1.deadPokemon[0] === "Squirtle") {


        //remove previous Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("CpuPokeImage").appendChild(elem);
        document.getElementById("CpuPokeImage").style.width = 100;
        document.getElementById("CpuPokeImage").style.height = 100;

        //replace with new pokemon

        document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/onix.gif" </img>';
        document.getElementById("CpuPokeImage").style.width = 320;
        document.getElementById("CpuPokeImage").style.height = 380;

        setTimeout(function() {

        //This function resets the defaultHP color settings of the progress for player1 and computer
        defaultProgressBar.resetHpColorSetting();

      },3000); // 3 sec wait time for loading new progressBar for Scyther

       //call a switch statement here -- work on this later


        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[1] + " and has 2 pokemon remaining.");

       //load pokemon sound
       computerSD.onixVO.play();


       //Display and save computer pokemon name to savedPokemonName2 on line 445
       document.getElementById("cpuPokemonName").innerHTML = "Onix";
       computerCH.savedPokemonName2.push("Onix");

       //change boolean state
       confirm.makeMove[0].computerMove = false;
       confirm.makeMove[0].player1Move = true;

       //verify that computer selected a pokemon
       computerCH.pokemonType[4].isSelected = true; //Onix


       // set boolean stats to false for non-selected pokemon
       computerCH.pokemonType[0].isSelected = false;
       computerCH.pokemonType[1].isSelected = false;
       computerCH.pokemonType[2].isSelected = false;
       computerCH.pokemonType[5].isSelected = false;






          }// end of if statement


        },1000); // 1 sec wait time for computer to select pokemon


            } //end of loadOnixOnly function








this.loadScytherOnly = function () {

  setTimeout(function() {

    let squirtleHP10 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);

    //if squirtle dies than Scyther is loaded up -- no attacks are programmed as of now

    if(squirtleHP10 === 0 && p1.deadPokemon[0] === "Squirtle") {


        //remove previous Pokemon image

        let elem =  document.createElement("img");
        elem.src ="";
        document.getElementById("CpuPokeImage").appendChild(elem);
        document.getElementById("CpuPokeImage").style.width = 100;
        document.getElementById("CpuPokeImage").style.height = 100;

        //replace with new pokemon

        document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Scyther.gif" </img>';
        document.getElementById("CpuPokeImage").style.width = 320;
        document.getElementById("CpuPokeImage").style.height = 380;

        setTimeout(function() {

        //This function resets the defaultHP color settings of the progress for player1 and computer
        defaultProgressBar.resetHpColorSetting();

      },1000); // 1 sec wait time for loading new progressBar for Scyther

       //call a switch statement here -- work on this later


        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[0] + " and has 2 pokemon remaining.");

       //load pokemon sound
       computerSD.scytherVO.play();


       //Display and save computer pokemon name to savedPokemonName2 on line 445
       document.getElementById("cpuPokemonName").innerHTML = "Scyther";
       computerCH.savedPokemonName2.push("Scyther");

       //change boolean state
       confirm.makeMove[0].computerMove = false;
       confirm.makeMove[0].player1Move = true;

       //verify that computer selected a pokemon
       computerCH.pokemonType[3].isSelected = true; //Scyther


       // set boolean stats to false for non-selected pokemon
       computerCH.pokemonType[0].isSelected = false;
       computerCH.pokemonType[1].isSelected = false;
       computerCH.pokemonType[2].isSelected = false;
       computerCH.pokemonType[4].isSelected = false;
       computerCH.pokemonType[5].isSelected = false;






          }// end of if statement


        },1000); // 1 sec wait time for computer to select pokemon


                } //end of loadScytherOnly function












                        }//end of pokemeon constructor


                                }//end of changePokemonclass




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
    this.onixHealthBar =        [100];
    this.onixBackup =           [100];
    this.onixHpRecovered =      [0];
    this.onixSpeedProgressBar = [100];
    this.pikachuHealthBar =     [100];
    this.pikachuBackup =        [100];
    this.pikachuHpRecovered =   [0];
    this.pikSpeedProgressBar =  [100];
    this.player1Score =         [0];
    this.computerScore =        [0];


  } // end of constructor class
} // end of objectofArrays class

a1 = new objectofArrays; //charmanderHealthBar
a2 = new objectofArrays; //squirtleHealthBar
a3 = new objectofArrays; //pikachuHealthBar
a4 = new objectofArrays; //scytherHealthBar
a5 = new objectofArrays; //blastoiseHealthBar
a6 = new objectofArrays; //onixHealthBar
a7 = new objectofArrays; //charmanderHpRecovered
a8 = new objectofArrays; //squirtleHpRecovered
a9 = new objectofArrays; //pikachuHpRecovered
a10 = new objectofArrays; //scytherHpRecovered
a11 = new objectofArrays; //blastoiseHpRecovered
a12 = new objectofArrays; //onixHpRecovered







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

        document.getElementById("statusProgress3").innerHTML = "An error occured in the game. Therefore it was terminated. Error code 142";

        console.log("getCharmanderHP: " + array1.getCharmanderHP());
        console.log("getSquirtleHP: "   + array2.getSquirtleHP());

    }else if (isNaN(squirtleHP8) || isNaN(charmanderHP9)) {

        document.getElementById("statusProgress3").innerHTML = "An error occured in the game. Therefore it was terminated. Error code 143";



    }// end of if statements


} catch (reportError) {

  console.error(reportError);

}

    }// end of catchErrorFromSwitch function


    this.defaultHPSetting = function () {

      //default settings for array when no pokemon battle occur

      //varible declartions


      let player1DefaultHP = 100;
      let computerDefaultHP = 100;
      let player1DefaultSpeed = 100;
      let computerDefaultSpeed = 100;

      let squirtleHP6 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let charmanderHP6 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let pikachuHP12 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP12 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP12 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP12 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);


      if (charmanderHP6 === 100 || squirtleHP6 === 100) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";


      }else if (pikachuHP12 === 100 || scytherHP12 === 100) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

      }else if (blastoiseHP12 === 100 || onixHP12 === 100) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";


    }// end of if statements

                  }// end of defaultHPSetting



         this.perserveHpSetting = function () {

          //any changes to array implies a pokemon battle occured and therefore the array needs to be preserved before switching pokemon.

         // variable declartions

         let score3 = a1.player1Score.reduce(array1.PokemonHPReduced);
         let score4 = a2.computerScore.reduce(array2.PokemonHPReduced);

         let player1DefaultHP = 100;
         let computerDefaultHP = 100;
         let player1DefaultSpeed = 100;
         let computerDefaultSpeed = 100;
         let player1LowHealthIndicator2 = document.querySelector('.player1HP');
         let computerLowHealthIndicator2 = document.querySelector('.cpuHP');

         let squirtleHP6 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
         let charmanderHP6 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
         let pikachuHP13 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
         let scytherHP13 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
         let blastoiseHP13 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
         let onixHP13 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);


         if (charmanderHP6 < 100 || squirtleHP6 < 100) {


         document.querySelector(".player1HP").style.width = charmanderHP6 +   "%";
         document.querySelector(".cpuHP").style.width = squirtleHP6 +   "%";
         document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
         document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

         }else if (pikachuHP12 < 100 || scytherHP12 < 100) {


         document.querySelector(".player1HP").style.width = pikachuHP12 +   "%";
         document.querySelector(".cpuHP").style.width = scytherHP12 +   "%";
         document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
         document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";


         }else if (blastoiseHP12 < 100 || onixHP12 < 100) {


         document.querySelector(".player1HP").style.width = blastoiseHP12 +   "%";
         document.querySelector(".cpuHP").style.width = onixHP12 +   "%";
         document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
         document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";


          }//end of if statements

                  }//end of perserveHpSetting function


      this.resetHpColorSetting = function () {

      //restores the color of the pokemon progressbar from red to blue

      //varible declartions

      let player1DefaultHP = 100;
      let computerDefaultHP = 100;
      let player1DefaultSpeed = 100;
      let computerDefaultSpeed = 100;
      let player1LowHealthIndicator2 = document.querySelector('.player1HP');
      let computerLowHealthIndicator2 = document.querySelector('.cpuHP');

      let squirtleHP6 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let charmanderHP6 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let pikachuHP13 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP13 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP13 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP13 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

      if (squirtleHP6 === 0 || scytherHP13 === 0 || onixHP13 === 0 ) {

        //computer HP and speed css settings
        document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
        document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";
        computerLowHealthIndicator2.style.backgroundColor = "#A6EDED"; // blue

      }else if (charmanderHP6 === 0 || pikachuHP13 === 0 || blastoiseHP13 === 0) {

        //player1 HP and speed css settings
        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        player1LowHealthIndicator2.style.backgroundColor = "#A6EDED"; //blue

      }// end of if statements

          }//end resetHpColorSetting function



    this.decreaseComputerHP = function () {

      // variable declartions


      let hpDamage = 0;
      let hpRecovered = a8.squirtleHpRecovered.reduce(array2.PokemonRestoredReducer);
      let squirtleHP5 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let computerLowHealthIndicator = document.querySelector('.cpuHP');



      if (squirtleHP5 < 0 || squirtleHP5 >= 0  && computer.squirtleMovesActivated[0].squirtleFunction1of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && computer.squirtleMovesActivated[0].squirtleFunction2of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && computer.squirtleMovesActivated[0].squirtleFunction3of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && computer.squirtleMovesActivated[0].squirtleFunction4of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && computer.squirtleMovesActivated[0].squirtleFunction5of6 === true) {

        //if statement ensures that some funtions are activated before making changes to the progress bar


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
      //  defaultProgressBar.catchErrorFromSwitch();
      console.log("decreaseComputerHP default function was commented out for troubleshooting purposes. Fix this later.");

  }// end of switch statement

        }// end of if statement

            } // end of decreaseComputerHP function



            this.decreaseComputerHP2 = function () {

              // variable declartions


              let hpDamage5 = 0;
              let hpRecovered6 = a12.onixHpRecovered.reduce(array2.PokemonRestoredReducer);
              let onixHP2 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
              let computerLowHealthIndicator = document.querySelector('.cpuHP');



              if (onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction1of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction2of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction3of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction4of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction5of6 === true) {

                //if statement ensures that some funtions are activated before making changes to the progress bar


                switch(onixHP2 < 0 || onixHP2 >= 0) {


                case (onixHP2 === 0):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                p1.informWinner();
                break;

                case (onixHP2 > 0 && onixHP2 <= 20):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                break;

                case (onixHP2 > 20 && onixHP2 <= 40):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                computerLowHealthIndicator.style.backgroundColor = "#FD0202";
                break;

                case (onixHP2 > 40 && onixHP2 <= 100):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                break;

                default:
              //  defaultProgressBar.catchErrorFromSwitch();
              console.log("decreaseComputerHP2 default function was commented out for troubleshooting purposes. Fix this later. (2-2)");

          }// end of switch statement

                }// end of if statement

              } // end of decreaseComputerHP2 function







              this.decreaseComputerHP3 = function () {

                // variable declartions


                let hpDamage6 = 0;
                let hpRecovered7 = a10.scytherHpRecovered.reduce(array2.PokemonRestoredReducer);
                let scytherHP2 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
                let computerLowHealthIndicator = document.querySelector('.cpuHP');



                if (scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction1of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction2of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction3of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction4of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction5of6 === true) {

                  //if statement ensures that some funtions are activated before making changes to the progress bar


                  switch(scytherHP2 < 0 || scytherHP2 >= 0) {


                  case (scytherHP2 === 0):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  p1.informWinner();
                  break;

                  case (scytherHP2 > 0 && scytherHP2 <= 20):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  break;

                  case (scytherHP2 > 20 && scytherHP2 <= 40):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";
                  break;

                  case (scytherHP2 > 40 && scytherHP2 <= 100):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  break;

                  default:
                //  defaultProgressBar.catchErrorFromSwitch();
                console.log("decreaseComputerHP3 default function was commented out for troubleshooting purposes. Fix this later. (3-3)");

            }// end of switch statement

                  }// end of if statement

                } // end of decreaseComputerHP3 function




    this.decreasePlayerHP = function () {

      // variable declartions


      let hpDamage2 = 0;
      let hpRecovered2 = a7.charmanderHpRecovered.reduce(array1.PokemonRestoredReducer);
      let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let player1LowHealthIndicator = document.querySelector('.player1HP');



      if(charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction1of6 === true
        || player1.charmanderMoves[0].charmanderFunction2of6 === true
        || player1.charmanderMoves[0].charmanderFunction3of6 === true
        || player1.charmanderMoves[0].charmanderFunction4of6 === true
        || player1.charmanderMoves[0].charmanderFunction5of6 === true) {

        //if statement ensures that some functions are activated before making changes to the progress bar


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
        //defaultProgressBar.catchErrorFromSwitch();
        console.log("decreasePlayerHP default function was commented out for troubleshooting purposes. Fix this later.");


}// end of switch statement

      }// end of if statement

          } // end of decreasePlayerHP function



          this.decreasePlayerHP2 = function () {

            // variable declartions


            let hpDamage3 = 0;
            let hpRecovered3 = a9.pikachuHpRecovered.reduce(array1.PokemonRestoredReducer);
            let pikachuHP2 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
            let player1LowHealthIndicator = document.querySelector('.player1HP');



            if(pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction1of6 === true
              || player1.pikachuMoves[0].pikachuFunction2of6 === true
              || player1.pikachuMoves[0].pikachuFunction3of6 === true
              || player1.pikachuMoves[0].pikachuFunction4of6 === true
              || player1.pikachuMoves[0].pikachuFunction5of6 === true) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(pikachuHP2 < 0 || pikachuHP2 >= 0) {

              case (pikachuHP2 === 0):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              comp.informWinner();
              break;

              case (pikachuHP2 > 0 && pikachuHP2 <= 20):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              break;

              case (pikachuHP2 > 20 && pikachuHP2 <= 40):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";
              break;

              case (pikachuHP2 > 40 && pikachuHP2 <= 100):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              break;

              default:
              //defaultProgressBar.catchErrorFromSwitch();
              console.log("decreasePlayerHP2 default function was commented out for troubleshooting purposes. Fix this later.(2)");


      }// end of switch statement

            }// end of if statement

          } // end of decreasePlayerHP2 function









          this.decreasePlayerHP3 = function () {

            // variable declartions


            let hpDamage4 = 0;
            let hpRecovered4 = a11.blastoiseHpRecovered.reduce(array1.PokemonRestoredReducer);
            let blastoiseHP2 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
            let player1LowHealthIndicator = document.querySelector('.player1HP');



            if(blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction1of6 === true
              || player1.blastoiseMoves[0].blastoiseFunction2of6 === true
              || player1.blastoiseMoves[0].blastoiseFunction3of6 === true
              || player1.blastoiseMoves[0].blastoiseFunction4of6 === true
              || player1.blastoiseMoves[0].blastoiseFunction5of6 === true) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(blastoiseHP2 < 0 || blastoiseHP2 >= 0) {

              case (blastoiseHP2 === 0):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              comp.informWinner();
              break;

              case (blastoiseHP2 > 0 && blastoiseHP2 <= 20):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              break;

              case (blastoiseHP2 > 20 && blastoiseHP2 <= 40):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";
              break;

              case (blastoiseHP2 > 40 && blastoiseHP2 <= 100):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              break;

              default:
              //defaultProgressBar.catchErrorFromSwitch();
              console.log("decreasePlayerHP3 default function was commented out for troubleshooting purposes. Fix this later.(3)");


      }// end of switch statement

            }// end of if statement

          } // end of decreasePlayerHP3 function



this.increaseComputerHP = function () {

  // variable declartions

  let hpDamage = 0;
  let speedReduced = 0;
  let squirtleHP5 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced) + a8.squirtleHpRecovered.reduce(array2.PokemonRestoredReducer);
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
    //defaultProgressBar.catchErrorFromSwitch();
    console.log("increaseComputerHP default function was commented out for troubleshooting purposes. Fix this later.");

  }// end of switch statement


        }// end if statements


            }// end of increaseComputerHP



this.increasePlayerHP = function () {

  // variable declartions

  console.log("increasePlayerHP has started");


  let hpDamage2 = 0;
  let speedReduced2 = 0;
  let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced) + a7.charmanderHpRecovered.reduce(array1.PokemonRestoredReducer);
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
   //defaultProgressBar.catchErrorFromSwitch();
   console.log("increasePlayerHP default function was commented out for troubleshooting purposes. Fix this later.");


 }// end if switch statement


       }// end of if statements


            }// end of increasePlayerHP



        } // end of progressBar constructor

          } // end of prograssBar class






blastoiseProgressBar = new progressBar;
pikachuProgressBar = new progressBar;
charmanderProgressBar = new progressBar;
squirtleProgressBar = new progressBar;
scytherProgressBar = new progressBar;
onixProgressBar = new progressBar;
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
      let squirtleHP = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP = a6.onixHealthBar.reduce(array2.PokemonHPReduced);


      //This function will check the progressBar status and call another function if conditions are met

      if(charmanderHP >= 20 &&  charmanderHP <= 40 || squirtleHP >= 20 &&  squirtleHP <= 40 ||
      pikachuHP >= 20 &&  pikachuHP <= 40 || scytherHP >= 20 &&  scytherHP <= 40  ||
    blastoiseHP >= 20 &&  blastoiseHP <= 40 || onixHP >= 20 &&  onixHP <= 40){

          p1.informStatus();


      }else if (charmanderHP >= 1 && squirtleHP >= 1 ||
      pikachuHP >= 1 && scytherHP >= 1 ||
    blastoiseHP >= 1 && onixHP >= 1) {

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
     this.pokemonName = ["Charmander","Scyther","Blastoise","Onix","Squirtle", "Pikachu"];
     this.player1Menu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];
     this.attackOptions = ["Fire Blaster","Blaze", "Solar Beam"];





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

       if(player1CH.pokemonType[0].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.charmanderMoves[0].charmanderFunction2of6 = true;

         //debugging here -- delete when neccessary
         console.log("charmanderFunction2of6 is: " + player1.charmanderMoves[0].charmanderFunction2of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //Blaze does -10 damage on squirtle
         a2.squirtleHealthBar.push(-10);
         a2.squirtleBackup.push(-10);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         charmanderProgressBar.decreaseComputerHP();

        //debugging here -----------------------------------
         console.log("squirtleHealthBar array is " + a2.squirtleHealthBar);
         console.log("squirtleBackup array is " + a2.squirtleBackup);

         // show image
          player1Img.chrAtkImage2();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } // end of blazeMove

     this.solarPowerMove = function() {

       // solarPower does -35 damage on computer

       if(player1CH.pokemonType[0].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.charmanderMoves[0].charmanderFunction3of6 = true;

         //debugging here -- delete when neccessary
         console.log("charmanderFunction3of6 is: " + player1.charmanderMoves[0].charmanderFunction3of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //Blaze does -10 damage on squirtle
         a2.squirtleHealthBar.push(-35);
         a2.squirtleBackup.push(-35);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         charmanderProgressBar.decreaseComputerHP();

        //debugging here -----------------------------------
         console.log("squirtleHealthBar array is " + a2.squirtleHealthBar);
         console.log("squirtleBackup array is " + a2.squirtleBackup);

         // show image
          player1Img.chrAtkImage3();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of solarPowerMove



     this.growlMove = function() {

       // growl does -10 damage on computer

       if(player1CH.pokemonType[0].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.charmanderMoves[0].charmanderFunction4of6 = true;

         //debugging here -- delete when neccessary
         console.log("charmanderFunction4of6 is: " + player1.charmanderMoves[0].charmanderFunction4of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //Blaze does -10 damage on squirtle
         a2.squirtleHealthBar.push(-10);
         a2.squirtleBackup.push(-10);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         charmanderProgressBar.decreaseComputerHP();

        //debugging here -----------------------------------
         console.log("squirtleHealthBar array is " + a2.squirtleHealthBar);
         console.log("squirtleBackup array is " + a2.squirtleBackup);

         // show image
          player1Img.chrAtkImage4();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of growlMove





     this.smokeScreenMove = function() {

       // smokescreen does -20 damage on computer

       if(player1CH.pokemonType[0].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.charmanderMoves[0].charmanderFunction5of6 = true;

         //debugging here -- delete when neccessary
         console.log("charmanderFunction5of6 is: " + player1.charmanderMoves[0].charmanderFunction5of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //Blaze does -10 damage on squirtle
         a2.squirtleHealthBar.push(-20);
         a2.squirtleBackup.push(-20);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         charmanderProgressBar.decreaseComputerHP();

        //debugging here -----------------------------------
         console.log("squirtleHealthBar array is " + a2.squirtleHealthBar);
         console.log("squirtleBackup array is " + a2.squirtleBackup);

         // show image
          player1Img.chrAtkImage5();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of smokeScreenMove



     this.rest = function() {

       console.log("The rest function started on this line: ");

       //confirm attack move for pokemon was clicked
       player1.charmanderMoves.charmanderFunction6of6 = true;

       //reflect the changes to the charmanderHpRecovered array only because charmanderHealthBarBackup will eventually have this data when the array is reduced.
       a7.charmanderHpRecovered.push(45);

       // player1 speed progressbar needs to reflect changes if the rest function was clicked.
       a7.chaSpeedProgressBar.push(-50); // Sets charmanders speedbar to 50%

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
       player1Img.chrAtkImage6();

       //change boolean state so that computer can attack
       confirm.makeMove[0].player1Move = false;
       confirm.makeMove[0].computerMove = true;

       console.log(confirm.makeMove[0]);

     } // end of rest function


     this.pikachuMoves = [{

       pikachuFunction1of6: false, // [0]
       pikachuFunction2of6: false, // [1]
       pikachuFunction3of6: false, // [2]
       pikachuFunction4of6: false, // [3]
       pikachuFunction5of6: false, // [4]
       pikachuFunction6of6: false //  [5]

     }] //end of pikachuMoves object




     this.thunderShockMove = function () {



          if(player1CH.pokemonType[2].isSelected === true) {

            //confirm attack move for pokemon was clicked
            player1.pikachuMoves[0].pikachuFunction1of6 = true;

            //debugging here -- delete when neccessary
            console.log("pikachuFunction1of6 is: " + player1.pikachuMoves[0].pikachuFunction1of6);

           //reflect the changes to scytherHealthBar AND scytherBackup array as well.
           //thunderShockMove does -20 damage to scyther
            a4.scytherHealthBar.push(-20);
            a4.scytherBackup.push(-20);

          //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
            pikachuProgressBar.decreaseComputerHP3();



           //debugging here -----------------------------------
            console.log("scytherHealthBar array is " + a4.scytherHealthBar);
            console.log("scytherBackup array is " + a4.scytherBackup);


             //attack image for pikachu
             player1Img.pikAtkImage1();

             //change boolean state so that computer can attack
             confirm.makeMove[0].player1Move = false;
             confirm.makeMove[0].computerMove = true;

             console.log(confirm.makeMove[0]);


          } // end of if statement


     } // end of thunderShockMove


     this.doubleKickMove = function() {
       // doubleKick does -10 damage to computer

       if(player1CH.pokemonType[2].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.pikachuMoves[0].pikachuFunction2of6 = true;

         //debugging here -- delete when neccessary
         console.log("pikachuFunction2of6 is: " + player1.pikachuMoves[0].pikachuFunction2of6);

        //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
        //Blaze does -10 damage to scyther
         a4.scytherHealthBar.push(-10);
         a4.scytherBackup.push(-10);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         pikachuProgressBar.decreaseComputerHP3();

        //debugging here -----------------------------------
         console.log("scytherHealthBar array is " + a4.scytherHealthBar);
         console.log("scytherBackup array is " + a4.scytherBackup);

         // show image
          player1Img.chrAtkImage2();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } // end of doubleKickMove

     this.thunderBoltMove = function() {

       // thunderBolt does -45 damage on computer

       if(player1CH.pokemonType[2].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.pikachuMoves[0].pikachuFunction3of6 = true;

         //debugging here -- delete when neccessary
         console.log("pikachuFunction3of6 is: " + player1.pikachuMoves[0].pikachuFunction3of6);

        //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
        //thunderBolt does -45 damage to scyther
         a4.scytherHealthBar.push(-45);
         a4.scytherBackup.push(-45);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         pikachuProgressBar.decreaseComputerHP3();

        //debugging here -----------------------------------
         console.log("scytherHealthBar array is " + a4.scytherHealthBar);
         console.log("scytherBackup array is " + a4.scytherBackup);

         // show image
          player1Img.chrAtkImage3();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of thunderBoltMove



     this.growl2Move = function() {

       // growl2 does -10 damage on computer

       if(player1CH.pokemonType[2].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.pikachuMoves[0].pikachuFunction4of6 = true;

         //debugging here -- delete when neccessary
         console.log("pikachuFunction4of6 is: " + player1.pikachuMoves[0].pikachuFunction4of6);

        //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
        //growl2 does -10 damage to scyther
         a4.scytherHealthBar.push(-10);
         a4.scytherBackup.push(-10);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         pikachuProgressBar.decreaseComputerHP3();

        //debugging here -----------------------------------
         console.log("pikachuHealthBar array is " + a4.scytherHealthBar);
         console.log("pikachuBackup array is " + a4.scytherBackup);

         // show image
          player1Img.chrAtkImage4();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of growl2Move





     this.headButtMove = function() {

       // headButt does -20 damage on computer

       if(player1CH.pokemonType[2].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.pikachuMoves[0].pikachuFunction5of6 = true;

         //debugging here -- delete when neccessary
         console.log("pikachuFunction5of6 is: " + player1.pikachuMoves[0].pikachuFunction5of6);

        //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
        //headButt does -20 damage to scyther
         a4.scytherHealthBar.push(-20);
         a4.scytherBackup.push(-20);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         pikachuProgressBar.decreaseComputerHP3();

        //debugging here -----------------------------------
         console.log("scytherHealthBar array is " + a4.scytherHealthBar);
         console.log("scytherBackup array is " + a4.a4.scytherBackup);

         // show image
          player1Img.chrAtkImage5();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of headButtMove



     this.rest2 = function() {

       console.log("The rest function started on this line: (2) ");

       //confirm attack move for pokemon was clicked
       player1.pikachuMoves.pikachuFunction6of6 = true;

       //reflect the changes to the pikachuHpRecovered array only because pikachuHealthBarBackup will eventually have this data when the array is reduced.
       a9.pikachuHpRecovered.push(45);

       // player1 speed progressbar needs to reflect changes if the rest function was clicked.
       a9.pikSpeedProgressBar.push(-50); // Sets pikachu's speedbar to 50%

       //This is the function that applies the reduce method to the arrays listed below. player1 recovers HP if certain conditions are true.
       pikachuProgressBar.increasePlayerHP();

       //record rest action that was taken as it will be used later.
       restore.restedPokemon = true;
       restore.restedPokemonArray.push("Pikachu");



       //debugging--------------------------------------
       console.log("The following pokemon health was restored: " + restore.restedPokemonArray);


       // show recovery image
       player1Img.chrAtkImage6();

       //change boolean state so that computer can attack
       confirm.makeMove[0].player1Move = false;
       confirm.makeMove[0].computerMove = true;

       console.log(confirm.makeMove[0]);

     } // end of rest2 function









     this.blastoiseMoves = [{

       blastoiseFunction1of6: false, // [0]
       blastoiseFunction2of6: false, // [1]
       blastoiseFunction3of6: false, // [2]
       blastoiseFunction4of6: false, // [3]
       blastoiseFunction5of6: false, // [4]
       blastoiseFunction6of6: false //  [5]

     }] //end of blastoiseMoves object







     this.aquaJetMove = function () {



          if(player1CH.pokemonType[1].isSelected === true) {

            //confirm attack move for pokemon was clicked
            player1.blastoiseMoves[0].blastoiseFunction1of6 = true;

            //debugging here -- delete when neccessary
            console.log("blastoiseFunction1of6 is: " + player1.blastoiseMoves[0].blastoiseFunction1of6);

           //reflect the changes to blastoiseHealthBar AND squirtleBackup array as well.
           //aquaJet does -20 damage to onix
            a6.onixHealthBar.push(-20);
            a6.onixBackup.push(-20);

          //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
            blastoiseProgressBar.decreaseComputerHP2();

           //debugging here -----------------------------------
            console.log("onixHealthBar array is " + a6.onixHealthBar);
            console.log("onixBackup array is " + a6.onixBackup);

            // show image
             player1Img.chrAtkImage1();

             //change boolean state so that computer can attack
             confirm.makeMove[0].player1Move = false;
             confirm.makeMove[0].computerMove = true;

             console.log(confirm.makeMove[0]);


          } // end of if statement


     } // end of aquaJetMove


     this.bubbleMove = function() {
       // bubble does -10 damage to computer

       if(player1CH.pokemonType[1].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.blastoiseMoves[0].blastoiseFunction2of6 = true;

         //debugging here -- delete when neccessary
         console.log("blastoiseFunction2of6 is: " + player1.blastoiseMoves[0].blastoiseFunction2of6);

        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        //Bubble does -10 damage to onix
         a6.onixHealthBar.push(-10);
         a6.onixBackup.push(-10);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         blastoiseProgressBar.decreaseComputerHP2();

        //debugging here -----------------------------------
         console.log("onixHealthBar array is " + a6.onixHealthBar);
         console.log("onixBackup array is " + a6.onixBackup);

         // show image
          player1Img.chrAtkImage2();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } // end of bubbleMove


     this.hydroPumpMove = function() {

       // hydroPump does -45 damage to computer

       if(player1CH.pokemonType[1].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.blastoiseMoves[0].blastoiseFunction3of6 = true;

         //debugging here -- delete when neccessary
         console.log("blastoiseFunction3of6 is: " + player1.blastoiseMoves[0].blastoiseFunction3of6);

        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        //hydroPump does -45 damage to onix
         a6.onixHealthBar.push(-45);
         a6.onixBackup.push(-45);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         blastoiseProgressBar.decreaseComputerHP2();

        //debugging here -----------------------------------
         console.log("onixHealthBar array is " + a6.onixHealthBar);
         console.log("onixBackup array is " + a6.onixBackup);

         // show image
          player1Img.chrAtkImage3();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of hydroPumpMove



     this.protectMove = function() {

       // protect does -10 damage to computer

       if(player1CH.pokemonType[1].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.blastoiseMoves[0].blastoiseFunction4of6 = true;

         //debugging here -- delete when neccessary
         console.log("blastoiseFunction4of6 is: " + player1.blastoiseMoves[0].blastoiseFunction4of6);

        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        //Protect does -10 damage to onix
         a6.onixHealthBar.push(-10);
         a6.onixBackup.push(-10);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         blastoiseProgressBar.decreaseComputerHP2();

        //debugging here -----------------------------------
         console.log("onixHealthBar array is " + a6.onixHealthBar);
         console.log("onixBackup array is " + a6.onixBackup);

         // show image
          player1Img.chrAtkImage4();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of protectMove





     this.headButt2Move = function() {

       // headButt2 does -20 damage to computer

       if(player1CH.pokemonType[1].isSelected === true) {

         //confirm attack move for pokemon was clicked
         player1.blastoiseMoves[0].blastoiseFunction5of6 = true;

         //debugging here -- delete when neccessary
         console.log("blastoiseFunction5of6 is: " + player1.blastoiseMoves[0].blastoiseFunction5of6);

        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        //headButt2 does -20 damage to onix
         a6.onixHealthBar.push(-20);
         a6.onixBackup.push(-20);

       //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
         blastoiseProgressBar.decreaseComputerHP2();

        //debugging here -----------------------------------
         console.log("onixHealthBar array is " + a6.onixHealthBar);
         console.log("onixBackup array is " + a6.onixBackup);

         // show image
          player1Img.chrAtkImage5();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of headButt2Move



     this.rest3 = function() {

       console.log("The rest function started on this line:(3) ");

       //confirm attack move for pokemon was clicked
       player1.blastoiseMoves.blastoiseFunction6of6 = true;

       //reflect the changes to the blastoiseHpRecovered array only because blastoiseHealthBarBackup will eventually have this data when the array is reduced.
       a11.blastoiseHpRecovered.push(45);

       // player1 speed progressbar needs to reflect changes if the rest function was clicked.
       a11.blaSpeedProgressBar.push(-50); // Sets blastoises speedbar to 50%

       //This is the function that applies the reduce method to the arrays listed below. player1 recovers HP if certain conditions are true.
       blastoiseProgressBar.increasePlayerHP();

       //record rest action that was taken as it will be used later.
       restore.restedPokemon = true;
       restore.restedPokemonArray.push("Blastoise");


       //debugging--------------------------------------
       console.log("The following pokemon health was restored: " + restore.restedPokemonArray);


       // show recovery image
       player1Img.chrAtkImage6();

       //change boolean state so that computer can attack
       confirm.makeMove[0].player1Move = false;
       confirm.makeMove[0].computerMove = true;

       console.log(confirm.makeMove[0]);

     } // end of rest3Move function



    } // end of player1Move constructor


} // end of player1Moves class




player1 = new player1Moves;


// compare computerMoves to pokemonType on line 411 -- and create a defensive strategy

class computerMoves {
   constructor () {
     this.pokemonName = ["Charmander","Scyther","Blastoise","onix","Squirtle", "Pikachu"];
     this.compMenu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];


   this.squirtleMovesActivated = [{

    squirtleFunction1of6: false,
    squirtleFunction2of6: false,
    squirtleFunction3of6: false,
    squirtleFunction4of6: false,
    squirtleFunction5of6: false,
    squirtleFunction6of6: false

  }]//end of squirtleMoves object

  this.onixMovesActivated = [{

   onixFunction1of6: false,
   onixFunction2of6: false,
   onixFunction3of6: false,
   onixFunction4of6: false,
   onixFunction5of6: false,
   onixFunction6of6: false

 }]//end of squirtleMoves object


 this.scytherMovesActivated = [{

  scytherFunction1of6: false,
  scytherFunction2of6: false,
  scytherFunction3of6: false,
  scytherFunction4of6: false,
  scytherFunction5of6: false,
  scytherFunction6of6: false

}]//end of squirtleMoves object



// original squirtle moves -- do note modify lines 3425 to 3739

   this.squirtleMoves = function () {

     //SquirtleMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

     switch (confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
        && player1CH.pokemonType[0].isSelected === true || player1.charmanderMoves[0].charmanderFunction1of6 === true
        || player1.charmanderMoves[0].charmanderFunction2of6 === true || player1.charmanderMoves[0].charmanderFunction3of6 === true
        || player1.charmanderMoves[0].charmanderFunction4of6 === true || player1.charmanderMoves[0].charmanderFunction5of6 === true
        || player1.charmanderMoves[0].charmanderFunction6of6 === true) {

  case (player1.charmanderMoves[0].charmanderFunction1of6 === true):

  if (player1CH.pokemonType[0].isSelected === true && player1CH.pokemonType[2].isSelected === true) {

    player1.charmanderMoves[0].charmanderFunction1of6 = false;
    computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;

  } else if (player1CH.pokemonType[0].isSelected === true && player1CH.pokemonType[1].isSelected === true) {

    player1.charmanderMoves[0].charmanderFunction1of6 = false;
    computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;

  }//end if else if statements

    //squirtle attack move: Bubble Beam
   //confirm attack move for squirtle pokemon was activated
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

   // get the status of health for player1

   console.log("charmanderBackup array is " +a1.charmanderBackup);

   // inform player1 of attack from computer
   document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Bubble Beam!";

   //show attack image
   computerImg.squAtkImage1();



   //Change boolean state so that player1 can make a move
   confirm.makeMove[0].computerMove = false;
   console.log(confirm.makeMove[0]);
   confirm.enableMoves();
   console.log(confirm.makeMove[0]);

    break;




  case (player1.charmanderMoves[0].charmanderFunction2of6 === true):

  //squirtle attack move: Tail Whip
  //confirm attack move for squirtle pokemon was activated
  computer.squirtleMovesActivated[0].squirtleFunction2of6 = true;

  //debugging here -- delete when neccessary
  console.log("squirtleMoves Function2of6 was activated : " + computer.squirtleMovesActivated[0].squirtleFunction2of6);

  //Tail Whip does -5 damage to charmander
  //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
  a1.charmanderHealthBar.push(-5);
  a1.charmanderBackup.push(-5);


  //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
  squirtleProgressBar.decreasePlayerHP();

  // This is the function that applies the filter to the arrays listed above. It also calls other functions
  array1.checkTheStatus();

  //debugging here------------------------------------------------------

  console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

  // get the status of health for player1

  console.log("charmanderBackup array is " +a1.charmanderBackup);

  // inform player1 of attack from computer
  document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Tail Whip!";

  //show attack image
  computerImg.squAtkImage2();



  //Change boolean state so that player1 can make a move
  confirm.makeMove[0].computerMove = false;
  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  console.log(confirm.makeMove[0]);

    break;




  case (player1.charmanderMoves[0].charmanderFunction3of6 === true):


  //squirtle attack move: Water Pulse
  //confirm attack move for squirtle pokemon was activated
  computer.squirtleMovesActivated[0].squirtleFunction3of6 = true;

  //debugging here -- delete when neccessary
  console.log("squirtleMoves Function3of6 was activated : " + computer.squirtleMovesActivated[0].squirtleFunction3of6);

  //Tail Whip does -60 damage to charmander
  //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
  a1.charmanderHealthBar.push(-60);
  a1.charmanderBackup.push(-60);


  //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
  squirtleProgressBar.decreasePlayerHP();

  // This is the function that applies the filter to the arrays listed above. It also calls other functions
  array1.checkTheStatus();

  //debugging here------------------------------------------------------

  console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

  // get the status of health for player1

  console.log("charmanderBackup array is " +a1.charmanderBackup);

  // inform player1 of attack from computer
  document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Water Pulse!";

  //show attack image
  computerImg.squAtkImage3();



  //Change boolean state so that player1 can make a move
  confirm.makeMove[0].computerMove = false;
  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  console.log(confirm.makeMove[0]);
    break;







    case (player1.charmanderMoves[0].charmanderFunction4of6 === true):


    //squirtle attack move: tackle
    //confirm attack move for squirtle pokemon was activated
    computer.squirtleMovesActivated[0].squirtleFunction4of6 = true;

    //debugging here -- delete when neccessary
    console.log("squirtleMoves Function4of6 was activated : " + computer.squirtleMovesActivated[0].squirtleFunction4of6);

    //tackle does -10 damage to charmander
    //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
    a1.charmanderHealthBar.push(-10);
    a1.charmanderBackup.push(-10);


    //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
    squirtleProgressBar.decreasePlayerHP();

    // This is the function that applies the filter to the arrays listed above. It also calls other functions
    array1.checkTheStatus();

    //debugging here------------------------------------------------------

    console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

    // get the status of health for player1

    console.log("charmanderBackup array is " +a1.charmanderBackup);

    // inform player1 of attack from computer
    document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Tackle!";

    //show attack image
    computerImg.squAtkImage4();



    //Change boolean state so that player1 can make a move
    confirm.makeMove[0].computerMove = false;
    console.log(confirm.makeMove[0]);
    confirm.enableMoves();
    console.log(confirm.makeMove[0]);
      break;







      case (player1.charmanderMoves[0].charmanderFunction5of6 === true):


      //squirtle attack move: water gun
      //confirm attack move for squirtle pokemon was activated
      computer.squirtleMovesActivated[0].squirtleFunction5of6 = true;

      //debugging here -- delete when neccessary
      console.log("squirtleMoves Function5of6 was activated : " + computer.squirtleMovesActivated[0].squirtleFunction5of6);

      //water gun does -30 damage to charmander
      //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
      a1.charmanderHealthBar.push(-30);
      a1.charmanderBackup.push(-30);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
      squirtleProgressBar.decreasePlayerHP();

      // This is the function that applies the filter to the arrays listed above. It also calls other functions
      array1.checkTheStatus();

      //debugging here------------------------------------------------------

      console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

      // get the status of health for player1

      console.log("charmanderBackup array is " +a1.charmanderBackup);

      // inform player1 of attack from computer
      document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Water Gun!";

      //show attack image
      computerImg.squAtkImage5();



      //Change boolean state so that player1 can make a move
      confirm.makeMove[0].computerMove = false;
      console.log(confirm.makeMove[0]);
      confirm.enableMoves();
      console.log(confirm.makeMove[0]);
        break;






        case (player1.charmanderMoves[0].charmanderFunction6of6 === true):


        //squirtle attack move: rest
        //confirm attack move for squirtle pokemon was activated
        computer.squirtleMovesActivated[0].squirtleFunction6of6 = true;

        //debugging here -- delete when neccessary
        console.log("squirtleMoves Function6of6 was activated : " + computer.squirtleMovesActivated[0].squirtleFunction6of6);

        //rest recovers 30 HP to squirtle
        //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
        a1.charmanderHealthBar.push(30);
        a1.charmanderBackup.push(30);


        //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
        squirtleProgressBar.decreasePlayerHP();

        // This is the function that applies the filter to the arrays listed above. It also calls other functions
        array1.checkTheStatus();

        //debugging here------------------------------------------------------

        console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

        // get the status of health for player1 and computer pokemon

        console.log("charmanderBackup array is " +a1.charmanderBackup);

        // inform player1 of attack from computer  <-- try to create a function to make this code better -- make it more abstract so all pokemon can use this function
        document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Water Gun!";

        //show attack image
        computerImg.squAtkImage5();



        //Change boolean state so that player1 can make a move
        confirm.makeMove[0].computerMove = false;
        console.log(confirm.makeMove[0]);
        confirm.enableMoves();
        console.log(confirm.makeMove[0]);
          break;



  default:
    console.log("squirtleMoves default switch function was activated -- evaluate cases to fix error.");




} // end of switch statements for squirtleMoves



      } // end of squirtleMoves function





// start of scyther moves function -- ends at 4063

      this.scytherMoves = function () {

        //scytherMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

        switch (confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
           && player1CH.pokemonType[2].isSelected === true || player1.pikachuMoves[0].pikachuFunction1of6 === true
           || player1.pikachuMoves[0].pikachuFunction2of6 === true || player1.pikachuMoves[0].pikachuFunction3of6 === true
           || player1.pikachuMoves[0].pikachuFunction4of6 === true || player1.pikachuMoves[0].pikachuFunction5of6 === true
           || player1.pikachuMoves[0].pikachuFunction6of6 === true) {

     case (player1.pikachuMoves[0].pikachuFunction1of6 === true):

       //scyther attack move: slash
      //confirm attack move for scyther pokemon was activated
      computer.scytherMovesActivated[0].scytherFunction1of6 = true;

      //debugging here -- delete when neccessary
      console.log("scytherMoves Function1of6 is : " + computer.scytherMovesActivated[0].scytherFunction1of6);

      //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
      a3.pikachuHealthBar.push(-5);
      a3.pikachuBackup.push(-5);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      scytherProgressBar.decreasePlayerHP2();

      // This is the function that applies the filter to the arrays listed above. It also calls other functions
      array1.checkTheStatus();

      //debugging here------------------------------------------------------

      console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

      // get the status of health for player1

      console.log("pikachuBackup array is " +a3.pikachuHealthBar);

      // inform player1 of attack from computer
      document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0] + " attacked "+ player1CH.player1PokemonChoices[2] +" with Slash!";

      //show attack image
      computerImg.scyAtkImage1();



      //Change boolean state so that player1 can make a move
      confirm.makeMove[0].computerMove = false;
      console.log(confirm.makeMove[0]);
      confirm.enableMoves();
      console.log(confirm.makeMove[0]);

       break;




     case (player1.pikachuMoves[0].pikachuFunction2of6 === true):

     //scyther attack move: Quick Attack
     //confirm attack move for scyther pokemon was activated
     computer.scytherMovesActivated[0].scytherFunction2of6 = true;

     //debugging here -- delete when neccessary
     console.log("scytherMoves Function2of6 was activated : " + computer.scytherMovesActivated[0].scytherFunction2of6);

     //Quick Attack does -5 damage to pikachu
     //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
     a3.pikachuHealthBar.push(-5);
     a3.pikachuBackup.push(-5);


     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
     scytherProgressBar.decreasePlayerHP2();

     // This is the function that applies the filter to the arrays listed above. It also calls other functions
     array1.checkTheStatus();

     //debugging here------------------------------------------------------

     console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

     // get the status of health for player1

     console.log("pikachuBackup array is " +a3.pikachuBackup);

     // inform player1 of attack from computer
     document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ " attacked "+ player1CH.player1PokemonChoices[2] +" with Quick Attack!";

     //show attack image
     computerImg.squAtkImage2();



     //Change boolean state so that player1 can make a move
     confirm.makeMove[0].computerMove = false;
     console.log(confirm.makeMove[0]);
     confirm.enableMoves();
     console.log(confirm.makeMove[0]);

       break;




     case (player1.pikachuMoves[0].pikachuFunction3of6 === true):


     //scyther attack move: X-Scissor
     //confirm attack move for squirtle pokemon was activated
     computer.scytherMovesActivated[0].scytherFunction3of6 = true;

     //debugging here -- delete when neccessary
     console.log("scytherMoves Function3of6 was activated : " + computer.scytherMovesActivated[0].scytherFunction3of6);

     //scyther does -60 damage to pikachu
     //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
     a3.pikachuHealthBar.push(-60);
     a3.pikachuBackup.push(-60);


     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
     scytherProgressBar.decreasePlayerHP2();

     // This is the function that applies the filter to the arrays listed above. It also calls other functions
     array1.checkTheStatus();

     //debugging here------------------------------------------------------

     console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

     // get the status of health for player1

     console.log("pikachuBackup array is " +a3.pikachuBackup);

     // inform player1 of attack from computer
     document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ " attacked "+ player1CH.player1PokemonChoices[2]  +" with X-Scissor!";

     //show attack image
     computerImg.squAtkImage3();



     //Change boolean state so that player1 can make a move
     confirm.makeMove[0].computerMove = false;
     console.log(confirm.makeMove[0]);
     confirm.enableMoves();
     console.log(confirm.makeMove[0]);
       break;







       case (player1.pikachuMoves[0].pikachuFunction4of6 === true):


       //scyther attack move: Fury Cutter
       //confirm attack move for squirtle pokemon was activated
       computer.scytherMovesActivated[0].scytherFunction4of6 = true;

       //debugging here -- delete when neccessary
       console.log("scytherMoves Function4of6 was activated : " + computer.scytherMovesActivated[0].scytherFunction4of6);

       //Fury Cutter does -10 damage to pikachu
       //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
       a3.pikachuHealthBar.push(-10);
       a3.pikachuBackup.push(-10);


       //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
       scytherProgressBar.decreasePlayerHP2();

       // This is the function that applies the filter to the arrays listed above. It also calls other functions
       array1.checkTheStatus();

       //debugging here------------------------------------------------------

       console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

       // get the status of health for player1

       console.log("pikachuBackup array is " +a3.pikachuBackup);

       // inform player1 of attack from computer
       document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ " attacked "+ player1CH.player1PokemonChoices[2] +" with Fury Cutter!";

       //show attack image
       computerImg.squAtkImage4();



       //Change boolean state so that player1 can make a move
       confirm.makeMove[0].computerMove = false;
       console.log(confirm.makeMove[0]);
       confirm.enableMoves();
       console.log(confirm.makeMove[0]);
         break;







         case (player1.pikachuMoves[0].pikachuFunction5of6 === true):


         //scyther attack move: Wing Attack
         //confirm attack move for scyther pokemon was activated
         computer.scytherMovesActivated[0].scytherFunction5of6 = true;

         //debugging here -- delete when neccessary
         console.log("scytherMoves Function5of6 was activated : " + computer.scytherMovesActivated[0].scytherFunction5of6);

         //Wing Attack does -30 damage to charmander
         //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
         a3.pikachuHealthBar.push(-30);
         a3.pikachuBackup.push(-30);


         //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
         scytherProgressBar.decreasePlayerHP2();

         // This is the function that applies the filter to the arrays listed above. It also calls other functions
         array1.checkTheStatus();

         //debugging here------------------------------------------------------

         console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

         // get the status of health for player1

         console.log("pikachuBackup array is " +a3.pikachuBackup);

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ " attacked "+ player1CH.player1PokemonChoices[2] +" with Wing Attack!";

         //show attack image
         computerImg.squAtkImage5();



         //Change boolean state so that player1 can make a move
         confirm.makeMove[0].computerMove = false;
         console.log(confirm.makeMove[0]);
         confirm.enableMoves();
         console.log(confirm.makeMove[0]);
           break;






           case (player1.pikachuMoves[0].pikachuFunction6of6 === true):


           //scyther attack move: rest2
           //confirm attack move for scyther pokemon was activated
           computer.scytherMovesActivated[0].scytherFunction6of6 = true;

           //debugging here -- delete when neccessary
           console.log("scytherMoves Function6of6 was activated : " + computer.scytherMovesActivated[0].scytherFunction6of6);

           //rest2 recovers 30 HP to scyther (its-self)
           //reflect the changes to scytherHealthBar AND scySpeedProgressBar array as well.
           a10.scytherHpRecovered.push(30);
           a10.scySpeedProgressBar.push(-50);


           //this function changes the HTML progress bar that displays the pokemon HP (this attack recovers scyther when pikachu attacks)
           scytherProgressBar.decreasePlayerHP2();

           // This is the function that applies the filter to the arrays listed above. It also calls other functions
           array1.checkTheStatus();

           //debugging here------------------------------------------------------

           console.log("scytherHealthBar array is "+a4.scytherHealthBar);

           // get the status of health for player1

           console.log("scytherBackup array is " +a4.scytherBackup);

           // inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+  " used rest to recover!";

           //show attack image
           computerImg.squAtkImage5();



           //Change boolean state so that player1 can make a move
           confirm.makeMove[0].computerMove = false;
           console.log(confirm.makeMove[0]);
           confirm.enableMoves();
           console.log(confirm.makeMove[0]);
             break;



     default:
       console.log("scytherMoves default switch function was activated -- evaluate cases to fix error.(2)");




   } // end of switch statements for scytherMoves



         } // end of scytherMoves function










// start of onixMoves -- ends at 4404

         this.onixMoves = function () {

           //onixMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

           switch (confirm.makeMove[0].player1Move === false && confirm.makeMove[0].computerMove === true
              && player1CH.pokemonType[1].isSelected === true || player1.blastoiseMoves[0].blastoiseFunction1of6 === true
              || player1.blastoiseMoves[0].blastoiseFunction2of6 === true || player1.blastoiseMoves[0].blastoiseFunction3of6 === true
              || player1.blastoiseMoves[0].blastoiseFunction4of6 === true || player1.blastoiseMoves[0].blastoiseFunction5of6 === true
              || player1.blastoiseMoves[0].blastoiseFunction6of6 === true) {

        case (player1.blastoiseMoves[0].blastoiseFunction1of6 === true):

          //onix attack move: Rock Throw
         //confirm attack move for onix pokemon was activated
         computer.onixMovesActivated[0].onixFunction1of6 = true;

         //debugging here -- delete when neccessary
         console.log("onixMoves Function1of6 is : " + computer.onixMovesActivated[0].onixFunction1of6);

         //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
         a5.blastoiseHealthBar.push(-5);
         a5.blastoiseBackup.push(-5);


         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         onixProgressBar.decreasePlayerHP3();

         // This is the function that applies the filter to the arrays listed above. It also calls other functions
         array1.checkTheStatus();

         //debugging here------------------------------------------------------

         console.log("blastoiseHealthBar array is "+a5.blastoiseHealthBar);

         // get the status of health for player1

         console.log("blastoiseBackup array is " +a5.blastoiseBackup);

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " attacked "+ player1CH.player1PokemonChoices[1] +" with Rock Throw!";

         //show attack image
         computerImg.squAtkImage1();



         //Change boolean state so that player1 can make a move
         confirm.makeMove[0].computerMove = false;
         console.log(confirm.makeMove[0]);
         confirm.enableMoves();
         console.log(confirm.makeMove[0]);

          break;




        case (player1.blastoiseMoves[0].blastoiseFunction2of6 === true):

        //onix attack move: Smack Down
        //confirm attack move for onix pokemon was activated
        computer.onixMovesActivated[0].onixFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("onixMoves Function2of6 was activated : " + computer.onixMovesActivated[0].onixFunction2of6);

        //Smack Down does -5 damage to blastoise
        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        a5.blastoiseHealthBar.push(-5);
        a5.blastoiseBackup.push(-5);


        //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
        onixProgressBar.decreasePlayerHP3();

        // This is the function that applies the filter to the arrays listed above. It also calls other functions
        array1.checkTheStatus();

        //debugging here------------------------------------------------------

        console.log("blastoiseHealthBar array is "+a5.blastoiseHealthBar);

        // get the status of health for player1 and computer pokemon

        console.log("blastoiseBackup array is " +a5.blastoiseBackup);

        // inform player1 of attack from computer
        document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " attacked "+ player1CH.player1PokemonChoices[1] +" with Smack Down!";

        //show attack image
        computerImg.squAtkImage2();



        //Change boolean state so that player1 can make a move
        confirm.makeMove[0].computerMove = false;
        console.log(confirm.makeMove[0]);
        confirm.enableMoves();
        console.log(confirm.makeMove[0]);

          break;




        case (player1.blastoiseMoves[0].blastoiseFunction3of6 === true):


        //onix attack move: Rock Slide
        //confirm attack move for onix pokemon was activated
        computer.onixMovesActivated[0].onixFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("onixMoves Function3of6 was activated : " + computer.onixMovesActivated[0].onixFunction3of6);

        //Rock Slide does -60 damage to blastoise
        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        a5.blastoiseHealthBar.push(-60);
        a5.blastoiseBackup.push(-60);


        //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
        onixProgressBar.decreasePlayerHP3();

        // This is the function that applies the filter to the arrays listed above. It also calls other functions
        array1.checkTheStatus();

        //debugging here------------------------------------------------------

        console.log("blastoiseHealthBar array is "+a5.blastoiseHealthBar);

        // get the status of health for player1 and computer pokemon

        console.log("blastoiseBackup array is " +a5.blastoiseBackup);

        // inform player1 of attack from computer
        document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " attacked "+ player1CH.player1PokemonChoices[1] +" with Rock Slide!";

        //show attack image
        computerImg.squAtkImage3();



        //Change boolean state so that player1 can make a move
        confirm.makeMove[0].computerMove = false;
        console.log(confirm.makeMove[0]);
        confirm.enableMoves();
        console.log(confirm.makeMove[0]);
          break;







          case (player1.blastoiseMoves[0].blastoiseFunction4of6 === true):


          //onix attack move: Screech
          //confirm attack move for onix pokemon was activated
          computer.onixMovesActivated[0].onixFunction4of6 = true;

          //debugging here -- delete when neccessary
          console.log("onixMoves Function4of6 was activated : " + computer.onixMovesActivated[0].onixFunction4of6);

          //Screech -10 damage to blastoise
          //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
          a5.blastoiseHealthBar.push(-10);
          a5.blastoiseBackup.push(-10);


          //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
          onixProgressBar.decreasePlayerHP3();

          // This is the function that applies the filter to the arrays listed above. It also calls other functions
          array1.checkTheStatus();

          //debugging here------------------------------------------------------

          console.log("blastoiseHealthBar array is "+a5.blastoiseHealthBar);

          // get the status of health for player1 and computer pokemon

          console.log("blastoiseBackup array is " +a5.blastoiseBackup);

          // inform player1 of attack from computer
          document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1] + " attacked "+ player1CH.player1PokemonChoices[1] +" with Screech!";

          //show attack image
          computerImg.squAtkImage4();



          //Change boolean state so that player1 can make a move
          confirm.makeMove[0].computerMove = false;
          console.log(confirm.makeMove[0]);
          confirm.enableMoves();
          console.log(confirm.makeMove[0]);
            break;







            case (player1.blastoiseMoves[0].blastoiseFunction5of6 === true):


            //onix attack move: Stone Edge
            //confirm attack move for onix pokemon was activated
            computer.onixMovesActivated[0].onixFunction5of6 = true;

            //debugging here -- delete when neccessary
            console.log("onixMoves Function5of6 was activated : " + computer.onixMovesActivated[0].onixFunction5of6);

            //Stone Edge does -30 damage to charmander
            //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
            a5.blastoiseHealthBar.push(-30);
            a5.blastoiseBackup.push(-30);


            //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
            onixProgressBar.decreasePlayerHP3();

            // This is the function that applies the filter to the arrays listed above. It also calls other functions
            array1.checkTheStatus();

            //debugging here------------------------------------------------------

            console.log("blastoiseHealthBar array is "+a5.blastoiseHealthBar);

            // get the status of health for player1 and computer pokemon

            console.log("blastoiseBackup array is " +a5.blastoiseBackup);

            // inform player1 of attack from computer
            document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " attacked "+ player1CH.player1PokemonChoices[1] +" with Stone Edge!";

            //show attack image
            computerImg.squAtkImage5();



            //Change boolean state so that player1 can make a move
            confirm.makeMove[0].computerMove = false;
            console.log(confirm.makeMove[0]);
            confirm.enableMoves();
            console.log(confirm.makeMove[0]);
              break;






              case (player1.blastoiseMoves[0].blastoiseFunction6of6 === true):


              //onix attack move: rest3
              //confirm attack move for onix pokemon was activated
              computer.onixMovesActivated[0].onixFunction6of6 = true;

              //debugging here -- delete when neccessary
              console.log("onixMoves Function6of6 was activated : " + computer.onixMovesActivated[0].onixFunction6of6);

              //rest recovers 30 HP to onix
              //reflect the changes to onixHealthBar AND onixBackup array as well.
              a12.onixHealthBar.push(30);
              a12.onixBackup.push(30);


              //this function changes the HTML progress bar that displays the pokemon HP (onix recovers health when blastoise attacks)
              onixProgressBar.decreasePlayerHP3();

              // This is the function that applies the filter to the arrays listed above. It also calls other functions
              array1.checkTheStatus();

              //debugging here------------------------------------------------------

              console.log("onixHealthBar array is "+a6.onixHealthBar);

              // get the status of health for player1 and computer pokemon

              console.log("onixBackup array is " +a6.onixBackup);

              // inform player1 of attack from computer
              document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " used rest to recover!"

              //show attack image
              computerImg.squAtkImage5();



              //Change boolean state so that player1 can make a move
              confirm.makeMove[0].computerMove = false;
              console.log(confirm.makeMove[0]);
              confirm.enableMoves();
              console.log(confirm.makeMove[0]);
                break;



        default:
          console.log("onixMoves default switch function was activated -- evaluate cases to fix error.(3)");




      } // end of switch statements for onixMoves



    } // end of onixMoves function






          } // end of computerMoves constructor

            } // end of computerMoves class...



computer = new computerMoves;



//inform player1 to select a pokemon at the start of the game
confirm.startGameMessage();




// restart function

function refreshPage(){

    window.location.reload();
}





// Close the drop-up menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropup')) {
    let dropUp = document.getElementsByClassName(".dropup-content");
    let i;
    for (i = 0; i < dropUp.length; i++) {
      let openDropUp = dropUp[i];
      if (openDropUp.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




// Attack menu for Event listeners

document.getElementById("attackA").addEventListener("click", attackA);
document.getElementById("attackB").addEventListener("click", attackB);
document.getElementById("attackC").addEventListener("click", attackC);

// Defense menu for Event listeners

document.getElementById("defenseA").addEventListener("click", defenseA);
document.getElementById("defenseB").addEventListener("click", defenseB);
document.getElementById("defenseC").addEventListener("click", defenseC);


// Event listener for player1 pokemonchange on line 890-1700


document.getElementById("Charmander_sel").addEventListener("click", loadCharmander);
document.getElementById("Blastoise_sel").addEventListener("click", loadBlastoise);
document.getElementById("Pikachu_sel").addEventListener("click", loadPikachu);




//Event listener for sound settings
document.getElementById("soundON").addEventListener("click", player1SD.soundSettingsOn);
document.getElementById("soundOFF").addEventListener("click", player1SD.soundSettingsOff);


//Event listener for restart button
document.getElementById("restartYES").addEventListener("click", refreshPage);





function attackA() {

console.log(confirm.makeMove[0]);
confirm.enableMoves();
confirm.disableMoves();
player1CH.debuggingOperation();



if(confirm.makeMove[0].player1Move === false && player1CH.pokemonType[0].isSelected === true ){ // charmander

  player1.fireBlasterMove();

  setTimeout (function(){


    computer.squirtleMoves();



  },2000); // computer attacks after 2 secs

}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

  player1.aquaJetMove();

  setTimeout (function(){



    computer.onixMoves();


  },2000); // computer attacks after 2 secs



}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

  player1.thunderShockMove();

  setTimeout (function(){



    computer.scytherMoves();



  },2000); // computer attacks after 2 secs



} //end of statements




}//end of attackA function

function attackB() {

console.log(confirm.makeMove[0]);

player1.blazeMove();
confirm.enableMoves();
confirm.disableMoves();








if(confirm.makeMove[0].player1Move === false){

  setTimeout (function(){


    computer.squirtleMoves();


  },2000); // computer attacks after 2 secs

}



}

function attackC() {

console.log(confirm.makeMove[0]);

player1.solarPowerMove();
confirm.enableMoves();
confirm.disableMoves();








if(confirm.makeMove[0].player1Move === false){

  setTimeout (function(){


    computer.squirtleMoves();


  },2000); // computer attacks after 2 secs

}




}



function defenseA() {


  console.log(confirm.makeMove[0]);

  player1.growlMove();
  confirm.enableMoves();
  confirm.disableMoves();








  if(confirm.makeMove[0].player1Move === false){

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }






}

function defenseB() {


  console.log(confirm.makeMove[0]);

  player1.smokeScreenMove();
  confirm.enableMoves();
  confirm.disableMoves();








  if(confirm.makeMove[0].player1Move === false){

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }






}


function defenseC() {


  console.log(confirm.makeMove[0]);

  player1.rest();
  confirm.enableMoves();
  confirm.disableMoves();








  if(confirm.makeMove[0].player1Move === false){

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }








}

//algorithem for switching pokemon is declared below

//varible declartions
let hpDamage7 = 0;
let charmanderHP11 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
let squirtleHP11 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
let pikachuHP11 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
let scytherHP11 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
let blastoiseHP11 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
let onixHP11 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
let player1LowHealthIndicator3 = document.querySelector('.player1HP');






function loadCharmander () {

  //charmander + squirtle battle
  player1CH.chrPokeImage();

  if (confirm.makeMove[0].player1Move === true && player1CH.pokemonType[0].isSelected === true) {



    switch(charmanderHP11 < 0 || charmanderHP11 >= 0) {


case (charmanderHP11 === 0):

hpDamage7 = charmanderHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#FD0202"; //red
break;

case (charmanderHP11 > 0 && charmanderHP11 <= 20):

hpDamage7 = charmanderHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#FD0202"; //red
break;

case (charmanderHP11 > 20 && charmanderHP11 <= 40):

hpDamage7 = charmanderHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#FD0202"; //red
break;

case (charmanderHP11 > 40 && charmanderHP11 <= 100):

hpDamage7 = charmanderHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#A6EDED"; //blue
break;

default:

console.log("loadCharmander default switch was activated on this line: ");


      }// end of switch statement


}//end of if statement




}//end of loadCharmander function


function loadPikachu () {

  //pikachu + scyther battle starts only when previous player1 pokemon functions are disabled
  //if charmander and blastoise is selected then the cases will disable their functions

  player1CH.pikPokeImage();

  if (confirm.makeMove[0].player1Move === true && player1CH.pokemonType[2].isSelected === true) {


    switch(player1CH.pokemonType[0].isSelected === true && player1CH.pokemonType[2].isSelected === true) {


case (player1.charmanderMoves[0].charmanderFunction1of6 === true):

player1.charmanderMoves[0].charmanderFunction1of6 = false;
computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;
confirm.makeMove[0].player1Move = false;
console.log("squirtleFunction1of6 was turned off.");
player1CH.pikPokeImage();
break;

case (player1.charmanderMoves[0].charmanderFunction2of6 === true):

player1.charmanderMoves[0].charmanderFunction2of6 = false;
computer.squirtleMovesActivated[0].squirtleFunction2of6 = false;
player1CH.pikPokeImage();
break;

case (player1.charmanderMoves[0].charmanderFunction3of6 === true):

player1.charmanderMoves[0].charmanderFunction3of6 = false;
computer.squirtleMovesActivated[0].squirtleFunction3of6 = false;
player1CH.pikPokeImage();
break;

case (player1.charmanderMoves[0].charmanderFunction4of6 === true):

player1.charmanderMoves[0].charmanderFunction4of6 = false;
computer.squirtleMovesActivated[0].squirtleFunction4of6 = false;
player1CH.pikPokeImage();
break;

case (player1.charmanderMoves[0].charmanderFunction5of6 === true):

player1.charmanderMoves[0].charmanderFunction5of6 = false;
computer.squirtleMovesActivated[0].squirtleFunction5of6 = false;
player1CH.pikPokeImage();
break;

case (player1.charmanderMoves[0].charmanderFunction6of6 === true):

player1.charmanderMoves[0].charmanderFunction6of6 = false;
computer.squirtleMovesActivated[0].squirtleFunction6of6 = false;
player1CH.pikPokeImage();
break;

default:

console.log("loadPikachu default switch was activated on this line: ");


    }// end of switch statement


}//end of if statement




}//end of loadPikachu function


function loadBlastoise () {

  //blastoise + onix battle
  player1CH.blaPokeImage();

  if (confirm.makeMove[0].player1Move === true && player1CH.pokemonType[1].isSelected === true) {



    switch(blastoiseHP11 < 0 || blastoiseHP11 >= 0) {


case (blastoiseHP11 === 0):

hpDamage7 = blastoiseHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#FD0202"; //red
break;

case (blastoiseHP11 > 0 && blastoiseHP11 <= 20):

hpDamage7 = blastoiseHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#FD0202"; //red
break;

case (blastoiseHP11 > 20 && blastoiseHP11 <= 40):

hpDamage7 = blastoiseHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#FD0202"; //red
break;

case (blastoiseHP11 > 40 && blastoiseHP11 <= 100):

hpDamage7 = blastoiseHP11;
document.querySelector(".player1HP").style.width = hpDamage7 +   "%";
player1LowHealthIndicator3.style.backgroundColor = "#A6EDED"; //blue
break;

default:

console.log("loadBlastoise default switch was activated on this line: ");


    }// end of switch statement


}//end of if statement





}//end of loadBlastoise function
