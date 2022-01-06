import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lecturer from "./lecturer";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, } from "react-router-dom";

class ExamsGrade extends Component {
  constructor(props) {
    super(props);
    this.semesterChange = this.semesterChange.bind(this);
    this.submitGrade = this.submitGrade.bind(this);
    this.submitGrade2 = this.submitGrade2.bind(this);
    this.close = this.close.bind(this);
  }

  semesterChange = () => {
    const target = document.getElementById('tableArea');
    var selectValue = document.getElementById('semester');
    var table = document.createElement('table');
    table.setAttribute("class", "table table-striped text-center");

    if (selectValue.value === 'second-semester') {
      target.innerHTML = '';
      var tableValueCT_2 = ['STATISTICAL METHODS IN ENGINEERING', 'COMPUTER SYSTEMS MANAGEMENT', 'COMPUTER GRAPHICS AND ANIMATION', 'MICROPROCESSOR IN CONTROL & INSTRUMENTATION', 'ENTREPRENEURSHIP DEVELOPMENT II', 'INTRO TO AI & EXPERT SYSTEMS', 'SEMINAR', 'PROJECT', 'FRENCH FOR TECHNICAL PURPOSES II'];
      var tableValueCC_2 = ['STA 429', 'COM 416', 'COM 422', 'CTE 421', 'EED 413', 'COM 423', 'CTE 423', 'CTE 424', 'GNS 428']
      var tableValueCU_2 = [2, 2, 3, 3, 2, 3, 2, 4, 2];
      target.appendChild(table);
      var tableHead = "<thead id = 'tableHead'><tr><th>#</th><th>Course Code</th><th>Course Title</th><th>Course Unit</th><th>Course Score</th></tr></thead><tbody id = 'tableBody'></tbody>";
      table.innerHTML = tableHead;
      var tableBodyTarget = document.getElementById('tableBody');
      for (var i = 0; i < tableValueCC_2.length; i++) {
        tableBodyTarget.innerHTML += "<tr><td>" + (i + 1) + "</td><td class='courseCode'>" + tableValueCC_2[i] + "</td><td class='courseTitle'>" + tableValueCT_2[i] + "</td><td class='unit'>" + tableValueCU_2[i] + "</td><td><input type='number' class='score form-control'/></td></tr>"
      }
    }
    else if (selectValue.value === 'first-semester') {
      target.innerHTML = '';
      var tableValueCT_1 = ['NUMERICAL METHODS IN ENGINEERING', 'CONTROL ENGINEERING II', 'COMPUTER TECHNOLOGY', 'DATA COMMUNICATION & COMPUTER NETWORK', 'COMPUTER ARCHITECTURE II', 'RESEARCH METHODOLOGY', 'COMPUTER INSTALLATION & MAINTENANCE', 'SOFTWARE ENGINEERING', 'TELECOMMUNICATION ENGINEERING', 'FRENCH FOR TECHNICAL PURPOSES I', 'INTRODUCTION TO PSYCHOMETRIC STUDIES'];
      var tableValueCC_1 = ['MTH 321', 'EEC 433', 'CTE 410', 'CTE 411', 'CTE 412', 'CTE 414', 'CTE 413', 'CTE 415', 'EEE 316', 'GNS 417', 'GNS 106'];
      var tableValueCU_1 = [2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2];
      target.appendChild(table);
      var tableHead = "<thead id = 'tableHead'><tr><th>#</th><th>Course Code</th><th>Course Title</th><th>Course Unit</th><th>Course Score</th></tr></thead><tbody id = 'tableBody'></tbody>";
      table.innerHTML = tableHead;
      var tableBodyTarget = document.getElementById('tableBody');
      for (var i = 0; i < tableValueCC_1.length; i++) {
        tableBodyTarget.innerHTML += "<tr><td>" + (i + 1) + "</td><td class='courseCode'>" + tableValueCC_1[i] + "</td><td class='courseTitle'>" + tableValueCT_1[i] + "</td><td class='unit'>" + tableValueCU_1[i] + "</td><td><input type='number' class='score form-control'/></td></tr>"
      }
    }
  }

  submitGrade() {
    let semester = document.getElementById('semester');
    let matNo = document.getElementById('matricnumber');
    let courses = document.getElementsByClassName('courseCode');
    let courseTitle = document.getElementsByClassName('courseTitle');
    let scores = document.getElementsByClassName('score');
    let units = document.getElementsByClassName('unit');

    let matNoPattern = /\w{1}\/\w{3}\/\d{2}\/\d+/g;
    let totalQPArr = [];
    let totalQP = 0;
    let unitsArr = [];
    let unitTotal = 0;
    let grades = [];
    let coursesArr = [];
    // console.log(matNoPattern.test(matNo.value));


    if (semester.value === 'first-semester' || semester.value === 'second-semester') {
      if (matNoPattern.test(matNo.value)) {
        for (var i = 0; i < scores.length; i++) {
          if (scores[i].value == '') {
            console.log('Score field should not be left blank. Insert 0 if score is unavailable.');
            scores[i].focus();
          }
          if (scores[i].value > 100) {
            console.log('score should not exceed 100');
            scores[i].focus();
            scores[i].value = '';
          }
          if (scores[i].value != '' && scores[i].value > !100) {
            if (scores[i].value >= 75) {
              var GP = 4.00;
              var grade = 'A';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else if (scores[i].value >= 70) {
              var GP = 3.50;
              var grade = 'AB';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else if (scores[i].value >= 65) {
              var GP = 3.25;
              var grade = 'B';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else if (scores[i].value >= 60) {
              var GP = 3.00;
              var grade = 'BC';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else if (scores[i].value >= 55) {
              var GP = 2.75;
              var grade = 'C';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else if (scores[i].value >= 50) {
              var GP = 2.50;
              var grade = 'CD';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else if (scores[i].value >= 45) {
              var GP = 2.25;
              var grade = 'D';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else if (scores[i].value >= 40) {
              var GP = 2.00;
              var grade = 'E';
              var QP = parseInt(units[i].innerHTML) * GP;
              totalQPArr.push(QP);
              grades.push(grade);
            }
            else {
              var GP = 0;
              var grade = 'F';
              var QP = 0;
              totalQPArr.push(QP);
              grades.push(grade);
            }

          }
        }

        if (totalQPArr.length === scores.length) {
          for (var j = 0; j < units.length; j++) {
            unitsArr.push(units[j].innerHTML);
          }
          for (var i = 0; i < unitsArr.length; i++) {
            unitTotal += parseInt(unitsArr[i]);
            totalQP += parseFloat(totalQPArr[i]);
          }
          const gpa = String(totalQP / unitTotal);
          console.log(totalQPArr, grades, unitTotal, "GPA = " + gpa);
          let popUpArea = document.getElementById('popUpArea');
          popUpArea.id = 'popUpAreaVisible';
          var popUpTable = document.getElementById('popUpTableBody');
          document.getElementById('studentDetail').innerHTML = "<p> <span> Matric Number: " + document.getElementById('matricnumber').value.toUpperCase() + "</span><br />" + "<span id='gpa'> Grade Point Average: " + gpa.substring(0,4) + "</span></p>";
          for (var k = 0; k < courses.length; k++) {
            console.log(k);
            popUpTable.innerHTML += "<tr><td>" + (k + 1) + "</td><td class='examCode'>" + courses[k].innerHTML + "</td><td class='courseTitle'>" + courseTitle[k].innerHTML + "</td><td>" + unitsArr[k] + "</td><td class='grade'>" + grades[k] + "</td></tr>";
          }
          console.log(popUpTable);
          var hideButton = document.getElementById('submitButton');
          hideButton.id = 'submitButtonHide';

        }
      }

      else if (matNo.value === '' || matNo.value === null || matNo.value === undefined) {
        console.log('Matric Number is required');
        matNo.focus();
      }
      else {
        console.log('Invalid Matric Number');
        matNo.focus();
      }
    }
    else if (semester.value != 'first-semester' || semester.value != 'second-semester') {
      console.log('Select a valid semester');
      semester.focus();
    }
  }

  submitGrade2() {
    if (window.confirm("Are you sure all supplied data are correct? Continuing will cost gas fee and save data on the blockchain unrevocably.")) {
      console.log('Okay');
      let matricNo = document.getElementById('matricnumber').value;
      let gpa = document.getElementById('gpa').innerHTML;
      let examNames = document.getElementsByClassName('examCode');
      let examUnits = document.getElementsByClassName('unit');
      let examGrades = document.getElementsByClassName('grade');
      var examName = [];
      var examUnit = [];
      var examGrade = [];

      for (var i = 0; i < examNames.length; i++) {
        examName.push(examNames[i].innerHTML);
        examUnit.push(examUnits[i].innerHTML);
        examGrade.push(examGrades[i].innerHTML);
      }
      console.log(examName);
      console.log(gpa);
      this.props.createTranscript(matricNo, gpa, examName, examUnit, examGrade);
    } else {
      console.log('Close');
    }
  }

  close() {
    document.getElementById('popUpAreaVisible').id = 'popUpArea';
    document.getElementById('submitButtonHide').id = 'submitButton';
    document.getElementById('popUpTableBody').innerHTML = '';
    document.getElementById('studentDetail').innerHTML = '';
  }

  render() {
    return (
      <body className="container" onMouseEnter={this.hideButton}>
        <div className="row">
          <Lecturer className="" />
          <section className="col-6 d-inline-block">
            <Form className="mt-4 row">
              <div className="col-md-6 d-inline-block">
                <Form.Group as={Row} controlId="formSchool" className="mb-2">
                  <Form.Label className="d-inline"> School </Form.Label>
                  <Col xs='auto'>
                    <Form.Control type="text" name="school" value="FPI" disabled />
                    <Form.Text></Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formDepartment" className="mb-2">
                  <Form.Label className="d-inline"> Department </Form.Label>
                  <Col xs='auto'>
                    <Form.Control type="text" name="department" value="Computer Engineering" disabled />
                    <Form.Text></Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formLevel" className="mb-2">
                  <Form.Label className="d-inline" disabled> Level </Form.Label>
                  <Col xs='auto'>
                    <Form.Control type="text" name="level" value="HND 2" disabled />
                    <Form.Text></Form.Text>
                  </Col>
                </Form.Group>
              </div>
              <div className="col-md-6 d-inline-block">
                <Form.Group as={Row} controlId="formYear" className="mb-2">
                  <Form.Label className="d-inline"> Year </Form.Label>
                  <Col xs='auto'>
                    <Form.Select id="year" size="md">
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </Form.Select>
                    <Form.Text></Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formSemester" className="mb-2">
                  <Form.Label className="d-inline"> Semester </Form.Label>
                  <Col xs='auto'>
                    <Form.Select id="semester" size="md" onChange={this.semesterChange}>
                      <option value="">Select semester...</option>
                      <option value="first-semester">First semester</option>
                      <option value="second-semester">Second semester</option>
                    </Form.Select>
                    <Form.Text></Form.Text>
                  </Col>
                </Form.Group>
              </div>
              <Form.Group as={Row} controlId="formMatricnumber" className="mb-2">
                <Form.Label className="d-inline"> Matric No. </Form.Label>
                <Col xs='auto'>
                  <Form.Control type="text" name="matricnumber" id="matricnumber" placeholder="H/CTE/19/0554" />
                  <Form.Text></Form.Text>
                </Col>
              </Form.Group>
            </Form>
          </section>
        </div>
        <section className="mt-3 container">
          <section id="tableArea">

          </section>
          <Button id='submitButton' variant='btn btn-success' onClick={this.submitGrade}> Submit Grade </Button>
        </section>
        <section id='popUpArea' className='col-md-8 m-auto'>
          <p id='studentDetail'></p>
          <table id='popUpTable' className="table table-striped text-center">
            <thead>
              <tr>
                <th>SN</th>
                <th>COURSE CODE</th>
                <th>COURSE TITLE</th>
                <th>UNITS</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody id="popUpTableBody">

            </tbody>
          </table>
          <Button id='submitButton2' variant='btn btn-danger' onClick={this.submitGrade2}> Save/Submit </Button>
          <Button id='close' variant='btn btn-primary' onClick={this.close}> Close </Button>
        </section>
      </body>

    )
  }
}

export default ExamsGrade;