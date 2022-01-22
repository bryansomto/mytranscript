// Version of Solidity compiler this program was written for
pragma solidity ^0.5.0;

pragma experimental ABIEncoderV2;


contract Transcript {
	// Create a state variable for the contract
	string public name;
	address payable public owner;

	uint public transcriptCount;
	mapping (string => Data1) private data1;
	mapping (string => Data2) private data2;
	// mapping (string => Request) requests;


	constructor() public {
		name = "HCTE II Transcript";
		owner = msg.sender;
	}

	// Product model; each newly placed product will follow this pattern
	struct Data1 {
		// uint id;
		address owner;
		string matricNo;
		string CGPA;
		string[] H1examCode_1;
		uint[] H1examUnit_1; 
		string[] H1examGrade_1; 
		string H1GPA_1;
		string[] H1examCode_2;
		uint[] H1examUnit_2; 
		string[] H1examGrade_2; 
		string H1GPA_2;
	}

	struct Data2 {
		// uint id;
		// address owner;
		string matricNo;
		// string CGPA;
		string[] H2examCode_1;
		uint[] H2examUnit_1; 
		string[] H2examGrade_1; 
		string H2GPA_1;
		string[] H2examCode_2;
		uint[] H2examUnit_2; 
		string[] H2examGrade_2; 
		string H2GPA_2;
	}

	event Entry1 (
		uint transcriptCount, address owner, string matricNo, string CGPA, string[] H1examCode_1, uint[] H1examUnit_1, string[] H1examGrade_1, string H1GPA_1, string[] H1examCode_2, uint[] H1examUnit_2, string[] H1examGrade_2, string H1GPA_2
	);
	event Entry2 (
		string matricNo, string[] H2examCode_1, uint[] H2examUnit_1, string[] H2examGrade_1, string H2GPA_1, string[] H2examCode_2, uint[] H2examUnit_2, string[] H2examGrade_2, string H2GPA_2
	);
	event View1 (
		uint transcriptCount, address owner, string matricNo, string CGPA, string[] H1examCode_1, uint[] H1examUnit_1, string[] H1examGrade_1, string H1GPA_1, string[] H1examCode_2, uint[] H1examUnit_2, string[] H1examGrade_2, string H1GPA_2
	);
	event View2 (
		string[] H2examCode_1, uint[] H2examUnit_1, string[] H2examGrade_1, string H2GPA_1, string[] H2examCode_2, uint[] H2examUnit_2, string[] H2examGrade_2, string H2GPA_2
	);

	function createTranscript1(string memory _matricNo, string memory _CGPA, string[] memory _H1examCode_1, uint[] memory _H1examUnit_1, string[] memory _H1examGrade_1, string memory _H1GPA_1, string[] memory _H1examCode_2, uint[] memory _H1examUnit_2, string[] memory _H1examGrade_2, string memory _H1GPA_2) public payable {
		address owner = msg.sender;
		transcriptCount++;
		data1[_matricNo] = Data1(owner, _matricNo, _CGPA, _H1examCode_1, _H1examUnit_1, _H1examGrade_1, _H1GPA_1, _H1examCode_2, _H1examUnit_2, _H1examGrade_2, _H1GPA_2);
		emit Entry1(transcriptCount, owner, _matricNo, _CGPA, _H1examCode_1, _H1examUnit_1, _H1examGrade_1, _H1GPA_1, _H1examCode_2, _H1examUnit_2, _H1examGrade_2, _H1GPA_2);
	}

	function createTranscript2(string memory _matricNo, string[] memory _H2examCode_1, uint[] memory _H2examUnit_1, string[] memory _H2examGrade_1, string memory _H2GPA_1, string[] memory _H2examCode_2, uint[] memory _H2examUnit_2, string[] memory _H2examGrade_2, string memory _H2GPA_2) public payable {
		data2[_matricNo] = Data2(_matricNo, _H2examCode_1, _H2examUnit_1, _H2examGrade_1, _H2GPA_1, _H2examCode_2, _H2examUnit_2, _H2examGrade_2, _H2GPA_2);
		emit Entry2(_matricNo, _H2examCode_1, _H2examUnit_1, _H2examGrade_1, _H2GPA_1, _H2examCode_2, _H2examUnit_2, _H2examGrade_2, _H2GPA_2);
	}

	function getUser1_1(string memory _matricNo) public view returns (string memory, string memory, string[] memory, uint[] memory, string[] memory, string memory) {
		// require(_matricNo == data1[_matricNo].matricNo);
		return (data1[_matricNo].matricNo, data1[_matricNo].CGPA, data1[_matricNo].H1examCode_1, data1[_matricNo].H1examUnit_1, data1[_matricNo].H1examGrade_1, data1[_matricNo].H1GPA_1);
	}
	function getUser1_2(string memory _matricNo) public view returns (string[] memory, uint[] memory, string[] memory, string memory) {
		// require(_matricNo == data1[_matricNo].matricNo);
		return (data1[_matricNo].H1examCode_2, data1[_matricNo].H1examUnit_2, data1[_matricNo].H1examGrade_2, data1[_matricNo].H1GPA_2);
	}
	function getUser2_1(string memory _matricNo) public view returns (string[] memory, uint[] memory, string[] memory, string memory) {
		// require(_matricNo == data2[_matricNo].matricNo);
		return (data2[_matricNo].H2examCode_1, data2[_matricNo].H2examUnit_1, data2[_matricNo].H2examGrade_1, data2[_matricNo].H2GPA_1);
	}
	function getUser2_2(string memory _matricNo) public view returns (string[] memory, uint[] memory, string[] memory, string memory) {
		// require(_matricNo == data2[_matricNo].matricNo);
		return (data2[_matricNo].H2examCode_2, data2[_matricNo].H2examUnit_2, data2[_matricNo].H2examGrade_2, data2[_matricNo].H2GPA_2);
	}

	function viewTranscript(string memory _matricNo) public payable {
		require(bytes(_matricNo).length > 0);
		address requestor = msg.sender;
		getUser1_1(_matricNo);
		getUser1_2(_matricNo);
		getUser2_1(_matricNo);
		getUser2_2(_matricNo);
		emit View1(transcriptCount, requestor, data1[_matricNo].matricNo, data1[_matricNo].CGPA, data1[_matricNo].H1examCode_1, data1[_matricNo].H1examUnit_1, data1[_matricNo].H1examGrade_1, data1[_matricNo].H1GPA_1, data1[_matricNo].H1examCode_2, data1[_matricNo].H1examUnit_2, data1[_matricNo].H1examGrade_2, data1[_matricNo].H1GPA_2);
		emit View2(data2[_matricNo].H2examCode_1, data2[_matricNo].H2examUnit_1, data2[_matricNo].H2examGrade_1, data2[_matricNo].H2GPA_1, data2[_matricNo].H2examCode_2, data2[_matricNo].H2examUnit_2, data2[_matricNo].H2examGrade_2, data2[_matricNo].H2GPA_2);
	}

	// function requestTranscript()
}