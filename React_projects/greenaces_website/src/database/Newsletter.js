import React, { useState } from "react";
import axios from "axios";
import NewsletterSetting from "../styles/Newsletter.module.css";
import { Helmet } from 'react-helmet';

const NewsletterForm = () => {

  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  
  const handleSubmit = async (e) => { // added async keyword here
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email); // updated variable name

    try {
      const res = await axios.post("/php/processNewsletter.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      setResponseMessage(res.data.message);
      setEmail(""); // clear email input field
      
      // Redirect to main page after 1 second
      setTimeout(() => {
        window.location.href = "https://greenaces.site/";
      }, 1000);

    } catch (err) {
      setResponseMessage(err.response.data.message);
    }
  };

  const handleEmailChange = (e) => {
    if (e.target.value.length <= 64) {
      setEmail(e.target.value);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>GreenAces Newsletter Signup</title>
      </Helmet>

      <h2 className={NewsletterSetting["GreenAces-Newsletter-Headline"]}>GreenAces Newsletter</h2>

      <div className={NewsletterSetting["spacer"]}></div>
      <form onSubmit={handleSubmit}>
      <div className={NewsletterSetting["form-container"]}>
        <label htmlFor="email">Email:</label>
        <input
          className={NewsletterSetting["form-container-label"]}
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          maxLength={64}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" className={NewsletterSetting["form-container-button"]}>
          Subscribe
        </button>
        </div>
      </form>
      {responseMessage && (
        <p className={NewsletterSetting["responseColorMessage"]}>{responseMessage}</p>
      )}
    </React.Fragment>
  );
};

export default NewsletterForm;
