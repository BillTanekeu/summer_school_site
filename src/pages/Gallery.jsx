import { Nav } from "react-bootstrap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import ResourceUnavailable from "../components/ResourceUnavailable";
import HotelCarousel from "../components/HotelCarousel";
import "../styles/components/Gallery.css"
import EventGallery from "../components/EventGallery";

const Gallery = () => {
  return (
    <>
    <Header />
    <NavBar />
      <section className="gallery-section hotel-section">
        <EventGallery />
        <div className="section-title">
          <h1>Logements</h1>
           
        </div>
        <div className="section-description">
          Le séjour s'est déroulé dans les établissements les plus prestigieux et raffinés de la ville.
        
          </div>
        <div className="section-content">
          <HotelCarousel />
        </div>
      </section>
    <Footer />
    </>
  );
}

export default Gallery;