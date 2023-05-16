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
        const user = await prisma.playerRegistration.findUnique({ where: { id: query.id as string } });
        res.status(200).json(user);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    case 'PATCH': {
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const updatedUser = await prisma.playerRegistration.update({
          where: {
            id: query.id as string,
          },
          data: {
            ...body,
          },
        });
        res.status(200).json({ updatedUser } as any);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    }
  }
}
