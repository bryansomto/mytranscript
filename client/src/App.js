import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Web3 from "web3";
import NavBar from "./Navbar"
import Transcript from "./build/contracts/Transcript.json";
import Login from "./pages/login";
import CreateAccount from "./pages/createAccount";
import Lecturer from "./pages/lecturer";
import GradeScheme from "./pages/gradeScheme";
import ExamsGrade from "./pages/examsGrade";
import ViewTranscript from "./pages/viewTranscript";
import Student from "./pages/student";
import EmployerRequest from "./pages/employerRequest";
import Employer from "./pages/employer";

class App extends Component {

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    window.addEventListener('load', async () => {
      //Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      }
      //Legacy dapp browsers...
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      }
      //Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    });
  }
  

  async loadBlockchainData() {
    const web3 = new Web3(window.web3);
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    // console.log(Transcript.abi, Transcript.networks[5777].address);
    const networkId = await web3.eth.net.getId();
    const networkData = Transcript.networks[networkId];
    if (networkData) {
      const transcript = new web3.eth.Contract(Transcript.abi, networkData.address);
      // console.log(Transcript.abi);
      this.setState({ transcript });
      const transcriptCount = await transcript.methods.transcriptCount().call();
      this.setState({ transcriptCount });
      console.log(transcriptCount);
      this.setState({ loading: false })
    } else {
      window.alert('Transcript not deployed to the network.');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      transcriptCount: 0,
      matricNo: '',
      gpa: '',
      examName: [],
      examUnit: [],
      examGrade: [],
      data1: [],
      data2: [],
      loading: true
    }
    this.createTranscript = this.createTranscript.bind(this);
    this.viewTranscript = this.viewTranscript.bind(this);
  }

  async createTranscript(matricNo, CGPA, H1examCode_1, H1examUnit_1, H1examGrade_1, H1GPA_1, H1examCode_2, H1examUnit_2, H1examGrade_2, H1GPA_2, H2examCode_1, H2examUnit_1, H2examGrade_1, H2GPA_1, H2examCode_2, H2examUnit_2, H2examGrade_2, H2GPA_2) {
    this.setState({ loading: true });
    this.state.transcript.methods.createTranscript1(matricNo, CGPA, H1examCode_1, H1examUnit_1, H1examGrade_1, H1GPA_1, H1examCode_2, H1examUnit_2, H1examGrade_2, H1GPA_2).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ data1: receipt});
    });
    this.state.transcript.methods.createTranscript2(matricNo, H2examCode_1, H2examUnit_1, H2examGrade_1, H2GPA_1, H2examCode_2, H2examUnit_2, H2examGrade_2, H2GPA_2).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ data2: receipt});
      // console.log(this.state.data1, this.state.data2);
      let result1 = this.state.data1.events.Entry1.returnValues;
      let result2 = this.state.data2.events.Entry2.returnValues;
      console.log(result1.CGPA, result2.H2examCode_1);
      this.setState({ loading: false});
    });
  }

  viewTranscript(matricNo) {
    // console.log( this.state.transcript.methods.getUser(matricNo));
    this.setState({ loading: true });
    this.state.transcript.methods.viewTranscript(matricNo).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false });
      console.log(receipt);
      
      let popUpArea = document.getElementById('popUpArea');
	  	popUpArea.id = 'popUpAreaVisible';
      popUpArea.setAttribute("class", "");
	  	let popUpTable = document.getElementsByClassName('layoutTableBody');

      let events1 = receipt.events.View1.returnValues;
      let events2 = receipt.events.View2.returnValues;

      let matNo = events1.matricNo;
      let CGPA = events1.CGPA;
      let H1examCode_1 = events1.H1examCode_1;
      let H1examUnit_1 = events1.H1examUnit_1;
      let H1examGrade_1 = events1.H1examGrade_1;
      let H1GPA_1 = events1.H1GPA_1;
      let H1examCode_2 = events1.H1examCode_2;
      let H1examUnit_2 = events1.H1examUnit_2;
      let H1examGrade_2 = events1.H1examGrade_2;
      let H1GPA_2 = events1.H1GPA_2;
      let H2examCode_1 = events2.H2examCode_1;
      let H2examUnit_1 = events2.H2examUnit_1;
      let H2examGrade_1 = events2.H2examGrade_1;
      let H2GPA_1 = events2.H2GPA_1;
      let H2examCode_2 = events2.H2examCode_2;
      let H2examUnit_2 = events2.H2examUnit_2;
      let H2examGrade_2 = events2.H2examGrade_2;
      let H2GPA_2 = events2.H2GPA_2;
      
      document.getElementById('studentDetail').innerHTML = "<p> <span> Matric Number: " + matNo + "</span><br />" + "<span id='cgpa'>" + CGPA + "</span></p>";
      for (let k = 0; k < H1examUnit_1.length; k++) {
        popUpTable[0].innerHTML += "<tr><td>" + (k + 1) + "</td><td class='examCodePOP'>" + H1examCode_1[k] +  "</td><td class='examUnitPOP'>" + H1examUnit_1[k] + "</td><td class='examGradePOP'>" + H1examGrade_1[k] + "</td></tr>";
      }
      for (let k = 0; k < H1examUnit_2.length; k++) {
        popUpTable[1].innerHTML += "<tr><td>" + (k + 1) + "</td><td class='examCodePOP'>" + H1examCode_2[k] +  "</td><td class='examUnitPOP'>" + H1examUnit_2[k] + "</td><td class='examGradePOP'>" + H1examGrade_2[k] + "</td></tr>";
      }
      for (let k = 0; k < H2examUnit_1.length; k++) {
        popUpTable[2].innerHTML += "<tr><td>" + (k + 1) + "</td><td class='examCodePOP'>" + H2examCode_1[k] +  "</td><td class='examUnitPOP'>" + H2examUnit_1[k] + "</td><td class='examGradePOP'>" + H2examGrade_1[k] + "</td></tr>";
      }
      for (let k = 0; k < H2examUnit_2.length; k++) {
        popUpTable[3].innerHTML += "<tr><td>" + (k + 1) + "</td><td class='examCodePOP'>" + H2examCode_2[k] +  "</td><td class='examUnitPOP'>" + H2examUnit_2[k] + "</td><td class='examGradePOP'>" + H2examGrade_2[k] + "</td></tr>";
      }

      document.getElementById('H1GPA_1').innerHTML = H1GPA_1;
      document.getElementById('H1GPA_2').innerHTML = H1GPA_2;
      document.getElementById('H2GPA_2').innerHTML = H2GPA_2;
      document.getElementById('H2GPA_1').innerHTML = H2GPA_1;
      
    });
  }

  render() {
    
    return (
      <body>
        <Router>
          <NavBar account = {this.state.account}/>
            <Route exact path="mytranscript/">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Login />}
            </Route>
            <Route exact path="mytranscript/createaccount">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <CreateAccount />}
            </Route>
            <Route exact path="mytranscript/lecturer">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Lecturer />}
            </Route>
            <Route exact path="mytranscript/lecturer/gradeScheme">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <GradeScheme />}
            </Route>
            <Route exact path="mytranscript/lecturer/examsGrade">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ExamsGrade createTranscript={this.createTranscript}/>}
            </Route>
            <Route exact path="mytranscript/lecturer/viewTranscript">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ViewTranscript viewTranscript={this.viewTranscript} />}
            </Route>
            <Route exact path="mytranscript/student">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Student />}
            </Route>
            <Route exact path="mytranscript/student/viewTranscript">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ViewTranscript viewTranscript={this.viewTranscript}  />}
            </Route>
            <Route exact path="mytranscript/student/employerRequest">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ViewTranscript />}
            </Route>
            <Route exact path="mytranscript/employer">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Employer />}
            </Route>
        </Router>
       </body>
    )
  }
}

export default App;
