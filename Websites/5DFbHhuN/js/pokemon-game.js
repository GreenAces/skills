
/*
NOTE:

Last update: (05/24/2022)

1) troubleshoot why charmander vs onix does not work on (3.3) comp.onixSelected: and disable debuggingOperation when finish.  *** high priority *** (05/24/2022)
2) create code to make charmander battle with onix (see this.loadScytherOrOnix for details) but start with onixMoves function and add charmander functions  *** high priority *** (05/09/2022)
3) add more code for blaze and other charmander attack functions to battle with scyther or onix *** high priority *** (05/05/2022)
4) Save health information to array when pokemon gets injured. also restore health info when player switches back to pokemon.
5) Add a rule to the referee class about not being able to attack or defend if a pokemon is NOT selected. (working on it but it has errors -- see line 201)
6) On line 791 (or computer moves - phase1 function) improve the condition for the else if function
7) why is Computer health status is undefined on line 1149? maybe because it's a function?
8) if onix is the only pokemon left and blastoise eliminates it then match is won by player1 -- create a new image and inform player1 of winning the game. Also change deadPokemonBackup to accomadate all index for all 3 functions starting with loadScytherOrOnix ** 12/20/2021
9) fix boolean state and permission levels for pikachu and scyther (line 385)
10) call a switch statement on line 1443 for loadScytherOnly function *************************************************************************************************************************** 10/8/2021
11) commented out charmander and squirtle sound on line  844 *********************************************************************************************************************************** 8/24/2021
12)
14) remove bugs or useless code that you don't use  *** low priority *** (03/25/2022)
15) fix pokemonLoops and troubleshoot why charmanderSpeedBar2 is not updating when switching pokemon *** high priority *** (04/04/2022)
16)
17)
18) when scyther defeats charmander -- something could be wrong with the score count -- troubleshoot that *** low priority *** (05/05/2020)
19) add comment during laughandpoint image s whenever player1 uses rest function or when hp is > 40 *** low priority *** (04/06/2022)




*/




class images {
  constructor () {



    this.chrAtkImage1 = function () {  // image 1 of 6 is fireblaster for charmander

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/fireBlaster.gif" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("player1AttackImage").innerHTML=("");

        }, 5000); // 5 sec wait time

    }

      this.chrAtkImage2 = function () {  // image 2 of 6 is blaze for charmander

        document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blaze.png" </img>';
        document.getElementById("player1AttackImage").style.width = 180;
        document.getElementById("player1AttackImage").style.height = 100;

        setTimeout(function() { // This is an anonymous callback function

          // remove attack image after 5 secs
          document.getElementById("player1AttackImage").innerHTML=("");

          }, 5000); // 5 sec wait time

      }

        this.chrAtkImage3 = function () {  // image 3 of 6 solarbeam for charmander

          document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/solarbeam.png" </img>';
          document.getElementById("player1AttackImage").style.width = 180;
          document.getElementById("player1AttackImage").style.height = 100;

          setTimeout(function() { // This is an anonymous callback function

            // remove attack image after 5 secs
            document.getElementById("player1AttackImage").innerHTML=("");

          }, 5000); // 5 sec wait time



    }

    this.chrAtkImage4 = function () {  // image 4 of 6 is growl for charmander

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/growl.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time



}

this.chrAtkImage5 = function () {  // image 5 of 6 smoke screen for charmander

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/smokescreen.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 5 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 5000); // 5 sec wait time



}

this.chrAtkImage6 = function () {  // image 6 of 6 is rest for charmander -- NOTE: attack image needs to show on player1 side because of self-healing

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 5 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 5000); // 5 sec wait time



}




this.squAtkImage1 = function () { // image 1 of 6 is bubbles for squirtle

  document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/bubbles-gif.gif" </img>';
  document.getElementById("computerAttackImage").style.width = 180;
  document.getElementById("computerAttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("computerAttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}

this.squAtkImage2 = function () { // image 2 of 6 is TailWhip for squirtle

  document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/TailWhip.png" </img>';
  document.getElementById("computerAttackImage").style.width = 180;
  document.getElementById("computerAttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("computerAttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}


this.squAtkImage3 = function () { // image 3 of 6 is waterPulse for squirtle

  document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/waterPulse.png" </img>';
  document.getElementById("computerAttackImage").style.width = 180;
  document.getElementById("computerAttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("computerAttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}


this.squAtkImage4 = function () { // image 4 of 6 is tackle for squirtle

  document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/tackle.png" </img>';
  document.getElementById("computerAttackImage").style.width = 180;
  document.getElementById("computerAttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("computerAttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}

this.squAtkImage5 = function () { // image 5 of 6 is watergun for squirtle

  document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/watergun.png" </img>';
  document.getElementById("computerAttackImage").style.width = 180;
  document.getElementById("computerAttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("computerAttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}


this.squAtkImage6 = function () { // image 6 of 6 rest for squirtle -- NOTE: attack image needs to show on computer side because of self-healing

  document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
  document.getElementById("computerAttackImage").style.width = 180;
  document.getElementById("computerAttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("computerAttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}





this.pikAtkImage1 = function () { // image 1 of 6 thunderShock

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/pikachu_thundershock.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}

this.pikAtkImage2 = function () { // image 2 of 6 is doubleKick

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/pikachu_doublekick.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}

this.pikAtkImage3 = function () { // image 3 of 6 is thunderBolt -- note: consider using slash.gif for the animation for thunderBolt -- looks really good together

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/pikachu_thunderbolt.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}

this.pikAtkImage4 = function () { // image 4 of 6 is growl

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/pikachu_growl.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}

this.pikAtkImage5 = function () { // image 5 of 6 is headButt -- NOTE: 6of6 is rest but this is same attack move for all player1 pokemon

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/pikachu_headbutt.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 3 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 3000); // 3 sec wait time

}


this.pikAtkImage6 = function () {  // image 6 of 6 is rest for pikachu -- NOTE: attack image needs to show on player1 side because of self-healing

  document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
  document.getElementById("player1AttackImage").style.width = 180;
  document.getElementById("player1AttackImage").style.height = 100;

  setTimeout(function() { // This is an anonymous callback function

    // remove attack image after 5 secs
    document.getElementById("player1AttackImage").innerHTML=("");

  }, 5000); // 5 sec wait time



}







    this.scyAtkImage1 = function () { // image 1 of 6 is slash

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scyther2_slashMove2.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.scyAtkImage2 = function () { // image 2 of 6 is quick attack

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scyther_quickAttack.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.scyAtkImage3 = function () { // image 3 of 6 is X-Scissor

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scyther_X-Scissor.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.scyAtkImage4 = function () { // image 4 of 6 is Fury Cutter

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scyther_Furycutter.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.scyAtkImage5 = function () { // image 5 of 6 is Wing Attack

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scyther_WingAttack.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.scyAtkImage6 = function () {  // image 6 of 6 is rest for scyther -- NOTE: attack image needs to show on player1 side because of self-healing

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time



    }






    this.blaAtkImage1 = function () { // image 1 of 6 is aquaJet

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise_aquajet.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }

    this.blaAtkImage2 = function () { // image 2 of 6 is bubble

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise_bubble.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }

    this.blaAtkImage3 = function () { // image 3 of 6 is hydroPump

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise_hydropump.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }

    this.blaAtkImage4 = function () { // image 4 of 6 is protect

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise_protect.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }

    this.blaAtkImage5 = function () { // image 5 of 6 is headbutt

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise_headbutt.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 3 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 3000); // 3 sec wait time

    }

    this.blaAtkImage6 = function () {  // image 6 of 6 is rest for blastoise -- NOTE: attack image needs to show on player1 side because of self-healing

      document.getElementById("player1AttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
      document.getElementById("player1AttackImage").style.width = 180;
      document.getElementById("player1AttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("player1AttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time



    }






    this.oniAtkImage1 = function () { // image 1 of 6 is rock throw

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/onix_rockthrow.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.oniAtkImage2 = function () { // image 2 of 6 is smack down

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/onix_smackdown.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.oniAtkImage3 = function () { // image 3 of 6 is rock slide

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/onix_RockSlide.jpg" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.oniAtkImage4 = function () { // image 4 of 6 is screech

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/onix_Screech.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.oniAtkImage5 = function () { // image 5 of 6 is stone edge

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/onix_StoneEdge.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time

    }

    this.oniAtkImage6 = function () {  // image 6 of 6 is rest for onix -- NOTE: attack image needs to show on player1 side because of self-healing

      document.getElementById("computerAttackImage").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/HP-recovered.png" </img>';
      document.getElementById("computerAttackImage").style.width = 180;
      document.getElementById("computerAttackImage").style.height = 100;

      setTimeout(function() { // This is an anonymous callback function

        // remove attack image after 5 secs
        document.getElementById("computerAttackImage").innerHTML=("");

      }, 5000); // 5 sec wait time



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

     //pokemon voices

     this.charmanderVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/CharmanderVoice.mp3');
     this.blastoiseVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/BlastoiseVoice.wav');
     this.onixVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/OnixVoice.mp3');
     this.pikachuVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/PikachuVoice.mp3');
     this.pokemonBattleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/gameboy_battleTheme.mp3');
     this.pokemonVictoryVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/victoryThemezz.mp3');
     this.scytherVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/ScytherVoice.wav');
     this.squirtleVO = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/SquirtleVoicezzz.mp3');

     //other sound effects

     this.soundConfirmer = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/soundConfirmer.wav');
     this.invalidAction =  new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/invalidAction.mp3');
     this.congratulationsTheme = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/congratulationsTheme.mp3');
     this.cartoonLaugh_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/cartoonLaugh_sound.mp3');
     this.sadTrombone_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/sadTrombone_sound.mp3');


     //pokemon sound effects

     //charmander
     this.charmanderFireBlaster_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/charmanderFireBlaster_sound.mp3');
     this.chamanderBlaze_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/chamanderBlaze_sound.mp3');
     this.charmanderSolarBeam_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/charmanderSolarBeam_sound.mp3');
     this.charmanderGrowl_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/charmanderGrowl_sound.mp3');
     this.charmanderSmokeScreen_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/charmanderSmokeScreen_sound.mp3');
     this.pokemonRest_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pokemonRest_sound.mp3');

     //squirtle
     this.squirtleBubble_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/squirtleBubble_sound.mp3');
     this.squirtleTailWhip_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/squirtleTailWhip_sound.mp3');
     this.squirtleWaterPulse_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/squirtleWaterPulse_sound.mp3');
     this.squirtleTackle_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/squirtleTackle_sound.mp3');
     this.squirtleWaterGun_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/squirtleWaterGun_sound.mp3');
     this.pokemonRest_sound2 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pokemonRest_sound.mp3');

     //pikachu
     this.pikachuThunderBolt_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pikachuThunderBolt_sound.mp3');
     this.pikachuDoubleKick_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pikachuDoubleKick_sound.mp3');
     this.pikachuThunderBolt2_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pikachuThunderBolt_sound.mp3');
     this.charmanderGrowl_sound2 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/charmanderGrowl_sound.mp3');
     this.onixSmackDown_sound2 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/onixSmackDown_sound.mp3');
     this.pokemonRest_sound3 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pokemonRest_sound.mp3');

     //sycther
     this.scytherSlash_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/scytherSlash_sound.mp3');
     this.scytherQuickAttack_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/scytherQuickAttack_sound.mp3');
     this.scytherXScissor_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/scytherX-Scissor_sound.mp3');
     this.scytherFuryCutter_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/scytherFuryCutter_sound.mp3');
     this.scytherWingAttack_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/scytherWingAttack_sound.mp3');
     this.pokemonRest_sound4 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pokemonRest_sound.mp3');

     //blastoise
     this.blastoiseAquaJet_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/blastoiseAquaJet_sound.mp3');
     this.squirtleBubble_sound2 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/squirtleBubble_sound.mp3');
     this.blastoiseHydroPump_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/blastoiseHydroPump_sound.mp3');
     this.blastoiseProtect_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/blastoiseProtect_sound.mp3');
     this.onixSmackDown_sound3 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/onixSmackDown_sound.mp3');
     this.pokemonRest_sound5 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pokemonRest_sound.mp3');

     //onix
     this.onixRockThrow_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/onixRockThrow_sound.mp3');
     this.onixSmackDown_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/onixSmackDown_sound.mp3');
     this.onixRockSlide_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/onixRockSlide_sound.mp3');
     this.onixScreech_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/onixScreech_sound.mp3');
     this.onixStoneEdge_sound = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/onixStoneEdge_sound.mp3');
     this.pokemonRest_sound6 = new Audio('https://greenaces.site/5DFbHhuN/sounds/pokemon/pokemonRest_sound.mp3');





    this.soundSettingsOn = function() {

        // inform user of audio change with audio file

          player1SD.soundConfirmer.play();

        setTimeout(function() { // This is an anonymous callback function

          //play pokemon battle theme
          player1SD.pokemonBattleVO.play();

        }, 2000); // 2 sec wait time



      }

    this.soundSettingsOff = function () {
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
    this.deadPokemon = []; // NOTE: This is an empty array that will be used later
    this.deadPokemonBackup = []; // exact duplicate of deadPokemon array but with a size limit of 6 indexes
    this.charmanderDied = false; // default
    this.squirtleDied = false; // default
    this.pikachuDied = false; // default
    this.scytherDied = false; // default
    this.blastoiseDied = false; // default
    this.onixDied = false; // default
    this.charmanderAlive = true; // default
    this.squirtleAlive = true; // default
    this.pikachuAlive = true; // default
    this.scytherAlive = true; // default
    this.blastoiseAlive = true; // default
    this.onixAlive = true; // default
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

    //invalid sound starts when player tries to select dead pokemon


    (p1.charmanderDied === true && p1.charmanderSelected === true) ? player1SD.invalidAction.play() : console.log("User did not select charmander while it was dead.");

    (p1.charmanderDied === true && p1.charmanderSelected === true) ? document.getElementById("statusProgress3").innerHTML = "Charmander died and can no longer be selected." :  console.log("User did not select charmander while it was dead. (2)");

    (p1.pikachuDied === true && p1.pikachuSelected === true) ? player1SD.invalidAction.play() : console.log("User did not select pikachu while it was dead.");

    (p1.pikachuDied === true && p1.pikachuSelected === true) ? document.getElementById("statusProgress3").innerHTML = "Pikachu died and can no longer be selected." : console.log("User did not select pikachu while it was dead. (2)");

    (p1.blastoiseDied === true && p1.blastoiseSelected === true) ? player1SD.invalidAction.play() : console.log("User did not select blastoise while it was dead.");

    (p1.blastoiseDied === true && p1.blastoiseSelected === true) ? document.getElementById("statusProgress3").innerHTML = "Blastoise died and can no longer be selected." : console.log("User did not select blastoise while it was dead. (2)");




    //disable dead pokemon starts here


      if (p1.charmanderDied === true && comp.squirtleDied === false) {


        //change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions

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



      }// end of 1st if statement 1 of 3



      if (p1.charmanderDied === true && comp.scytherDied === false) {


        //change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions

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




      }// end of 1st if statement 2 of 3


      if (p1.charmanderDied === true && comp.onixDied === false) {


        //change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions

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



      }// end of 1st if statement 3 of 3  (

        // same conditions for other player1 pokemon
        if (p1.pikachuDied === true && comp.scytherDied === false) {



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

        if (p1.blastoiseDied === true && comp.onixDied === false) {




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





        //what happens when computer wins

        if (comp.squirtleDied === true && p1.charmanderDied === false) {



         // remove previous icon

         let elem =  document.createElement("img");
         elem.src ="";
         document.getElementById("squirtleIcon").appendChild(elem);
         document.getElementById("squirtleIcon").style.width = 34;
         document.getElementById("squirtleIcon").style.height = 46;

         // replace with new squirtle icon

         document.getElementById("squirtleIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/SquirtleHeadDead.png" </img>';
         document.getElementById("squirtleIcon").style.width = 34;
         document.getElementById("squirtleIcon").style.height = 46;





        }//end of if statement


        if (comp.scytherDied === true && p1.pikachuDied === false) {


           // remove previous icon

           let elem =  document.createElement("img");
           elem.src ="";
           document.getElementById("ScytherIcon").appendChild(elem);
           document.getElementById("ScytherIcon").style.width = 34;
           document.getElementById("ScytherIcon").style.height = 46;

           // replace with new squirtle icon

           document.getElementById("ScytherIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scytherHeadDead.png" </img>';
           document.getElementById("ScytherIcon").style.width = 34;
           document.getElementById("ScytherIcon").style.height = 46;





         }//end of if statement


         if (comp.onixDied === true && p1.blastoiseDied === false) {


           // remove previous icon

           let elem =  document.createElement("img");
           elem.src ="";
           document.getElementById("OnixIcon").appendChild(elem);
           document.getElementById("OnixIcon").style.width = 34;
           document.getElementById("OnixIcon").style.height = 46;

           // replace with new onix icon

           document.getElementById("OnixIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/OnixHeadDead.png" </img>';
           document.getElementById("OnixIcon").style.width = 34;
           document.getElementById("OnixIcon").style.height = 46;




          }//end of if statement


///////////////////////////////////new entries below////////////////////////////////////////////////////



        //new entry added for when player1 wins
        //what happens when charmander doesn't die -- it loads squirle, scyther,  or onix  -- set 1 of 3

        if (p1.charmanderDied === false && comp.squirtleDied === true) {

          //default action



          //conditional ternary determines if squirtle is dead then it can't be selected
          (p1.charmanderSelected === true &&  comp.squirtleDied === true) ? comp.squirtleSelected = false : comp.squirtleAlive = true;

          //conditional ternary determines if squirtle is dead and sets scyther as the selected pokemon if true
          (comp.squirtleDied === true && p1.charmanderSelected === true) ? comp.scytherSelected = true : comp.scytherSelected = false;

          console.log("(1) comp.scytherSelected: " + comp.scytherSelected);

          //No function is needed here



        }

         if (p1.charmanderDied === false && comp.scytherSelected === true) {





            //conditional ternary determines if scyther and squirtle are dead and sets onix as the the selected pokemon if true
            (comp.scytherDied === true && comp.squirtleDied === true) ? comp.onixSelected = true : comp.onixSelected = false;

            console.log("(2) comp.onixSelected: " + comp.onixSelected);

            //loads scyther or onix if squirtle dies
            computerCH.loadScytherOrOnix();





          }

          if (p1.charmanderDied === false && comp.onixSelected === true) {



            //conditional ternary determines if onix is dead then it can't be selected
            (p1.charmanderSelected === true && comp.onixDied === true) ? comp.onixSelected = false : comp.onixAlive = true;

            console.log("(3) comp.onixSelected: " + comp.onixSelected);


            //No function is needed here






          }//what happens when charmander doesn't die -- it loads squirle, scyther,  or onix  -- set 1 of 3








          //what happens when pikachu doesn't die -- it loads scyther, squirtle, or onix  -- set 2 of 3

          if (p1.pikachuDied === false && comp.scytherDied === true) {

            //default action



            //conditional ternary determines if scyther is dead then it can't be selected
            (p1.pikachuSelected === true && comp.scythereDied === true) ? comp.scytherSelected = false : comp.scytherAlive = true;

            //conditional ternary determines if scyther is dead and sets squirtle as the selected pokemon if true
            (comp.scytherDied === true) ? comp.squirtleSelected = true : comp.squirtleSelected = false;

            console.log("(1.2) comp.squirtleSelected: " + comp.squirtleSelected);

            //No function is needed here



          }

          if (p1.pikachuDied === false && comp.squirtleSelected === true) {


            //conditional ternary determines if scyther and squirtle are dead and sets onix as the the selected pokemon if true
            (comp.scytherDied === true && comp.squirtleDied === true) ? comp.onixSelected = true : comp.onixSelected = false;

            console.log("(2.2) comp.onixSelected: " + comp.onixSelected);

            //loads squirtle or onix if scyther dies
            computerCH.loadSquirtleOrOnix();


          }

          if (p1.pikachuDied === false && comp.onixSelected === true) {



            //conditional ternary determines if onix is dead then it can't be selected
            (p1.pikachuSelected === true && comp.onixDied === true) ? comp.onixSelected = false : comp.onixAlive = true;

            console.log("(3.3) comp.onixSelected: " + comp.onixSelected);


            //No function is needed here





          }//what happens when pikachu doesn't die -- it loads scyther, squirtle, or onix  -- set 2 of 3








          //what happens when blastoise doesn't die -- it loads onix, squirtle, or scyther  -- set 3 of 3

          if (p1.blastoiseDied === false && comp.onixDied === true) {

            //default action



            //conditional ternary determines if onix is dead then it can't be selected
            (p1.blastoiseSelected === true && comp.onixDied === true) ? comp.onixSelected = false : comp.onixAlive = true;

            //conditional ternary determines if onix is dead and sets squirtle as the selected pokemon if true
            (comp.onixDied === true) ? comp.squirtleSelected = true : comp.squirtleSelected = false;

            console.log("(1.3) comp.squirtleSelected: " + comp.squirtleSelected);

            //No function is needed here



          }

          if (p1.blastoiseDied === false && comp.squirtleSelected === true) {



            //conditional ternary determines if onix and squirtle are dead and sets scyther as the the selected pokemon if true
            (comp.onixDied === true && comp.squirtleDied === true && p1.blastoiseSelected === true) ? comp.scytherSelected = true : comp.scytherSelected = false;

            console.log("(2.3) comp.scytherSelected: " + comp.scytherSelected);

            //loads squirtle or scyther if onix dies
            computerCH.loadsquirtleOrScyther();

          }

          if (p1.blastoiseDied === false && comp.scytherSelected === true) {




            //conditional ternary determines if scyther is dead then it can't be selected
            (p1.blastoiseSelected === true && comp.scytherDied === true) ? comp.scytherSelected = false : comp.scytherAlive = true;

            console.log("(3.3) comp.scytherSelected: " + comp.scytherSelected);

            //No function is needed here



          }//what happens when blastoise doesn't die -- it loads onix, squirtle, or scyther  -- set 3 of 3









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

      // round 1 victory to computer
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

          //play sad trombone sound effect only when player1 pokemon dies
          player1SD.sadTrombone_sound.play();


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

            //play sad trombone sound effect only when player1 pokemon dies
            player1SD.sadTrombone_sound.play();



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

            //play sad trombone sound effect only when player1 pokemon dies
            player1SD.sadTrombone_sound.play();



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





          // round 1 victory to player1
         //load computer pokemon tombstone image based on certain conditions.

         if (squirtleHP7 <= 0 && charmanderHP7 >= 1 && comp.squirtleDied === true && p1.charmanderSelected === true) {

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

          //same conditions for other computer pokemon
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


        /////////////////////////////////////////////////////new entries ////////////////////////////////////////////////////////////////




        //round 2 and 3  victory to player 1 using charmander pokemon
        if (charmanderHP7 <= 0 && scytherHP8 >= 1 && p1.charmanderDied === true && comp.scytherSelected === true) {

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

            //play sad trombone sound effect only when player1 pokemon dies
            player1SD.sadTrombone_sound.play();


            // Change boolean state so player1 can't make a move
            confirm.makeMove[0].computerMove = true;


            setTimeout(function() {

           // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
           p1.disableDeadPokemon()

           // give score to computer array
           a2.computerScore.push(1);
           let score2 = a2.computerScore.reduce(array2.PokemonHPReduced);
           console.log("Computer Score: (***) " + score2);





             },3000); // 3 sec wait time for computer to select pokemon

           }//checks if charmander is dead when battling scyther


           else if (charmanderHP7 <= 0 && onixHP8 >= 1 && p1.charmanderDied === true && comp.onixSelected === true) {

             setTimeout(function() {


             //Inform player that a pokemon is dead and declare the game is over if the last two pokemon are dead (pikachu and blastoise)

            (p1.pikachuDied === true && p1.blastoiseDied === true) ?  document.getElementById("statusProgress").innerHTML= ("Last pokemon died. Game Over! Restart game to play again!") : document.getElementById("statusProgress").innerHTML= ("Select another pokemon!");



              },3000); // 3 sec wait time for computer to select pokemon



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

               //play sad trombone sound effect only when player1 pokemon dies
               player1SD.sadTrombone_sound.play();


               // Change boolean state so player1 can't make a move
               confirm.makeMove[0].computerMove = true;


               setTimeout(function() {

              // record the pokemon that died and possibly disable a dead pokemon here? -- debugging on this line
              p1.disableDeadPokemon()

              // give score to computer array
              a2.computerScore.push(1);
              let score2 = a2.computerScore.reduce(array2.PokemonHPReduced);
              console.log("Computer Score: (***2) " + score2);





                },3000); // 3 sec wait time for computer to select pokemon

              }// if charmander dies when battling onix, the game could be over because it's the last computer pokemon for that set









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


        // charmander vs squirtle battle (default)
        if (charmanderHP4  <= 0 && squirtleHP4 >= 1) {

          // confirm dead pokemon
          p1.charmanderDied = true;
          p1.charmanderAlive = false;

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
          comp.squirtleAlive = false;

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

        // charmander vs scyther battle
        if (charmanderHP4  <= 0 && scytherHP5 >= 1) {

          // confirm dead pokemon
          p1.charmanderDied = true;
          p1.charmanderAlive = false;



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


        }else if (charmanderHP4 >= 1 && scytherHP5  <= 0) {

          // confirm dead pokemon
          comp.scytherDied = true;
          comp.scytherAlive = false;


          //record data to deadPokemon array as well
          p1.deadPokemon.push("Scyther");
          p1.deadPokemonBackup.push("Scyther");

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


        }




        // charmander vs onix battle
        if (charmanderHP4  <= 0 && onixHP5 >= 1) {

          // confirm dead pokemon
          p1.charmanderDied = true;
          p1.charmanderAlive = false;



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


        }else if (charmanderHP4 >= 1 && onixHP5  <= 0) {

          // confirm dead pokemon
          comp.onixDied = true;
          comp.onixAlive = false;


          //record data to deadPokemon array as well
          p1.deadPokemon.push("Onix");
          p1.deadPokemonBackup.push("Onix");

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


        }


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
      p1.pikachuAlive = false;

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
      comp.scytherAlive = false;

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
      p1.blastoiseAlive = false;

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
      comp.onixAlive = false;

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



      //conditional ternary determines when player1 pokemon health is critical and resets statusProgress message when health is above 40
      (charmanderHP2 <= 40 || pikachuHP3 <= 40 ||blastoiseHP3 <= 40) ? document.getElementById("statusProgress").innerHTML= ("Player1 pokemon health is low.") : document.getElementById("statusProgress").innerHTML= ("");


      //This code will run after 2 sec because only 1 message can display at a time for the statusProgress
      setTimeout(function() {

      //conditional ternary determines when computer pokemon health is critical and resets statusProgress message when health is above 40
      (squirtleHP2 <= 40 || scytherHP3 <= 40 || onixHP3 <= 40) ? document.getElementById("statusProgress").innerHTML= ("Computer pokemon health is low.") : document.getElementById("statusProgress").innerHTML= ("");



    }, 2000);






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

  //round 1 -- victory to computer pokemon


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

  }

  //round 1 -- victory to player 1 pokemon

  if (charmanderHP3 >= 1 && squirtleHP3 <= 0  && p1.charmanderSelected === true && comp.squirtleSelected === true) {

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


  //round 2 and 3 victory goes to charmander set (scyther + onix)

  if (charmanderHP3 <= 0 && scytherHP4 >= 1  && p1.charmanderSelected === true && comp.scytherSelected === true) {

    document.getElementById("statusProgress").innerHTML=(p1.pokemonName[0] + " died. Pick another pokemon to continue the battle. (2)");
    p1.battle2Player1 = false;
    comp.battle2Computer = true;
    console.log("p1.battle2Player1: " + p1.battle2Player1);
    console.log("comp.battle2Computer: " + comp.battle2Computer);
    p1.isCharmanderDead();

  }else if (scytherHP4 <= 0 && charmanderHP3 >= 1  && p1.charmanderSelected === true && comp.scytherSelected === true) {

    document.getElementById("statusProgress3").innerHTML=(p1.pokemonName[0] +" won the match! Please wait for computer to select another pokemon. (2)");
    comp.battle2Computer = false;
    p1.battle2Player1 = true;
    console.log("p1.battle2Player1: " + p1.battle2Player1);
    console.log("comp.battle2Computer: " + comp.battle2Computer);
    p1.isCharmanderDead();

  }else if (charmanderHP3 <= 0 && onixHP4  >= 1  && p1.charmanderSelected === true && comp.onixSelected === true) {

    document.getElementById("statusProgress").innerHTML=(p1.pokemonName[0] + " died. Game over! Restart game to play again. (3)");
    comp.battle3Computer = true;
    p1.battle3Player1 = false;
    console.log("comp.battle3Computer: " + comp.battle3Computer);
    console.log("p1.battle3Player1: " + p1.battle3Player1);
    p1.isCharmanderDead();

  }else if (charmanderHP3 <= 0 && onixHP4  >= 1  && p1.charmanderSelected === true && comp.onixSelected === true) {

    document.getElementById("statusProgress3").innerHTML=(p1.pokemonName[0] +" won the match! Game over! (3)");
    comp.battle3Computer = false;
    p1.battle3Player1 = true;
    console.log("comp.battle3Computer: " + comp.battle3Computer);
    console.log("p1.battle3Player1: " + p1.battle3Player1);
    p1.isCharmanderDead();

  }//round 2 and 3 victory goes to charmander set (scyther + onix) -- if statement ends here


//if statement below determines how the game is won -- if player1 wins round 1, 2 and 3 -- then player1 is decleared the winner

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

  this.pokemonLoops = function () {

    //PokemonLoops updates the healthbar when user selects or switches pokemon. There should be at least 2 loops running (one for player1 and for PC pokemon)

    //varibles

    let updateCharmanderHP = 0;
    let updatePikachuHP = 0;
    let updateBlastoiseHP = 0;
    let updateSquirtleHP = 0;
    let updateScytherHP = 0;
    let updateOnixHP = 0;
    let charmanderHP8 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
    let charmanderSpeedBar2 =  a7.chaSpeedProgressBar.reduce(array1.PokemonHPReduced);
    let pikachuHP15 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
    let pikachuSpeedBar = a9.pikSpeedProgressBar.reduce(array1.PokemonHPReduced);
    let blastoiseHP16 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
    let blastoiseSpeedBar = a11.blaSpeedProgressBar.reduce(array1.PokemonHPReduced);
    let squirtleHP8 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
    let squirtleSpeedBar2 =  a8.squSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
    let scytherHP9 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
    let scytherSpeedBar = a10.scySpeedProgressBar.reduce(array2.PokemonSpeedReduced);
    let onixHP9 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
    let onixSpeedBar = a12.onixSpeedProgressBar.reduce(array2.PokemonHPReduced);
    let player1LowHealthIndicator3 = document.querySelector('.player1HP');
    let computerLowHealthIndicator3 = document.querySelector('.cpuHP');




  for (let i = 0; i < a1.charmanderHealthBar.length; i++) {

    //loop #1 for charmander
    if (charmanderHP8 >= 1 && p1.charmanderSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#1 for charmander started because it was selected.");

      //hp
      updateCharmanderHP = charmanderHP8;
      document.querySelector(".player1HP").style.width = updateCharmanderHP +   "%";
      player1LowHealthIndicator3.style.backgroundColor = "#A6EDED";//blue

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restore.restedPikachu === true && p1.charmanderSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restore.restedBlastoise === true && p1.charmanderSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";



      break;

    }else if (pikachuHP15 >=1 && p1.pikachuSelected === false || p1.pikachuDied === true) {

      //debugging here delete if neccessary
      console.log("loop#1 for pikachu ended because it's not selected.");

      //check to see if there are any deadPokemon being selected by player1
      p1.disableDeadPokemon();


      break;

    }else if (blastoiseHP16 >=1 && p1.blastoiseSelected === false || p1.blastoiseDied === true) {

      //debugging here delete if neccessary
      console.log("loop#1 for blastoise ended because it's not selected.");

      //check to see if there are any deadPokemon being selected by player1
      p1.disableDeadPokemon();


      break;

    }//end of if statement



  }//end of for-loop





  //loop #2 for pikachu
  for (let i = 0; i < a3.pikachuHealthBar.length; i++) {


    if (pikachuHP15 >= 1 && p1.pikachuSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#2 for pikachu started because it was selected.");


      //hp
      updatePikachuHP = pikachuHP15;
      document.querySelector(".player1HP").style.width = updatePikachuHP +   "%";
      player1LowHealthIndicator3.style.backgroundColor = "#A6EDED";//blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = pikachuSpeedBar  +   "%";
      document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED"; //blue

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restore.restedCharmander === true && p1.pikachuSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restore.restedBlastoise === true && p1.pikachuSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";


      break;

    }else if (charmanderHP8 >=1 && p1.charmanderSelected === false || p1.charmanderDied === true) {

      //debugging here delete if neccessary
      console.log("loop#2 for charmander ended because it's not selected.");

      //check to see if there are any deadPokemon being selected by player1
      p1.disableDeadPokemon();


      break;

    }else if (blastoiseHP16 >=1 && p1.blastoiseSelected === false || p1.blastoiseDied === true) {

      //debugging here delete if neccessary
      console.log("loop#2 for blastoise ended because it's not selected.");

      //check to see if there are any deadPokemon being selected by player1
      p1.disableDeadPokemon();


      break;

    }//end of if statement



  }//end of for-loop2



  //loop #3 for blastoise
  for (let i = 0; i < a5.blastoiseHealthBar.length; i++) {


    if (blastoiseHP16 >= 1 && p1.blastoiseSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#3 for blastoise started because it was selected.");

      //hp
      updateBlastoiseHP = blastoiseHP16;
      document.querySelector(".player1HP").style.width = updateBlastoiseHP +   "%";
      player1LowHealthIndicator3.style.backgroundColor = "#A6EDED";//blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar +   "%";
      document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED"; //blue

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restore.restedCharmander === true && p1.blastoiseDied === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restore.restedPikachu === true && p1.blastoiseDied === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";



      break;

    }else if (charmanderHP8 >=1 && p1.charmanderSelected === false || p1.charmanderDied === true) {

      //debugging here delete if neccessary
      console.log("loop#3 for charmander ended because it's not selected.");

      //check to see if there are any deadPokemon being selected by player1
      p1.disableDeadPokemon();


      break;

    }else if (pikachuHP15 >=1 && p1.pikachuSelected === false || p1.pikachuDied === true) {

      //debugging here delete if neccessary
      console.log("loop#3 for pikachu ended because it's not selected.");

      //check to see if there are any deadPokemon being selected by player1
      p1.disableDeadPokemon();


      break;

    }//end of if statement



  }//end of for-loop3



  //loop #4 for squirtle

  for (let i = 0; i < a2.squirtleHealthBar.length; i++) {

    if (squirtleHP8 >=1 && comp.squirtleSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#4 for squirtle started because charmander was selected.");

      //hp
      updateSquirtleHP = squirtleHP8;
      document.querySelector(".cpuHP").style.width = updateSquirtleHP +   "%";
      computerLowHealthIndicator3.style.backgroundColor = "#A6EDED";//blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar2 +   "%";
      document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED"; //blue



      break;

    }else if (pikachuHP15 >=1 && p1.pikachuSelected === false || p1.pikachuDied === true) {

      //debugging here delete if neccessary
      console.log("loop#4 for pikachu ended because it's not selected.");


      break;

    }else if (blastoiseHP16 >=1 && p1.blastoiseSelected === false || p1.blastoiseDied === true) {

      //debugging here delete if neccessary
      console.log("loop#4 for blastoise ended because it's not selected.");


      break;

    }//end of if statement

  }//end of for-loop4



  //loop #5 for scyther

  for (let i = 0; i < a4.scytherHealthBar.length; i++) {

    if (scytherHP9 >=1 && comp.scytherSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#5 for scyther started because pikachu was selected.");


      //hp
      updateScytherHP = scytherHP9;
      document.querySelector(".cpuHP").style.width = updateScytherHP +   "%";
      computerLowHealthIndicator3.style.backgroundColor = "#A6EDED";//blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = scytherSpeedBar +   "%";
      document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED"; //blue



      break;

    }else if (charmanderHP8 >=1 && p1.charmanderSelected === false || p1.charmanderDied === true) {

      //debugging here delete if neccessary
      console.log("loop#5 for charmander ended because it's not selected.");


      break;

    }else if (blastoiseHP16 >=1 && p1.blastoiseSelected === false || p1.blastoiseDied === true) {

      //debugging here delete if neccessary
      console.log("loop#5 for blastoise ended because it's not selected.");


      break;

    }//end of if statement

  }//end of for-loop5



  //loop #6 for onix

  for (let i = 0; i < a6.onixHealthBar.length; i++) {

    if (onixHP9 >=1 && comp.onixSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#6 for onix started because blastoise was selected.");

      //hp
      updateOnixHP = onixHP9;
      document.querySelector(".cpuHP").style.width = updateOnixHP +   "%";
      computerLowHealthIndicator3.style.backgroundColor = "#A6EDED";//blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = onixSpeedBar +   "%";
      document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED"; //blue



      break;

    }else if (charmanderHP8 >=1 && p1.charmanderSelected === false || p1.charmanderDied === true) {

      //debugging here delete if neccessary
      console.log("loop#6 for charmander ended because it's not selected.");


      break;

    }else if (pikachuHP15 >=1 && p1.pikachuSelected === false || p1.pikachuDied === true) {

      //debugging here delete if neccessary
      console.log("loop#6 for pikachu ended because it's not selected.");


      break;

    }//end of if statement

  }//end of for-loop6




}//end of pokemonLoops function




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

        //This function informs the player of the remaining pokemon that is left using pokemon icons

        //shows pokemmon icon without crosses if pokemon are live NOTE: default for all pokemon is true

        //player1 pokemon icons are here
        if (p1.charmanderAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (p1.charmanderAlive === false) ? p1.charmanderAlive = false : p1.charmanderAlive = true;
          //debugging delete when neccessary
          console.log("status check for charmanderAlive: " + p1.charmanderAlive);

          document.getElementById("charmanderIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmanderHeadIcon.png" </img>';
          document.getElementById("charmanderIcon").style.width = 34;
          document.getElementById("charmanderIcon").style.height = 46;

        }

        if (p1.pikachuAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (p1.pikachuAlive === false) ? p1.pikachuAlive = false : p1.pikachuAlive = true;


          document.getElementById("PikachuIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/PikachuHeadIcon.png" </img>';
          document.getElementById("PikachuIcon").style.width = 34;
          document.getElementById("PikachuIcon").style.height = 46;


        }

        if (p1.blastoiseAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (p1.blastoiseAlive === false) ? p1.blastoiseAlive = false : p1.blastoiseAlive = true;


          document.getElementById("BlastoiseIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/BlastoiseHeadIcon.png" </img>';
          document.getElementById("BlastoiseIcon").style.width = 34;
          document.getElementById("BlastoiseIcon").style.height = 46;


        }



        //computer pokemon icons are here
        if (comp.squirtleAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (comp.squirtleAlive === false) ? comp.squirtleAlive = false : comp.squirtleAlive= true;
          //debugging delete when neccessary
          console.log("status check for comp.squirtleAlive: " + comp.squirtleAlive);

          document.getElementById("squirtleIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/SquirtleHead.png" </img>';
          document.getElementById("squirtleIcon").style.width = 34;
          document.getElementById("squirtleIcon").style.height = 46;

        }


        if (comp.scytherAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (comp.scytherAlive === false) ? comp.scytherAlive = false : comp.scytherAlive = true;
          //debugging delete when neccessary
          console.log("status check for comp.scytherAlive: " + comp.scytherAlive);

          document.getElementById("ScytherIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scytherHead.png" </img>';
          document.getElementById("ScytherIcon").style.width = 34;
          document.getElementById("ScytherIcon").style.height = 46;

        }

        if (comp.onixAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (comp.onixAlive === false) ? comp.onixAlive= false : comp.onixAlive = true;
          //debugging delete when neccessary
          console.log("status check for comp.onixAlive: " + comp.onixAlive);

          document.getElementById("OnixIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/OnixHead.png" </img>';
          document.getElementById("OnixIcon").style.width = 34;
          document.getElementById("OnixIcon").style.height = 46;



        }




        //what happens when player1 loses to computer for all scenarios are listed here



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

        }//end of if statement 1 of 3

        if (p1.charmanderDied === true && comp.scytherDied === false) {

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

        }//end of if statement 2 of 3

        if (p1.charmanderDied === true && comp.onixDied === false) {

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

        }//end of if statement 3 of 3







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

        }//end of if statement 1 of 3

        if (p1.pikachuDied === true && comp.squirtleDied === false) {

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

       }//end of if statement 2 of 3

       if (p1.pikachuDied === true && comp.onixDied === false) {

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

      }//end of if statement 3 of 3







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

        }//end of if statement 1 of 3

        if  (p1.blastoiseDied === true && comp.squirtleDied === false) {

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

       }//end of if statement 2 of 3


       if  (p1.blastoiseDied === true && comp.scytherDied === false) {

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

      }//end of if statement 3 of 3










    }// end of pokemonIndicator


    this.debuggingOperation = function() {

      //default message for debuggingOperating function -- comment out when working on errors

     //console.log("DebuggingOperation function is launched. There are no major issues here.");


      // debugging begins here ----------------------------------------------------------


        let x = 20;


        if (x === 20) {




          console.log("debuggingOperation successful : if statment was triggered.");
          console.log("----------------------------------------------------------");

          if (p1.charmanderSelected === true && comp.onixSelected === true) {

            //debugging -- delete when neccessary
            console.log("charmarnder attacking onix confirmed");

            //confirm attack move for pokemon was clicked
            player1.charmanderMoves[0].charmanderFunction1of6 = true;

            computer.onixMovesActivated[0].onixFunction1of6 = true;

            //debugging here -- delete when neccessary
            console.log("charmanderFunction1of6 (3) is: " + player1.charmanderMoves[0].charmanderFunction1of6);

            //reflect the changes to onixHealthBar AND onixBackup array as well.
            //fireBlaster does -20 damage on scyther
            a6.onixHealthBar.push(-5);
            a6.onixBackup.push(-5);

            //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
            charmanderProgressBar.decreaseComputerHP2();

            //debugging here -----------------------------------
            console.log("onixHealthBar array (3) is " + a6.onixHealthBar);
            console.log("onixBackup array (3) is " + a6.onixBackup);

            // show image
            player1Img.chrAtkImage1();

            //change boolean state so that computer can attack
            confirm.makeMove[0].player1Move = false;
            confirm.makeMove[0].computerMove = true;

            console.log(confirm.makeMove[0]);

          }//end of statements












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


   //new entry added
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

      //new entry added
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



   //new entry added
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


// loads squirtle or onix if scyther dies (incomplete)
this.loadSquirtleOrOnix = function () {

  let squirtleHP7 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
  let onixHP8 = a6.onixHealthBar.reduce(array2.PokemonHPReduced)

  setTimeout(function() {

    let scytherHP10 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);



    if(comp.scytherDied === true && comp.squirtleAlive === true) {


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



        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[2] + " and has 1 pokemon remaining.");

       //load pokemon sound
       computerSD.squirtleVO.play();


       //Display and save computer pokemon name to savedPokemonName2
       document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
       computerCH.savedPokemonName2.push("Squirtle");

       //if squirtleHP is 100 then it will load with full health and change progressbar to blue
       (squirtleHP7 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
       document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue


       //verify that computer selected a pokemon
       computerCH.pokemonType[5].isSelected = true; //Squirtle


       // set boolean stats to false for non-selected pokemon
       computerCH.pokemonType[0].isSelected = false;
       computerCH.pokemonType[1].isSelected = false;
       computerCH.pokemonType[2].isSelected = false;
       computerCH.pokemonType[4].isSelected = false;






     }else if (comp.squirtleDied === true && comp.scytherDied === true && p1.pikachuAlive === true) {

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


       //Inform player that computer selected a pokemon
       document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[1] + " and has no pokemon remaining.");

      //load pokemon sound
      computerSD.onixVO.play();


      //Display and save computer pokemon name to savedPokemonName2
      document.getElementById("cpuPokemonName").innerHTML = "Onix";
      computerCH.savedPokemonName2.push("Onix");


      //if onix HP is 100 then it will load with full health and change progressbar to blue
      (onixHP8 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
      document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



      //verify that computer selected a pokemon
      computerCH.pokemonType[4].isSelected = true; //Onix


      //set boolean stats to false for non-selected pokemon
      computerCH.pokemonType[0].isSelected = false;
      computerCH.pokemonType[1].isSelected = false;
      computerCH.pokemonType[2].isSelected = false;
      computerCH.pokemonType[5].isSelected = false;

     }// end of if statement


        },1000); // 1 sec wait time for computer to select pokemon


            } //end of loadSquirtleOrOnix function




// loads squirtle or scyther if onix dies (incomplete)
this.loadsquirtleOrScyther = function () {

  let squirtleHP7 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
  let scytherHP8 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);

  setTimeout(function() {



    if(comp.onixDied === true && comp.squirtleAlive === true) {


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



      //Inform player that computer selected a pokemon
      document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[2] + " and has 1 pokemon remaining.");

     //load pokemon sound
     computerSD.squirtleVO.play();


     //Display and save computer pokemon name to savedPokemonName2
     document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
     computerCH.savedPokemonName2.push("Squirtle");

     //if squirtleHP is 100 then it will load with full health and change progressbar to blue
     (squirtleHP7 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
     document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



     //verify that computer selected a pokemon
     computerCH.pokemonType[5].isSelected = true; //Squirtle


     // set boolean stats to false for non-selected pokemon
     computerCH.pokemonType[0].isSelected = false;
     computerCH.pokemonType[1].isSelected = false;
     computerCH.pokemonType[2].isSelected = false;
     computerCH.pokemonType[4].isSelected = false;





   } else if (comp.squirtleDied === true && comp.onixDied === true && p1.blastoiseAlive === true) {

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


      //Inform player that computer selected a pokemon
      document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[0] + " and has no pokemon remaining.");

      //load pokemon sound
      computerSD.scytherVO.play();


      //Display and save computer pokemon name to savedPokemonName2 on line 445
      document.getElementById("cpuPokemonName").innerHTML = "Scyther";
      computerCH.savedPokemonName2.push("Scyther");


      //if scytherHP is 100 then it will load with full health and change progressbar to blue
      (scytherHP8 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
      document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



      //verify that computer selected a pokemon
      computerCH.pokemonType[3].isSelected = true; //Scyther


      //set boolean stats to false for non-selected pokemon
      computerCH.pokemonType[0].isSelected = false;
      computerCH.pokemonType[1].isSelected = false;
      computerCH.pokemonType[2].isSelected = false;
      computerCH.pokemonType[4].isSelected = false;
      computerCH.pokemonType[5].isSelected = false;


   }//end of if statement


        },1000); // 1 sec wait time for computer to select pokemon


            } //end of loadsquirtleOrScyther function







// loads scyther or onix if squirtle dies (work-in-progress)
this.loadScytherOrOnix = function () {

  let scytherHP2 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
  let onixHP10 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);

  setTimeout(function() {



    if(comp.squirtleDied === true && comp.scytherAlive === true) {




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


        //Inform player that computer selected a pokemon
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[0] + " and has 1 pokemon remaining.");

       //load pokemon sound
       computerSD.scytherVO.play();


       //Display and save computer pokemon name to savedPokemonName2 on
       document.getElementById("cpuPokemonName").innerHTML = "Scyther";
       computerCH.savedPokemonName2.push("Scyther");

       //if scythers HP is 100 then it will load with full health and change progressbar to blue
       (scytherHP2 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
       document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



       //verify that computer selected a pokemon
       computerCH.pokemonType[3].isSelected = true; //Scyther


       //set boolean stats to false for non-selected pokemon
       computerCH.pokemonType[0].isSelected = false;
       computerCH.pokemonType[1].isSelected = false;
       computerCH.pokemonType[2].isSelected = false;
       computerCH.pokemonType[4].isSelected = false;
       computerCH.pokemonType[5].isSelected = false;








     }else if (comp.squirtleDied === true && comp.scytherDied === true && p1.charmanderAlive === true) {




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


           //Inform player that computer selected a pokemon
           document.getElementById("statusProgress").innerHTML=("Computer seleted " + computerCH.ComputerPokemonChoices[1] + " and has no pokemon remaining.");

          //load pokemon sound
          computerSD.onixVO.play();


          //Display and save computer pokemon name to savedPokemonName2
          document.getElementById("cpuPokemonName").innerHTML = "Onix";
          computerCH.savedPokemonName2.push("Onix");


          //if onix HP is 100 then it will load with full health and change progressbar to blue
          (onixHP10 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
          document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



          //verify that computer selected a pokemon
          computerCH.pokemonType[4].isSelected = true; //Onix


          //set boolean stats to false for non-selected pokemon
          computerCH.pokemonType[0].isSelected = false;
          computerCH.pokemonType[1].isSelected = false;
          computerCH.pokemonType[2].isSelected = false;
          computerCH.pokemonType[5].isSelected = false;








     }//end of if statements


        },1000); // 1 sec wait time for computer to select pokemon


                }//end of loadScytherOrOnix function












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


         let charmanderSpeedBar4 =  a7.chaSpeedProgressBar.reduce(array1.PokemonHPReduced);
         let pikachuSpeedBar4 = a9.pikSpeedProgressBar.reduce(array1.PokemonHPReduced);
         let blastoiseSpeedBar4 = a11.blaSpeedProgressBar.reduce(array1.PokemonHPReduced);
         let squirtleSpeedBar4 =  a8.squSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
         let scytherSpeedBar4 = a10.scySpeedProgressBar.reduce(array2.PokemonSpeedReduced);
         let onixSpeedBar2 = a12.onixSpeedProgressBar.reduce(array2.PokemonHPReduced);

         let squirtleHP6 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
         let charmanderHP6 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
         let pikachuHP13 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
         let scytherHP13 = a4.scytherHealthBar.reduce(array2.PokemonHPReduced);
         let blastoiseHP13 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
         let onixHP13 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);


         if (charmanderHP6 < 100 && squirtleHP6 < 100 && p1.charmanderSelected === true && comp.squirtleSelected === true) {


         document.querySelector(".player1HP").style.width = charmanderHP6 +   "%";
         document.querySelector(".playerSpeed").style.width = charmanderSpeedBar4 +   "%";

         //conditional ternary for speedbar does the following:

         //update charmander speedbar
         (charmanderSpeedBar4 >=1 && charmanderSpeedBar4 <= 100) ? document.querySelector(".playerSpeed").style.width = charmanderSpeedBar4  +   "%"  : document.querySelector(".playerSpeed").style.width =  "1 %" ;

         //change charmander speedbar to red or blue
         (charmanderSpeedBar4 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


         setTimeout(function() {

           document.querySelector(".cpuHP").style.width = squirtleHP6 +   "%";
           document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar4 +   "%";

           //conditional ternary for speedbar does the following:

           //update squirtle speedbar
           (squirtleSpeedBar4 >=1 && squirtleSpeedBar4 <= 100) ? document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar4  +   "%"  : document.querySelector(".cpuSpeed").style.width =  "1 %" ;

           //change squirtle speedbar to red or blue
           (squirtleSpeedBar4 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";

          }, 3000); // 3 sec delay to load computer progressbar


       }else if (pikachuHP13 < 100 && scytherHP13 < 100 && p1.pikachuSelected === true && comp.scytherSelected === true) {


         document.querySelector(".player1HP").style.width = pikachuHP13 +   "%";
         document.querySelector(".playerSpeed").style.width = pikachuSpeedBar4 +   "%";

         //conditional ternary for speedbar does the following:

         //update pikachu speedbar
         (pikachuSpeedBar4 >=1 && pikachuSpeedBar4 <= 100) ? document.querySelector(".playerSpeed").style.width = pikachuSpeedBar4  +   "%"  : document.querySelector(".playerSpeed").style.width =  "1 %" ;


        //change pikachu speedbar to red or blue
         (pikachuSpeedBar4 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


         setTimeout(function() {

           document.querySelector(".cpuHP").style.width = scytherHP13 +   "%";
           document.querySelector(".cpuSpeed").style.width = scytherSpeedBar4 +   "%";

           //conditional ternary for speedbar does the following:

           //update scyther speedbar
           (scytherSpeedBar4 >=1 && scytherSpeedBar4 <= 100) ? document.querySelector(".cpuSpeed").style.width = scytherSpeedBar4  +   "%"  : document.querySelector(".cpuSpeed").style.width =  "1 %" ;

           //change scyther speedbar to red or blue
           (scytherSpeedBar4 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";

          }, 3000); // 3 sec delay to load computer progressbar


       }else if (blastoiseHP13 < 100 && onixHP13 < 100 && p1.blastoiseSelected === true && comp.onixSelected === true) {


         document.querySelector(".player1HP").style.width = blastoiseHP13 +   "%";
         document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar4 +   "%";

         //conditional ternary for speedbar does the following:

         //update blastoise speedbar
         (blastoiseSpeedBar4 >=1 && blastoiseSpeedBar4 <= 100) ? document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar4  +   "%"  : document.querySelector(".playerSpeed").style.width =  "1 %" ;


         //change blastoise speedbar to red or blue
         (blastoiseSpeedBar4 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


         setTimeout(function() {

           document.querySelector(".cpuHP").style.width = onixHP13 +   "%";
           document.querySelector(".cpuSpeed").style.width = onixSpeedBar2 +   "%";

           //conditional ternary for speedbar does the following:

           //update onix speedbar
           (onixSpeedBar2 >=1 && onixSpeedBar2 <= 100) ? document.querySelector(".cpuSpeed").style.width = onixSpeedBar2  +   "%"  : document.querySelector(".cpuSpeed").style.width =  "1 %" ;


           //change onix speedbar to red or blue
           (onixSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

          }, 3000); // 3 sec delay to load computer progressbar


          }//end of if statements

                  }//end of preserveHpSetting function





    this.decreaseComputerHP = function () {

      // variable declartions


      let hpDamage = 0;
      let squirtleHP5 = a2.squirtleHealthBar.reduce(array2.PokemonHPReduced);
      let squirtleSpeedBar5 =  a8.squSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
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

        //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

        (squirtleSpeedBar5 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";

        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        break;

        case (squirtleHP5 === 0):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";

        //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

        (squirtleSpeedBar5 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        p1.informWinner();
        break;

        case (squirtleHP5 > 0 && squirtleHP5 <= 20):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";

        //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

        (squirtleSpeedBar5 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        break;

        case (squirtleHP5 > 20 && squirtleHP5 <= 40):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";

        //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

        (squirtleSpeedBar5 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


        computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
        break;

        case (squirtleHP5 > 40 && squirtleHP5 <= 100):
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";

        //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

        (squirtleSpeedBar5 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


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
              let onixSpeedBar3 = a12.onixSpeedProgressBar.reduce(array2.PokemonHPReduced);
              let computerLowHealthIndicator = document.querySelector('.cpuHP');



              if (onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction1of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction2of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction3of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction4of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && computer.onixMovesActivated[0].onixFunction5of6 === true) {

                //if statement ensures that some funtions are activated before making changes to the progress bar


                switch(onixHP2 < 0 || onixHP2 >= 0) {

                case (onixHP2 < 0):
                hpDamage5 = 0;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                p1.informWinner();

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                (onixSpeedBar3 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


                computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                break;


                case (onixHP2 === 0):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                p1.informWinner();

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                (onixSpeedBar3 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                break;

                case (onixHP2 > 0 && onixHP2 <= 20):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                (onixSpeedBar3 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                break;

                case (onixHP2 > 20 && onixHP2 <= 40):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                (onixSpeedBar3 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                break;

                case (onixHP2 > 40 && onixHP2 <= 100):
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                (onixSpeedBar3 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

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
                let scytherSpeedBar4 = a10.scySpeedProgressBar.reduce(array2.PokemonSpeedReduced);
                let computerLowHealthIndicator = document.querySelector('.cpuHP');



                if (scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction1of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction2of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction3of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction4of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && computer.scytherMovesActivated[0].scytherFunction5of6 === true) {

                  //if statement ensures that some funtions are activated before making changes to the progress bar


                  switch(scytherHP2 < 0 || scytherHP2 >= 0) {

                  case (scytherHP2 < 0 ):
                  hpDamage6 = 0;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  p1.informWinner();

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                  (scytherSpeedBar4 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                  break;


                  case (scytherHP2 === 0):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                  (scytherSpeedBar4 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                  p1.informWinner();
                  break;

                  case (scytherHP2 > 0 && scytherHP2 <= 20):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                  (scytherSpeedBar4 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                  break;

                  case (scytherHP2 > 20 && scytherHP2 <= 40):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";


                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                  (scytherSpeedBar4 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


                  computerLowHealthIndicator.style.backgroundColor = "#FD0202";//red
                  break;

                  case (scytherHP2 > 40 && scytherHP2 <= 100):
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions

                  (scytherSpeedBar4 <= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED";


                  computerLowHealthIndicator.style.backgroundColor = "#A6EDED";//blue
                  break;

                  default:

                 console.log("decreaseComputerHP3 default function was called. Look at the switch cases. (3-3)");

                    }// end of switch statement

                  }// end of if statement

                } // end of decreaseComputerHP3 function




    this.decreasePlayerHP = function () {

      // variable declartions

      let pikachuHPDamage2= 0;
      let charmanderHPDamage2 = 0;
      let blastoiseHPDamage2 = 0;
      let hpRecovered7 = 0;
      let pikachuHP2 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
      let pikachuSpeedBar2 = a9.pikSpeedProgressBar.reduce(array1.PokemonHPReduced);
      let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
      let charmanderSpeedBar =  a7.chaSpeedProgressBar.reduce(array1.PokemonHPReduced);
      let blastoiseHP2 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
      let blastoiseSpeedBar2 = a11.blaSpeedProgressBar.reduce(array1.PokemonHPReduced);
      let player1LowHealthIndicator = document.querySelector('.player1HP');






      if(charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction2of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction3of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction4of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction5of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction6of6 === true ||

         pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction1of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction2of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction3of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction4of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction5of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction6of6 === true ||

         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction1of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction2of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction3of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction4of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction5of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction6of6 === true) {

        //if statement ensures that some functions are activated before making changes to the progress bar


        switch (pikachuHP2 < 0 || pikachuHP2 >= 0  || charmanderHP5 < 0 || charmanderHP5 >= 0 || blastoiseHP2 < 0 || blastoiseHP2 >= 0) {

          case (pikachuHP2 < 0 || charmanderHP5 < 0 || blastoiseHP2 < 0):



          if(p1.pikachuSelected === true && comp.squirtleSelected === true) {

            pikachuHPDamage2 = 0;
            document.querySelector(".player1HP").style.width = pikachuHPDamage2 +   "%";

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

            comp.informWinner();

          }else if (p1.charmanderSelected === true && comp.squirtleSelected === true) {

            charmanderHPDamage2 = 0;
            document.querySelector(".player1HP").style.width = charmanderHPDamage2 +   "%";

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

            comp.informWinner();

          }else if (p1.blastoiseSelected === true && comp.squirtleSelected === true) {

            blastoiseHPDamage2 = 0;
            document.querySelector(".player1HP").style.width = blastoiseHPDamage2 +   "%";

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

            comp.informWinner();

          }//end of if statements





          break;


          case (pikachuHP2 === 0 || charmanderHP5 === 0 || blastoiseHP2 === 0):

          if(p1.pikachuSelected === true && comp.squirtleSelected === true) {

            pikachuHPDamage2 = pikachuHP2;
            document.querySelector(".player1HP").style.width = pikachuHPDamage2 +   "%";

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

            player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

            comp.informWinner();


          }else if (p1.charmanderSelected === true && comp.squirtleSelected === true) {

            charmanderHPDamage2 = charmanderHP5;
            document.querySelector(".player1HP").style.width = charmanderHPDamage2 +   "%";

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

            player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

            comp.informWinner();


          }else if (p1.blastoiseSelected === true && comp.squirtleSelected === true) {

            blastoiseHPDamage2 = blastoiseHP2;
            document.querySelector(".player1HP").style.width = blastoiseHPDamage2 +   "%";

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

            player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

            comp.informWinner();

          }//end of if statements



          break;

          case (pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100):


          //change color of HP progress bar here:
          if(p1.pikachuSelected === true && comp.squirtleSelected === true && pikachuHP2 > 40) {

            pikachuHPDamage2 = pikachuHP2;
            document.querySelector(".player1HP").style.width = pikachuHPDamage2 +   "%";
            player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

          }else if (p1.charmanderSelected === true && comp.squirtleSelected === true && charmanderHP5 > 40) {

            charmanderHPDamage2 = charmanderHP5;
            document.querySelector(".player1HP").style.width = charmanderHPDamage2 +   "%";
            player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


          }else if (p1.blastoiseSelected === true && comp.squirtleSelected === true) {

            blastoiseHPDamage2 = blastoiseHP2;
            document.querySelector(".player1HP").style.width = blastoiseHPDamage2 +   "%";
            player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


          }//end of if statement #1 1 of 2


          if(p1.pikachuSelected === true && comp.squirtleSelected === true && pikachuHP2 <= 40 ) {

            pikachuHPDamage2 = pikachuHP2;
            document.querySelector(".player1HP").style.width = pikachuHPDamage2 +   "%";
            player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

          }else if (p1.charmanderSelected === true && comp.squirtleSelected === true && charmanderHP5 <= 40) {

            charmanderHPDamage2 = charmanderHP5;
            document.querySelector(".player1HP").style.width = charmanderHPDamage2 +   "%";
            player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

          }else if (p1.blastoiseSelected === true && comp.squirtleSelected === true && blastoiseHP2 <= 40) {

            blastoiseHPDamage2 = blastoiseHP2;
            document.querySelector(".player1HP").style.width = blastoiseHPDamage2 +   "%";
            player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

            //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
            (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";



          }//end of if statement #1 2 of 2







            //change speedbar progressbar here:
            if(p1.pikachuSelected === true && comp.squirtleSelected === true && pikachuSpeedBar2 <= 50) {

              //confirm that pikachu speedbar is only decreased here:
              restore.pikachuSpeedDecreased = true;

              document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
              document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              console.log("pikachu speedbar array is "+ pikachuSpeedBar2);


            }else if (p1.charmanderSelected === true && comp.squirtleSelected === true && charmanderSpeedBar <= 50) {

              //confirm that charmander speedbar is only decreased here:
              restore.charmanderSpeedDecreased = true;

              document.querySelector(".playerSpeed").style.width = charmanderSpeedBar  +   "%";
              document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              console.log("charmander speedbar array is "+ charmanderSpeedBar);

            }else if (p1.blastoiseSelected === true && comp.squirtleSelected === true && blastoiseSpeedBar2 <= 50) {

              //confirm that blastoise speedbar is only decreased here:
              restore.blastoiseSpeedDecreased = true;

              document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
              document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              console.log("blastoise speedbar array is "+ blastoiseSpeedBar2);


            }//end of if statement #2




          if(p1.pikachuSelected === true && comp.squirtleSelected === true && pikachuSpeedBar2 <= 0 || pikachuSpeedBar2 < 0) {

            document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
            document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

          }else if (p1.charmanderSelected === true && comp.squirtleSelected === true && charmanderSpeedBar <= 0 || charmanderSpeedBar < 0) {

            document.querySelector(".playerSpeed").style.width = charmanderSpeedBar  +   "%";
            document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

          }else if (p1.blastoiseSelected === true && comp.squirtleSelected === true && blastoiseSpeedBar2 <= 0 || blastoiseSpeedBar2 < 0) {

            document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
            document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

          }//end of if statement #3



          if(p1.pikachuSelected === true && comp.squirtleSelected === true && pikachuSpeedBar2 === 0 && restore.pikachuSpeedDecreased === true || pikachuSpeedBar2 < 0 && restore.pikachuSpeedDecreased === true) {

            //confirm that pikachu rested and speedbar is at zero only here:
            restore.restedPikachu = true;

            hpRecovered6 = 1; //setting this to 1 HP to indicate low speedbar

            document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
            document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            //play invalid sound here:
            player1SD.invalidAction.play();


            //remove event listener to prevent user from using the rest function
            document.getElementById("defenseC").style.color = "#C91212";
            document.getElementById("defenseC").removeEventListener("click", defenseC);
            player1SD.pokemonRest_sound3.pause();


            setTimeout(function() {

              //inform player1 that they can no longer use rest function
              document.getElementById("statusProgress2").innerHTML = "Pikachu can no longer rest because speed is too low!";

            }, 1000);// message is displayed after 1 sec.



            //debugging here -- delete when neccessary
            //turn of rest function for pikachu when speed progress bar is zero
            console.log("restedPikachu status: " + restore.restedPikachu);
            console.log("Pikachu rest function was disabled without making function6of6 false.");

          }else if (p1.charmanderSelected === true && comp.squirtleSelected === true && charmanderSpeedBar  === 0 && restore.charamanderSpeedDecreased === true || charmanderSpeedBar < 0 && restore.charamanderSpeedDecreased === true) {

            //confirm that charmander rested and speedbar is at zero only here:
            restore.restedCharmander = true;

            hpRecovered7 = 1; //setting this to 1 HP to indicate low speedbar

            document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
            document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            //play invalid sound here:
            player1SD.invalidAction.play();


            //remove event listener to prevent user from using the rest function
            document.getElementById("defenseC").style.color = "#C91212";
            document.getElementById("defenseC").removeEventListener("click", defenseC);
            player1SD.pokemonRest_sound3.pause();


            setTimeout(function() {

              //inform player1 that they can no longer use rest function
              document.getElementById("statusProgress2").innerHTML = "Charmander can no longer rest because speed is too low!";

            }, 1000);// message is displayed after 1 sec.



            //debugging here -- delete when neccessary
            //turn of rest function for charmander when speed progress bar is zero
            console.log("restedCharmander status(2): " + restore.restedCharmander);
            console.log("Charmander rest function was disabled without making function6of6 false.(2)");

          }else if (p1.blastoiseSelected === true && comp.squirtleSelected === true && blastoiseSpeedBar2  === 0 && restore.blastoiseSpeedDecreased === true || blastoiseSpeedBar2 < 0 && restore.blastoiseSpeedDecreased === true) {

            //confirm that blastoise rested and speedbar is at zero only here:
            restore.restedBlastoise = true;

            hpRecovered7 = 1; //setting this to 1 HP to indicate low speedbar

            document.querySelector(".playerSpeed").style.width = hpRecovered7  +   "%";
            document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            //play invalid sound here:
            player1SD.invalidAction.play();


            //remove event listener to prevent user from using the rest function
            document.getElementById("defenseC").style.color = "#C91212";
            document.getElementById("defenseC").removeEventListener("click", defenseC);
            player1SD.pokemonRest_sound3.pause();


            setTimeout(function() {

              //inform player1 that they can no longer use rest function
              document.getElementById("statusProgress2").innerHTML = "Blastoise can no longer rest because speed is too low!";

            }, 1000);// message is displayed after 1 sec.



            //debugging here -- delete when neccessary
            //turn of rest function for blastoise when speed progress bar is zero
            console.log("restedBlastoise status(3): " + restore.restedBlastoise);
            console.log("Blastoise rest function was disabled without making function6of6 false.(3)");



          }//end of if statement #4







          break;


          default:




        console.log("decreasePlayerHP default function was called. Look at the switch cases (1).");


}// end of switch statement

      }// end of if statement

          } // end of decreasePlayerHP function



          this.decreasePlayerHP2 = function () {

            // variable declartions

            let pikachuHPDamage = 0;
            let charmanderHPDamage = 0;
            let blastoiseHPDamage = 0;
            let hpRecovered6 = 0;
            let pikachuHP2 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
            let pikachuSpeedBar2 = a9.pikSpeedProgressBar.reduce(array1.PokemonHPReduced);
            let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
            let charmanderSpeedBar =  a7.chaSpeedProgressBar.reduce(array1.PokemonHPReduced);
            let blastoiseHP2 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
            let blastoiseSpeedBar2 = a11.blaSpeedProgressBar.reduce(array1.PokemonHPReduced);
            let player1LowHealthIndicator = document.querySelector('.player1HP');



            if(pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction1of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction2of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction3of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction4of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction5of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction6of6 === true ||

               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction2of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction3of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction4of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction5of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction6of6 === true ||

               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction1of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction2of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction3of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction4of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction5of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction6of6 === true) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(pikachuHP2 < 0 || pikachuHP2 >= 0  || charmanderHP5 < 0 || charmanderHP5 >= 0 || blastoiseHP2 < 0 || blastoiseHP2 >= 0) {

              case (pikachuHP2 < 0 || charmanderHP5 < 0 || blastoiseHP2 < 0):



              if(p1.pikachuSelected === true && comp.scytherSelected === true) {

                pikachuHPDamage = 0;
                document.querySelector(".player1HP").style.width = pikachuHPDamage +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                comp.informWinner();

              }else if (p1.charmanderSelected === true && comp.scytherSelected === true) {

                charmanderHPDamage = 0;
                document.querySelector(".player1HP").style.width = charmanderHPDamage +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                comp.informWinner();

              }else if (p1.blastoiseSelected === true && comp.scytherSelected === true) {

                blastoiseHPDamage = 0;
                document.querySelector(".player1HP").style.width = blastoiseHPDamage +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                comp.informWinner();

              }//end of if statements





              break;


              case (pikachuHP2 === 0 || charmanderHP5 === 0 || blastoiseHP2 === 0):

              if(p1.pikachuSelected === true && comp.scytherSelected === true) {

                pikachuHPDamage = pikachuHP2;
                document.querySelector(".player1HP").style.width = pikachuHPDamage +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                comp.informWinner();


              }else if (p1.charmanderSelected === true && comp.scytherSelected === true) {

                charmanderHPDamage = charmanderHP5;
                document.querySelector(".player1HP").style.width = charmanderHPDamage +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                comp.informWinner();


              }else if (p1.blastoiseSelected === true && comp.scytherSelected === true) {

                blastoiseHPDamage = blastoiseHP2;
                document.querySelector(".player1HP").style.width = blastoiseHPDamage +   "%";

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                comp.informWinner();

              }//end of if statements



              break;

              case (pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100):


              //change color of HP progress bar here:
              if(p1.pikachuSelected === true && comp.scytherSelected === true && pikachuHP2 > 40) {

                pikachuHPDamage = pikachuHP2;
                document.querySelector(".player1HP").style.width = pikachuHPDamage +   "%";
                player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

              }else if (p1.charmanderSelected === true && comp.scytherSelected === true && charmanderHP5 > 40) {

                charmanderHPDamage = charmanderHP5;
                document.querySelector(".player1HP").style.width = charmanderHPDamage +   "%";
                player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


              }else if (p1.blastoiseSelected === true && comp.scytherSelected === true) {

                blastoiseHPDamage = blastoiseHP2;
                document.querySelector(".player1HP").style.width = blastoiseHPDamage +   "%";
                player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


              }//end of if statement #1 1 of 2


              if(p1.pikachuSelected === true && comp.scytherSelected === true && pikachuHP2 <= 40 ) {

                pikachuHPDamage = pikachuHP2;
                document.querySelector(".player1HP").style.width = pikachuHPDamage +   "%";
                player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

              }else if (p1.charmanderSelected === true && comp.scytherSelected === true && charmanderHP5 <= 40) {

                charmanderHPDamage = charmanderHP5;
                document.querySelector(".player1HP").style.width = charmanderHPDamage +   "%";
                player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

              }else if (p1.blastoiseSelected === true && comp.scytherSelected === true && blastoiseHP2 <= 40) {

                blastoiseHPDamage = blastoiseHP2;
                document.querySelector(".player1HP").style.width = blastoiseHPDamage +   "%";
                player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";



              }//end of if statement #1 2 of 2







                //change speedbar progressbar here:
                if(p1.pikachuSelected === true && comp.scytherSelected === true && pikachuSpeedBar2 <= 50) {

                  //confirm that pikachu speedbar is only decreased here:
                  restore.pikachuSpeedDecreased = true;

                  document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  console.log("pikachu speedbar array is "+ pikachuSpeedBar2);


                }else if (p1.charmanderSelected === true && comp.scytherSelected === true && charmanderSpeedBar <= 50) {

                  //confirm that charmander speedbar is only decreased here:
                  restore.charmanderSpeedDecreased = true;

                  document.querySelector(".playerSpeed").style.width = charmanderSpeedBar  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  console.log("charmander speedbar array is "+ charmanderSpeedBar);

                }else if (p1.blastoiseSelected === true && comp.scytherSelected === true && blastoiseSpeedBar2 <= 50) {

                  //confirm that blastoise speedbar is only decreased here:
                  restore.blastoiseSpeedDecreased = true;

                  document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  console.log("blastoise speedbar array is "+ blastoiseSpeedBar2);


                }//end of if statement #2




              if(p1.pikachuSelected === true && comp.scytherSelected === true && pikachuSpeedBar2 <= 0 || pikachuSpeedBar2 < 0) {

                document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              }else if (p1.charmanderSelected === true && comp.scytherSelected === true && charmanderSpeedBar <= 0 || charmanderSpeedBar < 0) {

                document.querySelector(".playerSpeed").style.width = charmanderSpeedBar  +   "%";
                document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              }else if (p1.blastoiseSelected === true && comp.scytherSelected === true && blastoiseSpeedBar2 <= 0 || blastoiseSpeedBar2 < 0) {

                document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              }//end of if statement #3



              if(p1.pikachuSelected === true && comp.scytherSelected === true && pikachuSpeedBar2 === 0 && restore.pikachuSpeedDecreased === true || pikachuSpeedBar2 < 0 && restore.pikachuSpeedDecreased === true) {

                //confirm that pikachu rested and speedbar is at zero only here:
                restore.restedPikachu = true;

                hpRecovered6 = 1; //setting this to 1 HP to indicate low speedbar

                document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
                document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                //play invalid sound here:
                player1SD.invalidAction.play();


                //remove event listener to prevent user from using the rest function
                document.getElementById("defenseC").style.color = "#C91212";
                document.getElementById("defenseC").removeEventListener("click", defenseC);
                player1SD.pokemonRest_sound3.pause();


                setTimeout(function() {

                  //inform player1 that they can no longer use rest function
                  document.getElementById("statusProgress2").innerHTML = "Pikachu can no longer rest because speed is too low!";

                }, 1000);// message is displayed after 1 sec.



                //debugging here -- delete when neccessary
                //turn of rest function for pikachu when speed progress bar is zero
                console.log("restedPikachu status: " + restore.restedPikachu);
                console.log("Pikachu rest function was disabled without making function6of6 false.");

              }else if (p1.charmanderSelected === true && comp.scytherSelected === true && charmanderSpeedBar  === 0 && restore.charamanderSpeedDecreased === true || charmanderSpeedBar < 0 && restore.charamanderSpeedDecreased === true) {

                //confirm that charmander rested and speedbar is at zero only here:
                restore.restedCharmander = true;

                hpRecovered6 = 1; //setting this to 1 HP to indicate low speedbar

                document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
                document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                //play invalid sound here:
                player1SD.invalidAction.play();


                //remove event listener to prevent user from using the rest function
                document.getElementById("defenseC").style.color = "#C91212";
                document.getElementById("defenseC").removeEventListener("click", defenseC);
                player1SD.pokemonRest_sound3.pause();


                setTimeout(function() {

                  //inform player1 that they can no longer use rest function
                  document.getElementById("statusProgress2").innerHTML = "Charmander can no longer rest because speed is too low!";

                }, 1000);// message is displayed after 1 sec.



                //debugging here -- delete when neccessary
                //turn of rest function for charmander when speed progress bar is zero
                console.log("restedCharmander status(2): " + restore.restedCharmander);
                console.log("Charmander rest function was disabled without making function6of6 false.(2)");

              }else if (p1.blastoiseSelected === true && comp.scytherSelected === true && blastoiseSpeedBar2  === 0 && restore.blastoiseSpeedDecreased === true || blastoiseSpeedBar2 < 0 && restore.blastoiseSpeedDecreased === true) {

                //confirm that blastoise rested and speedbar is at zero only here:
                restore.restedBlastoise = true;

                hpRecovered6 = 1; //setting this to 1 HP to indicate low speedbar

                document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
                document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                //play invalid sound here:
                player1SD.invalidAction.play();


                //remove event listener to prevent user from using the rest function
                document.getElementById("defenseC").style.color = "#C91212";
                document.getElementById("defenseC").removeEventListener("click", defenseC);
                player1SD.pokemonRest_sound3.pause();


                setTimeout(function() {

                  //inform player1 that they can no longer use rest function
                  document.getElementById("statusProgress2").innerHTML = "Blastoise can no longer rest because speed is too low!";

                }, 1000);// message is displayed after 1 sec.



                //debugging here -- delete when neccessary
                //turn of rest function for blastoise when speed progress bar is zero
                console.log("restedBlastoise status(3): " + restore.restedBlastoise);
                console.log("Blastoise rest function was disabled without making function6of6 false.(3)");



              }//end of if statement #4







              break;


              default:

              console.log("decreasePlayerHP2 default function was called. Look at the switch cases. (2)");


      }// end of switch statement

            }// end of if statement

          } // end of decreasePlayerHP2 function









          this.decreasePlayerHP3 = function () {

            // variable declartions

            let pikachuHPDamage3 = 0;
            let charmanderHPDamage3 = 0;
            let blastoiseHPDamage3 = 0;
            let hpRecovered8 = 0;
            let pikachuHP2 = a3.pikachuHealthBar.reduce(array1.PokemonHPReduced);
            let pikachuSpeedBar2 = a9.pikSpeedProgressBar.reduce(array1.PokemonHPReduced);
            let charmanderHP5 = a1.charmanderHealthBar.reduce(array1.PokemonHPReduced);
            let charmanderSpeedBar =  a7.chaSpeedProgressBar.reduce(array1.PokemonHPReduced);
            let blastoiseHP2 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
            let blastoiseSpeedBar2 = a11.blaSpeedProgressBar.reduce(array1.PokemonHPReduced);
            let player1LowHealthIndicator = document.querySelector('.player1HP');




            if(blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction1of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction2of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction3of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction4of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction5of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && player1.blastoiseMoves[0].blastoiseFunction6of6 === true ||

               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction2of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction3of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction4of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction5of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && player1.charmanderMoves[0].charmanderFunction6of6 === true ||

               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction1of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction2of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction3of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction4of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction5of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && player1.pikachuMoves[0].pikachuFunction6of6 === true ) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(pikachuHP2 < 0 || pikachuHP2 >= 0  || charmanderHP5 < 0 || charmanderHP5 >= 0 || blastoiseHP2 < 0 || blastoiseHP2 >= 0) {

                case (pikachuHP2 < 0 || charmanderHP5 < 0 || blastoiseHP2 < 0):



                if(p1.pikachuSelected === true && comp.onixSelected === true) {

                  pikachuHPDamage3 = 0;
                  document.querySelector(".player1HP").style.width = pikachuHPDamage3 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                  comp.informWinner();

                }else if (p1.charmanderSelected === true && comp.onixSelected === true) {

                  charmanderHPDamage3 = 0;
                  document.querySelector(".player1HP").style.width = charmanderHPDamage3 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                  comp.informWinner();

                }else if (p1.blastoiseSelected === true && comp.onixSelected === true) {

                  blastoiseHPDamage3 = 0;
                  document.querySelector(".player1HP").style.width = blastoiseHPDamage3 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                  comp.informWinner();

                }//end of if statements





                break;


                case (pikachuHP2 === 0 || charmanderHP5 === 0 || blastoiseHP2 === 0):

                if(p1.pikachuSelected === true && comp.onixSelected === true) {

                  pikachuHPDamage3 = pikachuHP2;
                  document.querySelector(".player1HP").style.width = pikachuHPDamage3 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                  player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                  comp.informWinner();


                }else if (p1.charmanderSelected === true && comp.onixSelected === true) {

                  charmanderHPDamage3 = charmanderHP5;
                  document.querySelector(".player1HP").style.width = charmanderHPDamage3 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                  player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                  comp.informWinner();


                }else if (p1.blastoiseSelected === true && comp.onixSelected === true) {

                  blastoiseHPDamage3 = blastoiseHP2;
                  document.querySelector(".player1HP").style.width = blastoiseHPDamage3 +   "%";

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                  player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                  comp.informWinner();

                }//end of if statements



                break;

                case (pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100):


                //change color of HP progress bar here:
                if(p1.pikachuSelected === true && comp.onixSelected === true && pikachuHP2 > 40) {

                  pikachuHPDamage3 = pikachuHP2;
                  document.querySelector(".player1HP").style.width = pikachuHPDamage3 +   "%";
                  player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                }else if (p1.charmanderSelected === true && comp.onixSelected === true && charmanderHP5 > 40) {

                  charmanderHPDamage3 = charmanderHP5;
                  document.querySelector(".player1HP").style.width = charmanderHPDamage3 +   "%";
                  player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


                }else if (p1.blastoiseSelected === true && comp.onixSelected === true) {

                  blastoiseHPDamage3 = blastoiseHP2;
                  document.querySelector(".player1HP").style.width = blastoiseHPDamage3 +   "%";
                  player1LowHealthIndicator.style.backgroundColor = "#A6EDED";//blue

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";


                }//end of if statement #1 1 of 2


                if(p1.pikachuSelected === true && comp.onixSelected === true && pikachuHP2 <= 40 ) {

                  pikachuHPDamage3 = pikachuHP2;
                  document.querySelector(".player1HP").style.width = pikachuHPDamage3 +   "%";
                  player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (pikachuSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                }else if (p1.charmanderSelected === true && comp.onixSelected === true && charmanderHP5 <= 40) {

                  charmanderHPDamage3 = charmanderHP5;
                  document.querySelector(".player1HP").style.width = charmanderHPDamage3 +   "%";
                  player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (charmanderSpeedBar <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";

                }else if (p1.blastoiseSelected === true && comp.onixSelected === true && blastoiseHP2 <= 40) {

                  blastoiseHPDamage3 = blastoiseHP2;
                  document.querySelector(".player1HP").style.width = blastoiseHPDamage3 +   "%";
                  player1LowHealthIndicator.style.backgroundColor = "#FD0202";//red

                  //conditional ternary that determines the color of the speedbar (red or blue) based off health bar conditions
                  (blastoiseSpeedBar2 <= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202" : document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED";



                }//end of if statement #1 2 of 2







                  //change speedbar progressbar here:
                  if(p1.pikachuSelected === true && comp.onixSelected === true && pikachuSpeedBar2 <= 50) {

                    //confirm that pikachu speedbar is only decreased here:
                    restore.pikachuSpeedDecreased = true;

                    document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                    document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                    console.log("pikachu speedbar array is "+ pikachuSpeedBar2);


                  }else if (p1.charmanderSelected === true && comp.onixSelected === true && charmanderSpeedBar <= 50) {

                    //confirm that charmander speedbar is only decreased here:
                    restore.charmanderSpeedDecreased = true;

                    document.querySelector(".playerSpeed").style.width = charmanderSpeedBar  +   "%";
                    document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                    console.log("charmander speedbar array is "+ charmanderSpeedBar);

                  }else if (p1.blastoiseSelected === true && comp.onixSelected === true && blastoiseSpeedBar2 <= 50) {

                    //confirm that blastoise speedbar is only decreased here:
                    restore.blastoiseSpeedDecreased = true;

                    document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                    document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                    console.log("blastoise speedbar array is "+ blastoiseSpeedBar2);


                  }//end of if statement #2




                if(p1.pikachuSelected === true && comp.onixSelected === true && pikachuSpeedBar2 <= 0 || pikachuSpeedBar2 < 0) {

                  document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                }else if (p1.charmanderSelected === true && comp.onixSelected === true && charmanderSpeedBar <= 0 || charmanderSpeedBar < 0) {

                  document.querySelector(".playerSpeed").style.width = charmanderSpeedBar  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                }else if (p1.blastoiseSelected === true && comp.onixSelected === true && blastoiseSpeedBar2 <= 0 || blastoiseSpeedBar2 < 0) {

                  document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                }//end of if statement #3



                if(p1.pikachuSelected === true && comp.onixSelected === true && pikachuSpeedBar2 === 0 && restore.pikachuSpeedDecreased === true || pikachuSpeedBar2 < 0 && restore.pikachuSpeedDecreased === true) {

                  //confirm that pikachu rested and speedbar is at zero only here:
                  restore.restedPikachu = true;

                  hpRecovered8 = 1; //setting this to 1 HP to indicate low speedbar

                  document.querySelector(".playerSpeed").style.width = hpRecovered8  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  //play invalid sound here:
                  player1SD.invalidAction.play();


                  //remove event listener to prevent user from using the rest function
                  document.getElementById("defenseC").style.color = "#C91212";
                  document.getElementById("defenseC").removeEventListener("click", defenseC);
                  player1SD.pokemonRest_sound3.pause();


                  setTimeout(function() {

                    //inform player1 that they can no longer use rest function
                    document.getElementById("statusProgress2").innerHTML = "Pikachu can no longer rest because speed is too low!";

                  }, 1000);// message is displayed after 1 sec.



                  //debugging here -- delete when neccessary
                  //turn of rest function for pikachu when speed progress bar is zero
                  console.log("restedPikachu status: " + restore.restedPikachu);
                  console.log("Pikachu rest function was disabled without making function6of6 false.");

                }else if (p1.charmanderSelected === true && comp.onixSelected === true && charmanderSpeedBar  === 0 && restore.charamanderSpeedDecreased === true || charmanderSpeedBar < 0 && restore.charamanderSpeedDecreased === true) {

                  //confirm that charmander rested and speedbar is at zero only here:
                  restore.restedCharmander = true;

                  hpRecovered8 = 1; //setting this to 1 HP to indicate low speedbar

                  document.querySelector(".playerSpeed").style.width = hpRecovered8  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  //play invalid sound here:
                  player1SD.invalidAction.play();


                  //remove event listener to prevent user from using the rest function
                  document.getElementById("defenseC").style.color = "#C91212";
                  document.getElementById("defenseC").removeEventListener("click", defenseC);
                  player1SD.pokemonRest_sound3.pause();


                  setTimeout(function() {

                    //inform player1 that they can no longer use rest function
                    document.getElementById("statusProgress2").innerHTML = "Charmander can no longer rest because speed is too low!";

                  }, 1000);// message is displayed after 1 sec.



                  //debugging here -- delete when neccessary
                  //turn of rest function for charmander when speed progress bar is zero
                  console.log("restedCharmander status(2): " + restore.restedCharmander);
                  console.log("Charmander rest function was disabled without making function6of6 false.(2)");

                }else if (p1.blastoiseSelected === true && comp.onixSelected === true && blastoiseSpeedBar2  === 0 && restore.blastoiseSpeedDecreased === true || blastoiseSpeedBar2 < 0 && restore.blastoiseSpeedDecreased === true) {

                  //confirm that blastoise rested and speedbar is at zero only here:
                  restore.restedBlastoise = true;

                  hpRecovered8 = 1; //setting this to 1 HP to indicate low speedbar

                  document.querySelector(".playerSpeed").style.width = hpRecovered8  +   "%";
                  document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  //play invalid sound here:
                  player1SD.invalidAction.play();


                  //remove event listener to prevent user from using the rest function
                  document.getElementById("defenseC").style.color = "#C91212";
                  document.getElementById("defenseC").removeEventListener("click", defenseC);
                  player1SD.pokemonRest_sound3.pause();


                  setTimeout(function() {

                    //inform player1 that they can no longer use rest function
                    document.getElementById("statusProgress2").innerHTML = "Blastoise can no longer rest because speed is too low!";

                  }, 1000);// message is displayed after 1 sec.



                  //debugging here -- delete when neccessary
                  //turn of rest function for blastoise when speed progress bar is zero
                  console.log("restedBlastoise status(3): " + restore.restedBlastoise);
                  console.log("Blastoise rest function was disabled without making function6of6 false.(3)");



                }//end of if statement #4







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
  let squirtleSpeedBar =  a8.squSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
  let scytherSpeedBar = a10.scySpeedProgressBar.reduce(array2.PokemonSpeedReduced);
  let onixSpeedBar = a12.onixSpeedProgressBar.reduce(array2.PokemonSpeedReduced);
  let computerLowHealthIndicator2 = document.querySelector('.cpuHP');


  if (computer.squirtleMovesActivated[0].squirtleFunction6of6 === true || computer.scytherMovesActivated[0].scytherFunction6of6 === true || computer.onixMovesActivated[0].onixFunction6of6 === true) {



    switch (squirtleSpeedBar <=50 ||  scytherSpeedBar <=50 ||  onixSpeedBar <=50 || squirtleSpeedBar <=0 || squirtleSpeedBar < 0 ||  scytherSpeedBar <=0 || scytherSpeedBar <= 0 ||  onixSpeedBar <=0 || onixSpeedBar <0 || squirtleHP5 <= 40 || squirtleHP5 > 40  || scytherHP8 <= 40 || scytherHP8 > 40  || onixHP12 <= 40 || onixHP12 > 40) {



    case (squirtleSpeedBar <=50 ||  scytherSpeedBar <=50 ||  onixSpeedBar <=50):



    if (comp.squirtleSelected === true && restore.squirtleSpeedDecreased === true && squirtleSpeedBar <=50) {

      //play rest sound effect for computer
      computerSD.pokemonRest_sound2.play();

      //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = squirtleSpeedBar;
      document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red


      console.log("squirtleSpeedDecreased: " + restore.squirtleSpeedDecreased);
      console.log("code was commented out *debugging*(4-1-1)");

      setTimeout(function() {



        if (comp.scytherSelected === false  && comp.onixSelected === false && squirtleSpeedBar <= 0 && restore.squirtleSpeedDecreased === false) {

          document.getElementById("statusProgress2").innerHTML = "";

        }else {

          //inform player1 of computer inablility to use the rest function
          document.getElementById("statusProgress2").innerHTML = "Squirtle's speed is getting low...";

        }



      }, 4000);





    }//end of if statement for squirtleSpeedDecreased

    if (comp.scytherSelected === true && restore.scytherSpeedDecreased === true && scytherSpeedBar <=50) {

      //play rest sound effect for computer
      computerSD.pokemonRest_sound4.play();

     //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = scytherSpeedBar;
      document.querySelector(".cpuSpeed").style.width = scytherSpeedBar +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red


      console.log("scytherSpeedDecreased: " + restore.scytherSpeedDecreased);


      setTimeout(function() {



        if (comp.squirtleSelected === false  && comp.onixSelected === false && scytherSpeedBar <= 0 && restore.syctherSpeedDecreased === false) {

          document.getElementById("statusProgress2").innerHTML = "";

        }else {

          //inform player1 of computer inablility to use the rest function
          document.getElementById("statusProgress2").innerHTML = "Scyther's speed is getting low...";

        }


      }, 4000);




    }//end of if statement for scytherSpeedDecreased

    if (comp.onixSelected === true && restore.onixSpeedDecreased === true && onixSpeedBar <=50) {

      //play rest sound effect for computer
      computerSD.pokemonRest_sound6.play();

      //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = onixSpeedBar;
      document.querySelector(".cpuSpeed").style.width = onixSpeedBar +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red


      console.log("onixSpeedDecreased: " + restore.onixSpeedDecreased);


      setTimeout(function() {



        if (comp.squirtleSelected === false  && comp.scytherSelected === false && onixSpeedBar <= 0 && restore.onixSpeedDecreased === false) {

          document.getElementById("statusProgress2").innerHTML = "";

        } else {

          //inform player1 of computer inablility to use the rest function
          document.getElementById("statusProgress2").innerHTML = "Onix's speed is getting low...";

        }



      }, 4000);




    }//end of if statement for onixSpeedDecreasedS



    case (squirtleSpeedBar <=0 || squirtleSpeedBar < 0 ||  scytherSpeedBar <=0 || scytherSpeedBar <= 0 ||  onixSpeedBar <=0 || onixSpeedBar <0):



    if (comp.squirtleSelected === true && restore.squirtleSpeedDecreased === true && squirtleSpeedBar <= 0 || comp.squirtleSelected === true && restore.squirtleSpeedDecreased === true && squirtleSpeedBar < 0) {

      //pause rest sound effect for computer
      computerSD.pokemonRest_sound2.pause();

      //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = 1;
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      //change squirtleSpeedDecreased to false
      restore.squirtleSpeedDecreased = false;

      console.log("squirtleSpeedDecreased: " + restore.squirtleSpeedDecreased);


    }//end of if statement for squirtleSpeedDecreased

    if (comp.scytherSelected === true && restore.scytherSpeedDecreased === true && scytherSpeedBar <= 0 || comp.scytherSelected === true && restore.scytherSpeedDecreased === true && scytherSpeedBar < 0) {

      //pause rest sound effect for computer
      computerSD.pokemonRest_sound4.pause();

     //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = 1;
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      //change scytherSpeedDecreased to false
      restore.scytherSpeedDecreased = false;

      console.log("scytherSpeedDecreased: " + restore.scytherSpeedDecreased);


    }//end of if statement for scytherSpeedDecreased

    if (comp.onixSelected === true && restore.onixSpeedDecreased === true && onixSpeedBar <= 0 || comp.onixSelected === true && restore.onixSpeedDecreased === true && onixSpeedBar < 0) {

      //pause rest sound effect for computer
      computerSD.pokemonRest_sound6.pause();

      //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = 1;
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red


      //change onixSpeedDecreased to false
      restore.onixSpeedDecreased = false;

      console.log("onixSpeedDecreased: " + restore.onixSpeedDecreased);



    }//end of if statement for onixSpeedDecreasedS




    case (squirtleHP5 <= 40 || scytherHP8 <= 40 || onixHP12 <= 40):

    if (comp.squirtleSelected === true && squirtleHP5 <= 40) {

      //enable health restoration if computer pokemon health is <= 40

      hpRestore2 = squirtleHP5;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";

      speedReduced2 = squirtleSpeedBar;
      document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar+   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      restore.restedSquirtle = true;
      a8.squirtleHpRecovered.push(10);

      console.log("restedSquirtle hp when < 40: " + restore.restedSquirtle);
      console.log("squirtleHpRecovered: " + a8.squirtleHpRecovered);
      console.log("squirtleSpeedbar: "+ squirtleSpeedBar);


    }//end of if statement for when squirtle hp < 40

    if (comp.scytherSelected === true  && scytherHP8 <= 40) {

      //enable health restoration if computer pokemon health is <= 40

      hpRestore2 = scytherHP8;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";

      speedReduced2 = scytherSpeedBar;
      document.querySelector(".cpuSpeed").style.width = scytherSpeedBar +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      restore.restedScyther = true;
      a10.scytherHpRecovered.push(10);


      console.log("restedScyther hp when < 40: " + restore.restedScyther);
      console.log("scytherHpRecovered: " + a10.scytherHpRecovered);
      console.log("scytherSpeedbar: " + scytherSpeedBar);



    }//end of if statement for when scyther hp < 40

    if (comp.onixSelected === true && onixHP12 <= 40) {


      //enable health restoration if computer pokemon health is <= 40

      hpRestore2 = onixHP12;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";

      speedReduced2 = onixSpeedBar;
      document.querySelector(".cpuSpeed").style.width = onixSpeedBar +   "%";
      computerLowHealthIndicator2.style.backgroundColor = "#FD0202";//red

      restore.restedOnix = true;
      a6.onixHpRecovered.push(10);


      console.log("restedOnix hp when < 40: " + restore.restedOnix);
      console.log("onixHpRecovered: " +   a6.onixHpRecovered);
      console.log("onixSpeedBar: " + onixSpeedBar);




    }//end of if statement for when onix hp is < 40



    break;

    case (squirtleHP5 > 40 || scytherHP8 > 40 || onixHP12 > 40):

    if (comp.squirtleSelected === true && squirtleHP5 > 40) {

      //prevent health restoration if computer pokemon health is > 40
      restore.restedSquirtle = false;

      //laughandpoint image loads here
      player1Img.player1TauntImage();

      //computer laughs at player when attempting to use health restoration when health is > 40
      computerSD.cartoonLaugh_sound.play();


      console.log("restedSquirtle hp: when > 40 is " + restore.restedSquirtle);
      console.log("code was commented out *debugging*(1-1-1)");


    }//end of if statement for when squirtle hp > 40


    if (comp.scytherSelected === true && scytherHP8 > 40) {


      //prevent health restoration if computer pokemon health is > 40
      restore.restedScyther = false;

      //laughandpoint image loads here
      player1Img.player1TauntImage();

      //computer laughs at player when attempting to use health restoration when health is > 40
      computerSD.cartoonLaugh_sound.play();


      console.log("restedScyther hp: when > 40 is " + restore.restedScyther);
      console.log("code was commented out *debugging*(1-1-2)");


    }//end of if statement for when scyther hp is > 40


    if (comp.onixSelected === true && onixHP12 > 40) {


      //prevent health restoration if computer pokemon health is > 40
      restore.restedOnix = false;

      //laughandpoint image loads here
      player1Img.player1TauntImage();

      //computer laughs at player when attempting to use health restoration when health is > 40
      computerSD.cartoonLaugh_sound.play();


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


          if(p1.charmanderSelected === true && comp.squirtleSelected === true) {


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


          }else if (p1.charmanderSelected === true && comp.scytherSelected === true) {


            //confirm attack move for pokemon was clicked
            player1.charmanderMoves[0].charmanderFunction1of6 = true;

            computer.scytherMovesActivated[0].scytherFunction1of6 = true;

            //debugging here -- delete when neccessary
            console.log("charmanderFunction1of6 (2) is: " + player1.charmanderMoves[0].charmanderFunction1of6);

            //reflect the changes to scytherHealthBar AND scytherBackup array as well.
            //fireBlaster does -20 damage on scyther
            a4.scytherHealthBar.push(-20);
            a4.scytherBackup.push(-20);

            //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
            charmanderProgressBar.decreaseComputerHP3();

            //debugging here -----------------------------------
            console.log("scytherHealthBar array (2) is " + a4.scytherHealthBar);
            console.log("scytherBackup array (2) is " + a4.scytherBackup);

             // show image
             player1Img.chrAtkImage1();

             //change boolean state so that computer can attack
             confirm.makeMove[0].player1Move = false;
             confirm.makeMove[0].computerMove = true;

             console.log(confirm.makeMove[0]);

          }else if (p1.charmanderSelected === true && comp.onixSelected === true) {

            //debugging -- delete when neccessary
            console.log("charmarnder attacking onix confirmed");

            //confirm attack move for pokemon was clicked
            player1.charmanderMoves[0].charmanderFunction1of6 = true;

            computer.onixMovesActivated[0].onixFunction1of6 = true;

            //debugging here -- delete when neccessary
            console.log("charmanderFunction1of6 (3) is: " + player1.charmanderMoves[0].charmanderFunction1of6);

            //reflect the changes to onixHealthBar AND onixBackup array as well.
            //fireBlaster does -20 damage on scyther
            a6.onixHealthBar.push(-5);
            a6.onixBackup.push(-5);

            //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
            charmanderProgressBar.decreaseComputerHP2();

            //debugging here -----------------------------------
            console.log("onixHealthBar array (3) is " + a6.onixHealthBar);
            console.log("onixBackup array (3) is " + a6.onixBackup);

            // show image
            player1Img.chrAtkImage1();

            //change boolean state so that computer can attack
            confirm.makeMove[0].player1Move = false;
            confirm.makeMove[0].computerMove = true;

            console.log(confirm.makeMove[0]);

          }//end of statements


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
       let squirtleSpeedBar =  a8.squSpeedProgressBar.reduce(array2.PokemonSpeedReduced);

       //confirm attack move for pokemon was clicked
       player1.charmanderMoves[0].charmanderFunction6of6 = true;

       computer.squirtleMovesActivated[0].squirtleFunction6of6 = true;

       //debugging here -- delete when neccessary
      console.log("squirtleMoves Function6of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction6of6);

      //rest recovers 10 HP to squirtle if conditions are true

      if (squirtleHP5 <= 40) {

        //show recovery image for computer pokemon
        computerImg.squAtkImage6();

        //reflect the changes to squirtleHealthBar
        a2.squirtleHealthBar.push(10);

        //backup array for health restoration needs to be updated
        a2.squirtleHpRecovered.push(10);

        //reflect the changes to squirtle speedbar
        a8.squSpeedProgressBar.push(-50);

        //squirtle speedbar is true only here:
        restore.squirtleSpeedDecreased = true;


      }else if (squirtleHP5 > 40) {

        //if health is > 40 then this implies that squirtle didn't restore health
        restore.restedSquirtle = false;

        //debugging
        console.log("restedSquirtle status when hp > 40: " + restore.restedSquirtle);

        //make no changes to squirtleHealthBar
        a2.squirtleHealthBar.push(0);

        //make no changes to squirtleHpRecovered
        a2.squirtleHpRecovered.push(0);

        //make no the changes to squirtle speedbar as well
        a8.squSpeedProgressBar.push(0);


      }//end of if statements


      //This is the function that applies the reduce method to the arrays listed above. Computer gives hp to charmander if certain conditions are true.
      squirtleProgressBar.increaseComputerHP();



      if (restore.squirtleSpeedDecreased === true) {

        setTimeout(function() {

           document.getElementById("statusProgress").innerHTML = computer.pokemonName[4]+ " is "+" resting!";


        }, 3000);

      }//end of if statement

      //conditional ternary does the following:

      //inform player1 of computer inablility to use the rest function
      (comp.scytherSelected === false  && comp.onixSelected === false && squirtleSpeedBar <= 0 && restore.squirtleSpeedDecreased === false) ? document.getElementById("statusProgress").innerHTML = "Squirtle's speed is too low to rest..." : document.getElementById("statusProgress").innerHTML = "";



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
          player1Img.pikAtkImage2();

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
          player1Img.pikAtkImage3();

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
          player1Img.pikAtkImage4();

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
         console.log("scytherBackup array is " + a4.scytherBackup);

         // show image
          player1Img.pikAtkImage5();

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
        let scytherSpeedBar = a10.scySpeedProgressBar.reduce(array2.PokemonSpeedReduced);

       //confirm attack move for pokemon was clicked
       player1.pikachuMoves[0].pikachuFunction6of6 = true;

       computer.scytherMovesActivated[0].scytherFunction6of6 = true;

       //debugging here -- delete when neccessary
       console.log("scytherMoves Function6of6 is : " + computer.scytherMovesActivated[0].scytherFunction6of6);


       //rest recovers 10 HP to scyther if conditions are true

       if (scytherHP14 <= 40) {

         //show recovery image for computer pokemon
         computerImg.scyAtkImage6();

         //reflect the changes to scytherHealthBar
         a4.scytherHealthBar.push(10);

         //backup array for health restoration needs to be updated
         a4.scytherHpRecovered.push(10);

         //reflect the changes to scySpeedProgressBar
         a10.scySpeedProgressBar.push(-50);

         //scyther speedbar is true only here:
         restore.scytherSpeedDecreased = true;

       }else if (scytherHP14 > 40) {

         //if health is > 40 then this implies that scyther didn't restore health
         restore.restedScyther = false;

         //debugging
         console.log("restedScyther status when hp > 40: " + restore.restedScyther);

         //make no changes to scytherHealthBar
         a4.scytherHealthBar.push(0);

         //make no changes to scytherHpRecovered
         a4.scytherHpRecovered.push(0);

         //make no the changes to scySpeedProgressBar
         a10.scySpeedProgressBar.push(0);


       }//end of if statements


       //This is the function that applies the reduce method to the arrays listed above. Computer gives hp to pikachu if certain conditions are true.
       scytherProgressBar.increaseComputerHP();


       if (restore.syctherSpeedDecreased === true) {

         setTimeout(function() {

            document.getElementById("statusProgress").innerHTML = computer.pokemonName[1]+ " is "+" resting!";


         }, 3000);

       }//end of if statement

       //conditional ternary does the following:

       //inform player1 of computer inablility to use the rest function
       (comp.squirtleSelected === false  && comp.onixSelected === false && scytherSpeedBar <= 0 && restore.syctherSpeedDecreased === false) ? document.getElementById("statusProgress").innerHTML = "Scyther's speed is too low to rest..." : document.getElementById("statusProgress").innerHTML = "";


       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       array1.checkTheStatus();


       //debugging--------------------------------------

      console.log("scytherHealthBar array is "+ a4.scytherHealthBar);
      console.log("scytherHP_recovered array is " + a4.scytherHpRecovered);


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
             player1Img.blaAtkImage1();

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
          player1Img.blaAtkImage2();

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
          player1Img.blaAtkImage3();

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
          player1Img.blaAtkImage4();

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
          player1Img.blaAtkImage5();

          //change boolean state so that computer can attack
          confirm.makeMove[0].player1Move = false;
          confirm.makeMove[0].computerMove = true;

          console.log(confirm.makeMove[0]);


       } // end of if statement


     } //end of headButt2Move



     this.rest3 = function() {

       console.log("The rest function started on this line:(3) ");

       let onixHP11 = a6.onixHealthBar.reduce(array2.PokemonHPReduced);
       let onixSpeedBar = a12.onixSpeedProgressBar.reduce(array2.PokemonSpeedReduced);

       //confirm attack move for pokemon was clicked
       player1.blastoiseMoves[0].blastoiseFunction6of6 = true;

       computer.onixMovesActivated[0].onixFunction6of6 = true;

       //debugging here -- delete when neccessary
       console.log("onixMoves Function6of6 is : " + computer.onixMovesActivated[0].onixFunction6of6);

       //rest recovers 10 HP to onix if conditions are true

       if (onixHP11 <= 40) {

         //show recovery image for computer pokemon
         computerImg.oniAtkImage6();

         //reflect the changes to onixHealthBar
         a6.onixHealthBar.push(10);

         //backup array for health restoration needs to be updated
         a6.onixHpRecovered.push(10);

         //reflect the changes to onixSpeedProgressBar
         a12.onixSpeedProgressBar.push(-50);

         //onix speedbar is true only here:
         restore.onixSpeedDecreased = true;

       }else if (onixHP11 > 40) {

         //if health is > 40 then this implies that onix didn't restore health
         restore.restedOnix = false;

         //debugging
         console.log("restedOnix status when hp > 40: " + restore.restedOnix);

         //make no changes to onixHealthBar
         a6.onixHealthBar.push(0);

         //make no changes to onixHpRecovered
         a6.onixHpRecovered.push(0);

         //make no the changes to onixSpeedProgressBar
         a12.onixSpeedProgressBar.push(0);


       }//end of if statements


       //This is the function that applies the reduce method to the arrays listed above. Computer gives HP to blastoise if conditions are true
       onixProgressBar.increaseComputerHP();

       if (restore.onixSpeedDecreased === true) {

         setTimeout(function() {

            document.getElementById("statusProgress").innerHTML = computer.pokemonName[3]+ " is "+" resting!";


         }, 3000);

       }//end of if statement

       //conditional ternary does the following:

       //inform player1 of computer inablility to use the rest function
       (comp.squirtleSelected === false  && comp.scytherSelected === false && onixSpeedBar <= 0 && restore.onixSpeedDecreased === false) ? document.getElementById("statusProgress").innerHTML = "Onix's speed is too low to rest..." : document.getElementById("statusProgress").innerHTML = "";


       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       array1.checkTheStatus();


       //debugging--------------------------------------

       console.log("onixHealthBar array is "+ a6.onixHealthBar);
       console.log("onixHpRecovered array is " + a6.onixHpRecovered);



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
              computer.squirtleMovesActivated[0].squirtleFunction6of6 === true && player1.charmanderMoves[0].charmanderFunction6of6 === true ||

              computer.squirtleMovesActivated[0].squirtleFunction1of6 === true  && player1.pikachuMoves[0].pikachuFunction1of6 === true  ||
              computer.squirtleMovesActivated[0].squirtleFunction2of6 === true  && player1.pikachuMoves[0].pikachuFunction2of6 === true  ||
              computer.squirtleMovesActivated[0].squirtleFunction3of6 === true  && player1.pikachuMoves[0].pikachuFunction3of6 === true  ||
              computer.squirtleMovesActivated[0].squirtleFunction4of6 === true  && player1.pikachuMoves[0].pikachuFunction4of6 === true  ||
              computer.squirtleMovesActivated[0].squirtleFunction5of6 === true  && player1.pikachuMoves[0].pikachuFunction5of6 === true  ||
              computer.squirtleMovesActivated[0].squirtleFunction6of6 === true  && player1.pikachuMoves[0].pikachuFunction6of6 === true  ||

              computer.squirtleMovesActivated[0].squirtleFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction2of6 === true && player1.blastoiseMoves[0].blastoiseFunction2of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction3of6 === true && player1.blastoiseMoves[0].blastoiseFunction3of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction4of6 === true && player1.blastoiseMoves[0].blastoiseFunction4of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction5of6 === true && player1.blastoiseMoves[0].blastoiseFunction5of6 === true ||
              computer.squirtleMovesActivated[0].squirtleFunction6of6 === true && player1.blastoiseMoves[0].blastoiseFunction6of6 === true) {

  case (computer.squirtleMovesActivated[0].squirtleFunction1of6 === true && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
        computer.squirtleMovesActivated[0].squirtleFunction1of6 === true && player1.pikachuMoves[0].pikachuFunction1of6 === true   ||
        computer.squirtleMovesActivated[0].squirtleFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true):

    //squirtle attack move: Bubble Beam
   //this statement selects the computer pokemon to battle with player1 pokemon (charmander, pikachu, or blastoise)
   if(comp.squirtleSelected === true && p1.charmanderSelected === true) {


     //debugging here -- delete when neccessary
     console.log("squirtleMoves Function1of6 is : " + computer.squirtleMovesActivated[0].squirtleFunction1of6);

     //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
     a1.charmanderHealthBar.push(-20);
     a1.charmanderBackup.push(-20);

     charmanderProgressBar.decreasePlayerHP();

     //show attack image
     computerImg.squAtkImage1();
     computerSD.squirtleBubble_sound.play();

     //debugging
     console.log("CharmanderHealthBar array is " + a1.charmanderHealthBar);
     console.log("charmanderBackup array is " + a1.charmanderBackup);


   }else if (comp.squirtleSelected === true && p1.pikachuSelected === true) {

     //debugging here -- delete when neccessary
     console.log("squirtleMoves Function1of6 is (2) : " + computer.squirtleMovesActivated[0].squirtleFunction1of6);

     //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
     a3.pikachuHealthBar.push(-5);
     a3.pikachuBackup.push(-5);

     pikachuProgressBar.decreasePlayerHP();

     //show attack image
     computerImg.squAtkImage1();
     computerSD.squirtleBubble_sound.play();

     //debugging
     console.log("pikachuHealthBar array is (2) "+ a3.pikachuHealthBar);
     console.log("pikachuBackup array is (2) " + a3.pikachuBackup);

   }else if (comp.squirtleSelected === true && p1.blastoiseSelected === true) {

     //debugging here -- delete when neccessary
     console.log("squirtleMoves Function1of6 is (3) : " + computer.squirtleMovesActivated[0].squirtleFunction1of6);

     //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
     a5.blastoiseHealthBar.push(-5);
     a5.blastoiseBackup.push(-5);

     blastoiseProgressBar.decreasePlayerHP();

     //show attack image
     computerImg.squAtkImage1();
     computerSD.squirtleBubble_sound.play();

     //debugging
     console.log("blastoiseHealthBar array is (3) "+ a5.blastoiseHealthBar);
     console.log("blastoiseBackup array is (3) " + a5.blastoiseBackup);

   }//end of multiple if statements


   //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
   array1.checkTheStatus();




   if (comp.squirtleSelected === true && p1.charmanderSelected === true && player1.charmanderMoves[0].charmanderFunction1of6 === true) {

     //inform player1 attack from squirtle -- default setting
     document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Bubble Beam!";

     //disable attack move for squirtle pokemon and pikachu
     computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;
     player1.pikachuMoves[0].pikachuFunction1of6 = false;

   }else if (comp.squirtleSelected === true && p1.pikachuSelected === true && player1.pikachuMoves[0].pikachuFunction1of6 === true) {

     //inform player1 attack from squirtle
     document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[5]+" with Bubble Beam!";

     //disable attack move for squirtle pokemon and pikachu
     computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;
     player1.pikachuMoves[0].pikachuFunction1of6 = false;



   }else if (comp.squirtleSelected === true && p1.blastoiseSelected === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true) {

     //inform player1 attack from squirtle
     document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[2]+" with Bubble Beam!";

     //disable attack move for squirtle pokemon and blastoise
     computer.squirtleMovesActivated[0].squirtleFunction1of6 = false;
     player1.blastoiseMoves[0].blastoiseFunction1of6 = false;

   }//end of multiple if statements


   //Change boolean state so that player1 can make a move
   confirm.makeMove[0].computerMove = false;
   console.log(confirm.makeMove[0]);
   confirm.enableMoves();
   console.log(confirm.makeMove[0]);







    break;




  case (computer.squirtleMovesActivated[0].squirtleFunction2of6 === true && player1.charmanderMoves[0].charmanderFunction2of6 === true ||
        computer.squirtleMovesActivated[0].squirtleFunction2of6 === true && player1.pikachuMoves[0].pikachuFunction2of6 === true ||
        computer.squirtleMovesActivated[0].squirtleFunction2of6 === true && player1.blastoiseMoves[0].blastoiseFunction2of6 === true):

  //squirtle attack move: Tail Whip


  if(comp.squirtleSelected === true && p1.charmanderSelected === true) {

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

    //show attack image
    computerImg.squAtkImage2();
    computerSD.squirtleTailWhip_sound.play();

    //debugging here------------------------------------------------------

    console.log("CharmanderHealthBar array is "+ a1.charmanderHealthBar);
    console.log("charmanderBackup array is " + a1.charmanderBackup);


  }else if (comp.squirtleSelected === true && p1.pikachuSelected === true) {

    //debugging here -- delete when neccessary
    console.log("squirtleMoves Function2of6 is (2) : " + computer.squirtleMovesActivated[0].squirtleFunction2of6);

    //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
    a3.pikachuHealthBar.push(-5);
    a3.pikachuBackup.push(-5);

    pikachuProgressBar.decreasePlayerHP();

    //show attack image
    computerImg.squAtkImage1();
    computerSD.squirtleBubble_sound.play();

    //debugging
    console.log("pikachuHealthBar array is (2) "+ a3.pikachuHealthBar);
    console.log("pikachuBackup array is (2) " + a3.pikachuBackup);

  }else if (comp.squirtleSelected === true && p1.blastoiseSelected === true) {

    //debugging here -- delete when neccessary
    console.log("squirtleMoves Function2of6 is (3) : " + computer.squirtleMovesActivated[0].squirtleFunction2of6);

    //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
    a5.blastoiseHealthBar.push(-5);
    a5.blastoiseBackup.push(-5);

    blastoiseProgressBar.decreasePlayerHP();

    //show attack image
    computerImg.squAtkImage1();
    computerSD.squirtleBubble_sound.play();

    //debugging
    console.log("blastoiseHealthBar array is (3) "+ a5.blastoiseHealthBar);
    console.log("blastoiseBackup array is (3) " + a5.blastoiseBackup);

  }//end of multiple if statements





  if (comp.squirtleSelected === true && p1.charmanderSelected === true && player1.charmanderMoves[0].charmanderFunction2of6 === true) {

    //inform player1 attack from squirtle -- default setting
    document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[0]+" with Tail Whip!";

    //disable attack move for squirtle pokemon and charmander
    computer.squirtleMovesActivated[0].squirtleFunction2of6 = false;
    player1.charmanderMoves[0].charmanderFunction2of6 = false;


  }else if (comp.squirtleSelected === true && p1.pikachuSelected === true && player1.pikachuMoves[0].pikachuFunction2of6 === true) {

    //inform player1 attack from squirtle
    document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[5]+" with Tail Whip!";

    //disable attack move for squirtle pokemon and pikachu
    computer.squirtleMovesActivated[0].squirtleFunction2of6 = false;
    player1.pikachuMoves[0].pikachuFunction2of6 = false;


  }else if (comp.squirtleSelected === true && p1.blastoiseSelected === true && player1.blastoiseMoves[0].blastoiseFunction2of6 === true) {

    //inform player1 attack from squirtle
    document.getElementById("statusProgress2").innerHTML = computer.pokemonName[4]+ " attacked "+player1.pokemonName[2]+" with Tail Whip!";

    //disable attack move for squirtle pokemon and blastoise
    computer.squirtleMovesActivated[0].squirtleFunction2of6 = false;
    player1.blastoiseMoves[0].blastoiseFunction2of6 = false

  }//end of multiple if statements



  //Change boolean state so that player1 can make a move
  confirm.makeMove[0].computerMove = false;
  console.log(confirm.makeMove[0]);
  confirm.enableMoves();
  console.log(confirm.makeMove[0]);







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
  computerSD.squirtleWaterPulse_sound.play();



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
    computerSD.squirtleTackle_sound.play();



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
      computerSD.squirtleWaterGun_sound.play();



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
        let charmanderSpeedBar2 =  a7.chaSpeedProgressBar.reduce(array1.PokemonHPReduced);
        let hpRecovered2 = a7.charmanderHpRecovered.reduce(array1.PokemonRestoredReducer);

        //squirtle attack move: rest (restores health to charmander)
        //disable attack move for squirtle pokemon and charmander
        computer.squirtleMovesActivated[0].squirtleFunction6of6 = false;


        //charmander gets 45 HP if conditions are true

        if (charmanderHP5 <= 40) {



          //show recovery image for computer pokemon and play rest sound effect
          player1Img.chrAtkImage6();
          player1SD.pokemonRest_sound2.play();

          //reflect the changes to the charmanderHealthBar array
         a1.charmanderHealthBar.push(45);

         //backup array for health restoration needs to be updated as well
         a7.charmanderHpRecovered.push(45);

          //reflect speedbar progress to chaSpeedProgressBar array to create limit for health restoration
         a7.chaSpeedProgressBar.push(-50);



       }else if(charmanderHP5 > 40) {

          //turn off rest sound effect
          player1SD.pokemonRest_sound2.pause();

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

          console.log("charmanderHealthBar array is "+ charmanderHP5);
          console.log("charmanderHP_recovered array is " + hpRecovered2);



        //default setting
        if (p1.preserveHPChanges === false) {

          //remove previous comment
          document.getElementById("statusProgress2").innerHTML =  "";

        }else if (p1.preserveHPChanges === true) {

          setTimeout(function() {

            //inform player1 of attack from computer
            document.getElementById("statusProgress2").innerHTML =   "Squirtle used rest to recover!***";


          }, 2000);



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
           ||   computer.scytherMovesActivated[0].scytherFunction6of6 === true && player1.pikachuMoves[0].pikachuFunction6of6 === true

           ||   computer.scytherMovesActivated[0].scytherFunction1of6 === true && player1.charmanderMoves[0].charmanderFunction1of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction2of6 === true && player1.charmanderMoves[0].charmanderFunction2of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction3of6 === true && player1.charmanderMoves[0].charmanderFunction3of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction4of6 === true && player1.charmanderMoves[0].charmanderFunction4of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction5of6 === true && player1.charmanderMoves[0].charmanderFunction5of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction6of6 === true && player1.charmanderMoves[0].charmanderFunction6of6 === true

           ||   computer.scytherMovesActivated[0].scytherFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction2of6 === true && player1.blastoiseMoves[0].blastoiseFunction2of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction3of6 === true && player1.blastoiseMoves[0].blastoiseFunction3of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction4of6 === true && player1.blastoiseMoves[0].blastoiseFunction4of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction5of6 === true && player1.blastoiseMoves[0].blastoiseFunction5of6 === true
           ||   computer.scytherMovesActivated[0].scytherFunction6of6 === true && player1.blastoiseMoves[0].blastoiseFunction6of6 === true){

     case (computer.scytherMovesActivated[0].scytherFunction1of6 === true && player1.pikachuMoves[0].pikachuFunction1of6 === true ||
           computer.scytherMovesActivated[0].scytherFunction1of6 === true && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
           computer.scytherMovesActivated[0].scytherFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true):



      //scyther attack move: slash
      //this statement selects the computer pokemon to battle with player1 pokemon (pikachu, charmander, or blastoise)
      if(comp.scytherSelected === true  && p1.pikachuSelected === true) {


      //debugging here -- delete when neccessary
      console.log("scytherMoves Function1of6 is : " + computer.scytherMovesActivated[0].scytherFunction1of6);

      //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
      a3.pikachuHealthBar.push(-25);
      a3.pikachuBackup.push(-25);

      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      scytherProgressBar.decreasePlayerHP2();

      //show attack image
      computerImg.scyAtkImage1();
      computerSD.scytherSlash_sound.play();


      //debugging here------------------------------------------------------
      console.log("pikachuHealthBar array is "+a3.pikachuHealthBar);
      console.log("pikachuBackup array is " +a3.pikachuHealthBar);



    }else if (comp.scytherSelected === true  &&  p1.charmanderSelected === true) {


      //debugging here -- delete when neccessary
      console.log("scytherMoves Function1of6 is (2) : " + computer.scytherMovesActivated[0].scytherFunction1of6);

      //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
      a1.charmanderHealthBar.push(-5);
      a1.charmanderBackup.push(-5);

      scytherProgressBar.decreasePlayerHP2();

      //show attack image
      computerImg.scyAtkImage1();
      computerSD.scytherSlash_sound.play();

      //debugging here------------------------------------------------------
      console.log("charmanderHealthBar array is (2) " + a1.charmanderHealthBar);
      console.log("charmanderBackup array is (2) " + a1.charmanderBackup);

    }else if (comp.scytherSelected === true  &&  p1.blastoiseSelected === true) {

      //debugging here -- delete when neccessary
      console.log("scytherMoves Function1of6 is (3) : " + computer.scytherMovesActivated[0].scytherFunction1of6);

      //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
      a5.blastoiseHealthBar.push(-5);
      a5.blastoiseBackup.push(-5);

      scytherProgressBar.decreasePlayerHP2();

      //show attack image
      computerImg.scyAtkImage1();
      computerSD.scytherSlash_sound.play();


      //debugging here------------------------------------------------------
      console.log("blastoiseHealthBar array is (3) " + a5.blastoiseHealthBar);
      console.log("blastoiseBackup array is (3) " + a5.blastoiseBackup);


    }//end of if statements




      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      array1.checkTheStatus();



      if (comp.scytherSelected === true  && p1.pikachuSelected === true) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1] + " attacked "+ player1CH.player1PokemonChoices[2] +" with Slash!";

        //disable attack move for pikachu and scyther
        player1.pikachuMoves[0].pikachuFunction1of6 = false;
        computer.scytherMovesActivated[0].scytherFunction1of6 = false;


      }else if (comp.scytherSelected === true  &&  p1.charmanderSelected === true) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1] + " attacked "+ player1CH.player1PokemonChoices[0] +" with Slash!";

        //disable attack move for charmander and scyther
        player1.charmanderMoves[0].charmanderFunction1of6 = false;
        computer.scytherMovesActivated[0].scytherFunction1of6 = false;

      }else if (comp.scytherSelected === true  &&  p1.blastoiseSelected === true) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1] + " attacked "+ player1CH.player1PokemonChoices[1] +" with Slash!";

        //disable attack move for blastoise and scyther
        player1.blastoiseMoves[0].blastoiseFunction1of6 = false;
        computer.scytherMovesActivated[0].scytherFunction1of6 = false;

      }//end of if statements



      //Change boolean state so that player1 can make a move
      confirm.makeMove[0].computerMove = false;
      console.log(confirm.makeMove[0]);
      confirm.enableMoves();
      console.log(confirm.makeMove[0]);



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
       document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1] +  " attacked "+ player1CH.player1PokemonChoices[2] +" Quick Attack!";

       //default setting
     }else if (p1.preserveHPChanges === true) {

       //inform player1 of attack from computer
       document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0] + "";

     }//end of if statements



     //show attack image
     computerImg.scyAtkImage2();
     computerSD.scytherQuickAttack_sound.play();



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
       document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1] +  " attacked "+ player1CH.player1PokemonChoices[2]  +" with X-Scissor!";

       //default setting
     }else if (p1.preserveHPChanges === true) {

       //inform player1 of attack from computer
       document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ "";

     }//end of if statements



     //show attack image
     computerImg.scyAtkImage3();
     computerSD.scytherXScissor_sound.play();



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
         document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1] +  " attacked "+ player1CH.player1PokemonChoices[2] +" with Fury Cutter!";

         //default setting
       }else if (p1.preserveHPChanges === true) {

         //inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ "";

       }//end of if statements



       //show attack image
       computerImg.scyAtkImage4();
       computerSD.scytherFuryCutter_sound.play();



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
         computer.scytherMovesActivated[0].scytherFunction5of6 = false;


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
           document.getElementById("statusProgress2").innerHTML = computer.pokemonName[1] +  " attacked "+ player1CH.player1PokemonChoices[2] +" with Wing Attack!";

           //default setting
         }else if (p1.preserveHPChanges === true) {

           //inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[0]+ "";

         }//end of if statements



         //show attack image
         computerImg.scyAtkImage5();
         computerSD.scytherWingAttack_sound.play();



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

           //scyther attack move: rest2 (restores health to pikachu)
           //disable attack move for scyther pokemon and pikachu
           computer.scytherMovesActivated[0].scytherFunction6of6 = false;

           //debugging here -- delete when neccessary
           console.log("scytherMoves Function6of6 is : " + computer.scytherMovesActivated[0].scytherFunction6of6);




           //pikachu gets 45 HP if conditions are true

           if (pikachuHP14 <= 40) {



             //show recovery image for computer pokemon and play rest sound effect
             player1Img.pikAtkImage6();
             player1SD.pokemonRest_sound3.play();

             //reflect the changes to the pikachuHealthBar array
            a3.pikachuHealthBar.push(45);

            //backup array for health restoration needs to be updated as well
            a9.pikachuHpRecovered.push(45);

             //reflect speedbar progress to pikSpeedProgressBar array to create limit for health restoration
            a9.pikSpeedProgressBar.push(-50);



            }else if(pikachuHP14 > 40) {

             //turn off rest sound effect
             player1SD.pokemonRest_sound3.pause();

             //make no changes to the pikachuHealthBar array
             a3.pikachuHealthBar.push(0);

             //make no changes to pikachuHpRecovered array
             a9.pikachuHpRecovered.push(0);

             //make no changes to pikSpeedProgressBar array
             a9.pikSpeedProgressBar.push(0);




           }//end of if statements


           //this function changes the HTML progress bar that displays the pokemon HP (this attack recovers pikachu when scyther attacks)
           pikachuProgressBar.decreasePlayerHP2(); //actually increases hp for pikachu


           //debugging here------------------------------------------------------

           console.log("pikachuHealthBar array is "+ a3.pikachuBackup);
           console.log("pikachuHP_recovered array is " + hpRecovered3);


           if (p1.preserveHPChanges === false) {

             //remove previous comment
             document.getElementById("statusProgress2").innerHTML =  "";

             //default setting
           }else if (p1.preserveHPChanges === true) {

             setTimeout(function() {

               //inform player1 of attack from computer
               document.getElementById("statusProgress2").innerHTML =   "Scyther used rest to recover!***";

              }, 2000);



           }//end of if statements





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




   }//end of switch statements for scytherMoves



         }//end of scytherMoves function










// start of onixMoves -- ends at 4404

         this.onixMoves = function () {

           //onixMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

           switch (computer.onixMovesActivated[0].onixFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true
              ||   computer.onixMovesActivated[0].onixFunction2of6 === true && player1.blastoiseMoves[0].blastoiseFunction2of6 === true
              ||   computer.onixMovesActivated[0].onixFunction3of6 === true && player1.blastoiseMoves[0].blastoiseFunction3of6 === true
              ||   computer.onixMovesActivated[0].onixFunction4of6 === true && player1.blastoiseMoves[0].blastoiseFunction4of6 === true
              ||   computer.onixMovesActivated[0].onixFunction5of6 === true && player1.blastoiseMoves[0].blastoiseFunction5of6 === true
              ||   computer.onixMovesActivated[0].onixFunction6of6 === true && player1.blastoiseMoves[0].blastoiseFunction6of6 === true

              ||   computer.onixMovesActivated[0].onixFunction1of6 === true && player1.charmanderMoves[0].charmanderFunction1of6 === true
              ||   computer.onixMovesActivated[0].onixFunction2of6 === true && player1.charmanderMoves[0].charmanderFunction2of6 === true
              ||   computer.onixMovesActivated[0].onixFunction3of6 === true && player1.charmanderMoves[0].charmanderFunction3of6 === true
              ||   computer.onixMovesActivated[0].onixFunction4of6 === true && player1.charmanderMoves[0].charmanderFunction4of6 === true
              ||   computer.onixMovesActivated[0].onixFunction5of6 === true && player1.charmanderMoves[0].charmanderFunction5of6 === true
              ||   computer.onixMovesActivated[0].onixFunction6of6 === true && player1.charmanderMoves[0].charmanderFunction6of6 === true

              ||   computer.onixMovesActivated[0].onixFunction1of6 === true && player1.pikachuMoves[0].pikachuFunction1of6 === true
              ||   computer.onixMovesActivated[0].onixFunction2of6 === true && player1.pikachuMoves[0].pikachuFunction2of6 === true
              ||   computer.onixMovesActivated[0].onixFunction3of6 === true && player1.pikachuMoves[0].pikachuFunction3of6 === true
              ||   computer.onixMovesActivated[0].onixFunction4of6 === true && player1.pikachuMoves[0].pikachuFunction4of6 === true
              ||   computer.onixMovesActivated[0].onixFunction5of6 === true && player1.pikachuMoves[0].pikachuFunction5of6 === true
              ||   computer.onixMovesActivated[0].onixFunction6of6 === true && player1.pikachuMoves[0].pikachuFunction6of6 === true) {

        case (computer.onixMovesActivated[0].onixFunction1of6 === true && player1.blastoiseMoves[0].blastoiseFunction1of6 === true||
              computer.onixMovesActivated[0].onixFunction1of6 === true && player1.charmanderMoves[0].charmanderFunction1of6 === true ||
              computer.onixMovesActivated[0].onixFunction1of6 === true && player1.pikachuMoves[0].pikachuFunction1of6 === true):

         //onix attack move: Rock Throw
         //this statement selects the computer pokemon to battle with player1 pokemon (blastoise, charmander, or pikachu)
         if (comp.onixSelected === true && p1.blastoiseSelected === true) {

           //debugging here -- delete when neccessary
           console.log("onixMoves Function1of6 is : " + computer.onixMovesActivated[0].onixFunction1of6);

           //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
           a5.blastoiseHealthBar.push(-25);
           a5.blastoiseBackup.push(-25);

           //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
           blastoiseProgressBar.decreasePlayerHP3();

           //show attack image
           computerImg.oniAtkImage1();
           computerSD.onixRockThrow_sound.play();


           //debugging here------------------------------------------------------
           console.log("blastoiseHealthBar array is "+a5.blastoiseHealthBar);
           console.log("blastoiseBackup array is " +a5.blastoiseBackup);


         }else if (comp.onixSelected === true && p1.charmanderSelected === true) {

           //debugging here -- delete when neccessary
           console.log("onixMoves Function1of6 is (2): " + computer.onixMovesActivated[0].onixFunction1of6);

           //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
           a1.charmanderHealthBar.push(-35);
           a1.charmanderBackup.push(-35);

           charmanderProgressBar.decreasePlayerHP3();

           //show attack image
           computerImg.oniAtkImage1();
           computerSD.onixRockThrow_sound.play();

           //debugging here------------------------------------------------------
           console.log("charmanderHealthBar array is (2) " + a1.charmanderHealthBar);
           console.log("charmanderBackup array is (2) " + a1.charmanderBackup);

         }else if (comp.onixSelected === true && p1.pikachuSelected === true) {

           //debugging here -- delete when neccessary
           console.log("onixMoves Function1of6 is (3): " + computer.onixMovesActivated[0].onixFunction1of6);

           //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
           a3.pikachuHealthBar.push(-35);
           a3.pikachuBackup.push(-35);

           pikachuProgressBar.decreasePlayerHP3();

           //show attack image
           computerImg.oniAtkImage1();
           computerSD.onixRockThrow_sound.play();

           //debugging here------------------------------------------------------
           console.log("pikachuHealthBar array is (3) " + a3.pikachuHealthBar);
           console.log("pikachuBackup array is (3) "  + a3.pikachuBackup);

         }//end of if statements



         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         array1.checkTheStatus();


         if (comp.onixSelected === true && p1.blastoiseSelected === true) {

           // inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " attacked "+ player1CH.player1PokemonChoices[1] +" with Rock Throw!";

           //disable attack move for onix and blastoise
           computer.onixMovesActivated[0].onixFunction1of6 = false;
           player1.blastoiseMoves[0].blastoiseFunction1of6 = false;

         }else if (comp.onixSelected === true && p1.charmanderSelected === true) {

           // inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " attacked "+ player1CH.player1PokemonChoices[0] +" with Rock Throw!";

           //disable attack move for onix and charmander
           computer.onixMovesActivated[0].onixFunction1of6 = false;
           player1.charmanderMoves[0].charmanderFunction1of6 = false;


         }else if (comp.onixSelected === true && p1.pikachuSelected === true) {

           // inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = computerCH.ComputerPokemonChoices[1]+ " attacked "+ player1CH.player1PokemonChoices[2] +" with Rock Throw!";

           //disable attack move for onix and pikachu
           computer.onixMovesActivated[0].onixFunction1of6 = false;
           player1.pikachuMoves[0].pikachuFunction1of6 = false;

         }//end of if statements



         //Change boolean state so that player1 can make a move
         confirm.makeMove[0].computerMove = false;
         console.log(confirm.makeMove[0]);
         confirm.enableMoves();
         console.log(confirm.makeMove[0]);





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
        computerImg.oniAtkImage2();
        computerSD.onixSmackDown_sound.play();



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
        computerImg.oniAtkImage3();
        computerSD.onixRockSlide_sound.play();



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
          computerImg.oniAtkImage4();
          computerSD.onixScreech_sound.play();



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
            computerImg.oniAtkImage5();
            computerSD.onixStoneEdge_sound.play();



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

              let blastoiseHP15 = a5.blastoiseHealthBar.reduce(array1.PokemonHPReduced);
              let hpRecovered4 = a11.blastoiseHpRecovered.reduce(array1.PokemonRestoredReducer);


              //onix attack move: rest3 (restores health to blastoise)
              //disable attack move for onix pokemon and blastoise
              computer.onixMovesActivated[0].onixFunction6of6 = false;

              //debugging here -- delete when neccessary
              console.log("onixMoves Function6of6 is : " + computer.onixMovesActivated[0].onixFunction6of6);


              //blastoise gets 45 HP if conditions are true

              if (blastoiseHP15 <= 40) {



                //show recovery image for player1 pokemon and play rest sound effect
                player1Img.blaAtkImage6();
                player1SD.pokemonRest_sound5.play();

                //reflect the changes to the blastoiseHealthBar array
               a5.blastoiseHealthBar.push(45);


               //backup array for health restoration needs to be updated as well
               a11.blastoiseHpRecovered.push(45);


                //reflect speedbar progress to blaSpeedProgressBar array to create limit for health restoration
               a11.blaSpeedProgressBar.push(-50);



               }else if(blastoiseHP15 > 40) {

                //turn off rest sound effect
                player1SD.pokemonRest_sound5.pause();

                //make no changes to the pikachuHealthBar array
                a5.blastoiseHealthBar.push(0);


                //make no changes to the blastoiseHpRecovered array
                a11.blastoiseHpRecovered.push(0);


                //make no changes to pikSpeedProgressBar array
                a11.blaSpeedProgressBar.push(0);




              }//end of if statements



              //this function changes the HTML progress bar that displays the pokemon HP (onix recovers health when blastoise attacks)
              blastoiseProgressBar.decreasePlayerHP3(); //actually increases hp for blastoise


              //debugging here------------------------------------------------------

              console.log("blastoiseHealthBar array is "+ a5.blastoiseHealthBar);
              console.log("blastoiseHP_recovered array is " + hpRecovered4);


              //default setting
              if (p1.preserveHPChanges === false) {

                //remove previous comment
                document.getElementById("statusProgress2").innerHTML =  "";


              }else if (p1.preserveHPChanges === true) {

                setTimeout(function() {

                  //inform player1 of attack from computer
                  document.getElementById("statusProgress2").innerHTML =  "Onix used rest to recover!***"

                }, 2000);



              }//end of if statements



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
  player1SD.charmanderFireBlaster_sound.play();

  player1CH.debuggingOperation();

  setTimeout (function(){


    if (comp.squirtleSelected === true  &&  p1.charmanderSelected === true) {

      computer.squirtleMoves();

    }else if (comp.scytherSelected === true  &&  p1.charmanderSelected === true) {

      computer.scytherMoves();

    }else if (comp.onixSelected === true  &&  p1.charmanderSelected === true) {

      computer.onixMoves();

    }//end of if statements






  },2000); // computer attacks after 2 secs

}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

  player1.aquaJetMove();
  player1SD.blastoiseAquaJet_sound.play();

  setTimeout (function(){



    computer.onixMoves();


  },2000); // computer attacks after 2 secs



}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

  player1.thunderShockMove();
  player1SD.pikachuThunderBolt_sound.play();

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
  player1SD.chamanderBlaze_sound.play();

  setTimeout (function(){


    computer.squirtleMoves();


  },2000); // computer attacks after 2 secs

}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

  player1.bubbleMove();
  player1SD.squirtleBubble_sound2.play();

  setTimeout (function(){



    computer.onixMoves();


  },2000); // computer attacks after 2 secs



}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

  player1.doubleKickMove();
  player1SD.pikachuDoubleKick_sound.play();

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
  player1SD.charmanderSolarBeam_sound.play();

  setTimeout (function(){


    computer.squirtleMoves();


  },2000); // computer attacks after 2 secs

}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

  player1.hydroPumpMove();
  player1SD.blastoiseHydroPump_sound.play();


  setTimeout (function(){



    computer.onixMoves();


  },2000); // computer attacks after 2 secs



}else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

  player1.thunderBoltMove();
  player1SD.pikachuThunderBolt2_sound.play();

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
  player1SD.charmanderGrowl_sound.play();

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

    player1.protectMove();
    player1SD.blastoiseProtect_sound.play();

    setTimeout (function(){



      computer.onixMoves();


    },2000); // computer attacks after 2 secs



  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

    player1.growl2Move();
    player1SD.charmanderGrowl_sound2.play();

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
    player1SD.charmanderSmokeScreen_sound.play();

    setTimeout (function(){


      computer.squirtleMoves();


    },2000); // computer attacks after 2 secs

  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[1].isSelected === true ) { // blastoise

    player1.headButt2Move();
    player1SD.onixSmackDown_sound3.play();

    setTimeout (function(){



      computer.onixMoves();


    },2000); // computer attacks after 2 secs



  }else if (confirm.makeMove[0].player1Move === false && player1CH.pokemonType[2].isSelected === true) { // pikachu

    player1.headButtMove();
    player1SD.onixSmackDown_sound2.play();

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

    //conditional ternary determines if charmander was selected and sets squirtle true if it was 1 of 2
    (p1.charmanderSelected === true) ? comp.squirtleSelected = true : comp.squirtleSelected = false;

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


    //call pokemonLoops function to update healthbar when switching pokemon
    p1.pokemonLoops();


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

    //conditional ternary determines if pikachu was selected and sets scyther true if it was
    (p1.pikachuSelected === true) ? comp.scytherSelected = true : comp.scytherSelected = false;

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

    //call pokemonLoops function to update healthbar when switching pokemon
    p1.pokemonLoops();



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

//conditional ternary determines if blastoise was selected and sets onix true if it was
(p1.blastoiseSelected === true) ? comp.onixSelected = true : comp.onixSelected = false;

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

//call pokemonLoops function to update healthbar when switching pokemon
p1.pokemonLoops();


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
