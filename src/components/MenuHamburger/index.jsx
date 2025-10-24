import "./menuHamburger.css";
import { useState } from "react";
import Logo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const MenuHamburger = () => {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active);
  };
  return (
    <div>
      <div className="menu-h">
        <div className="icon-hamburger">
          <GiHamburgerMenu onClick={toggleMode} />
        </div>
        <a href="#home">
          <img src={Logo} alt="Logo do site" />
        </a>
      </div>
      <div className="menu-container">
        <div className={active ? "menu menu-open" : "menu menu-close"}>
          <ul>
            <div className="close">
              <IoIosClose />
            </div>
            <li>
              <a className="list-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="list-item" href="#sobre">
                Sobre mim
              </a>
            </li>
            <li>
              <a className="list-item" href="#tecnologias">
                Tecnologias
              </a>
            </li>
            <li>
              <a className="list-item" href="#portifolio">
                Portifólio
              </a>
            </li>
            <li>
              <a className="list-item" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuHamburger;
