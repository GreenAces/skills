import React, { useState } from 'react';
import axios from 'axios';
import UnsubscribeSettings from "../styles/Unsubscribe.module.css";

const Unsubscribe = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make the HTTP request to processUnsubscribe.php
    try {
      const response = await axios.get(`/php/processUnsubscribe.php?email=${email}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className={UnsubscribeSettings[".form-container"]}>
      <h2 className={UnsubscribeSettings["h2-title"]}>Unsubscribe</h2>
      <p className={UnsubscribeSettings["paragraph-message"]}>Enter your email address to unsubscribe from our newsletter:</p>
      <div className={UnsubscribeSettings["spacer"]}></div>
      <div className={UnsubscribeSettings["form-container"]}>
        <form onSubmit={handleSubmit}>
          <input
            className={UnsubscribeSettings["form-container-label"]}
            type="email"
            placeholder="Enter your email address"
            value={email}
            maxLength={64}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className={UnsubscribeSettings["form-container-button"]}
            type="submit"
          >
            Unsubscribe
          </button>
        </form>
      </div>
      {message && <p className={UnsubscribeSettings["responseColorMessage"]}>{message}</p>}
    </div>
  );
};

export default Unsubscribe;
