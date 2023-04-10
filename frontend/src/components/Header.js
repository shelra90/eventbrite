import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
            <Container>
            <h1 style= {{color: '#E65100'}}>eventbrite</h1>
            <SearchBar  placeholder="Search Events..."> </SearchBar>
            <Nav.Link href="/magnifying-glass" ><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
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
/*  ignore */
const SearchBar = ({placeholder, data}) => {
    return (
      <div className="search">
    <div className="searchInputs">
        <div className="dataResult">
          <input type="text" placeholder={placeholder}/>
             <div className="searchIcon">
              </div>
          </div> 
      </div>
      </div> 
  
    )
  }

/*  ignore */
export default Header