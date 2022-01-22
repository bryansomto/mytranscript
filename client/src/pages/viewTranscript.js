import React, { Component, } from 'react';
import { Form, Button, } from 'react-bootstrap';
import ExamsGrade from './examsGrade';

class ViewTranscript extends Component {
	async componentDidMount() {
		await this.viewTranscript();
	  }

	constructor(props) {
		super(props);
		this.viewTranscript = this.viewTranscript.bind(this);
	}
	
	viewTranscript = async () => {
		let matricNo = document.getElementById('matricnumber').value;
		let matNoPattern = /h\/cte\/19\/\d+/g;

		if (matNoPattern.test(matricNo)) {
			this.props.viewTranscript(String(matricNo));
		} 
		else {
			console.log('invalid matric number')
		}
    }

	//  getTranscriptDetail = () => {
	// 	let popUpArea = document.getElementById('layoutArea');
	// 	// popUpArea.id = 'popUpAreaVisible';
    //     popUpArea.setAttribute("class", "table table-striped text-center");
	// 	let popUpTable = document.getElementById('layoutTableBody');
	// 	let matNo = this.props.matricNo;
	// 	let gpa = this.props.gpa
	// 	let examCode = this.props.examCode;
	// 	let examName = this.props.examName;
	// 	let examUnit = this.props.examUnit;
	// 	let examGrade = this.props.examGrade;
	// 	console.log(matNo, gpa, examName, examUnit, examGrade);
	// 	document.getElementById('studentDetail').innerHTML = "<p> <span> Matric Number: " + matNo.toUppercase + "</span><br />" + "<span id='gpa'> Grade Point Average: " + gpa.substring(0,4) + "</span></p>";
	// 	for (let k = 0; k < examUnit.length; k++) {
	// 		console.log(k, gpa);
	// 		popUpTable.innerHTML += "<tr><td>" + (k + 1) + "</td><td class='examCodePOP'>" + examCode[k].innerHTML + "</td><td class='examNamePOP'>" + examName[k].innerHTML + "</td><td class='examUnitPOP'>" + examUnit[k] + "</td><td class='examGradePOP'>" + examGrade[k] + "</td></tr>";
	// 	}
	//  }


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
				<section id='popUpArea'>
                    <p id='studentDetail'></p>
					<div className='row'>
						<table className="table table-striped text-center col">
							<thead>
							<tr>
								<th>SN</th>
								<th>COURSE CODE</th>
								<th>UNITS</th>
								<th>GRADE</th>
							</tr>
							</thead>
							<tbody className="layoutTableBody">

							</tbody>
						</table>
						<p id='H1GPA_1'></p>
						<table className="table table-striped text-center col">
							<thead>
							<tr>
								<th>SN</th>
								<th>COURSE CODE</th>
								<th>UNITS</th>
								<th>GRADE</th>
							</tr>
							</thead>
							<tbody className="layoutTableBody">

							</tbody>
						</table>
						<p id='H1GPA_2'></p>
						<table className="table table-striped text-center col">
							<thead>
							<tr>
								<th>SN</th>
								<th>COURSE CODE</th>
								<th>UNITS</th>
								<th>GRADE</th>
							</tr>
							</thead>
							<tbody className="layoutTableBody">

							</tbody>
						</table>
						<p id='H2GPA_1'></p>
						<table className="table table-striped text-center col">
							<thead>
							<tr>
								<th>SN</th>
								<th>COURSE CODE</th>
								<th>UNITS</th>
								<th>GRADE</th>
							</tr>
							</thead>
							<tbody className="layoutTableBody">

							</tbody>
						</table>
						<p id='H2GPA_2'></p>
					</div>
                    
                </section>
			</body>
		)
	}
}

export default ViewTranscript;