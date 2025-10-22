import "./portifolio.css";
import { FaLaptopCode } from "react-icons/fa";

const Portifolio = () => {
  return (
    <div id="portifolio">
      <h2>Meu Portifólio</h2>
      <div className="line">
        <div className="port">
          <label for="link-associado">
            <FaLaptopCode />
          </label>
          <a id="link-associado" href="">
            Autêntica Psicologia
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
