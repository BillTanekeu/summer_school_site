import React from 'react';
import { Download } from 'lucide-react';
import '../styles/components/SpeakersSection.css';
import prtchana from '../assets/Prof/Prof_Tchana.jpeg';
import danielHagimont from '../assets/Prof/daniel_hagimont.jpeg';
import david from '../assets/Prof/david.jpeg';
import anne from '../assets/Prof/Anne-Marie-Chana.png';
import banabe from '../assets/Prof/banabe.jpg';
const SpeakersSection = () => {
  const speakers = [
    {
      id: 1,
      name: "Pr. Alain TCHANA",
      title: "Professeur",
      institution: "Grenoble INP-UGA",
      avatar: prtchana,
      hasSlides: false
    },
    {
      id: 2,
      name: "Pr. David BROMBERG",
      title: "Professor",
      institution: "Université de Rennes",
      avatar: david,
      hasSlides: false
    },
    {
      id: 3,
      name: "Pr. Daniel HAGIMONT",
      title: "Professeur",
      institution: "INP Toulouse",
      avatar: danielHagimont,
      hasSlides: false
    },
    {
      id: 4,
      name: "Dr. Anne-Marie Chana",
      title: "Enseignant",
      institution: "ENSPY",
      avatar: anne,
      hasSlides: false
    },
    {
      id: 5,
      name: "Bernabé Batchakui",
      title: "Professeur",
      institution: "ENSPY",
      avatar: banabe,
      hasSlides: false
    },
    
  ];

  const SpeakerCard = ({ speaker }) => (
    <div className="speaker-card">
      <div className="speaker-avatar">
        <img 
          src={speaker.avatar} 
          alt={speaker.name}
          className="avatar-image"
        />
      </div>
      
      <div className="speaker-info">
        <h3 className="speaker-name">{speaker.name}</h3>
        <p className="speaker-title">{speaker.title}</p>
        <p className="speaker-institution">{speaker.institution}</p>
        
        {speaker.hasSlides && (
          <button className="slides-button">
            <span>Slides</span>
            <Download size={16} />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="speakers-section">
      <div className="speakers-container">
        <div className="speakers-grid">
          {speakers.map(speaker => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
