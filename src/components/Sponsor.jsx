import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Sponsor.css";
const Sponsor = ({ name, image, link }) => {
  return (
    <div className="sponsor">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className="sponsor-logo" />
      </a>
      <p className="sponsor-name">{name}</p>
    </div>
  );
};

Sponsor.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Sponsor;