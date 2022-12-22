import { Connection } from "@solana/web3.js";

export const getRecentBlock = async (connection: Connection) => {
  const Info = await connection.getEpochInfo();
  console.log("-----------------\n", Info);
};
