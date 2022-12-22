import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const requestAirdrop = async (
  connection: Connection,
  keypair: Keypair
) => {
  let airdropSignature = await connection.requestAirdrop(
    keypair.publicKey,
    LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(airdropSignature);
  let balance = await connection.getBalance(keypair.publicKey);
  console.log(`balance: ${balance}`);
};
