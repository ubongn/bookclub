
import { NextApiRequest, NextApiResponse } from 'next';
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default async (req:NextApiRequest, res:NextApiResponse) => {

  const results = await prisma.categories.findMany({
     
  })




res.json(results)

}