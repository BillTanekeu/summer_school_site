import React, { useState, useEffect } from 'react';
import Bibi_Pic_1 from "../assets/logement_pic_ambam/Bibi_Pic_1.png"; 
import Bibi_Pic_2 from "../assets/logement_pic_ambam/Bibi_Pic_2.png";
import Bibi_Pic_3 from "../assets/logement_pic_ambam/Bibi_Pic_3.png";
import Bibi_Pic_4 from "../assets/logement_pic_ambam/Bibi_Pic_4.png";
import Escapade_Pic_1 from "../assets/logement_pic_ambam/Escapade_Pic_1.png";
import Escapade_Pic_2 from "../assets/logement_pic_ambam/Escapade_Pic_2.png";
import Escapade_Pic_3 from "../assets/logement_pic_ambam/Escapade_Pic_3.png";
import Fleur_Lys_1 from "../assets/logement_pic_ambam/Fleur_Lys_1.png";
import Fleur_Lys_2 from "../assets/logement_pic_ambam/Fleur_Lys_2.png";
import Fleur_Lys_3 from "../assets/logement_pic_ambam/Fleur_Lys_3.png";
import Fleur_Lys_4 from "../assets/logement_pic_ambam/Fleur_Lys_4.png";
import Hotel_Monde_Pic_1 from "../assets/logement_pic_ambam/Hotel_Monde_Pic_1.png";
import Hotel_Monde_Pic_2 from "../assets/logement_pic_ambam/Hotel_Monde_Pic_2.png";
import Hotel_Monde_Pic_3 from "../assets/logement_pic_ambam/Hotel_Monde_Pic_3.png";
import Madeleine_Pic_1 from "../assets/logement_pic_ambam/Madeleine_Pic_1.png";
import Madeleine_Pic_2 from "../assets/logement_pic_ambam/Madeleine_Pic_2.png";
import Madeleine_Pic_3 from "../assets/logement_pic_ambam/Madeleine_Pic_3.png";
import Madeleine_Pic_4 from "../assets/logement_pic_ambam/Madeleine_Pic_4.png";
import Saint_Francois_Pic_1 from "../assets/logement_pic_ambam/Saint_Francois_Pic_1.png";
import Saint_Francois_Pic_2 from "../assets/logement_pic_ambam/Saint_Francois_Pic_2.png";
import Saint_Francois_Pic_3 from "../assets/logement_pic_ambam/Saint_Francois_Pic_3.png";
import Saint_Francois_Pic_4 from "../assets/logement_pic_ambam/Saint_Francois_Pic_4.png";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/components/style_galerie.css';


const HotelCarousel = () => {
    const hotels = [
     
      {
        name: "ESCAPADE HOTEL",
        images: [Escapade_Pic_1, Escapade_Pic_2, Escapade_Pic_3],
        capaciteChambre: 37,
        prixChambre: "15000/18000 FCFA / nuitée",
        contact: "(+237) 698018167",
      },
      {
        name: "FLEUR DE LYS HOTEL",
        images: [Fleur_Lys_1, Fleur_Lys_2, Fleur_Lys_3, Fleur_Lys_4],
        capaciteChambre: 15,
        prixChambre: "15000 FCFA / nuitée",
        contact: "(+237) 655791244",
      },
      {
        name: "HOTEL LE MONDE",
        images: [Hotel_Monde_Pic_1, Hotel_Monde_Pic_2, Hotel_Monde_Pic_3],
        capaciteChambre: 15,
        prixChambre: "10000/15000 FCFA / nuitée",
        contact: "(+237) 691702221",
      },
      {
        name: "MADELEINE HOTEL",
        images: [Madeleine_Pic_1, Madeleine_Pic_2, Madeleine_Pic_3, Madeleine_Pic_4],
        capaciteChambre: 4,
        capaciteStudio: 4,
        capaciteAppartement: 1,
        prixChambre: "20000 FCFA / nuitée",
        prixStudio: "20000 FCFA / nuitée",
        prixAppartement: "50000 FCFA / nuitée",
        contact: "(+237) 692297682",
      },
      {
        name: "SAINT-FRANCOIS HOTEL",
        images: [Saint_Francois_Pic_1, Saint_Francois_Pic_2, Saint_Francois_Pic_3, Saint_Francois_Pic_4],
        capaciteChambre: 13,
        prixChambre:
          "10000 FCFA / nuitée(chambres climatisées)\n20000 FCFA / nuitée(chambres climatisées)",
        contact: "(+237) 690656196",
      },
      {
        name: "BIBI HOTEL",
        images: [Bibi_Pic_1, Bibi_Pic_2, Bibi_Pic_3, Bibi_Pic_4],
        capaciteChambre: 8,
        prixChambre: "5000 FCFA/ nuitée",
      },
    ];
  
    return (
      <div className="hotel-list">
        {hotels.map((hotel, hotelIndex) => {
          const [currentImage, setCurrentImage] = useState(0);
  
          const nextImage = () => {
            setCurrentImage((prev) =>
              prev === hotel.images.length - 1 ? 0 : prev + 1
            );
          };
  
          const prevImage = () => {
            setCurrentImage((prev) =>
              prev === 0 ? hotel.images.length - 1 : prev - 1
            );
          };
  
          return (
            <div className="hotel-card" key={hotelIndex}>
              <h3 className="hotel-title">{hotel.name}</h3>
              <div className="carousel">
                <button className="carousel-button left" onClick={prevImage}>
                  ❮
                </button>
                <img
                  src={hotel.images[currentImage]}
                  alt={`${hotel.name} ${currentImage + 1}`}
                  className="carousel-image"
                />
                <button className="carousel-button right" onClick={nextImage}>
                  ❯
                </button>
              </div>
              <div className="hotel-info">
                <p>
                  <strong>Chambres:</strong> {hotel.capaciteChambre || "-"}
                </p>
                {hotel.capaciteStudio && (
                  <p>
                    <strong>Studios:</strong> {hotel.capaciteStudio}
                  </p>
                )}
                {hotel.capaciteAppartement && (
                  <p>
                    <strong>Appartements:</strong> {hotel.capaciteAppartement}
                  </p>
                )}
                <p>
                  <strong>Prix chambre:</strong> {hotel.prixChambre}
                </p>
                {hotel.prixStudio && (
                  <p>
                    <strong>Prix studio:</strong> {hotel.prixStudio}
                  </p>
                )}
                {hotel.prixAppartement && (
                  <p>
                    <strong>Prix appartement:</strong> {hotel.prixAppartement}
                  </p>
                )}
                {hotel.contact && (
                  <p>
                    <strong>Contact:</strong> {hotel.contact}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default HotelCarousel;
  