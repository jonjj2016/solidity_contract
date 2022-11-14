const assert = require('assert')
const ganache = require('ganache')
const Web3 = require('web3')
const fs = require('fs')

const web3 = new Web3(ganache.provider())

const abi = fs.readFileSync('./contracts_Inbox_sol_Inbox.abi', 'utf-8')
const biteCode = fs.readFileSync('./contracts_Inbox_sol_Inbox.bin', 'utf-8')

let accounts
let inbox
beforeEach(async () => {
  // Get a list of all accounts
  // use one of those accounts to deploy the contract
  accounts = await web3.eth.getAccounts()

  inbox = await new web3.eth.Contract(JSON.parse(abi))
    .deploy({
      data: biteCode,
      arguments: ['Yooo initial'],
    })
    .send({ from: accounts[0], gas: '1000000' })
})

describe('Inbox Contract test', () => {
  it('deploying contract', () => {
    assert.ok(inbox.options.address)
  })
  it('making initialization by providing default value for message', async () => {
    const defaultMessage = await inbox.methods.message().call()
    console.log('cdkjsdkchdbs jhvdscb kshdvc', defaultMessage)
    assert.equal(defaultMessage, 'Yooo initial')
  })
  it('making transaction by calling transaction function', async () => {
    await inbox.methods
      .setMessage('Hello Contract')
      .send({ from: accounts[1], gas: '1000000' })
    const message = await inbox.methods.message().call()
    assert.equal(message, 'Hello Contract')
  })
})
