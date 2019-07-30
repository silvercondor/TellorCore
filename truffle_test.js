require('dotenv').config()
var HDWalletProvider = require("truffle-hdwallet-provider");
var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")


//ganache-cli -m "nick lucian brenda kevin sam fiscal patch fly damp ocean produce wish" -l 10000000
//ganache-cli -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"
//HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/72bb9acde80d4a9ca803274f42f77612")
var mnemonic = process.env.ETH_MNEMONIC;
var accessToken = process.env.INFURA_ACCESS_TOKEN;
var Mainnet_alchemy = process.env.main_alchemy;
var Rinkeby_alchemy = process.env.rinkeby_alchemy;

//truffle migrate --network rinkeby

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 10000000,
      websockets: true
    },
    dev2: {
      host: "localhost",
      port: 8546,
      network_id: "*" // Match any network id
    },
    poa:  {
      provider: new HDWalletProvider(mnemonic, "http://40.117.249.181:8545"),
      network_id:"*",
      gas: 4612388,
      gasPrice: 17e9
    },
    test:  {
      provider: new HDWalletProvider(mnemonic, "http://localhost:8545"),
      network_id:"*",
      gas: 4612388,
      gasPrice: 17e9
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io"),
      network_id: 3,
      gas: 4612388
    }/*,
    rinkeby: {
        provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/72bb9acde80d4a9ca803274f42f77612")
      },
      network_id: 4
    } */  
/*    rinkeby: {
      network_id: "4",
      provider: function () {
        var wallet = new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/' + accessToken)
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 4,
      gas: 10000000,
      gasPrice: 5000000000
    },*/

  }
};