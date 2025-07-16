import React from 'react';
import '../styles/components/RegisterButton.css';

const RegisterButton = ({ onClick }) => {
  return (
    <div className="register-button-container">
      <button className="register-button" onClick={onClick}>
        Register Now
      </button>
    </div>
  );
};

export default RegisterButton;
