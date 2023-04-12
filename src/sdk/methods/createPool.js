require("dotenv").config();

// const { createAppTxn } = require("../transactions/createTxns");

const algosdk = require("algosdk");

// CREATE APP
// create unsigned transaction
const issueDeployContract = async (signedTxn, client, txId) => {
  try {
    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();
    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // Get the completed Transaction
    console.log(
      "Transaction " +
        txId +
        " confirmed in round " +
        confirmedTxn["confirmed-round"]
    );
    // display results
    const transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();
    const appId = transactionResponse["application-index"];
    console.log("Created new app-id: ", appId);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { issueDeployContract };
// const issueIntialiseDataPool = async creator => {
//   try {
//     // First transaction - Fund App
//     const appArgs = [];

//     const params = await client.getTransactionParams().do();
//     const onComplete = algosdk.OnApplicationComplete.NoOpOC;

//     params.fee = 1000;
//     params.flatFee = true;

//     const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
//       from: creator.addr,
//       suggestedParams: params,
//       onComplete: onComplete
//     });
//     // console.log(txnAndId[1]);
//     const txId = txn.txID().toString();
//     // Sign the transaction, here we have to intervene
//     const creatorSecret = creator.sk;
//     const signedTxn = txn.signTxn(creatorSecret);
//     console.log("Signed transaction with txID: %s", txId);

//     // Submit the transaction
//     await client.sendRawTransaction(signedTxn).do();
//     // Wait for transaction to be confirmed
//     const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

//     // Get the completed Transaction
//     console.log(
//       "Transaction " +
//         txId +
//         " confirmed in round " +
//         confirmedTxn["confirmed-round"]
//     );
//     // display results
//     const transactionResponse = await client
//       .pendingTransactionInformation(txId)
//       .do();
//     const appId = transactionResponse["application-index"];
//     console.log("Created new app-id: ", appId);
//   } catch (err) {
//     console.log(err);
//   }
// };
// module.exports.deployContractTxn = deployContractTxn;

// Rounds
// const waitForRound = async round => {
//   const last_round = await client.status().do();
//   let lastRound = last_round["last-round"];
//   console.log("Waiting for round " + lastRound);
//   while (lastRound < round) {
//     lastRound += 1;
//     const block = await client.statusAfterBlock(lastRound).do();
//     console.log("Round " + block["last-round"]);
//   }
// };

// convert 64 bit integer i to byte string
// const intToBytes = integer => {
//   return integer.toString();
// };

// OPTIN
// create unsigned transaction
// const Optin = async (sender, index) => {
//   try {
//     let params = await client.getTransactionParams().do();
//     params.fee = 1000;
//     params.flatFee = true;

//     let txn = algosdk.makeApplicationOptInTxn(sender, params, index);
//     let txId = txn.txID().toString();
//     // sign, send, await
//     // Sign the transaction
//     let signedTxn = txn.signTxn(userAccout.sk);
//     console.log("Signed transaction with txID: %s", txId);

//     // Submit the transaction
//     await client.sendRawTransaction(signedTxn).do();
//     // Wait for transaction to be confirmed
//     const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
//     console.log("confirmed" + confirmedTxn);

//     //Get the completed Transaction
//     console.log(
//       "Transaction " +
//         txId +
//         " confirmed in round " +
//         confirmedTxn["confirmed-round"]
//     );
//     // display results
//     // display results
//     let transactionResponse = await client
//       .pendingTransactionInformation(txId)
//       .do();
//     console.log(
//       "Opted-in to app-id:",
//       transactionResponse["txn"]["txn"]["apid"]
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

//  CALL(NOOP)
// call application with arguments
// const noop = async (sender, index) => {
//   try {
//     let vote = "vote";
//     let choice = localStorage.getItem("candidate");
//     console.log("choice is " + choice);
//     const appArgs = [];
//     appArgs.push(
//       new Uint8Array(Buffer.from(vote)),
//       new Uint8Array(Buffer.from(choice))
//     );
//     let params = await client.getTransactionParams().do();
//     params.fee = 1000;
//     params.flatFee = true;

//     // create unsigned transaction
//     let txn = algosdk.makeApplicationNoOpTxn(sender, params, index, appArgs);

//     let txId = txn.txID().toString();
//     // Sign the transaction
//     let signedTxn = txn.signTxn(userAccout.sk);
//     console.log("Signed transaction with txID: %s", txId);

//     // Submit the transaction
//     await client.sendRawTransaction(signedTxn).do();
//     // Wait for transaction to be confirmed
//     const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
//     console.log("confirmed" + confirmedTxn);

//     //Get the completed Transaction
//     console.log(
//       "Transaction " +
//         txId +
//         " confirmed in round " +
//         confirmedTxn["confirmed-round"]
//     );

//     // display results
//     let transactionResponse = await client
//       .pendingTransactionInformation(txId)
//       .do();
//     console.log("Called app-id:", transactionResponse["txn"]["txn"]["apid"]);
//     if (transactionResponse["global-state-delta"] !== undefined) {
//       console.log(
//         "Global State updated:",
//         transactionResponse["global-state-delta"]
//       );
//     }
//     if (transactionResponse["local-state-delta"] !== undefined) {
//       console.log(
//         "Local State updated:",
//         transactionResponse["local-state-delta"]
//       );
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// READ STATE
// read local state of application from user account
// const readLocalState = async index => {
//   try {
//     let accountInfoResponse = await client
//       .accountInformation(userAccout.addr)
//       .do();
//     let localState = accountInfoResponse["apps-local-state"];
//     return localState.map(item => {
//       if (item["id"] == index) {
//         console.log("User's local state:" + item.id);
//         let localStateItem =
//           accountInfoResponse["apps-local-state"][item]["key-value"];
//         localStateItem.map(local => {
//           console.log(local);
//           return local;
//         });
//       }
//       return item;
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// read global state of application
// const readGlobalState = async index => {
//   try {
//     let applicationInfoResponse = await client.getApplicationByID(index).do();
//     let globalState = applicationInfoResponse["params"]["global-state"];
//     return globalState.map(state => {
//       return state;
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// UPDATE
// create unsigned transaction
// const update = async (sender, index, approvalProgram, clearProgram) => {
//   try {
//     let params = await client.getTransactionParams().do();
//     params.fee = 1000;
//     params.flatFee = true;

//     let txn = algosdk.makeApplicationUpdateTxn(
//       sender,
//       params,
//       index,
//       approvalProgram,
//       clearProgram
//     );
//     // sign, send, await
//     let txId = txn.txID().toString();
//     // Sign the transaction
//     let signedTxn = txn.signTxn(creatorAccount.sk);
//     console.log("Signed transaction with txID: %s", txId);

//     // Submit the transaction
//     await client.sendRawTransaction(signedTxn).do();
//     // Wait for transaction to be confirmed
//     const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
//     console.log("confirmed" + confirmedTxn);

//     //Get the completed Transaction
//     console.log(
//       "Transaction " +
//         txId +
//         " confirmed in round " +
//         confirmedTxn["confirmed-round"]
//     );

//     // display results
//     let transactionResponse = await client
//       .pendingTransactionInformation(txId)
//       .do();
//     let appId = transactionResponse["txn"]["txn"].apid;
//     console.log("Updated app-id: ", appId);
//   } catch (err) {
//     console.log(err);
//   }
// };

// CLOSE OUT
// create unsigned transaction
// const closeOut = async (sender, index) => {
//   try {
//     let params = await client.getTransactionParams().do();
//     params.fee = 1000;
//     params.flatFee = true;
//     let txn = algosdk.makeApplicationCloseOutTxn(sender, params, index);
//     // sign, send, await
//     let txId = txn.txID().toString();
//     // Sign the transaction
//     let signedTxn = txn.signTxn(userAccout.sk);
//     console.log("Signed transaction with txID: %s", txId);

//     // Submit the transaction
//     await client.sendRawTransaction(signedTxn).do();
//     // Wait for transaction to be confirmed
//     const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
//     console.log("confirmed" + confirmedTxn);

//     //Get the completed Transaction
//     console.log(
//       "Transaction " +
//         txId +
//         " confirmed in round " +
//         confirmedTxn["confirmed-round"]
//     );

//     // display results
//     let transactionResponse = await client
//       .pendingTransactionInformation(txId)
//       .do();
//     console.log(
//       "Closed out from app-id:",
//       transactionResponse["txn"]["txn"]["apid"]
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

// DELETE
// create unsigned transaction
// const deleteApp = async (sender, index) => {
//   try {
//     let params = await client.getTransactionParams().do();
//     params.fee = 1000;
//     params.flatFee = true;
//     let txn = algosdk.makeApplicationDeleteTxn(sender, params, index);
//     // sign, send, await
//     let txId = txn.txID().toString();
//     // Sign the transaction
//     let signedTxn = txn.signTxn(creatorAccount.sk);
//     console.log("Signed transaction with txID: %s", txId);

//     // Submit the transaction
//     await client.sendRawTransaction(signedTxn).do();
//     // Wait for transaction to be confirmed
//     const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
//     console.log("confirmed" + confirmedTxn);

//     //Get the completed Transaction
//     console.log(
//       "Transaction " +
//         txId +
//         " confirmed in round " +
//         confirmedTxn["confirmed-round"]
//     );

//     // display results
//     let transactionResponse = await client
//       .pendingTransactionInformation(txId)
//       .do();
//     let appId = transactionResponse["txn"]["txn"].apid;
//     console.log("Deleted app-id: ", appId);
//   } catch (err) {
//     console.log(err);
//   }
// };

// CLEAR STATE
// create unsigned transaction
// const clearState = async (sender, index) => {
//   try {
//     let params = await client.getTransactionParams().do();
//     params.fee = 1000;
//     params.flatFee = true;
//     let txn = algosdk.makeApplicationClearStateTxn(sender, params, index);
//     let txId = txn.txID().toString();
//     // sign, send, await
//     let signedTxn = txn.signTxn(userAccout.sk);
//     console.log("Signed transaction with txID: %s", txId);

//     // Submit the transaction
//     await client.sendRawTransaction(signedTxn).do();
//     // Wait for transaction to be confirmed
//     const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
//     console.log("confirmed" + confirmedTxn);

//     //Get the completed Transaction
//     console.log(
//       "Transaction " +
//         txId +
//         " confirmed in round " +
//         confirmedTxn["confirmed-round"]
//     );
//     // display results
//     let transactionResponse = await client
//       .pendingTransactionInformation(txId)
//       .do();
//     let appId = transactionResponse["txn"]["txn"].apid;
//     console.log("Cleared local state for app-id: ", appId);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const createPool = async () => {
// const accountInfo = await client.accountInformation(creatorAddress).do();
// console.log("Account balance: %d microAlgos", accountInfo.amount);
// configure registration and voting period
// let status = await client.status().do();
// console.log(status);
// let RegBegin = status["last-round"] + 10;
// let regBegin = status["time-since-last-round"] + 60;
// let RegEnd = RegBegin + 10;
// let VoteBegin = RegEnd + 10;
// let VoteEnd = VoteBegin + 10;

// const regTime = `Registration rounds: ${RegBegin} to ${RegEnd}`;
// const voteTime = `Vote rounds: ${VoteBegin} to ${VoteEnd}`;
// localStorage.setItem("start", regTime);
// localStorage.setItem("end", voteTime);

// console.log(`Registration rounds: ${RegBegin} to ${RegEnd}`);
// console.log(`Vote rounds: ${VoteBegin} to ${VoteEnd}`);

// create list of bytes for app args
// const appArgs = [];

// console.log(
//   appArgs.push(
//     new Uint8Array(Buffer.from(intToBytes(RegBegin))),
//     new Uint8Array(Buffer.from(intToBytes(RegEnd))),
//     new Uint8Array(Buffer.from(intToBytes(VoteBegin))),
//     new Uint8Array(Buffer.from(intToBytes(VoteEnd)))
//   )
// );

// create new application
// const appId = createApp(
//   creatorAddress,
//   compiledApprovalProgram,
//   compiledClearProgram,
//   localInts,
//   localBytes,
//   globalInts,
//   globalBytes,
//   appArgs
// );

// App  id 76296212
// # wait for registration period to start
// waitForRound(regBegin);
// // console.log("Global state1 " + await readGlobalState(76484944))
// waitForRound(regBegin);

// Optin(userAccout.addr, 76645072)
// waitForRound(voteBegin)

// noop(sender, 76645072)

//  read global state of application
// const localState = await  readLocalState(client, sender,  76641532)
// console.log(localState)

// waitForRound(client, voteEnd)

// const gloablState = await readGlobalState(76645072);
// console.log(gloablState);

// Converting to base64
// var encodedString = btoa(string)

// const args = [
//   btoa("RegBegin"),
//   btoa("RegEnd"),
//   btoa("VoteBegin"),
//   btoa("VoteEnd"),
//   btoa("Creator")
// btoa("choiceA"),
// ];

// let filteredItems = [];
// gloablState.forEach(item => {
//   if (!args.includes(item.key)) {
//     filteredItems.push(item);
//   }
// });
// // const xx = Math.max.apply(Math, filteredItems.map(function(o) { return o.value.uint; }))
// let maxVote = filteredItems.reduce((max, item) =>
//   max.value.uint > item.value.uint ? max.key : item
// );
// console.log(atob(maxVote));

// closeOut(sender, 76641532)
// deleteApp(creatorAddress, 76296212)
// clearState(sender, 76641532)
// console.log(appId);
// };
// console.log(createPool());
// return(<div>hello</div>)
