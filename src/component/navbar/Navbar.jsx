import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export default function customNav(){
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className='text text-decoration-none fw-bolder text-dark fs-5'>PRODUCT</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Link to="/products" className='text text-decoration-none fw-bold text-dark mx-5'>Products</Link>
           <Link to="/restaurant" className='text text-decoration-none fw-bold text-dark'>Restaurant</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}