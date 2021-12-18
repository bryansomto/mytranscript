import React, { Component, } from 'react';
import { Form, Button, } from 'react-bootstrap';

class ViewTranscript extends Component {
	constructor(props) {
		super(props);
		this.viewTranscript = this.viewTranscript.bind(this);
	}
	viewTranscript = () => {
		const target = document.getElementById('tableArea');
        let table = document.createElement('table');
        table.setAttribute("class", "table table-striped text-center");
		let matricNo = document.getElementById('matricnumber').value;
		let matNoPattern = /h\/cte\/19\/\d+/g;

		if (matNoPattern.test(matricNo)) {
			this.props.viewTranscript(String(matricNo));
		} else {
			console.log('invalid matric number')
		}

    }


	render() {
		return (
			<body>
				<section className="container">
					<Form.Group controlId="formMatricnumber" className="p-3 m-auto col-md-6">
	                  <Form.Label className="d-inline"> Enter matric number </Form.Label>
	                  <Form.Control type="text" id="matricnumber" name="matricnumber" placeholder="H/CTE/19/0554" />
	                  <Form.Text></Form.Text>
	                  <Button className="btn btn-success mt-2" onClick={this.viewTranscript}> Submit </Button>
	                </Form.Group>
				</section>
				<section id="tableArea">

                </section>
			</body>
		)
	}
}

export default ViewTranscript;