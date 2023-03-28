// import
// import client from "./client";
import createPool from "./methods/createPool";

require("dotenv").config();
// const fs = require("fs");
// const algosdk = require("algosdk");

// // get accounts from mnemonic
// const creatorMnemonic =
//   "asthma genuine aunt dumb concert solar blast spy monster before sudden census denial hope cost wasp legal system angle soup evolve young guilt able width";
// // const userMnemonic =
// //   "hotel hole fox quit trend manage universe name sketch maximum toast normal develop favorite actual bean extra husband casual acquire seminar float moment ability nose";
// const creatorAccount = algosdk.mnemonicToSecretKey(creatorMnemonic);
// // const userAccout = algosdk.mnemonicToSecretKey(userMnemonic);
// const creatorSecret = creatorAccount.sk;
// const creatorAddress = creatorAccount.addr;
// // const sender = userAccout.addr;a
// // Generate Account
// const enclave = algosdk.generateAccount();
// const enclavekey = enclave.sk;
// const mnemonic = algosdk.secretKeyToMnemonic(secretkey);
// console.log("mnemonic " + mnemonic);
// console.log("address " + account1.addr);
createPool();
