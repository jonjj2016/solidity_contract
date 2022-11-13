const assert = require('assert')
const ganache = require('ganache')
const Web3 = require('web3')
const fs = require('fs')

const web3 = new Web3(ganache.provider())

const abi = fs.readFileSync('./contracts_Inbox_sol_Inbox.abi', 'utf-8')
const biteCode = fs.readFileSync('./contracts_Inbox_sol_Inbox.bin', 'utf-8')

let inbox
beforeEach(async () => {
  // Get a list of all accounts
  // use one of those accounts to deploy the contract
  const accounts = await web3.eth.getAccounts()

  inbox = await new web3.eth.Contract(JSON.parse(abi))
    .deploy({
      data: biteCode,
    })
    .send({ from: accounts[0], gas: '1000000' })
})

describe('Inbox Contract test', () => {
  it('deploying contract', () => {
    assert.ok(inbox.options.address)
  })
})
