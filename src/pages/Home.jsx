import React from "react";
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import '../App.css'
import '../styles/components/CollaborationSection.css';
import CollaborationSection from "../components/CollaborationSection.jsx";
import EventSummary from "../components/EventSummary.jsx";
import NavBar from '../components/NavBar.jsx';
import SponsorsList from "../components/SponsorList.jsx";
const Home = () => {
  return (
    <div className="container">
     <Header/>
        <NavBar />
        <EventSummary />
        <CollaborationSection />
        <h2 className="summary-title">
          Partenaires
          <div className="title-underline"></div>
          <br />
        </h2>
        <SponsorsList />
      <Footer/>
    </div>
  
  );
}
export default Home;