
const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/') //testnet
const web3 = new Web3('https://bsc-dataseed.binance.org/') //Mainnet

// Variables definition
const privKey ='e60f889abd8737698974d2be95b0cc297d34e369a24be08609bff9a45358a97a'; // Genesis private key
const addressFrom = '0x2be667AC971E30CC0fd11E03e74A0C2E765818a6';
const addressTo = '0x0E070213fe1Da415896a6cff2A8Db90199f067B1'; // Change addressTo


// Create 
const deploy = async () => {
   console.log(
      `Attempting to make transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei('0.01', 'ether'),
         gas: 21000,
      },
      privKey
   );

   // Deploy transaction
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );
};

deploy(); 
