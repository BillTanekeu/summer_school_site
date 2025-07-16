// import React from 'react';
// import '../styles/components/VerticalNav.css';

// const VerticalNav = ({ items }) => {
//   return (
//     <nav className="vertical-nav">
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <a href={item.link}>{item.label}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default VerticalNav;


import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import '../styles/components/VerticalNav.css';

const VerticalNav = ({ items }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Vérifie la section actuellement visible
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className="vertical-nav">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
          >
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

VerticalNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VerticalNav;
