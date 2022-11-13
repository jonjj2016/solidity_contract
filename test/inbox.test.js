const assert = require('assert')
const ganache = require('ganache')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())

class Car {
  park() {
    return 'stopped'
  }
  drive() {
    return 'driving'
  }
}
let account
beforeEach(async () => {
  // Get a list of all accounts
  // use one of those accounts to deploy the contract
  const accounts = await web3.eth.getAccounts()
  account = accounts[0]
})

describe('Car', () => {
  it('deploying contract', () => {
    console.log(account)
  })
})
