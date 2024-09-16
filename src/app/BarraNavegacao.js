// src/app/BarraNavegacao.js
'use client'; // Para usar os recursos do React no lado do cliente

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Séries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Menu Dropdown para Séries */}
                        <NavDropdown title="Séries" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/populares">Séries Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/top">Melhores Avaliadas</NavDropdown.Item>
                            <NavDropdown.Item href="/airing-today">Na TV Hoje</NavDropdown.Item>
                            <NavDropdown.Item href="/on-the-air">No Ar Atualmente</NavDropdown.Item>
                        </NavDropdown>

                        {/* Link para a Home */}
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
