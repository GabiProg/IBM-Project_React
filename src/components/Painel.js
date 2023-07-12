import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Painel() {
  return (
    <PainelScreen>
      <h1>Painel do candidato</h1>
      <p>Insira o nome do candidato:</p>
      <input type="text" placeholder="Nome" />
      <button>Cadastrar</button>
      <h3>Código do candidato:</h3>
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
