import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
            <Container>
            <h1 style={{ color: '#FF6D00' }}>eventbrite</h1>
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/magnifying-glass"><i class="fa-solid fa-magnifying-glass">
                        </i></Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header