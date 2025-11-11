import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Tecnologias from "./components/Tecnologias";
import Portifolio from "./components/Portifolio";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useIsMobile } from "./hooks/useIsMobile";
import MenuHamburger from "./components/MenuHamburger";

function App() {
  const isMobile = useIsMobile();
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+5535988339229"
        accountName="Vyp Code"
        chatMessage="Olá! Como podemos ajudar?"
      />
      <header className="App-header">
        {isMobile ? <MenuHamburger /> : <NavBar />}
      </header>

      <Home />
      <Sobre />
      <Tecnologias />
      <Portifolio />
      <Footer />
    </div>
  );
}

export default App;
