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

	// function createProduct(string memory _name, uint _price) public {
	// 	// Require a valid name
	// 	require(bytes(_name).length > 0);
	// 	// Require a valid price
	// 	require(_price > 0);
	// 	// Make sure parameters are correct
	// 	// Increment product count
	// 	productCount ++;
	// 	// Create the product
	// 	products[productCount] = Product(productCount, _name, _price, msg.sender, false);
	// 	// Trigger an event
	// 	emit ProductCreated(productCount, _name, _price, msg.sender, false);
	// }

	// function purchaseProduct(uint _id) public payable {
	// 	// Fetch the product
	// 	Product memory _product = products[_id];
	// 	// Fetch the owner
	// 	address payable _seller = _product.owner;
	// 	// Make sure the product has valid id
	// 	require(_product.id > 0 && _product.id <= productCount);
	// 	// Require that there is enough ether in the transaction
	// 	require(msg.value >= _product.price);
	// 	// Require that the product has not been purchased already
	// 	require(!_product.purchased);
	// 	//require the buyer is not the seller
	// 	require(_seller != msg.sender);
	// 	// Transfer ownership to the buyer
	// 	_product.owner = msg.sender;
	// 	// Mark as purchased
	// 	_product.purchased = true;
	// 	// Update the product
	// 	products[_id] = _product;
	// 	// Pay the seller by sending them Ether
	// 	address(_seller).transfer(msg.value);
	// 	// Trigger an event
	// 	emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);
	// }
}