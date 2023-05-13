import { PlayerRegistration, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'micro-cors';
import { RequestHandler } from 'next/dist/server/next';

const prisma = new PrismaClient();

const cors = Cors({
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
});

async function ContactHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      try {
        const contact = await prisma.playerRegistration.create({
          data: {
            email: body.email,
            name: body.name,
            phone: body.phone,
          },
        });
        res.status(200).json(contact);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default cors(ContactHandler as RequestHandler);
