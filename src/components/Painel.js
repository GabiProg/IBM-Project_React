import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Painel() {
  const [nome, setNome] = useState();
  const [codCandidato, setcodCandidato] = useState();

  function Cadastrar(e) {
    e.preventDefault();

    const URL =
      "http://localhost:8080/api/v1/hiring/start";

    const promise = axios.post(URL, {
      nome: nome
    });
    promise.then((response) => {
      const { data } = response;
        console.log(data);
        setcodCandidato(data.id);
        alert("Candidato cadastrado com sucesso.");
    });
    promise.catch((err) => {
      alert("Candidato já participa do processo.");
    });
  }

  return (
    <PainelScreen>
      <h1>Painel do candidato</h1>
      <p>Insira o nome do candidato:</p>
      <form onSubmit={Cadastrar}>
        <input type="text" 
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <h3>Código do candidato: {codCandidato}</h3>
      <PainelBox>
        <h2>Acesse as etapas:</h2>
        <Link to={"/entrevista"}>
          <button>Marcar Entrevista</button>
        </Link>
        <br />
        <Link to={"/aprovar"}>
          <button>Aprovar candidato</button>
        </Link>
        <br />
        <Link to={"/aprovados"}>
          <button>Candidatos aprovados</button>
        </Link>
        <br />
        <Link to={"/status"}>
          <button>Checar status do candidato</button>
        </Link>
        <br />
        <Link to={"/desqualificar"}>
          <button>Desqualificar candidato</button>
        </Link>
      </PainelBox>
    </PainelScreen>
  );
}

const PainelScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  > h1 {
    color: black;
  }
  > p {
    color: black;
  }
  > h2 {
    color: black;
  }
`;

const PainelBox = styled.div`
  > h3 {
    color: black;
    > button {
      margin-bottom: 10px;
    }
  }
`;
