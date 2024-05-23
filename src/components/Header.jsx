import React,{useContext} from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import './Header.css';
import cartContext from '../store/cart-context'

const Header = (props) => {

  const cartCtx = useContext(cartContext);

  const cartHandler = ()=>{
    props.onToggleCart(true)
  }
  console.log('toggle',props)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='header-background'>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>AmazeKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='text-white bold cart_button_link' onClick={cartHandler}><div className='cart_button'>Cart <span>{cartCtx.items.length}</span></div></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" >
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
