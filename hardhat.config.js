require("@nomicfoundation/hardhat-toolbox");
require('solidity-coverage')
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ]
  },
};
