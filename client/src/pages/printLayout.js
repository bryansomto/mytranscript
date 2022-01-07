import React, { Component } from 'react';
import Lecturer from "./lecturer";
// import { Form, Button, Row, Col } from 'react-bootstrap';

class PrintLayout extends Component {
    // async componentDidMount() {
    //     window.addEventListener('load', this.props.layout);
    // }

    constructor(props) {
        super(props);
        // this.layout = this.layout.bind(this);
    }

    // layout() {
    //     // window.addEventListener('load', async () => {
    //     //     console.log("layout");
    //         // console.log(this.props.layout)
    //         // for (var k = 0; k < courses.length; k++) {
    //         //     layoutTable.innerHTML += "<tr><td>" + (k + 1) + "</td><td class='examCode'>" + courses[k].innerHTML + "</td><td class='courseTitle'>" + courseTitle[k].innerHTML + "</td><td>" + unitsArr[k] + "</td><td class='grade'>" + grades[k] + "</td></tr>";
    //         // }
    //     // });
    //     // this.props.layout();
    // }

    

    render () {
        
        return (
            <body>
                {window.addEventListener('load', this.props.layout())}
                <section id='layoutArea' className='col-md-8 m-auto'>
                    <p id='studentDetail'></p>
                    <table id='layoutTable' className="table table-striped text-center">
                        <thead>
                        <tr>
                            <th>SN</th>
                            <th>COURSE CODE</th>
                            <th>COURSE TITLE</th>
                            <th>UNITS</th>
                            <th>GRADE</th>
                        </tr>
                        </thead>
                        <tbody id="layoutTableBody">

                        </tbody>
                    </table>
                </section>
            </body>
        );
    }
}

export default PrintLayout;