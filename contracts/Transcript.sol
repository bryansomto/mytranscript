// Version of Solidity compiler this program was written for
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Transcript {
	// Create a state variable for the contract
	string public name;
	address payable public owner;

	uint public transcriptCount = 0;
	mapping(string => Result) results;
	mapping (address => uint) balances;

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

	event Transfer (
		address indexed _from, address indexed _to, uint _value
	);
	
	event Entry (
		uint transcriptCount, address owner, string matricNo, string[] examName, uint[] examUnit, string[] examGrade
	);

	event Request (
		uint transcriptCount, address owner, string matricNo, string[] examName, uint[] examUnit, string[] examGrade
	);

	function createTranscript(string memory _matricNo, string[] memory _examName, uint[] memory _examUnit, string[] memory _examGrade) public payable {
		address creator = msg.sender;
		// Require a valid name
		require(bytes(_matricNo).length > 0);
		transcriptCount++;
		results[_matricNo] = Result(transcriptCount, owner,  _matricNo, _examName, _examUnit, _examGrade);
		emit Entry(transcriptCount, creator,  _matricNo, _examName, _examUnit, _examGrade);
	}

	function requestTranscript(string memory _matricNo) public payable returns (string memory, string[] memory, uint[] memory, string[] memory){
		sendEth();
		address requestor = msg.sender;
		return (results[_matricNo].matricNo, results[_matricNo].examName, results[_matricNo].examUnit, results[_matricNo].examGrade);
		emit Request(transcriptCount, requestor, results[_matricNo].matricNo, results[_matricNo].examName, results[_matricNo].examUnit, results[_matricNo].examGrade);
	}

	function sendEth() public payable returns (bool sufficient) {
		address payable caller = msg.sender;
		uint amount = 1 ether;
		if (balances[caller] < amount) return false;
		caller.transfer(amount);
		emit Transfer(caller, owner, amount);
		return true;
	}

	function () external payable {}

	function withdraw() public payable {
		require(msg.sender == owner);
		msg.sender.transfer(address(this).balance);
	}
}