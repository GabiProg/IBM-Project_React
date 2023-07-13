import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function AprovarCandidatos() {
  const [codCandidato, setCodCandidato] = useState();

  function Aprovar(e) {
    e.preventDefault();

    const URL =
      "http://localhost:8080/api/v1/hiring/approve";

    const promise = axios.post(URL, {
      id: codCandidato
    });
    promise.then((response) => {
      const { data } = response;
        console.log(data);
        alert("Candidato aprovado.");
    });
    promise.catch((err) => {
      alert("Candidato não encontrado.");
    });
  }

  return (
    <AprovarCandidatosScreen>
      <h1>Painel do candidato</h1>
      <p>Insira o código do candidato:</p>
      <form onSubmit={Aprovar}>
        <input 
          type="number" 
          placeholder="Código"
          value={codCandidato}
          onChange={(e) => setCodCandidato(e.target.value)}
          required 
        />
        <button type="submit">Aprovar</button>
      </form>
    </AprovarCandidatosScreen>
  );
}

const AprovarCandidatosScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  > h1 {
    color: black;
  }
  > p {
    color: black;
  }
`;
