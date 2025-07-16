import React from 'react';
import '../styles/components/Judge.css';
 
const Judge = ({ image, name, role, organization }) => {
  return (
    <div className="judge-card">
      <img src={image} alt={name} className="judge-image" />
      <div className="judge-info">
        <h4 className="judge-name">{name}</h4>
        <p className="judge-role">{role}</p>
        <p className="judge-organization">{organization}</p>
      </div>
    </div>
  );
};

export default Judge;
