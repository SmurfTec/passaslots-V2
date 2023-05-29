import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function ContactHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body, query } = req;
  switch (method) {
    case 'GET':
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        if (query.keyword) {
          const allUsers = await prisma.playerRegistration.findMany({
            where: {
              OR: [
                {
                  email: { contains: query.keyword as string },
                },
                {
                  name: { contains: query.keyword as string },
                },
                {
                  phone: { contains: query.keyword as string },
                },
              ],
            },
          });
          res.status(200).json(allUsers);
        } else {
          const allUsers = await prisma.playerRegistration.findMany();
          res.status(200).json(allUsers);
        }
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
  }
}
