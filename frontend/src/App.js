import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import Footer from "./components/Footer";
import CreateEvent from './components/CreateEvent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import PaymentScreen from './screens/PaymentScreen'
//import ProfileScreen from './screens/ProfileScreen'
//import RegisterScreen from './screens/RegisterScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen';
//import OrderScreen from './screens/OrderScreen';
import RegisterScreen from './screens/RegisterScreen';


  function App() {
  return (
    <>
    <Router>
    <Header />
    <main>
      <Container>
        <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />  
            <Route path='/createevent' element={<CreateEvent/>} />
            <Route path="/cart/:id" element={<CartScreen
             />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
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
