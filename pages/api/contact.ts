import { PrismaClient, Signup_Contact } from '@prisma/client';
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
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
export default cors(ContactHandler as RequestHandler);
