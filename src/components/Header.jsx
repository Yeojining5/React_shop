import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {

  /* 
    useNavigate 라는 훅 -> 페이지 이동을 도와주는 함수를 담고 잇음.
    보통 변수에 담아서 사용함 
  */
  let navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>🌜월간, 문</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/store') }}>Store</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/about')}}>Moon Story</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/event')}}>Event</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
            <Form className="d-flex">
              <Button variant="outline-success" onClick={()=>{ navigate('/cart') }}>
                Cart
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;

