import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function ContactHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body, query } = req;
  if (req.method == 'OPTIONS') {
    res.setHeader('Allow', 'POST');
    return res.status(202).json({});
  }
  switch (method) {
    case 'POST':
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const contact = await prisma.signup_Contact.create({
          data: {
            firstName: body.firstName,
            lastName: body.lastName,
            purpose: body.purpose,
            message: body.message,
            email: body.email,
            phone: body.phone,
            checkUpdatesReceived: body.checkUpdatesReceived,
          },
        });
        res.status(200).json(contact);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    case 'GET':
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        if (query.keyword) {
          const contactRequests = await prisma.signup_Contact.findMany({
            where: {
              OR: [
                { firstName: { contains: query.keyword as string } },
                { lastName: { contains: query.keyword as string } },
                { phone: { contains: query.keyword as string } },
                { message: { contains: query.keyword as string } },
                { email: { contains: query.keyword as string } },
              ],
            },
            orderBy: { createdAt: 'desc' },
          });
          res.status(200).json(contactRequests);
        } else {
          const contactRequests = await prisma.signup_Contact.findMany({ orderBy: { createdAt: 'desc' } });
          res.status(200).json(contactRequests);
        }
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
  }
}
