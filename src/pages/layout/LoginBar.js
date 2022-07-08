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
            </Container>
        </Navbar>
    )
}
export default NavigationBar
