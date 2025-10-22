import React from "react";
import "./navBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <nav>
      <a href="#home">
        <img src={Logo} alt="Logo do site" />
      </a>

      <ul>
        <li className="item">
          <a href="#home">Home</a>
        </li>
        <li className="item">
          <a href="#sobre">Sobre</a>
        </li>
        <li className="item">
          <a href="#ptecnologias">Tecnologias</a>
        </li>
        <li className="item">
          <a href="#portifolio">Portifólio</a>
        </li>
        <li className="item">
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
