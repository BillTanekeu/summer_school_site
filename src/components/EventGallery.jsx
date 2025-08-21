import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../styles/components/EventGallery.css'; 
import banabe from '../assets/gallery/banabe.jpeg';
import bande from '../assets/gallery/bande.jpeg';
import bill from '../assets/gallery/bill.jpeg';    
import cafe from '../assets/gallery/cafe.jpeg';
import david from '../assets/gallery/david.jpeg';
import diner from '../assets/gallery/diner.jpeg';
import directeur from '../assets/gallery/directeur.jpeg';
import estebanc from '../assets/gallery/estebanc.jpeg';
import famille from '../assets/gallery/famille.jpeg';
import foule1 from '../assets/gallery/foule1.jpeg';
import foule4 from '../assets/gallery/foule4.jpeg';
import foule3 from '../assets/gallery/foule3.jpeg';
import foule2 from '../assets/gallery/foule2.jpeg';
import wabo from '../assets/gallery/ghislain.jpeg';       
import hackathon from '../assets/gallery/hackathon.jpeg';
import marie from '../assets/gallery/marie.jpeg'; 
import mballa from '../assets/gallery/mballa1.jpeg';
import organizer from '../assets/gallery/oganizer1.jpeg';
import rapporter1 from '../assets/gallery/rapporter1.jpeg';
import reception1 from '../assets/gallery/reception.jpeg';
import reception2 from '../assets/gallery/reception2.jpeg';
import reception3 from '../assets/gallery/reception3.jpeg';
import regis from '../assets/gallery/regis.jpeg';
import tayou from '../assets/gallery/tayou.jpeg';
const EventGallery = () => {
  const images = [
    {
      id: 1,
      src: reception1,
      alt: 'Événement moment 1',
      caption: 'Reception chaleureuse'
    },
    {
      id: 1,
      src: reception2,
      alt: 'Événement moment 1',
      caption: 'Reception chaleureuse'
    },
    {
      id: 1,
      src: reception3,
      alt: 'Événement moment 1',
      caption: 'Reception chaleureuse'
    },
    {
      id: 1,
      src: directeur,
      alt: 'Événement moment 1',
      caption: 'Allocation du directeur de l’ESTLC'
    },
    {
      id: 1,
      src: david,
      alt: 'Événement moment 1',
      caption: 'David BROMBERG, Professeur à l’Université de Rennes'
    },
    {
      id: 1,
      src: marie,
      alt: 'Événement moment 1',
      caption: 'Dr. Marie TCHANA, Enseignante à l’ENSPY'
    },
    {
      id: 1,
      src: banabe,
      alt: 'Événement moment 1',
      caption: 'Pr. Bernabé BATCHAKUI, Enseignant à l’ENSPY'
    },
    {
      id: 1,
      src: foule1,
      alt: 'Événement moment 1',
      caption: ''
    },
    {
      id: 1,
      src: foule2,
      alt: 'Événement moment 1',
      caption: ''
    },

    {
      id: 1,
      src: regis,
      alt: 'Événement moment 1',
      caption: 'Mogo Regis, Doctorant à l’Université de Yaoundé 1'
    },
    {
      id: 1,
      src: wabo,
      alt: 'Événement moment 1',
      caption: 'Wabo Ghislain, Doctorant à l’Université de Yaoundé 1'
    },
    {
      id: 1,
      src: foule3,
      alt: 'Événement moment 1',
      caption: ''
    },
    {
      id: 1,
      src: bill,
      alt: 'Événement moment 1',
      caption: 'TANEKEU Bill, Etudiant chercheur à l’UY1'
    },
    
    {
      id: 1,
      src: mballa,
      alt: 'Événement moment 1',
      caption: 'CD MBALLA, ESTLC'
    },

    {
      id: 1,
      src: organizer,
      alt: 'Événement moment 1',
      caption: ''
    },
    {
      id: 1,
      src: bande,
      alt: 'Événement moment 1',
      caption: 'MBANDE Manuella, Etudiante à l’UY1'
    },
    {
      id: 1,
      src: famille,
      alt: 'Événement moment 1',
      caption: 'photo de famille'
    },
    {
      id: 1,
      src: hackathon,
      alt: 'Événement moment 1',
      caption: 'Participants au hackathon'
    },
    

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Navigation avec les touches du clavier
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play (optionnel)
  useEffect(() => {
    if (!isFullscreen) {
      const interval = setInterval(goToNext, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isFullscreen]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl">
      {/* En-tête */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Galerie de l'Événement
        </h2>
        <p className="text-gray-600">
          Revivez les moments forts en images
        </p>
      </div>

      {/* Image principale */}
      <div className="relative mb-6 group">
        <div 
          className="relative h-96 bg-black rounded-xl overflow-hidden cursor-pointer shadow-2xl"
          onClick={() => setIsFullscreen(true)}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          
          {/* Overlay avec caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">{images[currentIndex].caption}</p>
              <p className="text-sm opacity-80">{currentIndex + 1} / {images.length}</p>
            </div>
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicateurs */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Miniatures */}
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-4 ring-blue-500 scale-105 shadow-lg' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-20 h-16 object-cover"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-blue-500/20"></div>
            )}
          </button>
        ))}
      </div>

      {/* Mode plein écran */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative max-w-5xl max-h-full p-6">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-xl font-semibold">{images[currentIndex].caption}</p>
              <p className="text-white/80">{currentIndex + 1} / {images.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Utilisez les flèches ← → pour naviguer, cliquez sur une image pour l'agrandir</p>
      </div>
    </div>
  );
};

export default EventGallery;