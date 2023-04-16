import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from "./components/Footer";
import React from "react";


//function App() {//
function clickMe(){
  alert('You clicked me!');
}
function App () {


  return ( 
      <>
      <Header />
      <main>
      <Container>
      <h3>Check Out These Trending Categories!</h3>
    
      <button class= "M" onClick={clickMe}>
            Music
      </button>
    
      <button class= "S" onClick={clickMe}>
            Sports&Fitness
      </button>

      <button class="F" onClick={clickMe}>
            Food&Drink      
      </button>
   
        </Container>
        <HomeScreen />
        </main>
        <Footer />
      </>
  )

      }

    
      export default App;
