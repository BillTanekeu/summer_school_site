
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import MainLayout from '../components/MainLayout.jsx'
import '../App.css'
import NavBar from '../components/NavBar.jsx';

const hackathon = () => {
  return (
    <>
        <Header/>
        <NavBar />
        <MainLayout/>
        
        <Footer/>
        
    </>
  
  );
}
export default hackathon;