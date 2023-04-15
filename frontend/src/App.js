import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import Footer from "./components/Footer";

    function App() {
      return (
        <>
        <Header />
        <main>
          <Container>
        <h3>Check Out These Trending Categories!</h3>
          </Container>
          <HomeScreen />
        </main>
        <Footer />
        </>
      );
    }
    export default App;
    