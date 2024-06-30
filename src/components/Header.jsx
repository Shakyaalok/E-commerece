import React,{useContext} from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import './Header.css';
import cartContext from '../store/cart-context';
import {Link} from 'react-router-dom'

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
        <Navbar.Brand as={Link} to='/home' className='text-white'>AmazeKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/movies'>Movies</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='text-white bold cart_button_link' onClick={cartHandler}><div className='cart_button'>Cart <span>{cartCtx.items.length}</span></div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
