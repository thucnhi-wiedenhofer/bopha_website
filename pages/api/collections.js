import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*  Function to display galery */
export default async function handler(req, res) {
    const collections = await prisma.galery.findMany();
    res.status(200).json(collections);
  }