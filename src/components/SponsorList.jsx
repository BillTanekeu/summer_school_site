import React, { useState, useEffect } from "react";
import Sponsor from "./Sponsor";
import ambam from '../assets/ambam.png';
import cnrs from '../assets/cnrs.png';
import ENSPY from '../assets/ENSPY.png';
import uy1 from '../assets/uy1_logo.png';
import grenoble from '../assets/grenobleINP.png';
import inria from '../assets/inria.png';
import krakos from '../assets/logo_Krakos.jpeg';
import irisa from '../assets/logo-irisa-main.png';
import lig from '../assets/logo-lig_0.svg';
import udo from '../assets/logo_udo.png';
import lia from '../assets/lia.png';
import estlc from '../assets/estlc.png';
import AIC1 from '../assets/AIC1.png';
import UGA from '../assets/UGA.png';
import idex from '../assets/idex.png';
import persyval from '../assets/persyval.png'
import UR from '../assets/univRenne.png';
import ToulouseINP from '../assets/toulouseINP.png';
import irit from '../assets/irit.png';
import '../styles/components/Sponsor.css';

const sponsors = [
  {
    name: "Université d'Ebolowa",
    image: ambam, // Utilisation des imports locaux
    link: "https://unv-ebolowa.cm/",
  },
  
  {
    name: "LEb Ambam",
    image: estlc,
    link: "https://unv-ebolowa.cm/",
  },
  {
    name: "Laboratoire d'Informatique et Applications D'AMBAM",
    image: lia,
    link: "https://unv-ebolowa.cm/",
  },
  {
    name: "Université de Rennes",
    image: UR,
    link: "https://www.univ-rennes.fr/",
  },
  {
    name: "Institut d'ingénierie et de management Toulouse",
    image: ToulouseINP,
    link: "https://www.inp-toulouse.fr/fr/index.html",
  },
 
  {
    name: "Université Grenoble Alpes",
    image: UGA,
    link: "https://www.univ-grenoble-alpes.fr/",
  },
  {
    name: "Institut d'ingénierie et de management Grenoble",
    image: grenoble,
    link: "https://www.grenoble-inp.fr/",
  },
  {
    name: "L'initiative d'excellence Université Grenoble Alpes",
    image: idex,
    link: "https://www.gouvernement.fr/france-2030"  
  },
  {
    name: "persyval Lab",
    image: persyval,
    link: "https://persyval.univ-grenoble-alpes.fr/"  
  },
  {
    name: "Institut de Recherche en Informatique de Toulouse",
    image: irit,
    link: "https://www.irit.fr/"  
  },
  
  
  {
    name: "Université de Yaoundé 1",
    image: uy1,
    link: "https://inscriptions-uy1.uninet.cm/",
  },
  {
    name: "Association des Informaticiens Camerounais",
    image: AIC1,
    link: "https://aic.direct/",
  },
  {
    name: "Ecole Nationale Supérieure Polytechnique de Yaoundé",
    image: ENSPY, // Utilisation des imports locaux
    link: "https://polytechnique.cm/",
  },
  {
    name: "Université de Douala",
    image: udo,
    link: "https://univ-douala.cm/",
  },
  {
    name: "KraKos",
    image: krakos,
    link: "https://www.inria.fr/fr/krakos-nouvelle-equipe-systemes",
  },

  {
    name: "Institut national de recherche en sciences et technologies du numérique",
    image: inria,
    link: "https://www.inria.fr/",
  },
   {
    name: "Institut de Recherche en Informatique et Systèmes Aléatoires",
    image: irisa,
    link: "https://www.irisa.fr/",
  },
  {
    name: "Centre national de la recherche scientifique",
    image: cnrs,
    link: "https://www.cnrs.fr/fr",
  }, 
  {
    name: "Laboratoire d'Informatique de Grenoble",
    image: lig,
    link: "https://www.inria.fr/fr/krakos-nouvelle-equipe-systemes",
  },

  
];


const SponsorsList = () => {
  return (
    <div className="sponsors-list">
      {sponsors.map((sponsor, index) => (
        <Sponsor
          key={index}
          name={sponsor.name}
          image={sponsor.image}
          link={sponsor.link}
        />
      ))}
    </div>
  );
};

export default SponsorsList;
