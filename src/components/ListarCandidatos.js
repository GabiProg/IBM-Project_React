import styled from "styled-components";

export default function ListarCandidatos() {
  return (
    <ListarCandidatosScreen>
      <h1>Painel do candidato</h1>
      <p>Candidatos aprovados:</p>
    </ListarCandidatosScreen>
  );
}

const ListarCandidatosScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  
`;