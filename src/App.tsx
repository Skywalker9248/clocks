import { styled } from "styled-components";
import MenuBar from "./components/menuBar";
import ContentContainer from "./components/contentContainer";

function App() {
  return (
    <HomeContainer className="App">
      <MenuBar />
      <ContentContainer />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  width: 100vw;
`;

export default App;
