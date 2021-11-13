import React, { Component, } from 'react';
import { Form, Button, } from 'react-bootstrap';

class ViewTranscript extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<body>
				<section className="container">
					<Form.Group controlId="formMatricnumber" className="p-3 m-auto col-md-6">
	                  <Form.Label className="d-inline"> Enter matric number </Form.Label>
	                  <Form.Control type="text" name="matricnumber" placeholder="H/CTE/19/0554" />
	                  <Form.Text></Form.Text>
	                  <Button className="btn btn-success mt-2"> Submit Grade </Button>
	                </Form.Group>
				</section>
			</body>
		)
	}
}

export default ViewTranscript;