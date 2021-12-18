import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from "./student";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, } from "react-router-dom";

class EmployerRequest extends Component {
    render() {
        return (
            <body>
                <Student />
                
            </body>
        )
    }

    
}

export default EmployerRequest