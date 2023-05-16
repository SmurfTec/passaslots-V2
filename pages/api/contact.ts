import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as corsMiddleware from '../../middlewares';

const prisma = new PrismaClient();

export default async function ContactHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      try {
        const contact = await prisma.signup_Contact.create({
          data: {
            firstName: body.firstName,
            lastName: body.lastName,
            purpose: body.purpose,
            message: body.message,
            email: body.email,
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
