import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from "./student";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, } from "react-router-dom";

class EmployerRequest extends Component {

    viewRequest = () => {
        const target = document.getElementById('tableArea');
        var table = document.createElement('table');
        table.setAttribute("class", "table table-striped text-center");

        
    }

    render() {
        return (
            <body>
                <Student />
                <section id="tableArea">

                </section>
            </body>
        )
    }

    
}

export default EmployerRequest