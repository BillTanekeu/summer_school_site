import React from 'react';
import Judge from './Judge';
import '../styles/components/Theme.css';

const Theme = ({ title, image, problemStatement, overview, techStack, tasks, resources, judges }) => {
  return (
    <div className="theme-card">
      <div className="theme-header">
        <img src={image} alt={title} className="theme-image" />
        <div className="theme-title-container">
          <h3 className="theme-title">{title}</h3>
          <p className="theme-problem-statement">{problemStatement}</p>
        </div>
      </div>
      <div className="theme-content">
        <h4 className="section-title">Description</h4>
        <p>{overview}</p>
{/* 
        <h4 className="section-title">Tech stack</h4>
        <p>{techStack}</p> */}

        <h4 className="section-title">Tâches</h4>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
{/* 
        <h4 className="section-title">Resources</h4>
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
*/}
        <h4 className="section-title">Responsables</h4>
        <div className="judges-container">
          {judges.map((judge, index) => (
            <Judge
              key={index}
              image={judge.image}
              name={judge.name}
              role={judge.role}
              organization={judge.organization}
            />
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Theme;
