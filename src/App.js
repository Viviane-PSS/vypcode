import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar />
      <Home />
      <Sobre />

      <Footer />
    </div>
  );
}

export default App;
