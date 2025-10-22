import "./footer.css";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import Logo2 from "../../images/logo2.png";

const Footer = () => {
  return (
    <footer id="contato">
      <div className="logo">
        <a href="#home">
          <img src={Logo2} alt="" />
        </a>
      </div>
      <div className="rs">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/viviane-priscila-santos-1495ab32/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:vyplive@gmail.com">
              <FaRegEnvelope />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5535988339229&text="
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
