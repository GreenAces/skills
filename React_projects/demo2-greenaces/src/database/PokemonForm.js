import React, { useState } from 'react';
import axios from 'axios';
import  '../styles/Pokemon7Form.module.css';
import { Helmet } from 'react-helmet';

function PokemonForm() {


 const [formData, setFormData] = useState({

    age: null,
    errors: null,
    bugImpactGameplay: null,
    recommenedGame: null,
    AndriodORBrowser: null,
    rateGame: null,
    textarea: ""

      });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();


    axios
    .post("/php/pokemonForm.php", formData)
    .then((response) => {
      console.log(response.data);
      alert("Form submitted successfully!");
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
      <p>Please answer questions honestly. </p>

      <p>1)&nbsp;<b>Did you find the game fun or enjoyable?</b></p>
        <input type="radio" id="enjoyable_Yes" name="enjoyable"  value="enjoyable_Yes" onChange={handleInputChange}/>
        <label htmlFor="enjoyable_Yes">Yes</label><br />
        <input type="radio" id="enjoyable_No" name="enjoyable" value="enjoyable_No" onChange={handleInputChange}/>
        <label htmlFor="enjoyable_No">No</label><br />
        <input type="radio" id="enjoyable_alright" name="enjoyable" value="enjoyable_alright" onChange={handleInputChange}/>
        <label htmlFor="enjoyable_alright">It's alright</label>
        <br />
        <div></div>
        <br />

        <p>2)&nbsp;<b>Please select your age:</b></p>
        <input type="radio" id="age1" name="age" value="30" onChange={handleInputChange}/>
        <label htmlFor="age1">0 - 30</label><br />
        <input type="radio" id="age2" name="age" value="60" onChange={handleInputChange}/>
        <label htmlFor="age2">31 - 60</label><br />
        <input type="radio" id="age3" name="age" value="100" onChange={handleInputChange}/>
        <label htmlFor="age3">61 - 100</label>
        <br />
        <div></div>
        <br />



        <p>3)&nbsp;<b>Did you experience any bugs or errors during gameplay?</b></p>
        <input type="radio" id="errors_Yes" name="errors" value="errors_Yes" onChange={handleInputChange}/>
        <label htmlFor="errors_Yes">Yes</label><br />
        <input type="radio" id="errors_No" name="errors" value="errors_No"  onChange={handleInputChange}/>
        <label htmlFor="errors_No">No</label>
        <br />
        <div></div>
        <br />

        <p>4)&nbsp;<b>If you answered "Yes" to the previous question, did the errors or bugs impact your gameplay?</b></p>
        <input type="radio" id="bugImpactGameplay_Yes" name="bugImpactGameplay" value="Yes" onChange={handleInputChange}/>
        <label htmlFor="bugImpactGameplay_Yes">Yes, the bugs affected my gameplay</label><br />
        <input type="radio" id="bugImpactGameplay_No" name="bugImpactGameplay" value="No" onChange={handleInputChange}/>
        <label htmlFor="bugImpactGameplay_No">No, I didn't find any bugs during gameplay that ruined my experience</label>
        <br />
        <div></div>
        <br />

        <p>5)&nbsp;<b>Would you recommend this game to a friend?</b></p>
        <input type="radio" id="recommenedGame_Yes" name="recommenedGame" value="Yes" onChange={handleInputChange}/>
        <label htmlFor="recommenedGame_Yes">Yes</label><br />
        <input type="radio" id="recommenedGame_No" name="recommenedGame" value="No" onChange={handleInputChange}/>
        <label htmlFor="recommenedGame_No">Nope</label>
        <br />
        <div></div>
        <br />


        <p>6)&nbsp;<b>Would you play this game if was available as an Andriod app or would you rather play with a browser?</b></p>
        <input type="radio" id="andriod_Yes" name="AndriodORBrowser" value="andriod_Yes"  onChange={handleInputChange}/>
        <label htmlFor="andriod_Yes">Yes. I would like to play this game on Andriod</label><br />
        <input type="radio" id="andriod_No" name="AndriodORBrowser" value="andriod_No" onChange={handleInputChange}/>
        <label htmlFor="andriod_No">No. I would rather play using a browser</label>
        <br />
        <div></div>
        <br />

        <p>7)&nbsp;<b>From 1 to 5, with 1 being poor, 3 being average, and 5 being the best, how would you rate this game?</b></p>
        <input type="radio" id="rateGame_1" name="rateGame" value="rateGame_1" onChange={handleInputChange}/>
        <label htmlFor="rateGame_1">1</label><br /><br />
        <input type="radio" id="rateGame_2" name="rateGame" value="rateGame_2" onChange={handleInputChange}/>
        <label htmlFor="rateGame_2">2</label><br /><br />
        <input type="radio" id="rateGame_3" name="rateGame" value="rateGame_3" onChange={handleInputChange}/>
        <label htmlFor="rateGame_3">3</label><br /><br />
        <input type="radio" id="rateGame_4" name="rateGame" value="rateGame_4" onChange={handleInputChange}/>
        <label htmlFor="rateGame_4">4</label><br /><br />
        <input type="radio" id="rateGame_5" name="rateGame" value="rateGame_5" onChange={handleInputChange}/>
        <label htmlFor="rateGame_5">5</label><br /><br />
        <div></div>
        <br />


        <p>8)&nbsp;<b>Please enter any suggestions or complaints in the text area below:</b></p>
        <textarea id="textarea" name="textarea" rows="1" cols="1" value={formData.textarea} onChange={handleInputChange}></textarea>
        <label htmlFor="textarea"></label>
        <br />
        <br />

      <input type="submit" value="Submit"/>





  </form>
  </React.Fragment>
  );
}

export default PokemonForm;
