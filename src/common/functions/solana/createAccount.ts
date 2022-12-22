import { PrismaClient } from "@prisma/client";
import { Connection, Keypair } from "@solana/web3.js";

const prisma = new PrismaClient();

export const createAccount = async (
  connection: Connection
): Promise<Keypair> => {
  const keyPair = Keypair.generate();

  console.log("Public Key:", keyPair.publicKey.toString());
  console.log("Secret Key:", keyPair.secretKey);

  return keyPair;
};
