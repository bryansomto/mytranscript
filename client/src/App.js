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
      loading: true
    }
    this.createTranscript = this.createTranscript.bind(this);
    this.viewTranscript = this.viewTranscript.bind(this);
  }

  createTranscript(matricNo, gpa, examCode, examName, examUnit, examGrade) {
    this.setState({ loading: true });
    this.state.transcript.methods.createTranscript(matricNo, gpa, examCode, examName, examUnit, examGrade).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false});
    });
  }

  viewTranscript(matricNo) {
    // console.log( this.state.transcript.methods.getUser(matricNo));
    this.setState({ loading: true });
    this.state.transcript.methods.viewTranscript(matricNo).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
      let events = receipt.events.View.returnValues;
      let matNo = events.matricNo;
      let gpa = events.gpa;
      let examCode = events.examCode
      let examName = events.examName;
      let examUnit = events.examUnit;
      let examGrade = events.examGrade;
      this.setState({ matricNo: matNo, gpa: gpa, examCode: examCode, examName: examName, examUnit: examUnit, examGrade: examGrade, });
      // console.log(this.state);
    });
  }

  render() {
    
    return (
      <body>
        <Router>
          <NavBar account = {this.state.account}/>
            <Route exact path="/">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Login />}
            </Route>
            <Route exact path="/createaccount">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <CreateAccount />}
            </Route>
            <Route exact path="/lecturer">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Lecturer />}
            </Route>
            <Route exact path="/lecturer/gradeScheme">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <GradeScheme />}
            </Route>
            <Route exact path="/lecturer/examsGrade">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ExamsGrade createTranscript={this.createTranscript}/>}
            </Route>
            <Route exact path="/lecturer/viewTranscript">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ViewTranscript viewTranscript={this.viewTranscript} matricNo={this.state.matricNo} gpa={this.state.gpa} examCode={this.state.examCode}  examName={this.state.examName} examUnit={this.state.examUnit} examGrade={this.state.examGrade} />}
            </Route>
            <Route exact path="/student">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Student />}
            </Route>
            <Route exact path="/student/viewTranscript">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ViewTranscript viewTranscript={this.viewTranscript} matricNo={this.state.matricNo} gpa={this.state.gpa} examCode={this.state.examCode} examName={this.state.examName} examUnit={this.state.examUnit} examGrade={this.state.examGrade} />}
            </Route>
            <Route exact path="/student/employerRequest">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <ViewTranscript />}
            </Route>
            <Route exact path="/employer">
              {this.state.loading ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> : <Employer />}
            </Route>
        </Router>
       </body>
    )
  }
}

export default App;
