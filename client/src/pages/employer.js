import React, { Component, } from 'react';
import { Form, Button, } from 'react-bootstrap';
// import '../index.css';

class Employer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<body>
				<section className="container">
                    <h1 className='text-center'>Employer Request Form</h1>
					<span className='text-muted text-center'>The Employer request form enables you make a request to view a prospective employees' academic transcript. Request made will have to be approved by the Employee before you can view it.</span>
					<Form.Group controlId="formMatricnumber" className="p-3 m-auto col-md-6">
                        <Form.Label className="d-inline"> Employer Name </Form.Label>
	                    <Form.Control type="text" name="matricnumber" className='mb-2' placeholder="Bee Association" />
	                    <Form.Text></Form.Text>
	                    <Form.Label className="d-inline"> Employee matric number </Form.Label>
	                    <Form.Control type="text" name="matricnumber" className='mb-2' placeholder="H/CTE/19/0554" />
	                    <Form.Text></Form.Text>
	                    <Button className="btn btn-success mt-2"> Make Request </Button>
	                </Form.Group>
				</section>
			</body>
		)
	}
}

export default Employer;