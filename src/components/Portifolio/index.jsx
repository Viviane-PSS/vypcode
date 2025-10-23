import "./portifolio.css";
import { FaLaptopCode } from "react-icons/fa";
import P1 from "../../images/p1.png";
import P2 from "../../images/p2.png";
import P3 from "../../images/p3.png";
import P4 from "../../images/p4.png";
import P5 from "../../images/p5.png";
import P6 from "../../images/p6.png";

const Portifolio = () => {
  return (
    <div id="portifolio">
      <h2>Meu Portifólio</h2>
      <div className="line">
        <div className="port">
          <div>
            <a
              className="link-p1"
              href="https://www.autenticapsicologia.com/"
              target="_blank"
            >
              <span>
                <FaLaptopCode />
              </span>
              Autêntica Psicologia
            </a>
          </div>
          <img src={P1} alt="" />
          <img src={P2} alt="" />
        </div>
        <div className="port">
          <div>
            <a
              className="link-p1"
              href="https://www.hidrauja.com.br/"
              target="_blank"
            >
              <span>
                <FaLaptopCode />
              </span>
              Hidrau Já
            </a>
          </div>
          <img src={P3} alt="" />
          <img src={P4} alt="" />
        </div>
        <div className="port">
          <div>
            <a
              className="link-p1"
              href="https://viviane-pss.github.io/Direito_Legal/"
              target="_blank"
            >
              <span>
                <FaLaptopCode />
              </span>
              Direito Legal
            </a>
          </div>
          <img src={P5} alt="" />
          <img src={P6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
