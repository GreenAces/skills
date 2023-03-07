import React, { useState } from "react";
import ContactFormSetting from '../styles/ContactForm.module.css';




function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://greenaces.site/php/process-form.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );
      const data = await response.json();
      setSuccess(data.success);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  return (
    
    <React.Fragment>
      <div className={ContactFormSetting['spacer']}>
    <form onSubmit={handleSubmit} className={ContactFormSetting['form-container']}>
      <label className={ContactFormSetting['form-container-label']}>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          maxLength={15}
          required
        />
      </label>
      <br />
      <label className={ContactFormSetting['form-container-label']}>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          maxLength={64}
          required
        />
      </label>
      <br />
      <label className={ContactFormSetting['form-container-label']}>
        Message:
        <textarea className={ContactFormSetting['form-container-textarea']}
          name="message"
          value={message}
          onChange={handleChange}
          maxLength={200}
          required
        ></textarea>
      </label>
      <br />
      <button type="submit" className={ContactFormSetting['form-container-button']} >Submit</button>
      {success === true && (
        <p style={{ color: "green" }}>Your message was sent successfully!</p>
      )}
      {success === false && (
        <p style={{ color: "red" }}>Sorry, something went wrong.</p>
      )}


          </form>
    </div>
    </React.Fragment>
   
  );
}

export default ContactForm;
