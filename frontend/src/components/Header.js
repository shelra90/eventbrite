import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import SearchBar from './SearchBar';


const Header = () => {
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>

            <Container>

              <h1 className="title">Eventbrite</h1>
              <SearchBar  placeholder="Search Events..."> </SearchBar>
              <Navbar.Brand href="/"></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav container-fluid" />
              <Navbar.Collapse id="basic-navbar-nav container-fluid">
                  <Nav className="ms-auto">
                    <Nav.Link href="/"> Home </Nav.Link>
                    <Nav.Link href="/CreateEvent"><i className="fa fa-plus" aria-hidden="true"></i> Create Event </Nav.Link>    
                    {/* <Nav.Link href="/"><i className="fa fa-plus" aria-hidden="true"></i> Create Event </Nav.Link>     */}
                    <Nav.Link href="/cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart </Nav.Link>  
                    <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
                  </Nav>
              </Navbar.Collapse>

            </Container>

        </Navbar>
    </header>
  )
}; 

export default Header