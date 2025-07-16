import { Nav } from "react-bootstrap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import ResourceUnavailable from "../components/ResourceUnavailable";

const Gallery = () => {
  return (
    <>
    <Header />
    <NavBar />
    <ResourceUnavailable />
    <Footer />
    </>
  );
}

export default Gallery;