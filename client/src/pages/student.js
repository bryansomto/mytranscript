import React, { Component } from 'react';
import { Form, Button, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";


class Student extends Component {
    render() {
        return (
            <section className="p-2 mt-3 m-auto col-6 col-md-4">
                <Navbar bg="light" expand="lg">
                    <Nav className="text-center d-block col-12" id="">
                        <Nav.Link href="/student/viewTranscript" className="btn-outline-primary" id="ddd">View Transcript</Nav.Link>
                        <Nav.Link href="/student/employerRequest" className="btn-outline-primary" id="ddd">View Transcript Requests</Nav.Link>
                    </Nav>
                </Navbar>
            </section>
        )
    }
}

export default Student