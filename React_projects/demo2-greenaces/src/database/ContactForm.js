import React, { useState } from "react";
import axios from "axios";
import ContactFormSetting from '../styles/ContactForm.module.css';
import ReCAPTCHA from 'react-google-recaptcha';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
   
  });

  //recaptcha variables 

  const [captcha, setCaptcha] = useState(null);
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
      console.log("Captcha value:", value);
      setVerifed(true);
    }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/php/processContactForm.php", formData)
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
    <div className={ContactFormSetting['spacer']}>

    <form onSubmit={handleSubmit }>
      <div className={ContactFormSetting['form-container']}>
        <label>
          <b>Name:</b>
          <input className={ContactFormSetting['form-container-label']}
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            maxLength={15}
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <b>Email:</b>
          <input className={ContactFormSetting['form-container-label']}
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            maxLength={64}
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <b>Message:</b>
          <textarea className={ContactFormSetting['form-container-textarea']}
            placeholder="Enter your message"
            name="message"
            required
            maxLength={200}
            value={formData.message}
            onChange={handleInputChange}
          />
        </label>
        <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={(value) => setCaptcha(value)} />
        <button type="submit" disabled={!verfied} className={ContactFormSetting['form-container-button'] } >Submit</button>
      </div>
    </form>

    </div>
    </React.Fragment>

   
  );
};

export default ContactForm;
