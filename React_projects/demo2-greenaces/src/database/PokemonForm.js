import React, { useState } from 'react';
import axios from 'axios';
import FormStyle from '../styles/Lucky7Form.module.css';
import { Helmet } from 'react-helmet';

function PokemonForm() {



  const [formData, setFormData] = useState({


    id: 0,
    timestamp: "",
    enjoyable: null,
    age_0_30: null,
    age_31_60: null,
    age_61_100: null,
    errors: null,
    bugImpactGameplay: null,
    recommenedGame: null,
    AndriodORBrowser: null,
    rateGame: null,
    textarea: "",
    enjoyable_Yes: null,
    enjoyable_No: null,
    enjoyable_alright: null,
    errors_Yes: null,
    errors_No: null,
    bugImpactGameplay_Yes: null,
    bugImpactGameplay_No: null,
    recommenedGame_Yes: null,
    recommenedGame_No: null,
    andriod_Yes: null,
    andriod_No: null,
    rateGame_1: null,
    rateGame_2: null,
    rateGame_3: null,
    rateGame_4: null,
    rateGame_5: null,


  });
  



  const handleInputChange = (event) => {

    const { name, value } = event.target;



    let enjoyable_Yes = formData.enjoyable_Yes;
    let enjoyable_No = formData.enjoyable_No;
    let enjoyable_alright = formData.enjoyable_alright;
  
    if (name === "enjoyable") {
      switch (value) {
        case "enjoyable_Yes":
          enjoyable_Yes = true;
          enjoyable_No = false;
          enjoyable_alright = false;
          break;
        case "enjoyable_No":
          enjoyable_Yes = false;
          enjoyable_No = true;
          enjoyable_alright = false;
          break;
        case "enjoyable_alright":
          enjoyable_Yes = false;
          enjoyable_No = false;
          enjoyable_alright = true;
          break;
        default:
          enjoyable_Yes = false;
          enjoyable_No = false;
          enjoyable_alright = false;
      }
    }



    let age_0_30 = formData.age_0_30;
    let age_31_60 = formData.age_31_60;
    let age_61_100 = formData.age_61_100;

    if (name === "age") {
      switch (value) {
        case "age_0-30":
          age_0_30 = true;
          age_31_60 = false;
          age_61_100 = false;
          break;
        case "age_31-60":
          age_0_30 = false;
          age_31_60 = true;
          age_61_100 = false;
          break;
        case "age_61-100":
          age_0_30 = false;
          age_31_60 = true;
          age_61_100 = false;
          break;
        default:
          age_0_30 = false;
          age_31_60 = false;
          age_61_100 = false;
      }
    }



    let errors_Yes = formData.errors_Yes;
    let errors_No = formData.errors_No;

    if (name === "errors") {
      switch (value) {
        case "errors_Yes":
          errors_Yes = true;
          errors_No = false;
          break;
        case "errors_No":
          errors_Yes = false;
          errors_No = true;
          break;
        default:
          errors_Yes = false;
          errors_No = false;
      }
    }


    let bugImpactGameplay_Yes = formData.bugImpactGameplay_Yes;
    let bugImpactGameplay_No = formData.bugImpactGameplay_No;

    if (name === "bugImpactGameplay") {
      switch (value) {
        case "bugImpactGameplay_Yes":
          bugImpactGameplay_Yes = true;
          bugImpactGameplay_No = false;
          break;
        case "errors_No":
          bugImpactGameplay_Yes = false;
          bugImpactGameplay_No = true;
          break;
        default:
          bugImpactGameplay_Yes = false;
          bugImpactGameplay_No = false;
      }
    }


    let recommenedGame_Yes = formData.recommenedGame_Yes;
    let recommenedGame_No = formData.recommenedGame_No;

    if (name === "recommenedGame") {
      switch (value) {
        case "bugImpactGameplay_Yes":
          recommenedGame_Yes = true;
          recommenedGame_No = false;
          break;
        case "recommenedGame_No":
          recommenedGame_Yes = false;
          recommenedGame_No = true;
          break;
        default:
          recommenedGame_Yes = false;
          recommenedGame_No = false;
      }
    }


    let andriod_Yes = formData.andriod_Yes;
    let andriod_No = formData.andriod_No;

    if (name === "AndriodORBrowser") {
      switch (value) {
        case "andriod_Yes":
          andriod_Yes = true;
          andriod_No = false;
          break;
        case "andriod_No":
          andriod_Yes = false;
          andriod_No = true;
          break;
        default:
          andriod_Yes = false;
          andriod_No = false;
      }
    }


    let rateGame_1 = formData.rateGame_1;
    let rateGame_2 = formData.rateGame_2;
    let rateGame_3 = formData.rateGame_3;
    let rateGame_4 = formData.rateGame_4;
    let rateGame_5 = formData.rateGame_5;

    if (name === "rateGame") {
      switch (value) {
        case "rateGame_1":
          rateGame_1 = true;
          rateGame_2 = false;
          rateGame_3 = false;
          rateGame_4 = false;
          rateGame_5 = false;
          break;
        case "rateGame_2":
          rateGame_1 = false;
          rateGame_2 = true;
          rateGame_3 = false;
          rateGame_4 = false;
          rateGame_5 = false;
          break;
          case "rateGame_3":
            rateGame_1 = false;
            rateGame_2 = false;
            rateGame_3 = true;
            rateGame_4 = false;
            rateGame_5 = false;
            break;
            case "rateGame_4":
              rateGame_1 = false;
              rateGame_2 = false;
              rateGame_3 = false;
              rateGame_4 = true;
              rateGame_5 = false;
              break;
              case "rateGame_5":
                rateGame_1 = false;
                rateGame_2 = false;
                rateGame_3 = false;
                rateGame_4 = false;
                rateGame_5 = true;
                break;
        default:
          rateGame_1 = false;
          rateGame_2 = false;
          rateGame_3 = false;
          rateGame_4 = false;
          rateGame_5 = false;
      }
    }


 
    setFormData({
      ...formData,
      [name]: value,
      enjoyable_Yes,
      enjoyable_No,
      enjoyable_alright,
      age_0_30,
      age_31_60, 
      age_61_100,
      errors_Yes,
      errors_No,
      bugImpactGameplay_Yes,
      bugImpactGameplay_No,
      recommenedGame_Yes,
      recommenedGame_No,
      andriod_Yes,
      andriod_No,
      rateGame_1,
      rateGame_2,
      rateGame_3,
      rateGame_4,
      rateGame_5
    });
  };
  

  function handleSubmit(event) {

    event.preventDefault();

   
    const Moredata = {...formData};
  

    axios
      .post("/php/processPokemonForm.php", Moredata)
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");

        setTimeout(function() {
          window.location.href = "https://greenaces.site/"; 
         }, 1000); 
         

      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while submitting the form.");
      });
  };
  

  return (
    <React.Fragment>

     <Helmet>     
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>GreenAces | Pokemon Feedback form </title>
     </Helmet>
    
    <form onSubmit={handleSubmit}>

    <h1>Pokemon Feedback form</h1>
    <p>Please answer questions honestly.</p>
    <p>1)&nbsp;<b>Did you find the game fun or enjoyable?</b></p>
    <input type="radio" id="enjoyable_Yes" name="enjoyable" value="enjoyable_Yes" onChange={handleInputChange} required />
    <label htmlFor="enjoyable_Yes" className={FormStyle.enjoyable_Yes_label}>Yes</label><br />
    <input type="radio" id="enjoyable_No" name="enjoyable" value="enjoyable_No" onChange={handleInputChange} required />
    <label htmlFor="enjoyable_No" className={FormStyle.enjoyable_No_label}>No</label><br />
    <input type="radio" id="enjoyable_alright" name="enjoyable" value="enjoyable_alright" onChange={handleInputChange} required />
    <label htmlFor="enjoyable_alright" className={FormStyle.enjoyable_alright_label}>It was alright</label><br />
    <br />
    <div></div>
    <br />


    <p>2)&nbsp;<b>Please select your age:</b></p>
    <input type="radio" id="age1_label" name="age" className="age" value="age_0-30" onChange={handleInputChange} required/>
    <label htmlFor="age1" className={FormStyle.age1_label}>0 - 30</label><br />
    <input type="radio" id="age2_label" name="age" className="age" value="age_31-60" onChange={handleInputChange} required/>
    <label htmlFor="age2" className={FormStyle.age2_label}>31 - 60</label><br />
    <input type="radio" id="age3_label" name="age" className="age" value="age_61-100" onChange={handleInputChange} required/>
    <label htmlFor="age3" className={FormStyle.age3_label}>61 - 100</label>
    <br />
    <div></div>
    <br />




    <p>3)&nbsp;<b>Did you encounter any errors while playing the game?</b></p>
    <input type="radio" id="errors_Yes" name="errors" value="errors_Yes" onChange={handleInputChange} required/>
    <label htmlFor="errors_Yes" className={FormStyle.errors_Yes_label}>Yes</label><br />
    <input type="radio" id="errors_No" name="errors" value="errors_No" onChange={handleInputChange} required/>
    <label htmlFor="errors_No"  className={FormStyle.errors_No_label}>No</label><br />
    <br />
    <div></div>


    <p>4)&nbsp;<b>If you encountered bugs or errors while playing, did they impact your gameplay?</b></p>
    <input type="radio" id="bugImpactGameplay_Yes" name="bugImpactGameplay" value="bugImpactGameplay_Yes" onChange={handleInputChange} required />
    <label htmlFor="bugImpactGameplay_Yes" className={FormStyle.bugImpactGameplay_Yes_label}>Yes, the bugs affected my gameplay</label><br />
    <input type="radio" id="bugImpactGameplay_No" name="bugImpactGameplay" value="bugImpactGameplay_No" onChange={handleInputChange} required />
    <label htmlFor="bugImpactGameplay_No" className={FormStyle.bugImpactGameplay_No_label}>No, I didn't find any bugs during gameplay that ruined my experience</label>
    <br />
    <div></div>
    <br />



    <p className="question"><b>5)&nbsp;Would you recommend this game to a friend?</b></p>
    <input type="radio" id="recommenedGame_Yes" name="recommenedGame" className="recommenedGame_Yes" value="recommenedGame_Yes" onChange={handleInputChange} required/>
    <label htmlFor="recommenedGame_Yes" className={FormStyle.recommenedGame_Yes_label}>Yes</label><br />
    <input type="radio" id="recommenedGame_No" name="recommenedGame" className="recommenedGame_No" value="recommenedGame_No" onChange={handleInputChange} required/>
    <label htmlFor="recommenedGame_No" className={FormStyle.recommenedGame_No_label}>Nope</label>
    <br />
    <div></div>
    <br />


    <p className="question"><b>6)&nbsp;Would you play this game if it was available as an Android app or would you rather play with a browser?</b></p>
    <input type="radio" id="andriod_Yes" name="AndriodORBrowser" className="andriod_Yes" value="andriod_Yes" onChange={handleInputChange} required/>
    <label htmlFor="andriod_Yes"  className={FormStyle.andriod_Yes_label}>Yes, I would like to play this game on Android</label><br />
    <input type="radio" id="andriod_No" name="AndriodORBrowser" className="andriod_No" value="andriod_No" onChange={handleInputChange} required/>
    <label htmlFor="andriod_No"   className={FormStyle.andriod_No_label}>No, I would rather play using a browser</label>
    <br />
    <div></div>
    <br />



    <p className="question"><b>7)&nbsp;From 1 to 5, with 1 being poor, 3 being average, and 5 being the best, how would you rate this game?</b></p>
    <input type="radio" id="rateGame_1" name="rateGame" value="rateGame_1" onChange={handleInputChange} required/>
    <label htmlFor="rateGame_1" className={FormStyle.rateGame_1_label}>1</label><br /><br />
    <input type="radio" id="rateGame_2" name="rateGame" value="rateGame_2" onChange={handleInputChange} required/>
    <label htmlFor="rateGame_2" className={FormStyle.rateGame_2_label}>2</label><br /><br />
    <input type="radio" id="rateGame_3" name="rateGame" value="rateGame_3" onChange={handleInputChange} required/>
    <label htmlFor="rateGame_3" className={FormStyle.rateGame_3_label}>3</label><br /><br />
    <input type="radio" id="rateGame_4" name="rateGame" value="rateGame_4" onChange={handleInputChange} required/>
    <label htmlFor="rateGame_4" className={FormStyle.rateGame_4_label}>4</label><br /><br />
    <input type="radio" id="rateGame_5" name="rateGame" value="rateGame_5" onChange={handleInputChange} required/>
    <label htmlFor="rateGame_5" className={FormStyle.rateGame_5_label}>5</label><br /><br />
    <div></div>
    <br />



    <p className="question"><b>8)&nbsp;Please enter any suggestions or complaints in the text area below:</b></p>
    <textarea id="textarea" name="textarea" rows="4" cols="50" value={formData.textarea} onChange={handleInputChange} required maxLength="200"></textarea>
    <br />
    <br />


    <input type="submit" value="Submit" className="submit_button"/>







    </form>

    <br />
    <br />
    </React.Fragment>
  );
}

export default PokemonForm;
