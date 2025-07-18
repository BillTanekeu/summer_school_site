import React ,{ useState, useEffect }from 'react';
import VerticalNav from './VerticalNav';
import ContentContainer from './ContentContainer';
import RegisterButton from './RegisterButton';
import Theme from './Theme';
import SponsorsList from './SponsorList';
import '../styles/components/MainLayout.css';
import Modal from "./Modal.jsx";
import p_messi from '../assets/Prof/Doc_Messi.jpeg';
import p_melatagia from '../assets/Prof/Dr_Paulin.png';
import p_alain from '../assets/Prof/Prof_Tchana.jpeg';
import kid from '../assets/kids.jpeg';
import bulletin from '../assets/bulletin.jpeg';
import dossier from '../assets/dossierMedical.jpeg';


const MainLayout = () => {
  // const navItems = [
  //   { label: 'Overview', link: '#overview' },
  //   { label: 'Themes', link: '#themes' },
  //   { label: 'Prizes', link: '#prizes' },
  //   { label: 'Rules', link: '#rules' },
  //   { label: 'Teams', link: '#teams' },
  //   { label: 'FAQs', link: '#faqs' },
  // ];

  const [navItems, setNavItems] = useState([]);
  

  // Simuler une API ou une promise pour charger les items
  useEffect(() => {
    const fetchItems = async () => {
      const items = await new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            { id: "overview", label: "Overview" },
            { id: "themes", label: "Themes" },
            { id: "prizes", label: "Prizes" },
            { id: "rules", label: "Rules" },
            { id: "programme", label: "Programme" },
            { id: "sponsors", label: "Sponsors" },
          ]);
        }, 1000)
      );

      setNavItems(items);
    };

    fetchItems();
  }, []);


  const themes = [
    {
      title: "1. Usage de la blockchaine et l'OCR pour le comptage automatique des votes.",
      image: bulletin,
      problemStatement: '',
      overview:
        " Dans le but de faciliter la publication rapide et sécurisée des résultats électoraux, ce projet consiste à développer une application de comptage automatique des votes. Le système repose sur l’enregistrement des procès-verbaux (PVs) filmés dans chaque bureau de vote, stockés dans une blockchain. Il analyse ensuite automatiquement les données stockées pour extraire les informations essentielles : nom du bureau de vote, nombre d’inscrits, nombre de votants, nombre de bulletins nuls, et suffrages obtenus par chaque candidat. Ces données sont ensuite agrégées et publiées sous forme de résultats clairs et accessibles.",
              techStack: 'Open to all',
      tasks: [
      ,
      ],
      resources: [
       
      ],
      judges:[],
    
    },
    {
      title: "2. Jeu vidéo pour la maitrise du code électorale et de la constitution.",
      image: kid,
      problemStatement: '',
      overview:
      "Réaliser une application permettant  de tester sa connaissance de la constitution et du code électoral sous forme de jeu vidéo.",
      techStack: '',
      tasks: [
       
      ],
      resources: [
       
      ],
      judges:[
  
      ],
    
    },

    {
      title: "3. Usage de la blockchaine et l'OCR pour la numérisation des régistres de santé",
      image: dossier,
      problemStatement: '',
      overview:
      "Dans de nombreux centres de santé, les registres manuscrits demeurent le principal moyen d’enregistrement des consultations médicales, ce qui limite l’accessibilité et l’exploitation des données. Ce projet vise à numériser les informations contenues dans ces registres afin de les rendre exploitables par des systèmes intelligents. La démarche commence par la capture vidéo ou le scan des registres, suivie de leur enregistrement sécurisé dans une blockchain pour garantir leur intégrité. Les données extraites seront ensuite structurées en jeux de données (datasets) adaptés à l’entraînement des intelligences artificielles",      techStack: 'Open to all',
      tasks: [
       
      ],
      resources: [
       
      ],
      judges:[
        
       
      ],
      
    },

   

  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // const handleRegisterClick = () => {
  //   setIsModalOpen(true);
  // };

  const handleRegisterClick = () => {
     window.open('https://docs.google.com/forms/d/10QSDMY3ohny_ftNDteE8kre6s6SDQzvxMwj7C8cwAg4/edit?ts=6878175e', '_blank');} 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost/hackwebsite/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Log server response
        setIsModalOpen(false); // Close modal
        setIsRegistered(true); // Show success message
        setTimeout(() => setIsRegistered(false), 3000); // Remove message after 3s
      } else {
        console.error("Failed to register user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
  return (
    <div className="main-layout">

      <aside className="sidebar">
          {navItems.length > 0 && <VerticalNav items={navItems} />}
      </aside>
      
      <main className="main-content">
      <div>
        <div id="overview" className="section">
      <ContentContainer title="L'aurore de la recherche en informatique au Cameroun, première édition">
          <p>
          Il s'agit de la première édition d'un hackathon rassemblant 
          plusieurs institutions à savoir: l'ESTLC à Ambam,l'UY1, Inria, CNRS, 
          Grenoble INP,Toulouse INP, Univ Rennes, IRISA, LIG, LIAA, Wide, KrakOS. 
          L'objectif est de détecter de façon précoce les 
          jeunes tallents camerounais aptes à poursuivre leur étude en cycle recherche.
          </p>
        </ContentContainer> 
      </div>
      <div id="themes" className="section">
      <ContentContainer title="Thèmes">
          <p>Les differents sujets de cette édition.</p>
          <div className="section">
          {themes.map((theme, index) => (
            <Theme
            key={index}
            title={theme.title}
            image={theme.image}
            problemStatement={theme.problemStatement}
            overview={theme.overview}
            techStack={theme.techStack}
            tasks={theme.tasks}
            resources={theme.resources}
            judges={theme.judges}

            />
        ))}
        </div>
        </ContentContainer>
     </div>
      <div id="prizes" className="section">
      <ContentContainer title="Prizes">
          <p>
           
          </p>
        </ContentContainer> 
      </div>
      
      <div id="rules" className="section">
      <ContentContainer title="Règles">
          <p>
          Les participants doivent travailler en éauipe sur des projets de l'événement. Le plagiat est strictement
            interdit. Les équipes doivent utiliser des technologies autorisées
             et ne pas effectuer de travail préparatoire avant le début officiel du hackathon. La collaboration et le partage de connaissances
              sont encouragés, mais chaque équipe doit soumettre son propre projet.
               Enfin, le respect des autres participants et un comportement éthique
                sont indispensables tout au long de l'événement.
          </p>
        </ContentContainer> 
      </div>

      <div id="programme" className="section">
      <ContentContainer title="Programme">
          <ul>
            <li>28 Juillet 2025: Céromonie d'ouverture et début des activités.</li>
            <li>30 Juilet 2025 : Présentation et remise des prix.</li>
          </ul>
        </ContentContainer> 
      </div>
      <div id="sponsors" className="section">
      <ContentContainer title="Sponsors">
        <div className="sponsors-section">
          <h3>Our Sponsors</h3>
          <SponsorsList />
        </div>        

        </ContentContainer> 
      </div>
    </div>
    


      </main> 
      <aside className="register">
        <RegisterButton onClick={handleRegisterClick} />
      
      </aside>
      {isModalOpen && <Modal onClose={handleCloseModal} onSubmit={handleSubmit} />}
      {isRegistered && (
        <div className="success-message">User successfully registered!</div>
      )}
      
    </div>
  );
};

export default MainLayout;
