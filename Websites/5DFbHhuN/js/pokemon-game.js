
/*
NOTE:
Lastest update: (01/05/2022)

x0) rest function partially working for pikachu and bastoise. Make it work fully.   ***************************************************************************** high priority ***************** 01/05/2022
x1)
x2)
x3) on line 1069 chrPokeImage -- need to figure out a way to save and restore array when switching pokemon then copy code from 1069 to pikPokeImage and blaPokeImage *high priority*
x4) squirtleMoves on lines 3425 to 3744 -- scytherMoves on lines 3747 to 4063 -- onixMoves on lines 4074 to 4404
y) created feedback link to receive feedback from pokemon game when player1 wins the battle but need to create the feedback form  ************************************************************  12/20/2021
z) disabled the restart function on line 361 informWinner() to work on line 222
1) Work on disabling dead pokemon -- see function at line 206 -- note: this is the same problem as line 22
2) add code here for when pikachu lives and sycther dies and fix logic for other pokemon pairs. + find a way to make the health load instantly after switching pokemon *********************** 12/09/2021
2.1) Add new waiting mechanism for when computer selects a pokemon [42% completed]
2.2) Fix new waiting mechanism so that player1 can pick a pokemon when they click on it again but NOT when it's the computers turn. notify user if this happens. start with charmander and turn sound off first. ;)
3) find a way to restore pokemon healthbBar after switching pokemon -- note: need at least two pairs of pokemon that are functional (currently only have 1 pair).
3a) why is Computer health status is undefined on line 1149? maybe because it's a function?
3b) if onix is the only pokemon left and blastoise eliminates it then match is won by player1 -- create a new image and inform player1 of winning the game. Also change deadPokemonBackup to accomadate all index for all 3 functions starting with loadScytherOnly ** 12/20/2021
3c) call a switch statement on line 1443 for loadScytherOnly function *************************************************************************************************************************** 10/8/2021
4) Save health information to array when pokemon gets injured. also restore health info when player switches back to pokemon.
5) Add a rule to the referee class about not being able to attack or defend if a pokemon is NOT selected. (working on it but it has errors -- see line 201)
6) On line 791 (or computer moves - phase1 function) improve the condition for the else if function
7) fix rest function for other pokemon but first continue perfecting the rest function with squirtle and charmander before moving on ************************************ high priority********** 12/23/2021
8) improve code on line 369 -- scythers attack move -- computer attacks too fast -- it should attack every 8 secs if conditions are true
9) fix boolean state and permission levels for pikachu and scyther (line 385)
10) investigate this this.squPokeImage2() on line 411 *low priority*
11) commented out charmander and squirtle sound on line  844 *********************************************************************************************************************************** 8/24/2021
12) two cases are true for squirtleMoves with bubble beam case -- find a unqiue case where only 1 is true to fix this problem ************************************************high priority**** 12/23/2021
13) fix decreasePlayerHP2 and decreasePlayerHP3 to match decreasePlayerHP (ensure that === 0 is changed to <= 0 ) *************************************************************** low priority (12/21/2021)
14) on line 444 isPokemonAlive can be used to call the function that allows you to switch pokemon (not created yet).
15) add <= 0 attributes for pikachu and blastoise on this.decreasePlayerHP + this.decreaseComputerHP + this.deathValidator --- charmander was already completed ****low priority**************** 11/20/2021
16) create an invalid sound for increasePlayerHP function (optional) *********************************************************************************************************** low priority*** 12/22/2021

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


    this.player1TauntImage = function () { // image 1 of 1 for taunting player1 when attemping to use health restoration when health is > 40

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/laughandpoint.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove taunt image after 4 secs
        document.getElementById("player1AttackImage").innerHTML=("");

        }, 4000); // 4 sec wait time

    }




        } // end of constructor

} // end of images class



player1Img = new images;
computerImg = new images;



class sound {

  constructor () {

     this.charmanderVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/CharmanderVoice.mp3');
     this.blastoiseVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/BlastoiseVoice.wav');
     this.onixVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/OnixVoice.mp3');
     this.pikachuVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/PikachuVoice.mp3');
     this.pokemonBattleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/gameboy_battleTheme.mp3');
     this.pokemonVictoryVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/victoryThemezz.mp3');
     this.scytherVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/ScytherVoice.wav');
     this.squirtleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/SquirtleVoicezzz.mp3');
     this.soundConfirmer = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/soundConfirmer.wav');
     this.invalidAction =  new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/invalidAction.mp3');
     this.congratulationsTheme = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/congratulationsTheme.mp3');





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
    this.deadPokemon = []; // NOTE: This is an empty array that will be used later -- see line 370 (getHealth) for details. It has a size limit of 1 index only
    this.deadPokemonBackup = []; // exact duplicate of deadPokemon array but with a size limit of 6 indexes
    this.charmanderDied = false; // default
    this.squirtleDied = false; // default
    this.pikachuDied = false; // default
    this.scytherDied = false; // default
    this.blastoiseDied = false; // default
    this.onixDied = false; // default
    this.preserveDefaultHP = true; // if this is set to false then preserveHPChanges must be set to true
    this.preserveHPChanges = false; // if this is set to true, it will call preserveHpSetting(); however default is false
    this.charmanderSelected = false; // default
    this.pikachuSelected = false; // default
    this.blastoiseSelected = false; // default
    this.squirtleSelected = false; // default
    this.scytherSelected = false; // default
    this.onixSelected = false; // default
    this.charmanderCounts = 0; // default
    this.pikachuCounts = 0; // default
    this.blastoiseCounts = 0; // default
    this.squirtleCounts = 0;// default
    this.scytherCounts = 0; // default
    this.onixCounts = 0; // default
    this.battle1Player1 = false; // default
    this.battle1Computer = false;// default
    this.battle2Player1 = false; // default
    this.battle2Computer = false;// default
    this.battle3Player1 = false; // default
    this.battle3Computer = false;// default





    this.disableDeadPokemon = function () {


      console.log("disableDeadPokemon was activated.");

      // consider upgrading this statement to a switch later

      if (p1.charmanderDied === true && comp.squirtleDied === false) {

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
        else if (p1.pikachuDied === true && comp.scytherDied === false) {

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

        else if (p1.blastoiseDied === true && comp.onixDied === false) {

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




        if (comp.squirtleDied === true && p1.charmanderDied === false) {

        //cross-out computer pokemon icon if conditions are valid.

        //remove squirtle icon

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
          computerCH.loadScytherOnly();



      }//end of if statement

        //same condition for other computer icons
      if (comp.scytherDied === true && p1.pikachuDied === false) {


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
          computerCH.loadSquirtleOnly();



        }//end of if statement


       if (comp.onixDied === true && p1.blastoiseDied === false) {



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


        }//end of if statement








}// end of disableDeadPokemon






    this.deadPokemonImage = function () {

      // variable declartions
      let charmanderHP7 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP7 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP8 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP8 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP8 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP8 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
      let lastDeadPokemon1 = p1.deadPokemon.pop();


      //load pokemon tombstone image based on certain conditions.

      if (charmanderHP7 <= 0 && squirtleHP7 >= 1 && p1.charmanderDied === true && comp.squirtleSelected === true) {

          //Inform player that pokemon is dead but let the game continue

          //orginal if statement is below
          document.getElementById("statusProgress").innerHTML=(lastDeadPokemon1 +" died. Please choose next pokemon.");


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
          else if (pikachuHP8 <= 0 && scytherHP8 >= 1 && p1.pikachuDied === true && comp.scytherSelected === true) {
            document.getElementById("statusProgress").innerHTML=(lastDeadPokemon1 +" died. Please choose next pokemon.");

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


            setTimeout(function() {

           // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
           p1.disableDeadPokemon()

           // give score to computer array
           a2.computerScore.push(1);
           let score2 = a2.computerScore.reduce(array2.PokemonHPReduced);
           console.log("Computer Score: " + score2);





             },3000); // 3 sec wait time for computer to select pokemon

          }//end of 2nd if statement


          else if (blastoiseHP8  <= 0  && onixHP8 >= 1 && p1.blastoiseDied === true && comp.onixSelected === true) {
            document.getElementById("statusProgress").innerHTML=(lastDeadPokemon1 +" died. Please choose next pokemon.");

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

        else if (squirtleHP7 <= 0 && charmanderHP7 >= 1 && comp.squirtleDied === true && p1.charmanderSelected === true) {

        //Inform player computer pokemon died but let the game continue

        //original if statement is below
        document.getElementById("statusProgress").innerHTML=(lastDeadPokemon1 +" died. Please wait for computer to select the next pokemon.");

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
          else if (scytherHP8 <= 0 && pikachuHP8 >= 1 && comp.scytherDied === true && p1.pikachuSelected === true) {


          document.getElementById("statusProgress").innerHTML=(lastDeadPokemon1 +" died. Please wait for computer to select the next pokemon.");

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



          setTimeout(function(){


          // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line

          p1.disableDeadPokemon();

         // give score to player1 array
         a1.player1Score.push(1);
         let score1 = a1.player1Score.reduce(array1.PokemonHPReduced);
         console.log("Player1 Score: " + score1);




           },3000); // 3 sec wait time for computer to select pokemon

        }//end of 5th if statement


          else if (onixHP8  <= 0 && blastoiseHP8 >= 1 && comp.onixDied === true && p1.blastoiseSelected === true) {


          document.getElementById("statusProgress").innerHTML=(lastDeadPokemon1 +" died. Please wait for computer to select the next pokemon.");

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



        if (charmanderHP4  <= 0 && squirtleHP4 >= 1) {

          // confirm dead pokemon
          p1.charmanderDied = true;

          //confirm that the pokemon can no longer be selected
          player1CH.pokemonType[0].isSelected = false; // charmander

          //record data to deadPokemon array as well
          p1.deadPokemon.push("Charmander");
          p1.deadPokemonBackup.push("Charmander");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + p1.deadPokemon);
          console.log("Dead pokemonBackup array entries: " + p1.deadPokemonBackup);

          //display player1 deadPokemon
          p1.deadPokemonImage();

          //make changes to pokemon indicator icon
          player1CH.pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          p1.deadPokemon.length = 1;
          p1.deadPokemonBackup.length = 6;




        } else if (charmanderHP4 >= 1 && squirtleHP4  <= 0) {


          // confirm dead pokemon
          comp.squirtleDied = true;

          //confirm that the pokemon can no longer be selected
          computerCH.pokemonType[2].isSelected = false; // squirtle

          // record data to deadPokemon array as well
          p1.deadPokemon.push("Squirtle");
          p1.deadPokemonBackup.push("Squirtle");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + p1.deadPokemon);
          console.log("Dead pokemonBackup array entries: " + p1.deadPokemonBackup);

          // display computer deadPokemon
          p1.deadPokemonImage();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          p1.deadPokemon.length = 1;
          p1.deadPokemonBackup.length = 6;




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




    if (pikachuHP6 <= 0 && scytherHP6 >= 1) {

      // confirm dead pokemon
      p1.pikachuDied = true;

      //confirm that the pokemon can no longer be selected
      player1CH.pokemonType[2].isSelected = false; // pikachu

      //record data to deadPokemon array as well
      p1.deadPokemon.push("Pikachu");
      p1.deadPokemonBackup.push("Pikachu");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);
      console.log("Dead pokemonBackup array entries: " + p1.deadPokemonBackup);

      //display player1 deadPokemon
      p1.deadPokemonImage();

      //make changes to pokemon indicator icon
      player1CH.pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 1;
      p1.deadPokemonBackup.length = 6;


    } else if (pikachuHP6 >= 1 && scytherHP6 <= 0) {


      // confirm dead pokemon
      comp.scytherDied = true;

      //confirm that the pokemon can no longer be selected
      computerCH.pokemonType[3].isSelected = false; // Scyther

      // record data to deadPokemon array as well
      p1.deadPokemon.push("Scyther");
      p1.deadPokemonBackup.push("Scyther");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);
      console.log("Dead pokemonBackup array entries: " + p1.deadPokemonBackup);

      // display computer deadPokemon
      p1.deadPokemonImage();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 1;
      p1.deadPokemonBackup.length = 6;



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



    if (blastoiseHP7 <= 0  && onixHP7 >= 1) {

      // confirm dead pokemon
      p1.blastoiseDied = true;

      //confirm that the pokemon can no longer be selected
      player1CH.pokemonType[1].isSelected = false; // blastoise

      //record data to deadPokemon array as well
      p1.deadPokemon.push("Blastoise");
      p1.deadPokemonBackup.push("Blastoise");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);
      console.log("Dead pokemonBackup array entries: " + p1.deadPokemonBackup);

      //display player1 deadPokemon
      p1.deadPokemonImage();

      //make changes to pokemon indicator icon
      player1CH.pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 1;
      p1.deadPokemonBackup.length = 6;


    } else if (blastoiseHP7 >= 1 && onixHP7 <= 0) {


      // confirm dead pokemon
      comp.onixDied = true;

      //confirm that the pokemon can no longer be selected
      computerCH.pokemonType[4].isSelected = false; // onix

      // record data to deadPokemon array as well
      p1.deadPokemon.push("Onix");
      p1.deadPokemonBackup.push("Onix");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + p1.deadPokemon);
      console.log("Dead pokemonBackup array entries: " + p1.deadPokemonBackup);

      // display computer deadPokemon
      p1.deadPokemonImage();


      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      p1.deadPokemon.length = 1;
      p1.deadPokemonBackup.length = 6;



    } //end of if statements


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


                console.log("insert code here if needed on this line (1)");

        } else if (squirtleHP2 <= 40|| scytherHP3 <= 40 || onixHP3 <= 40) {




             document.getElementById("statusProgress").innerHTML=("Computer pokemon health is low.");


                console.log("insert code here if needed on this line (2)");




           } // end of if statements


    } // end of informStatus function


    this.informWinner = function() {

      console.log("InformWinner function was called.");

      // this function keeps track of the score (by boolean statements) and informs the winner of the game. It also keeps track of dead pokemon.

      // variable declartions

      let charmanderHP3 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let squirtleHP3 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let pikachuHP4 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let scytherHP4 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
      let blastoiseHP4 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let onixHP4 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

  //conditions to execute if computer defeats player1 pokemon are below


  if (charmanderHP3 <= 0 && squirtleHP3 >= 1 && p1.charmanderSelected === true && comp.squirtleSelected === true) {

    document.getElementById("statusProgress").innerHTML=(p1.pokemonName[0] + " died. Pick another pokemon to continue the battle.");
    p1.battle1Player1 = false;
    comp.battle1Computer = true;
    console.log("battle1Player1: " + p1.battle1Player1);
    console.log("battle1Computer: " + comp.battle1Computer);
    p1.isCharmanderDead();

  }else if (pikachuHP4 <= 0 && scytherHP4 >= 1  && p1.pikachuSelected === true && comp.scytherSelected === true) {

    document.getElementById("statusProgress").innerHTML=(p1.pokemonName[5] + " died. Pick another pokemon to continue the battle.");
    p1.battle2Player1 = false;
    comp.battle2Computer = true;
    console.log("battle2Player1: " + p1.battle2Player1);
    console.log("battle2Computer: " + comp.battle2Computer);
    p1.isPikachuDead();

  }else if (blastoiseHP4 <= 0 && onixHP4 >= 1  && p1.blastoiseSelected === true && comp.onixSelected === true) {

    document.getElementById("statusProgress").innerHTML=(p1.pokemonName[2] +" died. Pick another pokemon to continue the battle.");
    p1.battle3Player1 = false;
    comp.battle3Computer = true;
    console.log("battle3Player1: " + p1.battle3Player1);
    console.log("battle3Computer: " + comp.battle3Computer);
    p1.isBlastoiseDead();

  }else if (charmanderHP3 >= 1 && squirtleHP3 <= 0  && p1.charmanderSelected === true && comp.squirtleSelected === true) {

    document.getElementById("statusProgress3").innerHTML=(p1.pokemonName[0] +" won the match! Please wait for computer to select another pokemon.");
    comp.battle1Computer = false;
    p1.battle1Player1 = true;
    console.log("battle1Player1: " + p1.battle1Player1);
    console.log("battle1Computer: " + comp.battle1Computer);
    p1.isCharmanderDead();

  }else if (pikachuHP4 >= 1 && scytherHP4 <= 0  && p1.pikachuSelected === true && comp.scytherSelected === true ) {

    document.getElementById("statusProgress3").innerHTML=(p1.pokemonName[5] +" won the match! Please wait for computer to select another pokemon.");
    comp.battle2Computer = false;
    p1.battle2Player1 = true;
    console.log("battle2Player1: " + p1.battle2Player1);
    console.log("battle2Computer: " + comp.battle2Computer);
    p1.isPikachuDead();

  }else if (blastoiseHP4 >= 1 && onixHP4 <= 0  && p1.blastoiseSelected === true && comp.onixSelected === true) {

    document.getElementById("statusProgress3").innerHTML=(p1.pokemonName[2] +" won the match! Please wait for computer to select another pokemon.");
    comp.battle3Computer = false;
    p1.battle3Player1 = true;
    console.log("battle3Player1: " + p1.battle3Player1);
    console.log("battle3Computer: " + comp.battle3Computer);
    p1.isBlastoiseDead();

  }//end of multiple if statements for informWinner function


//if statement below needs to be seperated from the first one because two scenarios become true at the same time but only one statement can be executed if true.

  if (p1.battle1Player1 === true && p1.battle2Player1 === true && p1.battle3Player1 === true) {

//load victory theme if player1 wins the match
player1SD.congratulationsTheme.play();


//remove previous Pokemon image

let elem =  document.createElement("img");
elem.src ="";
document.getElementById("CpuPokeImage").appendChild(elem);
document.getElementById("CpuPokeImage").style.width = 100;
document.getElementById("CpuPokeImage").style.height = 100;

//replace with new pokemon

document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/winner.jpg" </img>';
document.getElementById("CpuPokeImage").style.width = 320;
document.getElementById("CpuPokeImage").style.height = 380;

setTimeout(function() {

//Inform player1 of victory

document.getElementById("statusProgress").innerHTML=("<b>Congratulations, you won the match!</b>");

document.getElementById("statusProgress2").innerHTML=("");

document.getElementById("statusProgress3").innerHTML = "Click the link below to leave feedback. ";
document.getElementById("sendLink").innerHTML = "Give feedback";
document.getElementById("sendLink").href = "https://greenaces.site/pokemonForm.php";
document.getElementById("sendLink").target = "_blank";



},3000); // 3 sec wait time for changing statusProgress messages





}else if (comp.battle1Computer === true && comp.battle2Computer === true && comp.battle3Computer === true) {

  //remove previous Pokemon image

  let elem =  document.createElement("img");
  elem.src ="";
  document.getElementById("CpuPokeImage").appendChild(elem);
  document.getElementById("CpuPokeImage").style.width = 100;
  document.getElementById("CpuPokeImage").style.height = 100;

  //replace with new pokemon

  document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/gamelost.jpg" </img>';
  document.getElementById("CpuPokeImage").style.width = 320;
  document.getElementById("CpuPokeImage").style.height = 380;

  setTimeout(function() {

  //Inform player1 of defeat

  document.getElementById("statusProgress").innerHTML=("You lost the battle, but you can restart the game and try again!");

  document.getElementById("statusProgress2").innerHTML=("");

  document.getElementById("statusProgress3").innerHTML=("");


},3000); // 3 sec wait time for changing statusProgress messages


}//end of 2nd if statement for informWinner function





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


          //Change boolean state so player1 can make a move
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

        if (p1.charmanderDied === false && comp.squirtleDied === false || p1.pikachuDied === false && comp.scytherDied === false || p1.blastoiseDied === false && comp.onixDied === false) {

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

        }//end of if statement

        if (p1.charmanderDied === true && comp.squirtleDied === false) {

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

        }//end of if statement

         if (p1.pikachuDied === true && comp.scytherDied === false) {

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

        }//end of if statement

         if  (p1.blastoiseDied === true && comp.onixDied === false) {

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

        }//end of if statement




    }// end of pokemonIndicator


    this.debuggingOperation = function() {

      //default message for debuggingOperating function -- comment out when working on errors

     //console.log("DebuggingOperation function is launched. There are no major issues here.");


      // debugging begins here ----------------------------------------------------------


        let x = 20;


        if (x === 10) {




          console.log("debuggingOperation successful : if statment was triggered.");
          console.log("----------------------------------------------------------");












          console.log("---------------------------------------------------------");







        }//end of if statement for debuggingOperation








   }//end of debuggingOperation function




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

      //if charmander survives and squirtle dies then a new pokemon replaces squirtle
      if (p1.charmanderDied === false && comp.squirtleDied === true) {


        console.log("add code here for when charmander lives and squirtle dies.");



      //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
    }else if (p1.charmanderDied === true) {

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





      //Display and save computer pokemon name to savedPokemonName2
      document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
      computerCH.savedPokemonName2.push("Squirtle");



       //verify that computer selected a pokemon
      computerCH.pokemonType[2].isSelected = true; // squirtle

      //set boolean stats to false for non-selected pokemon

      computerCH.pokemonType[1].isSelected = false;
      computerCH.pokemonType[3].isSelected = false;
      computerCH.pokemonType[4].isSelected = false;
      computerCH.pokemonType[5].isSelected = false;



    }

     });


   },3000); // 3 sec wait time to load computer pokemon


   //new entry added 12/09/21
   //removes squirtle tombstone and reloads charmander image if player1 score is equal or greater than 1
 }else if (score0 >= 1) {

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





       //Display and save computer pokemon name to savedPokemonName2
       document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
       computerCH.savedPokemonName2.push("Squirtle");



        //verify that computer selected a pokemon
       computerCH.pokemonType[2].isSelected = true; // squirtle

       //set boolean stats to false for non-selected pokemon

       computerCH.pokemonType[1].isSelected = false;
       computerCH.pokemonType[3].isSelected = false;
       computerCH.pokemonType[4].isSelected = false;
       computerCH.pokemonType[5].isSelected = false;



     }

      });


    },3000); // 3 sec wait time to load computer pokemon


          }//end of multiple if statements




    }// end of 1st if statement

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






         //if Blastoise survives and onix dies then a new pokemon replaces onix
         if (p1.blastoiseDied === false && comp.onixDied === true) {


           console.log("add code here for when blastoise lives and onix dies.");



         //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
       }else if (p1.blastoiseDied === true) {

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




             //Display and save computer pokemon name to savedPokemonName2 on line 445
             document.getElementById("cpuPokemonName").innerHTML = "Onix";
             computerCH.savedPokemonName2.push("Onix");


             //verify that computer selected a pokemon
             computerCH.pokemonType[4].isSelected = true; //onix

             // set boolean stats to false for non-selected pokemon
             computerCH.pokemonType[0].isSelected = false;
             computerCH.pokemonType[2].isSelected = false;
             computerCH.pokemonType[5].isSelected = false;



          }

        });


      },3000); // 3 sec wait time to load computer pokemon

      //new entry added 12/09/21
      //removes onix tombstone and reloads blastoise image if player1 score is equal or greater than 1
    }else if (score0 >= 1) {

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




              //Display and save computer pokemon name to savedPokemonName2 on line 445
              document.getElementById("cpuPokemonName").innerHTML = "Onix";
              computerCH.savedPokemonName2.push("Onix");


              //verify that computer selected a pokemon
              computerCH.pokemonType[4].isSelected = true; //onix

              // set boolean stats to false for non-selected pokemon
              computerCH.pokemonType[0].isSelected = false;
              computerCH.pokemonType[2].isSelected = false;
              computerCH.pokemonType[5].isSelected = false;



           }

         });


       },3000); // 3 sec wait time to load computer pokemon


              }//end of multiple if statements




        } // end of 1st if statement

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




        //if pikachu survives and scyther dies then a new pokemon replaces scyther
        if (p1.pikachuDied === false && comp.scytherDied === true) {

          console.log("add code here for when pikachu lives and sycther dies.");




        //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
      }else if (p1.pikachuDied === true) {

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




            //Display and save computer pokemon name to savedPokemonName2 on line 445
            document.getElementById("cpuPokemonName").innerHTML = "Scyther";
            computerCH.savedPokemonName2.push("Scyther");


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



   //new entry added 12/09/21
   //removes scyther tombstone and reloads pikachu image if player1 score is equal or greater than 1
   }else if (score0 >= 1) {

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




         //Display and save computer pokemon name to savedPokemonName2 on line 445
         document.getElementById("cpuPokemonName").innerHTML = "Scyther";
         computerCH.savedPokemonName2.push("Scyther");


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

    let scytherHP10 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);

    //if scyther dies than squirtle is loaded up -- no attacks are programmed as of now

    if(scytherHP10 === 0 && p1.deadPokemonBackup[0] === "Scyther") {


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


      },1000); // 1 sec wait time for loading new progressBar for Scyther

       //call a switch statement here -- work on this later


        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[2] + " and has 2 pokemon remaining.");

       //load pokemon sound
       computerSD.squirtleVO.play();


       //Display and save computer pokemon name to savedPokemonName2 on line 445
       document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
       computerCH.savedPokemonName2.push("Squirtle");


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

    let onixHP10 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

    //if onix is the only pokemon left and blastoise eliminates it then match is won by player1. -- no attacks are programmed as of now

    if(onixHP10 === 0 && p1.deadPokemonBackup[0] === "Onix") {


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


      },3000); // 3 sec wait time for loading new progressBar for Scyther

       //call a switch statement here -- work on this later


        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[1] + " and has 2 pokemon remaining.");

       //load pokemon sound
       computerSD.onixVO.play();


       //Display and save computer pokemon name to savedPokemonName2 on line 445
       document.getElementById("cpuPokemonName").innerHTML = "Onix";
       computerCH.savedPokemonName2.push("Onix");


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

    if(squirtleHP10 === 0 && p1.deadPokemonBackup[0] === "Squirtle") {


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


      },1000); // 1 sec wait time for loading new progressBar for Scyther

       //call a switch statement here -- work on this later


        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[0] + " and has 2 pokemon remaining.");

       //load pokemon sound
       computerSD.scytherVO.play();


       //Display and save computer pokemon name to savedPokemonName2 on line 445
       document.getElementById("cpuPokemonName").innerHTML = "Scyther";
       computerCH.savedPokemonName2.push("Scyther");


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

    this.charmanderHealthBar =  [100]; //This array will contain hp damage and health restoration data for charmander -- same is true for other pokemon arrays
    this.charmanderBackup =     [100];//This array will only contain hp damage data for charmander -- same is true for other pokemon arrays
    this.charmanderHpRecovered = [0]; //This array will only contain retored hp data for charmander -- same is true for other pokemon arrays
    this.chaSpeedProgressBar =  [100]; //This array will be used as a limit to prevent health restoration for charmander -- ex: if speed is 0 then health resotration is disabled -- same is true for other pokemon arrays
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
    this.fullHealth =           [100];




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
      let player1HealthIndicator4 = document.querySelector('.player1HP');

      //during first pokemon battle, no changes to pokemon progress bars will be made (default setting) whenever pokemon is selected

      if (charmanderHP6 === 100 && squirtleHP6 === 100 && p1.charmanderSelected === true && comp.squirtleSelected === true) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        player1HealthIndicator4.style.backgroundColor = "#A6EDED"; //blue

        setTimeout(function() {

          document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
          document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

         }, 3000); // 3 sec delay to load computer progressbar





      }else if (pikachuHP12 === 100 && scytherHP12 === 100 && p1.pikachuSelected === true && comp.scytherSelected === true) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        player1HealthIndicator4.style.backgroundColor = "#A6EDED"; //blue

        setTimeout(function() {

          document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
          document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

         }, 3000); // 3 sec delay to load computer progressbar


      }else if (blastoiseHP12 === 100 && onixHP12 === 100 && p1.blastoiseSelected === true && comp.onixSelected === true) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        player1HealthIndicator4.style.backgroundColor = "#A6EDED"; //blue

        setTimeout(function() {

          document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
          document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

         }, 3000); // 3 sec delay to load computer progressbar




      }//end of if statements

                  }// end of defaultHPSetting



         this.preserveHpSetting = function () {

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


         if (charmanderHP6 < 100 && squirtleHP6 < 100 && p1.charmanderSelected === true && comp.squirtleSelected === true) {


         document.querySelector(".player1HP").style.width = charmanderHP6 +   "%";
         document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";


         setTimeout(function() {

           document.querySelector(".cpuHP").style.width = squirtleHP6 +   "%";
           document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

          }, 3000); // 3 sec delay to load computer progressbar


       }else if (pikachuHP13 < 100 && scytherHP13 < 100 && p1.pikachuSelected === true && comp.scytherSelected === true) {


         document.querySelector(".player1HP").style.width = pikachuHP13 +   "%";
         document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";


         setTimeout(function() {

           document.querySelector(".cpuHP").style.width = scytherHP13 +   "%";
           document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

          }, 3000); // 3 sec delay to load computer progressbar


       }else if (blastoiseHP13 < 100 && onixHP13 < 100 && p1.blastoiseSelected === true && comp.onixSelected === true) {


         document.querySelector(".player1HP").style.width = blastoiseHP13 +   "%";
         document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";


         setTimeout(function() {

           document.querySelector(".cpuHP").style.width = onixHP13 +   "%";
           document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

          }, 3000); // 3 sec delay to load computer progressbar


          }//end of if statements

                  }//end of preserveHpSetting function





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

        case (squirtleHP5 < 0):
        hpDamage = 0;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        p1.informWinner();

        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        break;

        case (squirtleHP5 === 0):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";

        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        p1.informWinner();
        break;

        case (squirtleHP5 > 0 && squirtleHP5 <= 20):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";

        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        break;

        case (squirtleHP5 > 20 && squirtleHP5 <= 40):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        break;

        case (squirtleHP5 > 40 && squirtleHP5 <= 100):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";

        computerLowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

        break;

        default:

        console.log("decreaseComputerHP default function was called. Look at the switch cases.");

  }// end of switch statement

        }// end of if statement

            } // end of decreaseComputerHP function



            this.decreaseComputerHP2 = function () {

              // variable declartions


              let hpDamage5 = 0;
              let onixHP2 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
              let computerLowHealthIndicator = document.querySelector('.cpuHP');



              if (onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction1of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction2of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction3of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction4of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction5of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction6of6 === true) {

                //if statement ensures that some funtions are activated before making changes to the progress bar


                switch(onixHP2 < 0 || onixHP2 >= 0) {


                case (onixHP2 === 0):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                p1.informWinner();

                computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                break;

                case (onixHP2 > 0 && onixHP2 <= 20):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";

                computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                break;

                case (onixHP2 > 20 && onixHP2 <= 40):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";

                computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                break;

                case (onixHP2 > 40 && onixHP2 <= 100):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";

                computerLowHealthIndicator.style.backgroundColor = "#A6EDED";//blue
                break;

                default:

                console.log("decreaseComputerHP2 default function was called. Look at the switch cases. (2-2)");

          }// end of switch statement

                }// end of if statement

              } // end of decreaseComputerHP2 function







              this.decreaseComputerHP3 = function () {

                // variable declartions


                let hpDamage6 = 0;
                let scytherHP2 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
                let computerLowHealthIndicator = document.querySelector('.cpuHP');



                if (scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction1of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction2of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction3of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction4of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction5of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction6of6 === true) {

                  //if statement ensures that some funtions are activated before making changes to the progress bar


                  switch(scytherHP2 < 0 || scytherHP2 >= 0) {


                  case (scytherHP2 === 0):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";

                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                  p1.informWinner();
                  break;

                  case (scytherHP2 > 0 && scytherHP2 <= 20):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";

                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                  break;

                  case (scytherHP2 > 20 && scytherHP2 <= 40):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                  break;

                  case (scytherHP2 > 40 && scytherHP2 <= 100):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";

                  computerLowHealthIndicator.style.backgroundColor = "#A6EDED";//blue
                  break;

                  default:

                 console.log("decreaseComputerHP3 default function was called. Look at the switch cases. (3-3)");

                    }// end of switch statement

                  }// end of if statement

                } // end of decreaseComputerHP3 function




    this.decreasePlayerHP = function () {



      // variable declartions

      let hpDamage2 = 0;
      let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let player1LowHealthIndicator = document.querySelector('.player1HP');


      if(charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction2of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction3of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction4of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction5of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction6of6 === true) {

        //if statement ensures that some functions are activated before making changes to the progress bar


        switch (charmanderHP5 < 0 || charmanderHP5 >= 0) {

        case (charmanderHP5 < 0):
        hpDamage2 = 0;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";

        comp.informWinner();
        break;



        case (charmanderHP5 === 0):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

        comp.informWinner();
        break;


        case (charmanderHP5 > 0 && charmanderHP5 <= 20):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red


        break;

        case (charmanderHP5 > 20 && charmanderHP5 <= 40):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red



        break;

        case (charmanderHP5 > 40 && charmanderHP5 <= 100):
        hpDamage2 = charmanderHP5;
        document.querySelector(".player1HP").style.width = hpDamage2 +   "%";
        player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue



        break;

        default:

        console.log("decreasePlayerHP default function was called. Look at the switch cases (1).");


}// end of switch statement

      }// end of if statement

          } // end of decreasePlayerHP function



          this.decreasePlayerHP2 = function () {

            // variable declartions

            let hpDamage3 = 0;
            let pikachuHP2 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
            let player1LowHealthIndicator = document.querySelector('.player1HP');



            if(pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction1of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction2of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction3of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction4of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction5of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction6of6 === true) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(pikachuHP2 < 0 || pikachuHP2 >= 0) {

              case (pikachuHP2 < 0):
              hpDamage3 = 0;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";

              comp.informWinner();
              break;


              case (pikachuHP2 === 0):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red



              comp.informWinner();
              break;

              case (pikachuHP2 > 0 && pikachuHP2 <= 20):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red



              break;

              case (pikachuHP2 > 20 && pikachuHP2 <= 40):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red



              break;

              case (pikachuHP2 > 40 && pikachuHP2 <= 100):
              hpDamage3 = pikachuHP2;
              document.querySelector(".player1HP").style.width = hpDamage3 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue



              break;

              default:

              console.log("decreasePlayerHP2 default function was called. Look at the switch cases. (2)");


      }// end of switch statement

            }// end of if statement

          } // end of decreasePlayerHP2 function









          this.decreasePlayerHP3 = function () {

            // variable declartions

            let hpDamage4 = 0;
            let blastoiseHP2 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
            let player1LowHealthIndicator = document.querySelector('.player1HP');


            if(blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction1of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction2of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction3of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction4of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction5of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction6of6 === true) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(blastoiseHP2 < 0 || blastoiseHP2 >= 0) {

              case (blastoiseHP2 < 0):
              hpDamage4 = 0;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";

              comp.informWinner();
              break;



              case (blastoiseHP2 === 0):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red



              comp.informWinner();
              break;

              case (blastoiseHP2 > 0 && blastoiseHP2 <= 20):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red



              break;

              case (blastoiseHP2 > 20 && blastoiseHP2 <= 40):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red



              break;

              case (blastoiseHP2 > 40 && blastoiseHP2 <= 100):
              hpDamage4 = blastoiseHP2;
              document.querySelector(".player1HP").style.width = hpDamage4 +   "%";
              player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue



              break;

              default:

              console.log("decreasePlayerHP3 default function was called. Look at the switch cases. (3)");


      }// end of switch statement

            }// end of if statement

          } // end of decreasePlayerHP3 function



this.increaseComputerHP = function () {

  // variable declartions

  let hpRestore2 = 0;
  let speedReduced2 = 0;
  let squirtleHP5 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
  let scytherHP8 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
  let onixHP12 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
  let computerSPD =  a8.squSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
  let computerSPD2 = a10.scySpeedProgressBar.reduce(array2.PokemonSpeedReduced);
  let computerSPD3 = a12.onixSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
  let computerLowHealthIndicator2 = document.querySelector('.cpuHP');

  if (computer.squirtleMovesActivated[0].squirtleFunction6of6 === true || computer.scytherMovesActivated[0].scytherFunction6of6 === true || computer.onixMovesActivated[0].onixFunction6of6 === true) {



    switch (computerSPD <= 0 || squirtleHP5 <= 40 || squirtleHP5 > 40 || computerSPD2 <= 0 || scytherHP8 <= 40 || scytherHP8 > 40 || computerSPD3 <= 0 || onixHP12 <= 40 || onixHP12 > 40) {

    case (computerSPD <= 0 ||  computerSPD2 <= 0 ||  computerSPD3 <= 0):

    //set all pokemon speed to true here (changes will be made when if statement is triggered):

    restore.squirtleSpeedDecreased = true;
    restore.scytherSpeedDecreased = true;
    restore.onixSpeedDecreased = true;

    if (comp.squirtleSelected === true && restore.squirtleSpeedDecreased === true && computerSPD <= 0) {

      //prevent health restoration if computer pokemon speed is 0.

      speedReduced2 = 1; //setting to 1 HP gives the appearence of low health on the progressbar
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red


      console.log("squirtleSpeedDecreased: " + restore.squirtleSpeedDecreased);
      console.log("code was commented out *debugging*(4-1-1)");

      //inform player1 of computer inablility to use the rest function
      document.getElementById("statusProgress2").innerHTML = "Squirtle's speed is too low to rest...";

      //turn off pokemon speed for non-selected pokemon here:
      restore.scytherSpeedDecreased = false;
      restore.onixSpeedDecreased = false;


    }//end of if statement for squirtleSpeedDecreased

    if (comp.scytherSelected === true && restore.scytherSpeedDecreased === true && computerSPD2 <= 0) {

      //prevent health restoration if computer pokemon speed is 0.

      speedReduced2 = 1; //setting to 1 HP gives the appearence of low health on the progressbar
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red


      console.log("scytherSpeedDecreased: " + restore.scytherSpeedDecreased);
      console.log("code was commented out *debugging*(4-1-2)");

      //inform player1 of computer inablility to use the rest function
      document.getElementById("statusProgress2").innerHTML = "Scyther's speed is too low to rest...";

      //turn off pokemon speed for non-selected pokemon here:
      restore.squirtleSpeedDecreased = false;
      restore.onixSpeedDecreased = false;

    }//end of if statement for scytherSpeedDecreased

    if (comp.onixSelected === true && restore.onixSpeedDecreased === true && computerSPD3 <= 0) {

      //prevent health restoration if computer pokemon speed is 0.

      speedReduced2 = 1; //setting to 1 HP gives the appearence of low health on the progressbar
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red


      console.log("onixSpeedDecreased: " + restore.onixSpeedDecreased);
      console.log("code was commented out *debugging*(4-1-3)");

      //inform player1 of computer inablility to use the rest function
      document.getElementById("statusProgress2").innerHTML = "Onix's speed is too low to rest...";

      //turn off pokemon speed for non-selected pokemon here:
      restore.squirtleSpeedDecreased = false;
      restore.scytherSpeedDecreased = false;


    }//end of if statement for onixSpeedDecreasedS




    break;

    case (squirtleHP5 <= 40 || scytherHP8 <= 40 || onixHP12 <= 40):

    if (comp.squirtleSelected === true && squirtleHP5 <= 40) {

      //enable health restoration if computer pokemon health is <= 40

      hpRestore2 = squirtleHP5;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";

      speedReduced2 = computerSPD;
      document.querySelector(".cpuSpeed").style.width = computerSPD +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      restore.restedSquirtle = true;
      a8.squirtleHpRecovered.push(10);

      //inform player1 of computer pokemon resting
      document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " is "+" resting!";


      console.log("restedSquirtle hp when < 40: " + restore.restedSquirtle);
      console.log("squirtleHpRecovered: " + a8.squirtleHpRecovered);
      console.log("code was commented out *debugging*(3-1-1)");


    }//end of if statement for when squirtle hp < 40

    if (comp.scytherSelected === true  && scytherHP8 <= 40) {

      //enable health restoration if computer pokemon health is <= 40

      hpRestore2 = scytherHP8;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";

      speedReduced2 = computerSPD2;
      document.querySelector(".cpuSpeed").style.width = computerSPD2 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      restore.restedScyther = true;
      a10.scytherHpRecovered.push(10);

      //inform player1 of computer pokemon resting
      document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1]+ " is "+" resting!";


      console.log("restedScyther hp when < 40: " + restore.restedScyther);
      console.log("scytherHpRecovered: " + a10.scytherHpRecovered);
      console.log("code was commented out *debugging*(3-1-2)");



    }//end of if statement for when scyther hp < 40

    if (comp.onixSelected === true && onixHP12 <= 40) {


      //enable health restoration if computer pokemon health is <= 40

      hpRestore2 = onixHP12;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";

      speedReduced2 = computerSPD3;
      document.querySelector(".cpuSpeed").style.width = computerSPD3 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      restore.restedOnix = true;
      a6.onixHpRecovered.push(10);

      //inform player1 of computer pokemon resting
      document.getElementById("statusProgress2").innerHTML = computer.pokemonName[3]+ " is "+" resting!";


      console.log("restedOnix hp when < 40: " + restore.restedOnix);
      console.log("onixHpRecovered: " +   a6.onixHpRecovered);
      console.log("code was commented out *debugging*(3-1-3)");




    }//end of if statement for when onix hp is < 40



    break;

    case (squirtleHP5 > 40 || scytherHP8 > 40 || onixHP12 > 40):

    if (comp.squirtleSelected === true && squirtleHP5 > 40) {

      //prevent health restoration if computer pokemon health is > 40
      restore.restedSquirtle = false;


      console.log("restedSquirtle hp: when > 40 is " + restore.restedSquirtle);
      console.log("code was commented out *debugging*(1-1-1)");


    }//end of if statement for when squirtle hp > 40


    if (comp.scytherSelected === true && scytherHP8 > 40) {


      //prevent health restoration if computer pokemon health is > 40
      restore.restedScyther = false;


      console.log("restedScyther hp: when > 40 is " + restore.restedScyther);
      console.log("code was commented out *debugging*(1-1-2)");


    }//end of if statement for when scyther hp is > 40


    if (comp.onixSelected === true && onixHP12 > 40) {


      //prevent health restoration if computer pokemon health is > 40
      restore.restedOnix = false;


      console.log("restedOnix hp: when > 40 is " + restore.restedOnix);
      console.log("code was commented out *debugging*(1-1-3)");


    }//end of if statement when onix hp is > 40






    break;

    default:

    console.log("increaseComputerHP default function was called. Look at the switch cases. (1)");

  }//end of switch statement


            }//end of primary if statement


                }// end of increaseComputerHP





          }//end of progressBar constructor

  }//end of prograssBar class






blastoiseProgressBar = new progressBar;
pikachuProgressBar = new progressBar;
charmanderProgressBar = new progressBar;
squirtleProgressBar = new progressBar;
scytherProgressBar = new progressBar;
onixProgressBar = new progressBar;
defaultProgressBar = new progressBar;



class arrayFunctions {

  constructor () {

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

        console.log("insert code here if needed on this line (3)");




      } // end of if statements

    } // end of checkTheStatus function



    this.PokemonHPReduced = function (accumulator, currentValue) {


          return accumulator + currentValue;
          }

    this.PokemonRestoredReducer = function (accumulator, currentValue) {


          return accumulator + currentValue;
        }

    this.PokemonSpeedReduced = function (accumulator, currentValue) {


          return accumulator + currentValue;
      }


    this.getCharmanderHP =  function () {


      a1.charmanderHealthBar.filter((element, index, array))

      console.log("Results from getCharmanderHP: " + element);
      return element === 45;
    }


    this.getSquirtleHP   =  function () {

      a1.squirtleHealthBar.filter((element, index, array));

      console.log("Results from getSquirtleHP: " + element);
      return element === 30;
    }

  } // end of constructor
} // end of arrayArrows class



array1 = new arrayFunctions;
array2 = new arrayFunctions;



class Sleep {
  constructor () {

    //default is false and it implies that the pokemon didn't use the rest function or function6of6
    this.restedCharmander = false;
    this.restedPikachu = false;
    this.restedBlastoise = false;
    this.restedSquirtle = false;
    this.restedScyther = false;
    this.restedOnix = false;
    this.charamanderSpeedDecreased = false;
    this.pikachuSpeedDecreased = false;
    this.blastoiseSpeedDecreased = false;
    this.squirtleSpeedDecreased = false;
    this.scytherSpeedDecreased = false;
    this.onixSpeedDecreased = false;
    this.charmanderRestoredHPBackup = [0];
    this.pikachuRestoredHPBackup = [0];
    this.blastoiseRestoredHPBackup = [0];
    this.squirtleRestoredHPBackup = [0];
    this.scytherRestoredHPBackup = [0];
    this.onixRestoredHPBackup = [0];


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

            computer.squirtleMovesActivated[0].squirtleFunction1of6 = true;

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

         computer.squirtleMovesActivated[0].squirtleFunction2of6 = true;

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

         computer.squirtleMovesActivated[0].squirtleFunction3of6 = true;

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

         computer.squirtleMovesActivated[0].squirtleFunction4of6 = true;

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

         computer.squirtleMovesActivated[0].squirtleFunction5of6 = true;

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

       //varible declartion
       let squirtleHP5 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);

       //confirm attack move for pokemon was clicked
       player1.charmanderMoves[0].charmanderFunction6of6 = true;

       computer.squirtleMovesActivated[0].squirtleFunction6of6 = true;

       //debugging here -- delete when neccessary
      console.log("squirtleMoves Function6of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction6of6);

      //rest recovers 10 HP to squirtle if conditions are true

      if (squirtleHP5 <= 40) {

        //show recovery image for player1 pokemon
        player1Img.chrAtkImage6();

        //reflect the changes to squirtleHealthBar
        a2.squirtleHealthBar.push(10);

        //backup array for health restoration needs to be updated
        a2.squirtleHpRecovered.push(10);

        //reflect the changes to squirtle speedbar
        a8.squSpeedProgressBar.push(-50);


      }else if (squirtleHP5 > 40) {

        //if health is > 40 then this implies that squirtle didn't restore health
        restore.restedSquirtle = false;

        //debugging
        console.log("restedSquirtle status when hp > 40: " + restore.restedSquirtle);

        //load invalid sound is loaded if player1 health is > 40
        player1SD.invalidAction.play();

        //make no changes to squirtleHealthBar
        a2.squirtleHealthBar.push(0);

        //make no changes to squirtleHpRecovered
        a2.squirtleHpRecovered.push(0);

        //make no the changes to squirtle speedbar as well
        a8.squSpeedProgressBar.push(0);


      }//end of if statements


       //This is the function that applies the reduce method to the arrays listed above. Computer gives hp to charmander if certain conditions are true.
        squirtleProgressBar.increaseComputerHP();


      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      array1.checkTheStatus();

      //debugging here------------------------------------------------------

      console.log("squirtleHealthBar array is "+ a2.squirtleHealthBar);
      console.log("squirtleHP_recovered array is " + a2.squirtleHpRecovered);


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
            computer.scytherMovesActivated[0].scytherFunction1of6 = true;

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
         computer.scytherMovesActivated[0].scytherFunction2of6 = true;

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
         computer.scytherMovesActivated[0].scytherFunction3of6 = true;

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
         computer.scytherMovesActivated[0].scytherFunction4of6 = true;

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
         computer.scytherMovesActivated[0].scytherFunction5of6 = true;

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

       //variable declartion
        let scytherHP14 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);

       //confirm attack move for pokemon was clicked
       player1.pikachuMoves.pikachuFunction6of6 = true;

       computer.scytherMovesActivated[0].scytherFunction6of6 = true;

       //debugging here -- delete when neccessary
       console.log("scytherMoves Function6of6 is : " + computer.scytherMovesActivated[0].scytherFunction6of6);


       //rest recovers 10 HP to scyther if conditions are true

       if (scytherHP14 <= 40) {

         //show recovery image for player1 pokemon
         player1Img.chrAtkImage6();

         //reflect the changes to scytherHealthBar
         a4.scytherHealthBar.push(10);

         //backup array for health restoration needs to be updated
         a4.scytherHpRecovered.push(10);

         //reflect the changes to scySpeedProgressBar
         a10.scySpeedProgressBar.push(-50);

       }else if (scytherHP14 > 40) {

         //if health is > 40 then this implies that scyther didn't restore health
         restore.restedScyther = false;

         //debugging
         console.log("restedScyther status when hp > 40: " + restore.restedScyther);

         //load invalid sound is loaded if player1 health is > 40
         player1SD.invalidAction.play();

         //make no changes to scytherHealthBar
         a4.scytherHealthBar.push(0);

         //make no changes to scytherHpRecovered
         a4.scytherHpRecovered.push(0);

         //make no the changes to scySpeedProgressBar
         a10.scySpeedProgressBar.push(0);


       }//end of if statements


       //This is the function that applies the reduce method to the arrays listed above. Computer gives hp to pikachu if certain conditions are true.
       scytherProgressBar.decreaseComputerHP3();

       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       array1.checkTheStatus();


       //debugging--------------------------------------

      console.log("scytherHealthBar array is "+ a4.scytherHealthBar);
      console.log("scytherHP_recovered array is " + a4.scytherHpRecovered);


       // show recovery image
       player1Img.chrAtkImage6();

       //change boolean state so that computer can attack
       confirm.makeMove[0].player1Move = false;
       confirm.makeMove[0].computerMove = true;

       console.log(confirm.makeMove[0]);

     }// end of rest2 function









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
            computer.onixMovesActivated[0].onixFunction1of6 = true;

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
         computer.onixMovesActivated[0].onixFunction2of6 = true;

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
         computer.onixMovesActivated[0].onixFunction3of6 = true;

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
         computer.onixMovesActivated[0].onixFunction4of6 = true;

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
         computer.onixMovesActivated[0].onixFunction5of6 = true;

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

       let onixHP11 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

       //confirm attack move for pokemon was clicked
       player1.blastoiseMoves.blastoiseFunction6of6 = true;

       computer.onixMovesActivated[0].onixFunction6of6 = true;

       //debugging here -- delete when neccessary
       console.log("onixMoves Function6of6 is : " + computer.onixMovesActivated[0].onixFunction6of6);

       //rest recovers 10 HP to onix if conditions are true

       if (onixHP11 <= 40) {

         //show recovery image for player1 pokemon
         player1Img.chrAtkImage6();

         //reflect the changes to onixHealthBar
         a6.onixHealthBar.push(10);

         //backup array for health restoration needs to be updated
         a6.onixHpRecovered.push(10);

         //reflect the changes to onixSpeedProgressBar
         a12.onixSpeedProgressBar.push(-50);

       }else if (onixHP11 > 40) {

         //if health is > 40 then this implies that onix didn't restore health
         restore.restedOnix = false;

         //debugging
         console.log("restedOnix status when hp > 40: " + restore.restedOnix);

         //load invalid sound is loaded if player1 health is > 40
         player1SD.invalidAction.play();

         //make no changes to onixHealthBar
         a6.onixHealthBar.push(0);

         //make no changes to onixHpRecovered
         a6.onixHpRecovered.push(0);

         //make no the changes to onixSpeedProgressBar
         a12.onixSpeedProgressBar.push(0);


       }//end of if statements


       //This is the function that applies the reduce method to the arrays listed above. Computer gives HP to blastoise if conditions are true
       onixProgressBar.decreaseComputerHP2();

       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       array1.checkTheStatus();


       //debugging--------------------------------------

       console.log("onixHealthBar array is "+ a6.onixHealthBar);
       console.log("onixHpRecovered array is " + a6.onixHpRecovered);


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



    //switch that controls how squirtle attacks charmander

   this.squirtleMoves = function () {


     //SquirtleMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

     switch  (computer.squirtleMovesActivated[0].squirtleFunction1of6 === true && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction2of6 === true && player1.charmanderMoves[0].charmanderFunction2of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction3of6 === true && player1.charmanderMoves[0].charmanderFunction3of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction4of6 === true && player1.charmanderMoves[0].charmanderFunction4of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction5of6 === true && player1.charmanderMoves[0].charmanderFunction5of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction6of6 === true && player1.charmanderMoves[0].charmanderFunction6of6 === true ) {

  case (computer.squirtleMovesActivated[0].squirtleFunction1of6 === true && player1.charmanderMoves[0].charmanderFunction1of6 === true):

    //squirtle attack move: Bubble Beam
   //disable attack move for squirtle pokemon and charmander
   computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;

   //debugging here -- delete when neccessary
   console.log("squirtleMoves Function1of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction1of6);

   //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
     a1.charmanderHealthBar.push(-20);
     a1.charmanderBackup.push(-20);


   //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
   squirtleProgressBar.decreasePlayerHP();

   //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
   array1.checkTheStatus();

   //debugging here------------------------------------------------------

   console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

   // get the status of health for player1

   console.log("charmanderBackup array is " +a1.charmanderBackup);

  //default setting
   if (p1.preserveHPChanges === false) {

     //inform player1 of attack from computer
     document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Bubble Beam!";




   }else if (p1.preserveHPChanges === true) {

     //remove previous comment
     document.getElementById("statusProgress2").innerHTML =  "";



   }//end of if statements



   //show attack image
   computerImg.squAtkImage1();



   //Change boolean state so that player1 can make a move
   confirm.makeMove[0].computerMove = false;
   console.log(confirm.makeMove[0]);
   confirm.enableMoves();
   console.log(confirm.makeMove[0]);

   //disable attack move for squirtle pokemon and charmander
   player1.charmanderMoves[0].charmanderFunction1of6 = false;

    break;




  case (computer.squirtleMovesActivated[0].squirtleFunction2of6 === true && player1.charmanderMoves[0].charmanderFunction2of6 === true):

  //squirtle attack move: Tail Whip
  //disable attack move for squirtle pokemon and charmander
  computer.squirtleMovesActivated[0].squirtleFunction2of6 = false;


  //debugging here -- delete when neccessary
  console.log("squirtleMoves Function2of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction2of6);

  //Tail Whip does -5 damage to charmander
  //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
  a1.charmanderHealthBar.push(-5);
  a1.charmanderBackup.push(-5);


  //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
  squirtleProgressBar.decreasePlayerHP();

  //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
  array1.checkTheStatus();

  //debugging here------------------------------------------------------

  console.log("CharmanderHealthBar array is "+ a1.charmanderHealthBar);

  // get the status of health for player1

  console.log("charmanderBackup array is " + a1.charmanderBackup);

    //default setting

  if (p1.preserveHPChanges === false) {

  //inform player1 of attack from computer
  document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Tail Whip!";


  }else if (p1.preserveHPChanges === true) {

    //remove previous comment
    document.getElementById("statusProgress2").innerHTML =  "";

  }//end of if statements



  //show attack image
  computerImg.squAtkImage2();



  //Change boolean state so that player1 can make a move
  confirm.makeMove[0].computerMove = false;
  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  console.log(confirm.makeMove[0]);

  //disable attack move for squirtle pokemon and charmander
  player1.charmanderMoves[0].charmanderFunction2of6 = false;

    break;




  case (computer.squirtleMovesActivated[0].squirtleFunction3of6 === true && player1.charmanderMoves[0].charmanderFunction3of6 === true):


  //squirtle attack move: Water Pulse
  //disable attack move for squirtle pokemon and charmander
  computer.squirtleMovesActivated[0].squirtleFunction3of6 = false;


  //debugging here -- delete when neccessary
  console.log("squirtleMoves Function3of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction3of6);

  //Water Pulse does -60 damage to charmander
  //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
  a1.charmanderHealthBar.push(-60);
  a1.charmanderBackup.push(-60);


  //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
  squirtleProgressBar.decreasePlayerHP();

  //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
  array1.checkTheStatus();

  //debugging here------------------------------------------------------

  console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

  // get the status of health for player1

  console.log("charmanderBackup array is " +a1.charmanderBackup);


  //default setting
  if (p1.preserveHPChanges === false) {

    //inform player1 of attack from computer
    document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Water Pulse!";


  }else if (p1.preserveHPChanges === true) {

    //remove previous comment
    document.getElementById("statusProgress2").innerHTML =  "";



  }//end of if statements



  //show attack image
  computerImg.squAtkImage3();



  //Change boolean state so that player1 can make a move
  confirm.makeMove[0].computerMove = false;
  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  console.log(confirm.makeMove[0]);

  //disable attack move for squirtle pokemon and charmander
  player1.charmanderMoves[0].charmanderFunction3of6 = false;
    break;







    case (computer.squirtleMovesActivated[0].squirtleFunction4of6 === true && player1.charmanderMoves[0].charmanderFunction4of6 === true):


    //squirtle attack move: tackle
    //disable attack move for squirtle pokemon and charmander
    computer.squirtleMovesActivated[0].squirtleFunction4of6 = false;


    //debugging here -- delete when neccessary
    console.log("squirtleMoves Function4of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction4of6);

    //tackle does -10 damage to charmander
    //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
    a1.charmanderHealthBar.push(-10);
    a1.charmanderBackup.push(-10);


    //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
    squirtleProgressBar.decreasePlayerHP();

    //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
    array1.checkTheStatus();

    //debugging here------------------------------------------------------

    console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

    // get the status of health for player1

    console.log("charmanderBackup array is " +a1.charmanderBackup);


      //default setting
    if (p1.preserveHPChanges === false) {

      //inform player1 of attack from computer
      document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Tackle!";




    }else if (p1.preserveHPChanges === true) {

      //remove previous comment
      document.getElementById("statusProgress2").innerHTML =  "";

    }//end of if statements



    //show attack image
    computerImg.squAtkImage4();



    //Change boolean state so that player1 can make a move
    confirm.makeMove[0].computerMove = false;
    console.log(confirm.makeMove[0]);
    confirm.enableMoves();
    console.log(confirm.makeMove[0]);

    //disable attack move for squirtle pokemon and charmander
    player1.charmanderMoves[0].charmanderFunction4of6 = false;
      break;







      case (computer.squirtleMovesActivated[0].squirtleFunction5of6 === true && player1.charmanderMoves[0].charmanderFunction5of6 === true):


      //squirtle attack move: water gun
      //disable attack move for squirtle pokemon and charmander
      computer.squirtleMovesActivated[0].squirtleFunction5of6 = false;


      //debugging here -- delete when neccessary
      console.log("squirtleMoves Function5of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction5of6);

      //water gun does -30 damage to charmander
      //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
      a1.charmanderHealthBar.push(-30);
      a1.charmanderBackup.push(-30);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
      squirtleProgressBar.decreasePlayerHP();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      array1.checkTheStatus();

      //debugging here------------------------------------------------------

      console.log("CharmanderHealthBar array is "+a1.charmanderHealthBar);

      // get the status of health for player1

      console.log("charmanderBackup array is " +a1.charmanderBackup);


      //default setting

      if (p1.preserveHPChanges === false) {

        //inform player1 of attack from computer
        document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Water Gun!";

      }else if (p1.preserveHPChanges === true) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML =  "";

      }//end of if statements



      //show attack image
      computerImg.squAtkImage5();



      //Change boolean state so that player1 can make a move
      confirm.makeMove[0].computerMove = false;
      console.log(confirm.makeMove[0]);
      confirm.enableMoves();
      console.log(confirm.makeMove[0]);

      //disable attack move for squirtle pokemon and charmander
      player1.charmanderMoves[0].charmanderFunction5of6 = false;
        break;






        case (computer.squirtleMovesActivated[0].squirtleFunction6of6 === true && player1.charmanderMoves[0].charmanderFunction6of6 === true):

        //varible declartion

        let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
        let hpRecovered2 = a7.charmanderHpRecovered.reduce(array1.PokemonRestoredReducer);

        //squirtle attack move: rest (restores health to charmander)
        //disable attack move for squirtle pokemon and charmander
        computer.squirtleMovesActivated[0].squirtleFunction6of6 = false;


        //charmander gets 45 HP if conditions are true

        if (charmanderHP5 <= 40) {



          //show recovery image for computer pokemon
          computerImg.squAtkImage6();

          //reflect the changes to the charmanderHealthBar array
         a1.charmanderHealthBar.push(45);

         //backup array for health restoration needs to be updated as well
         a7.charmanderHpRecovered.push(45);

          //reflect speedbar progress to chaSpeedProgressBar array to create limit for health restoration
         a7.chaSpeedProgressBar.push(-50);



       }else if(charmanderHP5 > 40) {

          //make no changes to the charmanderHealthBar array
          a1.charmanderHealthBar.push(0);

          //make no changes to charmanderHpRecovered array
          a7.charmanderHpRecovered.push(0);

          //make no changes to the chaSpeedProgressBa array
          a7.chaSpeedProgressBar.push(0);




        }//end of if statements


          //This is the function that applies the reduce method to the arrays listed below. player1 recovers HP if certain conditions are true.
          charmanderProgressBar.decreasePlayerHP(); //actually increases hp for charmander


          //debugging here------------------------------------------------------

          console.log("charmanderHealthBar array is "+ a1.charmanderHealthBar);
          console.log("charmanderHP_recovered array is " + hpRecovered2);



        //default setting
        if (p1.preserveHPChanges === false) {

          //remove previous comment
          document.getElementById("statusProgress2").innerHTML =  "";

        }else if (p1.preserveHPChanges === true) {

          //inform player1 of attack from computer
          document.getElementById("statusProgress2").innerHTML =   "Squirtle used rest to recover!***";

        }//end of if statements





        //Change boolean state so that player1 can make a move
        confirm.makeMove[0].computerMove = false;
        console.log(confirm.makeMove[0]);
        confirm.enableMoves();
        console.log(confirm.makeMove[0]);

        //disable attack move for squirtle pokemon and charmander
        player1.charmanderMoves[0].charmanderFunction6of6 = false;
          break;




  default:
    console.log("squirtleMoves default switch function was activated -- evaluate cases to fix error.");




} // end of switch statements for squirtleMoves



      } // end of squirtleMoves function





// start of scyther moves function -- ends at 4063

      this.scytherMoves = function () {

        //scytherMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

        switch (computer.scytherMovesActivated[0].scytherFunction1of6 === true && player1.pikachuMoves[0].pikachuFunction1of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction2of6 === true && player1.pikachuMoves[0].pikachuFunction2of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction3of6 === true && player1.pikachuMoves[0].pikachuFunction3of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction4of6 === true && player1.pikachuMoves[0].pikachuFunction4of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction5of6 === true && player1.pikachuMoves[0].pikachuFunction5of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction6of6 === true && player1.pikachuMoves[0].pikachuFunction6of6 === true) {

     case (computer.scytherMovesActivated[0].scytherFunction1of6 === true && player1.pikachuMoves[0].pikachuFunction1of6 === true):

       //scyther attack move: slash
      //disable attack move for scyther pokemon and pikachu
      computer.scytherMovesActivated[0].scytherFunction1of6 = false;


      //debugging here -- delete when neccessary
      console.log("scytherMoves Function1of6 is : " + computer.scytherMovesActivated[0].scytherFunction1of6);

      //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
      a3.pikachuHealthBar.push(-25); //default attack was -5 hp but change to  -25 hp to make pikachu lose
      a3.pikachuBackup.push(-25);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      scytherProgressBar.decreasePlayerHP2();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      array1.checkTheStatus();

      //debugging here------------------------------------------------------

      console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

      // get the status of health for player1

      console.log("pikachuBackup array is " +a3.pikachuHealthBar);

      if (p1.preserveHPChanges === false) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML =  "";

        //default setting
      }else if (p1.preserveHPChanges === true) {

        //inform player1 of attack from computer
        document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0] + " attacked "+ player1CH.player1PokemonChoices[2] +" with Slash!";

      }//end of if statements



      //show attack image
      computerImg.scyAtkImage1();



      //Change boolean state so that player1 can make a move
      confirm.makeMove[0].computerMove = false;
      console.log(confirm.makeMove[0]);
      confirm.enableMoves();
      console.log(confirm.makeMove[0]);

      //disable attack move for scyther pokemon and pikachu
      player1.pikachuMoves[0].pikachuFunction1of6 = false;

       break;




     case (computer.scytherMovesActivated[0].scytherFunction2of6 === true && player1.pikachuMoves[0].pikachuFunction2of6 === true):

     //scyther attack move: Quick Attack
     //disable attack move for scyther pokemon and pikachu
     computer.scytherMovesActivated[0].scytherFunction2of6 = false;

     //debugging here -- delete when neccessary
     console.log("scytherMoves Function2of6 is : " + computer.scytherMovesActivated[0].scytherFunction2of6);

     //Quick Attack does -5 damage to pikachu
     //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
     a3.pikachuHealthBar.push(-5);
     a3.pikachuBackup.push(-5);


     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
     scytherProgressBar.decreasePlayerHP2();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     array1.checkTheStatus();

     //debugging here------------------------------------------------------

     console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

     // get the status of health for player1

     console.log("pikachuBackup array is " +a3.pikachuBackup);

     if (p1.preserveHPChanges === false) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML =  "";

       //default setting
     }else if (p1.preserveHPChanges === true) {

       //inform player1 of attack from computer
       document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0] + " attacked "+ player1CH.player1PokemonChoices[2] +" Quick Attack!";

     }//end of if statements



     //show attack image
     computerImg.squAtkImage2();



     //Change boolean state so that player1 can make a move
     confirm.makeMove[0].computerMove = false;
     console.log(confirm.makeMove[0]);
     confirm.enableMoves();
     console.log(confirm.makeMove[0]);

     //disable attack move for scyther pokemon and pikachu
     player1.pikachuMoves[0].pikachuFunction2of6 = false;

       break;




     case (computer.scytherMovesActivated[0].scytherFunction3of6 === true && player1.pikachuMoves[0].pikachuFunction3of6 === true):


     //scyther attack move: X-Scissor
     //disable attack move for squirtle pokemon and pikachu
     computer.scytherMovesActivated[0].scytherFunction3of6 = false;

     //debugging here -- delete when neccessary
     console.log("scytherMoves Function3of6 was activated : " + computer.scytherMovesActivated[0].scytherFunction3of6);

     //scyther does -60 damage to pikachu
     //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
     a3.pikachuHealthBar.push(-60);
     a3.pikachuBackup.push(-60);


     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
     scytherProgressBar.decreasePlayerHP2();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     array1.checkTheStatus();

     //debugging here------------------------------------------------------

     console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

     // get the status of health for player1

     console.log("pikachuBackup array is " +a3.pikachuBackup);

     if (p1.preserveHPChanges === false) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML =  "";

       //default setting
     }else if (p1.preserveHPChanges === true) {

       //inform player1 of attack from computer
       document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ " attacked "+ player1CH.player1PokemonChoices[2]  +" with X-Scissor!";

     }//end of if statements



     //show attack image
     computerImg.squAtkImage3();



     //Change boolean state so that player1 can make a move
     confirm.makeMove[0].computerMove = false;
     console.log(confirm.makeMove[0]);
     confirm.enableMoves();
     console.log(confirm.makeMove[0]);

     //disable attack move for scyther pokemon and pikachu
     player1.pikachuMoves[0].pikachuFunction3of6 = false;
       break;







       case (computer.scytherMovesActivated[0].scytherFunction4of6 === true && player1.pikachuMoves[0].pikachuFunction4of6 === true):


       //scyther attack move: Fury Cutter
       //disable attack move for squirtle pokemon and pikachu
       computer.scytherMovesActivated[0].scytherFunction4of6 = false;

       //debugging here -- delete when neccessary
       console.log("scytherMoves Function4of6 was activated : " + computer.scytherMovesActivated[0].scytherFunction4of6);

       //Fury Cutter does -10 damage to pikachu
       //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
       a3.pikachuHealthBar.push(-10);
       a3.pikachuBackup.push(-10);


       //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
       scytherProgressBar.decreasePlayerHP2();

       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       array1.checkTheStatus();

       //debugging here------------------------------------------------------

       console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

       // get the status of health for player1

       console.log("pikachuBackup array is " +a3.pikachuBackup);

       if (p1.preserveHPChanges === false) {

         //remove previous comment
         document.getElementById("statusProgress2").innerHTML =  "";

         //default setting
       }else if (p1.preserveHPChanges === true) {

         //inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ " attacked "+ player1CH.player1PokemonChoices[2] +" with Fury Cutter!";

       }//end of if statements



       //show attack image
       computerImg.squAtkImage4();



       //Change boolean state so that player1 can make a move
       confirm.makeMove[0].computerMove = false;
       console.log(confirm.makeMove[0]);
       confirm.enableMoves();
       console.log(confirm.makeMove[0]);

       //disable attack move for scyther pokemon and pikachu
       player1.pikachuMoves[0].pikachuFunction4of6 = false;
         break;







         case (computer.scytherMovesActivated[0].scytherFunction5of6 === true && player1.pikachuMoves[0].pikachuFunction5of6 === true):


         //scyther attack move: Wing Attack
         //disable attack move for scyther pokemon and pikachu
         computer.scytherMovesActivated[0].scytherFunction5of6 = true;

         //debugging here -- delete when neccessary
         console.log("scytherMoves Function5of6 is : " + computer.scytherMovesActivated[0].scytherFunction5of6);

         //Wing Attack does -30 damage to charmander
         //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
         a3.pikachuHealthBar.push(-30);
         a3.pikachuBackup.push(-30);


         //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
         scytherProgressBar.decreasePlayerHP2();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         array1.checkTheStatus();

         //debugging here------------------------------------------------------

         console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);

         // get the status of health for player1

         console.log("pikachuBackup array is " +a3.pikachuBackup);

         if (p1.preserveHPChanges === false) {

           //remove previous comment
           document.getElementById("statusProgress2").innerHTML =  "";

           //default setting
         }else if (p1.preserveHPChanges === true) {

           //inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ " attacked "+ player1CH.player1PokemonChoices[2] +" with Wing Attack!";

         }//end of if statements



         //show attack image
         computerImg.squAtkImage5();



         //Change boolean state so that player1 can make a move
         confirm.makeMove[0].computerMove = false;
         console.log(confirm.makeMove[0]);
         confirm.enableMoves();
         console.log(confirm.makeMove[0]);

         //disable attack move for scyther pokemon and pikachu
         player1.pikachuMoves[0].pikachuFunction5of6 = false;
           break;






           case (computer.scytherMovesActivated[0].scytherFunction6of6 === true && player1.pikachuMoves[0].pikachuFunction6of6 === true):

           //varible declartion

           let pikachuHP14 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
           let hpRecovered3 = a9.pikachuHpRecovered.reduce(array1.PokemonRestoredReducer);

           //scyther attack move: rest2
           //disable attack move for scyther pokemon and pikachu
           computer.scytherMovesActivated[0].scytherFunction6of6 = false;

           //debugging here -- delete when neccessary
           console.log("scytherMoves Function6of6 is : " + computer.scytherMovesActivated[0].scytherFunction6of6);




           //pikachu gets 45 HP if conditions are true

           if (pikachuHP14 <= 40) {



             //show recovery image for computer pokemon
             computerImg.squAtkImage6();

             //reflect the changes to the pikachuHealthBar array
            a3.pikachuHealthBar.push(45);

            //backup array for health restoration needs to be updated as well
            a9.pikachuHpRecovered.push(45);

             //reflect speedbar progress to pikSpeedProgressBar array to create limit for health restoration
            a9.pikSpeedProgressBar.push(-50);



            }else if(pikachuHP14 > 40) {

             //make no changes to the pikachuHealthBar array
             a3.pikachuHealthBar.push(0);

             //make no changes to pikachuHpRecovered array
             a9.pikachuHpRecovered.push(0);

             //make no changes to pikSpeedProgressBar array
             a9.pikSpeedProgressBar.push(0);




           }//end of if statements


           //this function changes the HTML progress bar that displays the pokemon HP (this attack recovers pikachu when scyther attacks)
           pikachuProgressBar.decreasePlayerHP2(); //actually increases hp for pikachu

           //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
           array1.checkTheStatus();

           //debugging here------------------------------------------------------

           console.log("pikachuHealthBar array is "+ a3.pikachuBackup);
           console.log("pikachuHP_recovered array is " + hpRecovered3);


           if (p1.preserveHPChanges === false) {

             //remove previous comment
             document.getElementById("statusProgress2").innerHTML =  "";

             //default setting
           }else if (p1.preserveHPChanges === true) {

             //inform player1 of attack from computer
             document.getElementById("statusProgress2").innerHTML =   "Scyther used rest to recover!***";

           }//end of if statements



           //show attack image
           computerImg.squAtkImage6();



           //Change boolean state so that player1 can make a move
           confirm.makeMove[0].computerMove = false;
           console.log(confirm.makeMove[0]);
           confirm.enableMoves();
           console.log(confirm.makeMove[0]);

           //disable attack move for scyther pokemon and pikachu
           player1.pikachuMoves[0].pikachuFunction6of6 = false;
             break;



     default:
       console.log("scytherMoves default switch function was activated -- evaluate cases to fix error.(2)");




   } // end of switch statements for scytherMoves



         } // end of scytherMoves function










// start of onixMoves -- ends at 4404

         this.onixMoves = function () {

           //onixMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

           switch (computer.onixMovesActivated[0].onixFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true
              ||   computer.onixMovesActivated[0].onixFunction2of6 === true && player1.blastoiseMoves[0].blastoiseFunction2of6 === true
              ||   computer.onixMovesActivated[0].onixFunction3of6 === true && player1.blastoiseMoves[0].blastoiseFunction3of6 === true
              ||   computer.onixMovesActivated[0].onixFunction4of6 === true && player1.blastoiseMoves[0].blastoiseFunction4of6 === true
              ||   computer.onixMovesActivated[0].onixFunction5of6 === true && player1.blastoiseMoves[0].blastoiseFunction5of6 === true
              ||   computer.onixMovesActivated[0].onixFunction6of6 === true && player1.blastoiseMoves[0].blastoiseFunction6of6 === true) {

        case (computer.onixMovesActivated[0].onixFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true):

          //onix attack move: Rock Throw
         //disable attack move for onix pokemon and blastoise
         computer.onixMovesActivated[0].onixFunction1of6 = false;

         //debugging here -- delete when neccessary
         console.log("onixMoves Function1of6 is : " + computer.onixMovesActivated[0].onixFunction1of6);

         //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
         a5.blastoiseHealthBar.push(-25); //default attack was -5 hp but change to -25 hp to make blastoise lose
         a5.blastoiseBackup.push(-25);


         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         onixProgressBar.decreasePlayerHP3();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
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

          //disable attack move for onix pokemon and blastoise
         player1.blastoiseMoves[0].blastoiseFunction1of6 = false;

          break;




        case (computer.onixMovesActivated[0].onixFunction2of6 === true && player1.blastoiseMoves[0].blastoiseFunction2of6 === true):

        //onix attack move: Smack Down
        //disable attack move for onix pokemon and blastoise
        computer.onixMovesActivated[0].onixFunction2of6 = false;

        //debugging here -- delete when neccessary
        console.log("onixMoves Function2of6 is : " + computer.onixMovesActivated[0].onixFunction2of6);

        //Smack Down does -5 damage to blastoise
        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        a5.blastoiseHealthBar.push(-5);
        a5.blastoiseBackup.push(-5);


        //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
        onixProgressBar.decreasePlayerHP3();

        //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
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

        //disable attack move for onix pokemon and blastoise
      player1.blastoiseMoves[0].blastoiseFunction2of6 = false;

          break;




        case (computer.onixMovesActivated[0].onixFunction3of6 === true && player1.blastoiseMoves[0].blastoiseFunction3of6 === true):


        //onix attack move: Rock Slide
        //disable attack move for onix pokemon and blastoise
        computer.onixMovesActivated[0].onixFunction3of6 = false;

        //debugging here -- delete when neccessary
        console.log("onixMoves Function3of6 is : " + computer.onixMovesActivated[0].onixFunction3of6);

        //Rock Slide does -60 damage to blastoise
        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        a5.blastoiseHealthBar.push(-60);
        a5.blastoiseBackup.push(-60);


        //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
        onixProgressBar.decreasePlayerHP3();

        //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
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

        //disable attack move for onix pokemon and blastoise
       player1.blastoiseMoves[0].blastoiseFunction3of6 = false;
          break;







          case (computer.onixMovesActivated[0].onixFunction4of6 === true && player1.blastoiseMoves[0].blastoiseFunction4of6 === true):


          //onix attack move: Screech
          //disable attack move for onix pokemon and blastoise
          computer.onixMovesActivated[0].onixFunction4of6 = false;

          //debugging here -- delete when neccessary
          console.log("onixMoves Function4of6 is : " + computer.onixMovesActivated[0].onixFunction4of6);

          //Screech -10 damage to blastoise
          //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
          a5.blastoiseHealthBar.push(-10);
          a5.blastoiseBackup.push(-10);


          //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
          onixProgressBar.decreasePlayerHP3();

          //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
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

          //disable attack move for onix pokemon and blastoise
         player1.blastoiseMoves[0].blastoiseFunction4of6 = false;
            break;







            case (computer.onixMovesActivated[0].onixFunction5of6 === true && player1.blastoiseMoves[0].blastoiseFunction5of6 === true):


            //onix attack move: Stone Edge
            //disable attack move for onix pokemon and blastoise
            computer.onixMovesActivated[0].onixFunction5of6 = false;

            //debugging here -- delete when neccessary
            console.log("onixMoves Function5of6 is : " + computer.onixMovesActivated[0].onixFunction5of6);

            //Stone Edge does -30 damage to charmander
            //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
            a5.blastoiseHealthBar.push(-30);
            a5.blastoiseBackup.push(-30);


            //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
            onixProgressBar.decreasePlayerHP3();

            //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
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

            //disable attack move for onix pokemon and blastoise
           player1.blastoiseMoves[0].blastoiseFunction5of6 = false;
              break;






              case (computer.onixMovesActivated[0].onixFunction6of6 === true && player1.blastoiseMoves[0].blastoiseFunction6of6 === true):

              //varible declartion

              let blastoiseHP15 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
              let hpRecovered4 = a11.blastoiseHpRecovered.reduce(array1.PokemonRestoredReducer);


              //onix attack move: rest3
              //disable attack move for onix pokemon and blastoise
              computer.onixMovesActivated[0].onixFunction6of6 = false;

              //debugging here -- delete when neccessary
              console.log("onixMoves Function6of6 is : " + computer.onixMovesActivated[0].onixFunction6of6);


              //blastoise gets 45 HP if conditions are true

              if (blastoiseHP15 <= 40) {



                //show recovery image for computer pokemon
                computerImg.squAtkImage6();

                //reflect the changes to the blastoiseHealthBar array
               a11.blastoiseHealthBar.push(45);


               //backup array for health restoration needs to be updated as well
               a11.blastoiseHpRecovered.push(45);


                //reflect speedbar progress to blaSpeedProgressBar array to create limit for health restoration
               a11.blaSpeedProgressBar.push(-50);



               }else if(blastoiseHP15 > 40) {

                //make no changes to the pikachuHealthBar array
                a11.blastoiseHealthBar.push(0);


                //make no changes to the blastoiseHpRecovered array
                a11.blastoiseHpRecovered.push(0);


                //make no changes to pikSpeedProgressBar array
                a11.blaSpeedProgressBar.push(0);




              }//end of if statements



              //this function changes the HTML progress bar that displays the pokemon HP (onix recovers health when blastoise attacks)
              onixProgressBar.decreasePlayerHP3(); //actually increases hp for blastoise

              //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
              array1.checkTheStatus();

              //debugging here------------------------------------------------------

              console.log("blastoiseHealthBar array is "+ a11.blastoiseHealthBar);
              console.log("blastoiseHP_recovered array is " + a11.blastoiseHpRecovered);


              //default setting
              if (p1.preserveHPChanges === false) {

                //remove previous comment
                document.getElementById("statusProgress2").innerHTML =  "";


              }else if (p1.preserveHPChanges === true) {

                //inform player1 of attack from computer
                document.getElementById("statusProgress2").innerHTML =  "Onix used rest to recover!***"

              }//end of if statements



              //show attack image
              computerImg.squAtkImage5();



              //Change boolean state so that player1 can make a move
              confirm.makeMove[0].computerMove = false;
              console.log(confirm.makeMove[0]);
              confirm.enableMoves();
              console.log(confirm.makeMove[0]);

              //disable attack move for onix pokemon and blastoise
             player1.blastoiseMoves[0].blastoiseFunction6of6 = false;
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




if(confirm.makeMove[0].player1Move === false && player1CH.pokemonType[0].isSelected === true ){ // charmander

  player1.fireBlasterMove();

  //player1CH.debuggingOperation();

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




}//end of attackA

function attackB() {

console.log(confirm.makeMove[0]);
confirm.enableMoves();
confirm.disableMoves();



if(confirm.makeMove[0].player1Move === false && player1CH.pokemonType[0].isSelected === true) { //charmander

  player1.blazeMove();

  setTimeout (function(){


    computer.squirtleMoves();


  },2000); // computer attacks after 2 secs

}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

  //insert function here

  setTimeout (function(){



    computer.onixMoves();


  },2000); // computer attacks after 2 secs



}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

  //insert function here

  setTimeout (function(){



    computer.scytherMoves();



  },2000); //computer attacks after 2 secs



}//end of statements



}//end of attackB

function attackC() {

console.log(confirm.makeMove[0]);
confirm.enableMoves();
confirm.disableMoves();

if(confirm.makeMove[0].player1Move === false && player1CH.pokemonType[0].isSelected === true) { //charmander

  player1.solarPowerMove();

  setTimeout (function(){


    computer.squirtleMoves();


  },2000); // computer attacks after 2 secs

}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

  //insert function here

  setTimeout (function(){



    computer.onixMoves();


  },2000); // computer attacks after 2 secs



}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

  //insert function here

  setTimeout (function(){



    computer.scytherMoves();



  },2000); //computer attacks after 2 secs



}//end of statements





}//end of attackC



function defenseA() {


  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  confirm.disableMoves();

  if(confirm.makeMove[0].player1Move === false && player1CH.pokemonType[0].isSelected === true) { //charmander

  player1.growlMove();

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

    //insert function here

    setTimeout (function(){



      computer.onixMoves();


    },2000); // computer attacks after 2 secs



  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

    //insert function here

    setTimeout (function(){



      computer.scytherMoves();



    },2000); //computer attacks after 2 secs



  }//end of statements






}//end of defenseA

function defenseB() {


  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  confirm.disableMoves();

  if(confirm.makeMove[0].player1Move === false && player1CH.pokemonType[0].isSelected === true) { //charmander

    player1.smokeScreenMove();

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

    //insert function here

    setTimeout (function(){



      computer.onixMoves();


    },2000); // computer attacks after 2 secs



  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

    //insert function here

    setTimeout (function(){



      computer.scytherMoves();



    },2000); //computer attacks after 2 secs



  }//end of statements





}//end of defenseB


function defenseC() {

  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  confirm.disableMoves();


  if(confirm.makeMove[0].player1Move === false && player1CH.pokemonType[0].isSelected === true) { //charmander

    player1.rest();

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

    player1.rest3();

    setTimeout (function(){



      computer.onixMoves();


    },2000); // computer attacks after 2 secs



  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

    player1.rest2();

    setTimeout (function(){



      computer.scytherMoves();



    },2000); //computer attacks after 2 secs



  }//end of statements


}//end of defenseC







//algorithem for switching pokemon is declared below

//varible declartions
let keepDefault = p1.preserveDefaultHP = true // default is true, but if keepChanges is true then keepDefault must be false
let keepChanges = p1.preserveHPChanges = false; // default is false, but if keepDefault is true then keepChanges must be false
let charmanderHP11 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
let squirtleHP11 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
let pikachuHP11 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
let scytherHP11 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
let blastoiseHP11 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
let onixHP11 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
let fullHealthData = a1.fullHealth.reduce(array1.PokemonHPReduced);





function loadCharmander () {

  //charmander + squirtle battle
  player1CH.chrPokeImage();

  if (confirm.makeMove[0].player1Move === true && player1CH.pokemonType[0].isSelected === true && p1.charmanderCounts >= 0) {

    //confirm selected pokemon first
    p1.charmanderSelected = true;
    comp.squirtleSelected = true;
    console.log("charmander selected: " + p1.charmanderSelected + "   squirtle selected: " + comp.squirtleSelected);

    //disable non-selected pokemon
    player1CH.pokemonType[2].isSelected = false; // pikachu
    player1CH.pokemonType[1].isSelected = false; // blastoise
    p1.pikachuSelected = false;
    p1.blastoiseSelected = false;
    console.log("non-selected pokemon are pikachu: " + p1.pikachuSelected + " and blastoise: " + p1.blastoiseSelected);

    //disable non-selected pokemon functions
    player1.pikachuMoves[0].pikachuFunction1of6 = false;
    player1.pikachuMoves[0].pikachuFunction2of6 = false;
    player1.pikachuMoves[0].pikachuFunction3of6 = false;
    player1.pikachuMoves[0].pikachuFunction4of6 = false;
    player1.pikachuMoves[0].pikachuFunction5of6 = false;
    player1.pikachuMoves[0].pikachuFunction6of6 = false;

    player1.blastoiseMoves[0].blastoiseFunction1of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction2of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction3of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction4of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction5of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction6of6 = false;

    //disable non-selected pokemon functions including computer oppenent as it removes bugs when using rest function
    computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;
    computer.squirtleMovesActivated[0].squirtleFunction2of6 = false;
    computer.squirtleMovesActivated[0].squirtleFunction3of6 = false;
    computer.squirtleMovesActivated[0].squirtleFunction4of6 = false;
    computer.squirtleMovesActivated[0].squirtleFunction5of6 = false;
    computer.squirtleMovesActivated[0].squirtleFunction6of6 = false;


    switch(pikachuHP11 === 0 && scytherHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1 ||
           keepDefault === true && p1.charmanderCounts === 0  || keepChanges  === true  && p1.charmanderCounts >= 1) {


case (pikachuHP11 === 0 && scytherHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1):

//clear previous comment as it becomes irrelavent
document.getElementById("statusProgress").innerHTML=("");


case (keepDefault === true && p1.charmanderCounts === 0):

//count the number of times charmander and squirtle was selected
 p1.charmanderCounts++;
 comp.squirtleCounts++;

//save these changes so it can be used later
keepDefault = false;
keepChanges = true;
console.log("keepDefault: "+ keepDefault);
console.log("keepChanges: "+ keepChanges);
console.log("charmanderCounts: " + p1.charmanderCounts);
console.log("squirtleCounts: " + comp.squirtleCounts);

//if charmanderCounts is 0 then 100% health is given charmander and squirtle
defaultProgressBar.defaultHPSetting();

break;



case (keepChanges  === true  && p1.charmanderCounts >= 1):

//if charmanderCounts is 1 or greater then no changes will be made to pokemon progressbar because it was previously modifed
defaultProgressBar.preserveHpSetting();


break;

default:

console.log("loadCharmander default switch was activated on this line: ");


                    }// end of switch statement


          }//end of if statement

}//end of loadCharmander function






function loadPikachu () {

  //pikachu + sycther battle
  player1CH.pikPokeImage();

  if (confirm.makeMove[0].player1Move === true && player1CH.pokemonType[2].isSelected === true && p1.pikachuCounts >= 0) {

    //confirm selected pokemon first
    p1.pikachuSelected = true;
    comp.scytherSelected = true;
    console.log("pikachu selected: " + p1.pikachuSelected + "   scyther selected: " + comp.scytherSelected);

    //disable non-selected pokemon
    player1CH.pokemonType[0].isSelected = false; // charmander
    player1CH.pokemonType[1].isSelected = false; // blastoise
    p1.charmanderSelected = false;
    p1.blastoiseSelected = false;
    console.log("non-selected pokemon are charmander: " + p1.charmanderSelected + " and blastoise: " + p1.blastoiseSelected);

    //disable non-selected pokemon functions
    player1.charmanderMoves[0].charmanderFunction1of6 = false;
    player1.charmanderMoves[0].charmanderFunction2of6 = false;
    player1.charmanderMoves[0].charmanderFunction3of6 = false;
    player1.charmanderMoves[0].charmanderFunction4of6 = false;
    player1.charmanderMoves[0].charmanderFunction5of6 = false;
    player1.charmanderMoves[0].charmanderFunction6of6 = false;

    player1.blastoiseMoves[0].blastoiseFunction1of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction2of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction3of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction4of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction5of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction6of6 = false;

    //disable non-selected pokemon functions including computer oppenent as it removes bugs when using rest function
    computer.scytherMovesActivated[0].scytherFunction1of6 = false;
    computer.scytherMovesActivated[0].scytherFunction2of6 = false;
    computer.scytherMovesActivated[0].scytherFunction3of6 = false;
    computer.scytherMovesActivated[0].scytherFunction4of6 = false;
    computer.scytherMovesActivated[0].scytherFunction5of6 = false;
    computer.scytherMovesActivated[0].scytherFunction6of6 = false;



    switch(charmanderHP11 === 0 && squirtleHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1 ||
           keepDefault === true && p1.pikachuCounts === 0  || keepChanges  === true  && p1.pikachuCounts >= 1) {

      case (charmanderHP11 === 0 && squirtleHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1):

      //clear previous comment as it becomes irrelavent
      document.getElementById("statusProgress").innerHTML=("");


      break;

      case (keepDefault === true && p1.pikachuCounts === 0):

      //count the number of times pikachu and scyther was selected
       p1.pikachuCounts++;
       comp.scytherCounts++;

      //save these changes so it can be used later
      keepDefault = false;
      keepChanges = true;
      console.log("keepDefault: "+ keepDefault);
      console.log("keepChanges: "+ keepChanges);
      console.log("pikachuCounts: " + p1.pikachuCounts);
      console.log("scytherCounts: " + comp.scytherCounts);

      //if pikachuCounts is 0 then 100% health is given to pikachu and scyther
      defaultProgressBar.defaultHPSetting();


      break;

      case (keepChanges  === true  && p1.pikachuCounts >= 1):

      //if pikachuCounts is 1 or greater then no changes will be made to pokemon progressbar
      defaultProgressBar.preserveHpSetting();



      break;

default:

console.log("loadPikachu default switch was activated on this line: ");


                }// end of switch statement


        }//end of if statement



}//end of loadPikachu function






function loadBlastoise () {

  //blastoise + onix battle
  player1CH.blaPokeImage();

  if (confirm.makeMove[0].player1Move === true && player1CH.pokemonType[1].isSelected === true && p1.blastoiseCounts >= 0) {

//confirm selected pokemon first
p1.blastoiseSelected = true;
comp.onixSelected = true;
console.log("blastoise selected: " + p1.blastoiseSelected + "   onix selected: " + comp.onixSelected);

//disable non-selected pokemon
player1CH.pokemonType[0].isSelected = false; // charmander
player1CH.pokemonType[2].isSelected = false; // pikachu
p1.charmanderSelected = false;
p1.pikachuSelected = false;
console.log("non-selected pokemon are charmander: " + p1.charmanderSelected + " and pikachu: " + p1.pikachuSelected);

//disable non-selected pokemon functions
player1.charmanderMoves[0].charmanderFunction1of6 = false;
player1.charmanderMoves[0].charmanderFunction2of6 = false;
player1.charmanderMoves[0].charmanderFunction3of6 = false;
player1.charmanderMoves[0].charmanderFunction4of6 = false;
player1.charmanderMoves[0].charmanderFunction5of6 = false;
player1.charmanderMoves[0].charmanderFunction6of6 = false;

player1.pikachuMoves[0].pikachuFunction1of6 = false;
player1.pikachuMoves[0].pikachuFunction2of6 = false;
player1.pikachuMoves[0].pikachuFunction3of6 = false;
player1.pikachuMoves[0].pikachuFunction4of6 = false;
player1.pikachuMoves[0].pikachuFunction5of6 = false;
player1.pikachuMoves[0].pikachuFunction6of6 = false;

//disable non-selected pokemon functions including computer oppenent as it removes bugs when using rest function
computer.onixMovesActivated[0].onixFunction1of6 = false;
computer.onixMovesActivated[0].onixFunction2of6 = false;
computer.onixMovesActivated[0].onixFunction3of6 = false;
computer.onixMovesActivated[0].onixFunction4of6 = false;
computer.onixMovesActivated[0].onixFunction5of6 = false;
computer.onixMovesActivated[0].onixFunction6of6 = false;


switch(charmanderHP11 === 0 && squirtleHP11 >= 1 || pikachuHP11 === 0 && blastoiseHP11 >= 1 ||
       keepDefault === true && p1.blastoiseCounts === 0  || keepChanges  === true  && p1.blastoiseCounts >= 1) {

  case (charmanderHP11 === 0 && squirtleHP11 >= 1 || pikachuHP11 === 0 && blastoiseHP11 >= 1):

  //clear previous comment as it becomes irrelavent
  document.getElementById("statusProgress").innerHTML=("");


  break;

  case (keepDefault === true && p1.blastoiseCounts === 0):

  //count the number of times blastoise and onix was selected
  p1.blastoiseCounts++;
  comp.onixCounts++;

  //save these changes so it can be used later
  keepDefault = false;
  keepChanges = true;
  console.log("keepDefault: "+ keepDefault);
  console.log("keepChanges: "+ keepChanges);
  console.log("blastoiseCounts: " + p1.blastoiseCounts);
  console.log("onixCounts: " + comp.onixCounts);

  //if blastoiseCounts is 0 then 100% health is given to blastoise and onix
  defaultProgressBar.defaultHPSetting();


  break;

  case (keepChanges  === true  && p1.blastoiseCounts >= 1):

  //if blastoiseCounts is 1 or greater then no changes will be made to pokemon progressbar
  defaultProgressBar.preserveHpSetting();


  break;

default:

console.log("loadBlastoise default switch was activated on this line: ");


              }// end of switch statement


      }//end of if statement

}//end of loadBlastoise function
