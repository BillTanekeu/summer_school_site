import React from 'react';
import { Download } from 'lucide-react';
import '../styles/components/SpeakersSection.css';
import prtchana from '../assets/Prof/Prof_Tchana.jpeg';
import danielHagimont from '../assets/Prof/daniel_hagimont.jpeg';
import david from '../assets/Prof/david.jpeg';
import anne from '../assets/Prof/Anne-Marie-Chana.png';
import banabe from '../assets/Prof/banabe.jpg';
import regis from '../assets/Prof/regis.jpeg';
import wabo from '../assets/Prof/wabo.jpeg';
import bill from '../assets/Prof/bill.png';
import valere from '../assets/Prof/valere.png';
import sapnken from '../assets/Prof/sapnken.jpeg';
import mvogo from '../assets/Prof/mvogo_jean_baptiste.jpeg';
import pamoe from '../assets/Prof/pamoe.jpeg';
import yvan from '../assets/Prof/yvan.png';
import arsene from '../assets/Prof/arsene.jpeg';
import zogo from '../assets/Prof/zogo.jpeg';
import fideline from '../assets/Prof/fideline.jpeg'
import migri from '../assets/Prof/migri.jpeg';
import bande from '../assets/Prof/bande.jpg';
import djeuga from '../assets/Prof/djeuga.jpg';
import mballa from '../assets/Prof/mballa.png';

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
      title: "Professeur",
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
      name: "Dr. CHANA  Anne-Marie",
      title: "Enseignante",
      institution: "ENSPY",
      avatar: anne,
      hasSlides: false
    },
    {
      id: 5,
      name: "Pr. BATCHAKUI Bernabé",
      title: "Professeur",
      institution: "ENSPY",
      avatar: banabe,
      hasSlides: false
    },
    {
      id: 6,
      name: "Dr. MVOGO AHANDA Joseph J.B.",
      title: "C-SRC",
      institution: "ESTLC",
      avatar: mvogo,
      hasSlides: false
    },
    {
      id: 7,
      name: "Dr. MBALLA ELOUNDOU Aimé Christel",
      title: "CD-EG",
      institution: "ESTLC",
      avatar: mballa,
      hasSlides: false
    },
    {
      id: 8,
      name: "M. PAMOÉ Estebanc",
      title: "IT",
      institution: "GIZ",
      avatar: pamoe,
      hasSlides: false
    },
    {
      id: 9,
      name: "Dr. MIGUIRI Blaise",
      title: "Enseignant",
      institution: "ESTLC",
      avatar: migri,
      hasSlides: false
    },

    {
      id: 10,
      name: "M. BAYIHA Samuel",
      title: "IT",
      institution: "Ministère des Marchés Publics",
      avatar: null,
      hasSlides: false
    },
    {
      id: 11,
      name: "M. WABO Ghislain",
      title: "Doctorant",
      institution: "UY1",
      avatar: wabo,
      hasSlides: false
    },
    {
      id: 12,
      name: "M. MOGO Régis",
      title: "Doctorant",
      institution: "UY1",
      avatar: regis,
      hasSlides: false
    },
    {
      id: 12,
      name: "Mlle BANDE Manuela",
      title: "Master 2",
      institution: "UY1",
      avatar: bande,
      hasSlides: false
    },
    {
      id: 13,
      name: "M. TANEKEU Bill Jordan",
      title: "Master 2",
      institution: "UY1",
      avatar: bill,
      hasSlides: false
    },
    {
      id: 14,
      name: "M. KAPTCHOUANG Yvan",
      title: "Master 2",
      institution: "UY1",
      avatar: yvan,
      hasSlides: false
    },
    {
      id: 15,
      name: "M. ARSENE TAYO Abichaï",
      title: "Master 2",
      institution: "ENSPY",
      avatar: arsene,
      hasSlides: false
    },
    
    {
      id: 16,
      name: "M. NDEUGA Mérimé",
      title: "Master 2",
      institution: "UD",
      avatar: djeuga,
      hasSlides: false
    },

    {
      id: 17,
      name: "M. DAHA Marc",
      title: "Etudiant",
      institution: "ESTLC",
      avatar: null,
      hasSlides: false
    },
    {
      id: 18,
      name: "TONDJI  Andrea",
      title: "Etudiant",
      institution: "ESTLC",
      avatar: null,
      hasSlides: false
    },

    {
      id: 19,
      name: "TAMWO FEUWO Franck",
      title: "Master 2",
      institution: "UY1",
      avatar: valere,
      hasSlides: false
    },
    {
      id: 20,
      name: "M. ETOA NZOM Simon",
      title: "Etudiant",
      institution: "UY1",
      avatar: null,
      hasSlides: false
    },
    {
      id: 21,
      name: "M. ZOGO ABOUMA Achaire",
      title: "Etudiant",
      institution: "UY1",
      avatar: zogo,
      hasSlides: false
    },
    
    {
      id: 22,
      name: "NGOUFACK Fideline",
      title: "Master 2",
      institution: "UY1",
      avatar: fideline,
      hasSlides: false
    },
    
    {
      id: 24,
      name: "LADO Saha",
      title: "Etudiant",
      institution: "ENSPY",
      avatar: null,
      hasSlides: false
    },
        
    {
      id: 25,
      name: "M. NJANKO Yvan",
      title: "Etudiant",
      institution: "UY1",
      avatar: null,
      hasSlides: false
    },
    {
      id: 26,
      name: "Dr. NGUEMA Nave",
      title: "Pharmacien",
      institution: "Docteur en Pharmacie",
      avatar: null,
      hasSlides: false
    },
    {
      id: 26,
      name: "Mme. ESSAME Sophie",
      title: "Doctorante",
      institution: "Université de Yaoundé 2, Soa",
      avatar: null,
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
