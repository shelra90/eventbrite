

import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import React from 'react';
import Footer from "./components/Footer";
import Category from "./components/Card";
import { Card } from "react-bootstrap";

  function App() {
  return (
    <>
    <Header />
    <main>
      <Container>
      <Card.Title>
      </Card.Title>
      <Card.Body>
        
      </Card.Body>
      <Category>
        </Category>
        <HomeScreen/>
      </Container>
    </main>
    <Footer />
    </>
  );
}
export default App;
