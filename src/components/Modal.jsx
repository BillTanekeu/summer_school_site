import React, { useState } from "react";
import "../styles/components/Modal.css";

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    theme: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h1 className="r-title">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Institution</label>
            <select
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your institution
              </option>
              <option value="University A">University A</option>
              <option value="University B">University B</option>
              <option value="University C">University C</option>
            </select>
          </div>
          <div className="form-group">
            <label>Theme</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a theme
              </option>
              <option value="Theme 1">Theme 1</option>
              <option value="Theme 2">Theme 2</option>
              <option value="Theme 3">Theme 3</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
