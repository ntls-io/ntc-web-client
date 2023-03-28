require("dotenv").config();
const algosdk = require("algosdk");

// Connect your client
const algodToken =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const baseServer = "http://localhost";
const port = "4001";
// const headers = { "X-API-Key": process.env.REACT_APP_API_KEY };

// console.log(process.env);
const client = new algosdk.Algodv2(algodToken, baseServer, port);

export default client;
