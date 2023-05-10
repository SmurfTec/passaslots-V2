import { PrismaClient, blogs } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function BlogsHandler(req: NextApiRequest, res: NextApiResponse<blogs | { message: string }>) {
  const { method, body, query } = req;
  switch (method) {
    case 'GET': {
      try {
        const blog = await prisma.blogs.findUnique({ where: { id: query.id as string } });
        res.status(200).json({ blog } as any);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    }
    case 'PATCH': {
      try {
        const updatedBlog = await prisma.blogs.update({
          where: {
            id: query.id as string,
          },
          data: {
            ...body,
          },
        });
        res.status(200).json({ updatedBlog } as any);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    }
    case 'DELETE': {
      try {
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
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
