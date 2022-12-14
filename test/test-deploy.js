const { ethers } = require('hardhat')
const { expect, assert } = require('chai')
require('dotenv').config()

describe('SimpleStorage', () => {
  let simpleStorage, SimpleStorageFactory
  beforeEach(async () => {
    SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
    simpleStorage = await SimpleStorageFactory.deploy()
  })
  it('Should Start with Favorite Number: 0', async () => {
    const currentValue = await simpleStorage.retrieve()
    assert(String(currentValue), '0')
  })
  // it.only('Should Update to value when we call Store: 7', async () => {
  it('Should Update to value when we call Store: 7', async () => {
    const value = '7'
    await simpleStorage.store(value)
    const currentValue = await simpleStorage.retrieve()
    assert(String(currentValue), value)
  })
  it('Adding People with addPerson function', async () => {
    const name = 'Joe'
    const favoriteNumber = '1963'
    await simpleStorage.addPerson(name, favoriteNumber)
    const usersNumber = await simpleStorage.people(0)
    assert(favoriteNumber, usersNumber.favoriteNumber)
    assert(name, usersNumber.name)
  })
})
// npx hardhat test --grep Store instead of Store we can write any string that matches description
