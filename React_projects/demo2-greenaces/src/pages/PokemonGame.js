import React, { useState, useEffect, useRef } from "react";
import  '../styles/PokemonGame.css';
import pokemonData from './PokemonData.js';
import pokemonData2 from './PokemonData2.js';
import pokemonData3 from './PokemonData3.js';
import pokemonData4 from './PokemonData4.js';
import attackMenuIcon from "../assets/images/pokemon/attack-menu-icon.jpg";
import blastoiseAquaJet from "../assets/images/pokemon/blastoise_aquajet.png";
import blastoiseBubble from "../assets/images/pokemon/blastoise_bubble.png";
import blastoiseHeadbutt from "../assets/images/pokemon/blastoise_headbutt.png";
import blastoiseHydroPump from "../assets/images/pokemon/blastoise_hydropump.png";
import blastoiseProtect from "../assets/images/pokemon/blastoise_protect.png";
import blastoiseGif from "../assets/images/pokemon/blastoise.gif";
import blastoiseHeadDead from "../assets/images/pokemon/BlastoiseHeadDead.png";
import blastoiseHeadIcon from "../assets/images/pokemon/BlastoiseHeadIcon.png";
import blaze from "../assets/images/pokemon/blaze.png";
import bubblesGif from "../assets/images/pokemon/bubbles-gif.gif";
import charmanderGif from "../assets/images/pokemon/charmander.gif";
import charmanderHeadDEAD from "../assets/images/pokemon/charmanderHeadDEAD.png";
import charmanderHeadIcon from "../assets/images/pokemon/charmanderHeadIcon.png";
import defenseMenuIcon from "../assets/images/pokemon/defense-menu-icon.jpg";
import fireBlasterGif from "../assets/images/pokemon/fireBlaster.gif";
import gameLost from "../assets/images/pokemon/gamelost.jpg";
import growl from "../assets/images/pokemon/growl.png";
import hpRecoveredImage from "../assets/images/pokemon/HP-recovered.png";
import laughAndPoint from "../assets/images/pokemon/laughandpoint.png";
import onixRockSlide from "../assets/images/pokemon/onix_RockSlide.jpg";
import onixRockthrow from "../assets/images/pokemon/onix_rockthrow.png";
import onixScreech from "../assets/images/pokemon/onix_Screech.png";
import onixSmackdown from "../assets/images/pokemon/onix_smackdown.png";
import onixStoneEdge from "../assets/images/pokemon/onix_StoneEdge.png";
import OnixGif from "../assets/images/pokemon/Onix.gif";
import onixHeadIcon from "../assets/images/pokemon/OnixHead.png";
import OnixHeadDead from "../assets/images/pokemon/OnixHeadDead.png";
import pikachuDoubleKick from "../assets/images/pokemon/pikachu_doublekick.png";
import pikachuGrowl from "../assets/images/pokemon/pikachu_growl.png";
import pikachuHeadbutt from "../assets/images/pokemon/pikachu_headbutt.png";
import pikachuThunderbolt from "../assets/images/pokemon/pikachu_thunderbolt.png";
import pikachuThundershock from "../assets/images/pokemon/pikachu_thundershock.png";
import PikachuGif from "../assets/images/pokemon/Pikachu.gif";
import pikachuHeadDead from "../assets/images/pokemon/PikachuHeadDead.jpg";
import pikachuHeadIcon from "../assets/images/pokemon/PikachuHeadIcon.png";
import pokemonGameThumbnail from "../assets/images/pokemon/Pokemon_game_thumbnail.jpg";
import pokemonLogo from "../assets/images/pokemon/pokemon_logo.jpg";
import ripPokemon from "../assets/images/pokemon/rip_pokemon.jpeg";
import scytherFurycutter from "../assets/images/pokemon/scyther_Furycutter.png";
import scytherQuickAttack from "../assets/images/pokemon/scyther_quickAttack.png";
import scytherWingAttack from "../assets/images/pokemon/scyther_WingAttack.png";
import scytherXScissor from "../assets/images/pokemon/scyther_X-Scissor.png";
import ScytherGif from "../assets/images/pokemon/Scyther.gif";
import scyther2SlashMove2 from "../assets/images/pokemon/scyther2_slashMove2.png";
import scytherHeadIcon from "../assets/images/pokemon/scytherHead.png";
import scytherHeadDead from "../assets/images/pokemon/scytherHeadDead.png";
import selectIcon from "../assets/images/pokemon/select-icon.jpg";
import settings from "../assets/images/pokemon/settings.jpg";
import slashGif from "../assets/images/pokemon/slash.gif";
import smokescreen from "../assets/images/pokemon/smokescreen.png";
import solarbeam from "../assets/images/pokemon/solarbeam.png";
import squirtleGif from "../assets/images/pokemon/squirtle.gif";
import SquirtleHeadIcon from "../assets/images/pokemon/SquirtleHead.png";
import SquirtleHeadDead from "../assets/images/pokemon/SquirtleHeadDead.png";
import tackle from "../assets/images/pokemon/tackle.png";
import TailWhip from "../assets/images/pokemon/TailWhip.png";
import threeDots from "../assets/images/pokemon/three-dots.svg";
import watergun from "../assets/images/pokemon/watergun.png";
import waterPulse from "../assets/images/pokemon/waterPulse.png";
import winner from "../assets/images/pokemon/winner.jpg";
import blastoiseAquaJetMp3 from "../assets/sounds/pokemon/blastoiseAquaJet_sound.mp3";
import blastoiseHydroPumpMp3 from "../assets/sounds/pokemon/blastoiseHydroPump_sound.mp3";
import blastoiseProtectMp3 from "../assets/sounds/pokemon/blastoiseProtect_sound.mp3";
import BlastoiseVoiceWav from "../assets/sounds/pokemon/BlastoiseVoice.wav";
import cartoonLaughMp3 from "../assets/sounds/pokemon/cartoonLaugh_sound.mp3";
import chamanderBlazeMp3 from "../assets/sounds/pokemon/chamanderBlaze_sound.mp3";
import charmanderFireBlasterMp3 from "../assets/sounds/pokemon/charmanderFireBlaster_sound.mp3";
import charmanderGrowlMp3 from "../assets/sounds/pokemon/charmanderGrowl_sound.mp3";
import charmanderSmokeScreenMp3 from "../assets/sounds/pokemon/charmanderSmokeScreen_sound.mp3";
import charmanderSolarBeamMp3 from "../assets/sounds/pokemon/charmanderSolarBeam_sound.mp3";
import CharmanderVoiceMp3 from "../assets/sounds/pokemon/CharmanderVoice.mp3";
import congratulationsThemeMp3 from "../assets/sounds/pokemon/congratulationsTheme.mp3";
import gameboy_battleThemeMp3 from "../assets/sounds/pokemon/gameboy_battleTheme.mp3";
import invalidActiontMp3 from "../assets/sounds/pokemon/invalidAction.mp3";
import onixRockSlideMp3 from "../assets/sounds/pokemon/onixRockSlide_sound.mp3";
import onixRockThrowMp3 from "../assets/sounds/pokemon/onixRockThrow_sound.mp3";
import onixScreechMp3 from "../assets/sounds/pokemon/onixScreech_sound.mp3";
import onixSmackDownMp3 from "../assets/sounds/pokemon/onixSmackDown_sound.mp3";
import onixStoneEdgeMp3 from "../assets/sounds/pokemon/onixStoneEdge_sound.mp3";
import OnixVoiceMp3 from "../assets/sounds/pokemon/OnixVoice.mp3";
import pikachuDoubleKickMp3 from "../assets/sounds/pokemon/pikachuDoubleKick_sound.mp3";
import pikachuThunderBoltMp3 from "../assets/sounds/pokemon/pikachuThunderBolt_sound.mp3";
import PikachuVoiceMp3 from "../assets/sounds/pokemon/PikachuVoice.mp3";
import pokemonRestMp3 from "../assets/sounds/pokemon/pokemonRest_sound.mp3";
import sadTromboneMp3 from "../assets/sounds/pokemon/sadTrombone_sound.mp3";
import scytherFuryCutterMp3 from "../assets/sounds/pokemon/scytherFuryCutter_sound.mp3";
import scytherQuickAttackMp3 from "../assets/sounds/pokemon/scytherQuickAttack_sound.mp3";
import scytherSlashMp3 from "../assets/sounds/pokemon/scytherSlash_sound.mp3";
import ScytherVoiceWav from "../assets/sounds/pokemon/ScytherVoice.wav";
import scytherWingAttackMp3 from "../assets/sounds/pokemon/scytherWingAttack_sound.mp3";
import scytherXScissorMp3 from "../assets/sounds/pokemon/scytherX-Scissor_sound.mp3";
import soundConfirmerWav from "../assets/sounds/pokemon/soundConfirmer.wav";
import squirtleBubbleMp3 from "../assets/sounds/pokemon/squirtleBubble_sound.mp3";
import squirtleTackleMp3 from "../assets/sounds/pokemon/squirtleTackle_sound.mp3";
import squirtleTailWhipMp3 from "../assets/sounds/pokemon/squirtleTailWhip_sound.mp3";
import squirtleWaterGunMp3 from "../assets/sounds/pokemon/squirtleWaterGun_sound.mp3";
import SquirtleVoicezzzMp3 from "../assets/sounds/pokemon/SquirtleVoicezzz.mp3";
import squirtleWaterPulseMp3 from "../assets/sounds/pokemon/squirtleWaterPulse_sound.mp3";
import victoryThemezzMp3 from "../assets/sounds/pokemon/victoryThemezz.mp3";








/*
NOTE:
Last update: (01/26/2023)
1)  *** high priority *** (06/14/2022)
2) make blastoise character smaller or create space for feedback form *** high priority *** (06/13/2022)
3) updateHealthInformation was recently inserted to blockPlayer1Pokemon2 and 3 functions to fix the HP progressbar from going blank -- find an alternative solution and remove later *** high priority *** (06/17/2022)
4) create code for blockPlayer1Pokemon2 and 3 (when pikachu or blastoise lose the game) and 1 more if statement for blockPlayer1Pokemon regarding when blastoise is selected 1st instead of pikachu *** high priority *** (06/16/2022)
5) redirect the user back to the homepage after filling out the pokemon form or add a homepage button to the form itself *** high priority *** (06/09/2022)
6)
7) 1) play as pikachu first then die -- select charmander or blastoise and progressbar dissapears 2) play as blastoise first then die -- select pikachu or charmander and progressbar dissapears as well *** high priority *** (06/28/2022)
8) NOTE: whenever the HP progressbar disappears it means either 1) wrong pokemon is selected OR 2) something wrong with the if statement regarding the pokemonHP reference
9)
10)
11)
12) add meta tags on index page for better search engine optimization *** high priority *** (07/03/2022)
14) remove bugs or useless code that you don't use  *** low priority *** (03/25/2022)
*/


function PokemonGame() {

//defined variables are listed here 

const [player1Move, setPlayer1Move] = useState(false); // replaces makeMove[0].player1Move
const [computerMove, setComputerMove] = useState(false); // replaces makeMove[0].computerMove

const [loadCharmanderImg, setLoadCharmanderImg] = useState([]);
const [loadPikachuImg, setLoadPikachuImg] = useState([]);
const [loadBlastoiseImg, setLoadBlastoiseImg] = useState([]);


const [loadSquirtleImg, setLoadSquirtleImg] = useState([]);
const [loadScytherImg, setLoadScytherImg] = useState([]);
const [loadOnixImg, setLoadOnixImg] = useState([]);

const [player1AttackImage, setPlayer1AttackImage] = useState([]);
const [computerAttackImage, setComputerAttackImage] = useState([]);

const [player1HP, setPlayer1HP] = useState([]);
const [playerSpeed, setPlayerSpeed] = useState([]);
const [cpuHP, setCpuHP] = useState([]);
const [cpuSpeed, setCpuSpeed] = useState([]);






const [loadCharmanderAtk_A, setLoadCharmanderAtk_A] = useState([]);
const [loadCharmanderAtk_B, setLoadCharmanderAtk_B] = useState([]);
const [loadCharmanderAtk_C, setLoadCharmanderAtk_C] = useState([]);

const [loadCharmanderDef_A, setLoadCharmanderDef_A] = useState([]);
const [loadCharmanderDef_B, setLoadCharmanderDef_B] = useState([]);
const [loadCharmanderDef_C, setLoadCharmanderDef_C] = useState([]);


const [loadPikachuAtk_A, setLoadPikachuAtk_A] = useState([]);
const [loadPikachuAtk_B, setLoadPikachuAtk_B] = useState([]);
const [loadPikachuAtk_C, setLoadPikachuAtk_C] = useState([]);

const [loadPikachuDef_A, setLoadPikachuDef_A] = useState([]);
const [loadPikachuDef_B, setLoadPikachuDef_B] = useState([]);
const [loadPikachuDef_C, setLoadPikachuDef_C] = useState([]);


const [loadBlastoiseAtk_A, setLoadBlastoiseAtk_A] = useState([]);
const [loadBlastoiseAtk_B, setLoadBlastoiseAtk_B] = useState([]);
const [loadBlastoiseAtk_C, setLoadBlastoiseAtk_C] = useState([]);

const [loadBlastoiseDef_A, setLoadBlastoiseDef_A] = useState([]);
const [loadBlastoiseDef_B, setLoadBlastoiseDef_B] = useState([]);
const [loadBlastoiseDef_C, setLoadBlastoiseDef_C] = useState([]);


const [loadSquirtleAtk_A, setLoadSquirtleAtk_A] = useState([]);
const [loadSquirtleAtk_B, setLoadSquirtleAtk_B] = useState([]);
const [loadSquirtleAtk_C, setLoadSquirtleAtk_C] = useState([]);

const [loadSquirtleDef_A, setLoadSquirtleDef_A] = useState([]);
const [loadSquirtleDef_B, setLoadSquirtleDef_B] = useState([]);
const [loadSquirtleDef_C, setLoadSquirtleDef_C] = useState([]);


const [loadScytherAtk_A, setLoadScytherAtk_A] = useState([]);
const [loadScytherAtk_B, setLoadScytherAtk_B] = useState([]);
const [loadScytherAtk_C, setLoadScytherAtk_C] = useState([]);

const [loadScytherDef_A, setLoadScytherDef_A] = useState([]);
const [loadScytherDef_B, setLoadScytherDef_B] = useState([]);
const [loadScytherDef_C, setLoadScytherDef_C] = useState([]);



const [loadOnixAtk_A, setLoadOnixAtk_A] = useState([]);
const [loadOnixAtk_B, setLoadOnixAtk_B] = useState([]);
const [loadOnixAtk_C, setLoadOnixAtk_C] = useState([]);

const [loadOnixDef_A, setLoadOnixDef_A] = useState([]);
const [loadOnixDef_B, setLoadOnixDef_B] = useState([]);
const [loadOnixDef_C, setLoadOnixDef_C] = useState([]);


const [statusProgress, setStatusProgress] = useState("");
const [statusProgress2, setStatusProgress2] = useState("");
const [statusProgress3, setStatusProgress3] = useState("");
const [sendLink, setSendLink] = useState("");



const [p1PokemonName, setP1PokemonName] = useState("");
const [compPokemonName, setCompPokemonName] = useState("");



const attackA_Sta = useState("");
const attackB_Sta = useState("");
const attackC_Sta = useState("");
const defenseA_Sta = useState("");
const defenseB_Sta = useState("");
const defenseC_Sta = useState("");




 //Pokemon section - images:   


    //charmander attack images:
     
     
              
          const chrAtkImage1 = function () {  // image 1 of 6 is fireblaster for charmander

    
            
              setPlayer1AttackImage(
                <img
                src={fireBlasterGif}
                
                />
              );
          
              setTimeout(() => {
                setPlayer1AttackImage('');
              }, 5000);
            
    
        }
    
          const chrAtkImage2 = function () {  // image 2 of 6 is blaze for charmander


            setPlayer1AttackImage(
              <img
              src={blaze}
              
              />
            );
        
            setTimeout(() => {
              setPlayer1AttackImage('');
            }, 5000);

        
    
          }
    
          const chrAtkImage3 = function () {  // image 3 of 6 solarbeam for charmander


            setPlayer1AttackImage(
              <img
              src={solarbeam}
              
              />
            );
        
            setTimeout(() => {
              setPlayer1AttackImage('');
            }, 5000);
    
    
    
        }
    
      const chrAtkImage4 = function () {  // image 4 of 6 is growl for charmander


        setPlayer1AttackImage(
          <img
          src={growl}
         
          />
        );
    
        setTimeout(() => {
          setPlayer1AttackImage('');
        }, 5000);


    
    
    }
    
    const chrAtkImage5 = function () {  // image 5 of 6 smoke screen for charmander


      setPlayer1AttackImage(
        <img
        src={smokescreen}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);
 
    
    
    }
    
    const chrAtkImage6 = function () {  // image 6 of 6 is rest for charmander -- NOTE: attack image needs to show on player1 side because of self-healing


      setPlayer1AttackImage(
        <img
        src={hpRecoveredImage}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);
     
    
    
    }



        //squirtle attack images:

    
    
    const squAtkImage1 = function () { // image 1 of 6 is bubbles for squirtle


      
      setComputerAttackImage(
        <img
        src={bubblesGif}
        
        />
      );
  
      setTimeout(() => {
        setComputerAttackImage('');
      }, 5000);
     

    
    }
    
    const squAtkImage2 = function () { // image 2 of 6 is TailWhip for squirtle


      setComputerAttackImage(
        <img
        src={TailWhip}
        
        />
      );
  
      setTimeout(() => {
        setComputerAttackImage('');
      }, 5000);
     


    
    }
    
    
    const squAtkImage3 = function () { // image 3 of 6 is waterPulse for squirtle


      setComputerAttackImage(
        <img
        src={waterPulse}
        
        />
      );
  
      setTimeout(() => {
        setComputerAttackImage('');
      }, 5000);
     


    
    }
    
    
    const squAtkImage4 = function () { // image 4 of 6 is tackle for squirtle


      setComputerAttackImage(
        <img
        src={tackle}
        
        />
      );
  
      setTimeout(() => {
        setComputerAttackImage('');
      }, 5000);

 
    
    }
    
    const squAtkImage5 = function () { // image 5 of 6 is watergun for squirtle

      setComputerAttackImage(
        <img
        src={watergun}
        
        />
      );
  
      setTimeout(() => {
        setComputerAttackImage('');
      }, 5000);


  
    
    }
    
    
    const squAtkImage6 = function () { // image 6 of 6 rest for squirtle -- NOTE: attack image needs to show on computer side because of self-healing

      
      setComputerAttackImage(
        <img
        src={hpRecoveredImage}
        
        />
      );
  
      setTimeout(() => {
        setComputerAttackImage('');
      }, 5000);

  
    
    }



    
    
    
    //pikachu attack images:
    
    const pikAtkImage1 = function () { // image 1 of 6 thunderShock

      setPlayer1AttackImage(
        <img
        src={pikachuThundershock}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);

  
    
    }
    
    const pikAtkImage2 = function () { // image 2 of 6 is doubleKick

      setPlayer1AttackImage(
        <img
        src={pikachuDoubleKick}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);


    
    }
    
    const pikAtkImage3 = function () { // image 3 of 6 is thunderBolt -- note: consider using slash.gif for the animation for thunderBolt -- looks really good together

      setPlayer1AttackImage(
        <img
        src={pikachuThunderbolt}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);

    
    }
    
    const pikAtkImage4 = function () { // image 4 of 6 is growl

      setPlayer1AttackImage(
        <img
        src={pikachuGrowl}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);


    
    }
    
    const pikAtkImage5 = function () { // image 5 of 6 is headButt -- NOTE: 6of6 is rest but this is same attack move for all player1 pokemon

      setPlayer1AttackImage(
        <img
        src={pikachuHeadbutt}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);


    
    }
    
    
    const pikAtkImage6 = function () {  // image 6 of 6 is rest for pikachu -- NOTE: attack image needs to show on player1 side because of self-healing

      setPlayer1AttackImage(
        <img
        src={hpRecoveredImage}
        
        />
      );
  
      setTimeout(() => {
        setPlayer1AttackImage('');
      }, 5000);

    
    
    
    }




    
    
    
    //scyther attack images:
    
    
        const scyAtkImage1 = function () { // image 1 of 6 is slash

          setComputerAttackImage(
            <img
            src={slashGif}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);
         

    
        }
    
        const scyAtkImage2 = function () { // image 2 of 6 is quick attack

          setComputerAttackImage(
            <img
            src={scytherQuickAttack}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);
         
    
        }
    
        const scyAtkImage3 = function () { // image 3 of 6 is X-Scissor

          setComputerAttackImage(
            <img
            src={scytherXScissor}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);
         


    
        }
    
        const scyAtkImage4 = function () { // image 4 of 6 is Fury Cutter

          setComputerAttackImage(
            <img
            src={scytherFurycutter}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);

    
        }
    
        const scyAtkImage5 = function () { // image 5 of 6 is Wing Attack

          setComputerAttackImage(
            <img
            src={scytherWingAttack}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);

    
        }
    
        const scyAtkImage6 = function () {  // image 6 of 6 is rest for scyther -- NOTE: attack image needs to show on player1 side because of self-healing

          setComputerAttackImage(
            <img
            src={hpRecoveredImage}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);

    
    
        }

       

    
    
        //blastoise attack images:
    
        const blaAtkImage1 = function () { // image 1 of 6 is aquaJet


          setPlayer1AttackImage(
            <img
            src={blastoiseAquaJet}
            
            />
          );
      
          setTimeout(() => {
            setPlayer1AttackImage('');
          }, 5000);

    
        }
    
        const blaAtkImage2 = function () { // image 2 of 6 is bubble

          setPlayer1AttackImage(
            <img
            src={blastoiseBubble}
            
            />
          );
      
          setTimeout(() => {
            setPlayer1AttackImage('');
          }, 5000);


    
        }
    
        const blaAtkImage3 = function () { // image 3 of 6 is hydroPump


          setPlayer1AttackImage(
            <img
            src={blastoiseHydroPump}
            
            />
          );
      
          setTimeout(() => {
            setPlayer1AttackImage('');
          }, 5000);


    
        }
    
        const blaAtkImage4 = function () { // image 4 of 6 is protect

          setPlayer1AttackImage(
            <img
            src={blastoiseProtect}
            
            />
          );
      
          setTimeout(() => {
            setPlayer1AttackImage('');
          }, 5000);

    
        }
    
        const blaAtkImage5 = function () { // image 5 of 6 is headbutt

          setPlayer1AttackImage(
            <img
            src={blastoiseHeadbutt}
            
            />
          );
      
          setTimeout(() => {
            setPlayer1AttackImage('');
          }, 5000);


 
    
        }
    
        const blaAtkImage6 = function () {  // image 6 of 6 is rest for blastoise -- NOTE: attack image needs to show on player1 side because of self-healing

          setPlayer1AttackImage(
            <img
            src={hpRecoveredImage}
            
            />
          );
      
          setTimeout(() => {
            setPlayer1AttackImage('');
          }, 5000);

    
    
    
        }



            
    
    

        //onix attack images:
    
        const oniAtkImage1 = function () { // image 1 of 6 is rock throw


          setComputerAttackImage(
            <img
            src={onixRockthrow}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);

    
        }
    
        const oniAtkImage2 = function () { // image 2 of 6 is smack down

          setComputerAttackImage(
            <img
            src={onixSmackdown}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);



    
        }
    
        const oniAtkImage3 = function () { // image 3 of 6 is rock slide

          setComputerAttackImage(
            <img
            src={onixRockSlide}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);


    
        }
    
        const oniAtkImage4 = function () { // image 4 of 6 is screech


          setComputerAttackImage(
            <img
            src={onixScreech}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);


    
        }
    
        const oniAtkImage5 = function () { // image 5 of 6 is stone edge

          setComputerAttackImage(
            <img
            src={onixStoneEdge}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);



    
        }
    
        const oniAtkImage6 = function () {  // image 6 of 6 is rest for onix -- NOTE: attack image needs to show on player1 side because of self-healing


          setComputerAttackImage(
            <img
            src={hpRecoveredImage}
            
            />
          );
      
          setTimeout(() => {
            setComputerAttackImage('');
          }, 5000);


    
    
        }


           //taunting attack images:
                       
                                       
    
    
          const player1TauntImage = function () { // image 1 of 1 for taunting player1 when attemping to use health restoration when health is > 40

            setPlayer1AttackImage(
              <img
              src={laughAndPoint}
              
              />
            );
        
            setTimeout(() => {
              setPlayer1AttackImage('');
            }, 5000);
           
    
        }




  
    








   //Pokemon section - sounds:      

   //pokemon voices

  
   
  const playCharmanderVO = () => {

    new Audio (CharmanderVoiceMp3).play();

  }

  const playBlastoiseVO = () => {

    new Audio (BlastoiseVoiceWav).play();

  }

  
  const playOnixVO = () => {

    new Audio (OnixVoiceMp3).play();

  }

  const playPikachuVO = () => {

    new Audio (PikachuVoiceMp3).play();

  }


  const playPokemonBattleVO = () => {

    new Audio (gameboy_battleThemeMp3).play();

  }


  const playPokemonVictoryVO = () => {

    new Audio (victoryThemezzMp3).play();

  }


  const playScytherVO = () => {

    new Audio (ScytherVoiceWav).play();

  }

  const playSquirtleVO = () => {

    new Audio (SquirtleVoicezzzMp3).play();

  }

   //other sound effects


   const playSoundApprover = () => {

    new Audio (soundConfirmerWav).play();

   }

   const playInvalidAction = () => {

    new Audio (invalidActiontMp3).play();
    
   }

   const playCongratulationsTheme = () => {

    new Audio (congratulationsThemeMp3).play();
    
   }

   const playCartoonLaughSound = () => {

    new Audio (cartoonLaughMp3).play();
    
   }

   const playSadTromboneSound = () => {

    new Audio (sadTromboneMp3).play();
    
   }

   //pokemon sound effects

   //charmander sound effects:
  

   const playCharmanderFireBlasterSound = () => {

    new Audio (charmanderFireBlasterMp3).play();

   }

   const playChamanderBlazeSound = () => {

    new Audio (chamanderBlazeMp3).play();
    
   }

   const playCharmanderSolarBeamSound = () => {

    new Audio (charmanderSolarBeamMp3).play();
    
   }

   const playCharmanderGrowlSound  = () => {

    new Audio (charmanderGrowlMp3).play();
    
   }

   const playCharmanderSmokeScreenSound = () => {

    new Audio (charmanderSmokeScreenMp3).play();
    
   }

   const playPokemonRestSound = () => {

    new Audio (pokemonRestMp3).play();
    
   }


   const pausePokemonRestSound = () => {

    new Audio (pokemonRestMp3).pause();
    
   }


   //squirtle sound effects:


   const playSquirtleBubbleSound = () => {

    new Audio (squirtleBubbleMp3).play();

   }

   const playSquirtleTailWhipSound = () => {

    new Audio (squirtleTailWhipMp3).play();

   }

   const playSquirtleWaterPulseSound = () => {

    new Audio (squirtleWaterPulseMp3).play();

   }

   const playSquirtleTackleSound = () => {

    new Audio (squirtleTackleMp3).play();

   }

   const playSquirtleWaterGunSound = () => {

    new Audio (squirtleWaterGunMp3).play();

   }

   //pikachu sound effects: 
 

   const playPikachuThunderBoltSound = () => {

    new Audio (pikachuThunderBoltMp3).play();

   }

   const playPikachuDoubleKickSound = () => {

    new Audio (pikachuDoubleKickMp3).play();

   }


   const playPikachuThunderBolt2Sound = () => {

    new Audio (pikachuThunderBoltMp3).play();

   }


   const playCharmanderGrowlSound2 = () => {

    new Audio (growl).play();

   }


   const playOnixSmackDownSound2 = () => {

    new Audio (onixSmackdown).play();

   }

   //sycther sounds effects:
 

  const playScytherSlashSound = () => {

    new Audio (scytherSlashMp3).play();

  }

  const playScytherQuickAttackSound = () => {

    new Audio (scytherQuickAttackMp3).play();

  }

  const playScytherXScissorSound = () => {

    new Audio (scytherXScissorMp3).play();

  }

  const scytherFuryCutterSound = () => {

    new Audio (scytherFuryCutterMp3).play();

  }

  const playScytherWingAttackSound = () => {

    new Audio (scytherWingAttackMp3).play();

  }

  

   const playBlastoiseAquaJetSound = () => { //not used

    new Audio (blastoiseAquaJetMp3).play();

   }

   const playBlastoiseHydroPumpSound = () => {

    new Audio (blastoiseHydroPumpMp3).play();

   }


   const playBlastoiseProtectSound = () => {

    new Audio (blastoiseProtectMp3).play();

   }


   const playOnixSmackDownSound3 = () => {

    new Audio (onixSmackDownMp3).play();

   }


 



   const playOnixRockThrowSound = () => {

    new Audio (onixRockThrowMp3).play();

   }

   const playOnixSmackDownSound = () => {

    new Audio (onixSmackDownMp3).play();

   }


   const playOnixRockSlideSound = () => {

    new Audio (onixRockSlideMp3).play();

   }

   const playOnixScreechSound = () => {

    new Audio (onixScreechMp3).play();

   }

   const playOnixStoneEdgeSound = () => {

    new Audio (onixStoneEdgeMp3).play();

   }

  
  



  const soundSettingsOn = function() {

      // inform user of audio change with audio file

        playSoundApprover();

      setTimeout(function() { // This is an anonymous callback function

        //play pokemon battle theme
        playPokemonBattleVO();

      }, 2000); // 2 sec wait time



    }

  const soundSettingsOff = function () {

    // inform user of audio change without audio file
    document.getElementById("statusProgress3").innerHTML=("Sound was turned off.");

    setTimeout(function() { // This is an anonymous callback function

    // clears the previous text displayed above
    document.getElementById("statusProgress3").innerHTML=("");

    }, 2000); // 2 sec wait time


    // turn off pokemon voices and other sound effects 

    const pauseAllSounds = () => {

      new Audio (CharmanderVoiceMp3).pause();
      new Audio (BlastoiseVoiceWav).pause();
      new Audio (OnixVoiceMp3).pause();
      new Audio (PikachuVoiceMp3).pause();
      new Audio (gameboy_battleThemeMp3).pause();
      new Audio (victoryThemezzMp3).pause();
      new Audio (ScytherVoiceWav).pause();
      new Audio (SquirtleVoicezzzMp3).pause();

    }


    pauseAllSounds();



  }







      


 







  //referee AKA judgement calls:


    const pokemonName = ["Charmander","Scyther","Blastoise","Onix","Squirtle","Pikachu"];
    let deadPokemon = []; // NOTE: This is an empty array that will be used later
    let deadPokemonBackup = []; // exact duplicate of deadPokemon array but with a size limit of 6 indexes
    let charmanderDied = false; // default
    let squirtleDied = false; // default
    let pikachuDied = false; // default
    let scytherDied = false; // default
    let blastoiseDied = false; // default
    let onixDied = false; // default
    let charmanderAlive = true; // default
    let squirtleAlive = true; // default
    let pikachuAlive = true; // default
    let scytherAlive = true; // default
    let blastoiseAlive = true; // default
    let onixAlive = true; // default
    let preserveDefaultHP = true; // if this is set to false then preserveHPChanges must be set to true
    let preserveHPChanges = false; // if this is set to true, it will call preserveHpSetting(); however default is false
    let charmanderSelected = false; // default
    let pikachuSelected = false; // default
    let blastoiseSelected = false; // default
    let squirtleSelected = false; // default
    let scytherSelected = false; // default
    let onixSelected = false; // default
    let charmanderCounts = 0; // default
    let pikachuCounts = 0; // default
    let blastoiseCounts = 0; // default
    let squirtleCounts = 0;// default
    let scytherCounts = 0; // default
    let onixCounts = 0; // default
    let battle1Player1 = false; // default
    let battle1Computer = false;// default
    let battle2Player1 = false; // default
    let battle2Computer = false;// default
    let battle3Player1 = false; // default
    let battle3Computer = false;// default


    const blockPlayer1Pokemon = function () {

      //NOTE: if charmander dies then it will be unselected to allow a computer pokemon to be loaded for the next battle

      //if charmander dies and pikachu is selected then scyther is loaded next

      if (pikachuSelected === true && charmanderSelected === false && charmanderDied === true) {

         scytherSelected = true;
         squirtleSelected = false;
         onixSelected = false;

         console.log("(BPP1) scytherSelected: " + scytherSelected);
         console.log("(BPP1) squirtleSelected: " + squirtleSelected);
         console.log("(BPP1) onixSelected: " + onixSelected);

      }

      //if charmander and pikachu dies and blastoise is selected then onix is loaded next

      if (blastoiseSelected === true && charmanderSelected === false && charmanderDied === true && pikachuSelected === false && pikachuDied === true) {

        scytherSelected = false;
        squirtleSelected = false;
        onixSelected = true;

        console.log("(BPP2) scytherSelected: " + scytherSelected);
        console.log("(BPP2) squirtleSelected: " + squirtleSelected);
        console.log("(BPP2) onixSelected: " + onixSelected);

      }

      //if charmander dies and blastoise is selected then onix is loaded next

      if (blastoiseSelected === true && charmanderSelected === false && charmanderDied === true) {

        scytherSelected = false;
        squirtleSelected = false;
        onixSelected = true;

        console.log("(BPP3) scytherSelected: " + scytherSelected);
        console.log("(BPP3) squirtleSelected: " + squirtleSelected);
        console.log("(BPP3) onixSelected: " + onixSelected);

      }

      //if charmander and blastoise dies and pikachu is selected then scyther is loaded next

      if (pikachuSelected === true && charmanderSelected === false && charmanderDied === true && blastoiseSelected === false && blastoiseDied === true) {

        scytherSelected = true;
        squirtleSelected = false;
        onixSelected = false;

        console.log("(BPP4) scytherSelected: " + scytherSelected);
        console.log("(BPP4) squirtleSelected: " + squirtleSelected);
        console.log("(BPP4) onixSelected: " + onixSelected);

      }


    }//end of blockPlayer1Pokemon


    const blockPlayer1Pokemon2 = function () {


    //NOTE: if pikachu dies then it will be unselected to allow a computer pokemon to be loaded for the next battle

    //if pikachu dies and blastoise is selected then onix is loaded next

    if (blastoiseSelected === true && pikachuSelected === false && pikachuDied === true) {

    scytherSelected = false;
    squirtleSelected = false;
    onixSelected = true;


    console.log("(BPP5) scytherSelected: " + scytherSelected);
    console.log("(BPP6) squirtleSelected: " + squirtleSelected);
    console.log("(BPP7) onixSelected: " + onixSelected);

    }

    //if pikachu dies and charmander is selected then squirtle is loaded next

    if (charmanderSelected === true && pikachuSelected === false && pikachuDied === true) {

    scytherSelected = false;
    squirtleSelected = true;
    onixSelected = false;


    console.log("(BPP8) scytherSelected: " + scytherSelected);
    console.log("(BPP9) squirtleSelected: " + squirtleSelected);
    console.log("(BPP10) onixSelected: " + onixSelected);

    }

    //if pikachu and blastoise dies and charmander is selected then squirtle is loaded next

    if (charmanderSelected === true && pikachuSelected === false && pikachuDied === true && blastoiseSelected === false && blastoiseDied === true) {

    scytherSelected = false;
    squirtleSelected = true;
    onixSelected = false;

    //updateHealthInformation
    updateHealthInformation();

    console.log("(BPP11) scytherSelected: " + scytherSelected);
    console.log("(BPP12) squirtleSelected: " + squirtleSelected);
    console.log("(BPP13) onixSelected: " + onixSelected);

    }




    }//end of blockPlayer1Pokemon2


    const blockPlayer1Pokemon3 = function () {

      //NOTE: if blastoise dies then it will be unselected to allow a computer pokemon to be loaded for the next battle

      //if blastoise dies and charmander is selected than squirtle is loaded next

      if (charmanderSelected === true && blastoiseSelected === false && blastoiseDied === true) {

      scytherSelected = false;
      squirtleSelected = true;
      onixSelected = false;


      console.log("(BPP14) scytherSelected: " + scytherSelected);
      console.log("(BPP15) squirtleSelected: " + squirtleSelected);
      console.log("(BPP16) onixSelected: " + onixSelected);

      }

      //if blastoise dies and pikachu is selected then scyther is loaded next

      if (pikachuSelected === true && blastoiseSelected === false && blastoiseDied === true) {

      scytherSelected = true;
      squirtleSelected = false;
      onixSelected = false;


      console.log("(BPP17) scytherSelected: " + scytherSelected);
      console.log("(BPP18) squirtleSelected: " + squirtleSelected);
      console.log("(BPP19) onixSelected: " + onixSelected);

      }

      //if charmander and pikachu dies and blastoise is selected then onix is loaded next

      if (blastoiseSelected === true && charmanderSelected === false && charmanderDied === true && pikachuSelected === false && pikachuDied === true) {

      scytherSelected = false;
      squirtleSelected = false;
      onixSelected = true;

      console.log("(BPP20) scytherSelected: " + scytherSelected);
      console.log("(BPP21) squirtleSelected: " + squirtleSelected);
      console.log("(BPP22) onixSelected: " + onixSelected);

      }


    }//end of blockPlayer1Pokemon3




    const blockComputerPokemon = function () {

      //A computer pokemon that died in a previous match, can't be loaded or re-selected when player selects Charmander, Blastoise, or Pikachu
      //This function is ideal for Charmander because there is a scenario when onix is the last computer pokemon alive

      if (squirtleDied === true && charmanderSelected === true) {

          squirtleSelected = false;

      }

      if (scytherDied === true && charmanderSelected === true) {

         scytherSelected = false;

      }


      console.log("(8) squirtleSelected: " + squirtleSelected);
      console.log("(8.2) scytherSelected: " + scytherSelected);

    }//end of blockComputerPokemon

    const blockComputerPokemon2 = function () {

     //A computer pokemon that died in a previous match, can't be loaded or re-selected when player selects Charmander, Blastoise, or Pikachu
     //This function is ideal for Pikachu because there is a scenario when onix is the last computer pokemon alive

     if (pikachuSelected === true && squirtleDied === true  || pikachuSelected === true && charmanderDied === true) {

         squirtleSelected = false;

     }


     if (pikachuSelected === true && squirtleDied === true  || pikachuSelected === true && charmanderDied === true) {

         scytherSelected = true;

      }


     if (scytherDied === true && pikachuSelected === true) {

         scytherSelected = false;

     }

     console.log("(9) squirtleSelected: " + squirtleSelected);
     console.log("(9.2) scytherSelected: " + scytherSelected);



     if (pikachuSelected === true && pikachuDied === false && scytherDied === true) {

       //default action

       //conditional ternary determines if scyther is dead then it can't be selected
       (pikachuSelected === true && scytherDied === true) ? scytherSelected = false : scytherAlive = true;

       //conditional ternary determines if scyther is dead and sets squirtle as the selected pokemon if true *primary logic 2 of 3*
       (pikachuSelected === true && scytherDied === true) ? squirtleSelected = true : squirtleSelected = false;

       //conditional ternary determines if squirtle is dead then it can't be selected *recently added*
       (pikachuSelected === true &&  squirtleDied === true) ? squirtleSelected = false : squirtleAlive = true;

       //enables onix if scyther and squirtle are NOT selected or died
       (pikachuSelected === true &&  squirtleSelected === false && scytherSelected === false) ? onixSelected = true : onixSelected = false;

       console.log("(9.3) scytherSelected: " + scytherSelected);

       console.log("(9.4) squirtleSelected: " + squirtleSelected);



     }


    }//end of blockComputerPokemon2

    const blockComputerPokemon3 = function () {

      //A computer pokemon that died in a previous match, can't be loaded or re-selected when player selects Charmander, Blastoise, or Pikachu
      //This function is ideal for Blastoise because there is a scenario when scyther is the last computer pokemon alive

      if (onixDied === true && blastoiseSelected === true) {

        onixSelected = false;

      }

      if (squirtleDied === true && blastoiseSelected === true) {

        squirtleSelected = false;

      }else if (scytherDied === true && blastoiseSelected === true) {

        scytherSelected = false;
        onixSelected = true;

      }

      console.log("(10) squirtleSelected: " + squirtleSelected);
      console.log("(10.2) scytherSelected: " + scytherSelected);
      console.log("(10.3) onixSelected: " + onixSelected);


      //conditional ternary determines if pikachu died and disables scyther so that onix will be the next pokemon loaded  1 of 2
      (charmanderDied === true && pikachuDied === true && blastoiseSelected === true) ? scytherSelected = false : console.log(scytherSelected);
      (charmanderDied === true && pikachuDied === true && blastoiseSelected === true) ? squirtleSelected = false : console.log(squirtleSelected);
      (charmanderDied === true && pikachuDied === true && blastoiseSelected === true) ? onixSelected = true : console.log(onixSelected);


      console.log("(10.4) onixSelected: " + onixSelected);
      console.log("(10.5) squirtleSelected: " + squirtleSelected);

    }//end of blockComputerPokemon3




    const loadUpdatedMenu = function () {

      console.log("loadUpdatedMenu started");

      //set 1 of 3

      //attack/defense menu changes depending on which pokemon player1 is fighting against

      if (charmanderSelected === true && squirtleSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Fire Blaster (-10HP)");
        document.getElementById("attackB").innerHTML = ("Blaze (-4HP)");
        document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-10HP)");
        document.getElementById("defenseB").innerHTML = ("Smokescreen (-25HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (charmanderSelected === true && scytherSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Fire Blaster (-25HP)");
        document.getElementById("attackB").innerHTML = ("Blaze (-20HP)");
        document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("Smokescreen (-10HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (charmanderSelected === true && onixSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Fire Blaster (-5HP)");
        document.getElementById("attackB").innerHTML = ("Blaze (-4HP)");
        document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("Smokescreen (-12HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }//end of multiple if statements

      //2 of 2

      if (pikachuSelected === true && scytherSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-5HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-10HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-15)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-25HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (pikachuSelected === true && squirtleSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-25HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-10HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-5HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (pikachuSelected === true && onixSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-5HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-15HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-10)");

        document.getElementById("defenseA").innerHTML = ("Growl (-5HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }//end of multiple if statements


      //3 of 3

      if (blastoiseSelected === true && onixSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Aqua Jet (-25HP)");
        document.getElementById("attackB").innerHTML = ("Bubble (-10HP)");
        document.getElementById("attackC").innerHTML = ("Hydro Pump (-45)");

        document.getElementById("defenseA").innerHTML = ("Protect (-20HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (blastoiseSelected === true && squirtleSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Aqua Jet (-5HP)");
        document.getElementById("attackB").innerHTML = ("Bubble (-5HP)");
        document.getElementById("attackC").innerHTML = ("Hydro Pump (-11)");

        document.getElementById("defenseA").innerHTML = ("Protect (-15HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-18HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (blastoiseSelected === true && scytherSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Aqua Jet (-5HP)");
        document.getElementById("attackB").innerHTML = ("Bubble (-4HP)");
        document.getElementById("attackC").innerHTML = ("Hydro Pump (-10)");

        document.getElementById("defenseA").innerHTML = ("Protect (-20HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }//end of multiple if statements






    }//end of loadUpdatedMenu

    const updateHealthInformation = function () {

      console.log("updateHealthInformation started");

      //This function was copied from pokemonLoops -- it's responsible for updating the health information when the player selects a pokemon -- but this function needs to be called again
      //whenever changes are made to player1 or computer pokemon

      //varibles

      let updateCharmanderHP = 0;
      let updatePikachuHP = 0;
      let updateBlastoiseHP = 0;
      let updateSquirtleHP = 0;
      let updateScytherHP = 0;
      let updateOnixHP = 0;
      let charmanderHP8 = charmanderHealthBar.reduce(PokemonHPReduced);
      let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);
      let pikachuHP15 = pikachuHealthBar.reduce(PokemonHPReduced);
      let pikachuSpeedBar = pikSpeedProgressBar.reduce(PokemonHPReduced);
      let blastoiseHP16 = blastoiseHealthBar.reduce(PokemonHPReduced);
      let blastoiseSpeedBar = blaSpeedProgressBar.reduce(PokemonHPReduced);
      let squirtleHP8 = squirtleHealthBar.reduce(PokemonHPReduced);
      let squirtleSpeedBar2 =  squSpeedProgressBar.reduce(PokemonSpeedReduced);
      let scytherHP9 = scytherHealthBar.reduce(PokemonHPReduced);
      let scytherSpeedBar = scySpeedProgressBar.reduce(PokemonSpeedReduced);
      let onixHP9 = onixHealthBar.reduce(PokemonHPReduced);
      let onixSpeedBar = onixSpeedProgressBar.reduce(PokemonHPReduced);





      if (charmanderHP8 >= 1 && charmanderSelected === true) {

      //hp
      updateCharmanderHP = charmanderHP8;
      document.querySelector(".player1HP").style.width = updateCharmanderHP +   "%";
      (charmanderHP8 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
      (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restedPikachu === true && charmanderSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restedBlastoise === true && charmanderSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";

      }



      if (pikachuHP15 >= 1 && pikachuSelected === true) {


      //hp
      updatePikachuHP = pikachuHP15;
      document.querySelector(".player1HP").style.width = updatePikachuHP +   "%";
      (pikachuHP15 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = pikachuSpeedBar  +   "%";
      (pikachuSpeedBar >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restedCharmander === true && pikachuSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restedBlastoise === true && pikachuSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";

      }


      if (blastoiseHP16 >= 1 && blastoiseSelected === true) {


      //hp
      updateBlastoiseHP = blastoiseHP16;
      document.querySelector(".player1HP").style.width = updateBlastoiseHP +   "%";
      (blastoiseHP16 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar +   "%";
      (blastoiseSpeedBar >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restedCharmander === true && blastoiseDied === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restedPikachu === true && blastoiseDied === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";

      }




      if (squirtleHP8 >=1 && squirtleSelected === true) {


        //hp
        updateSquirtleHP = squirtleHP8;
        document.querySelector(".cpuHP").style.width = updateSquirtleHP +   "%";
        (squirtleHP8 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar2  +   "%";
        (squirtleSpeedBar2 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


      }





      if (onixHP9 >=1 && onixSelected === true) {


        //hp
        updateOnixHP = onixHP9;
        document.querySelector(".cpuHP").style.width = updateOnixHP +   "%";
        (onixHP9 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = onixSpeedBar  +   "%";
        (onixSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      }




      if (scytherHP9 >=1 && scytherSelected === true) {


        //hp
        updateScytherHP = scytherHP9;
        document.querySelector(".cpuHP").style.width = updateScytherHP +   "%";
        (scytherHP9 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = scytherSpeedBar  +   "%";
        (scytherSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      }





    }//end of updateHealthInformation






    const checkComputerSpeedbar = function () {

      console.log("checkComputerSpeedbar started");

      //this function compliments increaseComputerHP and will check to see if the speedbar was decreased or not and take appropriate action to update it based on certian conditions

      // variable declartions

      let hpRestore2 = 0;
      let speedReduced2 = 0;
      let squirtleHP5 = squirtleHealthBar.reduce(PokemonHPReduced);
      let scytherHP8 = scytherHealthBar.reduce(PokemonHPReduced);
      let onixHP12 = onixHealthBar.reduce(PokemonHPReduced);
      let squirtleSpeedBar =  squSpeedProgressBar.reduce(PokemonSpeedReduced);
      let scytherSpeedBar = scySpeedProgressBar.reduce(PokemonSpeedReduced);
      let onixSpeedBar = onixSpeedProgressBar.reduce(PokemonSpeedReduced);
      let computerLowSpeedIndicator2 = document.querySelector('.cpuSpeed');

      if (squirtleSelected === true && squirtleSpeedDecreased === true && squirtleSpeedBar <= 0 || squirtleSelected === true && squirtleSpeedDecreased === true && squirtleSpeedBar < 0) {


        //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 1;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#FD0202";//red

        //change squirtleSpeedDecreased to false
        squirtleSpeedDecreased = false;

        console.log("(CCS 1) squirtleSpeedDecreased: " + squirtleSpeedDecreased);


      }else if (squirtleSelected === true && squirtleSpeedDecreased === true && squirtleSpeedBar <= 50 || squirtleSelected === true && squirtleSpeedDecreased === true && squirtleSpeedBar < 50) {


        //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 50;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#FD0202";//red

        //change squirtleSpeedDecreased to false
        squirtleSpeedDecreased = false;

        console.log("(CCS 2) squirtleSpeedDecreased: " + squirtleSpeedDecreased);

      }else if (squirtleSelected === true && squirtleSpeedDecreased === false && squirtleSpeedBar <= 100 || squirtleSelected === true && squirtleSpeedDecreased === false && squirtleSpeedBar === 100) {


        //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 100;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#A6EDED";//blue

        //change squirtleSpeedDecreased to false
        squirtleSpeedDecreased = false;

        console.log("(CCS 3) squirtleSpeedDecreased: " + squirtleSpeedDecreased);

      }//end of if statement for squirtleSpeedDecreased




      if (scytherSelected === true && scytherSpeedDecreased === true && scytherSpeedBar <= 0 || scytherSelected === true && scytherSpeedDecreased === true && scytherSpeedBar < 0) {


       //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 1;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#FD0202";//red

        //change scytherSpeedDecreased to false
        scytherSpeedDecreased = false;

        console.log("(CCS 1)scytherSpeedDecreased: " + scytherSpeedDecreased);


      }else if (scytherSelected === true && scytherSpeedDecreased === true && scytherSpeedBar <= 50 || scytherSelected === true && scytherSpeedDecreased === true && scytherSpeedBar < 50) {


       //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 50;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#FD0202";//red

        //change scytherSpeedDecreased to false
        scytherSpeedDecreased = false;

        console.log("(CCS 2)scytherSpeedDecreased: " + scytherSpeedDecreased);

      }else if (scytherSelected === true && scytherSpeedDecreased === false && scytherSpeedBar <= 100 || scytherSelected === true && scytherSpeedDecreased === false && scytherSpeedBar === 100) {


       //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 100;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#A6EDED";//blue

        //change scytherSpeedDecreased to false
        scytherSpeedDecreased = false;

        console.log("(CCS 3)scytherSpeedDecreased: " + scytherSpeedDecreased);

      }//end of if statement for scytherSpeedDecreased





      if (onixSelected === true && onixSpeedDecreased === true && onixSpeedBar <= 0 || onixSelected === true && onixSpeedDecreased === true && onixSpeedBar < 0) {


        //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 1;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#FD0202";//red


        //change onixSpeedDecreased to false
        onixSpeedDecreased = false;

        console.log("(CCS 1) onixSpeedDecreased: " + onixSpeedDecreased);



      }else if (onixSelected === true && onixSpeedDecreased === true && onixSpeedBar <= 50 || onixSelected === true && onixSpeedDecreased === true && onixSpeedBar < 50) {


        //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 50;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#FD0202";//red


        //change onixSpeedDecreased to false
        onixSpeedDecreased = false;

        console.log("(CCS 2) onixSpeedDecreased: " + onixSpeedDecreased);



      }else if (onixSelected === true && onixSpeedDecreased === false && onixSpeedBar <= 100 || onixSelected === true && onixSpeedDecreased === false && onixSpeedBar === 100) {

        //increase computer health and reduce computer speed to 50 HP

        speedReduced2 = 100;
        document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";
        computerLowSpeedIndicator2.style.backgroundColor = "#A6EDED";//blue


        //change onixSpeedDecreased to false
        onixSpeedDecreased = false;

        console.log("(CCS 3) onixSpeedDecreased: " + onixSpeedDecreased);

      }//end of if statement for onixSpeedDecreasedS






}//end of checkComputerSpeedbar





const disableDeadPokemon = function () {

    //NOTE: This function only disables player1 pokemon when they die. Computer pokemon are disabled using charmander, pikachu, and blastoisePrimer functions


    console.log("disableDeadPokemon was activated.");

    //invalid sound starts when player tries to select dead pokemon


    (charmanderDied === true && charmanderSelected === true) ? playInvalidAction() : charmanderAlive = true;

    (charmanderDied === true && charmanderSelected === true) ? setStatusProgress3("Charmander died and can no longer be selected.") :  console.log("(2) charmanderAlive: " + charmanderAlive);

    (pikachuDied === true && pikachuSelected === true) ? playInvalidAction() : pikachuAlive = true;

    (pikachuDied === true && pikachuSelected === true) ? setStatusProgress3("Pikachu died and can no longer be selected.") : console.log("(2) pikachuAlive: " + pikachuAlive);

    (blastoiseDied === true && blastoiseSelected === true) ? playInvalidAction() : blastoiseAlive = true;

    (blastoiseDied === true && blastoiseSelected === true) ? setStatusProgress3("Blastoise died and can no longer be selected.") : console.log("(2) blastoiseAlive: " + blastoiseAlive);




    //disable dead pokemon starts here


      if (charmanderDied === true && squirtleDied === false) {


        //change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions

        //below is the original if statment


        document.getElementById("p1PokemonName").innerHTML = "";
        document.getElementById("Charmander_sel").style.color = "#C91212";
        document.getElementById("Charmander_sel").removeEventListener("click", chrPokeImage);
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



      if (charmanderDied === true && scytherDied === false) {


        //change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions

        //below is the original if statment


        document.getElementById("p1PokemonName").innerHTML = "";
        document.getElementById("Charmander_sel").style.color = "#C91212";
        document.getElementById("Charmander_sel").removeEventListener("click", chrPokeImage);
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


      if (charmanderDied === true && onixDied === false) {


        //change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions

        //below is the original if statment


        document.getElementById("p1PokemonName").innerHTML = "";
        document.getElementById("Charmander_sel").style.color = "#C91212";
        document.getElementById("Charmander_sel").removeEventListener("click", chrPokeImage);
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

        // disable pikachu
        if (pikachuDied === true && scytherDied === false) {



          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Pikachu_sel").style.color = "#C91212";
          document.getElementById("Pikachu_sel").removeEventListener("click", pikPokeImage);
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

        }//end of 2nd if statement 1 of 3

        if (pikachuDied === true && squirtleDied === false) {



          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Pikachu_sel").style.color = "#C91212";
          document.getElementById("Pikachu_sel").removeEventListener("click", pikPokeImage);
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

        }//end of 2nd if statement 2 of 3

        if (pikachuDied === true && onixDied === false) {



          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Pikachu_sel").style.color = "#C91212";
          document.getElementById("Pikachu_sel").removeEventListener("click", pikPokeImage);
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

        }//end of 2nd if statement 3 of 3

        //disable blastoise
        if (blastoiseDied === true && onixDied === false) {




          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Blastoise_sel").style.color = "#C91212";
          document.getElementById("Blastoise_sel").removeEventListener("click", blaPokeImage);
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

        }//end of 3rd if statement 1 of 3


        if (blastoiseDied === true && squirtleDied === false) {




          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Blastoise_sel").style.color = "#C91212";
          document.getElementById("Blastoise_sel").removeEventListener("click", blaPokeImage);
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

        }//end of 3rd if statement 2 of 3


        if (blastoiseDied === true && scytherDied === false) {




          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Blastoise_sel").style.color = "#C91212";
          document.getElementById("Blastoise_sel").removeEventListener("click", blaPokeImage);
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

        }//end of 3rd if statement 3 of 3








        //what happens when player1 wins

        if (squirtleDied === true && charmanderDied === false ||
            squirtleDied === true && pikachuDied === false ||
            squirtleDied === true && blastoiseDied === false) {



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

         //mark computer as dead and un-selected starting here
         squirtleAlive = false;
         squirtleSelected = false;

         console.log("(H1) squirtleAlive " + squirtleAlive);
         console.log("(H1) squirtleSelected " + squirtleSelected);


         //disable dead computer pokemon
         charmanderPrimer();






        }//end of if statement


        if (scytherDied === true && pikachuDied === false ||
            scytherDied === true && charmanderDied === false ||
            scytherDied === true && blastoiseDied === false) {


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

           //mark computer as dead and un-selected starting here
           scytherAlive = false;
           scytherSelected = false;

           console.log("(H2) scytherAlive " + scytherAlive);
           console.log("(H2) scytherSelected " + scytherSelected);


           //disable dead computer pokemon
           pikachuPrimer();



         }//end of if statement


         if (onixDied === true && blastoiseDied === false ||
             onixDied === true && charmanderDied === false ||
             onixDied === true && pikachuDied === false) {


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

           //mark computer as dead and un-selected starting here
           onixAlive = false;
           onixSelected = false;

           console.log("(H3) onixAlive " + onixAlive);
           console.log("(H3) onixSelected " + onixSelected);


           //disable dead computer pokemon
           blastoisePrimer();



          }//end of if statement











}// end of disableDeadPokemon




const charmanderPrimer = function () {

  console.log("charmanderPrimer started");

  //This function disables computer pokemon that died in a previous match so that they can't be re-selected when player1 selects a different pokemon. Player1 pokemon are disabled using the disableDeadPokemon function
  //This function is also responsible for selecting a new computer pokemon to replace the one that died.

  //what happens when charmander is alive -- it loads squirle, scyther, or onix

  if (charmanderSelected === true && charmanderDied === false && squirtleDied === true) {

    //default action



    //conditional ternary determines if squirtle is dead then it can't be selected
    (charmanderSelected === true &&  squirtleDied === true) ? squirtleSelected = false : squirtleAlive = true;

    //conditional ternary determines if squirtle is dead and sets scyther as the selected pokemon if true *primary logic 1 of 3*
    (charmanderSelected === true && squirtleDied === true) ? scytherSelected = true : scytherSelected = false;

    //conditional ternary determines if scyther is dead then it can't be selected *recently added*
    (charmanderSelected === true &&  scytherDied === true) ? scytherSelected = false : scytherAlive = true;

    //enables onix if squirtle and scyther are NOT selected or died
    (charmanderSelected === true && squirtleSelected === false && scytherSelected === false) ? onixSelected = true : onixSelected = false;

    console.log("(1) squirtleSelected: " + squirtleSelected);

    console.log("(1) scytherSelected: " + scytherSelected);



  }


   if (charmanderSelected === true && charmanderDied === false && scytherSelected === true) {





      //conditional ternary determines if scyther and squirtle are dead and sets onix as the the selected pokemon if true
      (charmanderSelected === true && scytherDied === true && squirtleDied === true) ? onixSelected = true : onixSelected = false;

      console.log("(2) onixSelected: " + onixSelected);


      //Update attack/defense menu for player1
      loadUpdatedMenu();

      //loads scyther or onix if squirtle dies
      loadScytherOrOnix();

      //updateHealthInformation
      updateHealthInformation();





    }

    if (charmanderSelected === true && charmanderDied === false && onixSelected === true) {



      //conditional ternary determines if onix is dead then it can't be selected
      (charmanderSelected === true && onixDied === true) ? onixSelected = false : onixAlive = true;

      console.log("(3) onixSelected: " + onixSelected);



      //Update attack/defense menu for player1
      loadUpdatedMenu();

      //loads scyther or onix if squirtle dies
      loadScytherOrOnix();

      //updateHealthInformation
      updateHealthInformation();






    }//what happens when charmander is alive -- it loads squirle, scyther, or onix


}//end of charmanderPrimer




const pikachuPrimer = function () {

  console.log("pikachuPrimer started");

  //This function disables computer pokemon that died in a previous match so that they can't be re-selected when player1 selects a different pokemon. Player1 pokemon are disabled using the disableDeadPokemon function
  //This function is also responsible for selecting a new computer pokemon to replace the one that died.


  //what happens when pikachu is alive -- it loads scyther, squirtle, or onix


  (pikachuSelected === true && squirtleDied === true  || pikachuSelected === true && charmanderDied === true) ?  squirtleSelected = false : console.log(squirtleSelected);

  if (pikachuSelected === true && squirtleDied === true  || pikachuSelected === true && charmanderDied === true) {

  scytherSelected = true;

  }



  if (scytherDied === true && pikachuSelected === true) {

    scytherSelected = false;

  }


  console.log("(1.3) squirtleSelected: " + squirtleSelected);
  console.log("(2.3) scytherSelected: " + scytherSelected);



  if (pikachuSelected === true && pikachuDied === false && scytherDied === true) {

  //default action

  //conditional ternary determines if scyther is dead then it can't be selected
  (pikachuSelected === true && scytherDied === true) ? scytherSelected = false : scytherAlive = true;

  //conditional ternary determines if scyther is dead and sets squirtle as the selected pokemon if true *primary logic 2 of 3*
  (pikachuSelected === true && scytherDied === true) ? squirtleSelected = true : squirtleSelected = false;

  //conditional ternary determines if squirtle is dead then it can't be selected *recently added*
  (pikachuSelected === true &&  squirtleDied === true) ? squirtleSelected = false : squirtleAlive = true;

  //enables onix if scyther and squirtle are NOT selected or died
  (pikachuSelected === true &&  squirtleSelected === false && scytherSelected === false) ? onixSelected = true : onixSelected = false;

  console.log("(3.3) scytherSelected: " + scytherSelected);

  console.log("(3.3) squirtleSelected: " + squirtleSelected);



  }

  if (pikachuSelected === true && pikachuDied === false && squirtleSelected === true) {


  //conditional ternary determines if scyther and squirtle are dead and sets onix as the the selected pokemon if true
  (pikachuSelected === true && scytherDied === true && squirtleDied === true) ? onixSelected = true : onixSelected = false;

  console.log("(3.4) onixSelected: " + onixSelected);



  //Update attack/defense menu for player1
  loadUpdatedMenu();

  //loads squirtle or onix if scyther dies
  loadSquirtleOrOnix();

  //updateHealthInformation
  updateHealthInformation();


  }

  if (pikachuSelected === true && pikachuDied === false && onixSelected === true) {



  //conditional ternary determines if onix is dead then it can't be selected
  (pikachuSelected === true && onixDied === true) ? onixSelected = false : onixAlive = true;

  console.log("(3.5) onixSelected: " + onixSelected);



  //Update attack/defense menu for player1
  loadUpdatedMenu();

  //loads squirtle or onix if scyther dies
  loadSquirtleOrOnix();

  //updateHealthInformation
  updateHealthInformation();





    }//what happens when pikachu is alive -- it loads scyther, squirtle, or onix


}//end of pikachuPrimer



const blastoisePrimer = function () {

  console.log("blastoisePrimer started");

  //This function disables computer pokemon that died in a previous match so that they can't be re-selected when player1 selects a different pokemon. Player1 pokemon are disabled using the disableDeadPokemon function
  //This function is also responsible for selecting a new computer pokemon to replace the one that died.

  //what happens when blastoise is alive -- it loads onix, squirtle, or scyther

  if (blastoiseSelected === true && blastoiseDied === false && onixDied === true) {

    //default action

    //conditional ternary determines if onix is dead then it can't be selected
    (blastoiseSelected === true && onixDied === true) ? onixSelected = false : onixAlive = true;

    //conditional ternary determines if onix is dead and sets squirtle as the selected pokemon if true *primary logic 3 of 3*
    (blastoiseSelected === true && onixDied === true) ? squirtleSelected = true : squirtleSelected = false;

    //conditional ternary determines if squirtle is dead then it can't be selected *recently added*
    (blastoiseSelected === true &&  squirtleDied === true) ? squirtleSelected = false : squirtleAlive = true;

    //enables scyther if squirtle or onix are NOT selected or died
    (blastoiseSelected === true &&  squirtleSelected === false && onixSelected === false) ? scytherSelected = true : scytherSelected = false;


    console.log("(1.3) onixSelected: " + onixSelected);

    console.log("(1.3) squirtleSelected: " + squirtleSelected);



  }

  if (blastoiseSelected === true && blastoiseDied === false && squirtleSelected === true) {



    //conditional ternary determines if onix and squirtle are dead and sets scyther as the the selected pokemon if true
    (blastoiseSelected === true && onixDied === true && squirtleDied === true) ? scytherSelected = true : scytherSelected = false;

    console.log("(2.3) scytherSelected: " + scytherSelected);


    //Update attack/defense menu for player1
    loadUpdatedMenu();

    //loads squirtle or scyther if onix dies
    loadsquirtleOrScyther();

    //updateHealthInformation
    updateHealthInformation();


  }

  if (blastoiseSelected === true && blastoiseDied === false && scytherSelected === true) {




    //conditional ternary determines if scyther is dead then it can't be selected
    (blastoiseSelected === true && scytherDied === true) ? scytherSelected = false : scytherAlive = true;

    console.log("(3.3) scytherSelected: " + scytherSelected);


    //Update attack/defense menu for player1
    loadUpdatedMenu();

    //loads squirtle or scyther if onix dies
    loadsquirtleOrScyther();

    //updateHealthInformation
    updateHealthInformation();



  }//what happens when blastoise is alive -- it loads onix, squirtle, or scyther


  if (blastoiseSelected === true && squirtleDied === true && scytherDied === true) {

    squirtleSelected = false;
    scytherSelected = false;
    onixSelected = true;

    //Update attack/defense menu for player1
    loadUpdatedMenu();

    //updateHealthInformation
    updateHealthInformation();

  }


}//end of blastoisePrimer







const deadPokemonImage = function () {

      //this function informs player of dead pokemon by replacing pokemon with a tombstone image -- it has similar logic to the informWinner function


      //variable declartions
      let charmanderHP3 = charmanderHealthBar.reduce(PokemonHPReduced);
      let squirtleHP3 = squirtleHealthBar.reduce(PokemonHPReduced);
      let pikachuHP4 = pikachuHealthBar.reduce(PokemonHPReduced);
      let scytherHP4 = scytherHealthBar.reduce(PokemonHPReduced);
      let blastoiseHP4 = blastoiseHealthBar.reduce(PokemonHPReduced);
      let onixHP4 = onixHealthBar.reduce(PokemonHPReduced);
      let lastDeadPokemon1 = deadPokemon.pop();


      //victory goes to computer pokemon for rounds 1,2 and 3 part 2 of 2 (1 of 2 is informWinner)

      if (charmanderHP3 <= 0 && squirtleHP3 >= 1 && charmanderSelected === true && squirtleSelected === true ||
          pikachuHP4 <= 0 && squirtleHP3 >= 1  && pikachuSelected === true && squirtleSelected === true ||
          blastoiseHP4 <= 0 && squirtleHP3 >= 1  && blastoiseSelected === true && squirtleSelected === true) {

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
          playSadTromboneSound();


          // Change boolean state so player1 can't make a move
          makeMove[0].computerMove = true;


          setTimeout(function() {

         disableDeadPokemon()

         // give score to computer array
         computerScore.push(1);
         let score2 = computerScore.reduce(PokemonHPReduced);
         console.log("Computer Score: " + score2);

           },3000); // 3 sec wait time for computer to select pokemon






    }else if (pikachuHP4 <= 0 && scytherHP4 >= 1  && pikachuSelected === true && scytherSelected === true ||
              charmanderHP3 <= 0 && scytherHP4 >= 1 && charmanderSelected === true && scytherSelected === true ||
              blastoiseHP4  <= 0 && scytherHP4 >= 1 && blastoiseSelected === true && scytherSelected === true) {



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
                playSadTromboneSound();


                // Change boolean state so player1 can't make a move
                makeMove[0].computerMove = true;


                setTimeout(function() {

               disableDeadPokemon()

               // give score to computer array
               computerScore.push(1);
               let score2 = computerScore.reduce(PokemonHPReduced);
               console.log("Computer Score: " + score2);

                 },3000); // 3 sec wait time for computer to select pokemon






    }else if (blastoiseHP4 <= 0 && onixHP4 >= 1  && blastoiseSelected === true && onixSelected === true ||
              charmanderHP3 <= 0 && onixHP4 >= 1 && charmanderSelected === true && onixSelected === true ||
              pikachuHP4 <= 0 && onixHP4 >= 1  && pikachuSelected === true && onixSelected === true) {



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
                playSadTromboneSound();


                // Change boolean state so player1 can't make a move
                makeMove[0].computerMove = true;


                setTimeout(function() {

               disableDeadPokemon()

               // give score to computer array
               computerScore.push(1);
               let score2 = computerScore.reduce(PokemonHPReduced);
               console.log("Computer Score: " + score2);


                 },3000); // 3 sec wait time for computer to select pokemon







    }//end of multiple if statements






      //victory goes to player 1 pokemon for rounds 1,2, and 3 part 2 of 2 (1 of 2 is informWinner)

      if (charmanderHP3 >= 1 && squirtleHP3 <= 0  && charmanderSelected === true && squirtleSelected === true ||
          pikachuHP4 >= 1 && squirtleHP3 <= 0   && pikachuSelected === true && squirtleSelected === true ||
          blastoiseHP4 >= 1 && squirtleHP3 <= 0   && blastoiseSelected === true && squirtleSelected === true) {

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
        makeMove[0].player1Move = true;



        setTimeout(function(){




        disableDeadPokemon();

       // give score to player1 array
       player1Score.push(1);
       let score1 = player1Score.reduce(PokemonHPReduced);
       console.log("Player1 Score: " + score1);


      },3000); // 3 sec wait time for computer to select pokemon





      }else if (pikachuHP4 >= 1 && scytherHP4 <= 0  && pikachuSelected === true && scytherSelected === true ||
                charmanderHP3 >= 1 && scytherHP4 <= 0  && charmanderSelected === true && scytherSelected === true ||
                blastoiseHP4 >= 1 && scytherHP4 <= 0  && blastoiseSelected === true && scytherSelected === true) {

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
                 makeMove[0].player1Move = true;



                 setTimeout(function() {


                 disableDeadPokemon();

                // give score to player1 array
                player1Score.push(1);
                let score1 = player1Score.reduce(PokemonHPReduced);
                console.log("Player1 Score: " + score1);


              },3000); // 3 sec wait time for computer to select pokemon





      }else if (blastoiseHP4 >= 1 && onixHP4 <= 0  && blastoiseSelected === true && onixSelected === true ||
                charmanderHP3 >= 1 && onixHP4 <= 0  && charmanderSelected === true && onixSelected === true ||
                pikachuHP4 >= 1 && onixHP4 <= 0  && pikachuSelected === true && onixSelected === true) {

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
                 makeMove[0].player1Move = true;



                 setTimeout(function(){


                 disableDeadPokemon();

                // give score to player1 array
                player1Score.push(1);
                let score1 = player1Score.reduce(PokemonHPReduced);
                console.log("Player1 Score: " + score1);

                },3000); // 3 sec wait time for computer to select pokemon



      }//end of multiple if statements






}// end of deadPokemonImage function


const isCharmanderDead = function() {

      console.log("isCharmanderDead was started");

      // new variable declartions to avoid reference error

      let charmanderHP4 = charmanderHealthBar.reduce(PokemonHPReduced);
      let squirtleHP4 = squirtleHealthBar.reduce(PokemonHPReduced);
      let pikachuHP5 = pikachuHealthBar.reduce(PokemonHPReduced);
      let scytherHP5 = scytherHealthBar.reduce(PokemonHPReduced);
      let blastoiseHP5 = blastoiseHealthBar.reduce(PokemonHPReduced);
      let onixHP5 = onixHealthBar.reduce(PokemonHPReduced);


        // charmander vs squirtle battle (default)
        if (charmanderSelected === true && squirtleSelected === true && charmanderHP4  <= 0 && squirtleHP4 >= 1) {

          // approve dead pokemon
          charmanderDied = true;


          //approve that the pokemon can no longer be selected
          pokemonType[0].isSelected = false; // charmander

          //record data to deadPokemon array as well
          deadPokemon.push("Charmander");
          deadPokemonBackup.push("Charmander");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + deadPokemon);
          console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

          //display player1 deadPokemon
          deadPokemonImage();

          //make changes to pokemon indicator icon
          pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          deadPokemon.length = 1;
          deadPokemonBackup.length = 6;




        }

        if (charmanderSelected === true && squirtleSelected === true && charmanderHP4 >= 1 && squirtleHP4  <= 0) {


          // approve dead pokemon
          squirtleDied = true;





          //approve that the pokemon can no longer be selected
          pokemonType[2].isSelected = false; // squirtle

          // record data to deadPokemon array as well
          deadPokemon.push("Squirtle");
          deadPokemonBackup.push("Squirtle");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + deadPokemon);
          console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

          // display computer deadPokemon
          deadPokemonImage();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          deadPokemon.length = 1;
          deadPokemonBackup.length = 6;




        } // end of if statements

        // charmander vs scyther battle
        if (charmanderSelected === true && scytherSelected === true && charmanderHP4  <= 0 && scytherHP5 >= 1) {

          // approve dead pokemon
          charmanderDied = true;





          //record data to deadPokemon array as well
          deadPokemon.push("Charmander");
          deadPokemonBackup.push("Charmander");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + deadPokemon);
          console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

          //display player1 deadPokemon
          deadPokemonImage();

          //make changes to pokemon indicator icon
          pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          deadPokemon.length = 1;
          deadPokemonBackup.length = 6;


        }

         if (charmanderSelected === true && scytherSelected === true && charmanderHP4 >= 1 && scytherHP5  <= 0) {

          // approve dead pokemon
          scytherDied = true;




          //record data to deadPokemon array as well
          deadPokemon.push("Scyther");
          deadPokemonBackup.push("Scyther");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + deadPokemon);
          console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

          //display player1 deadPokemon
          deadPokemonImage();

          //make changes to pokemon indicator icon
          pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          deadPokemon.length = 1;
          deadPokemonBackup.length = 6;


        }




        // charmander vs onix battle
        if (charmanderSelected === true && onixSelected === true && charmanderHP4  <= 0 && onixHP5 >= 1) {

          // approve dead pokemon
          charmanderDied = true;





          //record data to deadPokemon array as well
          deadPokemon.push("Charmander");
          deadPokemonBackup.push("Charmander");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + deadPokemon);
          console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

          //display player1 deadPokemon
          deadPokemonImage();

          //make changes to pokemon indicator icon
          pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          deadPokemon.length = 1;
          deadPokemonBackup.length = 6;


        }

        if (charmanderSelected === true && onixSelected === true && charmanderHP4 >= 1 && onixHP5  <= 0) {

          // approve dead pokemon
          onixDied = true;



          //record data to deadPokemon array as well
          deadPokemon.push("Onix");
          deadPokemonBackup.push("Onix");

          //debugging here. Delete when neccessary
          console.log("Dead pokemon saved in array: " + deadPokemon);
          console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

          //display player1 deadPokemon
          deadPokemonImage();

          //make changes to pokemon indicator icon
          pokemonIndicator();

          // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

          deadPokemon.length = 1;
          deadPokemonBackup.length = 6;


        }


        } // end of isCharmanderDead function






        const isPikachuDead = function() {

  console.log("isPikachuDead was started");

  // new variable declartions to avoid reference error

  let charmanderHP4 = charmanderHealthBar.reduce(PokemonHPReduced);
  let squirtleHP4 = squirtleHealthBar.reduce(PokemonHPReduced);
  let pikachuHP6 = pikachuHealthBar.reduce(PokemonHPReduced);
  let scytherHP6 = scytherHealthBar.reduce(PokemonHPReduced);
  let blastoiseHP6 = blastoiseHealthBar.reduce(PokemonHPReduced);
  let onixHP6 = onixHealthBar.reduce(PokemonHPReduced);



    //pikachu vs scyther (default)
    if (pikachuSelected === true && scytherSelected === true && pikachuHP6 <= 0 && scytherHP6 >= 1) {

      // approve dead pokemon
      pikachuDied = true;
      pikachuAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[2].isSelected = false; // pikachu

      //record data to deadPokemon array as well
      deadPokemon.push("Pikachu");
      deadPokemonBackup.push("Pikachu");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      //display player1 deadPokemon
      deadPokemonImage();

      //make changes to pokemon indicator icon
      pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;


    }

    if (pikachuSelected === true && scytherSelected === true && pikachuHP6 >= 1 && scytherHP6 <= 0) {


      // approve dead pokemon
      scytherDied = true;
      scytherAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[3].isSelected = false; // Scyther

      // record data to deadPokemon array as well
      deadPokemon.push("Scyther");
      deadPokemonBackup.push("Scyther");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      // display computer deadPokemon
      deadPokemonImage();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;



    } // end of if statements



    //pikachu vs squirtle
    if (pikachuSelected === true && squirtleSelected === true && pikachuHP6 <= 0 && squirtleHP4 >= 1) {

      // approve dead pokemon
      pikachuDied = true;
      pikachuAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[2].isSelected = false; // pikachu

      //record data to deadPokemon array as well
      deadPokemon.push("Pikachu");
      deadPokemonBackup.push("Pikachu");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      //display player1 deadPokemon
      deadPokemonImage();

      //make changes to pokemon indicator icon
      pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;


    }

    if (pikachuSelected === true && squirtleSelected === true && pikachuHP6 >= 1 && squirtleHP4 <= 0) {


      // approve dead pokemon
      squirtleDied = true;
      squirtleAlive = false;




      //approve that the pokemon can no longer be selected
      pokemonType[2].isSelected = false; // squirtle

      // record data to deadPokemon array as well
      deadPokemon.push("Squirtle");
      deadPokemonBackup.push("Squirtle");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      // display computer deadPokemon
      deadPokemonImage();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;



    } // end of if statements


    //pikachu vs onix
    if (pikachuSelected === true && onixSelected === true && pikachuHP6 <= 0 && onixHP6 >= 1) {

      // approve dead pokemon
      pikachuDied = true;
      pikachuAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[2].isSelected = false; // pikachu

      //record data to deadPokemon array as well
      deadPokemon.push("Pikachu");
      deadPokemonBackup.push("Pikachu");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      //display player1 deadPokemon
      deadPokemonImage();

      //make changes to pokemon indicator icon
      pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;


    }

    if (pikachuSelected === true && onixSelected === true && pikachuHP6 >= 1 && onixHP6 <= 0) {


      // approve dead pokemon
      onixDied = true;
      onixAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[4].isSelected = false; // onix

      // record data to deadPokemon array as well
      deadPokemon.push("Onix");
      deadPokemonBackup.push("Onix");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      // display computer deadPokemon
      deadPokemonImage();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;



    } // end of if statements



} // end of isPikachuDead function






const isBlastoiseDead = function() {

  console.log("isBlastoiseDead was started");

  // new variable declartions to avoid reference error

  let charmanderHP4 = charmanderHealthBar.reduce(PokemonHPReduced);
  let squirtleHP4 = squirtleHealthBar.reduce(PokemonHPReduced);
  let pikachuHP7 = pikachuHealthBar.reduce(PokemonHPReduced);
  let scytherHP7 = scytherHealthBar.reduce(PokemonHPReduced);
  let blastoiseHP7 = blastoiseHealthBar.reduce(PokemonHPReduced);
  let onixHP7 = onixHealthBar.reduce(PokemonHPReduced);


    //blastoise vs onix  (default)
    if (blastoiseSelected === true && onixSelected === true && blastoiseHP7 <= 0  && onixHP7 >= 1) {

      // approve dead pokemon
      blastoiseDied = true;
      blastoiseAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[1].isSelected = false; // blastoise

      //record data to deadPokemon array as well
      deadPokemon.push("Blastoise");
      deadPokemonBackup.push("Blastoise");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      //display player1 deadPokemon
      deadPokemonImage();

      //make changes to pokemon indicator icon
      pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;


    }

    if (blastoiseSelected === true && onixSelected === true && blastoiseHP7 >= 1 && onixHP7 <= 0) {


      // approve dead pokemon
      onixDied = true;
      onixAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[4].isSelected = false; // onix

      // record data to deadPokemon array as well
      deadPokemon.push("Onix");
      deadPokemonBackup.push("Onix");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      // display computer deadPokemon
      deadPokemonImage();


      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;



    } //end of if statements




    //blastoise vs squirtle
    if (blastoiseSelected === true && squirtleSelected === true && blastoiseHP7 <= 0  && squirtleHP4 >= 1) {

      // approve dead pokemon
      blastoiseDied = true;
      blastoiseAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[1].isSelected = false; // blastoise

      //record data to deadPokemon array as well
      deadPokemon.push("Blastoise");
      deadPokemonBackup.push("Blastoise");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      //display player1 deadPokemon
      deadPokemonImage();

      //make changes to pokemon indicator icon
      pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;


    }

    if (blastoiseSelected === true && squirtleSelected === true && blastoiseHP7 >= 1 && squirtleHP4 <= 0) {


      // approve dead pokemon
      squirtleDied = true;
      squirtleAlive = false;




      //approve that the pokemon can no longer be selected
      pokemonType[2].isSelected = false; // squirtle

      // record data to deadPokemon array as well
      deadPokemon.push("Squirtle");
      deadPokemonBackup.push("Squirtle");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      // display computer deadPokemon
      deadPokemonImage();


      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;



    } //end of if statements




    //blastoise vs scyther
    if (blastoiseSelected === true && scytherSelected === true && blastoiseHP7 <= 0  && scytherHP7 >= 1) {

      // approve dead pokemon
      blastoiseDied = true;
      blastoiseAlive = false;


      //approve that the pokemon can no longer be selected
      pokemonType[1].isSelected = false; // blastoise

      //record data to deadPokemon array as well
      deadPokemon.push("Blastoise");
      deadPokemonBackup.push("Blastoise");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      //display player1 deadPokemon
      deadPokemonImage();

      //make changes to pokemon indicator icon
      pokemonIndicator();

      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;


    }

    if (blastoiseSelected === true && scytherSelected === true && blastoiseHP7 >= 1 && scytherHP7 <= 0) {


      // approve dead pokemon
      scytherDied = true;
      scytherAlive = false;

      //approve that the pokemon can no longer be selected
      pokemonType[3].isSelected = false; // Scyther

      // record data to deadPokemon array as well
      deadPokemon.push("Scyther");
      deadPokemonBackup.push("Scyther");

      //debugging here. Delete when neccessary
      console.log("Dead pokemon saved in array: " + deadPokemon);
      console.log("Dead pokemonBackup array entries: " + deadPokemonBackup);

      // display computer deadPokemon
      deadPokemonImage();


      // removing duplicate entries of dead pokemon from the deadPokemon array by setting a limit.

      deadPokemon.length = 1;
      deadPokemonBackup.length = 6;



    } //end of if statements


} // end of isBlastoiseDead function








const informStatus = function() {

      console.log("InformStatus function was called.");

      //inform pokemon health status when each pokemon have low health

      // varible declartions

      let charmanderHP2 = charmanderHealthBar.reduce(PokemonHPReduced);
      let squirtleHP2 = squirtleHealthBar.reduce(PokemonHPReduced);
      let pikachuHP3 = pikachuHealthBar.reduce(PokemonHPReduced);
      let scytherHP3 = scytherHealthBar.reduce(PokemonHPReduced);
      let blastoiseHP3 = blastoiseHealthBar.reduce(PokemonHPReduced);
      let onixHP3 = onixHealthBar.reduce(PokemonHPReduced);



      //conditional ternary determines when player1 pokemon health is critical and resets statusProgress message when health is above 40
      (charmanderHP2 <= 40 || pikachuHP3 <= 40 ||blastoiseHP3 <= 40) ? document.getElementById("statusProgress").innerHTML= ("Player1 pokemon health is low.") : document.getElementById("statusProgress").innerHTML= ("");


      //This code will run after 2 sec because only 1 message can display at a time for the statusProgress
      setTimeout(function() {

      //conditional ternary determines when computer pokemon health is critical and resets statusProgress message when health is above 40
      (squirtleHP2 <= 40 || scytherHP3 <= 40 || onixHP3 <= 40) ? document.getElementById("statusProgress").innerHTML= ("Computer pokemon health is low.") : document.getElementById("statusProgress").innerHTML= ("");



    }, 2000);






    } // end of informStatus function


    const informWinner = function() {

      console.log("InformWinner function was called.");

      //this function informs the winner of the game. It also keeps track of dead pokemon.

      //variable declartions

      let charmanderHP3 = charmanderHealthBar.reduce(PokemonHPReduced);
      let squirtleHP3 = squirtleHealthBar.reduce(PokemonHPReduced);
      let pikachuHP4 = pikachuHealthBar.reduce(PokemonHPReduced);
      let scytherHP4 = scytherHealthBar.reduce(PokemonHPReduced);
      let blastoiseHP4 = blastoiseHealthBar.reduce(PokemonHPReduced);
      let onixHP4 = onixHealthBar.reduce(PokemonHPReduced);



  //victory goes to computer pokemon for rounds 1,2 and 3 part 1 of 2 (2 of 2 is deadpokemonImage)


  if (charmanderHP3 <= 0 && squirtleHP3 >= 1 && charmanderSelected === true && squirtleSelected === true ||
      pikachuHP4 <= 0 && squirtleHP3 >= 1  && pikachuSelected === true && squirtleSelected === true ||
      blastoiseHP4 <= 0 && squirtleHP3 >= 1  && blastoiseSelected === true && squirtleSelected === true) {

    document.getElementById("statusProgress").innerHTML=(pokemonName[0] + " died. Pick another pokemon to continue the battle.");
    battle1Player1 = false;
    battle1Computer = true;
    console.log("battle1Player1: " + battle1Player1);
    console.log("battle1Computer: " + battle1Computer);
    isCharmanderDead();
    isPikachuDead();
    isBlastoiseDead();

  }else if (pikachuHP4 <= 0 && scytherHP4 >= 1  && pikachuSelected === true && scytherSelected === true ||
            charmanderHP3 <= 0 && scytherHP4 >= 1 && charmanderSelected === true && scytherSelected === true ||
            blastoiseHP4  <= 0 && scytherHP4 >= 1 && blastoiseSelected === true && scytherSelected === true) {

    document.getElementById("statusProgress").innerHTML=(pokemonName[5] + " died. Pick another pokemon to continue the battle.");
    battle2Player1 = false;
    battle2Computer = true;
    console.log("battle2Player1: " + battle2Player1);
    console.log("battle2Computer: " + battle2Computer);
    isCharmanderDead();
    isPikachuDead();
    isBlastoiseDead();

  }else if (blastoiseHP4 <= 0 && onixHP4 >= 1  && blastoiseSelected === true && onixSelected === true ||
            charmanderHP3 <= 0 && onixHP4 >= 1 && charmanderSelected === true && onixSelected === true ||
            pikachuHP4 <= 0 && onixHP4 >= 1  && pikachuSelected === true && onixSelected === true) {

    document.getElementById("statusProgress").innerHTML=(pokemonName[2] +" died. Pick another pokemon to continue the battle.");
    battle3Player1 = false;
    battle3Computer = true;
    console.log("battle3Player1: " + battle3Player1);
    console.log("battle3Computer: " + battle3Computer);
    isCharmanderDead();
    isPikachuDead();
    isBlastoiseDead();

  }//end of multiple if statements




  //victory goes to player 1 pokemon for rounds 1,2, and 3 part 1 of 2 (2 of 2 is deadpokemonImage)

  if (charmanderHP3 >= 1 && squirtleHP3 <= 0  && charmanderSelected === true && squirtleSelected === true ||
      pikachuHP4 >= 1 && squirtleHP3 <= 0   && pikachuSelected === true && squirtleSelected === true ||
      blastoiseHP4 >= 1 && squirtleHP3 <= 0   && blastoiseSelected === true && squirtleSelected === true) {

    document.getElementById("statusProgress3").innerHTML=(pokemonName[0] +" won the match! Please wait for computer to select another pokemon.");
    battle1Computer = false;
    battle1Player1 = true;
    console.log("battle1Player1: " + battle1Player1);
    console.log("battle1Computer: " + battle1Computer);
    isCharmanderDead();
    isPikachuDead();
    isBlastoiseDead();

  }else if (pikachuHP4 >= 1 && scytherHP4 <= 0  && pikachuSelected === true && scytherSelected === true ||
            charmanderHP3 >= 1 && scytherHP4 <= 0  && charmanderSelected === true && scytherSelected === true ||
            blastoiseHP4 >= 1 && scytherHP4 <= 0  && blastoiseSelected === true && scytherSelected === true) {

    document.getElementById("statusProgress3").innerHTML=(pokemonName[5] +" won the match! Please wait for computer to select another pokemon.");
    battle2Computer = false;
    battle2Player1 = true;
    console.log("battle2Player1: " + battle2Player1);
    console.log("battle2Computer: " + battle2Computer);
    isCharmanderDead();
    isPikachuDead();
    isBlastoiseDead();

  }else if (blastoiseHP4 >= 1 && onixHP4 <= 0  && blastoiseSelected === true && onixSelected === true ||
            charmanderHP3 >= 1 && onixHP4 <= 0  && charmanderSelected === true && onixSelected === true ||
            pikachuHP4 >= 1 && onixHP4 <= 0  && pikachuSelected === true && onixSelected === true) {

    document.getElementById("statusProgress3").innerHTML=(pokemonName[2] +" won the match! Please wait for computer to select another pokemon.");
    battle3Computer = false;
    battle3Player1 = true;
    console.log("battle3Player1: " + battle3Player1);
    console.log("battle3Computer: " + battle3Computer);
    isCharmanderDead();
    isPikachuDead();
    isBlastoiseDead();

  }//end of multiple if statements




//if statement below determines how the game is won -- if player1 wins round 1, 2 and 3 -- then player1 is decleared the winner, but if computer wins all 3 rounds then computer wins the game

if (battle1Player1 === true && battle2Player1 === true && battle3Player1 === true) {

      //load victory theme if player1 wins the match
      playCongratulationsTheme();


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

      setStatusProgress3("Click the link below to leave feedback. ");
      document.getElementById("sendLink").innerHTML = "Give feedback";
      document.getElementById("sendLink").href = "https://greenaces.site/pokemonForm.php";
      document.getElementById("sendLink").target = "_blank";



      },3000); // 3 sec wait time for changing statusProgress messages





}else if (battle1Computer === true && battle2Computer === true && battle3Computer === true) {

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





const pokemonLoops = function () {

    //PokemonLoops updates the healthbar when user selects or switches pokemon. There should be at least 2 loops running (one for player1 and for PC pokemon)

    //varibles

    let updateCharmanderHP = 0;
    let updatePikachuHP = 0;
    let updateBlastoiseHP = 0;
    let updateSquirtleHP = 0;
    let updateScytherHP = 0;
    let updateOnixHP = 0;
    let charmanderHP8 = charmanderHealthBar.reduce(PokemonHPReduced);
    let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);
    let pikachuHP15 = pikachuHealthBar.reduce(PokemonHPReduced);
    let pikachuSpeedBar = pikSpeedProgressBar.reduce(PokemonHPReduced);
    let blastoiseHP16 = blastoiseHealthBar.reduce(PokemonHPReduced);
    let blastoiseSpeedBar = blaSpeedProgressBar.reduce(PokemonHPReduced);
    let squirtleHP8 = squirtleHealthBar.reduce(PokemonHPReduced);
    let squirtleSpeedBar2 =  squSpeedProgressBar.reduce(PokemonSpeedReduced);
    let scytherHP9 = scytherHealthBar.reduce(PokemonHPReduced);
    let scytherSpeedBar = scySpeedProgressBar.reduce(PokemonSpeedReduced);
    let onixHP9 = onixHealthBar.reduce(PokemonHPReduced);
    let onixSpeedBar = onixSpeedProgressBar.reduce(PokemonHPReduced);








  for (let i = 0; i < charmanderHealthBar.length; i++) {

    //loop #1 for charmander
    if (charmanderHP8 >= 1 && charmanderSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#1 for charmander started because it was selected.");

      //hp
      updateCharmanderHP = charmanderHP8;
      document.querySelector(".player1HP").style.width = updateCharmanderHP +   "%";
      (charmanderHP8 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
      (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restedPikachu === true && charmanderSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restedBlastoise === true && charmanderSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";

      //conditional ternary determines which pokemon should be loaded next if player1 pokemon dies 1 of 2
      (blastoiseSelected === true && pikachuSelected === false && pikachuDied === true ||
       charmanderSelected === true && pikachuSelected === false && pikachuDied === true ||
       charmanderSelected === true && pikachuSelected === false && pikachuDied === true && blastoiseSelected === false && blastoiseDied === true)
       ? blockPlayer1Pokemon2() : console.log("(BPP-001) blockPlayer1Pokemon2 failed...");

      //conditional ternary determines which pokemon should be loaded next if player1 pokemon dies 2 of 2
      (charmanderSelected === true && blastoiseSelected === false && blastoiseDied === true ||
       pikachuSelected === true && blastoiseSelected === false && blastoiseDied === true ||
       blastoiseSelected === true && charmanderSelected === false && charmanderDied === true && pikachuSelected === false && pikachuDied === true)
        ? blockPlayer1Pokemon3() : console.log("(BPP-002) blockPlayer1Pokemon3 failed...");




      break;

    }


  }//end of for-loop





  //loop #2 for pikachu
  for (let i = 0; i < pikachuHealthBar.length; i++) {


    if (pikachuHP15 >= 1 && pikachuSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#2 for pikachu started because it was selected.");

      //hp
      updatePikachuHP = pikachuHP15;
      document.querySelector(".player1HP").style.width = updatePikachuHP +   "%";
      (pikachuHP15 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = pikachuSpeedBar  +   "%";
      (pikachuSpeedBar >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restedCharmander === true && pikachuSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restedBlastoise === true && pikachuSelected === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";

      //conditional ternary determines which pokemon should be loaded next if player1 pokemon dies 1 of 2
      (pikachuSelected === true && charmanderSelected === false && charmanderDied === true ||
       blastoiseSelected === true && charmanderSelected === false && charmanderDied === true && pikachuSelected === false && pikachuDied === true ||
       blastoiseSelected === true && charmanderSelected === false && charmanderDied === true ||
       pikachuSelected === true && charmanderSelected === false && charmanderDied === true && blastoiseSelected === false && blastoiseDied === true)
        ? blockPlayer1Pokemon() : console.log("(BPP-002) blockPlayer1Pokemon failed...");

      //conditional ternary determines which pokemon should be loaded next if player1 pokemon dies 2 of 2
      (charmanderSelected === true && blastoiseSelected === false && blastoiseDied === true ||
       pikachuSelected === true && blastoiseSelected === false && blastoiseDied === true ||
       blastoiseSelected === true && charmanderSelected === false && charmanderDied === true && pikachuSelected === false && pikachuDied === true)
        ? blockPlayer1Pokemon3() : console.log("(BPP-003) blockPlayer1Pokemon3 failed...");



      break;

    }



  }//end of for-loop2



  //loop #3 for blastoise
  for (let i = 0; i < blastoiseHealthBar.length; i++) {


    if (blastoiseHP16 >= 1 && blastoiseSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#3 for blastoise started because it was selected.");

      //hp
      updateBlastoiseHP = blastoiseHP16;
      document.querySelector(".player1HP").style.width = updateBlastoiseHP +   "%";
      (blastoiseHP16 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar +   "%";
      (blastoiseSpeedBar >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

      //conditional ternary determines if color is red for the rest function and changes it to black -- NOTE: rest function is red when disabled
      (restedCharmander === true && blastoiseDied === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";
      (restedPikachu === true && blastoiseDied === true) ? document.getElementById("defenseC").style.color = "#000000" : document.getElementById("defenseC").style.color = "#000000";

      //conditional ternary determines which pokemon should be loaded next if player1 pokemon dies 1 of 3
      (blastoiseSelected === true && pikachuSelected === false && pikachuDied === true ||
       charmanderSelected === true && pikachuSelected === false && pikachuDied === true ||
       charmanderSelected === true && pikachuSelected === false && pikachuDied === true && blastoiseSelected === false && blastoiseDied === true)
       ? blockPlayer1Pokemon2() : console.log("(BPP-004) blockPlayer1Pokemon2 failed...");

       //conditional ternary determines which pokemon should be loaded next if player1 pokemon dies 2 of 3
       (pikachuSelected === true && charmanderSelected === false && charmanderDied === true ||
        blastoiseSelected === true && charmanderSelected === false && charmanderDied === true && pikachuSelected === false && pikachuDied === true ||
        blastoiseSelected === true && charmanderSelected === false && charmanderDied === true ||
        pikachuSelected === true && charmanderSelected === false && charmanderDied === true && blastoiseSelected === false && blastoiseDied === true)
         ? blockPlayer1Pokemon() : console.log("(BPP-005) blockPlayer1Pokemon failed...");

       //conditional ternary determines which pokemon should be loaded next if player1 pokemon dies 3 of 3
       (charmanderSelected === true && blastoiseSelected === false && blastoiseDied === true ||
        pikachuSelected === true && blastoiseSelected === false && blastoiseDied === true ||
        blastoiseSelected === true && charmanderSelected === false && charmanderDied === true && pikachuSelected === false && pikachuDied === true)
        ? blockPlayer1Pokemon3() : console.log("(BPP-006) blockPlayer1Pokemon3 failed...");



      break;

    }




  }//end of for-loop3



  //loop #4 for squirtle

  for (let i = 0; i < squirtleHealthBar.length; i++) {

    if (squirtleHP8 >=1 && squirtleSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#4 -- for squirtle vs charmander was selected.");

      //hp
      updateSquirtleHP = squirtleHP8;
      document.querySelector(".cpuHP").style.width = updateSquirtleHP +   "%";
      (squirtleHP8 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar2  +   "%";
      (squirtleSpeedBar2 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      //update speedbar for computer pokemon
      checkComputerSpeedbar();



      break;

    }


  }//end of for-loop4



  //loop #5 for scyther

  for (let i = 0; i < scytherHealthBar.length; i++) {

    if (scytherHP9 >=1 && scytherSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#5 -- for scyther vs pikachu was selected.");

      //hp
      updateScytherHP = scytherHP9;
      document.querySelector(".cpuHP").style.width = updateScytherHP +   "%";
      (scytherHP9 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = scytherSpeedBar  +   "%";
      (scytherSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      //update speedbar for computer pokemon
      checkComputerSpeedbar();


      break;

    }


  }//end of for-loop5



  //loop #6 for onix

  for (let i = 0; i < onixHealthBar.length; i++) {

    if (onixHP9 >=1 && onixSelected === true) {

      //debugging here delete if neccessary
      console.log("loop#6 -- for onix vs blastoise was selected.");

      //hp
      updateOnixHP = onixHP9;
      document.querySelector(".cpuHP").style.width = updateOnixHP +   "%";
      (onixHP9 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = onixSpeedBar  +   "%";
      (onixSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


      //update speedbar for computer pokemon
      checkComputerSpeedbar();



      break;

    }



  }//end of for-loop6




}//end of pokemonLoops function









      











    //wait section 


    const [makeMove, setMakeMove] = useState([{ player1Move: false, computerMove: false }]);
           

    const startGameMessage = function () {



      // disable attack and defense menu when computerMove and player1Move is false


      if(makeMove[0].player1Move === false && makeMove[0].computerMove === false) {

        


        useEffect(() => { 

           pokemonIndicator(); // displays pokemon icon image

           setStatusProgress3("Select a pokemon to begin the match!");



        }, []);



      } // end of if statement

    } // end of startGameMessage function 


  


    const  enableMoves = function () {

        //change permissions so that player1 can make a move
        makeMove[0].player1Move = true;
        makeMove[0].computerMove = false;

      setTimeout(function(){

        if (makeMove[0].player1Move === true && makeMove[0].computerMove === false){

          document.getElementById("statusProgress3").innerHTML=("You can now attack or switch pokemon.");

          //add event listener for switch button
          document.getElementById("Charmander_sel").addEventListener("click", chrPokeImage);
          document.getElementById("Blastoise_sel").addEventListener("click", blaPokeImage);
          document.getElementById("Pikachu_sel").addEventListener("click", pikPokeImage);


          // Attack menu for Event listeners

          document.getElementById("attackA").addEventListener("click", attackA);
          document.getElementById("attackB").addEventListener("click", attackB);
          document.getElementById("attackC").addEventListener("click", attackC);

          // Defense menu for Event listeners

          document.getElementById("defenseA").addEventListener("click", defenseA);
          document.getElementById("defenseB").addEventListener("click", defenseB);
          document.getElementById("defenseC").addEventListener("click", defenseC);



          // Change boolean state so computer can make a move
            makeMove[0].player1Move = false;

        }


      }, 5) // 5 ms wait time to enable permissions for player1 to make move


    }; // end of enableMoves function

    const disableMoves = function () {

      //change permissions so that computer can make a move
      makeMove[0].player1Move = false;
      makeMove[0].computerMove = true;

      setTimeout(function(){

          if (makeMove[0].player1Move === false && makeMove[0].computerMove === true){

         
          setStatusProgress3("It's the computers turn to attack or switch pokemon.");

          //remove add event listener for switch button
          document.getElementById("Charmander_sel").removeEventListener("click", chrPokeImage);
          document.getElementById("Blastoise_sel").removeEventListener("click", blaPokeImage);
          document.getElementById("Pikachu_sel").removeEventListener("click", pikPokeImage);


          //remove add event listener for attack & defense buttons

          document.getElementById("attackA").removeEventListener("click", attackA);
          document.getElementById("attackB").removeEventListener("click", attackB);
          document.getElementById("attackC").removeEventListener("click", attackC);
          document.getElementById("defenseA").removeEventListener("click", defenseA);
          document.getElementById("defenseB").removeEventListener("click", defenseB);
          document.getElementById("defenseC").removeEventListener("click", defenseC);


          //Change boolean state so player1 can make a move
          makeMove[0].computerMove = false;

        } // end of else if statement



      },1) // 1 milli secs wait time to disable permissions and allow computer to make a move

    } // end of disableMoves function

















         

            
         

    const player1PokemonChoices = ["Charmander","Blastoise", "Pikachu"];
    const ComputerPokemonChoices = ["Scyther", "Onix","Squirtle"];

    const pokemonIndicator = function() {

        //This function informs the player of the remaining pokemon that is left using pokemon icons

        //shows pokemmon icon without crosses if pokemon are live NOTE: default for all pokemon is true

        //player1 pokemon icons are here
        if (charmanderAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (charmanderAlive === false) ? charmanderAlive = false : charmanderAlive = true;
          //debugging delete when neccessary
          console.log("status check for charmanderAlive: " + charmanderAlive);

          document.getElementById("charmanderIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmanderHeadIcon.png" </img>';
          document.getElementById("charmanderIcon").style.width = 34;
          document.getElementById("charmanderIcon").style.height = 46;

        }

        if (pikachuAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (pikachuAlive === false) ? pikachuAlive = false : pikachuAlive = true;

          //debugging delete when neccessary
          console.log("status check for pikachuAlive: " + pikachuAlive);


          document.getElementById("PikachuIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/PikachuHeadIcon.png" </img>';
          document.getElementById("PikachuIcon").style.width = 34;
          document.getElementById("PikachuIcon").style.height = 46;


        }

        if (blastoiseAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (blastoiseAlive === false) ? blastoiseAlive = false : blastoiseAlive = true;

          //debugging delete when neccessary
          console.log("status check for blastoiseAlive: " + blastoiseAlive);


          document.getElementById("BlastoiseIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/BlastoiseHeadIcon.png" </img>';
          document.getElementById("BlastoiseIcon").style.width = 34;
          document.getElementById("BlastoiseIcon").style.height = 46;


        }



        //computer pokemon icons are here
        if (squirtleAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (squirtleAlive === false) ? squirtleAlive = false : squirtleAlive= true;

          //debugging delete when neccessary
          console.log("status check for squirtleAlive: " + squirtleAlive);

          document.getElementById("squirtleIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/SquirtleHead.png" </img>';
          document.getElementById("squirtleIcon").style.width = 34;
          document.getElementById("squirtleIcon").style.height = 46;

        }


        if (scytherAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (scytherAlive === false) ? scytherAlive = false : scytherAlive = true;

          //debugging delete when neccessary
          console.log("status check for scytherAlive: " + scytherAlive);

          document.getElementById("ScytherIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/scytherHead.png" </img>';
          document.getElementById("ScytherIcon").style.width = 34;
          document.getElementById("ScytherIcon").style.height = 46;

        }

        if (onixAlive === true) {

          //ternary checks if pokemon is dead -- if the pokemon is dead, then no changes are made but if true then pokemon will be marked as alive
          (onixAlive === false) ? onixAlive= false : onixAlive = true;

          //debugging delete when neccessary
          console.log("status check for onixAlive: " + onixAlive);

          document.getElementById("OnixIcon").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/OnixHead.png" </img>';
          document.getElementById("OnixIcon").style.width = 34;
          document.getElementById("OnixIcon").style.height = 46;



        }




        //what happens when player1 loses to computer? All scenarios are listed below:



        if (charmanderDied === true && squirtleDied === false ||
            charmanderDied === true && scytherDied === false ||
            charmanderDied === true && onixDied === false) {

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


          //mark player1 pokemon as un-selected
          charmanderSelected = false;
          console.log("(H1-1) charmanderSelected: " + charmanderSelected);







        }//end of if statement 1 of 3



         if (pikachuDied === true && scytherDied === false ||
             pikachuDied === true && squirtleDied === false ||
             pikachuDied === true && onixDied === false) {

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

          //mark player1 pokemon as un-selected
          pikachuSelected = false;
          console.log("(H1-2) pikachuSelected: " + pikachuSelected);




        }//end of if statement 2 of 3




         if  (blastoiseDied === true && onixDied === false ||
              blastoiseDied === true && squirtleDied === false ||
              blastoiseDied === true && scytherDied === false) {

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

          //mark player1 pokemon as un-selected
          blastoiseSelected = false;
          console.log("(H1-3) blastoiseSelected: " + blastoiseSelected);



        }//end of if statement 3 of 3


















    }// end of pokemonIndicator







    const pokemonType = [{Type: "fire", pokemonName: player1PokemonChoices[0], isSelected: false,    character:"Charmander"},    // charmander
                       {Type: "water", pokemonName:  player1PokemonChoices[1], isSelected: false,   character:"Blastoise"},    // blastoise
                       {Type: "electric", pokemonName: player1PokemonChoices[2], isSelected: false, character:"Pikachu"},     // pikachu
                       {Type: "grass", pokemonName: ComputerPokemonChoices[0], isSelected: false,   character:"Scyther"},    // Scyther
                       {Type: "rock", pokemonName: ComputerPokemonChoices[1], isSelected: false,    character:"Onix"},     // onix
                       {Type: "water", pokemonName: ComputerPokemonChoices[2], isSelected: false,   character:"Squirtle"} //squirtle
                        ];

    const  savedPokemonName = []; // NOTE: empty array of that will be filled with pokemon names to be used later  -- the 1st one will be used to make the game more challenging for player1 -- see squPokeImage2 on line 699 for examples
    const savedPokemonName2 = []; // NOTE: empty array of that will be filled with pokemon names to be used later -- the 2nd one will be used for storing names only







    const chrPokeImage =  function () {

      makeMove[0].player1Move = true;

      //attack/defense menu changes depending on which pokemon player1 is fighting against

      if (charmanderSelected === true && squirtleSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Fire Blaster (-10HP)");
        document.getElementById("attackB").innerHTML = ("Blaze (-4HP)");
        document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-10HP)");
        document.getElementById("defenseB").innerHTML = ("Smokescreen (-30HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (charmanderSelected === true && scytherSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Fire Blaster (-25HP)");
        document.getElementById("attackB").innerHTML = ("Blaze (-20HP)");
        document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("Smokescreen (-10HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (charmanderSelected === true && onixSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Fire Blaster (-5HP)");
        document.getElementById("attackB").innerHTML = ("Blaze (-4HP)");
        document.getElementById("attackC").innerHTML = ("Solar Power (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("Smokescreen (-12HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }//end of multiple if statements




      if(makeMove[0].computerMove === false && makeMove[0].player1Move === true) {

      // set boolean stats to true when user selects a pokemon
      pokemonType[0].isSelected = true;   // charmander
      // set boolean stats to false for non-selected pokemon
      pokemonType[1].isSelected = false; // blastoise
      pokemonType[2].isSelected = false; // pikachu


      // inform player1 of pokemon change
      document.getElementById("statusProgress3").innerHTML =("You seleted " + player1PokemonChoices[0]+ ". " + " Computer will now select a pokemon.");

      // Wait 6 secs and inform player1 that they can begin attacking computer pokemon
      setTimeout(function() {

      document.getElementById("statusProgress3").innerHTML =("You can now attack or switch pokemon.");

      }, 6000); // 6 secs


      //load pokemon name
      document.getElementById("p1PokemonName").innerHTML = player1PokemonChoices[0]; //charmander

      //load pokemon sound
      playCharmanderVO();


        //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
        if (charmanderDied === true) {

        // change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions
        // this function is also in disableDeadPokemon() but needs to be called again because this function re-enables player1 pokemon.

        document.getElementById("p1PokemonName").innerHTML = "";
        document.getElementById("Charmander_sel").style.color = "#C91212";
        document.getElementById("Charmander_sel").removeEventListener("click", chrPokeImage);
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
    }else if (charmanderSelected === true && squirtleSelected === true) {

      //re-activate active listener again because it was disabled in a different scenario.
      document.getElementById("attackA").addEventListener("click", attackA);
      document.getElementById("attackB").addEventListener("click", attackB);
      document.getElementById("attackC").addEventListener("click", attackC);
      document.getElementById("defenseA").addEventListener("click", defenseA);
      document.getElementById("defenseB").addEventListener("click", defenseB);
      document.getElementById("defenseC").addEventListener("click", defenseC);


      //load charmander
      document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmander.gif" </img>';
      document.getElementById("Player1PokeImage").style.width = 200;
      document.getElementById("Player1PokeImage").style.height = 180;



     setTimeout(function () {


       if(charmanderSelected === true && squirtleSelected === true) {


      //load computer pokemon
      document.getElementById("CpuPokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/squirtle.gif" </img>';
      document.getElementById("CpuPokeImage").style.width = 320;
      document.getElementById("CpuPokeImage").style.height = 380;

      //load pokemon sound
      playSquirtleVO();


      //Display and save computer pokemon name to savedPokemonName2
      document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
      savedPokemonName2.push("Squirtle");


      //verify that computer selected a pokemon
      pokemonType[2].isSelected = true; // squirtle

      //set boolean stats to false for non-selected pokemon

      pokemonType[1].isSelected = false;
      pokemonType[3].isSelected = false;
      pokemonType[4].isSelected = false;
      pokemonType[5].isSelected = false;



    }




   },3000); // 3 sec wait time to load computer pokemon



 }else if (scytherDied === true && squirtleAlive === true && squirtleSelected === true) {

       //re-activate active listener again because it was disabled in a different scenario.
       document.getElementById("attackA").addEventListener("click", attackA);
       document.getElementById("attackB").addEventListener("click", attackB);
       document.getElementById("attackC").addEventListener("click", attackC);
       document.getElementById("defenseA").addEventListener("click", defenseA);
       document.getElementById("defenseB").addEventListener("click", defenseB);
       document.getElementById("defenseC").addEventListener("click", defenseC);


       //load charmander
       document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmander.gif" </img>';
       document.getElementById("Player1PokeImage").style.width = 200;
       document.getElementById("Player1PokeImage").style.height = 180;



      setTimeout(function (){

        //loads squirtle or onix if scyther dies
        loadSquirtleOrOnix();



    },3000); // 3 sec wait time to load computer pokemon


  }else if (squirtleDied === true && scytherDied === true && charmanderAlive === true && onixSelected === true) {

      //re-activate active listener again because it was disabled in a different scenario.
      document.getElementById("attackA").addEventListener("click", attackA);
      document.getElementById("attackB").addEventListener("click", attackB);
      document.getElementById("attackC").addEventListener("click", attackC);
      document.getElementById("defenseA").addEventListener("click", defenseA);
      document.getElementById("defenseB").addEventListener("click", defenseB);
      document.getElementById("defenseC").addEventListener("click", defenseC);

      //load charmander
      document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmander.gif" </img>';
      document.getElementById("Player1PokeImage").style.width = 200;
      document.getElementById("Player1PokeImage").style.height = 180;

      setTimeout(function(){

      //loads scyther or onix if squirtle dies
      loadScytherOrOnix();

    },1000); // 1 sec wait time to load computer pokemon



  }//end of multiple if statements


  if (squirtleDied === true && charmanderAlive === true && scytherSelected === true) {

    //re-activate active listener again because it was disabled in a different scenario.
    document.getElementById("attackA").addEventListener("click", attackA);
    document.getElementById("attackB").addEventListener("click", attackB);
    document.getElementById("attackC").addEventListener("click", attackC);
    document.getElementById("defenseA").addEventListener("click", defenseA);
    document.getElementById("defenseB").addEventListener("click", defenseB);
    document.getElementById("defenseC").addEventListener("click", defenseC);

    //load charmander
    document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/charmander.gif" </img>';
    document.getElementById("Player1PokeImage").style.width = 200;
    document.getElementById("Player1PokeImage").style.height = 180;

  }




    }// end of 1st if statement

} // end of chrPokeImage function





const blaPokeImage = function () {


      makeMove[0].player1Move = true;

      //attack/defense menu changes depending on which pokemon player1 is fighting against

      if (blastoiseSelected === true && onixSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Aqua Jet (-25HP)");
        document.getElementById("attackB").innerHTML = ("Bubble (-10HP)");
        document.getElementById("attackC").innerHTML = ("Hydro Pump (-35)");

        document.getElementById("defenseA").innerHTML = ("Protect (-20HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-15HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (blastoiseSelected === true && squirtleSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Aqua Jet (-5HP)");
        document.getElementById("attackB").innerHTML = ("Bubble (-5HP)");
        document.getElementById("attackC").innerHTML = ("Hydro Pump (-11)");

        document.getElementById("defenseA").innerHTML = ("Protect (-15HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-18HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (blastoiseSelected === true && scytherSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Aqua Jet (-5HP)");
        document.getElementById("attackB").innerHTML = ("Bubble (-4HP)");
        document.getElementById("attackC").innerHTML = ("Hydro Pump (-10)");

        document.getElementById("defenseA").innerHTML = ("Protect (-20HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }//end of multiple if statements


       if(makeMove[0].computerMove === false && makeMove[0].player1Move === true) {

         // set boolean stats to true when user selects a pokemon
         pokemonType[1].isSelected = true;  //blastoise

         // set boolean stats to false for non-selected pokemon
         pokemonType[0].isSelected = false; //charmander
         pokemonType[2].isSelected = false; //pikachu


         // inform player1 of pokemon change
         document.getElementById("statusProgress3").innerHTML =("You seleted " + player1PokemonChoices[1]+ ". " + " Computer will now select a pokemon.");

         // Wait 6 secs and inform player1 that they can begin attacking computer pokemon
         setTimeout(function() {

         document.getElementById("statusProgress3").innerHTML =("You can now attack or switch pokemon.");

       }, 6000); // 6 secs


         //load pokemon name
         document.getElementById("p1PokemonName").innerHTML = player1PokemonChoices[1]; // blastoise

         //load pokemon sound
         playBlastoiseVO();


           //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
           if (blastoiseDied === true) {

           // change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions
           // this function is also in disableDeadPokemon() but needs to be called again because this function re-enables player1 pokemon.

           document.getElementById("p1PokemonName").innerHTML = "";
           document.getElementById("Blastoise_sel").style.color = "#C91212";
           document.getElementById("Blastoise_sel").removeEventListener("click", blaPokeImage);
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
       }else if (blastoiseSelected === true && onixSelected === true) {

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


        setTimeout(function() {


          if(blastoiseSelected === true && onixSelected === true) {


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
             playOnixVO();



             //Display and save computer pokemon name to savedPokemonName2
             document.getElementById("cpuPokemonName").innerHTML = "Onix";
             savedPokemonName2.push("Onix");


             //verify that computer selected a pokemon
             pokemonType[4].isSelected = true; //onix

             // set boolean stats to false for non-selected pokemon
             pokemonType[0].isSelected = false;
             pokemonType[2].isSelected = false;
             pokemonType[5].isSelected = false;



          }




      },3000); // 3 sec wait time to load computer pokemon


    }else if (scytherDied === true && squirtleAlive === true && squirtleSelected === true) {

          //re-activate active listener again because it was disabled in a different scenario.
          document.getElementById("attackA").addEventListener("click", attackA);
          document.getElementById("attackB").addEventListener("click", attackB);
          document.getElementById("attackC").addEventListener("click", attackC);
          document.getElementById("defenseA").addEventListener("click", defenseA);
          document.getElementById("defenseB").addEventListener("click", defenseB);
          document.getElementById("defenseC").addEventListener("click", defenseC);


          //load blastoise

         document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise.gif" </img>';
         document.getElementById("Player1PokeImage").style.width = 100;
         document.getElementById("Player1PokeImage").style.height = 100;


         setTimeout(function() {

           //loads squirtle or scyther if onix dies
           loadsquirtleOrScyther();



       },3000); // 3 sec wait time to load computer pokemon


     }else if (squirtleDied === true && onixDied === true && blastoiseAlive === true && scytherSelected === true) {

       //re-activate active listener again because it was disabled in a different scenario.
       document.getElementById("attackA").addEventListener("click", attackA);
       document.getElementById("attackB").addEventListener("click", attackB);
       document.getElementById("attackC").addEventListener("click", attackC);
       document.getElementById("defenseA").addEventListener("click", defenseA);
       document.getElementById("defenseB").addEventListener("click", defenseB);
       document.getElementById("defenseC").addEventListener("click", defenseC);


       //load blastoise

       document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/blastoise.gif" </img>';
       document.getElementById("Player1PokeImage").style.width = 100;
       document.getElementById("Player1PokeImage").style.height = 100;


       setTimeout(function() {

         //loads squirtle or scyther if onix dies
         loadsquirtleOrScyther();

       },1000); // 1 sec wait time to load computer pokemon



     }//end of multiple if statements




        } // end of 1st if statement

    } //end of blaPokeImage function


    const pikPokeImage = function () {


      makeMove[0].player1Move = true;

      if (pikachuSelected === true && scytherSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-5HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-10HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-15)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-25HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (pikachuSelected === true && squirtleSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-25HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-10HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-35)");

        document.getElementById("defenseA").innerHTML = ("Growl (-15HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-5HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }else if (pikachuSelected === true && onixSelected === true) {

        //load pokemon attack/defense menu
        document.getElementById("attackA").innerHTML = ("Thunder Shock (-5HP)");
        document.getElementById("attackB").innerHTML = ("Double Kick (-15HP)");
        document.getElementById("attackC").innerHTML = ("Thunder Bolt (-10)");

        document.getElementById("defenseA").innerHTML = ("Growl (-5HP)");
        document.getElementById("defenseB").innerHTML = ("HeadButt (-20HP)");
        document.getElementById("defenseC").innerHTML = ("Rest (+45HP)");

      }//end of multiple if statements


      if(makeMove[0].computerMove === false && makeMove[0].player1Move === true) {


        // set boolean stats to true when user selects a pokemon
        pokemonType[2].isSelected = true; // pikachu

        // set boolean stats to false for non-selected pokemon

        pokemonType[0].isSelected = false;
        pokemonType[1].isSelected = false;
        pokemonType[4].isSelected = false;
        pokemonType[5].isSelected = false;


        // inform player1 of pokemon change
        document.getElementById("statusProgress3").innerHTML =("You seleted " + player1PokemonChoices[2]+ ". " + " Computer will now select a pokemon.");


        // Wait 3 secs and inform player1 that they can begin attacking computer pokemon
        setTimeout(function() {

        document.getElementById("statusProgress3").innerHTML =("You can now attack or switch pokemon.");

        }, 6000); // 6 secs


        //load pokemon name
        document.getElementById("p1PokemonName").innerHTML = player1PokemonChoices[2]; // pikachu

        //load pokemon sound
        playPikachuVO();


          //if a pokemon dies then player1 can't restore it by selecting the same pokemon again.
          if (pikachuDied === true) {

          // change font color to red to let the player know that their pokemon is no longer active and disable all pokemon functions
          // this function is also in disableDeadPokemon() but needs to be called again because this function re-enables player1 pokemon.

          document.getElementById("p1PokemonName").innerHTML = "";
          document.getElementById("Pikachu_sel").style.color = "#C91212";
          document.getElementById("Pikachu_sel").removeEventListener("click", pikPokeImage);
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
      }else if (pikachuSelected === true && scytherSelected === true) {

        //re-activate active listener again because it was disabled in a different scenario.
        document.getElementById("attackA").addEventListener("click", attackA);
        document.getElementById("attackB").addEventListener("click", attackB);
        document.getElementById("attackC").addEventListener("click", attackC);
        document.getElementById("defenseA").addEventListener("click", defenseA);
        document.getElementById("defenseB").addEventListener("click", defenseB);
        document.getElementById("defenseC").addEventListener("click", defenseC);


        //load pikachu

       document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Pikachu.gif" </img>';
       document.getElementById("Player1PokeImage").style.width = 200;
       document.getElementById("Player1PokeImage").style.height = 180;

       setTimeout(function(){





         if(pikachuSelected === true && scytherSelected === true) {


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
            playScytherVO();


            //Display and save computer pokemon name to savedPokemonName2
            document.getElementById("cpuPokemonName").innerHTML = "Scyther";
            savedPokemonName2.push("Scyther");


            //verify that computer selected a pokemon
            pokemonType[3].isSelected = true; //Scyther


            // set boolean stats to false for non-selected pokemon
            pokemonType[0].isSelected = false;
            pokemonType[1].isSelected = false;
            pokemonType[4].isSelected = false;
            pokemonType[5].isSelected = false;



         }




     },6000); // 6 sec wait time to load computer pokemon



   }else if (scytherDied === true && squirtleAlive === true && squirtleSelected === true) {

     //re-activate active listener again because it was disabled in a different scenario.
     document.getElementById("attackA").addEventListener("click", attackA);
     document.getElementById("attackB").addEventListener("click", attackB);
     document.getElementById("attackC").addEventListener("click", attackC);
     document.getElementById("defenseA").addEventListener("click", defenseA);
     document.getElementById("defenseB").addEventListener("click", defenseB);
     document.getElementById("defenseC").addEventListener("click", defenseC);


     //load pikachu

    document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Pikachu.gif" </img>';
    document.getElementById("Player1PokeImage").style.width = 200;
    document.getElementById("Player1PokeImage").style.height = 180;

    setTimeout(function(){

      //loads squirtle or onix if scyther dies
      loadSquirtleOrOnix();

    },3000); // 3 sec wait time to load computer pokemon



   }else if (squirtleDied === true && scytherDied === true && charmanderAlive === true && onixSelected === true) {

     //re-activate active listener again because it was disabled in a different scenario.
     document.getElementById("attackA").addEventListener("click", attackA);
     document.getElementById("attackB").addEventListener("click", attackB);
     document.getElementById("attackC").addEventListener("click", attackC);
     document.getElementById("defenseA").addEventListener("click", defenseA);
     document.getElementById("defenseB").addEventListener("click", defenseB);
     document.getElementById("defenseC").addEventListener("click", defenseC);


     //load pikachu

    document.getElementById("Player1PokeImage").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/pokemon/Pikachu.gif" </img>';
    document.getElementById("Player1PokeImage").style.width = 200;
    document.getElementById("Player1PokeImage").style.height = 180;

     setTimeout(function(){

     //loads scyther or onix if squirtle dies
     loadScytherOrOnix();

   },1000); // 1 sec wait time to load computer pokemon




 }//end of multiple if statements





   }//end of 1st if statement

 }//end of pikPokeImage function




// In this section computer pokemon will not be paired to player1 pokemon


// loads squirtle or onix if scyther dies 

const loadSquirtleOrOnix = function () {

  let squirtleHP7 = squirtleHealthBar.reduce(PokemonHPReduced);
  let onixHP8 = onixHealthBar.reduce(PokemonHPReduced)

  setTimeout(function() {

    let scytherHP10 = scytherHealthBar.reduce(PokemonHPReduced);



    if(scytherDied === true && squirtleAlive === true && squirtleSelected === true) {


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
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + ComputerPokemonChoices[2] + " and has 1 pokemon remaining.");

       //load pokemon sound
       playSquirtleVO();


       //Display and save computer pokemon name to savedPokemonName2
       document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
       savedPokemonName2.push("Squirtle");

       //if squirtleHP is 100 then it will load with full health and change progressbar to blue
       (squirtleHP7 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
       document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue


       //verify that computer selected a pokemon
       pokemonType[5].isSelected = true; //Squirtle


       //set boolean stats to false for non-selected pokemon
       pokemonType[0].isSelected = false;
       pokemonType[1].isSelected = false;
       pokemonType[2].isSelected = false;
       pokemonType[4].isSelected = false;

       //change boolean state so that player1 can attack
       makeMove[0].player1Move = true;
       makeMove[0].computerMove = false;

       console.log(makeMove[0]);






     }else if (squirtleDied === true && scytherDied === true && pikachuAlive === true && onixSelected === true) {

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
       document.getElementById("statusProgress").innerHTML=("Computer seleted " + ComputerPokemonChoices[1] + " and has no pokemon remaining.");

      //load pokemon sound
      playOnixVO();


      //Display and save computer pokemon name to savedPokemonName2
      document.getElementById("cpuPokemonName").innerHTML = "Onix";
      savedPokemonName2.push("Onix");


      //if onix HP is 100 then it will load with full health and change progressbar to blue
      (onixHP8 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
      document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



      //verify that computer selected a pokemon
      pokemonType[4].isSelected = true; //Onix


      //set boolean stats to false for non-selected pokemon
      pokemonType[0].isSelected = false;
      pokemonType[1].isSelected = false;
      pokemonType[2].isSelected = false;
      pokemonType[5].isSelected = false;

      //change boolean state so that player1 can attack
      makeMove[0].player1Move = true;
      makeMove[0].computerMove = false;

      console.log(makeMove[0]);

     }// end of if statement


        },1000); // 1 sec wait time for computer to select pokemon


            } //end of loadSquirtleOrOnix function




// loads squirtle or scyther if onix dies
const loadsquirtleOrScyther = function () {

  let squirtleHP7 = squirtleHealthBar.reduce(PokemonHPReduced);
  let scytherHP8 = scytherHealthBar.reduce(PokemonHPReduced);

  setTimeout(function() {



    if(onixDied === true && squirtleAlive === true && squirtleSelected === true) {


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
      document.getElementById("statusProgress").innerHTML=("Computer seleted " + ComputerPokemonChoices[2] + " and has 1 pokemon remaining.");

     //load pokemon sound
     playSquirtleVO();


     //Display and save computer pokemon name to savedPokemonName2
     document.getElementById("cpuPokemonName").innerHTML = "Squirtle";
     savedPokemonName2.push("Squirtle");

     //if squirtleHP is 100 then it will load with full health and change progressbar to blue
     (squirtleHP7 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
     document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



     //verify that computer selected a pokemon
     pokemonType[5].isSelected = true; //Squirtle


     //set boolean stats to false for non-selected pokemon
     pokemonType[0].isSelected = false;
     pokemonType[1].isSelected = false;
     pokemonType[2].isSelected = false;
     pokemonType[4].isSelected = false;

     //change boolean state so that player1 can attack
     makeMove[0].player1Move = true;
     makeMove[0].computerMove = false;

     console.log(makeMove[0]);





   } else if (squirtleDied === true && onixDied === true && blastoiseAlive === true && scytherSelected === true) {

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
      document.getElementById("statusProgress").innerHTML=("Computer seleted " + ComputerPokemonChoices[0] + " and has no pokemon remaining.");

      //load pokemon sound
      playScytherVO();


      //Display and save computer pokemon name to savedPokemonName2
      document.getElementById("cpuPokemonName").innerHTML = "Scyther";
      savedPokemonName2.push("Scyther");


      //if scytherHP is 100 then it will load with full health and change progressbar to blue
      (scytherHP8 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
      document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



      //verify that computer selected a pokemon
      pokemonType[3].isSelected = true; //Scyther


      //set boolean stats to false for non-selected pokemon
      pokemonType[0].isSelected = false;
      pokemonType[1].isSelected = false;
      pokemonType[2].isSelected = false;
      pokemonType[4].isSelected = false;
      pokemonType[5].isSelected = false;

      //change boolean state so that player1 can attack
      makeMove[0].player1Move = true;
      makeMove[0].computerMove = false;

      console.log(makeMove[0]);


   }//end of if statement


        },1000); // 1 sec wait time for computer to select pokemon


            } //end of loadsquirtleOrScyther function







// loads scyther or onix if squirtle dies (work-in-progress)
const loadScytherOrOnix = function () {

  let scytherHP2 = scytherHealthBar.reduce(PokemonHPReduced);
  let onixHP10 = onixHealthBar.reduce(PokemonHPReduced);

  setTimeout(function() {



    if(squirtleDied === true && scytherAlive === true && scytherSelected === true) {




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
        document.getElementById("statusProgress").innerHTML=("Computer seleted " + ComputerPokemonChoices[0] + " and has 1 pokemon remaining.");

       //load pokemon sound
       playScytherVO();


       //Display and save computer pokemon name to savedPokemonName2 on
       document.getElementById("cpuPokemonName").innerHTML = "Scyther";
       savedPokemonName2.push("Scyther");

       //if scythers HP is 100 then it will load with full health and change progressbar to blue
       (scytherHP2 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
       document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



       //verify that computer selected a pokemon
       pokemonType[3].isSelected = true; //Scyther


       //set boolean stats to false for non-selected pokemon
       pokemonType[0].isSelected = false;
       pokemonType[1].isSelected = false;
       pokemonType[2].isSelected = false;
       pokemonType[4].isSelected = false;
       pokemonType[5].isSelected = false;

       //change boolean state so that player1 can attack
       makeMove[0].player1Move = true;
       makeMove[0].computerMove = false;

       console.log(makeMove[0]);








     }else if (squirtleDied === true && scytherDied === true && charmanderAlive === true && onixSelected === true) {




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
           document.getElementById("statusProgress").innerHTML=("Computer seleted " + ComputerPokemonChoices[1] + " and has no pokemon remaining.");

          //load pokemon sound
          playOnixVO();


          //Display and save computer pokemon name to savedPokemonName2
          document.getElementById("cpuPokemonName").innerHTML = "Onix";
          savedPokemonName2.push("Onix");


          //if onix HP is 100 then it will load with full health and change progressbar to blue
          (onixHP10 === 100) ? document.querySelector(".cpuHP").style.width =  "100%" : document.querySelector(".cpuHP").style.width =  "0%";
          document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue



          //verify that computer selected a pokemon
          pokemonType[4].isSelected = true; //Onix


          //set boolean stats to false for non-selected pokemon
          pokemonType[0].isSelected = false;
          pokemonType[1].isSelected = false;
          pokemonType[2].isSelected = false;
          pokemonType[5].isSelected = false;

          //change boolean state so that player1 can attack
          makeMove[0].player1Move = true;
          makeMove[0].computerMove = false;

          console.log(makeMove[0]);








     }//end of if statements


        },1000); // 1 sec wait time for computer to select pokemon


                }//end of loadScytherOrOnix function




              
          




  
            
 let charmanderHealthBar =  [100]; //This array will contain hp damage and health restoration data for charmander -- same is true for other pokemon arrays
 let charmanderBackup =     [100];//This array will only contain hp damage data for charmander -- same is true for other pokemon arrays
 let charmanderHpRecovered = [0]; //This array will only contain retored hp data for charmander -- same is true for other pokemon arrays
 let chaSpeedProgressBar =  [100]; //This array will be used as a limit to prevent health restoration for charmander -- ex: if speed is 0 then health resotration is disabled -- same is true for other pokemon arrays
 let squirtleHealthBar =    [100];
 let squirtleBackup =       [100];
 let squirtleHpRecovered =  [0];
 let squSpeedProgressBar =  [100];
 let blastoiseHealthBar =   [100];
 let blastoiseBackup =      [100];
 let blastoiseHpRecovered = [0];
 let blaSpeedProgressBar =  [100];
 let scytherHealthBar =     [100];
 let scytherBackup =        [100];
 let scytherHpRecovered =   [0];
 let scySpeedProgressBar =  [100];
 let onixHealthBar =        [100];
 let onixBackup =           [100];
 let onixHpRecovered =      [0];
 let onixSpeedProgressBar = [100];
 let pikachuHealthBar =     [100];
 let pikachuBackup =        [100];
 let pikachuHpRecovered =   [0];
 let pikSpeedProgressBar =  [100];
 let player1Score =         [0];
 let computerScore =        [0];
 let fullHealth =           [100];


















      
    const defaultHPSetting = function () {

      //default settings for array when no pokemon battle occur

      //varible declartions


      let player1DefaultHP = 100;
      let computerDefaultHP = 100;
      let player1DefaultSpeed = 100;
      let computerDefaultSpeed = 100;

      let squirtleHP6 = squirtleHealthBar.reduce(PokemonHPReduced);
      let charmanderHP6 = charmanderHealthBar.reduce(PokemonHPReduced);
      let pikachuHP12 = pikachuHealthBar.reduce(PokemonHPReduced);
      let scytherHP12 = scytherHealthBar.reduce(PokemonHPReduced);
      let blastoiseHP12 = blastoiseHealthBar.reduce(PokemonHPReduced);
      let onixHP12 = onixHealthBar.reduce(PokemonHPReduced);
      let player1HealthIndicator4 = document.querySelector('.player1HP');

      //during first pokemon battle, no changes to pokemon progress bars will be made (default setting) whenever pokemon is selected

      if (charmanderHP6 === 100 && squirtleHP6 === 100 && charmanderSelected === true && squirtleSelected === true) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        player1HealthIndicator4.style.backgroundColor = "#A6EDED"; //blue

        setTimeout(function() {

          document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
          document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

         }, 3000); // 3 sec delay to load computer progressbar





      }else if (pikachuHP12 === 100 && scytherHP12 === 100 && pikachuSelected === true && scytherSelected === true) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        player1HealthIndicator4.style.backgroundColor = "#A6EDED"; //blue

        setTimeout(function() {

          document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
          document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

         }, 3000); // 3 sec delay to load computer progressbar


      }else if (blastoiseHP12 === 100 && onixHP12 === 100 && blastoiseSelected === true && onixSelected === true) {


        document.querySelector(".player1HP").style.width = player1DefaultHP +   "%";
        document.querySelector(".playerSpeed").style.width = player1DefaultSpeed +   "%";
        player1HealthIndicator4.style.backgroundColor = "#A6EDED"; //blue

        setTimeout(function() {

          document.querySelector(".cpuHP").style.width = computerDefaultHP +   "%";
          document.querySelector(".cpuSpeed").style.width = computerDefaultSpeed +   "%";

         }, 3000); // 3 sec delay to load computer progressbar




      }//end of if statements

                  }// end of defaultHPSetting






       const preserveHpSetting = function () {

          //any changes to array implies a pokemon battle occured and therefore the array needs to be preserved before switching pokemon.

         // variable declartions

         let score3 = player1Score.reduce(PokemonHPReduced);
         let score4 = computerScore.reduce(PokemonHPReduced);


         let charmanderSpeedBar4 =  chaSpeedProgressBar.reduce(PokemonHPReduced);
         let pikachuSpeedBar4 = pikSpeedProgressBar.reduce(PokemonHPReduced);
         let blastoiseSpeedBar4 = blaSpeedProgressBar.reduce(PokemonHPReduced);
         let squirtleSpeedBar4 =  squSpeedProgressBar.reduce(PokemonSpeedReduced);
         let scytherSpeedBar4 = scySpeedProgressBar.reduce(PokemonSpeedReduced);
         let onixSpeedBar2 = onixSpeedProgressBar.reduce(PokemonHPReduced);

         let squirtleHP6 = squirtleHealthBar.reduce(PokemonHPReduced);
         let charmanderHP6 = charmanderHealthBar.reduce(PokemonHPReduced);
         let pikachuHP13 = pikachuHealthBar.reduce(PokemonHPReduced);
         let scytherHP13 = scytherHealthBar.reduce(PokemonHPReduced);
         let blastoiseHP13 = blastoiseHealthBar.reduce(PokemonHPReduced);
         let onixHP13 = onixHealthBar.reduce(PokemonHPReduced);


         if (charmanderHP6 < 100 && squirtleHP6 < 100 && charmanderSelected === true && squirtleSelected === true) {


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


       }else if (pikachuHP13 < 100 && scytherHP13 < 100 && pikachuSelected === true && scytherSelected === true) {


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


       }else if (blastoiseHP13 < 100 && onixHP13 < 100 && blastoiseSelected === true && onixSelected === true) {


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





      const decreaseComputerHP = function () {

      // variable declartions


      let hpDamage = 0;
      let squirtleHP5 = squirtleHealthBar.reduce(PokemonHPReduced);
      let squirtleSpeedBar5 =  squSpeedProgressBar.reduce(PokemonSpeedReduced);




      if (squirtleHP5 < 0 || squirtleHP5 >= 0  && squirtleMovesActivated[0].squirtleFunction1of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && squirtleMovesActivated[0].squirtleFunction2of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && squirtleMovesActivated[0].squirtleFunction3of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && squirtleMovesActivated[0].squirtleFunction4of6 === true ||
          squirtleHP5 < 0 || squirtleHP5 >= 0  && squirtleMovesActivated[0].squirtleFunction5of6 === true) {

        //if statement ensures that some funtions are activated before making changes to the progress bar


        switch(squirtleHP5 < 0 || squirtleHP5 >= 0) {

        case (squirtleHP5 < 0):


        //hp
        hpDamage = 0;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        (squirtleHP5 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar5  +   "%";
        (squirtleSpeedBar5 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

        informWinner();


        break;

        case (squirtleHP5 === 0):


        //hp
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        (squirtleHP5 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar5  +   "%";
        (squirtleSpeedBar5 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

        informWinner();


        break;

        case (squirtleHP5 > 0 && squirtleHP5 <= 20):

        //hp
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        (squirtleHP5 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar5  +   "%";
        (squirtleSpeedBar5 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


        break;

        case (squirtleHP5 > 20 && squirtleHP5 <= 40):


        //hp
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        (squirtleHP5 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar5  +   "%";
        (squirtleSpeedBar5 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


        break;

        case (squirtleHP5 > 40 && squirtleHP5 <= 100):


        //hp
        hpDamage = squirtleHP5;
        document.querySelector(".cpuHP").style.width = hpDamage +   "%";
        (squirtleHP5 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

        //speedbar
        document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar5  +   "%";
        (squirtleSpeedBar5 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red



        break;

        default:

        console.log("decreaseComputerHP default function was called. Look at the switch cases.");

  }// end of switch statement

        }// end of if statement

            } // end of decreaseComputerHP function



            const decreaseComputerHP2 = function () {

              // variable declartions


              let hpDamage5 = 0;
              let onixHP2 = onixHealthBar.reduce(PokemonHPReduced);
              let onixSpeedBar3 = onixSpeedProgressBar.reduce(PokemonHPReduced);




              if (onixHP2 < 0 || onixHP2 >= 0  && onixMovesActivated[0].onixFunction1of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && onixMovesActivated[0].onixFunction2of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && onixMovesActivated[0].onixFunction3of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && onixMovesActivated[0].onixFunction4of6 === true ||
                  onixHP2 < 0 || onixHP2 >= 0  && onixMovesActivated[0].onixFunction5of6 === true) {

                //if statement ensures that some funtions are activated before making changes to the progress bar


                switch(onixHP2 < 0 || onixHP2 >= 0) {

                case (onixHP2 < 0):


                //hp
                hpDamage5 = 0;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                (onixHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".cpuSpeed").style.width = onixSpeedBar3  +   "%";
                (onixSpeedBar3 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

                informWinner();

                break;


                case (onixHP2 === 0):


                //hp
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                (onixHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".cpuSpeed").style.width = onixSpeedBar3  +   "%";
                (onixSpeedBar3 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

                informWinner();

                break;

                case (onixHP2 > 0 && onixHP2 <= 20):

                //hp
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                (onixHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".cpuSpeed").style.width = onixSpeedBar3  +   "%";
                (onixSpeedBar3 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


                break;

                case (onixHP2 > 20 && onixHP2 <= 40):

                //hp
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                (onixHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".cpuSpeed").style.width = onixSpeedBar3  +   "%";
                (onixSpeedBar3 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


                break;

                case (onixHP2 > 40 && onixHP2 <= 100):


                //hp
                hpDamage5 = onixHP2;
                document.querySelector(".cpuHP").style.width = hpDamage5 +   "%";
                (onixHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".cpuSpeed").style.width = onixSpeedBar3  +   "%";
                (onixSpeedBar3 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


                break;

                default:

                console.log("decreaseComputerHP2 default function was called. Look at the switch cases. (2-2)");

          }// end of switch statement

                }// end of if statement

              } // end of decreaseComputerHP2 function







              const  decreaseComputerHP3 = function () {

                // variable declartions


                let hpDamage6 = 0;
                let scytherHP2 = scytherHealthBar.reduce(PokemonHPReduced);
                let scytherSpeedBar4 = scySpeedProgressBar.reduce(PokemonSpeedReduced);




                if (scytherHP2 < 0 || scytherHP2 >= 0  && scytherMovesActivated[0].scytherFunction1of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && scytherMovesActivated[0].scytherFunction2of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && scytherMovesActivated[0].scytherFunction3of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && scytherMovesActivated[0].scytherFunction4of6 === true ||
                    scytherHP2 < 0 || scytherHP2 >= 0  && scytherMovesActivated[0].scytherFunction5of6 === true) {

                  //if statement ensures that some funtions are activated before making changes to the progress bar


                  switch(scytherHP2 < 0 || scytherHP2 >= 0) {

                  case (scytherHP2 < 0 ):


                  //hp
                  hpDamage6 = 0;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  (scytherHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".cpuSpeed").style.width = scytherSpeedBar4  +   "%";
                  (scytherSpeedBar4 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

                  informWinner();

                  break;


                  case (scytherHP2 === 0):


                  //hp
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  (scytherHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".cpuSpeed").style.width = scytherSpeedBar4  +   "%";
                  (scytherSpeedBar4 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

                  informWinner();


                  break;

                  case (scytherHP2 > 0 && scytherHP2 <= 20):


                  //hp
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  (scytherHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".cpuSpeed").style.width = scytherSpeedBar4  +   "%";
                  (scytherSpeedBar4 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

                  break;

                  case (scytherHP2 > 20 && scytherHP2 <= 40):


                  //hp
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  (scytherHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".cpuSpeed").style.width = scytherSpeedBar4  +   "%";
                  (scytherSpeedBar4 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

                  break;

                  case (scytherHP2 > 40 && scytherHP2 <= 100):



                  //hp
                  hpDamage6 = scytherHP2;
                  document.querySelector(".cpuHP").style.width = hpDamage6 +   "%";
                  (scytherHP2 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".cpuSpeed").style.width = scytherSpeedBar4  +   "%";
                  (scytherSpeedBar4 >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

                  break;

                  default:

                 console.log("decreaseComputerHP3 default function was called. Look at the switch cases. (3-3)");

                    }// end of switch statement

                  }// end of if statement

                } // end of decreaseComputerHP3 function




      const decreasePlayerHP = function () {

      // variable declartions

      let pikachuHPDamage2= 0;
      let charmanderHPDamage2 = 0;
      let blastoiseHPDamage2 = 0;
      let hpRecovered7 = 0;
      let pikachuHP2 = pikachuHealthBar.reduce(PokemonHPReduced);
      let pikachuSpeedBar2 = pikSpeedProgressBar.reduce(PokemonHPReduced);
      let charmanderHP5 = charmanderHealthBar.reduce(PokemonHPReduced);
      let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);
      let blastoiseHP2 = blastoiseHealthBar.reduce(PokemonHPReduced);
      let blastoiseSpeedBar2 = blaSpeedProgressBar.reduce(PokemonHPReduced);







      if(charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction1of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction2of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction3of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction4of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction5of6 === true ||
         charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction6of6 === true ||

         pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction1of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction2of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction3of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction4of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction5of6 === true ||
         pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction6of6 === true ||

         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction1of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction2of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction3of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction4of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction5of6 === true ||
         blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction6of6 === true) {

        //if statement ensures that some functions are activated before making changes to the progress bar


        switch (pikachuHP2 < 0 || pikachuHP2 === 0  || charmanderHP5 < 0 || charmanderHP5 === 0 || blastoiseHP2 < 0 || blastoiseHP2 === 0 ||
                pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100 ||
                pikachuSpeedBar2 === 50 ||  pikachuSpeedBar2 <= 0 || charmanderSpeedBar2 === 50 || charmanderSpeedBar2 <= 0 || blastoiseSpeedBar2 === 50 || blastoiseSpeedBar2 <= 0) {

          case (pikachuHP2 < 0 || charmanderHP5 < 0 || blastoiseHP2 < 0):



          if(pikachuSelected === true && squirtleSelected === true) {

            //hp
            pikachuHPDamage2 = 0;
            document.querySelector(".player1HP").style.width = 0 +   "%";
            (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
            (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            informWinner();

          }else if (charmanderSelected === true && squirtleSelected === true) {

            //hp
            charmanderHPDamage2 = 0;
            document.querySelector(".player1HP").style.width = 0 +   "%";
            (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
            (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            informWinner();

          }else if (blastoiseSelected === true && squirtleSelected === true) {


            //hp
            blastoiseHPDamage2 = 0;
            document.querySelector(".player1HP").style.width = 0 +   "%";
            (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
            (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


            informWinner();

          }//end of if statements





          break;


          case (pikachuHP2 === 0 || charmanderHP5 === 0 || blastoiseHP2 === 0):

          if(pikachuSelected === true && squirtleSelected === true) {

            //hp
            pikachuHPDamage2 = pikachuHP2;
            document.querySelector(".player1HP").style.width = 0 +   "%";
            (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
            (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            informWinner();


          }else if (charmanderSelected === true && squirtleSelected === true) {

            //hp
            charmanderHPDamage2 = charmanderHP5;
            document.querySelector(".player1HP").style.width = 0 +   "%";
            (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
            (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            informWinner();


          }else if (blastoiseSelected === true && squirtleSelected === true) {

            //hp
            blastoiseHPDamage2 = blastoiseHP2;
            document.querySelector(".player1HP").style.width = 0 +   "%";
            (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
            (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            informWinner();

          }//end of if statements



          break;

          case (pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100 ||
                pikachuSpeedBar2 === 50 ||  pikachuSpeedBar2 <= 0 || charmanderSpeedBar2 === 50 || charmanderSpeedBar2 <= 0 || blastoiseSpeedBar2 === 50 || blastoiseSpeedBar2 <= 0):


          //change color of HP progress bar here:
          if(pikachuSelected === true && squirtleSelected === true && pikachuHP2 > 0 && pikachuHP2 <= 100) {

            //hp
            pikachuHPDamage2 = pikachuHP2;
            document.querySelector(".player1HP").style.width = pikachuHPDamage2 +   "%";
            (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
            (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

          }else if (charmanderSelected === true && squirtleSelected === true && charmanderHP5 > 0 && charmanderHP5 <= 100) {

            //hp
            charmanderHPDamage2 = charmanderHP5;
            document.querySelector(".player1HP").style.width = charmanderHPDamage2 +   "%";
            (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
            (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


          }else if (blastoiseSelected === true && squirtleSelected === true && blastoiseHP2 > 0 && blastoiseHP2 <= 100) {

            //hp
            blastoiseHPDamage2 = blastoiseHP2;
            document.querySelector(".player1HP").style.width = blastoiseHPDamage2 +   "%";
            (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

            //speedbar
            document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
            (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


          }//end of if statement










            //change speedbar progressbar here:
            if(pikachuSelected === true && squirtleSelected === true && pikachuSpeedBar2 <= 50) {

              //approve that pikachu speedbar is only decreased here:
              pikachuSpeedDecreased = true;

              //speedbar
              document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
              (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              console.log("pikachu speedbar array is "+ pikachuSpeedBar2);


            }

            if (charmanderSelected === true && squirtleSelected === true && charmanderSpeedBar2 <= 50) {

              //approve that charmander speedbar is only decreased here:
              charmanderSpeedDecreased = true;

              //speedbar
              document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
              (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              console.log("charmander speedbar array is "+ charmanderSpeedBar2);

            }

            if (blastoiseSelected === true && squirtleSelected === true && blastoiseSpeedBar2 <= 50) {

              //approve that blastoise speedbar is only decreased here:
              blastoiseSpeedDecreased = true;

              //speedbar
              document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
              (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              console.log("blastoise speedbar array is "+ blastoiseSpeedBar2);


            }//end of if statement #2




          if(pikachuSelected === true && squirtleSelected === true && pikachuSpeedBar2 <= 0) {

            //speedbar
            document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
            (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


          }

          if (charmanderSelected === true && squirtleSelected === true && charmanderSpeedBar2 <= 0) {

            //speedbar
            document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
            (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

          }

          if (blastoiseSelected === true && squirtleSelected === true && blastoiseSpeedBar2 <= 0) {

            //speedbar
            document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
            (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

          }//end of if statement #3



          if(pikachuSelected === true && squirtleSelected === true && pikachuSpeedBar2 === 0 && pikachuSpeedDecreased === true || pikachuSpeedBar2 <= 0 && pikachuSpeedDecreased === true) {

            //approve that pikachu rested and speedbar is at zero only here:
            restedPikachu = true;

            hpRecovered7 = 1; //setting this to 1 HP to indicate low speedbar

            document.querySelector(".playerSpeed").style.width = hpRecovered7  +   "%";
            (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            //play invalid sound here:
            playInvalidAction();


            //remove event listener to prevent user from using the rest function
            document.getElementById("defenseC").style.color = "#C91212";
            document.getElementById("defenseC").removeEventListener("click", defenseC);
            playPokemonRestSound();


            setTimeout(function() {

              //inform player1 that they can no longer use rest function
              document.getElementById("statusProgress2").innerHTML = "Pikachu can no longer rest because speed is too low!";

            }, 1000);// message is displayed after 1 sec.



            //turn off rest function for pikachu when speed progress bar is zero
            console.log("restedPikachu status: " + restedPikachu);
            console.log("Pikachu rest function was disabled.");

          }

           if (charmanderSelected === true && squirtleSelected === true && charmanderSpeedBar2  === 0 && charmanderSpeedDecreased === true || charmanderSpeedBar2 <= 0 && charmanderSpeedDecreased === true) {

            //approve that charmander rested and speedbar is at zero only here:
            restedCharmander = true;

            hpRecovered7 = 1; //setting this to 1 HP to indicate low speedbar

            document.querySelector(".playerSpeed").style.width = hpRecovered7  +   "%";
            (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            //play invalid sound here:
            playInvalidAction();


            //remove event listener to prevent user from using the rest function
            document.getElementById("defenseC").style.color = "#C91212";
            document.getElementById("defenseC").removeEventListener("click", defenseC);
            playPokemonRestSound();


            setTimeout(function() {

              //inform player1 that they can no longer use rest function
              document.getElementById("statusProgress2").innerHTML = "Charmander can no longer rest because speed is too low!";

            }, 1000);// message is displayed after 1 sec.



            //turn off rest function for charmander when speed progress bar is zero
            console.log("restedCharmander status(2): " + restedCharmander);
            console.log("Charmander rest function was disabled. (2)");

          }

           if (blastoiseSelected === true && squirtleSelected === true && blastoiseSpeedBar2  === 0 && blastoiseSpeedDecreased === true || blastoiseSpeedBar2 <= 0 && blastoiseSpeedDecreased === true) {

            //approve that blastoise rested and speedbar is at zero only here:
            restedBlastoise = true;

            hpRecovered7 = 1; //setting this to 1 HP to indicate low speedbar

            document.querySelector(".playerSpeed").style.width = hpRecovered7  +   "%";
            (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

            //play invalid sound here:
            playInvalidAction();


            //remove event listener to prevent user from using the rest function
            document.getElementById("defenseC").style.color = "#C91212";
            document.getElementById("defenseC").removeEventListener("click", defenseC);
            playPokemonRestSound();


            setTimeout(function() {

              //inform player1 that they can no longer use rest function
              document.getElementById("statusProgress2").innerHTML = "Blastoise can no longer rest because speed is too low!";

            }, 1000);// message is displayed after 1 sec.



            //turn off rest function for blastoise when speed progress bar is zero
            console.log("restedBlastoise status(3): " + restedBlastoise);
            console.log("Blastoise rest function was disabled.(3)");



          }//end of if statement #4







          break;


          default:




        console.log("decreasePlayerHP default function was called. Look at the switch cases (1).");


}// end of switch statement

      }// end of if statement

          } // end of decreasePlayerHP function



          const decreasePlayerHP2 = function () {

            // variable declartions

            let pikachuHPDamage = 0;
            let charmanderHPDamage = 0;
            let blastoiseHPDamage = 0;
            let hpRecovered6 = 0;
            let pikachuHP2 = pikachuHealthBar.reduce(PokemonHPReduced);
            let pikachuSpeedBar2 = pikSpeedProgressBar.reduce(PokemonHPReduced);
            let charmanderHP5 = charmanderHealthBar.reduce(PokemonHPReduced);
            let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);
            let blastoiseHP2 = blastoiseHealthBar.reduce(PokemonHPReduced);
            let blastoiseSpeedBar2 = blaSpeedProgressBar.reduce(PokemonHPReduced);




            if(pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction1of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction2of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction3of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction4of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction5of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction6of6 === true ||

               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction1of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction2of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction3of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction4of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction5of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction6of6 === true ||

               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction1of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction2of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction3of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction4of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction5of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction6of6 === true) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(pikachuHP2 < 0 || pikachuHP2 === 0  || charmanderHP5 < 0 || charmanderHP5 === 0 || blastoiseHP2 < 0 || blastoiseHP2 === 0 ||
                     pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100 ||
                     pikachuSpeedBar2 === 50 ||  pikachuSpeedBar2 <= 0 || charmanderSpeedBar2 === 50 || charmanderSpeedBar2 <= 0 || blastoiseSpeedBar2 === 50 || blastoiseSpeedBar2 <= 0) {

              case (pikachuHP2 < 0 || charmanderHP5 < 0 || blastoiseHP2 < 0):



              if(pikachuSelected === true && scytherSelected === true) {

                //hp
                pikachuHPDamage = 0;
                document.querySelector(".player1HP").style.width = pikachuHPDamage +   "%";
                (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                informWinner();

              }else if (charmanderSelected === true && scytherSelected === true) {


                //hp
                charmanderHPDamage = 0;
                document.querySelector(".player1HP").style.width = charmanderHPDamage +   "%";
                (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                informWinner();

              }else if (blastoiseSelected === true && scytherSelected === true) {


                //hp
                blastoiseHPDamage = 0;
                document.querySelector(".player1HP").style.width = blastoiseHPDamage +   "%";
                (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


                informWinner();

              }//end of if statements





              break;


              case (pikachuHP2 === 0 || charmanderHP5 === 0 || blastoiseHP2 === 0):

              if(pikachuSelected === true && scytherSelected === true) {


                //hp
                pikachuHPDamage = pikachuHP2;
                document.querySelector(".player1HP").style.width = pikachuHPDamage +   "%";
                (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                informWinner();


              }else if (charmanderSelected === true && scytherSelected === true) {

                //hp
                charmanderHPDamage = charmanderHP5;
                document.querySelector(".player1HP").style.width = charmanderHPDamage +   "%";
                (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                informWinner();


              }else if (blastoiseSelected === true && scytherSelected === true) {

                //hp
                blastoiseHPDamage = blastoiseHP2;
                document.querySelector(".player1HP").style.width = blastoiseHPDamage +   "%";
                (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                informWinner();

              }//end of if statements



              break;

              case (pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100 ||
                    pikachuSpeedBar2 === 50 ||  pikachuSpeedBar2 <= 0 || charmanderSpeedBar2 === 50 || charmanderSpeedBar2 <= 0 || blastoiseSpeedBar2 === 50 || blastoiseSpeedBar2 <= 0):


              //change color of HP progress bar here:
              if(pikachuSelected === true && scytherSelected === true && pikachuHP2 > 0 && pikachuHP2 <= 100) {


                //hp
                pikachuHPDamage = pikachuHP2;
                document.querySelector(".player1HP").style.width = pikachuHPDamage +   "%";
                (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              }else if (charmanderSelected === true && scytherSelected === true && charmanderHP5 > 0 && charmanderHP5 <= 100) {

                //hp
                charmanderHPDamage = charmanderHP5;
                document.querySelector(".player1HP").style.width = charmanderHPDamage +   "%";
                (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


              }else if (blastoiseSelected === true && scytherSelected === true && blastoiseHP2 > 0 && blastoiseHP2 <= 100) {

                //hp
                blastoiseHPDamage = blastoiseHP2;
                document.querySelector(".player1HP").style.width = blastoiseHPDamage +   "%";
                (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                //speedbar
                document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


              }//end of if statement










                //change speedbar progressbar here:
                if(pikachuSelected === true && scytherSelected === true && pikachuSpeedBar2 <= 50) {

                  //approve that pikachu speedbar is only decreased here:
                  pikachuSpeedDecreased = true;

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                  (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  console.log("pikachu speedbar array is "+ pikachuSpeedBar2);


                }

                 if (charmanderSelected === true && scytherSelected === true && charmanderSpeedBar2 <= 50) {

                  //approve that charmander speedbar is only decreased here:
                  charmanderSpeedDecreased = true;

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                  (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  console.log("charmander speedbar array is "+ charmanderSpeedBar2);

                }

                if (blastoiseSelected === true && scytherSelected === true && blastoiseSpeedBar2 <= 50) {

                  //approve that blastoise speedbar is only decreased here:
                  blastoiseSpeedDecreased = true;

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                  (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  console.log("blastoise speedbar array is "+ blastoiseSpeedBar2);


                }//end of if statement #2




              if(pikachuSelected === true && scytherSelected === true && pikachuSpeedBar2 <= 0) {

                //speedbar
                document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              }

               if (charmanderSelected === true && scytherSelected === true && charmanderSpeedBar2 <= 0) {

                //speedbar
                document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

              }

              if (blastoiseSelected === true && scytherSelected === true && blastoiseSpeedBar2 <= 0) {

                //speedbar
                document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


              }//end of if statement #3



              if(pikachuSelected === true && scytherSelected === true && pikachuSpeedBar2 === 0 && pikachuSpeedDecreased === true || pikachuSpeedBar2 <= 0 && pikachuSpeedDecreased === true) {

                //approve that pikachu rested and speedbar is at zero only here:
                restedPikachu = true;

                hpRecovered6 = 1; //setting this to 1 HP to indicate low speedbar

                document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
                (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                //play invalid sound here:
                playInvalidAction();


                //remove event listener to prevent user from using the rest function
                document.getElementById("defenseC").style.color = "#C91212";
                document.getElementById("defenseC").removeEventListener("click", defenseC);
                playPokemonRestSound();


                setTimeout(function() {

                  //inform player1 that they can no longer use rest function
                  document.getElementById("statusProgress2").innerHTML = "Pikachu can no longer rest because speed is too low!";

                }, 1000);// message is displayed after 1 sec.



                //debugging here -- delete when neccessary
                //turn of rest function for pikachu when speed progress bar is zero
                console.log("restedPikachu status: " + restedPikachu);
                console.log("Pikachu rest function was disabled.");

              }

              if (charmanderSelected === true && scytherSelected === true && charmanderSpeedBar2  === 0 && charmanderSpeedDecreased === true || charmanderSpeedBar2 <= 0 && charmanderSpeedDecreased === true) {

                //approve that charmander rested and speedbar is at zero only here:
                restedCharmander = true;

                hpRecovered6 = 1; //setting this to 1 HP to indicate low speedbar

                document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
                (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                //play invalid sound here:
                playInvalidAction();


                //remove event listener to prevent user from using the rest function
                document.getElementById("defenseC").style.color = "#C91212";
                document.getElementById("defenseC").removeEventListener("click", defenseC);
                playPokemonRestSound();


                setTimeout(function() {

                  //inform player1 that they can no longer use rest function
                  document.getElementById("statusProgress2").innerHTML = "Charmander can no longer rest because speed is too low!";

                }, 1000);// message is displayed after 1 sec.



                //turn off rest function for charmander when speed progress bar is zero
                console.log("restedCharmander status(2): " + restedCharmander);
                console.log("Charmander rest function was disabled.(2)");

              }

               if (blastoiseSelected === true && scytherSelected === true && blastoiseSpeedBar2  === 0 && blastoiseSpeedDecreased === true || blastoiseSpeedBar2 <= 0 && blastoiseSpeedDecreased === true) {

                //approve that blastoise rested and speedbar is at zero only here:
                restedBlastoise = true;

                hpRecovered6 = 1; //setting this to 1 HP to indicate low speedbar

                document.querySelector(".playerSpeed").style.width = hpRecovered6  +   "%";
                (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                //play invalid sound here:
                playInvalidAction();


                //remove event listener to prevent user from using the rest function
                document.getElementById("defenseC").style.color = "#C91212";
                document.getElementById("defenseC").removeEventListener("click", defenseC);
                playPokemonRestSound();


                setTimeout(function() {

                  //inform player1 that they can no longer use rest function
                  document.getElementById("statusProgress2").innerHTML = "Blastoise can no longer rest because speed is too low!";

                }, 1000);// message is displayed after 1 sec.


                //turn off rest function for blastoise when speed progress bar is zero
                console.log("restedBlastoise status(3): " + restedBlastoise);
                console.log("Blastoise rest function was disabled.(3)");



              }//end of if statement #4







              break;


              default:

              console.log("decreasePlayerHP2 default function was called. Look at the switch cases. (2)");


      }// end of switch statement

            }// end of if statement

          } // end of decreasePlayerHP2 function









          const decreasePlayerHP3 = function () {

            // variable declartions

            let pikachuHPDamage3 = 0;
            let charmanderHPDamage3 = 0;
            let blastoiseHPDamage3 = 0;
            let hpRecovered8 = 0;
            let pikachuHP2 = pikachuHealthBar.reduce(PokemonHPReduced);
            let pikachuSpeedBar2 = pikSpeedProgressBar.reduce(PokemonHPReduced);
            let charmanderHP5 = charmanderHealthBar.reduce(PokemonHPReduced);
            let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);
            let blastoiseHP2 = blastoiseHealthBar.reduce(PokemonHPReduced);
            let blastoiseSpeedBar2 = blaSpeedProgressBar.reduce(PokemonHPReduced);





            if(blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction1of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction2of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction3of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction4of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction5of6 === true ||
               blastoiseHP2 < 0 || blastoiseHP2 >= 0 && blastoiseMoves[0].blastoiseFunction6of6 === true ||

               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction1of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction2of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction3of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction4of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction5of6 === true ||
               charmanderHP5 < 0 || charmanderHP5 >= 0 && charmanderMoves[0].charmanderFunction6of6 === true ||

               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction1of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction2of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction3of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction4of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction5of6 === true ||
               pikachuHP2 < 0 || pikachuHP2 >= 0 && pikachuMoves[0].pikachuFunction6of6 === true ) {

              //if statement ensures that some functions are activated before making changes to the progress bar


              switch(pikachuHP2 < 0 || pikachuHP2 === 0  || charmanderHP5 < 0 || charmanderHP5 === 0 || blastoiseHP2 < 0 || blastoiseHP2 === 0 ||
                     pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100 ||
                     pikachuSpeedBar2 === 50 ||  pikachuSpeedBar2 <= 0 || charmanderSpeedBar2 === 50 || charmanderSpeedBar2 <= 0 || blastoiseSpeedBar2 === 50 || blastoiseSpeedBar2 <= 0) {

                case (pikachuHP2 < 0 || charmanderHP5 < 0 || blastoiseHP2 < 0):



                if(pikachuSelected === true && onixSelected === true) {

                  //hp
                  pikachuHPDamage3 = 0;
                  document.querySelector(".player1HP").style.width = pikachuHPDamage3 +   "%";
                  (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                  (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  informWinner();

                }else if (charmanderSelected === true && onixSelected === true) {


                  //hp
                  charmanderHPDamage3 = 0;
                  document.querySelector(".player1HP").style.width = charmanderHPDamage3 +   "%";
                  (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                  (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  informWinner();

                }else if (blastoiseSelected === true && onixSelected === true) {


                  //hp
                  blastoiseHPDamage3 = 0;
                  document.querySelector(".player1HP").style.width = blastoiseHPDamage3 +   "%";
                  (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                  (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  informWinner();

                }//end of if statements





                break;


                case (pikachuHP2 === 0 || charmanderHP5 === 0 || blastoiseHP2 === 0):

                if(pikachuSelected === true && onixSelected === true) {


                  //hp
                  pikachuHPDamage3 = pikachuHP2;
                  document.querySelector(".player1HP").style.width = pikachuHPDamage3 +   "%";
                  (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                  (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


                  informWinner();


                }else if (charmanderSelected === true && onixSelected === true) {


                  //hp
                  charmanderHPDamage3 = charmanderHP5;
                  document.querySelector(".player1HP").style.width = charmanderHPDamage3 +   "%";
                  (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                  (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  informWinner();


                }else if (blastoiseSelected === true && onixSelected === true) {


                  //hp
                  blastoiseHPDamage3 = blastoiseHP2;
                  document.querySelector(".player1HP").style.width = blastoiseHPDamage3 +   "%";
                  (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                  (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  informWinner();

                }//end of if statements



                break;

                case (pikachuHP2 > 0 && pikachuHP2 <= 100 || charmanderHP5 > 0 && charmanderHP5 <= 100 || blastoiseHP2 > 0 && blastoiseHP2 <= 100 ||
                      pikachuSpeedBar2 === 50 ||  pikachuSpeedBar2 <= 0 || charmanderSpeedBar2 === 50 || charmanderSpeedBar2 <= 0 || blastoiseSpeedBar2 === 50 || blastoiseSpeedBar2 <= 0):


                //change color of HP progress bar here:
                if(pikachuSelected === true && onixSelected === true && pikachuHP2 > 0 && pikachuHP2 <= 100) {

                  //hp
                  pikachuHPDamage3 = pikachuHP2;
                  document.querySelector(".player1HP").style.width = pikachuHPDamage3 +   "%";
                  (pikachuHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                  (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                }else if (charmanderSelected === true && onixSelected === true && charmanderHP5 > 0 && charmanderHP5 <= 100) {

                  //hp
                  charmanderHPDamage3 = charmanderHP5;
                  document.querySelector(".player1HP").style.width = charmanderHPDamage3 +   "%";
                  (charmanderHP5 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                  (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


                }else if (blastoiseSelected === true && onixSelected === true && blastoiseHP2 > 0 && blastoiseHP2 <= 100) {

                  //hp
                  blastoiseHPDamage3 = blastoiseHP2;
                  document.querySelector(".player1HP").style.width = blastoiseHPDamage3 +   "%";
                  (blastoiseHP2 <= 40) ? document.querySelector('.player1HP').style.backgroundColor = "#FD0202" : document.querySelector('.player1HP').style.backgroundColor = "#A6EDED"; //blue

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                  (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


                }//end of if statement










                  //change speedbar progressbar here:
                  if(pikachuSelected === true && onixSelected === true && pikachuSpeedBar2 <= 50) {

                    //approve that pikachu speedbar is only decreased here:
                    pikachuSpeedDecreased = true;

                    //speedbar
                    document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                    (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                    console.log("pikachu speedbar array is "+ pikachuSpeedBar2);


                  }

                   if (charmanderSelected === true && onixSelected === true && charmanderSpeedBar2 <= 50) {

                    //approve that charmander speedbar is only decreased here:
                    charmanderSpeedDecreased = true;

                    //speedbar
                    document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                    (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                    console.log("charmander speedbar array is "+ charmanderSpeedBar2);

                  }

                   if (blastoiseSelected === true && onixSelected === true && blastoiseSpeedBar2 <= 50) {

                    //approve that blastoise speedbar is only decreased here:
                    blastoiseSpeedDecreased = true;

                    //speedbar
                    document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                    (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                    console.log("blastoise speedbar array is "+ blastoiseSpeedBar2);


                  }//end of if statement #2




                if(pikachuSelected === true && onixSelected === true && pikachuSpeedBar2 <= 0) {

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = pikachuSpeedBar2  +   "%";
                  (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red


                }

                 if (charmanderSelected === true && onixSelected === true && charmanderSpeedBar2 <= 0) {

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = charmanderSpeedBar2  +   "%";
                  (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                }

                 if (blastoiseSelected === true && onixSelected === true && blastoiseSpeedBar2 <= 0) {

                  //speedbar
                  document.querySelector(".playerSpeed").style.width = blastoiseSpeedBar2  +   "%";
                  (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                }//end of if statement #3



                if(pikachuSelected === true && onixSelected === true && pikachuSpeedBar2 === 0 && pikachuSpeedDecreased === true || pikachuSpeedBar2 <= 0 && pikachuSpeedDecreased === true) {

                  //approve that pikachu rested and speedbar is at zero only here:
                  restedPikachu = true;

                  hpRecovered8 = 1; //setting this to 1 HP to indicate low speedbar

                  document.querySelector(".playerSpeed").style.width = hpRecovered8  +   "%";
                  (pikachuSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  //play invalid sound here:
                  playInvalidAction();


                  //remove event listener to prevent user from using the rest function
                  document.getElementById("defenseC").style.color = "#C91212";
                  document.getElementById("defenseC").removeEventListener("click", defenseC);
                  playPokemonRestSound();


                  setTimeout(function() {

                    //inform player1 that they can no longer use rest function
                    document.getElementById("statusProgress2").innerHTML = "Pikachu can no longer rest because speed is too low!";

                  }, 1000);// message is displayed after 1 sec.




                  //turn off rest function for pikachu when speed progress bar is zero
                  console.log("restedPikachu status: " + restedPikachu);
                  console.log("Pikachu rest function was disabled.");

                }

                 if (charmanderSelected === true && onixSelected === true && charmanderSpeedBar2  === 0 && charmanderSpeedDecreased === true || charmanderSpeedBar2 <= 0 && charmanderSpeedDecreased === true) {

                  //approve that charmander rested and speedbar is at zero only here:
                  restedCharmander = true;

                  hpRecovered8 = 1; //setting this to 1 HP to indicate low speedbar

                  document.querySelector(".playerSpeed").style.width = hpRecovered8  +   "%";
                  (charmanderSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  //play invalid sound here:
                  playInvalidAction();


                  //remove event listener to prevent user from using the rest function
                  document.getElementById("defenseC").style.color = "#C91212";
                  document.getElementById("defenseC").removeEventListener("click", defenseC);
                  playPokemonRestSound();


                  setTimeout(function() {

                    //inform player1 that they can no longer use rest function
                    document.getElementById("statusProgress2").innerHTML = "Charmander can no longer rest because speed is too low!";

                  }, 1000);// message is displayed after 1 sec.



                  //turn off rest function for charmander when speed progress bar is zero
                  console.log("restedCharmander status(2): " + restedCharmander);
                  console.log("Charmander rest function was disabled.(2)");

                }

                 if (blastoiseSelected === true && onixSelected === true && blastoiseSpeedBar2  === 0 && blastoiseSpeedDecreased === true || blastoiseSpeedBar2 <= 0 && blastoiseSpeedDecreased === true) {

                  //approve that blastoise rested and speedbar is at zero only here:
                  restedBlastoise = true;

                  hpRecovered8 = 1; //setting this to 1 HP to indicate low speedbar

                  document.querySelector(".playerSpeed").style.width = hpRecovered8  +   "%";
                  (blastoiseSpeedBar2 >= 50) ? document.querySelector('.playerSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.playerSpeed').style.backgroundColor = "#FD0202"; //red

                  //play invalid sound here:
                  playInvalidAction();


                  //remove event listener to prevent user from using the rest function
                  document.getElementById("defenseC").style.color = "#C91212";
                  document.getElementById("defenseC").removeEventListener("click", defenseC);
                  playPokemonRestSound();


                  setTimeout(function() {

                    //inform player1 that they can no longer use rest function
                    document.getElementById("statusProgress2").innerHTML = "Blastoise can no longer rest because speed is too low!";

                  }, 1000);// message is displayed after 1 sec.


                  //turn off rest function for blastoise when speed progress bar is zero
                  console.log("restedBlastoise status(3): " + restedBlastoise);
                  console.log("Blastoise rest function was disabled.(3)");



                }//end of if statement #4







                break;


                default:



              console.log("decreasePlayerHP3 default function was called. Look at the switch cases. (3)");


      }// end of switch statement

            }// end of if statement

          } // end of decreasePlayerHP3 function



  const increaseComputerHP = function () {

  // variable declartions

  let hpRestore2 = 0;
  let speedReduced2 = 0;
  let charmanderHP8 = charmanderHealthBar.reduce(PokemonHPReduced);
  let pikachuHP15 = pikachuHealthBar.reduce(PokemonHPReduced);
  let blastoiseHP16 = blastoiseHealthBar.reduce(PokemonHPReduced);
  let squirtleHP5 = squirtleHealthBar.reduce(PokemonHPReduced);
  let scytherHP8 = scytherHealthBar.reduce(PokemonHPReduced);
  let onixHP12 = onixHealthBar.reduce(PokemonHPReduced);
  let squirtleSpeedBar =  squSpeedProgressBar.reduce(PokemonSpeedReduced);
  let scytherSpeedBar = scySpeedProgressBar.reduce(PokemonSpeedReduced);
  let onixSpeedBar = onixSpeedProgressBar.reduce(PokemonSpeedReduced);



  if (squirtleMovesActivated[0].squirtleFunction6of6 === true || scytherMovesActivated[0].scytherFunction6of6 === true || onixMovesActivated[0].onixFunction6of6 === true) {



    switch (squirtleSpeedBar <=50 ||  scytherSpeedBar <=50 ||  onixSpeedBar <=50 || squirtleSpeedBar <=0 || squirtleSpeedBar < 0 ||  scytherSpeedBar <=0 || scytherSpeedBar <= 0 ||  onixSpeedBar <=0 || onixSpeedBar <0
            || squirtleHP5 <= 40  || scytherHP8 <= 40  || onixHP12 <= 40 ||
            squirtleHP5 > 40 && charmanderHP8 > 40 || scytherHP8 > 40  && pikachuHP15 > 40   || onixHP12 > 40 && blastoiseHP16 > 40 ||
            squirtleHP5 > 40 && pikachuHP15 > 40   || scytherHP8 > 40  && charmanderHP8 > 40 || onixHP12 > 40 && charmanderHP8 > 40 ||
            squirtleHP5 > 40 && blastoiseHP16 > 40 || scytherHP8 > 40  && blastoiseHP16 > 40 || onixHP12 > 40 && pikachuHP15 > 40) {



    case (squirtleSpeedBar <=50 ||  scytherSpeedBar <=50 ||  onixSpeedBar <=50):



    if (squirtleSelected === true && squirtleSpeedDecreased === true && squirtleSpeedBar <=50) {

      //play rest sound effect for computer
      playPokemonRestSound();

      //increase computer health and reduce computer speed to 50 HP

      //speedbar
      document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar  +   "%";
      (squirtleSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red




      console.log("squirtleSpeedDecreased: " + squirtleSpeedDecreased);


      setTimeout(function() {



        if (scytherSelected === false  && onixSelected === false && squirtleSpeedBar <= 0 && squirtleSpeedDecreased === false) {

          document.getElementById("statusProgress2").innerHTML = "";

        }else {

          //inform player1 of computer inablility to use the rest function
          document.getElementById("statusProgress2").innerHTML = "Squirtle's speed is getting low...";

        }



      }, 4000);





    }//end of if statement for squirtleSpeedDecreased

    if (scytherSelected === true && scytherSpeedDecreased === true && scytherSpeedBar <=50) {

      //play rest sound effect for computer
      playPokemonRestSound();

     //increase computer health and reduce computer speed to 50 HP

     //speedbar
     document.querySelector(".cpuSpeed").style.width = scytherSpeedBar  +   "%";
     (scytherSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      console.log("scytherSpeedDecreased: " + scytherSpeedDecreased);


      setTimeout(function() {



        if (squirtleSelected === false  && onixSelected === false && scytherSpeedBar <= 0 && scytherSpeedDecreased === false) {

          document.getElementById("statusProgress2").innerHTML = "";

        }else {

          //inform player1 of computer inablility to use the rest function
          document.getElementById("statusProgress2").innerHTML = "Scyther's speed is getting low...";

        }


      }, 4000);




    }//end of if statement for scytherSpeedDecreased

    if (onixSelected === true && onixSpeedDecreased === true && onixSpeedBar <=50) {

      //play rest sound effect for computer
      playPokemonRestSound();

      //increase computer health and reduce computer speed to 50 HP

      //speedbar
      document.querySelector(".cpuSpeed").style.width = onixSpeedBar  +   "%";
      (onixSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


      console.log("onixSpeedDecreased: " + onixSpeedDecreased);


      setTimeout(function() {



        if (squirtleSelected === false  && scytherSelected === false && onixSpeedBar <= 0 && onixSpeedDecreased === false) {

          document.getElementById("statusProgress2").innerHTML = "";

        } else {

          //inform player1 of computer inablility to use the rest function
          document.getElementById("statusProgress2").innerHTML = "Onix's speed is getting low...";

        }



      }, 4000);




    }//end of if statement for onixSpeedDecreasedS



    case (squirtleSpeedBar <=0 || squirtleSpeedBar < 0 ||  scytherSpeedBar <=0 || scytherSpeedBar <= 0 ||  onixSpeedBar <=0 || onixSpeedBar <0):



    if (squirtleSelected === true && squirtleSpeedDecreased === true && squirtleSpeedBar <= 0 || squirtleSelected === true && squirtleSpeedDecreased === true && squirtleSpeedBar < 0) {

      //pause rest sound effect for computer
      playPokemonRestSound();

      //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = 1;
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";

      //speedbar
      document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar  +   "%";
      (squirtleSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      //change squirtleSpeedDecreased to false
      squirtleSpeedDecreased = false;

      console.log("squirtleSpeedDecreased: " + squirtleSpeedDecreased);


    }//end of if statement for squirtleSpeedDecreased

    if (scytherSelected === true && scytherSpeedDecreased === true && scytherSpeedBar <= 0 || scytherSelected === true && scytherSpeedDecreased === true && scytherSpeedBar < 0) {

      //pause rest sound effect for computer
      playPokemonRestSound();

     //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = 1;
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";

      //speedbar
      document.querySelector(".cpuSpeed").style.width = scytherSpeedBar  +   "%";
      (scytherSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      //change scytherSpeedDecreased to false
      scytherSpeedDecreased = false;

      console.log("scytherSpeedDecreased: " + scytherSpeedDecreased);


    }//end of if statement for scytherSpeedDecreased

    if (onixSelected === true && onixSpeedDecreased === true && onixSpeedBar <= 0 || onixSelected === true && onixSpeedDecreased === true && onixSpeedBar < 0) {

      //pause rest sound effect for computer
      playPokemonRestSound();

      //increase computer health and reduce computer speed to 50 HP

      speedReduced2 = 1;
      document.querySelector(".cpuSpeed").style.width = speedReduced2 +   "%";

      //speedbar
      document.querySelector(".cpuSpeed").style.width = onixSpeedBar  +   "%";
      (onixSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red


      //change onixSpeedDecreased to false
      onixSpeedDecreased = false;

      console.log("onixSpeedDecreased: " + onixSpeedDecreased);



    }//end of if statement for onixSpeedDecreasedS




    case (squirtleHP5 <= 40 || scytherHP8 <= 40 || onixHP12 <= 40):

    if (squirtleSelected === true && squirtleHP5 <= 40) {

      //enable health restoration if computer pokemon health is <= 40


      //hp
      hpRestore2 = squirtleHP5;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";
      (squirtleHP5 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = squirtleSpeedBar  +   "%";
      (squirtleSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      restedSquirtle = true;
      squirtleHpRecovered.push(10);

      console.log("restedSquirtle hp when < 40: " + restedSquirtle);
      console.log("squirtleHpRecovered: " + squirtleHpRecovered);
      console.log("squirtleSpeedbar: "+ squirtleSpeedBar);


    }//end of if statement for when squirtle hp < 40

    if (scytherSelected === true  && scytherHP8 <= 40) {

      //enable health restoration if computer pokemon health is <= 40


      //hp
      hpRestore2 = scytherHP8;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";
      (scytherHP8 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = scytherSpeedBar  +   "%";
      (scytherSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      restedScyther = true;
      scytherHpRecovered.push(10);


      console.log("restedScyther hp when < 40: " + restedScyther);
      console.log("scytherHpRecovered: " + scytherHpRecovered);
      console.log("scytherSpeedbar: " + scytherSpeedBar);



    }//end of if statement for when scyther hp < 40

    if (onixSelected === true && onixHP12 <= 40) {


      //enable health restoration if computer pokemon health is <= 40


      //hp
      hpRestore2 = onixHP12;
      document.querySelector(".cpuHP").style.width = hpRestore2 +   "%";
      (onixHP12 <= 40) ? document.querySelector('.cpuHP').style.backgroundColor = "#FD0202" : document.querySelector('.cpuHP').style.backgroundColor = "#A6EDED"; //blue

      //speedbar
      document.querySelector(".cpuSpeed").style.width = onixSpeedBar  +   "%";
      (onixSpeedBar >= 50) ? document.querySelector('.cpuSpeed').style.backgroundColor = "#A6EDED" : document.querySelector('.cpuSpeed').style.backgroundColor = "#FD0202"; //red

      restedOnix = true;
      onixHpRecovered.push(10);


      console.log("restedOnix hp when < 40: " + restedOnix);
      console.log("onixHpRecovered: " +   onixHpRecovered);
      console.log("onixSpeedBar: " + onixSpeedBar);




    }//end of if statement for when onix hp is < 40



    break;

    case (squirtleHP5 > 40 && charmanderHP8 > 40 || scytherHP8 > 40  && pikachuHP15 > 40   || onixHP12 > 40 && blastoiseHP16 > 40 ||
          squirtleHP5 > 40 && pikachuHP15 > 40   || scytherHP8 > 40  && charmanderHP8 > 40 || onixHP12 > 40 && charmanderHP8 > 40 ||
          squirtleHP5 > 40 && blastoiseHP16 > 40 || scytherHP8 > 40  && blastoiseHP16 > 40 || onixHP12 > 40 && pikachuHP15 > 40):

    if (squirtleSelected === true && squirtleHP5 > 40 && charmanderHP8 > 40  ||
        squirtleSelected === true && squirtleHP5 > 40 && pikachuHP15 > 40    ||
        squirtleSelected === true && squirtleHP5 > 40 && blastoiseHP16 > 40 ) {

      //prevent health restoration if computer pokemon health is > 40
      restedSquirtle = false;

      //laughandpoint image loads here
      player1TauntImage();

      setTimeout(function() {

      //taunt player1 for trying to use health when > 40
      document.getElementById("statusProgress").innerHTML = "Squirtle was laughing because you tried to restore health...";

      }, 3000); //text will be displayed after 3 secs

      //computer laughs at player when attempting to use health restoration when health is > 40
      playCartoonLaughSound();


      console.log("restedSquirtle hp: when > 40 is " + restedSquirtle);



    }//end of if statement for when squirtle hp > 40


    if (scytherSelected === true && scytherHP8 > 40  && pikachuHP15 > 40   ||
        scytherSelected === true && scytherHP8 > 40  && charmanderHP8 > 40 ||
        scytherSelected === true && scytherHP8 > 40  && blastoiseHP16 > 40) {


      //prevent health restoration if computer pokemon health is > 40
      restedScyther = false;

      //laughandpoint image loads here
      player1TauntImage();

      setTimeout(function() {

      //taunt player1 for trying to use health when > 40
      document.getElementById("statusProgress").innerHTML = "Scyther was laughing because you tried to restore health...";

      }, 3000); //text will be displayed after 3 secs

      //computer laughs at player when attempting to use health restoration when health is > 40
      playCartoonLaughSound();

      console.log("restedScyther hp: when > 40 is " + restedScyther);



    }//end of if statement for when scyther hp is > 40


    if (onixSelected === true && onixHP12 > 40 && blastoiseHP16 > 40  ||
        onixSelected === true && onixHP12 > 40 && charmanderHP8 > 40  ||
        onixSelected === true && onixHP12 > 40 && pikachuHP15 > 40) {


      //prevent health restoration if computer pokemon health is > 40
      restedOnix = false;

      //laughandpoint image loads here
      player1TauntImage();

      setTimeout(function() {

      //taunt player1 for trying to use health when > 40
      document.getElementById("statusProgress").innerHTML = "Onix was laughing because you tried to restore health...";

      }, 3000); //text will be displayed after 3 secs

      //computer laughs at player when attempting to use health restoration when health is > 40
      playCartoonLaughSound();

      console.log("restedOnix hp: when > 40 is " + restedOnix);



    }//end of if statement when onix hp is > 40






    break;

    default:

    console.log("increaseComputerHP default function was called. Look at the switch cases. (1)");

  }//end of switch statement


            }//end of primary if statement


                }// end of increaseComputerHP







          














      const checkTheStatus = function () {



      // varible declartions

      let charmanderHP = charmanderHealthBar.reduce(PokemonHPReduced);
      let squirtleHP = squirtleHealthBar.reduce(PokemonHPReduced);
      let pikachuHP = pikachuHealthBar.reduce(PokemonHPReduced);
      let scytherHP = scytherHealthBar.reduce(PokemonHPReduced);
      let blastoiseHP = blastoiseHealthBar.reduce(PokemonHPReduced);
      let onixHP = onixHealthBar.reduce(PokemonHPReduced);



        

      //This function will check the progressBar status and call another function if conditions are met

      if(charmanderHP >= 20 &&  charmanderHP <= 40 || squirtleHP >= 20 &&  squirtleHP <= 40 ||
      pikachuHP >= 20 &&  pikachuHP <= 40 || scytherHP >= 20 &&  scytherHP <= 40  ||
    blastoiseHP >= 20 &&  blastoiseHP <= 40 || onixHP >= 20 &&  onixHP <= 40){

          informStatus();


      }else if (charmanderHP >= 1 && squirtleHP >= 1 ||
      pikachuHP >= 1 && scytherHP >= 1 ||
    blastoiseHP >= 1 && onixHP >= 1) {






      } // end of if statements

    } // end of checkTheStatus function



    const PokemonHPReduced = function (accumulator, currentValue) {


          return accumulator + currentValue;
          }

    const PokemonRestoredReducer = function (accumulator, currentValue) {


          return accumulator + currentValue;
        }

    const PokemonSpeedReduced = function (accumulator, currentValue) {


          return accumulator + currentValue;
      }


    const getCharmanderHP =  function () {


     // charmanderHealthBar.filter((element, index, array))

     // console.log("Results from getCharmanderHP: " + element);
     // return element === 45;
    }


    const getSquirtleHP   =  function () {

      //squirtleHealthBar.filter((element, index, array));

      //console.log("Results from getSquirtleHP: " + element);
      //return element === 30;
    }














            

    //default is false and it implies that the pokemon didn't use the rest function or function6of6
    let restedCharmander = false;
    let restedPikachu = false;
    let restedBlastoise = false;
    let restedSquirtle = false;
    let restedScyther = false;
    let restedOnix = false;
    let charmanderSpeedDecreased = false;
    let pikachuSpeedDecreased = false;
    let blastoiseSpeedDecreased = false;
    let squirtleSpeedDecreased = false;
    let scytherSpeedDecreased = false;
    let onixSpeedDecreased = false;
    let charmanderRestoredHPBackup = [0];
    let pikachuRestoredHPBackup = [0];
    let blastoiseRestoredHPBackup = [0];
    let squirtleRestoredHPBackup = [0];
    let scytherRestoredHPBackup = [0];
    let onixRestoredHPBackup = [0];










 





    //save to delete code below? 02-01-2023

   // pokemonName = ["Charmander","Scyther","Blastoise","Onix","Squirtle", "Pikachu"];
   // player1Menu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];
   // attackOptions = ["Fire Blaster","Blaze", "Solar Beam"];





    const charmanderMoves = [{

      charmanderFunction1of6: false, // [0]
      charmanderFunction2of6: false, // [1]
      charmanderFunction3of6: false, // [2]
      charmanderFunction4of6: false, // [3]
      charmanderFunction5of6: false, // [4]
      charmanderFunction6of6: false //  [5]

    }] //end of charmanderMoves object



    const fireBlasterMove = function () {


         if(charmanderSelected === true && squirtleSelected === true) {


           //approve attack move for pokemon was clicked
           charmanderMoves[0].charmanderFunction1of6 = true;

           squirtleMovesActivated[0].squirtleFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("charmanderFunction1of6 is: " + charmanderMoves[0].charmanderFunction1of6);

           //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
           //fireBlaster does -10 damage on squirtle
           squirtleHealthBar.push(-10);
           squirtleBackup.push(-10);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP();

           //debugging here -----------------------------------
           console.log("squirtleHealthBar array is " + squirtleHealthBar);
           console.log("squirtleBackup array is " + squirtleBackup);

            // show image
            chrAtkImage1();

            //change boolean state so that computer can attack
            makeMove[0].player1Move = false;
            makeMove[0].computerMove = true;

            console.log(makeMove[0]);


         }else if (charmanderSelected === true && scytherSelected === true) {


           //approve attack move for pokemon was clicked
           charmanderMoves[0].charmanderFunction1of6 = true;

           scytherMovesActivated[0].scytherFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("charmanderFunction1of6 (2) is: " + charmanderMoves[0].charmanderFunction1of6);

           //reflect the changes to scytherHealthBar AND scytherBackup array as well.
           //fireBlaster does -25 damage on scyther
           scytherHealthBar.push(-25);
           scytherBackup.push(-25);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP3();

           //debugging here -----------------------------------
           console.log("scytherHealthBar array (2) is " + scytherHealthBar);
           console.log("scytherBackup array (2) is " + scytherBackup);

            // show image
            chrAtkImage1();

            //change boolean state so that computer can attack
            makeMove[0].player1Move = false;
            makeMove[0].computerMove = true;

            console.log(makeMove[0]);

         }else if (charmanderSelected === true && onixSelected === true) {

           //approve attack move for pokemon was clicked
           charmanderMoves[0].charmanderFunction1of6 = true;

           onixMovesActivated[0].onixFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("charmanderFunction1of6 (3) is: " + charmanderMoves[0].charmanderFunction1of6);

           //reflect the changes to onixHealthBar AND onixBackup array as well.
           //fireBlaster does -5 damage on onix
           onixHealthBar.push(-5);
           onixBackup.push(-5);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP2();

           //debugging here -----------------------------------
           console.log("onixHealthBar array (3) is " + onixHealthBar);
           console.log("onixBackup array (3) is " + onixBackup);

           // show image
           chrAtkImage1();

           //change boolean state so that computer can attack
           makeMove[0].player1Move = false;
           makeMove[0].computerMove = true;

           console.log(makeMove[0]);

         }//end of statements


    } // end of fireBlasterMove


    const blazeMove = function() {
      // blaze does -4 damage on computer

      if(charmanderSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction2of6 = true;

        squirtleMovesActivated[0].squirtleFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction2of6 is: " + charmanderMoves[0].charmanderFunction2of6);

       //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
       //Blaze does -4 damage on squirtle
        squirtleHealthBar.push(-4);
        squirtleBackup.push(-4);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

       //debugging here -----------------------------------
        console.log("squirtleHealthBar array is " + squirtleHealthBar);
        console.log("squirtleBackup array is " + squirtleBackup);

        // show image
         chrAtkImage2();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (charmanderSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction2of6 = true;

        scytherMovesActivated[0].scytherFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction2of6 (2) is: " + charmanderMoves[0].charmanderFunction2of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //blaze does -20 damage on scyther
        scytherHealthBar.push(-20);
        scytherBackup.push(-20);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (2) is " + scytherHealthBar);
        console.log("scytherBackup array (2) is " + scytherBackup);

         // show image
         chrAtkImage2();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (charmanderSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction2of6 = true;

        onixMovesActivated[0].onixFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction2of6 (3) is: " + charmanderMoves[0].charmanderFunction2of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //blaze does -4 damage on onix
        onixHealthBar.push(-4);
        onixBackup.push(-4);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        chrAtkImage2();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);





      }//end of if statement


    } // end of blazeMove

    const solarPowerMove = function() {

      // solarPower does -35 damage on computer

      if(charmanderSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction3of6 = true;

        squirtleMovesActivated[0].squirtleFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction3of6 is: " + charmanderMoves[0].charmanderFunction3of6);

       //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
       //Blaze does -10 damage on squirtle
        squirtleHealthBar.push(-35);
        squirtleBackup.push(-35);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

       //debugging here -----------------------------------
        console.log("squirtleHealthBar array is " + squirtleHealthBar);
        console.log("squirtleBackup array is " + squirtleBackup);

        // show image
         chrAtkImage3();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (charmanderSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction3of6 = true;

        scytherMovesActivated[0].scytherFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction3of6 (2) is: " + charmanderMoves[0].charmanderFunction3of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //solarPower does -35 damage on scyther
        scytherHealthBar.push(-35);
        scytherBackup.push(-35);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (2) is " + scytherHealthBar);
        console.log("scytherBackup array (2) is " + scytherBackup);

         // show image
         chrAtkImage3();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);

      }else if (charmanderSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction3of6 = true;

        onixMovesActivated[0].onixFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction3of6 (3) is: " + charmanderMoves[0].charmanderFunction3of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //solarPower does -35 damage on onix
        onixHealthBar.push(-35);
        onixBackup.push(-35);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        chrAtkImage3();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);

      }//end of if statement


    } //end of solarPowerMove



    const growlMove = function() {

      // growl does -10 damage on computer

      if(charmanderSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction4of6 = true;

        squirtleMovesActivated[0].squirtleFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction4of6 is: " + charmanderMoves[0].charmanderFunction4of6);

       //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
       //growl does -10 damage on squirtle
        squirtleHealthBar.push(-10);
        squirtleBackup.push(-10);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

       //debugging here -----------------------------------
        console.log("squirtleHealthBar array is " + squirtleHealthBar);
        console.log("squirtleBackup array is " + squirtleBackup);

        // show image
         chrAtkImage4();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (charmanderSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction4of6 = true;

        scytherMovesActivated[0].scytherFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction4of6 (2) is: " + charmanderMoves[0].charmanderFunction4of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //growl does -15 damage on scyther
        scytherHealthBar.push(-15);
        scytherBackup.push(-15);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (2) is " + scytherHealthBar);
        console.log("scytherBackup array (2) is " + scytherBackup);

         // show image
         chrAtkImage4();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (charmanderSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction4of6 = true;

        onixMovesActivated[0].onixFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction4of6 (3) is: " + charmanderMoves[0].charmanderFunction4of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //growl does -15 damage on onix
        onixHealthBar.push(-15);
        onixBackup.push(-15);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        chrAtkImage4();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);




      }//end of if statement


    } //end of growlMove





    const smokeScreenMove = function() {

      // smokescreen does -20 damage on computer

      if(charmanderSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction5of6 = true;

        squirtleMovesActivated[0].squirtleFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction5of6 is: " + charmanderMoves[0].charmanderFunction5of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //smokescreen does -30 damage on squirtle
        squirtleHealthBar.push(-30);
        squirtleBackup.push(-30);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array is " + squirtleHealthBar);
        console.log("squirtleBackup array is " + squirtleBackup);

        // show image
         chrAtkImage5();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (charmanderSelected === true && scytherSelected === true) {


        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction5of6 = true;

        scytherMovesActivated[0].scytherFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction5of6 (2) is: " + charmanderMoves[0].charmanderFunction5of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //smokescreen does -10 damage on scyther
        scytherHealthBar.push(-10);
        scytherBackup.push(-10);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (2) is " + scytherHealthBar);
        console.log("scytherBackup array (2) is " + scytherBackup);

         // show image
         chrAtkImage5();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);





      }else if (charmanderSelected === true && onixSelected === true) {


        //approve attack move for pokemon was clicked
        charmanderMoves[0].charmanderFunction5of6 = true;

        onixMovesActivated[0].onixFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("charmanderFunction5of6 (3) is: " + charmanderMoves[0].charmanderFunction5of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //smokescreen  does -12 damage on onix
        onixHealthBar.push(-12);
        onixBackup.push(-12);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        chrAtkImage5();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);






      }//end of if statement


    } //end of smokeScreenMove



    const rest = function () {

      //rest primarly goes to squirtle and 3 other pokemon (charmander, blastoise, pikachu)

      //varible declartion
      let squirtleHP5 = squirtleHealthBar.reduce(PokemonHPReduced);
      let squirtleSpeedBar =  squSpeedProgressBar.reduce(PokemonSpeedReduced);


      //determine which pokemon are selected and enables the rest function for squirtle and charmander (default) or squirtle and blastoise or squirtle and pikachu


     if (squirtleSelected === true && charmanderSelected === true) {

       charmanderMoves[0].charmanderFunction6of6 = true;
       squirtleMovesActivated[0].squirtleFunction6of6 = true;

     }else if (squirtleSelected === true && blastoiseSelected === true) {

       //disable previous function
       charmanderMoves[0].charmanderFunction6of6 = false;
       squirtleMovesActivated[0].squirtleFunction6of6 = false;

       //enable current function
       blastoiseMoves[0].blastoiseFunction6of6 = true;
       squirtleMovesActivated[0].squirtleFunction6of6 = true;


     }else if (squirtleSelected === true && pikachuSelected === true) {

       //disable previous function
       blastoiseMoves[0].blastoiseFunction6of6 = false;
       squirtleMovesActivated[0].squirtleFunction6of6 = false;

       //enable current function
       pikachuMoves[0].pikachuFunction6of6 = true;
       squirtleMovesActivated[0].squirtleFunction6of6 = true;



     }//end of multiple if statements


     //debugging here -- delete when neccessary
     console.log("squirtleMoves Function6of6 is : " + squirtleMovesActivated[0].squirtleFunction6of6);
     console.log("(R1-00) charmander Function6of6 is : " + charmanderMoves[0].charmanderFunction6of6);
     console.log("(R1-01) blastoise Function6of6 is : " + blastoiseMoves[0].blastoiseFunction6of6);
     console.log("(R1-02) pikachu Function6of6 is : " + pikachuMoves[0].pikachuFunction6of6);

     //charmander vs squirtle (default) 1 of 3
     //rest recovers 10 HP to squirtle if conditions are true

     if (charmanderSelected === true && squirtleSelected === true && squirtleHP5 <= 40) {

       //show recovery image for computer pokemon
       squAtkImage6();

       //reflect the changes to squirtleHealthBar
       squirtleHealthBar.push(10);

       //backup array for health restoration needs to be updated
       squirtleHpRecovered.push(10);

       //reflect the changes to squirtle speedbar
       squSpeedProgressBar.push(-50);

       //squirtle speedbar is true only here:
       squirtleSpeedDecreased = true;

       //debugging here------------------------------------------------------

       console.log("squirtleHealthBar array is "+ squirtleHealthBar);
       console.log("squirtleHP_recovered array is " + squirtleHpRecovered);


     }else if (charmanderSelected === true && squirtleSelected === true && squirtleHP5 > 40) {

       //if health is > 40 then this implies that squirtle didn't restore health
       restedSquirtle = false;

       //debugging
       console.log("restedSquirtle status when hp > 40: " + restedSquirtle);

       //make no changes to squirtleHealthBar
       squirtleHealthBar.push(0);

       //make no changes to squirtleHpRecovered
       squirtleHpRecovered.push(0);

       //make no the changes to squirtle speedbar as well
       squSpeedProgressBar.push(0);


     }//end of if statements 1 of 3

     //blastoise vs squirtle 2 of 3
    //rest recovers 10 HP to squirtle if conditions are true

    if (blastoiseSelected === true && squirtleSelected === true && squirtleHP5 <= 40) {

      //show recovery image for computer pokemon
      squAtkImage6();

      //reflect the changes to squirtleHealthBar
      squirtleHealthBar.push(10);

      //backup array for health restoration needs to be updated
      squirtleHpRecovered.push(10);

      //reflect the changes to squirtle speedbar
      squSpeedProgressBar.push(-50);

      //squirtle speedbar is true only here:
      squirtleSpeedDecreased = true;

      //debugging here------------------------------------------------------

      console.log("(R1-2) squirtleHealthBar array is "+ squirtleHealthBar);
      console.log("(R1-2) squirtleHP_recovered array is " + squirtleHpRecovered);

    }else if (blastoiseSelected === true && squirtleSelected === true && squirtleHP5 > 40) {

      //if health is > 40 then this implies that squirtle didn't restore health
      restedSquirtle = false;

      //debugging
      console.log("(R1-2) restedSquirtle status when hp > 40: " + restedSquirtle);

      //make no changes to squirtleHealthBar
      squirtleHealthBar.push(0);

      //make no changes to squirtleHpRecovered
      squirtleHpRecovered.push(0);

      //make no the changes to squirtle speedbar as well
      squSpeedProgressBar.push(0);


    }//end of if statements 2 of 3


    //pikachu vs squirtle 3 of 3
    //rest recovers 10 HP to squirtle if conditions are true

    if (pikachuSelected === true && squirtleSelected === true && squirtleHP5 <= 40) {

      //show recovery image for computer pokemon
      squAtkImage6();

      //reflect the changes to squirtleHealthBar
      squirtleHealthBar.push(10);

      //backup array for health restoration needs to be updated
      squirtleHpRecovered.push(10);

      //reflect the changes to squirtle speedbar
      squSpeedProgressBar.push(-50);

      //squirtle speedbar is true only here:
      squirtleSpeedDecreased = true;

      //debugging here------------------------------------------------------

      console.log("(R1-3) squirtleHealthBar array is "+ squirtleHealthBar);
      console.log("(R1-3) squirtleHP_recovered array is " + squirtleHpRecovered);


    }else if (pikachuSelected === true && squirtleSelected === true && squirtleHP5 > 40) {

      //if health is > 40 then this implies that squirtle didn't restore health
      restedSquirtle = false;

      //debugging
      console.log("(R1-3) restedSquirtle status when hp > 40: " + restedSquirtle);

      //make no changes to squirtleHealthBar
      squirtleHealthBar.push(0);

      //make no changes to squirtleHpRecovered
      squirtleHpRecovered.push(0);

      //make no the changes to squirtle speedbar as well
      squSpeedProgressBar.push(0);


    }//end of if statements 3 of 3


     //This is the function that applies the reduce method to the arrays listed above. Computer gives hp to charmander if certain conditions are true.
     increaseComputerHP();



     if (charmanderSelected === true && squirtleSelected === true && squirtleSpeedDecreased === true ||
         blastoiseSelected === true && squirtleSelected === true && squirtleSpeedDecreased === true ||
         pikachuSelected === true && squirtleSelected === true && squirtleSpeedDecreased === true) {

       setTimeout(function() {

          document.getElementById("statusProgress").innerHTML = pokemonName[4]+ " rested as well! ";


       }, 3000);

     }//end of if statement

     //conditional ternary does the following:

     //inform player1 of computer inablility to use the rest function
     (scytherSelected === false  && onixSelected === false && squirtleSpeedBar <= 0 && squirtleSpeedDecreased === false) ? document.getElementById("statusProgress").innerHTML = "Squirtle's speed is too low to rest..." : document.getElementById("statusProgress").innerHTML = "";


     //rest2 primarly goes to scyther and 3 other pokemon (charmander, pikachu, or blastoise)

     console.log("The rest function started on this line: (2) ");

     //variable declartion
      let scytherHP14 = scytherHealthBar.reduce(PokemonHPReduced);
      let scytherSpeedBar = scySpeedProgressBar.reduce(PokemonSpeedReduced);




    //determine which pokemon are selected and enables the rest function for pikachu and scyther (default) or scyther and charmander, or scyther and blastoise


     if (scytherSelected === true && pikachuSelected === true) {

       scytherMovesActivated[0].scytherFunction6of6 = true;
       pikachuMoves[0].pikachuFunction6of6 = true;

     }else if (scytherSelected === true && charmanderSelected === true) {

       //disable previous function
       scytherMovesActivated[0].scytherFunction6of6 = false;
       pikachuMoves[0].pikachuFunction6of6 = false;

       //enable current function
       charmanderMoves[0].charmanderFunction6of6 = true;
       scytherMovesActivated[0].scytherFunction6of6 = true;

     }else if (scytherSelected === true && blastoiseSelected === true) {

        //disable previous function
        charmanderMoves[0].charmanderFunction6of6 = false;
        scytherMovesActivated[0].scytherFunction6of6 = false;

        //enable current function
        blastoiseMoves[0].blastoiseFunction6of6 = true;
        scytherMovesActivated[0].scytherFunction6of6 = true;



     }//end of multiple if statements


     //debugging here -- delete when neccessary
     console.log("scytherMoves Function6of6 is : " + scytherMovesActivated[0].scytherFunction6of6);
     console.log("(R2-00) pikachu Function6of6 is : " + pikachuMoves[0].pikachuFunction6of6);
     console.log("(R2-01) charmander Function6of6 is : " + charmanderMoves[0].charmanderFunction6of6);
     console.log("(R2-02) blastoise Function6of6 is : " + blastoiseMoves[0].blastoiseFunction6of6);



     //pikachu vs scyther (default) 1 of 3
     //rest recovers 10 HP to scyther if conditions are true

     if (pikachuSelected === true && scytherSelected === true && scytherHP14 <= 40) {

       //show recovery image for computer pokemon
       scyAtkImage6();

       //reflect the changes to scytherHealthBar
       scytherHealthBar.push(10);

       //backup array for health restoration needs to be updated
       scytherHpRecovered.push(10);

       //reflect the changes to scySpeedProgressBar
       scySpeedProgressBar.push(-50);

       //scyther speedbar is true only here:
       scytherSpeedDecreased = true;

       //debugging--------------------------------------

      console.log("scytherHealthBar array is "+ scytherHealthBar);
      console.log("scytherHP_recovered array is " + scytherHpRecovered);

     }else if (pikachuSelected === true && scytherSelected === true && scytherHP14 > 40) {

       //if health is > 40 then this implies that scyther didn't restore health
       restedScyther = false;

       //debugging
       console.log("restedScyther status when hp > 40: " + restedScyther);

       //make no changes to scytherHealthBar
       scytherHealthBar.push(0);

       //make no changes to scytherHpRecovered
       scytherHpRecovered.push(0);

       //make no the changes to scySpeedProgressBar
       scySpeedProgressBar.push(0);


     }//end of if statements 1 of 3

     //scyther vs charmander 2 of 3
     //rest recovers 10 HP to scyther if conditions are true

     if (charmanderSelected === true && scytherSelected === true && scytherHP14 <= 40) {

       //show recovery image for computer pokemon
       scyAtkImage6();

       //reflect the changes to scytherHealthBar
       scytherHealthBar.push(10);

       //backup array for health restoration needs to be updated
       scytherHpRecovered.push(10);

       //reflect the changes to scySpeedProgressBar
       scySpeedProgressBar.push(-50);

       //scyther speedbar is true only here:
       scytherSpeedDecreased = true;

       //debugging--------------------------------------

      console.log("(R2-2) scytherHealthBar array is "+ scytherHealthBar);
      console.log("(R2-2) scytherHP_recovered array is " + scytherHpRecovered);

     }else if (charmanderSelected === true && scytherSelected === true && scytherHP14 > 40) {

       //if health is > 40 then this implies that scyther didn't restore health
       restedScyther = false;

       //debugging
       console.log("(R2) restedScyther status when hp > 40: " + restedScyther);

       //make no changes to scytherHealthBar
       scytherHealthBar.push(0);

       //make no changes to scytherHpRecovered
       scytherHpRecovered.push(0);

       //make no the changes to scySpeedProgressBar
       scySpeedProgressBar.push(0);

     }//end of if statements 2 of 3


    //scyther vs blastoise 3 of 3
    //rest recovers 10 HP to scyther if conditions are true

    if (blastoiseSelected === true && scytherSelected === true && scytherHP14 <= 40) {

      //show recovery image for computer pokemon
      scyAtkImage6();

      //reflect the changes to scytherHealthBar
      scytherHealthBar.push(10);

      //backup array for health restoration needs to be updated
      scytherHpRecovered.push(10);

      //reflect the changes to scySpeedProgressBar
      scySpeedProgressBar.push(-50);

      //scyther speedbar is true only here:
      scytherSpeedDecreased = true;

      //debugging--------------------------------------

     console.log("(R3-2) scytherHealthBar array is "+ scytherHealthBar);
     console.log("(R3-2) scytherHP_recovered array is " + scytherHpRecovered);

    }else if (blastoiseSelected === true && scytherSelected === true && scytherHP14 > 40) {

      //if health is > 40 then this implies that scyther didn't restore health
      restedScyther = false;

      //debugging
      console.log("(R3) restedScyther status when hp > 40: " + restedScyther);

      //make no changes to scytherHealthBar
      scytherHealthBar.push(0);

      //make no changes to scytherHpRecovered
      scytherHpRecovered.push(0);

      //make no the changes to scySpeedProgressBar
      scySpeedProgressBar.push(0);


    }//end of if statements 3 of 3



     //This is the function that applies the reduce method to the arrays listed above. Computer gives hp to pikachu if certain conditions are true.
     increaseComputerHP(); //also increases health for squirtle


     if (pikachuSelected === true && scytherSelected === true && scytherSpeedDecreased === true ||
         charmanderSelected === true && scytherSelected === true && scytherSpeedDecreased === true ||
         blastoiseSelected === true && scytherSelected === true && scytherSpeedDecreased === true) {

       setTimeout(function() {

          document.getElementById("statusProgress").innerHTML = pokemonName[1]+ " rested as well!";


       }, 3000);

     }//end of if statement

     //conditional ternary does the following:

     //inform player1 of computer inablility to use the rest function
     (squirtleSelected === false  && onixSelected === false && scytherSpeedBar <= 0 && scytherSpeedDecreased === false) ? document.getElementById("statusProgress").innerHTML = "Scyther's speed is too low to rest..." : document.getElementById("statusProgress").innerHTML = "";





     //rest3 primarly goes to onix and 3 other pokemon (blastoise, pikachu, or charmander)

     console.log("The rest function started on this line:(3) ");

     let onixHP11 = onixHealthBar.reduce(PokemonHPReduced);
     let onixSpeedBar = onixSpeedProgressBar.reduce(PokemonSpeedReduced);


    //determine which pokemon are selected and enables the rest function for blastoise vs onix (default) or onix and pikachu or onix and charmander


    if (onixSelected === true && blastoiseSelected === true) {

      blastoiseMoves[0].blastoiseFunction6of6 = true;
      onixMovesActivated[0].onixFunction6of6 = true;

    }else if (onixSelected === true && pikachuSelected === true) {

      //disable previous function
      blastoiseMoves[0].blastoiseFunction6of6 = false;
      onixMovesActivated[0].onixFunction6of6 = false;

      //enable current function
      pikachuMoves[0].pikachuFunction6of6 = true;
      onixMovesActivated[0].onixFunction6of6 = true;

    }else if (onixSelected === true && charmanderSelected === true) {

      //disable previous function
      pikachuMoves[0].pikachuFunction6of6 = false;
      onixMovesActivated[0].onixFunction6of6 = false;

      //enable current function
      charmanderMoves[0].charmanderFunction6of6 = true;
      onixMovesActivated[0].onixFunction6of6 = true;


    }//end of multiple if statements


    //debugging here -- delete when neccessary
    console.log("onixMoves Function6of6 is : " + onixMovesActivated[0].onixFunction6of6);
    console.log("(R3) blastoise Function6of6 is : " + blastoiseMoves[0].blastoiseFunction6of6);
    console.log("(R3) pikachu Function6of6 is : " + pikachuMoves[0].pikachuFunction6of6);
    console.log("(R3) charmander Function6of6 is : " + charmanderMoves[0].charmanderFunction6of6);

    //blastoise vs onix (default) 1 of 3
    //rest recovers 10 HP to onix if conditions are true

     if (blastoiseSelected === true && onixSelected === true && onixHP11 <= 40) {

       //show recovery image for computer pokemon
       oniAtkImage6();

       //reflect the changes to onixHealthBar
       onixHealthBar.push(10);

       //backup array for health restoration needs to be updated
       onixHpRecovered.push(10);

       //reflect the changes to onixSpeedProgressBar
       onixSpeedProgressBar.push(-50);

       //onix speedbar is true only here:
       onixSpeedDecreased = true;

       //debugging--------------------------------------

       console.log("onixHealthBar array is "+ onixHealthBar);
       console.log("onixHpRecovered array is " + onixHpRecovered);

     }else if (blastoiseSelected === true && onixSelected === true && onixHP11 > 40) {

       //if health is > 40 then this implies that onix didn't restore health
       restedOnix = false;

       //debugging
       console.log("restedOnix status when hp > 40: " + restedOnix);

       //make no changes to onixHealthBar
       onixHealthBar.push(0);

       //make no changes to onixHpRecovered
       onixHpRecovered.push(0);

       //make no the changes to onixSpeedProgressBar
       onixSpeedProgressBar.push(0);


     }//end of if statements 1 of 3

    //onix vs pikachu  2 of 3
    //rest recovers 10 HP to onix if conditions are true


     if (pikachuSelected === true && onixSelected === true && onixHP11 <= 40) {

       //show recovery image for computer pokemon
       oniAtkImage6();

       //reflect the changes to onixHealthBar
       onixHealthBar.push(10);

       //backup array for health restoration needs to be updated
       onixHpRecovered.push(10);

       //reflect the changes to onixSpeedProgressBar
       onixSpeedProgressBar.push(-50);

       //onix speedbar is true only here:
       onixSpeedDecreased = true;

       //debugging--------------------------------------

       console.log("(R3-2) onixHealthBar array is "+ onixHealthBar);
       console.log("(R3-2) onixHpRecovered array is " + onixHpRecovered);

     }else if (pikachuSelected === true && onixSelected === true && onixHP11 > 40) {

       //if health is > 40 then this implies that onix didn't restore health
       restedOnix = false;

       //debugging
       console.log("(R3) restedOnix status when hp > 40: " + restedOnix);

       //make no changes to onixHealthBar
       onixHealthBar.push(0);

       //make no changes to onixHpRecovered
       onixHpRecovered.push(0);

       //make no the changes to onixSpeedProgressBar
       onixSpeedProgressBar.push(0);

     }//end of if statements 2 of 3


    //charmander vs onix 3 of 3
    //rest recovers 10 HP to onix if conditions are true

     if (charmanderSelected === true && onixSelected === true && onixHP11 <= 40) {

       //show recovery image for computer pokemon
       oniAtkImage6();

       //reflect the changes to onixHealthBar
       onixHealthBar.push(10);

       //backup array for health restoration needs to be updated
       onixHpRecovered.push(10);

       //reflect the changes to onixSpeedProgressBar
       onixSpeedProgressBar.push(-50);

       //onix speedbar is true only here:
       onixSpeedDecreased = true;

       //debugging--------------------------------------

       console.log("(R3-3) onixHealthBar array is "+ onixHealthBar);
       console.log("(R3-3) onixHpRecovered array is " + onixHpRecovered);


     }else if (charmanderSelected === true && onixSelected === true && onixHP11 > 40) {

       //if health is > 40 then this implies that onix didn't restore health
       restedOnix = false;

       //debugging
       console.log("(R3) restedOnix status when hp > 40: " + restedOnix);

       //make no changes to onixHealthBar
       onixHealthBar.push(0);

       //make no changes to onixHpRecovered
       onixHpRecovered.push(0);

       //make no the changes to onixSpeedProgressBar
       onixSpeedProgressBar.push(0);


     }//end of if statements 3 of 3


     //This is the function that applies the reduce method to the arrays listed above. Computer gives HP to blastoise if conditions are true
     increaseComputerHP(); //also restores health for blastoise


     if (blastoiseSelected === true && onixSelected === true && onixSpeedDecreased === true ||
         pikachuSelected === true && onixSelected === true && onixSpeedDecreased === true ||
         charmanderSelected === true && onixSelected === true && onixSpeedDecreased === true) {

       setTimeout(function() {

          document.getElementById("statusProgress").innerHTML = pokemonName[3]+ " rested as well!";


       }, 3000);

     }//end of if statement

     //conditional ternary does the following:

     //inform player1 of computer inablility to use the rest function
     (squirtleSelected === false  && scytherSelected === false && onixSpeedBar <= 0 && onixSpeedDecreased === false) ? document.getElementById("statusProgress").innerHTML = "Onix's speed is too low to rest..." : document.getElementById("statusProgress").innerHTML = "";





     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     checkTheStatus();


     //change boolean state so that computer can attack
     makeMove[0].player1Move = false;
     makeMove[0].computerMove = true;

     console.log(makeMove[0]);

    }//end of rest function


    const pikachuMoves = [{

      pikachuFunction1of6: false, // [0]
      pikachuFunction2of6: false, // [1]
      pikachuFunction3of6: false, // [2]
      pikachuFunction4of6: false, // [3]
      pikachuFunction5of6: false, // [4]
      pikachuFunction6of6: false //  [5]

    }] //end of pikachuMoves object




    const thunderShockMove = function () {



         if(pikachuSelected === true && scytherSelected === true) {

           //approve attack move for pokemon was clicked
           pikachuMoves[0].pikachuFunction1of6 = true;

           scytherMovesActivated[0].scytherFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("pikachuFunction1of6 is: " + pikachuMoves[0].pikachuFunction1of6);

           //reflect the changes to scytherHealthBar AND scytherBackup array as well.
           //thunderShockMove does -5 damage to scyther
           scytherHealthBar.push(-5);
           scytherBackup.push(-5);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP3();



           //debugging here -----------------------------------
           console.log("scytherHealthBar array is " + scytherHealthBar);
           console.log("scytherBackup array is " + scytherBackup);


           //attack image for pikachu
           pikAtkImage1();

           //change boolean state so that computer can attack
           makeMove[0].player1Move = false;
           makeMove[0].computerMove = true;

           console.log(makeMove[0]);


         }else if (pikachuSelected === true && squirtleSelected === true) {

           //approve attack move for pokemon was clicked
           pikachuMoves[0].pikachuFunction1of6 = true;

           squirtleMovesActivated[0].squirtleFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("pikachuFunction1of6 (2) is: " + pikachuMoves[0].pikachuFunction1of6);

           //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
           //thundershock does -25 damage on squirtle
           squirtleHealthBar.push(-25);
           squirtleBackup.push(-25);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP();

           //debugging here -----------------------------------
           console.log("squirtleHealthBar array (2) is  " + squirtleHealthBar);
           console.log("squirtleBackup array (2) is  " + squirtleBackup);

            // show image
            pikAtkImage1();

            //change boolean state so that computer can attack
            makeMove[0].player1Move = false;
            makeMove[0].computerMove = true;

            console.log(makeMove[0]);







         }else if (pikachuSelected === true && onixSelected === true) {

           //approve attack move for pokemon was clicked
           pikachuMoves[0].pikachuFunction1of6 = true;

           onixMovesActivated[0].onixFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("pikachuFunction1of6 (3) is: " + pikachuMoves[0].pikachuFunction1of6);

           //reflect the changes to onixHealthBar AND onixBackup array as well.
           //thundershock does -5 damage on onix
           onixHealthBar.push(-5);
           onixBackup.push(-5);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP2();

           //debugging here -----------------------------------
           console.log("onixHealthBar array (3) is " + onixHealthBar);
           console.log("onixBackup array (3) is " + onixBackup);

           // show image
           oniAtkImage1();

           //change boolean state so that computer can attack
           makeMove[0].player1Move = false;
           makeMove[0].computerMove = true;

           console.log(makeMove[0]);






         }//end of statements


    }//end of thunderShockMove


    const doubleKickMove = function() {
      // doubleKick does -10 damage to computer

      if(pikachuSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction2of6 = true;

        scytherMovesActivated[0].scytherFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction2of6 is: " + pikachuMoves[0].pikachuFunction2of6);

       //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
       //doubleKick does -10 damage to scyther
        scytherHealthBar.push(-10);
        scytherBackup.push(-10);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

       //debugging here -----------------------------------
        console.log("scytherHealthBar array is " + scytherHealthBar);
        console.log("scytherBackup array is " + scytherBackup);

        // show image
         pikAtkImage2();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (pikachuSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction2of6 = true;

        squirtleMovesActivated[0].squirtleFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction2of6 (2) is: " + pikachuMoves[0].pikachuFunction2of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //doubleKick does -10 damage on squirtle
        squirtleHealthBar.push(-10);
        squirtleBackup.push(-10);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is  " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is  " + squirtleBackup);

         // show image
         pikAtkImage2();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (pikachuSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction2of6 = true;

        onixMovesActivated[0].onixFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction2of6 (3) is: " + pikachuMoves[0].pikachuFunction2of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //doubleKick does -15 damage on onix
        onixHealthBar.push(-15);
        onixBackup.push(-15);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        oniAtkImage2();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);



      }//end of if statement


    } // end of doubleKickMove

    const thunderBoltMove = function() {

      // thunderBolt does -45 damage on computer

      if(pikachuSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction3of6 = true;

        scytherMovesActivated[0].scytherFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction3of6 is: " + pikachuMoves[0].pikachuFunction3of6);

       //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
       //thunderBolt does -15 damage to scyther
        scytherHealthBar.push(-15);
        scytherBackup.push(-15);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

       //debugging here -----------------------------------
        console.log("scytherHealthBar array is " + scytherHealthBar);
        console.log("scytherBackup array is " + scytherBackup);

        // show image
         pikAtkImage3();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (pikachuSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction3of6 = true;

        squirtleMovesActivated[0].squirtleFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction3of6 (2) is: " + pikachuMoves[0].pikachuFunction3of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //thunderBolt does -35 damage on squirtle
        squirtleHealthBar.push(-35);
        squirtleBackup.push(-35);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is  " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is  " + squirtleBackup);

         // show image
         pikAtkImage3();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (pikachuSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction3of6 = true;

        onixMovesActivated[0].onixFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction3of6 (3) is: " + pikachuMoves[0].pikachuFunction3of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //thunderBolt does -10 damage on onix
        onixHealthBar.push(-10);
        onixBackup.push(-10);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        oniAtkImage3();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);



      }//end of if statement


    } //end of thunderBoltMove



    const growl2Move = function() {

      // growl2 does -10 damage on computer

      if(pikachuSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction4of6 = true;

        scytherMovesActivated[0].scytherFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction4of6 is: " + pikachuMoves[0].pikachuFunction4of6);

       //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
       //growl2 does -15 damage to scyther
        scytherHealthBar.push(-15);
        scytherBackup.push(-15);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

       //debugging here -----------------------------------
        console.log("pikachuHealthBar array is " + scytherHealthBar);
        console.log("pikachuBackup array is " + scytherBackup);

        // show image
         pikAtkImage4();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (pikachuSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction4of6 = true;

        squirtleMovesActivated[0].squirtleFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction4of6 (2) is: " + pikachuMoves[0].pikachuFunction4of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //growl2 does -15 damage on squirtle
        squirtleHealthBar.push(-15);
        squirtleBackup.push(-15);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is  " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is  " + squirtleBackup);

         // show image
         pikAtkImage4();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (pikachuSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction4of6 = true;

        onixMovesActivated[0].onixFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction4of6 (3) is: " + pikachuMoves[0].pikachuFunction4of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //growl2 does -5 damage on onix
        onixHealthBar.push(-5);
        onixBackup.push(-5);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        oniAtkImage4();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);



      }//end of if statement


    } //end of growl2Move





    const headButtMove = function() {

      // headButt does -20 damage on computer

      if(pikachuSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction5of6 = true;

        scytherMovesActivated[0].scytherFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction5of6 is: " + pikachuMoves[0].pikachuFunction5of6);

       //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
       //headButt does -25 damage to scyther
        scytherHealthBar.push(-25);
        scytherBackup.push(-25);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

       //debugging here -----------------------------------
        console.log("scytherHealthBar array is " + scytherHealthBar);
        console.log("scytherBackup array is " + scytherBackup);

        // show image
         pikAtkImage5();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (pikachuSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction5of6 = true;

        squirtleMovesActivated[0].squirtleFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction5of6 (2) is: " + pikachuMoves[0].pikachuFunction5of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //headButt does -5 damage on squirtle
        squirtleHealthBar.push(-5);
        squirtleBackup.push(-5);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is  " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is  " + squirtleBackup);

         // show image
         pikAtkImage5();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (pikachuSelected === true && onixSelected === true) {


        //approve attack move for pokemon was clicked
        pikachuMoves[0].pikachuFunction5of6 = true;

        onixMovesActivated[0].onixFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("pikachuFunction5of6 (3) is: " + pikachuMoves[0].pikachuFunction5of6);

        //reflect the changes to onixHealthBar AND onixBackup array as well.
        //headButt does -20 damage on onix
        onixHealthBar.push(-20);
        onixBackup.push(-20);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

        //debugging here -----------------------------------
        console.log("onixHealthBar array (3) is " + onixHealthBar);
        console.log("onixBackup array (3) is " + onixBackup);

        // show image
        oniAtkImage5();

        //change boolean state so that computer can attack
        makeMove[0].player1Move = false;
        makeMove[0].computerMove = true;

        console.log(makeMove[0]);



      }//end of if statement


    } //end of headButtMove













    const blastoiseMoves = [{

      blastoiseFunction1of6: false, // [0]
      blastoiseFunction2of6: false, // [1]
      blastoiseFunction3of6: false, // [2]
      blastoiseFunction4of6: false, // [3]
      blastoiseFunction5of6: false, // [4]
      blastoiseFunction6of6: false //  [5]

    }] //end of blastoiseMoves object







    const aquaJetMove = function () {



         if(blastoiseSelected === true && onixSelected === true) {

           //approve attack move for pokemon was clicked
           blastoiseMoves[0].blastoiseFunction1of6 = true;

           onixMovesActivated[0].onixFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("blastoiseFunction1of6 is: " + blastoiseMoves[0].blastoiseFunction1of6);

           //reflect the changes to blastoiseHealthBar AND squirtleBackup array as well.
           //aquaJet does -25 damage to onix
           onixHealthBar.push(-25);
           onixBackup.push(-25);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP2();

           //debugging here -----------------------------------
           console.log("onixHealthBar array is " + onixHealthBar);
           console.log("onixBackup array is " + onixBackup);

           // show image
           blaAtkImage1();

           //change boolean state so that computer can attack
           makeMove[0].player1Move = false;
           makeMove[0].computerMove = true;

           console.log(makeMove[0]);


         }else if (blastoiseSelected === true && squirtleSelected === true) {

           //approve attack move for pokemon was clicked
           blastoiseMoves[0].blastoiseFunction1of6 = true;

           squirtleMovesActivated[0].squirtleFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("blastoiseFunction1of6 (2) is: " + blastoiseMoves[0].blastoiseFunction1of6);

           //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
           //aquaJet does -5 damage on squirtle
           squirtleHealthBar.push(-5);
           squirtleBackup.push(-5);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP();

           //debugging here -----------------------------------
           console.log("squirtleHealthBar array (2) is " + squirtleHealthBar);
           console.log("squirtleBackup array (2) is " + squirtleBackup);

            // show image
            blaAtkImage1();

            //change boolean state so that computer can attack
            makeMove[0].player1Move = false;
            makeMove[0].computerMove = true;

            console.log(makeMove[0]);






         }else if (blastoiseSelected === true && scytherSelected === true) {

           //approve attack move for pokemon was clicked
           blastoiseMoves[0].blastoiseFunction1of6 = true;

           scytherMovesActivated[0].scytherFunction1of6 = true;

           //debugging here -- delete when neccessary
           console.log("blastoiseFunction1of6 (3) is: " + blastoiseMoves[0].blastoiseFunction1of6);

           //reflect the changes to scytherHealthBar AND scytherBackup array as well.
           //aquaJet does -5 damage on scyther
           scytherHealthBar.push(-5);
           scytherBackup.push(-5);

           //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
           decreaseComputerHP3();

           //debugging here -----------------------------------
           console.log("scytherHealthBar array (3) is " + scytherHealthBar);
           console.log("scytherBackup array (3) is " + scytherBackup);

            // show image
            blaAtkImage1();

            //change boolean state so that computer can attack
            makeMove[0].player1Move = false;
            makeMove[0].computerMove = true;

            console.log(makeMove[0]);






         }//end of if statement


    }//end of aquaJetMove


    const bubbleMove = function() {
      // bubble does -10 damage to computer

      if(blastoiseSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction2of6 = true;
        onixMovesActivated[0].onixFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction2of6 is: " + blastoiseMoves[0].blastoiseFunction2of6);

       //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
       //Bubble does -10 damage to onix
        onixHealthBar.push(-10);
        onixBackup.push(-10);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

       //debugging here -----------------------------------
        console.log("onixHealthBar array is " + onixHealthBar);
        console.log("onixBackup array is " + onixBackup);

        // show image
         blaAtkImage2();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (blastoiseSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction2of6 = true;

        squirtleMovesActivated[0].squirtleFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction2of6 (2) is: " + blastoiseMoves[0].blastoiseFunction2of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //Bubble does -5 damage on squirtle
        squirtleHealthBar.push(-5);
        squirtleBackup.push(-5);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is " + squirtleBackup);

         // show image
         blaAtkImage2();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (blastoiseSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction2of6 = true;

        scytherMovesActivated[0].scytherFunction2of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction2of6 (3) is: " + blastoiseMoves[0].blastoiseFunction2of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //Bubble does -4 damage on scyther
        scytherHealthBar.push(-4);
        scytherBackup.push(-4);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (3) is " + scytherHealthBar);
        console.log("scytherBackup array (3) is " + scytherBackup);

         // show image
         blaAtkImage1();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }//end of if statement


    } // end of bubbleMove


    const hydroPumpMove = function() {

      // hydroPump does -45 damage to computer

      if(blastoiseSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction3of6 = true;
        onixMovesActivated[0].onixFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction3of6 is: " + blastoiseMoves[0].blastoiseFunction3of6);

       //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
       //hydroPump does -45 damage to onix
        onixHealthBar.push(-35);
        onixBackup.push(-35);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

       //debugging here -----------------------------------
        console.log("onixHealthBar array is " + onixHealthBar);
        console.log("onixBackup array is " + onixBackup);

        // show image
         blaAtkImage3();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (blastoiseSelected === true && squirtleSelected === true) {


        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction3of6 = true;

        squirtleMovesActivated[0].squirtleFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction3of6 (2) is: " + blastoiseMoves[0].blastoiseFunction3of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //hydroPump does -10 damage on squirtle
        squirtleHealthBar.push(-11);
        squirtleBackup.push(-11);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is " + squirtleBackup);

         // show image
         blaAtkImage3();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (blastoiseSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction3of6 = true;

        scytherMovesActivated[0].scytherFunction3of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction3of6 (3) is: " + blastoiseMoves[0].blastoiseFunction3of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //hydroPump does -10 damage on scyther
        scytherHealthBar.push(-10);
        scytherBackup.push(-10);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (3) is " + scytherHealthBar);
        console.log("scytherBackup array (3) is " + scytherBackup);

         // show image
         blaAtkImage3();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);





      }//end of if statement


    } //end of hydroPumpMove



    const protectMove = function() {

      // protect does -10 damage to computer

      if(blastoiseSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction4of6 = true;
        onixMovesActivated[0].onixFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction4of6 is: " + blastoiseMoves[0].blastoiseFunction4of6);

       //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
       //Protect does -10 damage to onix
        onixHealthBar.push(-10);
        onixBackup.push(-10);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

       //debugging here -----------------------------------
        console.log("onixHealthBar array is " + onixHealthBar);
        console.log("onixBackup array is " + onixBackup);

        // show image
         blaAtkImage4();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (blastoiseSelected === true && squirtleSelected === true) {


        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction4of6 = true;

        squirtleMovesActivated[0].squirtleFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction4of6 (2) is: " + blastoiseMoves[0].blastoiseFunction4of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //Protect does -15 damage on squirtle
        squirtleHealthBar.push(-15);
        squirtleBackup.push(-15);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is " + squirtleBackup);

         // show image
         blaAtkImage4();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);





      }else if (blastoiseSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction4of6 = true;

        scytherMovesActivated[0].scytherFunction4of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction4of6 (3) is: " + blastoiseMoves[0].blastoiseFunction4of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //Protect does -20 damage on scyther
        scytherHealthBar.push(-20);
        scytherBackup.push(-20);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (3) is " + scytherHealthBar);
        console.log("scytherBackup array (3) is " + scytherBackup);

         // show image
         blaAtkImage4();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }//end of if statement


    } //end of protectMove





    const headButt2Move = function() {

      // headButt2 does -20 damage to computer

      if(blastoiseSelected === true && onixSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction5of6 = true;

        onixMovesActivated[0].onixFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction5of6 is: " + blastoiseMoves[0].blastoiseFunction5of6);

       //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
       //headButt2 does -20 damage to onix
        onixHealthBar.push(-15);
        onixBackup.push(-15);

      //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP2();

       //debugging here -----------------------------------
        console.log("onixHealthBar array is " + onixHealthBar);
        console.log("onixBackup array is " + onixBackup);

        // show image
         blaAtkImage5();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);


      }else if (blastoiseSelected === true && squirtleSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction5of6 = true;

        squirtleMovesActivated[0].squirtleFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction5of6 (2) is: " + blastoiseMoves[0].blastoiseFunction5of6);

        //reflect the changes to squirtleHealthBar AND squirtleBackup array as well.
        //headButt2 does -18 damage on squirtle
        squirtleHealthBar.push(-18);
        squirtleBackup.push(-18);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP();

        //debugging here -----------------------------------
        console.log("squirtleHealthBar array (2) is " + squirtleHealthBar);
        console.log("squirtleBackup array (2) is " + squirtleBackup);

         // show image
         blaAtkImage5();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }else if (blastoiseSelected === true && scytherSelected === true) {

        //approve attack move for pokemon was clicked
        blastoiseMoves[0].blastoiseFunction5of6 = true;

        scytherMovesActivated[0].scytherFunction5of6 = true;

        //debugging here -- delete when neccessary
        console.log("blastoiseFunction5of6 (3) is: " + blastoiseMoves[0].blastoiseFunction5of6);

        //reflect the changes to scytherHealthBar AND scytherBackup array as well.
        //headButt2 does -20 damage on scyther
        scytherHealthBar.push(-20);
        scytherBackup.push(-20);

        //This is the function that applies the filter to the arrays listed below. player1 (does damage to computer HP). It also calls other functions
        decreaseComputerHP3();

        //debugging here -----------------------------------
        console.log("scytherHealthBar array (3) is " + scytherHealthBar);
        console.log("scytherBackup array (3) is " + scytherBackup);

         // show image
         blaAtkImage5();

         //change boolean state so that computer can attack
         makeMove[0].player1Move = false;
         makeMove[0].computerMove = true;

         console.log(makeMove[0]);




      }//end of if statement


    } //end of headButt2Move



















   // save to delete 2? 02-01-2023 
  //  pokemonName = ["Charmander","Scyther","Blastoise","onix","Squirtle", "Pikachu"];
  //  compMenu =  ["attackA","attackB","attackC","defenseA","defenseB","defenseC"];


  const squirtleMovesActivated = [{

   squirtleFunction1of6: false,
   squirtleFunction2of6: false,
   squirtleFunction3of6: false,
   squirtleFunction4of6: false,
   squirtleFunction5of6: false,
   squirtleFunction6of6: false

 }]//end of squirtleMoves object

 const onixMovesActivated = [{

  onixFunction1of6: false,
  onixFunction2of6: false,
  onixFunction3of6: false,
  onixFunction4of6: false,
  onixFunction5of6: false,
  onixFunction6of6: false

}]//end of squirtleMoves object


const scytherMovesActivated = [{

 scytherFunction1of6: false,
 scytherFunction2of6: false,
 scytherFunction3of6: false,
 scytherFunction4of6: false,
 scytherFunction5of6: false,
 scytherFunction6of6: false

}]//end of squirtleMoves object



   //switch that controls how squirtle attacks charmander

   const squirtleMoves = function () {


    //SquirtleMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

    switch  (squirtleMovesActivated[0].squirtleFunction1of6 === true && charmanderMoves[0].charmanderFunction1of6 === true ||
             squirtleMovesActivated[0].squirtleFunction2of6 === true && charmanderMoves[0].charmanderFunction2of6 === true ||
             squirtleMovesActivated[0].squirtleFunction3of6 === true && charmanderMoves[0].charmanderFunction3of6 === true ||
             squirtleMovesActivated[0].squirtleFunction4of6 === true && charmanderMoves[0].charmanderFunction4of6 === true ||
             squirtleMovesActivated[0].squirtleFunction5of6 === true && charmanderMoves[0].charmanderFunction5of6 === true ||
             squirtleMovesActivated[0].squirtleFunction6of6 === true && charmanderMoves[0].charmanderFunction6of6 === true ||

             squirtleMovesActivated[0].squirtleFunction1of6 === true  && pikachuMoves[0].pikachuFunction1of6 === true  ||
             squirtleMovesActivated[0].squirtleFunction2of6 === true  && pikachuMoves[0].pikachuFunction2of6 === true  ||
             squirtleMovesActivated[0].squirtleFunction3of6 === true  && pikachuMoves[0].pikachuFunction3of6 === true  ||
             squirtleMovesActivated[0].squirtleFunction4of6 === true  && pikachuMoves[0].pikachuFunction4of6 === true  ||
             squirtleMovesActivated[0].squirtleFunction5of6 === true  && pikachuMoves[0].pikachuFunction5of6 === true  ||
             squirtleMovesActivated[0].squirtleFunction6of6 === true  && pikachuMoves[0].pikachuFunction6of6 === true  ||

             squirtleMovesActivated[0].squirtleFunction1of6 === true && blastoiseMoves[0].blastoiseFunction1of6 === true ||
             squirtleMovesActivated[0].squirtleFunction2of6 === true && blastoiseMoves[0].blastoiseFunction2of6 === true ||
             squirtleMovesActivated[0].squirtleFunction3of6 === true && blastoiseMoves[0].blastoiseFunction3of6 === true ||
             squirtleMovesActivated[0].squirtleFunction4of6 === true && blastoiseMoves[0].blastoiseFunction4of6 === true ||
             squirtleMovesActivated[0].squirtleFunction5of6 === true && blastoiseMoves[0].blastoiseFunction5of6 === true ||
             squirtleMovesActivated[0].squirtleFunction6of6 === true && blastoiseMoves[0].blastoiseFunction6of6 === true) {

 case (squirtleMovesActivated[0].squirtleFunction1of6 === true && charmanderMoves[0].charmanderFunction1of6 === true ||
       squirtleMovesActivated[0].squirtleFunction1of6 === true && pikachuMoves[0].pikachuFunction1of6 === true   ||
       squirtleMovesActivated[0].squirtleFunction1of6 === true && blastoiseMoves[0].blastoiseFunction1of6 === true):

   //squirtle attack move: Bubble Beam
  //this statement selects the computer pokemon to battle with player1 pokemon (charmander, pikachu, or blastoise)
  if(squirtleSelected === true && charmanderSelected === true) {


    //debugging here -- delete when neccessary
    console.log("squirtleMoves Function1of6 is : " + squirtleMovesActivated[0].squirtleFunction1of6);

    //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
    charmanderHealthBar.push(-20);
    charmanderBackup.push(-20);

    decreasePlayerHP();

    //show attack image
    squAtkImage1();
    playSquirtleBubbleSound();

    //debugging
    console.log("CharmanderHealthBar array is " + charmanderHealthBar);
    console.log("charmanderBackup array is " + charmanderBackup);


  }else if (squirtleSelected === true && pikachuSelected === true) {

    //debugging here -- delete when neccessary
    console.log("squirtleMoves Function1of6 is (2) : " + squirtleMovesActivated[0].squirtleFunction1of6);

    //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
    pikachuHealthBar.push(-5);
    pikachuBackup.push(-5);

    decreasePlayerHP();

    //show attack image
    squAtkImage1();
    playSquirtleBubbleSound();

    //debugging
    console.log("pikachuHealthBar array is (2) "+ pikachuHealthBar);
    console.log("pikachuBackup array is (2) " + pikachuBackup);

  }else if (squirtleSelected === true && blastoiseSelected === true) {

    //debugging here -- delete when neccessary
    console.log("squirtleMoves Function1of6 is (3) : " + squirtleMovesActivated[0].squirtleFunction1of6);

    //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
    blastoiseHealthBar.push(-5);
    blastoiseBackup.push(-5);

    decreasePlayerHP();

    //show attack image
    squAtkImage1();
    playSquirtleBubbleSound();

    //debugging
    console.log("blastoiseHealthBar array is (3) "+ blastoiseHealthBar);
    console.log("blastoiseBackup array is (3) " + blastoiseBackup);

  }//end of multiple if statements


  //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
  checkTheStatus();




  if (squirtleSelected === true && charmanderSelected === true) {

    //inform player1 attack from squirtle -- default setting
    document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[0]+" with Bubble Beam!";

    //disable attack move for squirtle pokemon and charmander
    squirtleMovesActivated[0].squirtleFunction1of6 = false;
    charmanderMoves[0].charmanderFunction1of6 = false;

  }else if (squirtleSelected === true && pikachuSelected === true) {

    //inform player1 attack from squirtle
    document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[5]+" with Bubble Beam!";

    //disable attack move for squirtle pokemon and pikachu
    squirtleMovesActivated[0].squirtleFunction1of6 = false;
    pikachuMoves[0].pikachuFunction1of6 = false;



  }else if (squirtleSelected === true && blastoiseSelected === true) {

    //inform player1 attack from squirtle
    document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[2]+" with Bubble Beam!";

    //disable attack move for squirtle pokemon and blastoise
    squirtleMovesActivated[0].squirtleFunction1of6 = false;
    blastoiseMoves[0].blastoiseFunction1of6 = false;

  }//end of multiple if statements


  //Change boolean state so that player1 can make a move
  makeMove[0].computerMove = false;
  console.log(makeMove[0]);
  enableMoves();
  console.log(makeMove[0]);







   break;




 case (squirtleMovesActivated[0].squirtleFunction2of6 === true && charmanderMoves[0].charmanderFunction2of6 === true ||
       squirtleMovesActivated[0].squirtleFunction2of6 === true && pikachuMoves[0].pikachuFunction2of6 === true ||
       squirtleMovesActivated[0].squirtleFunction2of6 === true && blastoiseMoves[0].blastoiseFunction2of6 === true):

 //squirtle attack move: Tail Whip


 if(squirtleSelected === true && charmanderSelected === true) {

   //debugging here -- delete when neccessary
   console.log("squirtleMoves Function2of6 is : " + squirtleMovesActivated[0].squirtleFunction2of6);

   //Tail Whip does -5 damage to charmander
   //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
   charmanderHealthBar.push(-5);
   charmanderBackup.push(-5);

   //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
   decreasePlayerHP();

   //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
   checkTheStatus();

   //show attack image
   squAtkImage2();
   playSquirtleTailWhipSound();

   //debugging here------------------------------------------------------

   console.log("CharmanderHealthBar array is "+ charmanderHealthBar);
   console.log("charmanderBackup array is " + charmanderBackup);


 }else if (squirtleSelected === true && pikachuSelected === true) {

   //debugging here -- delete when neccessary
   console.log("squirtleMoves Function2of6 is (2) : " + squirtleMovesActivated[0].squirtleFunction2of6);

   //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
   pikachuHealthBar.push(-5);
   pikachuBackup.push(-5);

   decreasePlayerHP();

   //show attack image
   squAtkImage2();
   playSquirtleBubbleSound();

   //debugging
   console.log("pikachuHealthBar array is (2) "+ pikachuHealthBar);
   console.log("pikachuBackup array is (2) " + pikachuBackup);

 }else if (squirtleSelected === true && blastoiseSelected === true) {

   //debugging here -- delete when neccessary
   console.log("squirtleMoves Function2of6 is (3) : " + squirtleMovesActivated[0].squirtleFunction2of6);

   //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
   blastoiseHealthBar.push(-5);
   blastoiseBackup.push(-5);

   decreasePlayerHP();

   //show attack image
   squAtkImage2();
   playSquirtleBubbleSound();

   //debugging
   console.log("blastoiseHealthBar array is (3) "+ blastoiseHealthBar);
   console.log("blastoiseBackup array is (3) " + blastoiseBackup);

 }//end of multiple if statements




 //default setting
 if (squirtleSelected === true && charmanderSelected === true) {

   //inform player1 attack from squirtle -- default setting
   document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[0]+" with Tail Whip!";

   //disable attack move for squirtle pokemon and charmander
   squirtleMovesActivated[0].squirtleFunction2of6 = false;
   charmanderMoves[0].charmanderFunction2of6 = false;


 }else if (squirtleSelected === true && pikachuSelected === true) {

   //inform player1 attack from squirtle
   document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[5]+" with Tail Whip!";

   //disable attack move for squirtle pokemon and pikachu
   squirtleMovesActivated[0].squirtleFunction2of6 = false;
   pikachuMoves[0].pikachuFunction2of6 = false;


 }else if (squirtleSelected === true && blastoiseSelected === true) {

   //inform player1 attack from squirtle
   document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[2]+" with Tail Whip!";

   //disable attack move for squirtle pokemon and blastoise
   squirtleMovesActivated[0].squirtleFunction2of6 = false;
   blastoiseMoves[0].blastoiseFunction2of6 = false;

 }//end of multiple if statements



 //Change boolean state so that player1 can make a move
 makeMove[0].computerMove = false;
 console.log(makeMove[0]);
 enableMoves();
 console.log(makeMove[0]);







   break;




   case (squirtleMovesActivated[0].squirtleFunction3of6 === true && charmanderMoves[0].charmanderFunction3of6 === true ||
         squirtleMovesActivated[0].squirtleFunction3of6 === true && pikachuMoves[0].pikachuFunction3of6 === true ||
         squirtleMovesActivated[0].squirtleFunction3of6 === true && blastoiseMoves[0].blastoiseFunction3of6 === true):


 //squirtle attack move: Water Pulse


 if (squirtleSelected === true && charmanderSelected === true) {

   //debugging here -- delete when neccessary
   console.log("squirtleMoves Function3of6 is : " + squirtleMovesActivated[0].squirtleFunction3of6);

   //Water Pulse does -35 damage to charmander
   //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
   charmanderHealthBar.push(-35);
   charmanderBackup.push(-35);

   //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
   decreasePlayerHP();

   //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
   checkTheStatus();

   //show attack image
   squAtkImage3();
   playSquirtleWaterPulseSound();


   //debugging here------------------------------------------------------

   console.log("CharmanderHealthBar array is "+charmanderHealthBar);
   console.log("charmanderBackup array is " +charmanderBackup);

 }else if (squirtleSelected === true && pikachuSelected === true) {

   //debugging here -- delete when neccessary
   console.log("squirtleMoves Function3of6 is (2) : " + squirtleMovesActivated[0].squirtleFunction3of6);


   //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
   pikachuHealthBar.push(-5);
   pikachuBackup.push(-5);

   //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
   decreasePlayerHP();

   //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
   checkTheStatus();

   //show attack image
   squAtkImage3();
   playSquirtleWaterPulseSound();


   //debugging here------------------------------------------------------

   console.log("pikachuHealthBar array is (2) "+ pikachuHealthBar);
   console.log("pikachuBackup array is (2) " + pikachuBackup);

 }else if (squirtleSelected === true && blastoiseSelected === true) {

   //debugging here -- delete when neccessary
   console.log("squirtleMoves Function3of6 is (3) : " + squirtleMovesActivated[0].squirtleFunction3of6);


   //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
   blastoiseHealthBar.push(-5);
   blastoiseBackup.push(-5);

   //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
   decreasePlayerHP();

   //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
   checkTheStatus();

   //show attack image
   squAtkImage3();
   playSquirtleWaterPulseSound();


   //debugging here------------------------------------------------------

   console.log("blastoiseHealthBar array is (3) "+ blastoiseHealthBar);
   console.log("blastoiseBackup array is (3) " + blastoiseBackup);

 }//end of multiple if statements





 //default setting
 if (squirtleSelected === true && charmanderSelected === true) {

   //inform player1 of attack from computer
   document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[0]+" with Water Pulse!";

   //disable attack move for squirtle pokemon and charmander
   squirtleMovesActivated[0].squirtleFunction3of6 = false;
   charmanderMoves[0].charmanderFunction3of6 = false;

 }else if (squirtleSelected === true && pikachuSelected === true) {


 document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[5]+" with Water Pulse!";

 //disable attack move for squirtle pokemon and pikachu
 squirtleMovesActivated[0].squirtleFunction3of6 = false;
 pikachuMoves[0].pikachuFunction3of6 = false;


 }else if (squirtleSelected === true && blastoiseSelected === true) {


   document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[2]+" with Water Pulse!";

   //disable attack move for squirtle pokemon and blastoise
   squirtleMovesActivated[0].squirtleFunction3of6 = false;
   blastoiseMoves[0].blastoiseFunction3of6 = false;


 }//end of if statements






 //Change boolean state so that player1 can make a move
 makeMove[0].computerMove = false;
 console.log(makeMove[0]);
 enableMoves();
 console.log(makeMove[0]);


   break;







   case (squirtleMovesActivated[0].squirtleFunction4of6 === true && charmanderMoves[0].charmanderFunction4of6 === true ||
         squirtleMovesActivated[0].squirtleFunction4of6 === true && pikachuMoves[0].pikachuFunction4of6 === true ||
         squirtleMovesActivated[0].squirtleFunction4of6 === true && blastoiseMoves[0].blastoiseFunction4of6 === true):


   //squirtle attack move: tackle

   if (squirtleSelected === true && charmanderSelected === true) {

     //debugging here -- delete when neccessary
     console.log("squirtleMoves Function4of6 is : " + squirtleMovesActivated[0].squirtleFunction4of6);

     //tackle does -10 damage to charmander
     //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
     charmanderHealthBar.push(-10);
     charmanderBackup.push(-10);

     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
     decreasePlayerHP();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     checkTheStatus();

     //show attack image
     squAtkImage4();
     playSquirtleTackleSound();

     //debugging here------------------------------------------------------

     console.log("CharmanderHealthBar array is "+charmanderHealthBar);
     console.log("charmanderBackup array is " +charmanderBackup);



   }else if (squirtleSelected === true && pikachuSelected === true) {

     //debugging here -- delete when neccessary
     console.log("squirtleMoves Function4of6 is (2) : " + squirtleMovesActivated[0].squirtleFunction4of6);


     //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
     pikachuHealthBar.push(-15);
     pikachuBackup.push(-15);

     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
     decreasePlayerHP();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     checkTheStatus();

     //show attack image
     squAtkImage4();
     playSquirtleTackleSound();

     //debugging here------------------------------------------------------

     console.log("pikachuHealthBar array is (2) "+ pikachuHealthBar);
     console.log("pikachuBackup array is (2) " + pikachuBackup);



   }else if (squirtleSelected === true && blastoiseSelected === true) {

     //debugging here -- delete when neccessary
     console.log("squirtleMoves Function4of6 is (3) : " + squirtleMovesActivated[0].squirtleFunction4of6);


     //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
     blastoiseHealthBar.push(-5);
     blastoiseBackup.push(-5);

     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
     decreasePlayerHP();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     checkTheStatus();

     //show attack image
     squAtkImage4();
     playSquirtleTackleSound();

     //debugging here------------------------------------------------------

     console.log("blastoiseHealthBar array is (3) "+ blastoiseHealthBar);
     console.log("blastoiseBackup array is (3) " + blastoiseBackup);

   }//end of multiple if statements



   //default setting
   if (squirtleSelected === true && charmanderSelected === true) {

     //inform player1 of attack from computer
     document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[0]+" with Tackle!";

     //disable attack move for squirtle pokemon and charmander
     squirtleMovesActivated[0].squirtleFunction4of6 = false;
     charmanderMoves[0].charmanderFunction4of6 = false;


   }else if (squirtleSelected === true && pikachuSelected === true) {


   document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[5]+" with Tackle!";

   //disable attack move for squirtle pokemon and pikachu
   squirtleMovesActivated[0].squirtleFunction4of6 = false;
   pikachuMoves[0].pikachuFunction4of6 = false;


   }else if (squirtleSelected === true && blastoiseSelected === true) {


     document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[2]+" with Tackle!";

     //disable attack move for squirtle pokemon and blastoise
     squirtleMovesActivated[0].squirtleFunction4of6 = false;
     blastoiseMoves[0].blastoiseFunction4of6 = false;


   }//end of multiple if statements




   //Change boolean state so that player1 can make a move
   makeMove[0].computerMove = false;
   console.log(makeMove[0]);
   enableMoves();
   console.log(makeMove[0]);




     break;







     case (squirtleMovesActivated[0].squirtleFunction5of6 === true && charmanderMoves[0].charmanderFunction5of6 === true ||
           squirtleMovesActivated[0].squirtleFunction5of6 === true && pikachuMoves[0].pikachuFunction5of6 === true ||
           squirtleMovesActivated[0].squirtleFunction5of6 === true && blastoiseMoves[0].blastoiseFunction5of6 === true):


     //squirtle attack move: water gun



     if (squirtleSelected === true && charmanderSelected === true) {

       //debugging here -- delete when neccessary
       console.log("squirtleMoves Function5of6 is : " + squirtleMovesActivated[0].squirtleFunction5of6);

       //water gun does -30 damage to charmander
       //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
       charmanderHealthBar.push(-30);
       charmanderBackup.push(-30);

       //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
       decreasePlayerHP();

       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       checkTheStatus();

       //show attack image
       squAtkImage5();
       playSquirtleWaterGunSound();

       //debugging here------------------------------------------------------

       console.log("CharmanderHealthBar array is "+charmanderHealthBar);
       console.log("charmanderBackup array is " +charmanderBackup);

     }else if (squirtleSelected === true && pikachuSelected === true) {


       //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
       pikachuHealthBar.push(-5);
       pikachuBackup.push(-5);

       //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
       decreasePlayerHP();

       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       checkTheStatus();

       //show attack image
       squAtkImage5();
       playSquirtleWaterGunSound();

       //debugging here------------------------------------------------------

       console.log("pikachuHealthBar array is (2) "+ pikachuHealthBar);
       console.log("pikachuBackup array is (2) " + pikachuBackup);

     }else if (squirtleSelected === true && blastoiseSelected === true) {



       //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
       blastoiseHealthBar.push(-5);
       blastoiseBackup.push(-5);

       //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when squirtle attacks)
       decreasePlayerHP();

       //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
       checkTheStatus();

       //show attack image
       squAtkImage5();
       playSquirtleWaterGunSound();

       //debugging here------------------------------------------------------

       console.log("blastoiseHealthBar array is (3) "+ blastoiseHealthBar);
       console.log("blastoiseBackup array is (3) " + blastoiseBackup);

     }//end of multiple if statements




     //default setting
     if (squirtleSelected === true && charmanderSelected === true) {

       //inform player1 of attack from computer
       document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[0]+" with Water Gun!";

       //disable attack move for squirtle pokemon and charmander
       squirtleMovesActivated[0].squirtleFunction5of6 = false;
       charmanderMoves[0].charmanderFunction5of6 = false;

     }else if (squirtleSelected === true && pikachuSelected === true) {


       document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[5]+" with Water Gun!";

       //disable attack move for squirtle pokemon and pikachu
       squirtleMovesActivated[0].squirtleFunction5of6 = false;
       pikachuMoves[0].pikachuFunction5of6 = false;


     }else if (squirtleSelected === true && blastoiseSelected === true) {


       document.getElementById("statusProgress2").innerHTML = pokemonName[4]+ " attacked "+pokemonName[2]+" with Water Gun!";

       //disable attack move for squirtle pokemon and blastoise
       squirtleMovesActivated[0].squirtleFunction5of6 = false;
       blastoiseMoves[0].blastoiseFunction5of6 = false;


     }//end of multiple if statements




     //Change boolean state so that player1 can make a move
     makeMove[0].computerMove = false;
     console.log(makeMove[0]);
     enableMoves();
     console.log(makeMove[0]);


       break;






       case (squirtleMovesActivated[0].squirtleFunction6of6 === true && charmanderMoves[0].charmanderFunction6of6 === true ||
             squirtleMovesActivated[0].squirtleFunction6of6 === true && pikachuMoves[0].pikachuFunction6of6 === true ||
             squirtleMovesActivated[0].squirtleFunction6of6 === true && blastoiseMoves[0].blastoiseFunction6of6 === true):

       //varible declartion

       let charmanderHP5 = charmanderHealthBar.reduce(PokemonHPReduced);
       let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);

       let pikachuHP15 = pikachuHealthBar.reduce(PokemonHPReduced);
       let pikachuSpeedBar = pikSpeedProgressBar.reduce(PokemonHPReduced);

       let blastoiseHP16 = blastoiseHealthBar.reduce(PokemonHPReduced);
       let blastoiseSpeedBar = blaSpeedProgressBar.reduce(PokemonHPReduced);

       let hpRecovered2 = charmanderHpRecovered.reduce(PokemonRestoredReducer);
       let hpRecovered3 = pikachuHpRecovered.reduce(PokemonRestoredReducer);
       let hpRecovered4 = blastoiseHpRecovered.reduce(PokemonRestoredReducer);

       //squirtle attack move: rest (restores health to charmander, pikachu, or blastoise)


       //Charmander vs squirtle (default) 1 of 3 sets
       //charmander, pikachu, or blastoise gets 45 HP if conditions are true
       if (squirtleSelected === true && charmanderSelected === true && charmanderHP5 <= 40) {

         //show recovery image for computer pokemon and play rest sound effect
         chrAtkImage6();
         playPokemonRestSound();

         //reflect the changes to the charmanderHealthBar array
        charmanderHealthBar.push(45);

        //backup array for health restoration needs to be updated as well
        charmanderHpRecovered.push(45);

         //reflect speedbar progress to chaSpeedProgressBar array to create limit for health restoration
        chaSpeedProgressBar.push(-50);

        //debugging here------------------------------------------------------

        console.log("(SQM 1) charmanderHealthBar array is "+ charmanderHP5);
        console.log("(SQM 1) charmanderHP_recovered array is " + hpRecovered2);


       }else if(squirtleSelected === true && charmanderSelected === true && charmanderHP5 > 40) {

         //turn off rest sound effect
         playPokemonRestSound();


         //make no changes to the charmanderHealthBar array
         charmanderHealthBar.push(0);

         //make no changes to charmanderHpRecovered array
         charmanderHpRecovered.push(0);

         //make no changes to the chaSpeedProgressBa array
         chaSpeedProgressBar.push(0);




       }//end of if statements 1 of 3


      //Squirtle vs pikachu 2 of 3 sets
      if (squirtleSelected === true && pikachuSelected === true && pikachuHP15 <= 40) {

       //show recovery image for computer pokemon and play rest sound effect
       pikAtkImage6();
       playPokemonRestSound();

       //reflect the changes to the pikachuHealthBar array
      pikachuHealthBar.push(45);

      //backup array for health restoration needs to be updated as well
      pikachuHpRecovered.push(45);

       //reflect speedbar progress to pikSpeedProgressBar array to create limit for health restoration
      pikSpeedProgressBar.push(-50);

      //debugging here------------------------------------------------------

     console.log("(SQM 2) pikachuHealthBar array is "+ pikachuBackup);
     console.log("(SQM 2) pikachuHP_recovered array is " + hpRecovered3);



      }else if(squirtleSelected === true && pikachuSelected === true && pikachuHP15 > 40) {

       //turn off rest sound effect
       playPokemonRestSound();

       //make no changes to the pikachuHealthBar array
       pikachuHealthBar.push(0);

       //make no changes to pikachuHpRecovered array
       pikachuHpRecovered.push(0);

       //make no changes to pikSpeedProgressBar array
       pikSpeedProgressBar.push(0);




     }//end of if statements 2 of 3


       //Squirtle vs blastoise 3 of 3 sets
       if (squirtleSelected === true && blastoiseSelected === true && blastoiseHP16 <= 40) {

        //show recovery image for player1 pokemon and play rest sound effect
        blaAtkImage6();
        playPokemonRestSound();

        //reflect the changes to the blastoiseHealthBar array
       blastoiseHealthBar.push(45);


       //backup array for health restoration needs to be updated as well
       blastoiseHpRecovered.push(45);


        //reflect speedbar progress to blaSpeedProgressBar array to create limit for health restoration
       blaSpeedProgressBar.push(-50);

       //debugging here------------------------------------------------------

       console.log("(SQM 3) blastoiseHealthBar array is "+ blastoiseHealthBar);
       console.log("(SQM 3) blastoiseHP_recovered array is " + hpRecovered4);



       }else if(squirtleSelected === true && blastoiseSelected === true && blastoiseHP16 > 40) {

        //turn off rest sound effect
        pausePokemonRestSound();

        //make no changes to the pikachuHealthBar array
        blastoiseHealthBar.push(0);


        //make no changes to the blastoiseHpRecovered array
        blastoiseHpRecovered.push(0);


        //make no changes to pikSpeedProgressBar array
        blaSpeedProgressBar.push(0);




      }//end of if statements 3 of 3





         //This is the function that applies the reduce method to the arrays listed below. player1 recovers HP if certain conditions are true.
         decreasePlayerHP(); //actually increases hp for charmander, pikachu, or blastoise


         //default setting
         if (squirtleSelected === true && charmanderSelected === true) {

           //disable attack move for squirtle pokemon and charmander
           charmanderMoves[0].charmanderFunction6of6 = false;
           squirtleMovesActivated[0].squirtleFunction6of6 = false;


         }else if (squirtleSelected === true && pikachuSelected === true) {

           //disable attack move for squirtle pokemon and pikachu
           pikachuMoves[0].pikachuFunction6of6 = false;
           squirtleMovesActivated[0].squirtleFunction6of6 = false;


         }else if (squirtleSelected === true && blastoiseSelected === true) {

           //disable attack move for squirtle pokemon and blastoise
           blastoiseMoves[0].blastoiseFunction6of6 = false;
           squirtleMovesActivated[0].squirtleFunction6of6 = false;



         }//end of if statements






       //Change boolean state so that player1 can make a move
       makeMove[0].computerMove = false;
       console.log(makeMove[0]);
       enableMoves();
       console.log(makeMove[0]);




         break;




 default:
   console.log("squirtleMoves default switch function was activated -- evaluate cases to fix error.");




} // end of switch statements for squirtleMoves



     } // end of squirtleMoves function





// start of scyther moves function -- ends at 4063

const  scytherMoves = function () {

       //scytherMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

       switch (scytherMovesActivated[0].scytherFunction1of6 === true && pikachuMoves[0].pikachuFunction1of6 === true
          ||   scytherMovesActivated[0].scytherFunction2of6 === true && pikachuMoves[0].pikachuFunction2of6 === true
          ||   scytherMovesActivated[0].scytherFunction3of6 === true && pikachuMoves[0].pikachuFunction3of6 === true
          ||   scytherMovesActivated[0].scytherFunction4of6 === true && pikachuMoves[0].pikachuFunction4of6 === true
          ||   scytherMovesActivated[0].scytherFunction5of6 === true && pikachuMoves[0].pikachuFunction5of6 === true
          ||   scytherMovesActivated[0].scytherFunction6of6 === true && pikachuMoves[0].pikachuFunction6of6 === true

          ||   scytherMovesActivated[0].scytherFunction1of6 === true && charmanderMoves[0].charmanderFunction1of6 === true
          ||   scytherMovesActivated[0].scytherFunction2of6 === true && charmanderMoves[0].charmanderFunction2of6 === true
          ||   scytherMovesActivated[0].scytherFunction3of6 === true && charmanderMoves[0].charmanderFunction3of6 === true
          ||   scytherMovesActivated[0].scytherFunction4of6 === true && charmanderMoves[0].charmanderFunction4of6 === true
          ||   scytherMovesActivated[0].scytherFunction5of6 === true && charmanderMoves[0].charmanderFunction5of6 === true
          ||   scytherMovesActivated[0].scytherFunction6of6 === true && charmanderMoves[0].charmanderFunction6of6 === true

          ||   scytherMovesActivated[0].scytherFunction1of6 === true && blastoiseMoves[0].blastoiseFunction1of6 === true
          ||   scytherMovesActivated[0].scytherFunction2of6 === true && blastoiseMoves[0].blastoiseFunction2of6 === true
          ||   scytherMovesActivated[0].scytherFunction3of6 === true && blastoiseMoves[0].blastoiseFunction3of6 === true
          ||   scytherMovesActivated[0].scytherFunction4of6 === true && blastoiseMoves[0].blastoiseFunction4of6 === true
          ||   scytherMovesActivated[0].scytherFunction5of6 === true && blastoiseMoves[0].blastoiseFunction5of6 === true
          ||   scytherMovesActivated[0].scytherFunction6of6 === true && blastoiseMoves[0].blastoiseFunction6of6 === true){

    case (scytherMovesActivated[0].scytherFunction1of6 === true && pikachuMoves[0].pikachuFunction1of6 === true ||
          scytherMovesActivated[0].scytherFunction1of6 === true && charmanderMoves[0].charmanderFunction1of6 === true ||
          scytherMovesActivated[0].scytherFunction1of6 === true && blastoiseMoves[0].blastoiseFunction1of6 === true):



     //scyther attack move: slash
     //this statement selects the computer pokemon to battle with player1 pokemon (pikachu, charmander, or blastoise)
     if(scytherSelected === true  && pikachuSelected === true) {


     //debugging here -- delete when neccessary
     console.log("scytherMoves Function1of6 is : " + scytherMovesActivated[0].scytherFunction1of6);

     //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
     pikachuHealthBar.push(-25);
     pikachuBackup.push(-25);

     //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
     decreasePlayerHP2();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     checkTheStatus();

     //show attack image
     scyAtkImage1();
     playScytherSlashSound();


     //debugging here------------------------------------------------------
     console.log("pikachuHealthBar array is "+pikachuHealthBar);
     console.log("pikachuBackup array is " +pikachuHealthBar);



   }else if (scytherSelected === true  &&  charmanderSelected === true) {


     //debugging here -- delete when neccessary
     console.log("scytherMoves Function1of6 is (2) : " + scytherMovesActivated[0].scytherFunction1of6);

     //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
     charmanderHealthBar.push(-5);
     charmanderBackup.push(-5);

     decreasePlayerHP2();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     checkTheStatus();

     //show attack image
     scyAtkImage1();
     playScytherSlashSound();

     //debugging here------------------------------------------------------
     console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
     console.log("charmanderBackup array is (2) " + charmanderBackup);

   }else if (scytherSelected === true  &&  blastoiseSelected === true) {

     //debugging here -- delete when neccessary
     console.log("scytherMoves Function1of6 is (3) : " + scytherMovesActivated[0].scytherFunction1of6);

     //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
     blastoiseHealthBar.push(-5);
     blastoiseBackup.push(-5);

     decreasePlayerHP2();

     //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
     checkTheStatus();

     //show attack image
     scyAtkImage1();
     playScytherSlashSound();


     //debugging here------------------------------------------------------
     console.log("blastoiseHealthBar array is (3) " + blastoiseHealthBar);
     console.log("blastoiseBackup array is (3) " + blastoiseBackup);


   }//end of multiple if statements





     if (scytherSelected === true  && pikachuSelected === true) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[2] +" with Slash!";

       //disable attack move for pikachu and scyther
       pikachuMoves[0].pikachuFunction1of6 = false;
       scytherMovesActivated[0].scytherFunction1of6 = false;


     }else if (scytherSelected === true  &&  charmanderSelected === true) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[0] +" with Slash!";

       //disable attack move for charmander and scyther
       charmanderMoves[0].charmanderFunction1of6 = false;
       scytherMovesActivated[0].scytherFunction1of6 = false;

     }else if (scytherSelected === true  &&  blastoiseSelected === true) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[1] +" with Slash!";

       //disable attack move for blastoise and scyther
       blastoiseMoves[0].blastoiseFunction1of6 = false;
       scytherMovesActivated[0].scytherFunction1of6 = false;

     }//end of if statements



     //Change boolean state so that player1 can make a move
     makeMove[0].computerMove = false;
     console.log(makeMove[0]);
     enableMoves();
     console.log(makeMove[0]);



      break;




      case (scytherMovesActivated[0].scytherFunction2of6 === true && pikachuMoves[0].pikachuFunction2of6 === true ||
            scytherMovesActivated[0].scytherFunction2of6 === true && charmanderMoves[0].charmanderFunction2of6 === true ||
            scytherMovesActivated[0].scytherFunction2of6 === true && blastoiseMoves[0].blastoiseFunction2of6 === true):

    //scyther attack move: Quick Attack

    if (scytherSelected === true  && pikachuSelected === true) {

      //debugging here -- delete when neccessary
      console.log("scytherMoves Function2of6 is : " + scytherMovesActivated[0].scytherFunction2of6);

      //Quick Attack does -15 damage to pikachu
      //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
      pikachuHealthBar.push(-15);
      pikachuBackup.push(-15);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      decreasePlayerHP2();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      checkTheStatus();

      //show attack image
      scyAtkImage2();
      playScytherQuickAttackSound();


      //debugging here------------------------------------------------------

      console.log("pikachuHealthBar array is "+pikachuHealthBar);
      console.log("pikachuBackup array is " +pikachuBackup);



    }else if (scytherSelected === true  &&  charmanderSelected === true) {

      //debugging here -- delete when neccessary
      console.log("scytherMoves Function2of6 is (2) : " + scytherMovesActivated[0].scytherFunction2of6);


      //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
      charmanderHealthBar.push(-5);
      charmanderBackup.push(-5);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      decreasePlayerHP2();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      checkTheStatus();

      //show attack image
      scyAtkImage2();
      playScytherQuickAttackSound();


      //debugging here------------------------------------------------------

      console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
      console.log("charmanderBackup array is (2) " + charmanderBackup);

    }else if (scytherSelected === true  &&  blastoiseSelected === true) {


      //debugging here -- delete when neccessary
      console.log("scytherMoves Function2of6 is (3) : " + scytherMovesActivated[0].scytherFunction2of6);


      //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
      blastoiseHealthBar.push(-15);
      blastoiseBackup.push(-15);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      decreasePlayerHP2();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      checkTheStatus();

      //show attack image
      scyAtkImage2();
      playScytherQuickAttackSound();


      //debugging here------------------------------------------------------

      console.log("blastoiseHealthBar array is (3) " + blastoiseHealthBar);
      console.log("blastoiseBackup array is (3) " + blastoiseBackup);

    }//end of multiple if statements



    if (scytherSelected === true  && pikachuSelected === true) {

      //remove previous comment
      document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[2] +" with Quick Attack!";

      //disable attack move for pikachu and scyther
      pikachuMoves[0].pikachuFunction2of6 = false;
      scytherMovesActivated[0].scytherFunction2of6 = false;


    }else if (scytherSelected === true  &&  charmanderSelected === true) {

      //remove previous comment
      document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[0] +" with Quick Attack!";

      //disable attack move for charmander and scyther
      charmanderMoves[0].charmanderFunction2of6 = false;
      scytherMovesActivated[0].scytherFunction2of6 = false;

    }else if (scytherSelected === true  &&  blastoiseSelected === true) {

      //remove previous comment
      document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[1] +" with Quick Attack!";

      //disable attack move for blastoise and scyther
      blastoiseMoves[0].blastoiseFunction2of6 = false;
      scytherMovesActivated[0].scytherFunction2of6 = false;

    }//end of if statements




    //Change boolean state so that player1 can make a move
    makeMove[0].computerMove = false;
    console.log(makeMove[0]);
    enableMoves();
    console.log(makeMove[0]);



      break;




      case (scytherMovesActivated[0].scytherFunction3of6 === true && pikachuMoves[0].pikachuFunction3of6 === true ||
            scytherMovesActivated[0].scytherFunction3of6 === true && charmanderMoves[0].charmanderFunction3of6 === true ||
            scytherMovesActivated[0].scytherFunction3of6 === true && blastoiseMoves[0].blastoiseFunction3of6 === true):


    //scyther attack move: X-Scissor

    if (scytherSelected === true  && pikachuSelected === true) {

      //debugging here -- delete when neccessary
      console.log("scytherMoves Function3of6 is : " + scytherMovesActivated[0].scytherFunction3of6);

      //scyther does -20 damage to pikachu
      //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
      pikachuHealthBar.push(-20);
      pikachuBackup.push(-20);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      decreasePlayerHP2();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      checkTheStatus();

      //show attack image
      scyAtkImage3();
      playScytherXScissorSound();


      //debugging here------------------------------------------------------

      console.log("pikachuHealthBar array is "+pikachuHealthBar);
      console.log("pikachuBackup array is " +pikachuBackup);

    }else if (scytherSelected === true  &&  charmanderSelected === true) {

      //debugging here -- delete when neccessary
      console.log("scytherMoves Function3of6 is (2) : " + scytherMovesActivated[0].scytherFunction3of6);


      //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
      charmanderHealthBar.push(-5);
      charmanderBackup.push(-5);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      decreasePlayerHP2();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      checkTheStatus();

      //show attack image
      scyAtkImage3();
      playScytherXScissorSound();


      //debugging here------------------------------------------------------

      console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
      console.log("charmanderBackup array is (2) " + charmanderBackup);

    }else if (scytherSelected === true  &&  blastoiseSelected === true) {

      //debugging here -- delete when neccessary
      console.log("scytherMoves Function3of6 is (3) " + scytherMovesActivated[0].scytherFunction3of6);


      //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
      blastoiseHealthBar.push(-20);
      blastoiseBackup.push(-20);


      //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
      decreasePlayerHP2();

      //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
      checkTheStatus();

      //show attack image
      scyAtkImage3();
      playScytherXScissorSound();


      //debugging here------------------------------------------------------

      console.log("blastoiseHealthBar array is (3) " + blastoiseHealthBar);
      console.log("blastoiseBackup array is (3) " + blastoiseBackup);

    }//end of multiple if statements




    if (scytherSelected === true  && pikachuSelected === true) {

      //remove previous comment
      document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[2] +" with X-Scissor!";

      //disable attack move for pikachu and scyther
      pikachuMoves[0].pikachuFunction3of6 = false;
      scytherMovesActivated[0].scytherFunction3of6 = false;


    }else if (scytherSelected === true  &&  charmanderSelected === true) {

      //remove previous comment
      document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[0] +" with X-Scissor!";

      //disable attack move for charmander and scyther
      charmanderMoves[0].charmanderFunction3of6 = false;
      scytherMovesActivated[0].scytherFunction3of6 = false;

    }else if (scytherSelected === true  &&  blastoiseSelected === true) {

      //remove previous comment
      document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[1] +" with X-Scissor!";

      //disable attack move for blastoise and scyther
      blastoiseMoves[0].blastoiseFunction3of6 = false;
      scytherMovesActivated[0].scytherFunction3of6 = false;

    }//end of if statements



    //Change boolean state so that player1 can make a move
    makeMove[0].computerMove = false;
    console.log(makeMove[0]);
    enableMoves();
    console.log(makeMove[0]);


      break;







      case (scytherMovesActivated[0].scytherFunction4of6 === true && pikachuMoves[0].pikachuFunction4of6 === true ||
            scytherMovesActivated[0].scytherFunction4of6 === true && charmanderMoves[0].charmanderFunction4of6 === true ||
            scytherMovesActivated[0].scytherFunction4of6 === true && blastoiseMoves[0].blastoiseFunction4of6 === true):


      //scyther attack move: Fury Cutter

      if (scytherSelected === true  && pikachuSelected === true) {

        //debugging here -- delete when neccessary
        console.log("scytherMoves Function4of6 is : " + scytherMovesActivated[0].scytherFunction4of6);

        //Fury Cutter does -10 damage to pikachu
        //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
        pikachuHealthBar.push(-10);
        pikachuBackup.push(-10);


        //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
        decreasePlayerHP2();

        //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
        checkTheStatus();

        //show attack image
        scyAtkImage4();
        scytherFuryCutterSound();


        //debugging here------------------------------------------------------

        console.log("pikachuHealthBar array is "+pikachuHealthBar);
        console.log("pikachuBackup array is " +pikachuBackup);

      }else if (scytherSelected === true  &&  charmanderSelected === true) {

        //debugging here -- delete when neccessary
        console.log("scytherMoves Function4of6 is (2) : " + scytherMovesActivated[0].scytherFunction4of6);


        //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
        charmanderHealthBar.push(-10);
        charmanderBackup.push(-10);


        //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
        decreasePlayerHP2();

        //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
        checkTheStatus();

        //show attack image
        scyAtkImage4();
        scytherFuryCutterSound();


        //debugging here------------------------------------------------------

        console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
        console.log("charmanderBackup array is (2) " + charmanderBackup);

      }else if (scytherSelected === true  &&  blastoiseSelected === true) {

        //debugging here -- delete when neccessary
        console.log("scytherMoves Function4of6 is (3) : " + scytherMovesActivated[0].scytherFunction4of6);


        //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
        blastoiseHealthBar.push(-35);
        blastoiseBackup.push(-35);


        //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
        decreasePlayerHP2();

        //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
        checkTheStatus();

        //show attack image
        scyAtkImage4();
        scytherFuryCutterSound();


        //debugging here------------------------------------------------------

        console.log("blastoiseHealthBar array is (3) " + blastoiseHealthBar);
        console.log("blastoiseBackup array is (3) " + blastoiseBackup);

      }//end of multiple if statements




      if (scytherSelected === true  && pikachuSelected === true) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[2] +" with Fury Cutter!";

        //disable attack move for pikachu and scyther
        pikachuMoves[0].pikachuFunction4of6 = false;
        scytherMovesActivated[0].scytherFunction4of6 = false;


      }else if (scytherSelected === true  &&  charmanderSelected === true) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[0] +" with Fury Cutter!";

        //disable attack move for charmander and scyther
        charmanderMoves[0].charmanderFunction4of6 = false;
        scytherMovesActivated[0].scytherFunction4of6 = false;

      }else if (scytherSelected === true  &&  blastoiseSelected === true) {

        //remove previous comment
        document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[1] +" with Fury Cutter!";

        //disable attack move for blastoise and scyther
        blastoiseMoves[0].blastoiseFunction4of6 = false;
        scytherMovesActivated[0].scytherFunction4of6 = false;

      }//end of if statements



      //Change boolean state so that player1 can make a move
      makeMove[0].computerMove = false;
      console.log(makeMove[0]);
      enableMoves();
      console.log(makeMove[0]);


        break;







        case (scytherMovesActivated[0].scytherFunction5of6 === true && pikachuMoves[0].pikachuFunction5of6 === true ||
              scytherMovesActivated[0].scytherFunction5of6 === true && charmanderMoves[0].charmanderFunction5of6 === true ||
              scytherMovesActivated[0].scytherFunction5of6 === true && blastoiseMoves[0].blastoiseFunction5of6 === true):


        //scyther attack move: Wing Attack

        if (scytherSelected === true  && pikachuSelected === true) {

          //debugging here -- delete when neccessary
          console.log("scytherMoves Function5of6 is : " + scytherMovesActivated[0].scytherFunction5of6);

          //Wing Attack does -30 damage to charmander
          //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
          pikachuHealthBar.push(-30);
          pikachuBackup.push(-30);


          //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
          decreasePlayerHP2();

          //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
          checkTheStatus();

          //show attack image
          scyAtkImage5();
          playScytherWingAttackSound();


          //debugging here------------------------------------------------------

          console.log("pikachuHealthBar array is "+pikachuHealthBar);
          console.log("pikachuBackup array is " +pikachuBackup);

        }else if (scytherSelected === true  &&  charmanderSelected === true) {

          //debugging here -- delete when neccessary
          console.log("scytherMoves Function5of6 is : " + scytherMovesActivated[0].scytherFunction5of6);


          //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
          charmanderHealthBar.push(-5);
          charmanderBackup.push(-5);


          //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
          decreasePlayerHP2();

          //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
          checkTheStatus();

          //show attack image
          scyAtkImage5();
          playScytherWingAttackSound();


          //debugging here------------------------------------------------------

          console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
          console.log("charmanderBackup array is (2) " + charmanderBackup);

        }else if (scytherSelected === true  &&  blastoiseSelected === true) {

          //debugging here -- delete when neccessary
          console.log("scytherMoves Function5of6 is : " + scytherMovesActivated[0].scytherFunction5of6);


          //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
          blastoiseHealthBar.push(-20);
          blastoiseBackup.push(-20);


          //this function changes the HTML progress bar that displays the pokemon HP (does damage to player1 when pikachu attacks)
          decreasePlayerHP2();

          //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
          checkTheStatus();

          //show attack image
          scyAtkImage5();
          playScytherWingAttackSound();


          //debugging here------------------------------------------------------

          console.log("blastoiseHealthBar array is (3) " + blastoiseHealthBar);
          console.log("blastoiseBackup array is (3) " + blastoiseBackup);

        }//end of multiple if statements




        if (scytherSelected === true  && pikachuSelected === true) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[2] +" with Wing Attack!";

       //disable attack move for pikachu and scyther
       pikachuMoves[0].pikachuFunction5of6 = false;
       scytherMovesActivated[0].scytherFunction5of6 = false;


     }else if (scytherSelected === true  &&  charmanderSelected === true) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[0] +" with Wing Attack!";

       //disable attack move for charmander and scyther
       charmanderMoves[0].charmanderFunction5of6 = false;
       scytherMovesActivated[0].scytherFunction5of6 = false;

     }else if (scytherSelected === true  &&  blastoiseSelected === true) {

       //remove previous comment
       document.getElementById("statusProgress2").innerHTML = pokemonName[1] + " attacked "+ player1PokemonChoices[1] +" with Wing Attack!";

       //disable attack move for blastoise and scyther
       blastoiseMoves[0].blastoiseFunction5of6 = false;
       scytherMovesActivated[0].scytherFunction5of6 = false;

     }//end of if statements






        //Change boolean state so that player1 can make a move
        makeMove[0].computerMove = false;
        console.log(makeMove[0]);
        enableMoves();
        console.log(makeMove[0]);


          break;






          case (scytherMovesActivated[0].scytherFunction6of6 === true && pikachuMoves[0].pikachuFunction6of6 === true ||
                scytherMovesActivated[0].scytherFunction6of6 === true && charmanderMoves[0].charmanderFunction6of6 === true ||
                scytherMovesActivated[0].scytherFunction6of6 === true && blastoiseMoves[0].blastoiseFunction6of6 === true):

                //varible declartion

                let charmanderHP5 = charmanderHealthBar.reduce(PokemonHPReduced);
                let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);

                let pikachuHP15 = pikachuHealthBar.reduce(PokemonHPReduced);
                let pikachuSpeedBar = pikSpeedProgressBar.reduce(PokemonHPReduced);

                let blastoiseHP16 = blastoiseHealthBar.reduce(PokemonHPReduced);
                let blastoiseSpeedBar = blaSpeedProgressBar.reduce(PokemonHPReduced);

                let hpRecovered2 = charmanderHpRecovered.reduce(PokemonRestoredReducer);
                let hpRecovered3 = pikachuHpRecovered.reduce(PokemonRestoredReducer);
                let hpRecovered4 = blastoiseHpRecovered.reduce(PokemonRestoredReducer);

                //scyther attack move: rest (restores health to pikachu, charmander, and blastoise)


                //scyther vs pikachu (default) 1 of 3 sets
                //charmander, pikachu, or blastoise gets 45 HP if conditions are true
                if (scytherSelected === true && pikachuSelected === true && pikachuHP15 <= 40) {

                  //show recovery image for computer pokemon and play rest sound effect
                  pikAtkImage6();
                  playPokemonRestSound();

                  //reflect the changes to the pikachuHealthBar array
                 pikachuHealthBar.push(45);

                 //backup array for health restoration needs to be updated as well
                 pikachuHpRecovered.push(45);

                  //reflect speedbar progress to pikSpeedProgressBar array to create limit for health restoration
                 pikSpeedProgressBar.push(-50);

                 //debugging here------------------------------------------------------

                console.log("(SYM 0) pikachuHealthBar array is "+ pikachuBackup);
                console.log("(SYM 0) pikachuHP_recovered array is " + hpRecovered3);


                }else if(scytherSelected === true && pikachuSelected === true && pikachuHP15 > 40) {

                  //turn off rest sound effect
                  playPokemonRestSound();

                  //make no changes to the pikachuHealthBar array
                  pikachuHealthBar.push(0);

                  //make no changes to pikachuHpRecovered array
                  pikachuHpRecovered.push(0);

                  //make no changes to pikSpeedProgressBar array
                  pikSpeedProgressBar.push(0);




                }//end of if statements 1 of 3


               //scyther vs charmander 2 of 3 sets
               if (scytherSelected === true && charmanderSelected === true && charmanderHP5 <= 40) {

                 //show recovery image for computer pokemon and play rest sound effect
                 chrAtkImage6();
                 playPokemonRestSound();

                 //reflect the changes to the charmanderHealthBar array
                charmanderHealthBar.push(45);

                //backup array for health restoration needs to be updated as well
                charmanderHpRecovered.push(45);

                 //reflect speedbar progress to chaSpeedProgressBar array to create limit for health restoration
                chaSpeedProgressBar.push(-50);

                //debugging here------------------------------------------------------

                console.log("(SYM 2) charmanderHealthBar array is "+ charmanderHP5);
                console.log("(SYM 2) charmanderHP_recovered array is " + hpRecovered2);



               }else if(scytherSelected === true && charmanderSelected === true && charmanderHP5 > 40) {

                 //turn off rest sound effect
                 playPokemonRestSound();


                 //make no changes to the charmanderHealthBar array
                 charmanderHealthBar.push(0);

                 //make no changes to charmanderHpRecovered array
                 charmanderHpRecovered.push(0);

                 //make no changes to the chaSpeedProgressBar array
                 chaSpeedProgressBar.push(0);




              }//end of if statements 2 of 3


                //scyther vs blastoise 3 of 3 sets
                if (scytherSelected === true && blastoiseSelected === true && blastoiseHP16 <= 40) {

                 //show recovery image for player1 pokemon and play rest sound effect
                 blaAtkImage6();
                 playPokemonRestSound();

                 //reflect the changes to the blastoiseHealthBar array
                blastoiseHealthBar.push(45);


                //backup array for health restoration needs to be updated as well
                blastoiseHpRecovered.push(45);


                 //reflect speedbar progress to blaSpeedProgressBar array to create limit for health restoration
                blaSpeedProgressBar.push(-50);

                //debugging here------------------------------------------------------

                console.log("(SYM 3) blastoiseHealthBar array is "+ blastoiseHealthBar);
                console.log("(SYM 3) blastoiseHP_recovered array is " + hpRecovered4);



                }else if(scytherSelected === true && blastoiseSelected === true && blastoiseHP16 > 40) {

                 //turn off rest sound effect
                 pausePokemonRestSound();

                 //make no changes to the pikachuHealthBar array
                 blastoiseHealthBar.push(0);


                 //make no changes to the blastoiseHpRecovered array
                 blastoiseHpRecovered.push(0);


                 //make no changes to pikSpeedProgressBar array
                 blaSpeedProgressBar.push(0);




               }//end of if statements 3 of 3



          //this function changes the HTML progress bar that displays the pokemon HP (this attack recovers pikachu when scyther attacks)
          decreasePlayerHP2(); //actually increases hp for pikachu, charmander or blastoise



       if (scytherSelected === true  && pikachuSelected === true) {

         //disable attack move for pikachu and scyther
         pikachuMoves[0].pikachuFunction6of6 = false;
         scytherMovesActivated[0].scytherFunction6of6 = false;


       }else if (scytherSelected === true  &&  charmanderSelected === true) {

         //disable attack move for charmander and scyther
         charmanderMoves[0].charmanderFunction6of6 = false;
         scytherMovesActivated[0].scytherFunction6of6 = false;

       }else if (scytherSelected === true  &&  blastoiseSelected === true) {

         //disable attack move for blastoise and scyther
         blastoiseMoves[0].blastoiseFunction6of6 = false;
         scytherMovesActivated[0].scytherFunction6of6 = false;

       }//end of if statements





          //Change boolean state so that player1 can make a move
          makeMove[0].computerMove = false;
          console.log(makeMove[0]);
          enableMoves();
          console.log(makeMove[0]);


            break;



    default:
      console.log("scytherMoves default switch function was activated -- evaluate cases to fix error.(2)");




  }//end of switch statements for scytherMoves



        }//end of scytherMoves function










// start of onixMoves -- ends at 4404

const onixMoves = function () {

          //onixMoves needs to evalute the selection that player1 makes and take neccessary action based on that info

          switch (onixMovesActivated[0].onixFunction1of6 === true && blastoiseMoves[0].blastoiseFunction1of6 === true
             ||   onixMovesActivated[0].onixFunction2of6 === true && blastoiseMoves[0].blastoiseFunction2of6 === true
             ||   onixMovesActivated[0].onixFunction3of6 === true && blastoiseMoves[0].blastoiseFunction3of6 === true
             ||   onixMovesActivated[0].onixFunction4of6 === true && blastoiseMoves[0].blastoiseFunction4of6 === true
             ||   onixMovesActivated[0].onixFunction5of6 === true && blastoiseMoves[0].blastoiseFunction5of6 === true
             ||   onixMovesActivated[0].onixFunction6of6 === true && blastoiseMoves[0].blastoiseFunction6of6 === true

             ||   onixMovesActivated[0].onixFunction1of6 === true && charmanderMoves[0].charmanderFunction1of6 === true
             ||   onixMovesActivated[0].onixFunction2of6 === true && charmanderMoves[0].charmanderFunction2of6 === true
             ||   onixMovesActivated[0].onixFunction3of6 === true && charmanderMoves[0].charmanderFunction3of6 === true
             ||   onixMovesActivated[0].onixFunction4of6 === true && charmanderMoves[0].charmanderFunction4of6 === true
             ||   onixMovesActivated[0].onixFunction5of6 === true && charmanderMoves[0].charmanderFunction5of6 === true
             ||   onixMovesActivated[0].onixFunction6of6 === true && charmanderMoves[0].charmanderFunction6of6 === true

             ||   onixMovesActivated[0].onixFunction1of6 === true && pikachuMoves[0].pikachuFunction1of6 === true
             ||   onixMovesActivated[0].onixFunction2of6 === true && pikachuMoves[0].pikachuFunction2of6 === true
             ||   onixMovesActivated[0].onixFunction3of6 === true && pikachuMoves[0].pikachuFunction3of6 === true
             ||   onixMovesActivated[0].onixFunction4of6 === true && pikachuMoves[0].pikachuFunction4of6 === true
             ||   onixMovesActivated[0].onixFunction5of6 === true && pikachuMoves[0].pikachuFunction5of6 === true
             ||   onixMovesActivated[0].onixFunction6of6 === true && pikachuMoves[0].pikachuFunction6of6 === true) {

       case (onixMovesActivated[0].onixFunction1of6 === true && blastoiseMoves[0].blastoiseFunction1of6 === true||
             onixMovesActivated[0].onixFunction1of6 === true && charmanderMoves[0].charmanderFunction1of6 === true ||
             onixMovesActivated[0].onixFunction1of6 === true && pikachuMoves[0].pikachuFunction1of6 === true):

        //onix attack move: Rock Throw
        //this statement selects the computer pokemon to battle with player1 pokemon (blastoise, charmander, or pikachu)
        if (onixSelected === true && blastoiseSelected === true) {

          //debugging here -- delete when neccessary
          console.log("onixMoves Function1of6 is : " + onixMovesActivated[0].onixFunction1of6);

          //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
          blastoiseHealthBar.push(-25);
          blastoiseBackup.push(-25);

          //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
          decreasePlayerHP3();

          //show attack image
          oniAtkImage1();
          playOnixRockThrowSound();


          //debugging here------------------------------------------------------
          console.log("blastoiseHealthBar array is "+blastoiseHealthBar);
          console.log("blastoiseBackup array is " +blastoiseBackup);


        }else if (onixSelected === true && charmanderSelected === true) {

          //debugging here -- delete when neccessary
          console.log("onixMoves Function1of6 is (2): " + onixMovesActivated[0].onixFunction1of6);

          //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
          charmanderHealthBar.push(-35);
          charmanderBackup.push(-35);

          decreasePlayerHP3();

          //show attack image
          oniAtkImage1();
          playOnixRockThrowSound();

          //debugging here------------------------------------------------------
          console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
          console.log("charmanderBackup array is (2) " + charmanderBackup);

        }else if (onixSelected === true && pikachuSelected === true) {

          //debugging here -- delete when neccessary
          console.log("onixMoves Function1of6 is (3): " + onixMovesActivated[0].onixFunction1of6);

          //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
          pikachuHealthBar.push(-35);
          pikachuBackup.push(-35);

          decreasePlayerHP3();

          //show attack image
          oniAtkImage1();
          playOnixRockThrowSound();

          //debugging here------------------------------------------------------
          console.log("pikachuHealthBar array is (3) " + pikachuHealthBar);
          console.log("pikachuBackup array is (3) "  + pikachuBackup);

        }//end of if statements



        //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
        checkTheStatus();


        if (onixSelected === true && blastoiseSelected === true) {

          // inform player1 of attack from computer
          document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[1] +" with Rock Throw!";

          //disable attack move for onix and blastoise
          onixMovesActivated[0].onixFunction1of6 = false;
          blastoiseMoves[0].blastoiseFunction1of6 = false;

        }else if (onixSelected === true && charmanderSelected === true) {

          // inform player1 of attack from computer
          document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[0] +" with Rock Throw!";

          //disable attack move for onix and charmander
          onixMovesActivated[0].onixFunction1of6 = false;
          charmanderMoves[0].charmanderFunction1of6 = false;


        }else if (onixSelected === true && pikachuSelected === true) {

          // inform player1 of attack from computer
          document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[2] +" with Rock Throw!";

          //disable attack move for onix and pikachu
          onixMovesActivated[0].onixFunction1of6 = false;
          pikachuMoves[0].pikachuFunction1of6 = false;

        }//end of if statements



        //Change boolean state so that player1 can make a move
        makeMove[0].computerMove = false;
        console.log(makeMove[0]);
        enableMoves();
        console.log(makeMove[0]);





         break;




         case (onixMovesActivated[0].onixFunction2of6 === true && blastoiseMoves[0].blastoiseFunction2of6 === true||
               onixMovesActivated[0].onixFunction2of6 === true && charmanderMoves[0].charmanderFunction2of6 === true ||
               onixMovesActivated[0].onixFunction2of6 === true && pikachuMoves[0].pikachuFunction2of6 === true):

       //onix attack move: Smack Down

       if (onixSelected === true && blastoiseSelected === true) {

         //debugging here -- delete when neccessary
         console.log("onixMoves Function2of6 is : " + onixMovesActivated[0].onixFunction2of6);

         //Smack Down does -15 damage to blastoise
         //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
         blastoiseHealthBar.push(-15);
         blastoiseBackup.push(-15);


         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         decreasePlayerHP3();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         checkTheStatus();

         //show attack image
         oniAtkImage2();
         playOnixSmackDownSound();

         //debugging here------------------------------------------------------

         console.log("blastoiseHealthBar array is  " + blastoiseHealthBar);
         console.log("blastoiseBackup array is  "  + blastoiseBackup);

       }else if (onixSelected === true && charmanderSelected === true) {

         //debugging here -- delete when neccessary
         console.log("onixMoves Function2of6 is (2): " + onixMovesActivated[0].onixFunction2of6);


         //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
         charmanderHealthBar.push(-35);
         charmanderBackup.push(-35);


         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         decreasePlayerHP3();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         checkTheStatus();

         //show attack image
         oniAtkImage2();
         playOnixSmackDownSound();

         //debugging here------------------------------------------------------

         console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
         console.log("charmanderBackup array is (2) " + charmanderBackup);

       }else if (onixSelected === true && pikachuSelected === true) {

         //debugging here -- delete when neccessary
         console.log("onixMoves Function2of6 is (3): " + onixMovesActivated[0].onixFunction2of6);


         //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
         pikachuHealthBar.push(-35);
         pikachuBackup.push(-35);


         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         decreasePlayerHP3();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         checkTheStatus();

         //show attack image
         oniAtkImage2();
         playOnixSmackDownSound();

         //debugging here------------------------------------------------------

         console.log("pikachuHealthBar array is (3) " + pikachuHealthBar);
         console.log("pikachuBackup array is (3) "  + pikachuBackup);

       }







       if (onixSelected === true && blastoiseSelected === true) {

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[1] +" with Smack Down!";

         //disable attack move for onix and blastoise
         onixMovesActivated[0].onixFunction2of6 = false;
         blastoiseMoves[0].blastoiseFunction2of6 = false;

       }else if (onixSelected === true && charmanderSelected === true) {

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[0] +" with Smack Down!";

         //disable attack move for onix and charmander
         onixMovesActivated[0].onixFunction2of6 = false;
         charmanderMoves[0].charmanderFunction2of6 = false;


       }else if (onixSelected === true && pikachuSelected === true) {

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[2] +" with Smack Down!";

         //disable attack move for onix and pikachu
         onixMovesActivated[0].onixFunction2of6 = false;
         pikachuMoves[0].pikachuFunction2of6 = false;

       }//end of if statements





       //Change boolean state so that player1 can make a move
       makeMove[0].computerMove = false;
       console.log(makeMove[0]);
       enableMoves();
       console.log(makeMove[0]);



         break;




         case (onixMovesActivated[0].onixFunction3of6 === true && blastoiseMoves[0].blastoiseFunction3of6 === true||
               onixMovesActivated[0].onixFunction3of6 === true && charmanderMoves[0].charmanderFunction3of6 === true ||
               onixMovesActivated[0].onixFunction3of6 === true && pikachuMoves[0].pikachuFunction3of6 === true):


       //onix attack move: Rock Slide

       if (onixSelected === true && blastoiseSelected === true) {

         //Rock Slide does -15 damage to blastoise
         //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
         blastoiseHealthBar.push(-15);
         blastoiseBackup.push(-15);


         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         decreasePlayerHP3();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         checkTheStatus();

         //show attack image
         oniAtkImage3();
         playOnixRockSlideSound();

         //debugging here------------------------------------------------------

         console.log("blastoiseHealthBar array is "+blastoiseHealthBar);
         console.log("blastoiseBackup array is " +blastoiseBackup);

       }else if (onixSelected === true && charmanderSelected === true) {


         //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
         charmanderHealthBar.push(-30);
         charmanderBackup.push(-30);


         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         decreasePlayerHP3();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         checkTheStatus();

         //show attack image
         oniAtkImage3();
         playOnixRockSlideSound();

         //debugging here------------------------------------------------------

         console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
         console.log("charmanderBackup array is (2) " + charmanderBackup);

       }else if (onixSelected === true && pikachuSelected === true) {


         //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
         pikachuHealthBar.push(-30);
         pikachuBackup.push(-30);

         //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
         decreasePlayerHP3();

         //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
         checkTheStatus();

         //show attack image
         oniAtkImage3();
         playOnixRockSlideSound();

         //debugging here------------------------------------------------------

         console.log("pikachuHealthBar array is (3) " + pikachuHealthBar);
         console.log("pikachuBackup array is (3) "  + pikachuBackup);

       }//end of multiple if statements


       //debugging here -- delete when neccessary
       console.log("onixMoves Function3of6 is : " + onixMovesActivated[0].onixFunction3of6);



       if (onixSelected === true && blastoiseSelected === true) {

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[1] +" with Rock Slide!";

         //disable attack move for onix and blastoise
         onixMovesActivated[0].onixFunction3of6 = false;
         blastoiseMoves[0].blastoiseFunction3of6 = false;

       }else if (onixSelected === true && charmanderSelected === true) {

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[0] +" with Rock Slide!";

         //disable attack move for onix and charmander
         onixMovesActivated[0].onixFunction3of6 = false;
         charmanderMoves[0].charmanderFunction3of6 = false;


       }else if (onixSelected === true && pikachuSelected === true) {

         // inform player1 of attack from computer
         document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[2] +" with Rock Slide!";

         //disable attack move for onix and pikachu
         onixMovesActivated[0].onixFunction3of6 = false;
         pikachuMoves[0].pikachuFunction3of6 = false;

       }//end of if statements





       //Change boolean state so that player1 can make a move
       makeMove[0].computerMove = false;
       console.log(makeMove[0]);
       enableMoves();
       console.log(makeMove[0]);


         break;







         case (onixMovesActivated[0].onixFunction4of6 === true && blastoiseMoves[0].blastoiseFunction4of6 === true||
               onixMovesActivated[0].onixFunction4of6 === true && charmanderMoves[0].charmanderFunction4of6 === true ||
               onixMovesActivated[0].onixFunction4of6 === true && pikachuMoves[0].pikachuFunction4of6 === true):


         //onix attack move: Screech

         if (onixSelected === true && blastoiseSelected === true) {

           //debugging here -- delete when neccessary
           console.log("onixMoves Function4of6 is : " + onixMovesActivated[0].onixFunction4of6);

           //Screech -10 damage to blastoise
           //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
           blastoiseHealthBar.push(-10);
           blastoiseBackup.push(-10);


           //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
           decreasePlayerHP3();

           //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
           checkTheStatus();

           //show attack image
           oniAtkImage4();
           playOnixScreechSound();

           //debugging here------------------------------------------------------

           console.log("blastoiseHealthBar array is "+blastoiseHealthBar);
           console.log("blastoiseBackup array is " +blastoiseBackup);

         }else if (onixSelected === true && charmanderSelected === true) {

           //debugging here -- delete when neccessary
           console.log("onixMoves Function4of6 is : " + onixMovesActivated[0].onixFunction4of6);


           //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
           charmanderHealthBar.push(-10);
           charmanderBackup.push(-10);


           //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
           decreasePlayerHP3();

           //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
           checkTheStatus();

           //show attack image
           oniAtkImage4();
           playOnixScreechSound();

           //debugging here------------------------------------------------------

           console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
           console.log("charmanderBackup array is (2) " + charmanderBackup);

         }else if (onixSelected === true && pikachuSelected === true) {

           //debugging here -- delete when neccessary
           console.log("onixMoves Function4of6 is : " + onixMovesActivated[0].onixFunction4of6);


           //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
           pikachuHealthBar.push(-10);
           pikachuBackup.push(-10);


           //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
           decreasePlayerHP3();

           //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
           checkTheStatus();

           //show attack image
           oniAtkImage4();
           playOnixScreechSound();

           //debugging here------------------------------------------------------

           console.log("pikachuHealthBar array is (3) " + pikachuHealthBar);
           console.log("pikachuBackup array is (3) "  + pikachuBackup);

         }//end of multiple if statements




         if (onixSelected === true && blastoiseSelected === true) {

           // inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[1] +" with Screech!";

           //disable attack move for onix and blastoise
           onixMovesActivated[0].onixFunction4of6 = false;
           blastoiseMoves[0].blastoiseFunction4of6 = false;

         }else if (onixSelected === true && charmanderSelected === true) {

           // inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[0] +" with Screech!";

           //disable attack move for onix and charmander
           onixMovesActivated[0].onixFunction4of6 = false;
           charmanderMoves[0].charmanderFunction4of6 = false;


         }else if (onixSelected === true && pikachuSelected === true) {

           // inform player1 of attack from computer
           document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[2] +" with Screech!";

           //disable attack move for onix and pikachu
           onixMovesActivated[0].onixFunction4of6 = false;
           pikachuMoves[0].pikachuFunction4of6 = false;

         }//end of if statements





         //Change boolean state so that player1 can make a move
         makeMove[0].computerMove = false;
         console.log(makeMove[0]);
         enableMoves();
         console.log(makeMove[0]);


           break;







           case (onixMovesActivated[0].onixFunction5of6 === true && blastoiseMoves[0].blastoiseFunction5of6 === true||
                 onixMovesActivated[0].onixFunction5of6 === true && charmanderMoves[0].charmanderFunction5of6 === true ||
                 onixMovesActivated[0].onixFunction5of6 === true && pikachuMoves[0].pikachuFunction5of6 === true):


           //onix attack move: Stone Edge

           if (onixSelected === true && blastoiseSelected === true) {

             //debugging here -- delete when neccessary
             console.log("onixMoves Function5of6 is : " + onixMovesActivated[0].onixFunction5of6);

             //Stone Edge does -30 damage to charmander
             //reflect the changes to blastoiseHealthBar AND blastoiseBackup array as well.
             blastoiseHealthBar.push(-30);
             blastoiseBackup.push(-30);


             //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
             decreasePlayerHP3();

             //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
             checkTheStatus();


             //show attack image
             oniAtkImage5();
             playOnixStoneEdgeSound();

             //debugging here------------------------------------------------------

             console.log("blastoiseHealthBar array is "+blastoiseHealthBar);
             console.log("blastoiseBackup array is " +blastoiseBackup);

           }else if (onixSelected === true && charmanderSelected === true) {

             //debugging here -- delete when neccessary
             console.log("onixMoves Function5of6 is : " + onixMovesActivated[0].onixFunction5of6);


             //reflect the changes to charmanderHealthBar AND charmanderBackup array as well.
             charmanderHealthBar.push(-10);
             charmanderBackup.push(-10);


             //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
             decreasePlayerHP3();

             //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
             checkTheStatus();


             //show attack image
             oniAtkImage5();
             playOnixStoneEdgeSound();

             //debugging here------------------------------------------------------

             console.log("charmanderHealthBar array is (2) " + charmanderHealthBar);
             console.log("charmanderBackup array is (2) " + charmanderBackup);

           }else if (onixSelected === true && pikachuSelected === true) {

             //debugging here -- delete when neccessary
             console.log("onixMoves Function5of6 is : " + onixMovesActivated[0].onixFunction5of6);


             //reflect the changes to pikachuHealthBar AND pikachuBackup array as well.
             pikachuHealthBar.push(-10);
             pikachuBackup.push(-10);


             //this function changes the HTML progress bar that displays the pokemon HP (onix does damage to player1 when blastoise attacks)
             decreasePlayerHP3();

             //This function checks if pokemon health is greater then 40 or less than 40. It also calls other functions
             checkTheStatus();


             //show attack image
             oniAtkImage5();
             playOnixStoneEdgeSound();

             //debugging here------------------------------------------------------

             console.log("pikachuHealthBar array is (3) " + pikachuHealthBar);
             console.log("pikachuBackup array is (3) "  + pikachuBackup);

           }//end of multiple if statemets






           if (onixSelected === true && blastoiseSelected === true) {

             // inform player1 of attack from computer
             document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[1] +" with Stone Edge";

             //disable attack move for onix and blastoise
             onixMovesActivated[0].onixFunction5of6 = false;
             blastoiseMoves[0].blastoiseFunction5of6 = false;

           }else if (onixSelected === true && charmanderSelected === true) {

             // inform player1 of attack from computer
             document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[0] +" with Stone Edge";

             //disable attack move for onix and charmander
             onixMovesActivated[0].onixFunction5of6 = false;
             charmanderMoves[0].charmanderFunction5of6 = false;


           }else if (onixSelected === true && pikachuSelected === true) {

             // inform player1 of attack from computer
             document.getElementById("statusProgress2").innerHTML = ComputerPokemonChoices[1]+ " attacked "+ player1PokemonChoices[2] +" with Stone Edge";

             //disable attack move for onix and pikachu
             onixMovesActivated[0].onixFunction5of6 = false;
             pikachuMoves[0].pikachuFunction5of6 = false;

           }//end of if statements





           //Change boolean state so that player1 can make a move
           makeMove[0].computerMove = false;
           console.log(makeMove[0]);
           enableMoves();
           console.log(makeMove[0]);


             break;






             case (onixMovesActivated[0].onixFunction6of6 === true && blastoiseMoves[0].blastoiseFunction6of6 === true||
                   onixMovesActivated[0].onixFunction6of6 === true && charmanderMoves[0].charmanderFunction6of6 === true ||
                   onixMovesActivated[0].onixFunction6of6 === true && pikachuMoves[0].pikachuFunction6of6 === true):

                   //varible declartion

                   let charmanderHP5 = charmanderHealthBar.reduce(PokemonHPReduced);
                   let charmanderSpeedBar2 =  chaSpeedProgressBar.reduce(PokemonHPReduced);

                   let pikachuHP15 = pikachuHealthBar.reduce(PokemonHPReduced);
                   let pikachuSpeedBar = pikSpeedProgressBar.reduce(PokemonHPReduced);

                   let blastoiseHP16 = blastoiseHealthBar.reduce(PokemonHPReduced);
                   let blastoiseSpeedBar = blaSpeedProgressBar.reduce(PokemonHPReduced);

                   let hpRecovered2 = charmanderHpRecovered.reduce(PokemonRestoredReducer);
                   let hpRecovered3 = pikachuHpRecovered.reduce(PokemonRestoredReducer);
                   let hpRecovered4 = blastoiseHpRecovered.reduce(PokemonRestoredReducer);

                   //onix attack move: rest (restores health to blastoise, charmander, and pikachu)


                   //onix vs blastoise (default) 1 of 3 sets
                   //charmander, pikachu, or blastoise gets 45 HP if conditions are true
                   if (onixSelected === true && blastoiseSelected === true && blastoiseHP16 <= 40) {

                     //show recovery image for player1 pokemon and play rest sound effect
                     blaAtkImage6();
                     playPokemonRestSound();

                     //reflect the changes to the blastoiseHealthBar array
                    blastoiseHealthBar.push(45);


                    //backup array for health restoration needs to be updated as well
                    blastoiseHpRecovered.push(45);


                     //reflect speedbar progress to blaSpeedProgressBar array to create limit for health restoration
                    blaSpeedProgressBar.push(-50);

                    //debugging here------------------------------------------------------

                    console.log("(ONM 1) blastoiseHealthBar array is "+ blastoiseHealthBar);
                    console.log("(ONM 1) blastoiseHP_recovered array is " + hpRecovered4);


                   }else if(onixSelected === true && blastoiseSelected === true && blastoiseHP16 > 40) {

                     //turn off rest sound effect
                     pausePokemonRestSound();

                     //make no changes to the pikachuHealthBar array
                     blastoiseHealthBar.push(0);


                     //make no changes to the blastoiseHpRecovered array
                     blastoiseHpRecovered.push(0);


                     //make no changes to pikSpeedProgressBar array
                     blaSpeedProgressBar.push(0);



                   }//end of if statements 1 of 3


                  //onix vs pikachu 2 of 3 sets
                  if (onixSelected === true && pikachuSelected === true && pikachuHP15 <= 40) {

                   //show recovery image for computer pokemon and play rest sound effect
                   pikAtkImage6();
                   playPokemonRestSound();

                   //reflect the changes to the pikachuHealthBar array
                  pikachuHealthBar.push(45);

                  //backup array for health restoration needs to be updated as well
                  pikachuHpRecovered.push(45);

                   //reflect speedbar progress to pikSpeedProgressBar array to create limit for health restoration
                  pikSpeedProgressBar.push(-50);

                  //debugging here------------------------------------------------------

                 console.log("(ONM 2) pikachuHealthBar array is "+ pikachuBackup);
                 console.log("(ONM 2) pikachuHP_recovered array is " + hpRecovered3);



                  }else if(onixSelected === true && pikachuSelected === true && pikachuHP15 > 40) {

                   //turn off rest sound effect
                   playPokemonRestSound();

                   //make no changes to the pikachuHealthBar array
                   pikachuHealthBar.push(0);

                   //make no changes to pikachuHpRecovered array
                   pikachuHpRecovered.push(0);

                   //make no changes to pikSpeedProgressBar array
                   pikSpeedProgressBar.push(0);




                 }//end of if statements 2 of 3


                   //onix vs charmander 3 of 3 sets
                   if (onixSelected === true && charmanderSelected === true && charmanderHP5 <= 40) {

                     //show recovery image for computer pokemon and play rest sound effect
                     chrAtkImage6();
                     playPokemonRestSound();

                     //reflect the changes to the charmanderHealthBar array
                    charmanderHealthBar.push(45);

                    //backup array for health restoration needs to be updated as well
                    charmanderHpRecovered.push(45);

                     //reflect speedbar progress to chaSpeedProgressBar array to create limit for health restoration
                    chaSpeedProgressBar.push(-50);

                    //debugging here------------------------------------------------------

                    console.log("(ONM 3) charmanderHealthBar array is "+ charmanderHP5);
                    console.log("(ONM 3) charmanderHP_recovered array is " + hpRecovered2);


                   }else if(onixSelected === true && charmanderSelected === true && charmanderHP5 > 40) {

                     //turn off rest sound effect
                     playPokemonRestSound();


                     //make no changes to the charmanderHealthBar array
                     charmanderHealthBar.push(0);

                     //make no changes to charmanderHpRecovered array
                     charmanderHpRecovered.push(0);

                     //make no changes to the chaSpeedProgressBa array
                     chaSpeedProgressBar.push(0);



                  }//end of if statements 3 of 3




             //this function changes the HTML progress bar that displays the pokemon HP (onix recovers health when blastoise attacks)
             decreasePlayerHP3(); //actually increases hp for blastoise, charmander, or pikachu



             //default setting

             if (onixSelected === true && blastoiseSelected === true) {

               //disable attack move for onix and blastoise
               onixMovesActivated[0].onixFunction6of6 = false;
               blastoiseMoves[0].blastoiseFunction6of6 = false;

             }else if (onixSelected === true && charmanderSelected === true) {

               //disable attack move for onix and charmander
               onixMovesActivated[0].onixFunction6of6 = false;
               charmanderMoves[0].charmanderFunction6of6 = false;


             }else if (onixSelected === true && pikachuSelected === true) {

               //disable attack move for onix and pikachu
               onixMovesActivated[0].onixFunction6of6 = false;
               pikachuMoves[0].pikachuFunction6of6 = false;

             }//end of if statements



             //Change boolean state so that player1 can make a move
             makeMove[0].computerMove = false;
             console.log(makeMove[0]);
             enableMoves();
             console.log(makeMove[0]);


               break;



       default:
         console.log("onixMoves default switch function was activated -- evaluate cases to fix error.(3)");




     } // end of switch statements for onixMoves



   } // end of onixMoves function
























   






//inform player1 to select a pokemon at the start of the game
startGameMessage();




// restart function

function refreshPage() {

    window.location.reload();
}













function attackA() {

console.log(makeMove[0]);
enableMoves();
disableMoves();




if(makeMove[0].player1Move === false && pokemonType[0].isSelected === true ){ // charmander

  fireBlasterMove();
  playCharmanderFireBlasterSound();

  setTimeout (function(){


    if (squirtleSelected === true  &&  charmanderSelected === true) {

      squirtleMoves();

    }else if (scytherSelected === true  &&  charmanderSelected === true) {

      scytherMoves();

    }else if (onixSelected === true  &&  charmanderSelected === true) {

      onixMoves();

    }//end of if statements






  },2000); // computer attacks after 2 secs

}else if (makeMove[0].player1Move === false && pokemonType[1].isSelected === true ) { // blastoise

  aquaJetMove();
  playChamanderBlazeSound();

  setTimeout (function(){


        if (squirtleSelected === true  &&  blastoiseSelected === true) {

          squirtleMoves();

        }else if (scytherSelected === true  &&  blastoiseSelected === true) {

          scytherMoves();

        }else if (onixSelected === true  &&  blastoiseSelected === true) {

          onixMoves();

        }//end of if statements




  },2000); // computer attacks after 2 secs



}else if (makeMove[0].player1Move === false && pokemonType[2].isSelected === true) { // pikachu

  thunderShockMove();
  playPikachuThunderBoltSound();

  setTimeout (function(){


        if (squirtleSelected === true  &&  pikachuSelected === true) {

          squirtleMoves();

        }else if (scytherSelected === true  &&  pikachuSelected === true) {

          scytherMoves();

        }else if (onixSelected === true  &&  pikachuSelected === true) {

          onixMoves();

        }//end of if statements




  },2000); // computer attacks after 2 secs



} //end of statements




}//end of attackA

function attackB() {

console.log(makeMove[0]);
enableMoves();
disableMoves();



if(makeMove[0].player1Move === false && pokemonType[0].isSelected === true) { //charmander

  blazeMove();
  playChamanderBlazeSound();

  setTimeout (function(){


    if (squirtleSelected === true  &&  charmanderSelected === true) {

      squirtleMoves();

    }else if (scytherSelected === true  &&  charmanderSelected === true) {

      scytherMoves();

    }else if (onixSelected === true  &&  charmanderSelected === true) {

      onixMoves();

    }

  },2000); // computer attacks after 2 secs

}else if (makeMove[0].player1Move === false && pokemonType[1].isSelected === true ) { // blastoise

  bubbleMove();
  playSquirtleBubbleSound();

  setTimeout (function(){



    if (squirtleSelected === true  &&  blastoiseSelected === true) {

      squirtleMoves();

    }else if (scytherSelected === true  &&  blastoiseSelected === true) {

      scytherMoves();

    }else if (onixSelected === true  &&  blastoiseSelected === true) {

      onixMoves();

      }

  },2000); // computer attacks after 2 secs



}else if (makeMove[0].player1Move === false && pokemonType[2].isSelected === true) { // pikachu

  doubleKickMove();
  playPikachuDoubleKickSound();

  setTimeout (function(){



    if (squirtleSelected === true  &&  pikachuSelected === true) {

      squirtleMoves();

    }else if (scytherSelected === true  &&  pikachuSelected === true) {

      scytherMoves();

    }else if (onixSelected === true  &&  pikachuSelected === true) {

      onixMoves();

      }




  },2000); //computer attacks after 2 secs



}//end of statements



}//end of attackB

function attackC() {

console.log(makeMove[0]);
enableMoves();
disableMoves();

if(makeMove[0].player1Move === false && pokemonType[0].isSelected === true) { //charmander

  solarPowerMove();
  playCharmanderSolarBeamSound();

  setTimeout (function(){


    if (squirtleSelected === true  &&  charmanderSelected === true) {

      squirtleMoves();

    }else if (scytherSelected === true  &&  charmanderSelected === true) {

      scytherMoves();

    }else if (onixSelected === true  &&  charmanderSelected === true) {

      onixMoves();

      }



  },2000); // computer attacks after 2 secs

}else if (makeMove[0].player1Move === false && pokemonType[1].isSelected === true ) { // blastoise

  hydroPumpMove();
  playBlastoiseHydroPumpSound();


  setTimeout (function(){



    if (squirtleSelected === true  &&  blastoiseSelected === true) {

      squirtleMoves();

    }else if (scytherSelected === true  &&  blastoiseSelected === true) {

      scytherMoves();

    }else if (onixSelected === true  &&  blastoiseSelected === true) {

      onixMoves();

      }



  },2000); // computer attacks after 2 secs



}else if (makeMove[0].player1Move === false && pokemonType[2].isSelected === true) { // pikachu

  thunderBoltMove();
  playPikachuThunderBolt2Sound();

  setTimeout (function(){



    if (squirtleSelected === true  &&  pikachuSelected === true) {

      squirtleMoves();

    }else if (scytherSelected === true  &&  pikachuSelected === true) {

      scytherMoves();

    }else if (onixSelected === true  &&  pikachuSelected === true) {

      onixMoves();

      }




  },2000); //computer attacks after 2 secs



}//end of statements





}//end of attackC



function defenseA() {


  console.log(makeMove[0]);
  enableMoves();
  disableMoves();

  if(makeMove[0].player1Move === false && pokemonType[0].isSelected === true) { //charmander

  growlMove();
  playCharmanderGrowlSound();

    setTimeout (function(){


      if (squirtleSelected === true  &&  charmanderSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  charmanderSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  charmanderSelected === true) {

        onixMoves();

        }



    },2000); // computer attacks after 2 secs

  }else if (makeMove[0].player1Move === false && pokemonType[1].isSelected === true ) { // blastoise

    protectMove();
    playBlastoiseProtectSound();

    setTimeout (function(){



      if (squirtleSelected === true  &&  blastoiseSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  blastoiseSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  blastoiseSelected === true) {

        onixMoves();

        }



    },2000); // computer attacks after 2 secs



  }else if (makeMove[0].player1Move === false && pokemonType[2].isSelected === true) { // pikachu

    growl2Move();
    playCharmanderGrowlSound2();

    setTimeout (function(){



      if (squirtleSelected === true  &&  pikachuSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  pikachuSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  pikachuSelected === true) {

        onixMoves();

        }




    },2000); //computer attacks after 2 secs



  }//end of statements






}//end of defenseA

function defenseB() {


  console.log(makeMove[0]);
  enableMoves();
  disableMoves();

  if(makeMove[0].player1Move === false && pokemonType[0].isSelected === true) { //charmander

    smokeScreenMove();
    playCharmanderSmokeScreenSound();

    setTimeout (function(){


      if (squirtleSelected === true  &&  charmanderSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  charmanderSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  charmanderSelected === true) {

        onixMoves();

        }



    },2000); // computer attacks after 2 secs

  }else if (makeMove[0].player1Move === false && pokemonType[1].isSelected === true ) { // blastoise

    headButt2Move();
    playOnixSmackDownSound3();

    setTimeout (function(){



      if (squirtleSelected === true  &&  blastoiseSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  blastoiseSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  blastoiseSelected === true) {

        onixMoves();

        }



    },2000); // computer attacks after 2 secs



  }else if (makeMove[0].player1Move === false && pokemonType[2].isSelected === true) { // pikachu

    headButtMove();
    playOnixSmackDownSound2();

    setTimeout (function(){



      if (squirtleSelected === true  &&  pikachuSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  pikachuSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  pikachuSelected === true) {

        onixMoves();


        }




    },2000); //computer attacks after 2 secs



  }//end of statements





}//end of defenseB


function defenseC() {

  console.log(makeMove[0]);
  enableMoves();
  disableMoves();


  if(makeMove[0].player1Move === false && pokemonType[0].isSelected === true) { //charmander

    rest();


    setTimeout (function(){


      if (squirtleSelected === true  &&  charmanderSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  charmanderSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  charmanderSelected === true) {

        onixMoves();


        }



    },2000); // computer attacks after 2 secs

  }else if (makeMove[0].player1Move === false && pokemonType[1].isSelected === true ) { // blastoise

    rest();


    setTimeout (function(){



      if (squirtleSelected === true  &&  blastoiseSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  blastoiseSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  blastoiseSelected === true) {

        onixMoves();


        }



    },2000); // computer attacks after 2 secs



  }else if (makeMove[0].player1Move === false && pokemonType[2].isSelected === true) { // pikachu

    rest();


    setTimeout (function(){



      if (squirtleSelected === true  &&  pikachuSelected === true) {

        squirtleMoves();

      }else if (scytherSelected === true  &&  pikachuSelected === true) {

        scytherMoves();

      }else if (onixSelected === true  &&  pikachuSelected === true) {

        onixMoves();


        }




    },2000); //computer attacks after 2 secs



  }//end of statements


}//end of defenseC







//algorithem for switching pokemon is declared below

//varible declartions
let keepDefault = preserveDefaultHP = true // default is true, but if keepChanges is true then keepDefault must be false
let keepChanges = preserveHPChanges = false; // default is false, but if keepDefault is true then keepChanges must be false
let charmanderHP11 = charmanderHealthBar.reduce(PokemonHPReduced);
let squirtleHP11 = squirtleHealthBar.reduce(PokemonHPReduced);
let pikachuHP11 = pikachuHealthBar.reduce(PokemonHPReduced);
let scytherHP11 = scytherHealthBar.reduce(PokemonHPReduced);
let blastoiseHP11 = blastoiseHealthBar.reduce(PokemonHPReduced);
let onixHP11 = onixHealthBar.reduce(PokemonHPReduced);
let fullHealthData = fullHealth.reduce(PokemonHPReduced);





function loadCharmander () {
//verification procedure

//approve selected pokemon first
charmanderSelected = true;

//conditional ternary determines if charmander was selected and sets squirtle true if it was 1 of 2
(charmanderSelected === true) ? squirtleSelected = true : squirtleSelected = false;

//conditional ternary determines if squirtle or scyther died and blocks computer pokemon that died from a previous battle
(squirtleDied === true || scytherDied === true) ? blockComputerPokemon() : battle1Player1 = false;

//this function loads charmander and squritle (default) + scyther or onix based on battle conditions
chrPokeImage();

if (makeMove[0].player1Move === true && pokemonType[0].isSelected === true && charmanderCounts >= 0) {



    console.log("charmander selected: " + charmanderSelected + "   squirtle selected: " + squirtleSelected);

    //disable non-selected pokemon
    pokemonType[2].isSelected = false; // pikachu
    pokemonType[1].isSelected = false; // blastoise
    pikachuSelected = false;
    blastoiseSelected = false;
    console.log("non-selected pokemon are pikachu: " + pikachuSelected + " and blastoise: " + blastoiseSelected);

    //disable non-selected pokemon functions
    pikachuMoves[0].pikachuFunction1of6 = false;
    pikachuMoves[0].pikachuFunction2of6 = false;
    pikachuMoves[0].pikachuFunction3of6 = false;
    pikachuMoves[0].pikachuFunction4of6 = false;
    pikachuMoves[0].pikachuFunction5of6 = false;
    pikachuMoves[0].pikachuFunction6of6 = false;

    blastoiseMoves[0].blastoiseFunction1of6 = false;
    blastoiseMoves[0].blastoiseFunction2of6 = false;
    blastoiseMoves[0].blastoiseFunction3of6 = false;
    blastoiseMoves[0].blastoiseFunction4of6 = false;
    blastoiseMoves[0].blastoiseFunction5of6 = false;
    blastoiseMoves[0].blastoiseFunction6of6 = false;

    //disable non-selected pokemon functions including computer oppenent as it removes bugs when using rest function
    squirtleMovesActivated[0].squirtleFunction1of6 = false;
    squirtleMovesActivated[0].squirtleFunction2of6 = false;
    squirtleMovesActivated[0].squirtleFunction3of6 = false;
    squirtleMovesActivated[0].squirtleFunction4of6 = false;
    squirtleMovesActivated[0].squirtleFunction5of6 = false;
    squirtleMovesActivated[0].squirtleFunction6of6 = false;


    //call pokemonLoops function to update healthbar when switching pokemon
    pokemonLoops();


    switch(pikachuHP11 === 0 && scytherHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1 ||
           keepDefault === true && charmanderCounts === 0  || keepChanges  === true  && charmanderCounts >= 1) {


case (pikachuHP11 === 0 && scytherHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1):

//clear previous comment as it becomes irrelavent
document.getElementById("statusProgress").innerHTML=("");


case (keepDefault === true && charmanderCounts === 0):

//count the number of times charmander and squirtle was selected
 charmanderCounts++;
 squirtleCounts++;

//save these changes so it can be used later
keepDefault = false;
keepChanges = true;
console.log("keepDefault: "+ keepDefault);
console.log("keepChanges: "+ keepChanges);
console.log("charmanderCounts: " + charmanderCounts);
console.log("squirtleCounts: " + squirtleCounts);

//if charmanderCounts is 0 then 100% health is given charmander and squirtle
defaultHPSetting();

break;



case (keepChanges  === true  && charmanderCounts >= 1):

//if charmanderCounts is 1 or greater then no changes will be made to pokemon progressbar because it was previously modifed
preserveHpSetting();


break;

default:

console.log("loadCharmander default switch was activated on this line: ");


                    }// end of switch statement


          }//end of if statement

}//end of loadCharmander function






function loadPikachu () {

  //verification procedure

  //approve selected pokemon first
  pikachuSelected = true;

  //conditional ternary determines if pikachu was selected and sets scyther true if it was
  (pikachuSelected === true) ? scytherSelected = true : scytherSelected = false;

  //conditional ternary determines if squirtle or scyther died and blocks computer pokemon that died from a previous battle
  (squirtleDied === true || charmanderDied === true || scytherDied === true) ? blockComputerPokemon2() : battle1Player1 = false;

  //this function loads pikachu or sycther (default) + squirtle or onix based on battle conditions
  pikPokeImage();

  if (makeMove[0].player1Move === true && pokemonType[2].isSelected === true && pikachuCounts >= 0) {

    console.log("pikachu selected: " + pikachuSelected + "   scyther selected: " + scytherSelected);

    //disable non-selected pokemon
    pokemonType[0].isSelected = false; // charmander
    pokemonType[1].isSelected = false; // blastoise
    charmanderSelected = false;
    blastoiseSelected = false;

    console.log("non-selected pokemon are charmander: " + charmanderSelected + " and blastoise: " + blastoiseSelected);

    //disable non-selected pokemon functions
    charmanderMoves[0].charmanderFunction1of6 = false;
    charmanderMoves[0].charmanderFunction2of6 = false;
    charmanderMoves[0].charmanderFunction3of6 = false;
    charmanderMoves[0].charmanderFunction4of6 = false;
    charmanderMoves[0].charmanderFunction5of6 = false;
    charmanderMoves[0].charmanderFunction6of6 = false;

    blastoiseMoves[0].blastoiseFunction1of6 = false;
    blastoiseMoves[0].blastoiseFunction2of6 = false;
    blastoiseMoves[0].blastoiseFunction3of6 = false;
    blastoiseMoves[0].blastoiseFunction4of6 = false;
    blastoiseMoves[0].blastoiseFunction5of6 = false;
    blastoiseMoves[0].blastoiseFunction6of6 = false;

    //disable non-selected pokemon functions including computer oppenent as it removes bugs when using rest function
    scytherMovesActivated[0].scytherFunction1of6 = false;
    scytherMovesActivated[0].scytherFunction2of6 = false;
    scytherMovesActivated[0].scytherFunction3of6 = false;
    scytherMovesActivated[0].scytherFunction4of6 = false;
    scytherMovesActivated[0].scytherFunction5of6 = false;
    scytherMovesActivated[0].scytherFunction6of6 = false;

    //call pokemonLoops function to update healthbar when switching pokemon
    pokemonLoops();



    switch(charmanderHP11 === 0 && squirtleHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1 ||
           keepDefault === true && pikachuCounts === 0  || keepChanges  === true  && pikachuCounts >= 1) {

      case (charmanderHP11 === 0 && squirtleHP11 >= 1 || blastoiseHP11 === 0 && onixHP11 >= 1):

      //clear previous comment as it becomes irrelavent
      document.getElementById("statusProgress").innerHTML=("");


      break;

      case (keepDefault === true && pikachuCounts === 0):

      //count the number of times pikachu and scyther was selected
       pikachuCounts++;
       scytherCounts++;

      //save these changes so it can be used later
      keepDefault = false;
      keepChanges = true;
      console.log("keepDefault: "+ keepDefault);
      console.log("keepChanges: "+ keepChanges);
      console.log("pikachuCounts: " + pikachuCounts);
      console.log("scytherCounts: " + scytherCounts);

      //if pikachuCounts is 0 then 100% health is given to pikachu and scyther
      defaultHPSetting();


      break;

      case (keepChanges  === true  && pikachuCounts >= 1):

      //if pikachuCounts is 1 or greater then no changes will be made to pokemon progressbar
      preserveHpSetting();



      break;

default:

console.log("loadPikachu default switch was activated on this line: ");


                }// end of switch statement


        }//end of if statement



}//end of loadPikachu function






function loadBlastoise () {
  //verification procedure

  //approve selected pokemon first
  blastoiseSelected = true;

  //conditional ternary determines if blastoise was selected and sets onix true if it was
  (blastoiseSelected === true) ? onixSelected = true : onixSelected = false;

  //conditional ternary determines if onix or squirtle died and blocks computer pokemon that died from a previous battle
  (onixDied === true || squirtleDied === true || charmanderDied === true && pikachuDied === true) ? blockComputerPokemon3() : battle1Player1 = false;

  //this function loads blastoise and onix (default) + squirtle or onix based on battle conditions
  blaPokeImage();

  if (makeMove[0].player1Move === true && pokemonType[1].isSelected === true && blastoiseCounts >= 0) {


  console.log("blastoise selected: " + blastoiseSelected + "   onix selected: " + onixSelected);

  //disable non-selected pokemon
  pokemonType[0].isSelected = false; // charmander
  pokemonType[2].isSelected = false; // pikachu
  charmanderSelected = false;
  pikachuSelected = false;
  console.log("non-selected pokemon are charmander: " + charmanderSelected + " and pikachu: " + pikachuSelected);

  //disable non-selected pokemon functions
  charmanderMoves[0].charmanderFunction1of6 = false;
  charmanderMoves[0].charmanderFunction2of6 = false;
  charmanderMoves[0].charmanderFunction3of6 = false;
  charmanderMoves[0].charmanderFunction4of6 = false;
  charmanderMoves[0].charmanderFunction5of6 = false;
  charmanderMoves[0].charmanderFunction6of6 = false;

  pikachuMoves[0].pikachuFunction1of6 = false;
  pikachuMoves[0].pikachuFunction2of6 = false;
  pikachuMoves[0].pikachuFunction3of6 = false;
  pikachuMoves[0].pikachuFunction4of6 = false;
  pikachuMoves[0].pikachuFunction5of6 = false;
  pikachuMoves[0].pikachuFunction6of6 = false;

  //disable non-selected pokemon functions including computer oppenent as it removes bugs when using rest function
  onixMovesActivated[0].onixFunction1of6 = false;
  onixMovesActivated[0].onixFunction2of6 = false;
  onixMovesActivated[0].onixFunction3of6 = false;
  onixMovesActivated[0].onixFunction4of6 = false;
  onixMovesActivated[0].onixFunction5of6 = false;
  onixMovesActivated[0].onixFunction6of6 = false;

  //call pokemonLoops function to update healthbar when switching pokemon
  pokemonLoops();


  switch(charmanderHP11 === 0 && squirtleHP11 >= 1 || pikachuHP11 === 0 && blastoiseHP11 >= 1 ||
         keepDefault === true && blastoiseCounts === 0  || keepChanges  === true  && blastoiseCounts >= 1) {

    case (charmanderHP11 === 0 && squirtleHP11 >= 1 || pikachuHP11 === 0 && blastoiseHP11 >= 1):

    //clear previous comment as it becomes irrelavent
    document.getElementById("statusProgress").innerHTML=("");


    break;

    case (keepDefault === true && blastoiseCounts === 0):

    //count the number of times blastoise and onix was selected
    blastoiseCounts++;
    onixCounts++;

    //save these changes so it can be used later
    keepDefault = false;
    keepChanges = true;
    console.log("keepDefault: "+ keepDefault);
    console.log("keepChanges: "+ keepChanges);
    console.log("blastoiseCounts: " + blastoiseCounts);
    console.log("onixCounts: " + onixCounts);

    //if blastoiseCounts is 0 then 100% health is given to blastoise and onix
    defaultHPSetting();


    break;

    case (keepChanges  === true  && blastoiseCounts >= 1):

    //if blastoiseCounts is 1 or greater then no changes will be made to pokemon progressbar
    preserveHpSetting();


    break;

  default:

  console.log("loadBlastoise default switch was activated on this line: ");


              }// end of switch statement


      }//end of if statement

}//end of loadBlastoise function







   

  

 




   
return (


<React.Fragment> 

<div class="container">
  <div class="row row-cols-2">
    <div class="col" id ="column1">



      <table id="tablePokemonIconIndicators2">
        <tr>
          <td><p id="squirtleIcon"><img src={SquirtleHeadIcon} /></p></td>
          <td><p id="ScytherIcon"><img src={scytherHeadIcon} /></p></td>
          <td><p id="OnixIcon"><img src={onixHeadIcon} /></p></td>
        </tr>
      </table>


      </div>
    <div class="col" id ="column2">

 

      <div class ="container">

        <table id="tablePokemonIconIndicators">
          <tr>
            <td><p id="charmanderIcon"><img src={charmanderHeadIcon} /></p></td>
            <td><p id="PikachuIcon"><img src={pikachuHeadIcon} /></p></td>
            <td><p id="BlastoiseIcon"><img src={blastoiseHeadIcon} /></p></td>
          </tr>
        </table>

      </div>




      </div>
    <div class="col" id ="column3">




        <div class="CpuStatus">
          <p><b>Computer Pokemon:</b></p>
          <p id="cpuPokemonName">{compPokemonName}</p>
          <p id="cpuHpFont"><b>HP:</b></p>
          <div class="cpuHP-progressBarBackground">
        <div class="cpuHP" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">{cpuHP}</div>
        </div>
        <p id="cpuSpeedFont"><b>Speed:</b></p>
        <div class="cpuSpeed-progressBarBackground">
        <div class="cpuSpeed" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">{cpuSpeed}</div>
        </div>
        </div>


      </div>
    <div class="col"id ="column4">



<div class="CpuPokemonContainer">
{loadSquirtleImg}
{loadScytherImg}
{loadOnixImg}
<p id="CpuPokeImage"></p>
</div>


    </div>
    <div class="col" id ="column5">



      </div>
    <div class="col" id ="column6">



<div class="AttackGraphicContainer">
<p id="player1AttackImage">
  {player1AttackImage}
  </p>
</div>


      </div>
      <div class="col" id ="column7">


      </div>
    <div class="col" id ="column8">



    </div>
    <div class="col" id ="column9">


      <div class="Player1PokemonContainer">


        <div class="statusLayoutProgress">
          <p id="statusProgress">{statusProgress}</p>
          <p id="statusProgress3">{statusProgress3}</p><a id="sendLink" href="#">{sendLink}</a>
          <p id="statusProgress2">{statusProgress2}</p>
        </div>




        <p id="Player1PokeImage">
          {loadCharmanderImg}
          {loadPikachuImg}
          {loadBlastoiseImg}
        </p>
      </div>



    

      <br></br>




      </div>
    <div class="col "id ="column10">

 


        <div class="Player1Status">
          <p><b>Player1 Pokemon:</b></p>
          <p id="p1PokemonName">{p1PokemonName}</p>
          <p id="p1HpFont"></p><b>HP:</b>
          <div class="player1HP-progressBarBackground">
        <div class="player1HP" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">{player1HP}</div>
      </div>
          <p id="p1SpeedFont"></p><b>Speed:</b>
          <div class="playerSpeed-progressBarBackground">
        <div class="playerSpeed" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">{playerSpeed}</div>
        </div>
        </div>


    </div>
  </div>
  <div class="col" id ="column11">



    <div class="col" id ="column12">

 
      <div class="AttackGraphicContainer">
      <p id="computerAttackImage">{computerAttackImage}</p>
      </div>
        </div>

      </div>

      <div class="col" id ="column13">



        <div class="col" id ="column14">


          </div>

          </div>
          </div>





                <nav class="nav" id="PokemonAttackMenuController"> 

           <div class="dropup">
         <button class="dropbtn"><img id="attack-menu-icon" src={attackMenuIcon}></img><i class="fa fa-caret-up"></i></button>
         <div class="dropup-content">

               <a href="#" id="attackA" onClick={attackA}></a>
               <a href="#" id="attackB" onClick={attackB}></a>
               <a href="#" id="attackC" onClick={attackC}></a>




         </div>
       </div>


          <div class="dropup">
         <button class="dropbtn"><img id="defense-menu-icon" src={defenseMenuIcon}></img><i class="fa fa-caret-up"></i></button>
         <div class="dropup-content">


               <a href="#" id="defenseA" onClick={defenseA}></a>
               <a href="#" id="defenseB" onClick={defenseB}></a>
               <a href="#" id="defenseC" onClick={defenseC}></a>




         </div>
       </div>


          <div class="dropup">
         <button class="dropbtn"><img id="select-menu-icon" src={selectIcon}></img><i class="fa fa-caret-up"></i></button>
         <div class="dropup-content" id="dropUpPokemonSelectionMenu">


               <a href="#" id="Charmander_sel" onClick={loadCharmander}>Charmander</a>
               <a href="#" id="Pikachu_sel" onClick={loadPikachu}>Pikachu</a>
               <a href="#" id="Blastoise_sel" onClick={loadBlastoise}>Blastoise</a>



         </div>
       </div>

            <div class="dropup">   
         <button class="dropbtn"><img id="settings-menu-icon" src={settings}></img><i class="fa fa-caret-up"></i></button>
         <div class="dropup-content" id="dropupContentSettings">


             <a href="#" id="soundON" onClick={soundSettingsOn}>Sound ON</a>
             <a href="#" id="soundOFF"onClick={soundSettingsOff}>Sound OFF</a>
             <a href="#" id="restartYES" onClick={refreshPage}>Restart Game</a>



         </div>
       </div>
       </nav>
 

          </React.Fragment>
          
          ); //end of return statement 


        }//end of PokemonGame function 

        export default PokemonGame;





