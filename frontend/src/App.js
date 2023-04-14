//import { Card } from 'react-bootstrap';//
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import React from 'react';


const category = ["Music", "Food & Drink", "Sports & Fitness"]
const App = () => {
  return (
    <Header>
      <Container>
    <div className="App"></div>
    <h1> {category[0]} </h1>
    <h2> {category[1]} </h2>
    <h3> {category[2]} </h3>
    </Container>
          </Header>
   )};
  export default App

  //const App = () => {//

//<Container>//
    //<Card>//
    //<Card.Body>//
          // <Card.Title>Check Out These Trending Categories</Card.Title>//
  //  </Card.Body>//
    //</Card>//
    //</Container>//

   

