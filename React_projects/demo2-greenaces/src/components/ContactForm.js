import React, { useState } from "react";
import ContactFormSetting from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState({ success: false });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message,
    };

    const response = await fetch("php/process-form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    setResponse(responseData);

    if (response.success) {
      setTimeout(function () {
        window.location.href = "https://greenaces.site/";
      }, 5000);
    } else {
      alert("There was an error sending your message.");
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>

        <label>
          <b>Message:</b>
          <textarea className={ContactFormSetting['form-container-textarea']}
            placeholder="Enter your message"
            name="message"
            required
            maxLength={200}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={ContactFormSetting['form-container-button']} >Submit</button>
      </div>
    </form>

    </div>
    </React.Fragment>
  );
};

export default ContactForm;
