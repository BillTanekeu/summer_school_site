import React from 'react';
import '../styles/components/EventSummary.css';
import RegisterButton from './RegisterButton';
import EventGallery from './EventGallery';
const EventSummary = () => {
  const handleRegistration = () => {
    window.open('https://docs.google.com/forms/d/1qNwC5nErmureEKqUXLDUQn7-KitYeBY1RqNh9jxDCrg/edit', '_blank');
 
    // Logique d'inscription à implémenter
    console.log('Redirection vers l\'inscription...');
  };

  return (
    <div className="event-summary">
      <div className="event-summary-container">
        <div className="event-header">
          <div className="event-icon">
            <svg viewBox="0 0 24 24" className="health-icon">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <h1 className="event-title">Santé Numérique & IoT</h1>
          <p className="event-subtitle">Workshops | Ateliers | Hackathon</p>
          <div className="event-details">
            <span className="event-date">28 - 30 Juillet 2025</span>
            <span className="event-location">Campus de l'ESTLC, Ambam - Sud Cameroun</span>
          </div>
          <EventGallery />
          
        </div>

        
     
        <div className="event-objectives">
          <h2>Objectifs Principaux</h2>
          <div className="objectives-grid">
            <div className="objective-item">
              <div className="objective-icon health-digital">
                <svg viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3>Santé Numérique</h3>
              <p>Sensibilisation aux enjeux et opportunités de la transformation digitale</p>
            </div>

            <div className="objective-item">
              <div className="objective-icon iot-focus">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                  <line x1="12" y1="20" x2="12.01" y2="20"/>
                </svg>
              </div>
              <h3>Internet des Objets</h3>
              <p>Exploration des défis et potentiels de l'IoT dans l'écosystème de santé</p>
            </div>

            <div className="objective-item">
              <div className="objective-icon collaboration">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Collaboration Multi-Secteurs</h3>
              <p>Favoriser les synergies entre académique, entreprises et institutions</p>
            </div>

            <div className="objective-item">
              <div className="objective-icon innovation">
                <svg viewBox="0 0 24 24">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                </svg>
              </div>
              <h3>Innovation Locale</h3>
              <p>Encourager le développement de solutions adaptées aux besoins spécifiques</p>
            </div>
          </div>
        </div>

        <div className="event-highlights">
          <div className="highlight-item">
            <span className="highlight-number">3</span>
            <span className="highlight-label">Jours d'Innovation</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">5+</span>
            <span className="highlight-label">Experts Internationaux</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">1</span>
            <span className="highlight-label">Hackathon Compétitif</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default EventSummary;