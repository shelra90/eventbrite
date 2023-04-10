import react from 'react'
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import SearchBar from './components/SearchBar';




const App = () => {
  return (
    <div className="App">
    <Header >
          <Container>
          <SearchBar placeholder="Enter Events"/>
          <input type="text" placeholder="Search Events..."/>
          </Container>
        </Header>
    </div>
  );
}

export default App;
