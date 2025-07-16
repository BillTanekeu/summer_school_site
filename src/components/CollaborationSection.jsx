import React from 'react';
import '../styles/components/CollaborationSection.css';
import Judge from './Judge';
import drmessi from '../assets/Prof/Doc_Messi.jpeg';
import prtchana from '../assets/Prof/Prof_Tchana.jpeg';
import danielHagimont from '../assets/Prof/daniel_hagimont.jpeg';
import david from '../assets/Prof/david.jpeg';
import directeurEstlc from '../assets/Prof/directeur_estlc.jpeg';
import mballa from '../assets/Prof/mballa_eloundou.png';
import mvogo from '../assets/Prof/mvogo_jean_baptiste.jpeg';
import recteurUeb from '../assets/Prof/recteur_ueb.jpeg';
import mouzong from '../assets/Prof/mouzong.jpeg';

let supervisor = [
  {
    image : recteurUeb,
    name:"Pr. ETOA ETOA Jean Bosco",
    role : "Recteur",
    organization : "Université d’Ebolowa"

  },

  {
    image : directeurEstlc,
    name:"Pr. TAMBA Jean Gaston",
    role : "Directeur ",
    organization : "l’ESTLC"

  },

];


let coordination = [
  {
    image : directeurEstlc,
    name:"Pr. TAMBA Jean Gaston",
    role : "Directeur ",
    organization : "l’ESTLC"
  },
  {
    image : prtchana,
    name:"Pr. Alain TCHANA",
    role : "Professeur",
    organization : "Grenoble INP-UGA ",
  },
  {
    image : david,
    name:"Pr.David BROMBERG",
    role : "Professeur",
    organization : "Université de Rennes"
  },
  {
    image : danielHagimont,
    name:"Pr. Daniel HAGIMONT",
    role : "Professeur",
    organization : "INP Toulouse"
  },
];


let committed = [
  {
    image : mouzong,
    name:"Pr. MOUZONG PEMI MARCELLIN",
    role : "C-CREP",
    organization : "ESTLC"
  },

  {
    image : mvogo,
    name:"Dr. Mvogo Ahanda Joseph J.B",
    role : "C-SRC",
    organization : "ESTLC"
  },
  {
    image : drmessi,
    name:"Dr. Messi Nguele Thomas",
    role : "CD-GI",
    organization : "ESTLC"
  },
  {
    image : mballa,
    name:"Dr. Mballa Eloundou Aimé Christel",
    role : "CD-EG,",
    organization : "ESTLC"
  },
  {
    image : "",
    name:"Dr SAPNKEN FLAVIAN EMMANUEL",
    role : "CD-GL",
    organization : "ESTLC"
  },
  {
    image : "",
    name:"Dr DIBOMA BENJAMIN SALOMON",
    role : "CD-GT",
    organization : "ESTLC"
  },
  {
    image : "",
    name:"M. AZONG TCHITILE EMMANUEL WILFRIED",
    role : "C-SPE",
    organization : "ESTLC"
  },
  {
    image : "",
    name:"M. EWODO AMOUGOU MARCEL RODRIGUE",
    role : "Enseignant",
    organization : "ESTLC"
  },
  {
    image : "",
    name:"Dr GOPDJIM NOUMO PROSPER",
    role : "Enseignant",
    organization : "ESTLC"
  },
  {
    image : "",
    name:"Dr MIGUIRI BLAISE",
    role : "Enseignant",
    organization : "ESTLC"
  },

  {
    image : "",
    name:"Dr YOUMBI FOUEGO Dorota",
    role : "Enseignant",
    organization : "ESTLC"
  },
];
const CollaborationSection = () => {
  return (
    <div className="collaboration-container">
      <div className="collaboration-content">
        <div className="text-section">
          <h2 className="section-title">
            Objectif Collaboration 
            <div className="title-underline"></div>
          </h2>
          
          <div className="content-text">


            <p>
            La collaboration entre le Cameroun et les partenaires de Grenoble 
            vise à établir un partenariat scientifique et technologique de long terme, 
            centré sur l’Internet des objets (IoT), les systèmes distribués,
             l’intelligence artificielle (IA) et la sécurité.

            </p>
            
            <p>
            Les principaux objectifs de cette initiative incluent 
            le renforcement des capacités de recherche à travers
             des projets conjoints. Elle cherche également à favoriser le transfert
              de connaissances et le développement des compétences en encadrant
               des étudiants (master et doctorat), en organisant des ateliers et séminaires,
                et en partageant des ressources pédagogiques.

            </p>
            
            <p>
            De plus, la collaboration s’engage à développer des solutions adaptées
             aux contextes locaux, afin de relever des défis concrets dans des domaines
              tels que la santé, l’agriculture intelligente et l’optimisation énergétique.
               Un autre aspect important concerne l’amélioration des infrastructures logicielles,
                afin de garantir un accès élargi aux outils de calcul haute performance pour
                 les chercheurs du Sud global.

            </p>
          </div>
        </div>
        
        <div className="image-section">
          <div className="image-container">
            <div className="workshop-header">
              <div className="workshop-title">Workshops | Ateliers | Hackathon</div>
              <div className="workshop-subtitle">28 - 30 July 2025| Campus de l’ESTLC, Abam – Sud Cameroun</div>
            </div>
            
            <div className="sponsors-section">
              <div className="sponsors-title">Supervision</div>
              <div className="judges-container">
                {supervisor.map((judge, index) => (
                  <Judge
                    key={index}
                    image={judge.image}
                    name={judge.name}
                    role={judge.role}
                    organization={judge.organization}
                  />
                ))}
              </div>

              <div className="sponsors-title">Coordination</div>

              <div className="cood-container">
                {coordination.map((judge, index) => (
                  <Judge
                    key={index}
                    image={judge.image}
                    name={judge.name}
                    role={judge.role}
                    organization={judge.organization}
                  />
                ))}
              </div>


              <div className="sponsors-title">Comité</div>

              <div className="comm-container">
                {committed.map((judge, index) => (
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
        </div>
      </div>
      
      
    </div>
  );
};

export default CollaborationSection;