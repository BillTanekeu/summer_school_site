import React from 'react';

const images = [
  { id: 1, src: '/images/event1.jpg', alt: 'Cérémonie d’ouverture' },
  { id: 2, src: '/images/event2.jpg', alt: 'Participants' },
  { id: 3, src: '/images/event3.jpg', alt: 'Conférence' },
  { id: 4, src: '/images/event4.jpg', alt: 'Atelier pratique' },
  { id: 5, src: '/images/event5.jpg', alt: 'Photo de groupe' },
  { id: 6, src: '/images/event6.jpg', alt: 'Remise de prix' },
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Galerie de l'événement</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.alt} className="gallery-img" />
            <p className="gallery-caption">{image.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
