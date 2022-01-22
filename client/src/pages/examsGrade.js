import React, { Component } from 'react';
import $ from 'jquery';
import Lecturer from "./lecturer";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, } from "react-router-dom";



class ExamsGrade extends Component {
  constructor(props) {
    super(props);
    this.gradeTable = this.gradeTable.bind(this);
    this.submitGrade = this.submitGrade.bind(this);
    this.submitGrade2 = this.submitGrade2.bind(this);
    this.close = this.close.bind(this);
  }

  gradeTable() {
    $(document).ready(function() {
      const target = document.getElementById('tableArea');
      target.innerHTML = '';
      let table = document.createElement('table');
      table.setAttribute("class", "table table-striped text-center");


      let H1tableValueCT_1 = ['NUMERICAL METHODS IN ENGINEERING', 'CONTROL ENGINEERING II', 'COMPUTER TECHNOLOGY', 'DATA COMMUNICATION & COMPUTER NETWORK', 'COMPUTER ARCHITECTURE II', 'RESEARCH METHODOLOGY', 'COMPUTER INSTALLATION & MAINTENANCE', 'SOFTWARE ENGINEERING', 'TELECOMMUNICATION ENGINEERING', 'FRENCH FOR TECHNICAL PURPOSES I', 'INTRODUCTION TO PSYCHOMETRIC STUDIES'];
      let H1tableValueCC_1 = ['MTH 321', 'EEC 433', 'CTE 410', 'CTE 411', 'CTE 412', 'CTE 414', 'CTE 413', 'CTE 415', 'EEE 316', 'GNS 417', 'GNS 106'];
      let H1tableValueCU_1 = [2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2];
      target.appendChild(table);
      let H1tableHead_1 = "<thead id = 'tableHead'><tr><th>#</th><th>Course Code</th><th>Course Title</th><th>Course Unit</th><th>Course Score</th></tr></thead><p>HND 1 First Semester</p><tbody id = 'tableBody'></tbody>";
      table.innerHTML = H1tableHead_1;
      let H1tableBodyTarget_1 = document.getElementById('tableBody');
      for (let i = 0; i < H1tableValueCC_1.length; i++) {
        H1tableBodyTarget_1.innerHTML += "<tr><td>" + (i + 1) + "</td><td class='H1examCode_1'>" + H1tableValueCC_1[i] + "</td><td class='H1examName_1'>" + H1tableValueCT_1[i] + "</td><td class='H1examUnit_1'>" + H1tableValueCU_1[i] + "</td><td><input type='number' class='H1examScore_1 form-control'/></td></tr>"
      }
      let H1tableValueCT_2 = ['STATISTICAL METHODS IN ENGINEERING', 'COMPUTER SYSTEMS MANAGEMENT', 'COMPUTER GRAPHICS AND ANIMATION', 'MICROPROCESSOR IN CONTROL & INSTRUMENTATION', 'ENTREPRENEURSHIP DEVELOPMENT II', 'INTRO TO AI & EXPERT SYSTEMS', 'SEMINAR', 'PROJECT', 'FRENCH FOR TECHNICAL PURPOSES II'];
      let H1tableValueCC_2 = ['STA 429', 'COM 416', 'COM 422', 'CTE 421', 'EED 413', 'COM 423', 'CTE 423', 'CTE 424', 'GNS 428']
      let H1tableValueCU_2 = [2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2];
      let H1P2 = document.createElement('p');
      H1P2.innerHTML = "<p>HND 1 Second Semester</p>";
      H1tableBodyTarget_1.append(H1P2);
      let H1tableBodyTarget_2 = document.getElementById('tableBody');
      for (let i = 0; i < H1tableValueCC_2.length; i++) {
        H1tableBodyTarget_2.innerHTML += "<tr><td>" + (i + 1) + "</td><td class='H1examCode_2'>" + H1tableValueCC_2[i] + "</td><td class='H1examName_2'>" + H1tableValueCT_2[i] + "</td><td class='H1examUnit_2'>" + H1tableValueCU_2[i] + "</td><td><input type='number' class='H1examScore_2 form-control'/></td></tr>"
      }
      let H2tableValueCT_1 = ['NUMERICAL METHODS IN ENGINEERING', 'CONTROL ENGINEERING II', 'COMPUTER TECHNOLOGY', 'DATA COMMUNICATION & COMPUTER NETWORK', 'COMPUTER ARCHITECTURE II', 'RESEARCH METHODOLOGY', 'COMPUTER INSTALLATION & MAINTENANCE', 'SOFTWARE ENGINEERING', 'TELECOMMUNICATION ENGINEERING', 'FRENCH FOR TECHNICAL PURPOSES I', 'INTRODUCTION TO PSYCHOMETRIC STUDIES'];
      let H2tableValueCC_1 = ['MTH 321', 'EEC 433', 'CTE 410', 'CTE 411', 'CTE 412', 'CTE 414', 'CTE 413', 'CTE 415', 'EEE 316', 'GNS 417', 'GNS 106'];
      let H2tableValueCU_1 = [2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2];
      let H2P1 = document.createElement('p');
      H2P1.innerHTML = "<p>HND 2 First Semester</p>";
      H1tableBodyTarget_2.append(H2P1);
      let H2tableBodyTarget_1 = document.getElementById('tableBody');
      for (let i = 0; i < H2tableValueCC_1.length; i++) {
        H2tableBodyTarget_1.innerHTML += "<tr><td>" + (i + 1) + "</td><td class='H2examCode_1'>" + H2tableValueCC_1[i] + "</td><td class='H2examName_1'>" + H2tableValueCT_1[i] + "</td><td class='H2examUnit_1'>" + H2tableValueCU_1[i] + "</td><td><input type='number' class='H2examScore_1 form-control'/></td></tr>"
      }
      console.log(H2tableBodyTarget_1);
      let H2P2 = document.createElement('p');
      H2P2.innerHTML = "<p>HND 2 Second Semester</p>";
      H2tableBodyTarget_1.append(H2P2);
      // const H2target_2 = document.getElementById('H2tableArea_2');
      let H2tableValueCT_2 = ['STATISTICAL METHODS IN ENGINEERING', 'COMPUTER SYSTEMS MANAGEMENT', 'COMPUTER GRAPHICS AND ANIMATION', 'MICROPROCESSOR IN CONTROL & INSTRUMENTATION', 'ENTREPRENEURSHIP DEVELOPMENT II', 'INTRO TO AI & EXPERT SYSTEMS', 'SEMINAR', 'PROJECT', 'FRENCH FOR TECHNICAL PURPOSES II'];
      let H2tableValueCC_2 = ['STA 429', 'COM 416', 'COM 422', 'CTE 421', 'EED 413', 'COM 423', 'CTE 423', 'CTE 424', 'GNS 428']
      let H2tableValueCU_2 = [2, 2, 3, 3, 2, 3, 2, 4, 2];
      let H2tableBodyTarget_2 = document.getElementById('tableBody');
      for (let i = 0; i < H2tableValueCC_2.length; i++) {
        H2tableBodyTarget_2.innerHTML += "<tr><td>" + (i + 1) + "</td><td class='H2examCode_2'>" + H2tableValueCC_2[i] + "</td><td class='H2examName_2'>" + H2tableValueCT_2[i] + "</td><td class='H2examUnit_2'>" + H2tableValueCU_2[i] + "</td><td><input type='number' class='H2examScore_2 form-control'/></td></tr>"
      }
    });
}

  submitGrade() {
    // let semester = document.getElementById('semester');
    let matNo = document.getElementById('matricnumber');

    let H1examCodes_1 = document.getElementsByClassName('H1examCode_1');
    let H1examNames_1 = document.getElementsByClassName('H1examName_1');
    let H1examScores_1 = document.getElementsByClassName('H1examScore_1');
    let H1examUnits_1 = document.getElementsByClassName('H1examUnit_1');

    let H1examCodes_2 = document.getElementsByClassName('H1examCode_2');
    let H1examNames_2 = document.getElementsByClassName('H1examName_2');
    let H1examScores_2 = document.getElementsByClassName('H1examScore_2');
    let H1examUnits_2 = document.getElementsByClassName('H1examUnit_2');

    let H2examCodes_1 = document.getElementsByClassName('H2examCode_1');
    let H2examNames_1 = document.getElementsByClassName('H2examName_1');
    let H2examScores_1 = document.getElementsByClassName('H2examScore_1');
    let H2examUnits_1 = document.getElementsByClassName('H2examUnit_1');

    let H2examCodes_2 = document.getElementsByClassName('H2examCode_2');
    let H2examNames_2 = document.getElementsByClassName('H2examName_2');
    let H2examScores_2 = document.getElementsByClassName('H2examScore_2');
    let H2examUnits_2 = document.getElementsByClassName('H2examUnit_2');

    let matNoPattern = /\w{1}\/\w{3}\/\d{2}\/\d+/g;
    
    let H1totalQPArr_1 = [];
    let H1totalQP_1 = 0;
    let H1unitsArr_1 = [];
    let H1unitTotal_1 = 0;
    let H1grades_1 = [];

    let H1totalQPArr_2 = [];
    let H1totalQP_2 = 0;
    let H1unitsArr_2 = [];
    let H1unitTotal_2 = 0;
    let H1grades_2 = [];

    let H2totalQPArr_1 = [];
    let H2totalQP_1 = 0;
    let H2unitsArr_1 = [];
    let H2unitTotal_1 = 0;
    let H2grades_1 = [];

    let H2totalQPArr_2 = [];
    let H2totalQP_2 = 0;
    let H2unitsArr_2 = [];
    let H2unitTotal_2 = 0;
    let H2grades_2 = [];


    // if (semester.value === 'first-semester' || semester.value === 'second-semester') {
    if (matNoPattern.test(matNo.value)) {
      for (let i = 0; i < H1examScores_1.length; i++) {
        console.log(H1examScores_1);
        if (H1examScores_1[i].value == '') {
          console.log('Score field should not be left blank. Insert 0 if examScore is unavailable.');
          H1examScores_1[i].focus();
        }
        if (H1examScores_1[i].value > 100) {
          console.log('examScore should not exceed 100');
          H1examScores_1[i].focus();
          H1examScores_1[i].value = '';
        }
        if (H1examScores_1[i].value != '' && H1examScores_1[i].value > !100) {
          if (H1examScores_1[i].value >= 75) {
            let GP = 4.00;
            let grade = 'A';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else if (H1examScores_1[i].value >= 70) {
            let GP = 3.50;
            let grade = 'AB';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else if (H1examScores_1[i].value >= 65) {
            let GP = 3.25;
            let grade = 'B';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else if (H1examScores_1[i].value >= 60) {
            let GP = 3.00;
            let grade = 'BC';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else if (H1examScores_1[i].value >= 55) {
            let GP = 2.75;
            let grade = 'C';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else if (H1examScores_1[i].value >= 50) {
            let GP = 2.50;
            let grade = 'CD';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else if (H1examScores_1[i].value >= 45) {
            let GP = 2.25;
            let grade = 'D';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else if (H1examScores_1[i].value >= 40) {
            let GP = 2.00;
            let grade = 'E';
            let QP = parseInt(H1examUnits_1[i].innerHTML) * GP;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
          else {
            let grade = 'F';
            let QP = 0;
            H1totalQPArr_1.push(QP);
            H1grades_1.push(grade);
          }
        }
      }
      for (let i = 0; i < H1examScores_2.length; i++) {
        if (H1examScores_2[i].value == '') {
          console.log('Score field should not be left blank. Insert 0 if examScore is unavailable.');
          H1examScores_2[i].focus();
        }
        if (H1examScores_2[i].value > 100) {
          console.log('examScore should not exceed 100');
          H1examScores_2[i].focus();
          H1examScores_2[i].value = '';
        }
        if (H1examScores_2[i].value != '' && H1examScores_2[i].value > !100) {
          if (H1examScores_2[i].value >= 75) {
            let GP = 4.00;
            let grade = 'A';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else if (H1examScores_2[i].value >= 70) {
            let GP = 3.50;
            let grade = 'AB';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else if (H1examScores_2[i].value >= 65) {
            let GP = 3.25;
            let grade = 'B';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else if (H1examScores_2[i].value >= 60) {
            let GP = 3.00;
            let grade = 'BC';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else if (H1examScores_2[i].value >= 55) {
            let GP = 2.75;
            let grade = 'C';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else if (H1examScores_2[i].value >= 50) {
            let GP = 2.50;
            let grade = 'CD';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else if (H1examScores_2[i].value >= 45) {
            let GP = 2.25;
            let grade = 'D';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else if (H1examScores_2[i].value >= 40) {
            let GP = 2.00;
            let grade = 'E';
            let QP = parseInt(H1examUnits_2[i].innerHTML) * GP;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
          else {
            let grade = 'F';
            let QP = 0;
            H1totalQPArr_2.push(QP);
            H1grades_2.push(grade);
          }
        }
      }
      for (let i = 0; i < H2examScores_1.length; i++) {
        console.log('im here')
        if (H2examScores_1[i].value == '') {
          console.log('Score field should not be left blank. Insert 0 if examScore is unavailable.');
          H2examScores_1[i].focus();
        }
        if (H2examScores_1[i].value > 100) {
          console.log('examScore should not exceed 100');
          H2examScores_1[i].focus();
          H2examScores_1[i].value = '';
        }
        if (H2examScores_1[i].value != '' && H2examScores_1[i].value > !100) {
          if (H2examScores_1[i].value >= 75) {
            let GP = 4.00;
            let grade = 'A';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else if (H2examScores_1[i].value >= 70) {
            let GP = 3.50;
            let grade = 'AB';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else if (H2examScores_1[i].value >= 65) {
            let GP = 3.25;
            let grade = 'B';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else if (H2examScores_1[i].value >= 60) {
            let GP = 3.00;
            let grade = 'BC';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else if (H2examScores_1[i].value >= 55) {
            let GP = 2.75;
            let grade = 'C';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else if (H2examScores_1[i].value >= 50) {
            let GP = 2.50;
            let grade = 'CD';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else if (H2examScores_1[i].value >= 45) {
            let GP = 2.25;
            let grade = 'D';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else if (H2examScores_1[i].value >= 40) {
            let GP = 2.00;
            let grade = 'E';
            let QP = parseInt(H2examUnits_1[i].innerHTML) * GP;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
          else {
            let grade = 'F';
            let QP = 0;
            H2totalQPArr_1.push(QP);
            H2grades_1.push(grade);
          }
        }
      }
      for (let i = 0; i < H2examScores_2.length; i++) {
        if (H2examScores_2[i].value == '') {
          console.log('Score field should not be left blank. Insert 0 if examScore is unavailable.');
          H2examScores_2[i].focus();
        }
        if (H2examScores_2[i].value > 100) {
          console.log('examScore should not exceed 100');
          H2examScores_2[i].focus();
          H2examScores_2[i].value = '';
        }
        if (H2examScores_2[i].value != '' && H2examScores_2[i].value > !100) {
          if (H2examScores_2[i].value >= 75) {
            let GP = 4.00;
            let grade = 'A';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else if (H2examScores_2[i].value >= 70) {
            let GP = 3.50;
            let grade = 'AB';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else if (H2examScores_2[i].value >= 65) {
            let GP = 3.25;
            let grade = 'B';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else if (H2examScores_2[i].value >= 60) {
            let GP = 3.00;
            let grade = 'BC';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else if (H2examScores_2[i].value >= 55) {
            let GP = 2.75;
            let grade = 'C';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else if (H2examScores_2[i].value >= 50) {
            let GP = 2.50;
            let grade = 'CD';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else if (H2examScores_2[i].value >= 45) {
            let GP = 2.25;
            let grade = 'D';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else if (H2examScores_2[i].value >= 40) {
            let GP = 2.00;
            let grade = 'E';
            let QP = parseInt(H2examUnits_2[i].innerHTML) * GP;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
          else {
            let grade = 'F';
            let QP = 0;
            H2totalQPArr_2.push(QP);
            H2grades_2.push(grade);
          }
        }
      }

      if (H1totalQPArr_1.length === H1examScores_1.length && H1totalQPArr_2.length === H1examScores_2.length && H2totalQPArr_1.length === H2examScores_1.length && H2totalQPArr_2.length === H2examScores_2.length) {
        for (let j = 0; j < H1examUnits_1.length; j++) {
          H1unitsArr_1.push(H1examUnits_1[j].innerHTML);
        }
        for (let i = 0; i < H1unitsArr_1.length; i++) {
          H1unitTotal_1 += parseInt(H1unitsArr_1[i]);
          H1totalQP_1 += parseFloat(H1totalQPArr_1[i]);
        }
        for (let j = 0; j < H1examUnits_2.length; j++) {
          H1unitsArr_2.push(H1examUnits_2[j].innerHTML);
        }
        for (let i = 0; i < H1unitsArr_2.length; i++) {
          H1unitTotal_2 += parseInt(H1unitsArr_2[i]);
          H1totalQP_2 += parseFloat(H1totalQPArr_2[i]);
        }
        console.log(H1unitsArr_2.length, H1grades_2.length, H1totalQPArr_2.length);
        for (let j = 0; j < H2examUnits_1.length; j++) {
          H2unitsArr_1.push(H2examUnits_1[j].innerHTML);
        }
        for (let i = 0; i < H2unitsArr_1.length; i++) {
          H2unitTotal_1 += parseInt(H2unitsArr_1[i]);
          H2totalQP_1 += parseFloat(H2totalQPArr_1[i]);
        }
        for (let j = 0; j < H2examUnits_2.length; j++) {
          H2unitsArr_2.push(H2examUnits_2[j].innerHTML);
        }
        for (let i = 0; i < H2unitsArr_2.length; i++) {
          H2unitTotal_2 += parseInt(H2unitsArr_2[i]);
          H2totalQP_2 += parseFloat(H2totalQPArr_2[i]);
        }
        const H1GPA_1 = (H1totalQP_1 / H1unitTotal_1);
        const H1GPA_2 = (H1totalQP_2 / H1unitTotal_2);
        const H2GPA_1 = (H2totalQP_1 / H2unitTotal_1);
        const H2GPA_2 = (H2totalQP_2 / H2unitTotal_2);

        let  GPA = [H1GPA_1, H1GPA_2, H2GPA_1, H2GPA_2];
        let CGPA = 0;
        for (let index = 0; index < GPA.length; index++) {
          CGPA += GPA[index];
        }

        // console.log(H1totalQPArr_1, H1grades_1, H1unitTotal_1, "GPA = " + H1GPA_1);
        console.log(H1totalQPArr_2, H1grades_2, H1unitTotal_2, "GPA = " + H1GPA_2);
        console.log(H2totalQPArr_1, H2grades_1, H2unitTotal_1, "GPA = " + H2GPA_1);

        // console.log(H2totalQPArr_2, H2grades_2, H2unitTotal_2, "GPA = " + H2GPA_2);

        let popUpArea = document.getElementById('popUpArea');
        popUpArea.id = 'popUpAreaVisible';
        let H1popUpTableBody_1 = document.getElementById('H1popUpTableBody_1');
        let H1popUpTableBody_2 = document.getElementById('H1popUpTableBody_2');
        let H2popUpTableBody_1 = document.getElementById('H2popUpTableBody_1');
        let H2popUpTableBody_2 = document.getElementById('H2popUpTableBody_2');
        document.getElementById('studentDetail').innerHTML = "<p><span> THE FEDERAL POLYTECHNIC, ILARO, DEPARTMENT OF COMPUTER ENGINEERING. </span><br /> <span> Matric Number: " + document.getElementById('matricnumber').value.toUpperCase() + "</span><br />" + "<span id='CGPA'> Cummulative Grade Point Average (CGPA): " + String(CGPA/GPA.length).substring(0,4) + "</span></p>";
        for (let k = 0; k < H1unitsArr_1.length; k++) {
          H1popUpTableBody_1.innerHTML += "<tr><td>" + (k + 1) + "</td><td class='H1examCodePOP_1'>" + H1examCodes_1[k].innerHTML + "</td><td class='H1examNamePOP_1'>" + H1examNames_1[k].innerHTML + "</td><td class='H1examUnitPOP_1'>" + H1unitsArr_1[k] + "</td><td class='H1examGradePOP_1'>" + H1grades_1[k] + "</td></tr>";
        }
        for (let k = 0; k < H1unitsArr_2.length; k++) {
          H1popUpTableBody_2.innerHTML += "<tr><td>" + (k + 1) + "</td><td class='H1examCodePOP_2'>" + H1examCodes_2[k].innerHTML + "</td><td class='H1examNamePOP_2'>" + H1examNames_2[k].innerHTML + "</td><td class='H1examUnitPOP_2'>" + H1unitsArr_2[k] + "</td><td class='H1examGradePOP_2'>" + H1grades_2[k] + "</td></tr>";
        }
        for (let k = 0; k < H2unitsArr_1.length; k++) {
          H2popUpTableBody_1.innerHTML += "<tr><td>" + (k + 1) + "</td><td class='H2examCodePOP_1'>" + H2examCodes_1[k].innerHTML + "</td><td class='H2examNamePOP_1'>" + H2examNames_1[k].innerHTML + "</td><td class='H2examUnitPOP_1'>" + H2unitsArr_1[k] + "</td><td class='H2examGradePOP_1'>" + H2grades_1[k] + "</td></tr>";
        }
        for (let k = 0; k < H2unitsArr_2.length; k++) {
          H2popUpTableBody_2.innerHTML += "<tr><td>" + (k + 1) + "</td><td class='H2examCodePOP_2'>" + H2examCodes_2[k].innerHTML + "</td><td class='H2examNamePOP_2'>" + H2examNames_2[k].innerHTML + "</td><td class='H2examUnitPOP_2'>" + H2unitsArr_2[k] + "</td><td class='H2examGradePOP_2'>" + H2grades_2[k] + "</td></tr>";
        }
        for (let k = 0; k < document.getElementsByClassName('GPA').length; k++) {
          if (k === 0) {
            document.getElementsByClassName('GPA')[k].innerHTML = "<p> HND 1 First Semester GPA: " + "<span id='H1GPA_1'>" + String(GPA[k]).substring(0,4) + "</span></p>";
          }
          if (k === 1) {
            document.getElementsByClassName('GPA')[k].innerHTML = "<p> HND 1 Second Semester GPA: " + "<span id='H1GPA_2'>"  + String(GPA[k]).substring(0,4) + "</span></p>";
          }
          if (k === 2) {
            document.getElementsByClassName('GPA')[k].innerHTML = "<p> HND 2 First Semester GPA: " + "<span id='H2GPA_1'>"  + String(GPA[k]).substring(0,4) + "</span></p>";
          }
          if (k === 3) {
            document.getElementsByClassName('GPA')[k].innerHTML = "<p> HND 2 Second Semester GPA: " + "<span id='H2GPA_2'>"  + String(GPA[k]).substring(0,4) + "</span></p>";
          }
        }
        console.log(H1popUpTableBody_1, H1popUpTableBody_2, H2popUpTableBody_1, H2popUpTableBody_2);
        let hideButton = document.getElementById('submitButton');
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

  submitGrade2() {
    if (window.confirm("Are you sure all supplied data are correct? Continuing will cost gas fee and save data on the blockchain unrevocably.")) {
      console.log('Okay');
      let matricNo = document.getElementById('matricnumber').value;
      let CGPA = document.getElementById('CGPA').innerHTML;

      let H1GPA_1 = document.getElementById('H1GPA_1').innerHTML;
      let H1GPA_2 = document.getElementById('H1GPA_2').innerHTML;
      let H2GPA_1 = document.getElementById('H2GPA_1').innerHTML;
      let H2GPA_2 = document.getElementById('H2GPA_2').innerHTML;

      let H1examCodes_1 = document.getElementsByClassName('H1examCodePOP_1');
      let H1examNames_1 = document.getElementsByClassName('H1examNamePOP_1');
      let H1examUnits_1 = document.getElementsByClassName('H1examUnitPOP_1');
      let H1examGrades_1 = document.getElementsByClassName('H1examGradePOP_1');

      let H1examCodes_2 = document.getElementsByClassName('H1examCodePOP_2');
      let H1examNames_2 = document.getElementsByClassName('H1examNamePOP_2');
      let H1examUnits_2 = document.getElementsByClassName('H1examUnitPOP_2');
      let H1examGrades_2 = document.getElementsByClassName('H1examGradePOP_2');

      let H2examCodes_1 = document.getElementsByClassName('H2examCodePOP_1');
      let H2examNames_1 = document.getElementsByClassName('H2examNamePOP_1');
      let H2examUnits_1 = document.getElementsByClassName('H2examUnitPOP_1');
      let H2examGrades_1 = document.getElementsByClassName('H2examGradePOP_1');

      let H2examCodes_2 = document.getElementsByClassName('H2examCodePOP_2');
      let H2examNames_2 = document.getElementsByClassName('H2examNamePOP_2');
      let H2examUnits_2 = document.getElementsByClassName('H2examUnitPOP_2');
      let H2examGrades_2 = document.getElementsByClassName('H2examGradePOP_2');

      let H1examCode_1 = [];
      let H1examCode_2 = [];
      let H2examCode_1 = [];
      let H2examCode_2 = [];

      let H1examName_1 = [];
      let H1examName_2 = [];
      let H2examName_1 = [];
      let H2examName_2 = [];

      let H1examUnit_1 = [];
      let H1examUnit_2 = [];
      let H2examUnit_1 = [];
      let H2examUnit_2 = [];

      let H1examGrade_1 = [];
      let H1examGrade_2 = [];
      let H2examGrade_1 = [];
      let H2examGrade_2 = [];

      for (let i = 0; i < H1examNames_1.length; i++) {
        H1examCode_1.push(H1examCodes_1[i].innerHTML);
        H1examName_1.push(H1examNames_1[i].innerHTML);
        H1examUnit_1.push(parseInt(H1examUnits_1[i].innerHTML));
        H1examGrade_1.push(H1examGrades_1[i].innerHTML);
      }
      for (let i = 0; i < H1examNames_2.length; i++) {
        H1examCode_2.push(H1examCodes_2[i].innerHTML);
        H1examName_2.push(H1examNames_2[i].innerHTML);
        H1examUnit_2.push(parseInt(H1examUnits_2[i].innerHTML));
        H1examGrade_2.push(H1examGrades_2[i].innerHTML);
      }
      for (let i = 0; i < H1examNames_1.length; i++) {
        H2examCode_1.push(H2examCodes_1[i].innerHTML);
        H2examName_1.push(H2examNames_1[i].innerHTML);
        H2examUnit_1.push(parseInt(H2examUnits_1[i].innerHTML));
        H2examGrade_1.push(H2examGrades_1[i].innerHTML);
      }
      for (let i = 0; i < H2examNames_2.length; i++) {
        H2examCode_2.push(H2examCodes_2[i].innerHTML);
        H2examName_2.push(H2examNames_2[i].innerHTML);
        H2examUnit_2.push(parseInt(H2examUnits_2[i].innerHTML));
        H2examGrade_2.push(H2examGrades_2[i].innerHTML);
      }
      
      // console.log(H1examName_1);
      // console.log(H1GPA_1, H1examUnit_1);

      this.props.createTranscript(matricNo, CGPA, H1examCode_1, H1examUnit_1, H1examGrade_1, H1GPA_1, H1examCode_2, H1examUnit_2, H1examGrade_2, H1GPA_2, H2examCode_1, H2examUnit_1, H2examGrade_1, H2GPA_1, H2examCode_2, H2examUnit_2, H2examGrade_2, H2GPA_2);

    } else {
      console.log('Close');
    }
  }

  close() {
    document.getElementById('popUpAreaVisible').id = 'popUpArea';
    document.getElementById('submitButtonHide').id = 'submitButton';
    for (let i = 0; i < document.getElementsByClassName('popUpData').length; i++) {
      document.getElementsByClassName('popUpData')[i].innerHTML = '';
    }
    document.getElementById('studentDetail').innerHTML = '';
  }

  render() {
    return (
      <body className="container" onMouseEnter={this.hideButton}>
        {this.gradeTable()}
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
                    <Form.Select id="semester" size="md" onChange={this.gradeTable}>
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
          <section>
            <table id='H1popUpTableBody_1' className="popUpData table table-striped text-center">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th>UNITS</th>
                  <th>GRADE</th>
                </tr>
              </thead>
              <tbody className="popUpTableBody">

              </tbody>
            </table>
            <p className='popUpData GPA'></p>
            <table id='H1popUpTableBody_2' className="popUpData table table-striped text-center">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th>UNITS</th>
                  <th>GRADE</th>
                </tr>
              </thead>
              <tbody className="popUpTableBody">

              </tbody>
            </table>
            <p className='popUpData GPA'></p>
            <table id='H2popUpTableBody_1' className="popUpData table table-striped text-center">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th>UNITS</th>
                  <th>GRADE</th>
                </tr>
              </thead>
              <tbody className="popUpTableBody">

              </tbody>
            </table>
            <p className='popUpData GPA'></p>
            <table id='H2popUpTableBody_2' className="popUpData table table-striped text-center">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th>UNITS</th>
                  <th>GRADE</th>
                </tr>
              </thead>
              <tbody className="popUpTableBody">

              </tbody>
            </table>
            <p className='popUpData GPA'></p>
          </section>
          
          <Button id='submitButton2' variant='btn btn-danger' onClick={this.submitGrade2}> Save/Submit </Button>
          <Button id='close' variant='btn btn-primary' onClick={this.close}> Close </Button>
        </section>
      </body>

    )
  }
}

export default ExamsGrade;