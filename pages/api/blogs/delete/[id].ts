import { PrismaClient, blogs } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function BlogsHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;
  switch (method) {
    case 'PATCH': {
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const deletedBlog = await prisma.blogs.update({
          where: {
            id: query.id as string,
          },
          data: {
            isDeleted: true,
          },
        });
        res.status(200).json(deletedBlog);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    }
  }
}
