import React, { Component, } from "react";
import { Nav, Navbar, Container, } from "react-bootstrap";

class NavBar extends Component {
	render() {
		return(
				<Navbar bg="primary" variant="dark" expand="lg">
				    <Container>
					    <Navbar.Brand href="#home" id="navbar">MyTranscript</Navbar.Brand>
					    <Navbar.Toggle aria-controls="basic-navbar-nav" />
					    <Navbar.Collapse id="basic-navbar-nav">
					        <Nav className="me-auto">
					          <Nav.Link href="/">Home</Nav.Link>
					          <Nav.Link href="/lecturer">Lecturer</Nav.Link>
					        </Nav>
				        	<small className="text-white text-nowrap d-none d-sm-none d-md-block"><span id="account">{this.props.account}</span></small>         
				   		</Navbar.Collapse>              
				    </Container>
				</Navbar>
		)
	}
}

export default NavBar;