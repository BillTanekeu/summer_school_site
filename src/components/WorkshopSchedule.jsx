import React, { useState } from 'react';
import { Download } from 'lucide-react';
import '../styles/components/WorkshopSchedule.css';
const WorkshopSchedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { id: 0, date: "Monday, July 28, 2025", label: "Monday, July 28, 2025" },
    { id: 1, date: "Tuesday, July 29, 2025", label: "Tuesday, July 29, 2025" },
    { id: 2, date: "Wednesday, July 26, 2025", label: "Wednesday, July 26, 2025" }
  ];

  const scheduleData = {
    0: [
      {
        time: "07:30 - 08:30",
        type: "Break",
        title: "",
        description: "Café matinal",
        presenter: null,
        hasSlides: false
      },
      {
        time: "08:30 - 09:00",
        type: "Talk",
        title: "Accueil",
        description: "Accueil des participants et installation",
        presenter: null,
        hasSlides: false
      },
      {
        time: "09:00 - 09:20",
        type: "Talk",
        title: "Allocution",
        description: "Allocution d’ouverture de Monsieur le Recteur de l’UEb ou son représentant",
        presenter: "Pr. ETOA ETOA Jean Bosco",
        hasSlides: false
      },
      {
        time: "09:20 - 09:40",
        type: "Talk",
        title: "Allocution",
        description: "Allocution d’ouverture de Monsieur le Directeur de l’ESTLC",
        presenter: "Pr. TAMBA Jean Gaston",
        hasSlides: false
      },
      {
        time: "09:40 - 10:40",
        type: "Talk",
        title: "Conférence",
        description: "Conférence inaugurale 1 « Enjeux et opportunités de la santé numérique » ",
        presenter: null,
        hasSlides: false
      },
      {
        time: "10:40 - 11:00",
        type: "Break",
        title: "Pause-café",
        description: "Pause-café",
        presenter: null,
        hasSlides: false
      },
      {
        time: "11:00 - 12:30",
        type: "Talk",
        title: "Atélier",
        description: "Atelier thématique 1 « Nécessité du numérique pour une santé inclusive »",
        presenter: null,
        hasSlides: false
      },
      {
        time: "12:30 - 14:00",
        type: "break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        hasSlides: false
      },

      {
        time: "14:00 - 15:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 1 « un thème lié à la santé numérique »",
        presenter: null,
        hasSlides: false
      },

      {
        time: "15:30 - 16:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 2 « un thème lié à la santé numérique »",
        presenter: null,
        hasSlides: false
      },
      {
        time: "16:30 - 17:00",
        type: "Talk",
        title: "Hackathon ",
        description: "Présentation des thèmes et des équipes du Hackathon",
        presenter: null,
        hasSlides: false
      },
      {
        time: "17:00 - 17:30",
        type: "Talk",
        title: "Synthèse",
        description: "Synthèse de la journée",
        presenter: null,
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
        hasSlides: false
      },
      {
        time: "08:30 - 09:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé sur la collaboration : Collaboration avec les agences Françaises l’IRD, l’INRIA, l’Ambassade de France, l’AFD",
        presenter: "Pr MELATAGIA YONTA Paulin",
        hasSlides: false
      },
      {
        time: "09:30 - 10:30",
        type: "Talk",
        title: "Conférence",
        description: " Conférence inaugurale 2 « Enjeux et opportunités de l’IOT »",
        presenter: null,
        hasSlides: false
      },
      {
        time: "10:40 - 11:00",
        type: "Break",
        title: "Pause-café",
        description: "Pause-café",
        presenter: null,
        hasSlides: false
      },
      {
        time: "11:00 - 12:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 3 « un thème lié à l’IOT » ",
        presenter: null,
        hasSlides: false
      },
      {
        time: "12:30 - 14:00",
        type: "Break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        hasSlides: false
      },
      {
        time: "14:00 - 15:00",
        type: "Talk",
        title: "Exposé",
        description: " Exposé scientifique 4 « un thème lié à l’IOT »",
        presenter: null,
        hasSlides: false
      },
      {
        time: "15:00 - 15:30",
        type: "Talk",
        title: "Table ronde",
        description: "Table ronde « IOT au service de la santé»",
        presenter: null,
        hasSlides: false
      },

      {
        time: "15:30 - 16:00",
        type: "Talk",
        title: "Hackathon",
        description: "Hackathon : Présentation mi-chemin de chaque équipe du Hackathon",
        presenter: null,
        hasSlides: false
      },

      {
        time: "16:00 - 16:30",
        type: "Talk",
        title: "Synthèse",
        description: "Synthèse de la journée",
        presenter: null,
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
        hasSlides: false
      },
      {
        time: "08:30 - 09:30",
        type: "Talk",
        title: "Exposé",
        description: "Exposé scientifique 5 « Intelligence Artificielle, Santé Numérique et l’IOT »",
        presenter: null,
        hasSlides: false
      },
      {
        time: "09:30 - 10:30",
        type: "Talk",
        title: "Exposé",
        description: " Exposé scientifique 6 « un thème lié à la santé Numérique et l’IOT »",
        presenter: null,
        hasSlides: false
      },
      {
        time: "10:40 - 11:00",
        type: "Break",
        title: "Pause-café",
        description: "Pause-café",
        presenter: null,
        hasSlides: false
      },
      {
        time: "11:00 - 13:00",
        type: "Talk",
        title: "Présentation des posters",
        description: "Présentation des posters (étudiants, jeunes chercheurs) » ",
        presenter: null,
        hasSlides: false
      },
      {
        time: "13:00 - 14:00",
        type: "Break",
        title: "Déjeuner",
        description: "Déjeuner",
        presenter: null,
        hasSlides: false
      },
      {
        time: "14:00 - 16:00",
        type: "Talk",
        title: "Hackathon",
        description: " Hackathon : Présentation, Remise des Prix, Remise des attestations »",
        presenter: null,
        hasSlides: false
      },
      {
        time: "16:00 - 17:00",
        type: "Talk",
        title: "Photo de Famille",
        description: "Photo de Famille, Cocktail & réseautage",
        presenter: null,
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
                      <div className="session-presenter">{session.presenter}</div>
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