import React, { Component } from 'react';
import $ from 'jquery';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';

class Employer extends Component {
    constructor(props) {
        super(props);
        this.category = this.category.bind(this);
        this.submit = this.submit.bind(this);
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

    submit = () => {
        $("#submitButton").click(function(event) {
            event.preventDefault();

            let formData = {
                key: $("[name = 'key']").val(),
            };

            console.log(formData);

            $.ajax({
                url: 'http://localhost:3001/api/employer',
                method: 'POST',
                data: formData,
                dataType: 'json',
            })
            .done(function(res) {
                console.log(res);
            })
            .fail(function(res) {
                console.log(res);
            });
        });
    }
    

    render() {
        return(
            <section  className="pt-5" style={{backgroundImage: 'url(./image/man.jpg)', height: '40em', backgroundRepeat: 'repeat'}}>
                <Form action='/api/employer' method='POST' className="form col-10 col-md-4 m-auto rounded p-5" style={{background: 'rgba(0,0,0,.4)', backgroundRepeat: 'repeat'}}>
                    <Form.Group as={Row} controlId="formKey" className="mb-3">
                    <Col xs=''>
                        <Form.Control type="text" name="key" className="rounded-pill" style={{color: '#fff', background: 'rgba(0,0,0,.1)'}} placeholder="Enter student key"  />
                        <Form.Text></Form.Text>
                    </Col>
                    </Form.Group>
                    <Button type='submit' id='submitButton' variant='btn btn-primary' className="rounded-pill col-12 mb-1" onClick={this.submit}> View Transcript </Button>
                    <div className='text-muted text-center'>
                        <small className='inline'> Not an Employer? <Nav.Link href="/" id='login' className='d-inline-block p-0'> Login </Nav.Link> </small>
                    </div>
                    <small id='error'></small>
                </Form>
			
		    </section>
        )
    }
}

export default Employer;