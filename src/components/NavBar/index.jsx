import React from "react";
import "./navBar.css";
import Logo from "../../images/logo.png";
import UseActiveSection from "../UseActiveSection";

const sectionIds = ["home", "sobre", "tecnologias", "portifolio", "contato"];

const NavBar = () => {
  const activeSectionId = UseActiveSection(sectionIds, "0px 0px -50% 0px");
  const secoes = ["Home", "Sobre mim", "Tecnologias", "Portifólio", "Contato"];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // Não precisamos alterar o estado 'active' aqui, pois o Intersection Observer
    // (dentro do useActiveSection) fará isso automaticamente após o scroll.
  };

  return (
    <nav>
      <a href="#home">
        <img src={Logo} alt="Logo do site" />
      </a>

      {/* <ul>
        <li className="item">
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li className="item">
          <a href="#sobre">Sobre</a>
        </li>
        <li className="item">
          <a href="#tecnologias">Tecnologias</a>
        </li>
        <li className="item">
          <a href="#portifolio">Portifólio</a>
        </li>
        <li className="item">
          <a href="#contato">Contato</a>
        </li>
      </ul> */}

      <ul>
        {sectionIds.map((id, index) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={
                // Se o ID da seção ativa for igual ao ID do link, aplica a classe 'active'
                `menu-item ${activeSectionId === id ? "active" : ""}`
              }
              onClick={(e) => handleScroll(e, id)}
            >
              {secoes[index]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
