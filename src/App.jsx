import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Menu from "./componentes/Menu/Menu";
import Banner from "./componentes/Banner/Banner";
import Rodape from "./componentes/Rodape/Rodape";

import Home from "./pages/Home/Home";
import SalaRotacao from "./pages/SalaRotacao/SalaRotacao";
import Contatos from "./pages/Contatos/Contatos";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Banner />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sala-rotacao" element={<SalaRotacao />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="*" element={<h1>ERRO 404</h1>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
