

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

export default async (req:NextApiRequest, res:NextApiResponse) => {

  if (req.method === "GET") {
    const books = await prisma.books.findMany({
    });
    res.json(books);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }


}