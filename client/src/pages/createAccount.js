import React, { Component } from 'react';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Lecturer from './lecturer'

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.category = this.category.bind(this);
      }

    category = () => {
        let category = document.getElementById('category');
        if (category.value == 'student' || category.value == 'employer'){
            category.style.color = '#fff';
        }
        else {
            category.style.color = '#777';
        }
    }

    render() {
        return(
            <section  className="pt-5" style={{backgroundImage: 'url(./image/man.jpg)', height: '100em', backgroundRepeat: 'repeat'}}>
                <Form className="col-10 col-md-4 m-auto rounded p-4" style={{background: 'rgba(0,0,0,.4)', backgroundRepeat: 'repeat'}}>
                    <Form.Group as={Row} controlId="formSchool" className="mb-3">
                    <Col xs=''>
                        <Form.Control type="text" name="school" className="rounded-pill" style={{color: '#fff', background: 'rgba(0,0,0,.1)'}} placeholder="Enter a Username"  />
                        <Form.Text></Form.Text>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formDepartment" className="mb-3">
                    <Col xs=''>
                        <Form.Control type="password" name="department" placeholder="Password" className="rounded-pill" style={{color: '#fff', background: 'rgba(0,0,0,.1)'}} placeholder="Password" />
                        <Form.Text></Form.Text>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formDepartment" className="mb-3">
                    <Col xs=''>
                        <Form.Control type="password" name="department" placeholder="Password" className="rounded-pill" style={{color: '#fff', background: 'rgba(0,0,0,.1)'}} placeholder="Confirm Password" />
                        <Form.Text></Form.Text>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formSemester" className="mb-2">
                        <Col xs=''>
                            <Form.Select id="category" size="md" className='rounded-pill' onChange={this.category} style={{color: '#777', background: 'rgba(0,0,0,.1)'}}>
                            <option value="" className='text-muted'>Select option...</option>
                            <option value="student">Student</option>
                            <option value="employer">Employer</option>
                            </Form.Select>
                            <Form.Text className='text-mutedr'>Register as either a Student or an Employer</Form.Text>
                        </Col>
                    </Form.Group>
                    <Button id='submitButton' variant='btn btn-primary' className="rounded-pill col-12 mb-1" onClick=""> Sign Up </Button>
                    <div className='text-muted text-center'>
                    <small> Already have an account? <Nav.Link id='login' href='/' className='d-inline-block p-0'>Log In</Nav.Link> </small>
                    </div>
                </Form>
                
            </section>
        )
    }
}

export default CreateAccount;