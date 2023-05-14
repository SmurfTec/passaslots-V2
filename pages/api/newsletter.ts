import { NewsLetter, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'micro-cors';
import { RequestHandler } from 'next/dist/server/next';

const prisma = new PrismaClient();

const cors = Cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
});

async function NewsLetterHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      try {
        const newsLetter = await prisma.newsLetter.create({
          data: {
            email: body.email,
          },
        });
        res.status(200).json(newsLetter);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default cors(NewsLetterHandler as RequestHandler);
