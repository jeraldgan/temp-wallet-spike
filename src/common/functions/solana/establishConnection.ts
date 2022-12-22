import * as solanaWeb3 from "@solana/web3.js";

export const establishConnection = async () => {
  const rpcUrl = "https://api.devnet.solana.com";
  const connection = new solanaWeb3.Connection(rpcUrl, "confirmed");
  console.log("Connection to cluster established:", rpcUrl);
  return connection;
};
