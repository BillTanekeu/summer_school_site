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
      title: '1. RNN frugal et parallèle pour la détection des messages haineux',
      image: 'https://via.placeholder.com/80',
      problemStatement: '',
      overview:
        "Ce projet vise à développer un réseau de neurones récurrents (RNN), optimisé pour une utilisation frugale des ressources et capable de fonctionner en parallèle afin de détecter les messages haineux sur les réseaux sociaux. L'accent est mis sur l'efficacité et la performance, permettant une détection en temps réel avec une consommation minimale de ressources.",
      techStack: 'Open to all',
      tasks: [
        "Recherche sur les méthodes existantes de détection des messages haineux.",
        "Conception d'un modèle RNN optimisé pour l'efficacité des ressources.",
        "Développement d'algorithmes de parallélisation.",
        "Entraînement du modèle sur des jeux de données.",
        "Évaluation et optimisation des performances du modèle.",
      ],
      resources: [
       
      ],
      judges:[
        
        {
          image: p_alain,
          name: 'Alain TCHANA',
          role: 'Professeur',
          organization: 'Université Grenoble Alpes',
        },

        {
          image: p_messi,
          name: 'Thomas MESSI',
          role: 'Chargé de cours',
          organization: 'Université de Yaoundé 1',
        },
        

      ],
    
    },
    {
      title: '2. CNN frugal et parallèle pour le diagnostic de l’Ulcère de Burili et de la variole du singe',
      image: 'https://via.placeholder.com/80',
      problemStatement: '',
      overview:
      "Ce projet implique le développement d'un réseau de neurones convolutifs (CNN) à faible consommation de ressources, capable de diagnostiquer l'ulcère de Buruli et la variole du singe. L'objectif est de fournir des diagnostics rapides et précis à partir d'images médicales, tout en garantissant une utilisation minimale des ressources.",
      techStack: '',
      tasks: [
        "Étude des caractéristiques des maladies ciblées.",
        "Conception d'un modèle CNN optimisé pour la frugalité des ressources.",
        "Développement de techniques de parallélisation pour les opérations de CNN",
        "Entraînement du modèle CNN sur les images.",
        "Évaluation et optimisation des performances du modèle.",
      ],
      resources: [
       
      ],
      judges:[
        {
          image: p_alain,
          name: 'Alain TCHANA',
          role: 'Professeur',
          organization: 'Université Grenoble Alpes',
        },
        
        {
          image: p_messi,
          name: 'Thomas MESSI',
          role: 'Chargé de cours',
          organization: 'Université de Yaoundé 1',
        },
      ],
    
    },

    {
      title: '3. Mise en place d’une API de paiement électronique unifié pour l’aisance et la fluidité des transactions financières sécurisée',
      image: 'https://via.placeholder.com/80',
      problemStatement: '',
      overview:
      "Ce projet vise à créer une API unifiée pour les paiements électroniques, facilitant des transactions financières sécurisées, fluides et faciles pour les utilisateurs. L'API sera compatible avec divers systèmes de paiement et garantira une haute sécurité et une simplicité d'intégration pour les développeurs.",
      techStack: 'Open to all',
      tasks: [
        "Analyse des APIs de paiement existantes.",
        "Définition des spécifications fonctionnelles et techniques de l'API.",
        "Conception de l'architecture de l'API.",
        "Développement des modules de sécurité et de chiffrement.",
        "Implémentation des fonctionnalités de paiement.",
        "Tests et validation des transactions financières.",
        "Documentation et support pour les développeurs.",

      ],
      resources: [
       
      ],
      judges:[
        
        {
          image: p_messi,
          name: 'Thomas MESSI',
          role: 'Chargé de cours',
          organization: 'Université de Yaoundé 1',
        },
      ],
      
    },

    {
      title: '4. Adaptation de FreeRTOS pour un fonctionnement optimal de Kufuli Smartlock',
      image: 'https://via.placeholder.com/80',
      problemStatement: '',
      overview:
      "Ce projet consiste à adapter le système d'exploitation en temps réel FreeRTOS pour optimiser le fonctionnement du Kufuli Smartlock, un dispositif de verrouillage intelligent. L'objectif est d'améliorer les performances, la fiabilité et l'efficacité énergétique du Smartlock.",
      techStack: 'Open to all',
      tasks: [
        "Analyse des exigences techniques du Kufuli Smartlock.",
        "Exploration des fonctionnalités de FreeRTOS pertinentes pour le projet.",
        "Adaptation de FreeRTOS pour le matériel spécifique du Smartlock.",
        "Optimisation des tâches et de la gestion de l'alimentation.",
        "Développement et intégration des pilotes nécessaires.",
        "Test de performance et validation du système.",
        "Documentation et formation pour les utilisateurs finaux.",
      ],
      resources: [
       
      ],
      judges:[
        {
          image: p_messi,
          name: 'Thomas MESSI',
          role: 'Chargé de cours',
          organization: 'Université de Yaoundé 1',
        },
      ],
     
    },
    {
      title: "5. Finetuning des modèles multilingues auto supervisés pour la transcription de la parole en langue camerounaise",
      image: 'https://via.placeholder.com/80',
      problemStatement: '',
      overview:
      "Ce projet consiste à affiner des modèles multilingues auto supervisés pour la transcription de la parole en langues camerounaises, permettant de convertir des enregistrements audio en texte. L'objectif est de créer des outils efficaces pour la documentation et la préservation des langues locales.",
      techStack: 'Open to all',
      tasks: [
        "Recherche sur les modèles multilingues existants.",
        "Collecte de corpus de parole en langues camerounaises.",
        "Prétraitement et nettoyage des données audio.",
        "Finetuning des modèles pré-entraînés avec les données collectées.",
        "Évaluation de la performance des modèles.",
      ],
      resources: [
       
      ],
      
      judges: [
        
        {
          image: p_melatagia,
          name: 'Paulin MELATAGIA',
          role: 'Chargé de cours',
          organization: 'Université de Yaoundé 1',
        },
        {
          image: p_alain,
          name: 'Alain TCHANA',
          role: 'Professeur',
          organization: 'Université Grenoble Alpes',
        },
        
      
        ],
    },

  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // const handleRegisterClick = () => {
  //   setIsModalOpen(true);
  // };

  const handleRegisterClick = () => {
     window.open('https://docs.google.com/forms/d/e/1FAIpQLSfyv4_m89IVTLisTnBy3Ixf2tyJ7StG5vJWx2jYSv2m61KGOA/viewform?usp=sf_link', '_blank');} 
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
          plusieurs institutions à savoir: l'UY1, l'ESTLC à Ambam, Inria, CNRS, 
          Grenoble INP, Univ Rennes, IRISA, LIG, LIAA, Wide, KrakOS. 
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
            Welcome to the Tem-(E)-Thon. This hackathon is a platform for
            innovation and creativity. Collaborate with your team to create
            amazing projects and win exciting prizes!
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
            <li>18 Décembre 2024: Céromonie d'ouverture et début des activités.</li>
            <li>27 Décembre 2024 : Présentation et remise des prix.</li>
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
