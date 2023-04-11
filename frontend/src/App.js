import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
  function App() {
  return (
    <>
    <Header />
    <main>
      <Container>
        <HomeScreen/>
      </Container>
    </main>
    </>
  );
}

export default App;
