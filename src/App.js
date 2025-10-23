import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Tecnologias from "./components/Tecnologias";
import Portifolio from "./components/Portifolio";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+5535988339229"
        accountName="Vyp Code"
        chatMessage="Olá! Como podemos ajudar?"
      />
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
