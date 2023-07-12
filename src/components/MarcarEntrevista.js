import styled from "styled-components";

export default function MarcarEntrevista() {
  return (
    <MarcarEntrevistaScreen>
      <h1>Painel do candidato</h1>
      <p>Insira o código do candidato:</p>
      <input type="text" placeholder="Código" />
      <button>Marcar</button>
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
