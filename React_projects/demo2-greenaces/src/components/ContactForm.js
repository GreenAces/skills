import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send form data to server
    fetch("process-form.php", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

 
  return (
    <form onSubmit={handleSubmit} style={{backgroundColor: "#708090", padding: "10px"}}>
      <label style={{display: "block", margin: "10px 0"}}>
        <b>Name:</b>
        <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} maxLength={15} style={{backgroundColor: "#50e177", color: "black"}} />
        <br />
        <span style={{float: "right", color: "grey"}}>{name.length}/15 characters</span>
      </label>
      <label style={{display: "block", margin: "10px 0"}}>
        <b>Email:</b>
        <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={64} style={{backgroundColor: "#50e177", color: "black"}} />
        <br />
        <span style={{float: "right", color: "grey"}}>{email.length}/64 characters</span>
      </label>
      <label style={{display: "block", margin: "10px 0"}}>
        <b>Message:</b>
        <br />
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          maxLength={200} 
          style={{width: "100%", height: "100px", resize: "none", backgroundColor: "#50e177", color: "black"}}
        />
        <br />
        <span style={{float: "right", color: "grey"}}>{message.length}/200 characters</span>
      </label>
      <button 
        type="submit" 
        style={{backgroundColor: "#50e177", color: "black", padding: "10px", margin: "0 auto", display: "block"}}
      >
        Submit
      </button>
    </form>
  );
  
  

  
  
}

export default ContactForm;
