import React, { useState } from 'react';
import { Download } from 'lucide-react';
import '../styles/components/WorkshopSchedule.css';
const WorkshopSchedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { id: 0, date: "Monday, July 28, 2025", label: "Monday, July 28, 2025" },
    { id: 1, date: "Tuesday, July 29, 2025", label: "Tuesday, July 29, 2025" },
    { id: 2, date: "Wednesday, July 30, 2025", label: "Wednesday, July 30, 2025" }
  ];

  const scheduleData = {
    0: [
      {
        time: "07:30 - 08:30",
        type: "Break",
        title: "",
        description: "Café matinal",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "08:30 - 09:00",
        type: "Talk",
        title: "Accueil",
        description: "Accueil des participants et installation",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "09:00 - 09:15",
        type: "Talk",
        title: "Allocution",
        description: "Allocution d’ouverture de Monsieur le Recteur de l’UEb ou son représentant",
        presenter: "Pr. ETOA ETOA Jean Bosco",
        hasSlides: false
      },
      {
        time: "09:15 - 09:30",
        type: "Talk",
        title: "Allocution",
        description: "Allocution d’ouverture de Monsieur le Directeur de l’ESTLC",
        presenter: "Pr. TAMBA Jean Gaston",
        modérateur:null,
        hasSlides: false
      },
      {
        time: "09:30 - 10:15",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Scientifique 1 « Nécessité du numérique pour une santé inclusive » ",
        presenter: " Dr. FacMedecineUEb",
        modérateur:"Dr Mballa Eloundou Aimé Christel",
        hasSlides: false
      },
      {
        time: "10:15 - 11h00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Scientifique 2 « Enjeux et opportunités de la santé numérique » ",
        presenter: "Pr. David Bromberg",
        modérateur:"Dr Mballa Eloundou Aimé Christel",
        hasSlides: false
      },
      {
        time: "11:00 - 11:30",
        type: "Break",
        title: "Pause-café",
        description: "Pause-café",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "11:30 - 12:15",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Scientifique 3 « Robotique médical et IOT, enjeux et perspectives »",
        presenter: "Dr Mvogo Ahanda Joseph",
        modérateur:"Dr Mballa Eloundou Aimé Christel",
        hasSlides: false
      },
      {
        time: "12:15 - 14:00",
        type: "break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },

      {
        time: "14:00 - 14:45",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 4 « Système d'exploitation pour Objets connectés »",
        presenter: null,
        modérateur:"Dr YOUMBI FOUEGO Dorota",
        hasSlides: false
      },

      {
        time: "14:45 - 15:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 5 « Réduction de la consommation energétique dans l'usage des systèmes IOT »",
        presenter:"Mérimé Ndeuga",
        modérateur:"Dr YOUMBI FOUEGO Dorota",
        hasSlides: false
      },
      {
        time: "15:30 - 16:30",
        type: "Talk",
        title: "Hackathon ",
        description: "Hackathon « Présentation des thèmes et des équipes du Hackathon »",
        presenter: "Dr Miguiri Blaise",
        modérateur:null,
        hasSlides: false
      },
      {
        time: "16:30 - 17:00",
        type: "Talk",
        title: "Synthèse",
        description: "Synthèse de la journée",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },


    ],
    1: [
      {
        time: "07:30 - 08:30",
        type: "Break",
        title: "",
        description: "Café matinal",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "08:30 - 09:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 6 « Nécessité du numérique pour une santé inclusive»",
        presenter: "Pr Alain Tchana",
        modérateur:"Dr GOPDJIM NOUMO PROSPER",
        hasSlides: false
      },
      {
        time: "09:30 - 10:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 7 « Nécessité du numérique pour une santé inclusive»",
        presenter: "Pr Batchakui",
        modérateur:"Dr GOPDJIM NOUMO PROSPER",
        hasSlides: false
      },
      {
        time: "10:00 - 10:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif « »",
        presenter: "M. Samuel Bayiha",
        modérateur:"Dr GOPDJIM NOUMO PROSPER",
        hasSlides: false
      },
      {
        time: "10:30 - 11:00",
        type: "Break",
        title: "Pause-café",
        description: "Pause-café",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "11:00 - 11:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 9 « Apprentissage de graphes pour la recommendation personnalisée de traitements à partir de dossiers patients » ",
        presenter: "M. GHISLAIN WABO, Doctorant",
        modérateur:"Dr GOPDJIM NOUMO PROSPER",
        hasSlides: false
      },
      {
        time: "11:30 - 12:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 10 « Usage des techniques de machine learning pour la réduction du temps d'exécution » ",
        presenter: "M. Mogo Régis, Doctorant",
        modérateur:"Dr GOPDJIM NOUMO PROSPER",
        hasSlides: false
      },
      
      {
        time: "12:00 - 14:00",
        type: "Break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "14:00 - 14:30",
        type: "Talk",
        title: "Exposé",
        description: " Exposé Scientifique 11 « GreenFaaS: Carbon-Aware, Cooperative, and Cost-Incentive Graceful Degradation Framework for Function-as-a-Service (FaaS) »",
        presenter: "M. Onana Damase, Master 2",
        modérateur:"M. EWODO AMOUGOU MARCEL",
        hasSlides: false
      },
      {
        time: "14:30 - 15:00",
        type: "Talk",
        title: "Exposé",
        description: " Exposé scientifique 12 « Apprentissage par renforcement frugal pour le Diagnostic des maladies »",
        presenter: "M. Tanekeu Bill Jordan, Master 2",
        modérateur:"M. EWODO AMOUGOU MARCEL",
        hasSlides: false
      },
      {
        time: "15:00 - 15:20",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 13 «GNN frugal pour la détection du VIH»",
        presenter: "M. Kaptchouang Yvan",
        modérateur:"M. EWODO AMOUGOU MARCEL",
        hasSlides: false
      },

      {
        time: "15:20 - 15:40",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 14 «Parallélisation du Quasy-Newton sur architecture multi-coeur»",
        presenter: "M. Arsene Tayo",
        modérateur:"M. EWODO AMOUGOU MARCEL",
        hasSlides: false
      },

      {
        time: "15:40 - 16:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «»",
        presenter: "M. Mérimé Ndeuga,étudiant",
        modérateur:"M. EWODO AMOUGOU MARCEL",
        hasSlides: false
      },
      {
        time: "16:00 - 16:20",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «Plateforme de collecte de fond à l’ESTLC»",
        presenter: "Daha Marc et Tondji Andrea, Etudiants",
        modérateur:"M. EWODO AMOUGOU MARCEL",
        hasSlides: false
      },
	  {
        time: "16:20 - 16:40",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «plateforme IAAS Firecracker»",
        presenter: "M. Achaire Zogo,Etudiant UY1",
        modérateur:"M. EWODO AMOUGOU MARCEL",
        hasSlides: false
      },

      {
        time: "16:40 - 17:00",
        type: "Talk",
        title: "Synthèse",
        description: "Synthèse de la journée",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },

    ],
    2: [
      {
        time: "07:30 - 08:30",
        type: "Break",
        title: "",
        description: "Café matinal",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "08:30 - 09:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Scientifique  «Protection des données personnelles et RGPD : étude des risques liés aux cookies et au DOM Storage dans les applications web. »",
        presenter: "Fideline Ngoufack et Franck Feuwo,Etudiants UY1",
        modérateur:"Dr. Mvogo Ahanda",
        hasSlides: false
      },
      {
        time: "09:00 - 09:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «»",
        presenter: "Lado Saha, Etudiant ENSPY",
        modérateur:"Dr. Mvogo Ahanda",
        hasSlides: false
      },
      {
        time: "09:30 - 10:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «»",
        presenter: "Roméo Fouosso, Landry Babatack, Natanael Fetue, Lambou Lontsi; Etudiants UY1",
        modérateur:"Dr. Mvogo Ahanda",
        hasSlides: false
      },
      
      {
        time: "10:00 - 10:30",
        type: "Talk",
        title: "Hackathon",
        description: " Hackathon »",
        presenter: "Hackatoniens",
        modérateur:"Pr Tchana, Pr Bromberg, Pr Hagimont",
        hasSlides: false
      },
      {
        time: "10:30 - 11:00",
        type: "Break",
        title: "Pause-café",
        description: "Pause-café",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "11:00 - 13:00",
        type: "Talk",
        title: "Hackathon",
        description: " Hackathon",
        presenter: "Hackatoniens",
        modérateur:"Pr Tchana, Pr Bromberg, Pr Hagimont",
        hasSlides: false
      },
      {
        time: "13:00 - 14:00",
        type: "Break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "14:00 - 16:00",
        type: "Talk",
        title: "Hackathon",
        description: " Hackathon »",
        presenter: "Hackatoniens",
        modérateur:"Pr Tchana, Pr Bromberg, Pr Hagimont",
        hasSlides: false
      },
      {
        time: "16:00 - 17:00",
        type: "Talk",
        title: "Photo de Famille",
        description: "Remise des Prix, Remise des attestations Photo de Famille, Cocktail & réseautage",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },

    ]
  };

  const TypeBadge = ({ type }) => (
    <span className={`type-badge ${type.toLowerCase()}`}>
      {type}
    </span>
  );

  const SlidesButton = () => (
    <button className="slides-btn">
      <Download size={16} />
      <span>Slides</span>
    </button>
  );

  return (
    <div className="workshop-schedule">
      <div className="schedule-container">
        {/* Navigation Tabs */}
        <div className="tabs-container">
          {days.map((day) => (
            <button
              key={day.id}
              className={`tab-button ${activeDay === day.id ? 'active' : ''}`}
              onClick={() => setActiveDay(day.id)}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        <div className="schedule-content">
          <div className="day-header">
            <h2>{days[activeDay].date}</h2>
          </div>

          <div className="schedule-table">
            <div className="table-header">
              <div className="header-cell time-col">Time</div>
              <div className="header-cell type-col">Type</div>
              <div className="header-cell title-col">Title & Description</div>
              <div className="header-cell resources-col">Resources</div>
            </div>

            <div className="table-body">
              {scheduleData[activeDay].map((session, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell time-cell">{session.time}</div>
                  <div className="table-cell type-cell">
                    <TypeBadge type={session.type} />
                  </div>
                  <div className="table-cell title-cell">
                    <div className="session-title">{session.title}</div>
                    <div className="session-description">{session.description}</div>
                    {session.presenter && (
                      <div className="session-presenter"> <b>Speaker:</b> {session.presenter}</div>
                    )}
                    {session.modérateur && (
                      <div className="session-presenter"> <b>Moderator:</b>  {session.modérateur}</div>
                    )}
                    
                  </div>
                  <div className="table-cell resources-cell">
                    {session.hasSlides && <SlidesButton />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSchedule;
