import React from 'react';
import '../styles/components/ContentContainer.css';

const ContentContainer = ({ title, children }) => {
  return (
    <div className="content-container">
      <h2 className="content-title">{title}</h2>
      <div className="content-body">{children}</div>
    </div>
  );
};

export default ContentContainer;
