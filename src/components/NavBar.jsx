
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/NavBar.css';

function NavBar() {
  const location = useLocation();

  return (
    <div className='contain-NavBar'>
    <nav className="NavBar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} > Home </Link>
            <Link to="/speakers" className={location.pathname === '/speakers' ? 'active' : ''} > Speakers </Link>
            <Link to="/agenda" className={location.pathname === '/agenda' ? 'active' : ''} > Agenda </Link>
            <Link to="/hackathon" className={location.pathname === '/hackathon' ? 'active' : ''} > Hackathon </Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} > Gallery </Link>
      
    </nav>
    </div>
  );
}


function StickyNavWrapper() {
 
  const navBarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navBarRef.current) {
        const navBarTop = navBarRef.current.getBoundingClientRect().top;
        setIsSticky(navBarTop <= 0); // Sticky quand NavBar atteint le haut de la page
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={navBarRef} className={`NavBarWrapper ${isSticky ? 'sticky' : ''}`}>
        <NavBar />
      </div>
    </>
  );
}



export default StickyNavWrapper;

