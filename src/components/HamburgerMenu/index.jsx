// HamburgerMenu.js
import React, { useState } from "react";
import "./hamburgerMenu.css"; // Estilos do ícone e do menu mobile

// Exemplo de links (adapte para seus links reais!)
const mobileNavLinks = [
  { path: "#home", label: "Início" },
  { path: "#sobre", label: "Sobre Mim" },
  { path: "#tecnologias", label: "Tecnologias" },
  { path: "#portifolio", label: "Portifólio" },
  { path: "#contato", label: "Contato" },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="hamburger-container">
      {/* ÍCONE HAMBURGER */}
      <button
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      {/* MENU MOBILE LATERAL/OVERLAY */}
      <nav className={`mobile-menu ${isOpen ? "visible" : ""}`}>
        <ul>
          {mobileNavLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay Escuro para fechar ao clicar fora */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default HamburgerMenu;
