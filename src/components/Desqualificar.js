import styled from "styled-components";

export default function Desqualificar() {
  return (
    <DesqualificarScreen>
      <h1>Painel do candidato</h1>
      <p>Insira o código do candidato:</p>
      <input type="text" placeholder="Código" />
      <button>Desqualificar</button>
    </DesqualificarScreen>
  );
}

const DesqualificarScreen = styled.div`
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