import { PrismaClient, blogs } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function BlogsHandler(req: NextApiRequest, res: NextApiResponse<blogs | { message: string }>) {
  const { method, body } = req;
  switch (method) {
    case 'GET':
      try {
        const blogs = await prisma.blogs.findMany({ where: { isDeleted: false } });

        res.status(200).json(blogs as any);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    case 'POST': {
      try {
        const blogs = await prisma.blogs.create({
          data: {
            title: body.title,
            description: body.description,
            publishedOn: body.publishedOn,
            isDeleted: false,
          },
        });
        res.status(200).json(blogs);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
    }

    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
