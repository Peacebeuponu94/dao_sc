require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-web3");

require('dotenv').config();
require('solidity-coverage');
const {accounts} = require('./test-wallets.js');

module.exports = {
  defaultNetwork: 'hardhat',

  networks: {
    develop: {
      url: 'http://127.0.0.1:8545',
      gas: 6000000,
      timeout: 20000,
    },
    hardhat: {
      accounts: accounts,
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.7.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
    ]
  },

  paths: {
    sources: './contracts',
    tests: './test',
  },

  mocha: {
    timeout: 0
  }
};

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (INFURA_API_KEY != undefined && PRIVATE_KEY != undefined) {
  module.exports.networks.kovan = {
    url: `https://kovan.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [PRIVATE_KEY],
    timeout: 20000
  };

  module.exports.networks.rinkeby = {
    url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [PRIVATE_KEY],
    timeout: 20000
  };

  module.exports.networks.ropsten = {
    url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [PRIVATE_KEY],
    timeout: 20000
  };

  module.exports.networks.mainnet = {
    url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [PRIVATE_KEY],
    timeout: 20000
  };
}
