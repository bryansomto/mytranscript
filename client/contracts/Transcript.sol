// Version of Solidity compiler this program was written for
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Transcript {
	// Create a state variable for the contract
	string public name;
	address payable public owner;

	uint public transcriptCount = 0;
	mapping (string => Result) private results;
	// mapping (uint => Result) public results;
	mapping (string => Request) requests;

	uint totalQP;

	constructor() public {
		name = "HCTE II Transcript";
		owner = msg.sender;
	}

	// Product model; each newly placed product will follow this pattern
	struct Result {
		uint id;
		address owner;
		string matricNo;
		string[] examName;
		uint[] examUnit;
		string[] examGrade;
	}

	struct Request {
		string name;
		string matricNo;
	}

	event Transfer (
		address indexed _from, address indexed _to, uint _value
	);
	
	event Entry (
		uint transcriptCount, address owner, string matricNo, string[] examName, uint[] examUnit, string[] examGrade
	);

	event View (
		uint transcriptCount, address owner, string matricNo, string[] examName, uint[] examUnit, string[] examGrade
	);

	function createTranscript(string memory _matricNo, string[] memory _examName, uint[] memory _examUnit, string[] memory _examGrade) public payable {
		address creator = msg.sender;
		// Require a valid name
		require(bytes(_matricNo).length > 0);
		transcriptCount++;
		results[_matricNo] = Result(transcriptCount, creator,  _matricNo, _examName, _examUnit, _examGrade);
		emit Entry(transcriptCount, creator,  _matricNo, _examName, _examUnit, _examGrade);
	}

	function getUser(string memory _matricNo) public payable returns (string memory, string[] memory, uint[] memory, string[] memory) {
		return (results[_matricNo].matricNo, results[_matricNo].examName, results[_matricNo].examUnit, results[_matricNo].examGrade);
	}

	function viewTranscript(string memory _matricNo) public payable {
		require(bytes(_matricNo).length > 0);
		// sendEth();
		address requestor = msg.sender;
		getUser(_matricNo);
		emit View(transcriptCount, requestor, results[_matricNo].matricNo, results[_matricNo].examName, results[_matricNo].examUnit, results[_matricNo].examGrade);
	}

	function createRequest (string memory _name, string memory _matricNo) public payable returns (string memory) {
		require(bytes(_matricNo).length > 0);
		requests[_matricNo] = Request(_name, _matricNo);
		return ("Your request was sent successfuly");
	}

	function viewRequest (string memory _matricNo) public payable returns (string memory) {
		require(bytes(_matricNo).length > 0);
		return (requests[_matricNo].name);
	}

	function sendEth() public payable returns (bool sufficient) {
		address payable caller = msg.sender;
		uint amount = 1 ether;
		require (caller.balance >= amount);
		caller.transfer(amount);
		emit Transfer(caller, owner, amount);
		withdraw();
		return true;
	}

	function () external payable {}

	function withdraw() public payable {
		require(msg.sender == owner);
		owner.transfer(address(this).balance);
	}
}