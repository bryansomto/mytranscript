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
 			const address = await transcript.address
 			assert.notEqual(address, 0x0)
 			assert.notEqual(address, '')
 			assert.notEqual(address, null)
 			assert.notEqual(address, undefined)
 		})

 		it('has a name', async () => {
 			const name = await transcript.name()
 			assert.equal(name, 'HCTE II Transcript')

 		})
 	})

 	describe('transcript', async () => {
 		let result, transcriptCount, result2

 		before(async () => {
 			result = await transcript.createTranscript('h/cte/19/0554', ['CTE 413', 'EEC 312'], [2,3], ['A','B'])
 			transcriptCount = await transcript.transcriptCount()
         result2 = await transcript.requestTranscript('h/cte/19/0554',  ['CTE 413', 'EEC 312'], [2,3], ['A','B'])
 		})

            it ('Successfully saved', async () => {
               // console.log(result.logs)
               assert.equal(transcriptCount, 1)
               const event = result.logs[0].args
               assert.equal(event.matricNo, 'h/cte/19/0554', 'Matric number is correct')
               assert.equal(event.id.toNumber(), transcriptCount.toNumber(), 'id is correct')
               assert.equal(event.examName[0], 'CTE 413', 'Course code is correct')
               assert.equal(event.examUnit[0], 2, 'Course unit is correct')
               assert.equal(event.examGrade[0], 'A', 'Course grade is correct')
            })

            it ('Successfully requests', async () => {
               console.log(result2.logs)
               // const event2 = result2.logs[0].args
               // assert.equal(event2.matricNo, event.matricNo, 'Matric number is correct')
               // assert.equal(event2.examName[0], event.examName[0], 'Course code is correct')
               // assert.equal(event2.examUnit[0], event.examUnit[0], 'Course unit is correct')
               // assert.equal(event2.examGrade[0], event.examGrade[0], 'Course grade is correct')

            })

    })

})

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
 //            await await transcript.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
 //            //FAILURE: Product must have a price
 //            await await transcript.createProduct('iPhone X', 0, { from: seller }).should.be.rejected;
 // 		})
 	
 //        it('lists products', async () => {
 //            const product = await transcript.products(productCount)
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
 //            result = await transcript.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})
            
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
 //            await transcript.purchaseProduct(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
 //            // FAILURE: Buyer tries to buy with not enough ether
 //            await transcript.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('0.5', 'Ether')}).should.be.rejected;
 //            // FAILURE: Deployer tries to buy the product, i.e., product can't be purchased twice
 //            await transcript.purchaseProduct(productCount, { from: deployer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
 //            // FAILURE: Buyer tries to buy again, i.e., buyer can't be the seller
 //            await transcript.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
 //        })
 //    })
 // })