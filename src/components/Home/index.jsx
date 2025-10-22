import "./home.css";
import HomeImg from "../../images/home.png";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <img src={HomeImg} alt=" Imagem de apresentação" />
    </div>
  );
};

export default Home;
