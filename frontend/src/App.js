import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import Footer from "./components/Footer";
import CreateEvent from './components/CreateEvent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
  function App() {
  return (
    <>
    <Router>
    <Header />
    <main>
      <Container>
        <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/createevent' element={<CreateEvent/>} />
            <Route path="/cart/:id" element={<CartScreen
             />} />
             <Route path="/cart" element={<CartScreen />} />
          </Routes>
      </Container>
    </main>
    <Footer />
    </Router>
    
    </>
  );
}

export default App;
