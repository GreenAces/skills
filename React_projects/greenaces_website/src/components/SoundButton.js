import React from "react";

const SoundButton = ({ isSoundOn, toggleSound, id }) => {

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "black !important",
    border: "none",
  };
  

  return (
    <button onClick={toggleSound} id={id} style={buttonStyle}>
      {isSoundOn ? "Sound On" : "Sound Off"}
      <span role="img" aria-label="speaker">
        {isSoundOn ? " 🔊" : " 🔇"}
      </span>
    </button>
  );
};

export default SoundButton;
