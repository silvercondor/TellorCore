require('dotenv').config()
var HDWalletProvider = require("truffle-hdwallet-provider");
//var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")


//Nick zkGX3Vf8njIXiHEGRueB
//Brenda PM3RtHbQjHxWydyhDi37
//var mnemonic = "dda candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
//ganache cli -m 

var mnemonic = process.env.ETH_MNEMONIC;
var accessToken = process.env.INFURA_ACCESS_TOKEN;
var Mainnet_alchemy = process.env.main_alchemy;
var Rinkeby_alchemy = process.env.rinkeby_alchemy;

/*const NonceSubprovider = require("web3-provider-engine/subproviders/nonce-tracker"); */
const createInfuraProvider = (secret, infuraUrl) => { 
  const provider = new HDWalletProvider(secret, infuraUrl); 
  provider.engine.addProvider(new NonceSubprovider()); 
  return provider; }


/*  async function getNonce(wallet) {
  var nonceTracker = new NonceTrackerSubprovider()
  try {  provider = wallet
        await provider.engine._providers.unshift(nonceTracker)
        await nonceTracker.setEngine(provider.engine)
        return provider
    console.log("try");
  } catch(e){
    throw Error(e);
  }
}*/

/*const Promise = require('bluebird');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(<WEB3_PROVIDER_URL>));

if (typeof web3.eth.getAccountsPromise === 'undefined') {
  Promise.promisifyAll(web3.eth, { suffix: 'Promise' });
}
*/
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gasPrice: 1, // Specified in Wei
      gas:4700000
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+ accessToken),
      network_id: 3,
      gas: 4700000,
      gasPrice: 17e9
    },

/*    mainnet: {
      network_id: "1",
      provider: function () {
        var wallet = new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/' + accessToken)
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 1,
      gas: 4700000,
      gasPrice: 7000000000
    },*/

/*      mainnet: {
      network_id: "1",
      provider: function () {
        var wallet = new HDWalletProvider(mnemonic, 'https://eth-mainnet.alchemyapi.io/jsonrpc/'+ Mainnet_alchemy)
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 1,
      gas: 4700000,
      gasPrice: 8000000000
    },*/

/*    mainnet: {
      network_id: "1",
      provider: function () {
        var wallet = new HDWalletProvider(mnemonic, 'https://gladly-fond-horse.quiknode.io/8faab5bf-73f6-4f72-a8df-bceb75f0f671/8K5s-t4qrXAHuiIZMLRjNQ==/')
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 1,
      gas: 4700000,
      gasPrice: 3000000000
    },*/

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
      gas: 4700000,
      gasPrice: 4000000000
    }*/

/*    rinkeby: {
      network_id: "4",
      provider: function () {
        var wallet = new HDWalletProvider(mnemonic, 'https://eth-rinkeby.alchemyapi.io/jsonrpc/' + Rinkeby_alchemy)
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 4,
      gas: 7000000,
      gasPrice: 4000000000
    }*/

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/7f11ed6df93946658bf4c817620fbced");
      },
      network_id: 4,
      gas: 7000000,
      gasPrice: 7000000000
    }

/*    rinkeby: {
      network_id: "4",
      provider: function () {
        //var wallet = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/7f11ed6df93946658bf4c817620fbced")
        //getNonce(wallet)
        createInfuraProvider(mnemonic, https://rinkeby.infura.io/v3/7f11ed6df93946658bf4c817620fbced")
      },
      network_id: 4,
      gas: 7000000,
      gasPrice: 4000000000
    }
*/
/*    rinkeby: {
      network_id: "4",
      provider: function () {
        var wallet = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/7f11ed6df93946658bf4c817620fbced")
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 4,
      gas: 7000000,
      gasPrice: 4000000000
    }*/
    
    /*  rinkeby: {
        provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/72bb9acde80d4a9ca803274f42f77612")
      },
      network_id: 4
    }  */


  }
};






