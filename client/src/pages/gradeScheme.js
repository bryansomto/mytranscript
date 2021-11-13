import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lecturer from "./lecturer";


import { Form, } from 'react-bootstrap';

import { BrowserRouter as Router, } from "react-router-dom";


      
class GradeScheme extends Component {
  constructor(props) {
    super(props);
    this.semesterChange = this.semesterChange.bind(this);
  }

  semesterChange = () => {
    const target = document.getElementById('tableArea');
    var selectValue = document.getElementById('semester');
    var table = document.createElement('table');
    var unitTotal = document.getElementById('unitTotal')
    var total = 0;
    table.setAttribute("class", "table table-striped");
    
    if (selectValue.value === 'second-semester') {
      target.innerHTML = '';
      var tableValueCC_2 = ['STA 429', 'COM 416', 'COM 422', 'CTE 421', 'EED 413', 'COM 423', 'CTE 423', 'CTE 424', 'GNS 428']
      var tableValueCU_2 = [2,2,3,3,2,3,2,4,2];
      target.appendChild(table);
      var tableHead = "<thead id = 'tableHead'><tr><th>#</th><th>Course Code</th><th>Course Title</th><th>Course Unit</th></tr></thead><tbody id = 'tableBody'></tbody>";
      table.innerHTML = tableHead;
      var tableBodyTarget = document.getElementById('tableBody');
      for (var i=0; i < tableValueCC_2.length; i++) {
        tableBodyTarget.innerHTML += "<tr><td>" + (i+1) + "</td><td class='courseCode'>" + tableValueCC_2[i] + "</td><td class='unit'>" + tableValueCU_2[i] + "</td></tr>";
        total += tableValueCU_2[i];
      }
      unitTotal.innerHTML = "Course Unit: " + total;
    }
    else if (selectValue.value === 'first-semester') {
      target.innerHTML = '';
      var tableValueCT_1 = ['NUMERICAL METHODS IN ENGINEERING', 'CONTROL ENGINEERING II', 'COMPUTER TECHNOLOGY', 'DATA COMMUNICATION & COMPUTER NETWORK', 'COMPUTER ARCHITECTURE II', 'RESEARCH METHODOLOGY', 'COMPUTER INSTALLATION & MAINTENANCE', 'SOFTWARE ENGINEERING', 'TELECOMMUNICATION ENGINEERING', 'FRENCH FOR TECHNICAL PURPOSES I', 'INTRODUCTION TO PSYCHOMETRIC STUDIES'];
      var tableValueCC_1 = ['MTH 321', 'EEC 433', 'CTE 410', 'CTE 411', 'CTE 412', 'CTE 414', 'CTE 413', 'CTE 415', 'EEE 316', 'GNS 417', 'GNS 106'];
      var tableValueCU_1 = [2,3,3,3,3,2,2,3,3,2,2];
      target.appendChild(table);
      var tableHead = "<thead id = 'tableHead'><tr><th>#</th><th>Course Code</th><th>Course Title</th><th>Course Unit</th></tr></thead><tbody id = 'tableBody'></tbody>";
      table.innerHTML = tableHead;
      var tableBodyTarget = document.getElementById('tableBody');
      for (var i=0; i < tableValueCC_1.length; i++) {
        tableBodyTarget.innerHTML += "<tr><td>" + (i+1) + "</td><td class='courseCode' class='courseCode'>" + tableValueCC_1[i] + "</td><td class='courseTitle'>" + tableValueCT_1[i] + "</td><td class='unit'>" + tableValueCU_1[i] + "</td></tr>"
        total += tableValueCU_1[i];
      }
      unitTotal.innerHTML = "Course Unit: " + total;
    }
  }

  render(){
    return(
      
          <body className="container">
            <div className="row">
              <Lecturer  className=""/>
              <section className="col-6 d-inline-block">
                <Form className="mt-4 row">
                  <div className="col-md-6 d-inline-block">
                    <Form.Group controlId="formSchool" className="mb-2">
                      <Form.Label className="d-inline"> School </Form.Label>
                      <Form.Control type="text" name="school" value="FPI" disabled />
                      <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formDepartment" className="mb-2">
                      <Form.Label className="d-inline"> Department </Form.Label>
                      <Form.Control type="text" name="department" value="Computer Engineering" disabled/>
                      <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formLourse" className="mb-2">
                      <Form.Label className="d-inline" disabled> Level </Form.Label>
                      <Form.Control type="text" name="level"  value="HND 2" disabled/>
                      <Form.Text></Form.Text>
                    </Form.Group>
                  </div>
                  <div className="col-md-6 d-inline-block">
                    <Form.Group controlId="formYear" className="mb-2">
                      <Form.Label className="d-inline"> Year </Form.Label>
                      <Form.Select id="year" size="md">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </Form.Select>
                      <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formSemester" className="mb-2">
                      <Form.Label className="d-inline" controlId="formSemester"> Semester </Form.Label>
                      <Form.Select id="semester" size="md" onChange={this.semesterChange}>
                        <option value="">Select semester...</option>
                        <option value="first-semester">First semester</option>
                        <option value="second-semester">Second semester</option>
                      </Form.Select>
                      <Form.Text></Form.Text>
                    </Form.Group>
                  </div>
                </Form>
              </section>
            </div>
            <section id= "tableArea" className="col-12 mt-3">
            </section>
            <section id='unitTotal'>
            </section>
          </body>
      
    )
  }
}

export default GradeScheme;