import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Tecnologias from "./components/Tecnologias";
import Portifolio from "./components/Portifolio";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar />
      <Home />
      <Sobre />
      <Tecnologias />
      <Portifolio />
      <Footer />
    </div>
  );
}

export default App;
