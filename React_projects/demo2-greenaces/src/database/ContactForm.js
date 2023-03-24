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
      const res = await axios.post("/php/processContactForm.php", {
        name: formState.name,
        email: formState.email,
        message: formState.message,
        token: recaptchaToken,
      });

      setResponseMessage(res.data.message);
      setFormState({ name: "", email: "", message: "" });
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
      <div className={ContactFormSetting["spacer"]}>
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

            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onRecaptchaChange} />


            <button
              type="submit"
              className={ContactFormSetting["form-container-button"]}
            >
              Submit
            </button>
          </div>
        </form>
        {responseMessage && <p className={ContactFormSetting["responseColorMessage"]}>{responseMessage}</p>}
      </div>
     </React.Fragment>
  );
};

export default ContactForm;
