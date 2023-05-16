import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
const prisma = new PrismaClient();

export default async function NewsLetterHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
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
    case 'GET':
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const allNewsLetters = await prisma.newsLetter.findMany();
        res.status(200).json(allNewsLetters);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
  }
}
