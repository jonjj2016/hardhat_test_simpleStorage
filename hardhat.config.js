require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_IPS_URL = process.env.GOERLI_IPS_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: GOERLI_IPS_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
}
