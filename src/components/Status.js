import styled from "styled-components";

export default function Status() {
  return (
    <StatusScreen>
      <h1>Painel do candidato</h1>
      <p>Insira o código do candidato:</p>
      <input type="text" placeholder="Código" />
      <button>Ver status</button>
      <h3>Status do candidato:</h3>
    </StatusScreen>
  );
}

const StatusScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  > h1 {
    color: black;
  }
  > p {
    color: black;
  }
  > h3 {
    color: black;
  }
`;