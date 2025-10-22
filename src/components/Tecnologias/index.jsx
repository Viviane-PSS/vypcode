import { FaJava, FaJs, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";

import "./tecnologias.css";

const Tecnologias = () => {
  return (
    <div id="tecnologias">
      <h2 className="custom-underline">Algumas Tecnologias</h2>
      <div>
        <div className="t1">
          <FaHtml5 />
        </div>
        <div className="t1">
          <FaCss3Alt />
        </div>

        <div className="t1">
          <FaJs />
        </div>

        <div className="t1">
          <FaReact />
        </div>
      </div>

      <div>
        <div className="t1">
          <FaJava />
        </div>
        <div className="t1">
          <p>C#</p>
        </div>
        {/* <div className="t1">
          <p>ASP.net</p>
        </div> */}
      </div>
    </div>
  );
};

export default Tecnologias;
