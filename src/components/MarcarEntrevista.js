import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function MarcarEntrevista() {
  const [codCandidato, setCodCandidato] = useState();

  function Marcar(e) {
    e.preventDefault();

    const URL =
      "http://localhost:8080/api/v1/hiring/schedule";

    const promise = axios.post(URL, {
      id: codCandidato
    });
    promise.then((response) => {
      const { data } = response;
        console.log(data);
        alert("Entrevista marcada.");
    });
    promise.catch((err) => {
      alert("Candidato não encontrado.");
    });
  }

  return (
    <MarcarEntrevistaScreen>
      <h1>Painel do candidato</h1>
      <p>Insira o código do candidato:</p>
      <form onSubmit={Marcar}>
        <input 
          type="number" 
          placeholder="Código"
          value={codCandidato}
          onChange={(e) => setCodCandidato(e.target.value)}
          required 
        />
        <button type="submit">Marcar</button>
      </form>
    </MarcarEntrevistaScreen>
  );
}

const MarcarEntrevistaScreen = styled.div`
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
