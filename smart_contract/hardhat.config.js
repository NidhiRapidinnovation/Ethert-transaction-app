require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/D8XZJUjQJ5_soNY8rAg4RsJILMV1CWkd',
      accounts: ['3086418509a520f5d67ded74c331ad63aef66803caf7838442dac40d2cd54195'],
    },
  },
};