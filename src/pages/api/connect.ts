import { PublicKey } from "@solana/web3.js";
import { NextApiRequest } from "next";

import { establishConnection } from "@/common/functions/solana/establishConnection";

const handler = async (req: NextApiRequest, res) => {
  const connection = await establishConnection();
  // getRecentBlock(connection);
  // const keypair = await createAccount(connection);
  // requestAirdrop(connection, keypair);
  let balance = await connection.getBalance(
    new PublicKey("FZKQFjjwezSuQLACy3rSAnqnrDxK68rZQHxqW653gAo4")
  );
  console.log(`balance: ${balance}`);

  res.status(200).json({});
};

export default handler;
