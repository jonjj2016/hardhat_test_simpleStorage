require('hardhat-gas-reporter')
require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('./tasks/block-number')
/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_IPS_URL = process.env.GOERLI_IPS_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  solidity: '0.8.17',
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  networks: {
    goerli: {
      url: GOERLI_IPS_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: 'Reports/gas-report.txt',
  },
}
