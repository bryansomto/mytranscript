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