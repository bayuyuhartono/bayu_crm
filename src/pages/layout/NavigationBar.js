import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
    const Logout = () => {
        localStorage.clear();
        alert('Log Out Success')
        window.location.href = '/';
    }
    return(
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">PT SMART</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/product">Product</Nav.Link>
                <Nav.Link href="/customer">Customer</Nav.Link>
                <Nav.Link href="/subscribe">Subscribe</Nav.Link>
                </Nav>
                <Nav className="d-flex">
                <NavDropdown title={localStorage.getItem('name')} id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={() => Logout()}>Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavigationBar
