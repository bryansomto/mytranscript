const Transcript = artifacts.require("./Transcript.sol");
require('../client/node_modules/chai')
	.use(require('../client/node_modules/chai-as-promised'))
	.should()

contract('Transcript', (accounts) => {
	let transcript

	before(async () => {
		transcript = await Transcript.deployed()
	})

	describe('deployment', async () => {

		
		it('deploys successfully', async () => {
			let address = await transcript.address
			assert.notEqual(address, 0x0)
			assert.notEqual(address, '')
			assert.notEqual(address, null)
			assert.notEqual(address, undefined)
		})

		it('has a name and owner', async () => {
			let name = await transcript.name()
			let owner = await transcript.owner()
			assert.equal(name, "HCTE II Transcript")
			assert.equal(owner, "0x2894C27b16CCaE4547099B8AD48A13F5474F0100")
		})
	})

	describe('transcript', async () => {

		before(async () => {
			entry = await transcript.createTranscript('h/cte/19/0554', ['CTE 413', 'EEC 312'], [2,3], ['A','B'])
			transcriptCount = await transcript.transcriptCount()
		})

		it ('creates transcript', async () => {
			assert.equal(transcriptCount, 1)
			console.log(entry.logs)
			let event = entry.logs[0].args
			assert.equal(event.examName[0], 'CTE 413', 'Course code is correct')
		})


		it ('requests transcript', async () => {
			request = await transcript.requestTranscript('h/cte/19/0554')
			// assert.equal(transcriptCount, 1)
			console.log(request.logs)
		})

		it('gets balance', async () => {
			let balance = await web3.eth.getBalance(transcript.address)
			console.log('deployed address: ' + transcript.address)
			console.log('address balance: ' + balance)
		})

	})

 })

 // describe('transcript', async () => {
	// 	let send, oldBalance, newBalance, receiver
	// 	receiver = await web3.eth.getAccounts()
	// 	oldBalance = await web3.eth.getBalance(owner)
	// 	//  oldBalance = new web3.utils.BN(owner)

	// 	before(async () => {
	// 		send = await coin.send(web3.utils.toChecksumAddress(receiver[2]), web3.utils.toWei('5', 'Ether'))
	// 	})

	// 	it('sent successfully', async () => {
	// 		newBalance = await web3.eth.getBalance(seller)
	// 		assert.notEqual(newBalance, oldBalance)
	// 	})

	// 	// before(async () => {
	// 	// 	result = await coin.createTranscript('h/cte/19/0554', ['CTE 413', 'EEC 312'], [2,3], ['A','B'])
	// 	// 	transcriptCount = await coin.transcriptCount()
	// 	//  result2 = await coin.requestTranscript('h/cte/19/0554',  ['CTE 413', 'EEC 312'], [2,3], ['A','B'])
	// 	// })

	// 	// it ('Successfully saved', async () => {
	// 	//    // console.log(result.logs)
	// 	//    assert.equal(transcriptCount, 1)
	// 	//    const event = result.logs[0].args
	// 	//    assert.equal(event.matricNo, 'h/cte/19/0554', 'Matric number is correct')
	// 	//    assert.equal(event.id.toNumber(), transcriptCount.toNumber(), 'id is correct')
	// 	//    assert.equal(event.examName[0], 'CTE 413', 'Course code is correct')
	// 	//    assert.equal(event.examUnit[0], 2, 'Course unit is correct')
	// 	//    assert.equal(event.examGrade[0], 'A', 'Course grade is correct')
	// 	// })

	// 	// it ('Successfully requests', async () => {
	// 	//    console.log(result2.logs)
	// 	//    // const event2 = result2.logs[0].args
	// 	//    // assert.equal(event2.matricNo, event.matricNo, 'Matric number is correct')
	// 	//    // assert.equal(event2.examName[0], event.examName[0], 'Course code is correct')
	// 	//    // assert.equal(event2.examUnit[0], event.examUnit[0], 'Course unit is correct')
	// 	//    // assert.equal(event2.examGrade[0], event.examGrade[0], 'Course grade is correct')

	// 	// })

	// })

// })

// 		it('creates products', async () => {
// 			//SUCCESS
// 			assert.equal(productCount, 1)
// 			//console.log(result.logs)
// 			const event = result.logs[0].args
// 			assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
// 			assert.equal(event.name, 'iPhone X', 'name is correct')
// 			assert.equal(event.price, '1000000000000000000', 'price is correct')
// 			assert.equal(event.owner, seller, ' is correct')
// 			assert.equal(event.purchased, false, 'purchased is correct')

//            //FAILURE: Product must have a name
//            await await coin.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
//            //FAILURE: Product must have a price
//            await await coin.createProduct('iPhone X', 0, { from: seller }).should.be.rejected;
// 		})

//        it('lists products', async () => {
//            const product = await coin.products(productCount)
//            assert.equal(product.id.toNumber(), productCount.toNumber(), 'id is correct')
//            assert.equal(product.name, 'iPhone X', 'name is correct')
//            assert.equal(product.price, '1000000000000000000', 'price is correct')
//            assert.equal(product.owner, seller, ' is correct')
//            assert.equal(product.purchased, false, 'purchased is correct')
//        })

//        it('sells products', async () => {
//            // Track the seller balance before purchase
//            let oldSellerBalance
//            oldSellerBalance = await web3.eth.getBalance(seller)
//            oldSellerBalance = new web3.utils.BN(oldSellerBalance)

//            // SUCCESS: Buyer makes purchase
//            result = await coin.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})

//            // Check logs
//            const event = result.logs[0].args
//            assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
//            assert.equal(event.name, 'iPhone X', 'name is correct')
//            assert.equal(event.price, '1000000000000000000', 'price is correct')
//            assert.equal(event.owner, buyer, ' is correct')
//            assert.equal(event.purchased, true, 'purchased is correct')

//            // Check that seller received funds
//            let newSellerBalance
//            newSellerBalance = await web3.eth.getBalance(seller)
//            newSellerBalance = new web3.utils.BN(newSellerBalance)

//            let price
//            price = web3.utils.toWei('1', 'Ether')
//            price = new web3.utils.BN(price)

//            const expectedBalance = oldSellerBalance.add(price)

//            assert.equal(newSellerBalance.toString(), expectedBalance.toString())

//            // FAILURE: Tries to buy a product that does not exit, i.e., product must have a valid id
//            await coin.purchaseProduct(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
//            // FAILURE: Buyer tries to buy with not enough ether
//            await coin.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('0.5', 'Ether')}).should.be.rejected;
//            // FAILURE: Deployer tries to buy the product, i.e., product can't be purchased twice
//            await coin.purchaseProduct(productCount, { from: deployer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
//            // FAILURE: Buyer tries to buy again, i.e., buyer can't be the seller
//            await coin.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
//        })