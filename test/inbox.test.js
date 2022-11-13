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
describe('Car', () => {
  it('parking the car', () => {
    const car = new Car()
    assert.equal(car.park(), 'stopped')
  })
  it('car is driving', () => {
    const car = new Car()
    assert(car.drive(), 'driving')
  })
})
