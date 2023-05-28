import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchBar from './SearchBar';
import {LinkContainer} from 'react-router-bootstrap';
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>

            <Container>
            <Nav.Link href="/">
              <h1 className="title">Eventbrite</h1>
              </Nav.Link>
              <SearchBar  placeholder="Search Events..."> </SearchBar>
              {/* <Navbar.Brand href="/"></Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav container-fluid" />
              <Navbar.Collapse id="basic-navbar-nav container-fluid">
                  <Nav className="ms-auto">
                    <Nav.Link href="/CreateEvent"><i className="fa fa-plus" aria-hidden="true"></i> Create Event </Nav.Link>    
                    {/* <Nav.Link href="/"><i className="fa fa-plus" aria-hidden="true"></i> Create Event </Nav.Link>     */}
                    <Nav.Link href="/cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart </Nav.Link>  

                    {userInfo? (
                      <NavDropdown title={userInfo.name} id='username'>
                        <LinkContainer to='/profile'>
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                   ): (<LinkContainer to="/login">
                      <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
                      </LinkContainer>)}

                  </Nav>
              </Navbar.Collapse>

            </Container>

        </Navbar>
    </header>
  )
}; 

export default Header