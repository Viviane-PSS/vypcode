import { useState } from "react";
import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active);
  };
  return (
    <div className="h-menu">
      <div className={active ? "icon icon-active" : "icon"}>
        <div className="hamburger hamburger-icon" onClick={toggleMode}></div>
      </div>
      <div className={active ? "menu menu-open" : "menu menu-close"}>
        <div className="list">
          <ul className="list-items">
            <li>Home</li>
            <li>Sobre mim </li>
            <li> Tecnologias</li>
            <li>Portifólio</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
