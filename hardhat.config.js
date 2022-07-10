/* hardhat.config.js */
require('@nomiclabs/hardhat-waffle');
require('hardhat-contract-sizer');
const fs = require('fs');
const privateKey =
  'fbad5b495a37387d8d4278fbf8c7cf87728c787f0487a283b78b930991132192';
const projectId = '8b7ba5517c414450a93ec7334975a7fe';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    // hardhat: {
    //   throwOnTransactionFailures: true,
    //   throwOnCallFailures: true,
    //   allowUnlimitedContractSize: true,
    //   blockGasLimit: 0x1fffffffffffff,
    //   // accounts: accounts()
    // },
    //  unused configuration commented out for now
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      allowUnlimitedContractSize: true,

      // url: "https://goerli.infura.io/v3/8b7ba5517c414450a93ec7334975a7fe",
      accounts: [privateKey],
    },
    mainet: {
      url: `https://palm-mainnet.infura.io/v3/${projectId}`,
      // accounts: [privateKey],
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c',
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
      // network_id: 42,
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
