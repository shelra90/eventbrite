import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import SearchBar from './SearchBar';


const Header = () => {
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
            <Container>
            <h1 className="title">Eventbrite</h1>
            <SearchBar  placeholder="Search Events..."> </SearchBar>
            <Button><i class="fa-solid fa-magnifying-glass"></i></Button>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav container-fluid" />
            <Navbar.Collapse id="basic-navbar-nav container-fluid">
                    <Nav className="ms-auto">
                    <Nav.Link href="/cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i> Cart</Nav.Link>  
                    <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}; 

export default Header