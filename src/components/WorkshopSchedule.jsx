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
        time: "07:30 - 09:00",
        type: "Break",
        title: "",
        description: "Café matinal, accueil des participants et installation",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
    
      {
        time: "09:00 - 09:30",
        type: "Talk",
        title: "Allocution",
        description: "Allocution d'ouverture de Monsieur le Recteur de l’UEb ou de Monsieur le Directeur de l'ESTLC",
        presenter: "ETOA ETOA Jean Bosco, Professeur, Université d'Ebolowa / TAMBA Jean Gaston, Professeur, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      
      {
        time: "09:30 - 10:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Scientifique 1 « Enjeux et opportunités de la santé numérique » ",
        presenter: "David BROMBERG, Professeur, Université de Rennes",
        modérateur:"MBALLA ELOUNDOU Aimé Christel, Chargé de Cours, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "10:00 - 10h30",
        type: "Talk",
        title: "Exposé",
       description: "Exposé Scientifique 2 « Nécessité du numérique pour une santé inclusive » ",
        presenter: "NGUEMA Nave, Docteur en Pharmacie, Pharmacie des trois frontières, Ambam",
        modérateur:"MBALLA ELOUNDOU Aimé Christel, Chargé de Cours, ESTLC, Université d'Ebolowa",
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
        description: "Exposé Scientifique 3 « La robotique dans les soins de santé : une perspective de l'Internet des objets robotiques médicaux (IoMRT)»",
        presenter: "MVOGO AHANDA Joseph J.B.,Chargé de Cours, Université d'Ebolowa",
        modérateur:"MBALLA ELOUNDOU Aimé Christel, Chargé de Cours, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "11:30 - 12:00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 4 « Contextual optimization of a ML model for an embedded system »",
        presenter: "Daniel HAGIMONT, Professeur, INP Toulouse",
        modérateur:"YOUMBI FOUEGO Dorota, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "12:00 - 12:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 5 « Le numérique au service du droit à la santé au Cameroun : Regard croisé avec les expériences étrangères  »",
        presenter: "MBALLA ELOUNDOU Aimé Christel, Chargé de Cours, ESTLC, Université d'Ebolowa",
        modérateur:"YOUMBI FOUEGO Dorota, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
  
      
      {
        time: "12:30 - 14:30",
        type: "break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "14:30 - 14:50",
        type: "Talk",
        title: "Exposé Applicatif",
        description: "Exposé scientifique 6 « Interopérabilité des solutions eHealth »",
        presenter: "PAMOE Estebanc, IT, GIZ",
        modérateur:"YOUMBI FOUEGO Dorota, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "14:50 - 15:10",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 7 « Apprentissage de graphes pour la recommendation personnalisée de traitements à partir de dossiers patients »",
        presenter: "WABO Ghislain, Doctorant, UY1",
        modérateur:"YOUMBI FOUEGO Dorota, Assistant, ESTLC,  Université d'Ebolowa",
        hasSlides: false
      },
      
       {
        time: "15:10 - 15:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 8 « Usage des techniques de machine learning pour la réduction du temps d'exécution » ",
        presenter: "MOGO Régis, Doctorant, UY1",
        modérateur:"GOPDJIM NOUMO Prosper, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },

      {
        time: "15:30 - 15:50",
        type: "Talk",
        title: "Exposé",
        description: " Exposé scientifique 9 « Apprentissage par renforcement frugal pour le Diagnostic des maladies »",
        presenter: "TANEKEU Bill Jordan, Doctorant, UY1",
        modérateur:"EWODO AMOUGOU Marcel, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      
      {
        time: "15:50 - 16:20",
        type: "Talk",
        title: "Synthèse",
        description: "Synthèse de la journée",
        presenter: null,
        modérateur:"MIGUIRI Blaise, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },

    ],
    1: [
      {
        time: "07:30 - 09:00",
        type: "Break",
        title: "",
        description: "Café matinal",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "09:00 - 09:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 10 «GreenFaas: Carbon-Aware, Cooperative, and Cost-Incentive Graceful Degradation Framework for Function-as-a-Service (FaaS)»",
        presenter: "Alain TCHANA, Professeur, Grenoble INP-UGA",
        modérateur:"GOPDJIM NOUMO Prosper, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "09:30 - 10h00",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 11 «IA au cœur de la métaphore éducative»",
        presenter: "BATCHAKUI Bernabé, Professeur, ENSPY",
        modérateur:"GOPDJIM NOUMO Prosper, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
       
      {
        time: "10:00 - 10:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 12 « IOT & IA au service du développement durable : Santé et Agriculture»",
        presenter: "CHANA Anne Marie, Chargé de Cours, ENSPY",
        modérateur:"GOPDJIM NOUMO Prosper, Assistant, ESTLC, Université d'Ebolowa",
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
        description: "Exposé Scientifique 13 «Des Systèmes d'Exploitation à la Suprématie du Cloud : Voyage à Travers le Temps» ",
        presenter: "David BROMBERG, Professeur, Université de Rennes",
        modérateur:"MBALLA ELOUNDOU Aimé Christel, Chargé de Cours, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "11:30 - 11:50",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 14 «GNN frugal parallèl»",
        presenter: "KAPTCHOUANG Yvan, Doctorant, UY1",
        modérateur:"EWODO AMOUGOU Marcel, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "11:50 - 12:10",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 15 «Parallélisation du Quasy-Newton sur architecture multi-coeur»",
        presenter: "ARSENE TAYO Abichaï, Doctorant, ENSPY, UY1",
        modérateur:"EWODO AMOUGOU Marcel, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },

      {
        time: "12:10 - 14:10",
        type: "Break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },

      {
        time: "14:10 - 14:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «Plateforme de collecte de fond à l'ESTLC»",
        presenter: "DAHA Marc et TONDJI  Andrea",
        modérateur:"EWODO AMOUGOU Marcel, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
	  {
        time: "14:30 - 14:50",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «API de Paiement Autonome»",
        presenter: "NJANKO Yvan et M. ETOA NZOM Simon, Doctorant, UY1",
        modérateur:"EWODO AMOUGOU Marcel, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "14:50 - 15:10",
        type: "Talk",
        title: "Exposé",
        description: "Exposé Applicatif «Plateforme IAAS Firecracker»",
        presenter: "ZOGO ABOUMA Achaire, Doctorant, UY1",
        modérateur:"EWODO AMOUGOU Marcel, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "15:10 - 15:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 16 «Protection des données personnelles et RGPD: étude des risque liés aux cookies  et au DOM storage dans les application web»",
        presenter: "GOUFACK Fideline et TAMWO FEUWO Franck, Doctorant, ENSPY, UY1",
        modérateur:"YOUMBI FOUEGO Dorota, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
      {
        time: "15:30 - 16:00",
        type: "Talk",
        title: "«Hackathon »",
        description: "Hackathon « Présentation des thèmes et des équipes du Hackathon »",
        presenter: "MIGUIRI Blaise, Assistant, Université d'Ebolowa",
        modérateur:"YOUMBI FOUEGO Dorota, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },
  

      {
        time: "16:00 - 16:30",
        type: "Talk",
        title: "Synthèse",
        description: "Synthèse de la journée",
        presenter: null,
        modérateur:"EWODO AMOUGOU Marcel, Assistant, ESTLC, Université d'Ebolowa",
        hasSlides: false
      },

    ],
    2: [
      {
        time: "07:30 - 09:00",
        type: "Break",
        title: "",
        description: "Café matinal",
        presenter: null,
        modérateur:null,
        hasSlides: false
      },
      {
        time: "09:00 - 10:30",
        type: "Talk",
        title: "Hackathon",
        description: "«Hackathon »",
        presenter: "Hackatoniens",
        modérateur:"Pr. Alain TCHANA, Pr. David BROMBERG, Pr. Daniel HAGIMONT",
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
        time: "11:00 - 12:30",
        type: "Talk",
        title: "Hackathon",
        description: "« Hackathon »",
        presenter: "Hackatoniens",
        modérateur:"Pr. Alain TCHANA, Pr. David BROMBERG, Pr. Daniel HAGIMONT",
        hasSlides: false
      },
      {
        time: "12:30 - 14:00",
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
        title: "Evaluation",
        description: "Fin du Hackaton et Evaluation",
        presenter: "Hackatoniens",
        modérateur:"Pr. Alain TCHANA, Pr. David BROMBERG, Pr. Daniel HAGIMONT",
        hasSlides: false
      },
     {
        time: "16:00 - 17:00",
        type: "Talk",
        title: "Photo de Famille",
        description: "Remise des Prix, Remise des Attestations, Photo de Famille, Réseautage",
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
