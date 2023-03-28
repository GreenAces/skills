import React, { useState } from "react";
import axios from "axios";
import ContactFormSetting from "../styles/ContactForm.module.css";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";







const ContactForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("token", recaptchaToken);

      const res = await axios.post("/php/processContactForm.php", formData, {
        headers: {
      "Content-Type": "multipart/form-data",
  },
});

      setResponseMessage(res.data.message);
      setFormState({ name: "", email: "", message: "" });

    
      // Reload the page after 1 second
      setTimeout(() => {
        window.location.href = "https://greenaces.site/";
      }, 1000);
      
      

    } catch (err) {
      setResponseMessage(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title> GreenAces | Contact Us</title>
      </Helmet>
      <div className={ContactFormSetting["spacer"]}></div>
        <form onSubmit={handleSubmit}>
          <div className={ContactFormSetting["form-container"]}>
            <label>
              <b>Name:</b>
              <input
                className={ContactFormSetting["form-container-label"]}
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                maxLength={15}
                value={formState.name}
                onChange={handleChange}
              />
            </label>


            <label>
              <b>Email:</b>
              <input
                className={ContactFormSetting["form-container-label"]}
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                maxLength={64}
                value={formState.email}
                onChange={handleChange}
              />
            </label>

            <label>
              <b>Message:</b>
              <textarea
                className={ContactFormSetting["form-container-textarea"]}
                placeholder="Enter your message"
                name="message"
                required
                maxLength={200}
                value={formState.message}
                onChange={handleChange}
              />
            </label>

            <ReCAPTCHA sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`} onChange={onRecaptchaChange} />


            <button
              type="submit"
              className={ContactFormSetting["form-container-button"]}
            >
              Submit
            </button>
          </div>
        </form>
        {responseMessage && <p className={ContactFormSetting["responseColorMessage"]}>{responseMessage}</p>}
     </React.Fragment>
  );
};

export default ContactForm;

