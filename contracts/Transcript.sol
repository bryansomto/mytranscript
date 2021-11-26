// Version of Solidity compiler this program was written for
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Transcript {
	// Create a state variable for the contract
	string public name;

	uint public transcriptCount = 0;
	mapping(string => Result) results;

	uint totalQP;
	address owner;

	constructor() public {
		name = "HCTE II Transcript";
		owner = msg.sender;
	}

	// Product model; each newly placed product will follow this pattern
	struct Result {
		uint id;
		string matricNo;
		string[] examName;
		uint[] examUnit;
		string[] examGrade;
	}

	event TranscriptCreated (
		uint id,
		string matricNo,
		string[] examName,
		uint[] examUnit,
		string[] examGrade
	);

	event TranscriptRequested (
		uint id,
		string matricNo,
		string[] examName,
		uint[] examUnit,
		string[] examGrade
	);


	function createTranscript(string memory _matricNo, string[] memory _examName, uint[] memory _examUnit, string[] memory _examGrade) public {
		// Require a valid name
		require(bytes(_matricNo).length > 0);
		transcriptCount++;
		results[_matricNo] = Result(transcriptCount, _matricNo, _examName, _examUnit, _examGrade);
		emit TranscriptCreated(transcriptCount, _matricNo, _examName, _examUnit, _examGrade);
	}

	function requestTranscript(string memory _matricNo, string[] memory _examName, uint[] memory _examUnit, string[] memory _examGrade) public payable returns(string memory, string[] memory, uint[] memory, string[] memory) {
		require(bytes(_matricNo).length > 0);
		return (results[_matricNo].matricNo, results[_matricNo].examName, results[_matricNo].examUnit, results[_matricNo].examGrade);
		emit TranscriptRequested(transcriptCount, _matricNo, _examName, _examUnit, _examGrade);
	}
}
