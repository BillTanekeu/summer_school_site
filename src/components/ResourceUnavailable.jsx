import React, { useState, useEffect } from 'react';
import '../styles/components/ResourceUnavailable.css';

const ResourceUnavailable = ({ 
  title = "Ressource en cours de préparation", 
  message = "Cette section sera bientôt disponible.",
  showProgress = true,
  expectedDate = null,
  showNotification = true
}) => {
  const [progress, setProgress] = useState(0);
  const [showNotificationForm, setShowNotificationForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (showProgress) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 75) {
            clearInterval(timer);
            return 75;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [showProgress]);

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Logique d'inscription aux notifications
      console.log('Email enregistré:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setShowNotificationForm(false);
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="resource-unavailable">
      <div className="unavailable-container">
        <div className="unavailable-content">
          {/* Icône animée */}
          <div className="unavailable-icon">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" className="construction-icon">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="icon-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Titre et message */}
          <div className="unavailable-text">
            <h1 className="unavailable-title">{title}</h1>
            <p className="unavailable-message">{message}</p>
            
            {expectedDate && (
              <div className="expected-date">
                <svg viewBox="0 0 24 24" className="calendar-icon">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <span>Disponible vers le {expectedDate}</span>
              </div>
            )}
          </div>

          {/* Barre de progression */}
            
        </div>

        {/* Suggestions alternatives */}
       
      </div>
    </div>
  );
};

export default ResourceUnavailable;