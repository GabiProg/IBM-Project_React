import { BrowserRouter, Routes, Route } from "react-router-dom";

import Painel from "./components/Painel";
import MarcarEntrevista from "./components/MarcarEntrevista";
import AprovarCandidatos from "./components/AprovarCandidatos";
import ListarCandidatos from "./components/ListarCandidatos";
import Status from "./components/Status";
import Desqualificar from "./components/Desqualificar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Painel /> } />
        <Route path="/entrevista" element={ <MarcarEntrevista />} />
        <Route path="/aprovar" element={ <AprovarCandidatos />} />
        <Route path="/aprovados" element={ <ListarCandidatos />} />
        <Route path="/status" element={ <Status />} />
        <Route path="/desqualificar" element={ <Desqualificar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
