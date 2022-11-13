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
let car
beforeEach(() => {
  car = new Car()
})

describe('Car', () => {
  it('parking the car', () => {
    assert.equal(car.park(), 'stopped')
  })
  it('car is driving', () => {
    assert(car.drive(), 'driving')
  })
})
