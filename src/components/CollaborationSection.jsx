import React from 'react';
import '../styles/components/CollaborationSection.css';
import Judge from './Judge';
import drmessi from '../assets/Prof/Doc_Messi.jpeg';
import prtchana from '../assets/Prof/Prof_Tchana.jpeg';
import danielHagimont from '../assets/Prof/daniel_hagimont.jpeg';
import david from '../assets/Prof/david.jpeg';
import directeurEstlc from '../assets/Prof/directeur_estlc.jpeg';
import mballa from '../assets/Prof/mballa.png';
import mvogo from '../assets/Prof/mvogo_jean_baptiste.jpeg';
import recteurUeb from '../assets/Prof/recteur_ueb.jpeg';
import mouzong from '../assets/Prof/mouzong.jpg';
import az from '../assets/Prof/az_png.png';
import ewodo from '../assets/Prof/ewodo.jpeg';
import migri from '../assets/Prof/migri.jpeg';
import prospert from '../assets/Prof/Prosper-Noumo.jpeg';
import youmbi from '../assets/Prof/youmbi.jpeg';
import sapnken from '../assets/Prof/sapnken.jpeg';
import diboma from '../assets/Prof/diboma.png';
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
    name:"Pr. David BROMBERG",
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
    name:"Pr. MOUZONG PEMI Marcellin",
    role : "C-CREP",
    organization : "ESTLC"
  },

  {
    image : mvogo,
    name:"Dr. MVOGO AHANDA Joseph J.B.",
    role : "C-SRC",
    organization : "ESTLC"
  },
  {
    image : drmessi,
    name:"Dr. MESSI NGUELE Thomas",
    role : "CD-GI",
    organization : "ESTLC"
  },
  {
    image : mballa,
    name:"Dr. MBALLA ELOUNDOU Aimé Christel",
    role : "CD-EG,",
    organization : "ESTLC"
  },
  {
    image : sapnken,
    name:"Dr. SAPNKEN Flavian Emmanuel",
    role : "CD-GL",
    organization : "ESTLC"
  },
  {
    image : diboma,
    name:"Dr. DIBOMA BENJAMIN Salomon",
    role : "CD-GT",
    organization : "ESTLC"
  },
  {
    image : az,
    name:"M. AZONG TCHITILE Emmanuel Wilfried",
    role : "C-SPE",
    organization : "ESTLC"
  },
  {
    image : ewodo,
    name:"M. EWODO AMOUGOU Marcel Rodrigue",
    role : "Enseignant",
    organization : "ESTLC"
  },
  {
    image : prospert,
    name:"Dr. GOPDJIM NOUMO Prosper",
    role : "Enseignant",
    organization : "ESTLC"
  },
  {
    image : migri,
    name:"Dr. MIGUIRI Blaise",
    role : "Enseignant",
    organization : "ESTLC"
  },

  {
    image : youmbi,
    name:"Dr. YOUMBI FOUEGO Dorota",
    role : "Enseignante",
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
            La collaboration entre l'Université d'Ebolowa et les partenaires Grenoble INP, Toulouse INP, Rennes   
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
              <div className="workshop-subtitle">28 - 30 July 2025| Campus de l’ESTLC, Ambam – Sud Cameroun</div>
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
                <div className="scroll-track">

                  {[...coordination, ...coordination, ...coordination].map((judge, index) => (
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


              <div className="sponsors-title">Comité</div>

              <div className="comm-container">
                <div className="scroll-track">

                {[...committed, ...committed].map((judge, index) => (
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
      
      
    </div>
  );
};

export default CollaborationSection;