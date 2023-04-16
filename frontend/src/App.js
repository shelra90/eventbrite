import { Container } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from "./components/Footer";
import React from "react";
// import events from "./events";
// import {Link} from 'react-router-dom';




function clickMe(){
  alert('You clicked me!');
}

function App () {
//    const CategoryName = ({cat}) => ['Music', 'Sports&Fitness', 'Food&Drink']
 
  return ( 
      <>
      {/* <Router> */}
      <Header />
      <main>
      <Container>
      <h3>Check Out These Trending Categories!</h3>
      <div className='CategoryName'>
      {/* <Routes>
      <Route path= "/" element={<HomeScreen />} exact/>
      <Route path="/events/:CategoryName" element={events}/> */}
      <button class= "M" onClick={clickMe}>
            Music
      </button>
      {/* <Link to={`/event/CategoryName/${events._CategoryName}`}></Link> */}
      <button class= "S" onClick={clickMe}>
            Sports&Fitness
      </button>
      <button class="F" onClick={clickMe}>
            Food&Drink      
      </button>
      {/* </Routes> */}
      </div>
      </Container>
      <HomeScreen />
      </main>
      <Footer />
      {/* </Router> */}
      </>
  );
}
  
  
      export default App;
