import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as corsMiddleware from '../../middlewares';

const prisma = new PrismaClient();

export default async function ContactHandler(req: NextApiRequest, res: NextApiResponse<any>) {
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
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export const middleware = [corsMiddleware];
